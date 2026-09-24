import pathlib
import re

root = pathlib.Path(r"C:\Users\Tony\Downloads\schiffy.gold\schiffy.gold")
files = [
    root / "index.html",
    root / "how" / "index.html",
    root / "vault" / "index.html",
    root / "memes" / "index.html",
]

META = (
    "$SCHIFFY trades against tokenized $GLD on Robinhood Chain; every trade stacks $SCHIFFY in the vault and pays gold back to holders, on-chain."
)
META_NEW = (
    "$SCHIFFY trades against WETH on Robinhood Chain; every trade stacks $SCHIFFY in the vault and pays WETH back to holders, on-chain."
)
DISCLAIMER = (
    "$SCHIFFY is a memecoin paired with tokenized $GLD on Robinhood Chain. It does not represent ownership of gold, and holders cannot redeem assets from the treasury."
)
DISCLAIMER_NEW = (
    "$SCHIFFY is a memecoin paired with WETH on Robinhood Chain. It does not represent ownership of WETH, and holders cannot redeem assets from the treasury."
)


def enclosing_div(text, idx):
    start = text.rfind("<div", 0, idx)
    if start < 0:
        return None
    pos = start
    depth = 0
    while pos < len(text):
        next_open = text.find("<div", pos)
        next_close = text.find("</div>", pos)
        if next_close < 0:
            return None
        if next_open != -1 and next_open < next_close:
            depth += 1
            pos = next_open + 4
        else:
            depth -= 1
            pos = next_close + len("</div>")
            if depth == 0:
                return start, pos
    return None


def remove_gld_copy_chips(text):
    removed = 0
    while True:
        i = text.find(">$GLD<")
        if i < 0:
            break
        span = enclosing_div(text, i)
        if not span:
            break
        start, end = span
        chunk = text[start:end]
        if "Copy" not in chunk and "copy.svg" not in chunk:
            # not a copy chip; skip this occurrence
            text = text[:i] + text[i:].replace(">$GLD<", ">WETH<", 1)
            continue
        if end < len(text) and text[end] == "\n":
            end += 1
        text = text[:start] + text[end:]
        removed += 1
    return text, removed


def remove_underlying(text):
    marker = "The underlying"
    i = text.find(marker)
    if i < 0:
        return text, False
    start = text.rfind("<section", 0, i)
    end = text.find("</section>", i)
    if start < 0 or end < 0:
        return text, False
    end += len("</section>")
    if end < len(text) and text[end] == "\n":
        end += 1
    return text[:start] + text[end:], True


def patch(text):
    text, chips = remove_gld_copy_chips(text)
    text, dropped = remove_underlying(text)
    text = text.replace(META, META_NEW)
    text = text.replace(DISCLAIMER, DISCLAIMER_NEW)
    text = text.replace("pays gold back to holders", "pays WETH back to holders")
    text = text.replace("Gold back to holders", "WETH back to holders")
    text = text.replace("Treasury gold", "Treasury WETH")
    text = text.replace("Gold fees pay", "WETH fees pay")
    text = text.replace("$GLD accumulated", "WETH accumulated")
    text = text.replace("$GLD distributed", "WETH distributed")
    text = text.replace("$GLD buried", "WETH buried")
    text = text.replace("$GLD held", "WETH held")
    text = text.replace("$GLD in the pair", "WETH in the pair")
    text = text.replace("<!-- -->$GLD", "WETH")
    text = text.replace("GLD splits 90/10", "WETH splits 90/10")
    text = text.replace("The gold side", "The WETH side")
    text = text.replace("of gold to holders", "of WETH to holders")
    text = text.replace("Gold pays out", "WETH pays out")
    text = text.replace(
        "Tokenized gold, claimable on-chain by $SCHIFFY holders",
        "WETH, claimable on-chain by $SCHIFFY holders",
    )
    text = text.replace(
        "Tokenized gold — the vault&#x27;s 10% of collected fees",
        "WETH — the vault&#x27;s 10% of collected fees",
    )
    text = text.replace(
        "Tokenized gold — the vault's 10% of collected fees",
        "WETH — the vault's 10% of collected fees",
    )
    text = text.replace("10% of collected gold fees", "10% of collected WETH fees")
    text = text.replace(
        "$SCHIFFY does not represent ownership of gold",
        "$SCHIFFY does not represent ownership of WETH",
    )
    text = text.replace("The dog is long gold.", "The dog trades against WETH.")
    text = re.sub(r">Long\s+gold</span", ">Paired with WETH</span", text)
    text = re.sub(
        r"Not a USD pair\. The dog trades directly against gold, on-chain, so <span[^>]*>\s*\$\s*</span\s*>\s*SCHIFFY moves with the\s*hardest money there is\.",
        "Not a USD pair. The dog trades directly against WETH, on-chain.",
        text,
    )
    text = re.sub(
        r"tokenized\s*<span[^>]*>\s*\$\s*</span\s*>\s*GLD",
        "WETH",
        text,
    )
    text = re.sub(
        r"×\s*<span[^>]*>\s*\$\s*</span\s*>\s*GLD",
        "× WETH",
        text,
    )
    text = re.sub(
        r"Live ·\s*<span[^>]*>\s*\$\s*</span\s*>\s*GLD holdings",
        "Live · WETH holdings",
        text,
    )
    text = re.sub(
        r"90% of the\s*<span[^>]*>\s*\$\s*</span\s*>\s*GLD fees",
        "90% of the WETH fees",
        text,
    )
    text = text.replace('color:var(--gold-700)">$GLD</span>', 'color:var(--gold-700)">WETH</span>')
    return text, chips, dropped


for path in files:
    original = path.read_text(encoding="utf-8")
    updated, chips, dropped = patch(original)
    path.write_text(updated, encoding="utf-8")
    print(f"{path.relative_to(root)}: chips={chips} underlying={dropped} delta={len(original)-len(updated)}")

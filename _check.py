import pathlib

root = pathlib.Path(r"C:\Users\Tony\Downloads\schiffy.gold\schiffy.gold")
needles = ["GLD", "tokenized", "Tokenized", "Long gold", "long gold", "gold fees", "of gold", "ownership of gold", "The underlying", "Copy"]
out = []
for p in list(root.rglob("*.html")) + list((root / "file").rglob("*.js")):
    if p.name.startswith("_"):
        continue
    text = p.read_text(encoding="utf-8")
    for needle in needles:
        if needle == "Copy":
            # only flag copy chips next to GLD, already removed
            continue
        start = 0
        while True:
            i = text.find(needle, start)
            if i < 0:
                break
            a = max(0, i - 80)
            b = min(len(text), i + 100)
            out.append(f"{p.relative_to(root)} [{needle}]: {text[a:b].replace(chr(10), ' | ')}")
            start = i + len(needle)

# homepage snippets
html = (root / "index.html").read_text(encoding="utf-8")
for label in ["Paired", "trades against", "WETH holdings", "Treasury WETH", "paired with", "WETH fees", "How it works"]:
    i = html.find(label)
    out.append(f"HOME {label} @{i}: {html[max(0,i-40):i+120].replace(chr(10), ' | ')}")

how = (root / "how" / "index.html").read_text(encoding="utf-8")
for label in ["trades against", "WETH side", "fees collected", "Contracts", "$SCHIFFY"]:
    i = how.find(label)
    out.append(f"HOW {label} @{i}: {how[max(0,i-30):i+140].replace(chr(10), ' | ')}")

(root / "_check.txt").write_text("\n".join(out), encoding="utf-8")
print("lines", len(out))

import pathlib

root = pathlib.Path(r"C:\Users\Tony\Downloads\schiffy.gold\schiffy.gold")
html = (root / "index.html").read_text(encoding="utf-8")
how = (root / "how" / "index.html").read_text(encoding="utf-8")
out = []

def grab(text, marker, n=500, label=""):
    i = text.find(marker)
    out.append(f"\n==== {label} {marker} @{i} ====")
    if i < 0:
        return
    out.append(text[i:i+n])

grab(html, "Paired\n", 400, "home badge")
grab(html, "trades against\n", 450, "home hero")
grab(html, "0x3c934eee", 200, "home ca")
grab(html, "Not a USD pair", 300, "home step")
grab(html, "90% of the", 250, "home fees")
grab(html, "WETH buried", 120, "home buried")
grab(how, "SCHIFFY trades against", 400, "how intro")
grab(how, "claimable on-chain", 200, "how claim")
grab(how, "of WETH to holders", 180, "how net")
grab(how, "Contracts", 800, "how contracts")

(root / "_snip.txt").write_text("\n".join(out), encoding="utf-8")
print("ok")

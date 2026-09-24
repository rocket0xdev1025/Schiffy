import pathlib

root = pathlib.Path(r"C:\Users\Tony\Downloads\schiffy.gold\schiffy.gold")
files = [
    root / "vault" / "index.html",
    root / "how" / "index.html",
    root / "memes" / "index.html",
    root / "index.html",
]
needles = [
    "Tokenized gold",
    "tokenized",
    "Long gold",
    "gold fees",
    "The gold side",
    "of gold to holders",
    "Gold pays",
    "ownership of gold",
    "long gold",
    "Treasury gold",
    "Gold back",
    "Gold fees",
    "against gold",
    "The underlying",
]
out = []
for p in files:
    text = p.read_text(encoding="utf-8")
    for needle in needles:
        start = 0
        n = 0
        while True:
            i = text.find(needle, start)
            if i < 0:
                break
            n += 1
            if n <= 3:
                a = max(0, i - 60)
                b = min(len(text), i + len(needle) + 90)
                snippet = text[a:b].replace("\n", "\\n")
                out.append(f"{p.parent.name}/{p.name} [{needle}] #{n}: {snippet}")
            start = i + len(needle)
        if n:
            out.append(f"  count {needle} in {p.parent.name}: {n}")
(root / "_ctx2.txt").write_text("\n".join(out), encoding="utf-8")
print("ok", len(out))

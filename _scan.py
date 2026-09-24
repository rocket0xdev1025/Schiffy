import pathlib

root = pathlib.Path(r"C:\Users\Tony\Downloads\schiffy.gold\schiffy.gold")
needles = [
    "$GLD",
    "tokenized",
    "Tokenized gold",
    "Long gold",
    "The underlying",
    "gold fees",
    "of gold",
    "Treasury gold",
    "Gold back",
    "Gold fees",
    "gold side",
    "pays gold",
    "ownership of gold",
]
for p in root.rglob("*"):
    if p.suffix not in {".html", ".js"} or p.name.startswith("_"):
        continue
    text = p.read_text(encoding="utf-8")
    hits = {n: text.count(n) for n in needles if n in text}
    if hits:
        print(p.relative_to(root), hits)

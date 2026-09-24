import pathlib
import re

root = pathlib.Path(r"C:\Users\Tony\Downloads\schiffy.gold\schiffy.gold")
files = list(root.rglob("*.html")) + list((root / "file").rglob("*.js"))
needles = ["GLD", "tokenized", "Tokenized", "Long gold", "long gold", "gold fees", "of gold", "Treasury gold", "ownership of gold", "gold side", "pays gold", "tokenized gold"]
out = []
for p in files:
    if p.name.startswith("_"):
        continue
    text = p.read_text(encoding="utf-8")
    for needle in needles:
        start = 0
        n = 0
        while True:
            i = text.lower().find(needle.lower(), start) if False else text.find(needle, start)
            if i < 0:
                break
            n += 1
            a = max(0, i - 70)
            b = min(len(text), i + len(needle) + 90)
            snippet = text[a:b].replace("\n", "\\n")
            out.append(f"{p.relative_to(root)} [{needle}] @{i}: {snippet}")
            start = i + len(needle)
(root / "_left.txt").write_text("\n".join(out) if out else "CLEAN", encoding="utf-8")
print("hits", len(out))

import pathlib

root = pathlib.Path(r"C:\Users\Tony\Downloads\schiffy.gold\schiffy.gold")
files = [
    root / "index.html",
    root / "how" / "index.html",
    root / "vault" / "index.html",
    root / "memes" / "index.html",
]
needle = "$GLD"
out = []
for p in files:
    text = p.read_text(encoding="utf-8")
    start = 0
    n = 0
    while True:
        i = text.find(needle, start)
        if i < 0:
            break
        n += 1
        a = max(0, i - 80)
        b = min(len(text), i + 80)
        snippet = text[a:b].replace("\n", "\\n")
        out.append(f"{p.name} #{n} @{i}: {snippet}")
        start = i + len(needle)
    out.append(f"--- {p.parent.name}/{p.name} total {n} ---")
(root / "_ctx.txt").write_text("\n".join(out), encoding="utf-8")
print("wrote", len(out))

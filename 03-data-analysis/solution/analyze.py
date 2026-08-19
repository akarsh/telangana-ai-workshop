from __future__ import annotations

import csv
from pathlib import Path

DATA = Path(__file__).parents[1] / "data" / "workshop_registrations.csv"

with DATA.open(newline="", encoding="utf-8") as handle:
    rows = list(csv.DictReader(handle))

for row in rows:
    for field in ("registered", "beginners", "laptop_available"):
        row[field] = int(row[field])
    row["beginner_share"] = row["beginners"] / row["registered"]
    row["shared_computer_need"] = row["registered"] - row["laptop_available"]

highest = max(rows, key=lambda row: row["beginner_share"])
need = sum(row["shared_computer_need"] for row in rows)
support = sorted(rows, key=lambda row: (row["beginner_share"], row["shared_computer_need"]), reverse=True)[:2]

print(f"Highest beginner share: {highest['district']} ({highest['beginner_share']:.1%})")
print(f"Potential shared-computer need: {need}")
print("Priority setup support: " + ", ".join(row["district"] for row in support))
print("Limitation: registrations do not establish attendance, device quality, or individual accessibility needs.")


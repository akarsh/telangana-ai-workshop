# Final challenge — Example solution

This is a worked example for **one** of the three scenarios (College workshop registration helper) — it exists to show the shape of a complete submission, not to tell you which scenario to pick or the "right" way to solve it. Your team's brief, artifact, and reflection should be your own.

## brief.md

```
Context: Our workshop has 72 registrants across six districts with very
different beginner/laptop ratios (see 03-data-analysis/data). Facilitators
currently allocate support evenly, not by need.

Outcome: A one-page registration helper that flags which districts most
likely need extra setup support, so facilitators can allocate attention
before the workshop starts.

Inputs: 03-data-analysis/data/workshop_registrations.csv (district,
registered, beginners, laptop_available).

Constraints: Must run with no paid dependencies (Python standard library
or plain HTML/JS only). Output must be readable by a non-technical
facilitator in under a minute.

Acceptance criteria:
- Ranks districts by a combined "needs support" signal (beginner share +
  device gap), not beginner share alone.
- States its own limitations (registration counts are not attendance).
- Runs from a single command with no setup beyond Python 3.
```

## Artifact — visible output

This is a hypothetical example, not a file that exists in this repo — your team would write something like it. Picture a small Python script (e.g. `registration_helper.py`) that reads the same CSV as Lab 3, computes beginner share and device gap per district, and prints a ranked "priority support" list with the reasoning shown:

```
Priority order (beginner share, then device gap):
1. Mahabubnagar — 83.3% beginners, 3-device gap
2. Nizamabad — 77.8% beginners, 4-device gap
3. Khammam — 75.0% beginners, 4-device gap
...
Limitation: based on registrations, not confirmed attendance.
```

## Check — verification

Cross-checked every number against `03-data-analysis/solution/analyze.py`'s output (see [../03-data-analysis/explanation.md](../03-data-analysis/explanation.md)) — same district ranked highest, same device-gap total (25). Where the two disagreed on ordering below the top two, the reflection names it as an open question rather than silently picking one.

## reflection.md

```
Assumptions: registered participants attend at the rate current facilitators
expect; "laptop available" data is current, not from an old sign-up form.

Limitations: no data on venue power, individual accessibility needs, or
whether "beginner" self-selection is accurate.

Next improvement: add a day-of check-in step so the ranking uses confirmed
attendance instead of registration counts.
```

## Why this counts as complete

All four required pieces exist, each one is checkable against something independent (the CSV, the Lab 3 reference script), and the reflection names real uncertainty instead of implying the tool is more reliable than it is. That combination — not the specific scenario chosen — is what the definition of done is actually asking for.

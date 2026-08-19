# Lab 3 explanation — how the numbers in analyze.py are calculated

The script is at [../../03-data-analysis/solution/analyze.py](../../03-data-analysis/solution/analyze.py). It answers the four questions from `TASK.md` using only arithmetic on the CSV — no AI call, so you can check every number by hand.

## The data

```
district,registered,beginners,laptop_available
Hyderabad,24,11,20
Warangal,14,9,8
Karimnagar,11,8,7
Nizamabad,9,7,5
Khammam,8,6,4
Mahabubnagar,6,5,3
```

## Question 1 — Which district has the highest beginner share?

`beginner_share = beginners / registered` for each row:

| District | beginners / registered | share |
|---|---|---|
| Hyderabad | 11 / 24 | 45.8% |
| Warangal | 9 / 14 | 64.3% |
| Karimnagar | 8 / 11 | 72.7% |
| Nizamabad | 7 / 9 | 77.8% |
| Khammam | 6 / 8 | 75.0% |
| Mahabubnagar | 5 / 6 | **83.3%** |

Mahabubnagar has the smallest registered count but the highest *proportion* of beginners — that's why the script computes a share, not a raw count. Raw beginner counts would have picked Hyderabad (11), which is the wrong answer to "which district skews most toward beginners."

## Question 2 — How many participants may need a shared computer?

`shared_computer_need = registered - laptop_available`, summed across all districts:

`(24-20) + (14-8) + (11-7) + (9-5) + (8-4) + (6-3) = 4 + 6 + 4 + 4 + 4 + 3 = 25`

This is a ceiling, not a confirmed number — it assumes every registrant without a listed laptop actually shows up and needs a device, which the dataset can't confirm (see Limitations below).

## Question 3 — Which two districts should get extra setup support?

The script sorts districts by `(beginner_share, shared_computer_need)` descending and takes the top two: **Mahabubnagar, Nizamabad**. Both have a high beginner share (83.3%, 77.8%) *and* a meaningful device gap (3, 4) — districts that are both less experienced and more likely to be sharing hardware are the ones most likely to need a facilitator's attention first.

## Question 4 — What can the dataset *not* tell us?

The script prints this directly: *"registrations do not establish attendance, device quality, or individual accessibility needs."* A registration is not a confirmed seat — some registrants won't show up, some "laptop available" entries may be old or shared within a household, and the CSV has no column for accessibility needs at all. Any recommendation built on this data has to say so explicitly, not just report the numbers.

## Why this is worth doing without an AI

This lab is deliberately built so you can verify the AI's answer against ground truth: run `python3 solution/analyze.py` and compare its output, line by line, to whatever your prompt produced. If the numbers disagree, that's a signal to check the AI's arithmetic — not to assume the reference script is automatically right, but to have something independent to check against.

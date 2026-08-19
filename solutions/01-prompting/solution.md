# Lab 1 — Example solution

This is one valid way to complete the exercise, not the only correct answer — your five fields and wording will differ. Use it to check your structure and reasoning, not to copy the wording.

## Step 1 — The five-field brief (filled from prompt-template.md)

```
Context: We are organizing a one-day AI tools workshop for 70 college students
across Telangana districts, most attending in person at a shared lab.

Outcome: Write a 100-120 word WhatsApp announcement that gets students to register.

Inputs: Use only these confirmed facts:
- The workshop covers ChatGPT and Claude Code basics.
- It runs for four hours with one 15-minute break.
- A laptop or a shared lab computer both work fine.
- Registration link: [NEEDS INPUT]
- Date and venue: [NEEDS INPUT]

Constraints:
- Channel: WhatsApp broadcast message
- Tone: Encouraging, plain language, no jargon
- Length: 100-120 words
- Languages: English, with a short Telugu closing line
- Deadline: Ready to send by Thursday evening

Quality bar: Clear, factual, actionable, easy to scan. Mark missing information
with [NEEDS INPUT].
```

## Step 2 — First draft response (what the AI returned)

> 📢 Learn AI tools that actually help you build things! Join our free 4-hour workshop covering ChatGPT and Claude Code — from writing better prompts to fixing real code with AI. No experience needed, and yes, a shared lab computer works fine if you don't have a laptop. Seats are limited, so register today at [NEEDS INPUT]. See you there — ధన్యవాదాలు!
>
> *(Date and venue: [NEEDS INPUT])*

## Step 3 — Scorecard evaluation of the first draft

| Dimension | Score | Why |
|---|---|---|
| Correctness | 2 | Only uses supplied facts; missing info is marked, not invented |
| Audience fit | 1 | Enthusiastic tone fits students, but doesn't say who it's *for* (which year, which districts) |
| Usefulness | 1 | Missing date/venue makes it not-yet-sendable |
| Format | 2 | Fits WhatsApp length and style |
| Transparency | 2 | Clearly flags both missing facts |

Total: 8/10 — passes the "at least 8/10" bar, but the audience-fit gap is worth fixing.

## Step 4 — Improvement pass 1 (correctness)

No invented facts were found in the first draft, so this pass confirmed there was nothing to strip out — correctness was already a 2. (If your first draft had invented a specific date or a prize, this is the pass where you'd delete it and replace it with `[NEEDS INPUT]`.)

## Step 5 — Improvement pass 2 (usefulness)

Asked the AI to name the intended audience explicitly, since "students" was too generic for a multi-district workshop:

> 📢 Telangana college students — learn AI tools that actually help you build things! Join our free 4-hour hands-on workshop on ChatGPT and Claude Code: better prompts, real code fixes, and a final project you build yourself. No laptop? A shared lab computer works fine. Register by [NEEDS INPUT] at [NEEDS INPUT]. ధన్యవాదాలు!

New scorecard: Correctness 2, Audience fit 2, Usefulness 2, Format 2, Transparency 2 — **10/10**.

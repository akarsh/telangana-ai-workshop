# ChatGPT + Claude Code: 4-Hour Hands-On Workshop

Instructor: **Akarsh Seggemu**

This private workshop repository pairs with the Google Slides deck. Every practical block has a numbered folder, a participant task, starter material, and a definition of done.

## Workshop map

| Time | Module | Repository folder | Output |
|---|---|---|---|
| 00:00–00:20 | Orientation and AI judgment | `01-prompting/` | A clear task brief |
| 00:20–01:05 | Prompt engineering lab | `01-prompting/TASK.md` (ChatGPT) or `01-prompting/claude-code.md` (Claude) | Improved prompt + evaluated response |
| 01:05–01:45 | Research and source grounding | `02-research/` | Evidence table + cited recommendation |
| 01:45–02:15 | Data analysis | `03-data-analysis/` | Reproducible district summary |
| 02:15–02:30 | Tea break | — | — |
| 02:30–02:50 | Presentation workflow | `04-presentations/` | Five-slide story arc |
| 02:50–03:35 | AI-assisted coding lab | `05-claude-code-starter/` | Fixed, tested web app |
| 03:35–04:00 | Final challenge | `06-final-challenge/` | Brief + artifact + verification |

## Quick start

```bash
git clone <private-repository-url>
cd telangana-ai-workshop
node --test 05-claude-code-starter/test/*.test.js
python3 03-data-analysis/solution/analyze.py
```

No third-party packages are required. Exercises use Markdown, CSV, browser-native HTML/CSS/JavaScript, Node's test runner, and Python's standard library.

## Participant workflow

1. Open the folder shown on the current slide.
2. Read its `TASK.md`.
3. Give the task to ChatGPT or Claude Code using the acceptance criteria.
4. Review every proposed change.
5. Run the stated verification command.
6. Record what the AI assumed, what you checked, and what remains uncertain.

If a check fails (Lab 5 starts with one on purpose), that's useful information, not a problem — read the failure, ask your AI tool about it, and try again.

Stuck on any lab, or want to check your work? Every module has a worked example and an explanation of the reasoning behind it in [solutions/](solutions/README.md).

## On the free plan? You're fully covered

Claude Code (the CLI) needs either an Anthropic API key with billing or a paid Claude Pro/Max login. If you don't have either, don't worry — every lab in this workshop is designed to work end-to-end with the **free** web chat interfaces at [claude.ai](https://claude.ai) and [chatgpt.com](https://chatgpt.com), no signup beyond a free account required. The only difference is that the web chat can't read your files or run commands for you, so you drive that loop by hand:

1. **Copy in context.** Open the relevant `TASK.md` and paste it into the chat, followed by the contents of any file you're asking about (e.g. paste `src/readiness.js` and `test/readiness.test.js` together).
2. **Ask for the fix, not just an explanation.** Paste the task brief as your prompt so the model has the same acceptance criteria a Claude Code session would.
3. **Apply the change yourself.** Copy the corrected code the model returns back into the actual file in your editor. Review it — don't paste blindly.
4. **Verify locally, yourself.** The web chat can't run your test suite. Run the stated command in your terminal:
   ```bash
   node --test 05-claude-code-starter/test/*.test.js
   python3 03-data-analysis/solution/analyze.py
   ```
5. **Iterate.** If a test still fails, paste the failure output back into the chat and ask it to reconcile the diff with the failure.

This only changes *how* you drive the AI (manual copy/paste instead of an agent editing files directly) — the task briefs, acceptance criteria, and verification commands are identical to the Claude Code path. Lab 5's brief in [05-claude-code-starter/TASK.md](05-claude-code-starter/TASK.md) has a step-by-step version of this workflow since that lab is the one written assuming Claude Code specifically.

## Ground rules

- Do not paste confidential or personal data.
- Treat model output as a draft until verified.
- Keep tasks small and acceptance criteria visible.
- Review diffs before accepting code changes.
- Prefer evidence over confidence.

ధన్యవాదాలు • Thank you • Instructor: Akarsh Seggemu


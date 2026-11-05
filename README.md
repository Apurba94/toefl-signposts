# Signpost Language Trainer

Learn the phrases speakers use to show structure, such as 'another factor' and 'that brings us to'.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the TOEFL iBT and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `Signpost Language Trainer.exe` from the [latest release](https://github.com/Apurba94/toefl-signposts/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/toefl-signposts/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Lecturers signal where a talk is going: another factor is, that said, take for example, to sum up. Recognizing these signposts helps you follow a talk and answer organization questions. Learn nine groups of signposts and practise naming them from spoken lines.

Sections: Practice, Signposts, Progress, About.

## How to use it

1. Learn the groups in **Signposts**.
2. In **Practice**, listen to a lecture line and say what the speaker is doing.
3. In real lectures, write each signpost in your notes: it marks a new point.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.

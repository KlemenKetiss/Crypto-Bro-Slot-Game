# Crypto Bro Slot Game

- **Grid:** 5 reels x 3 rows.
- **Ways wins:** A symbol pays when it appears on at least 3 consecutive reels (left to right). Multiple matches on the same reel multiply the number of ways.
- **Symbols and payouts:** `SYMBOLS`, `SYMBOL_PAYOUTS`, weights, and force-stop sets live in `src/utils/configs/gameplay/symbols.ts` and are re-exported from `src/utils/config.ts` for imports.
- **Free spins:** Landing enough `BONUS` symbols triggers free spins. Spins during free-spin mode do not deduct balance.
- **Forced outcomes:** Dev buttons can force specific stop sets for testing and demos.

<img width="1256" height="714" alt="image" src="https://github.com/user-attachments/assets/b3d8d6e6-fd67-4df6-a9fd-f08fde235547" />

---

## How To Run Locally

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm

### Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:1234`).

### Other scripts

| Script | Description |
| --- | --- |
| `npm run build` | Build production bundle into `dist/` |
| `npm run test` | Run unit tests once (Vitest) |
| `npm run test:watch` | Run tests in watch mode |
| `npm start` | Alias for Parcel local run |
| `npm run deploy` | Publish `dist/` to `gh-pages` (after `build`) |

---

## Architecture Overview

### Entry and bootstrap

1. `src/index.html` provides `#game-container` and `#panel-root`.
2. `src/index.tsx` instantiates `new Slot()` on `window.load`.
3. `src/Slot.ts` initializes Pixi, loads `assets/manifest.json`, mounts the canvas, creates `MainView` and `CharacterController`, mounts React `GamePanel`, wires `GameController` (after the panel adapter connects), and applies responsive scaling via `ViewportLayout`.

### Configuration

- `src/utils/config.ts` re-exports modules under `src/utils/configs/`:
  - `configs/core/dimensions.ts` — canvas/game dimensions and orientation helpers.
  - `configs/gameplay/reels.ts` — reel layout and ways config.
  - `configs/gameplay/symbols.ts` — symbols, payouts, weights, force-stop sets.
  - `configs/gameplay/betsAndPanel.ts` — bet levels, panel defaults, free-spin thresholds.
  - `configs/ui/views.ts` — slot render and layout constants for Pixi views.

### Game logic (framework-agnostic)

- `src/logic/GameTypes.ts` - shared interfaces and event/state types.
- `src/logic/GameStateHandler.ts` - pure reducer for game state transitions.
- `src/logic/WinLogic.ts` - ways evaluation and payout calculation.
- `src/logic/GameController.ts` - orchestrates panel events, reels, win evaluation, and state updates.
- `src/logic/CharacterController.ts` - character Spine reactions (spin / bonus) wired from `GameController`.

### Views

- **Pixi scene:** `src/views/MainView.ts` composes `background/`, `reels/` and `reels/frame/`, `winField/`, `feature/`, and `character/` (Spine built on `spine/SpineView.ts`; models in `src/spine/`).
- **React panel:** `src/views/panel/GamePanel.tsx` and `src/adapters/ReactPanelAdapter.ts` for wallet/bet/win display, spin button, and Bro call buttons.

### Utilities and tests

- `src/utils/Helper.ts` - force-stop retrieval and fit-scale helpers.
- `src/utils/ViewportLayout.ts` - responsive scale/center utilities.
- `src/utils/SymbolGenerator.ts` - random symbol generation for non-forced spins.
- `src/utils/panelFormat.ts` - amount formatting aligned with the HTML panel.
- `src/styles.css` - global layout and panel styling (imported from `src/index.tsx`).
- `src/hooks/useBetHold.ts` - bet button long-press behavior for the panel.
- `src/tests/` - unit tests for `Helper`, `WinLogic`, and `GameStateHandler` with shared `testConfig`.

---

## Tech Stack

- PixiJS
- React + React DOM
- TypeScript
- Parcel
- Vitest
- GSAP

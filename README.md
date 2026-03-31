# Crypto Bro Slot Game

- **Grid:** 5 reels x 3 rows.
- **Ways wins:** A symbol pays when it appears on at least 3 consecutive reels (left to right). Multiple matches on the same reel multiply the number of ways.
- **Symbols and payouts:** Defined in `src/utils/config.ts` (`SYMBOLS`, `SYMBOL_PAYOUTS`).
- **Free spins:** Landing enough `BONUS` symbols triggers free spins. Spins during free-spin mode do not deduct balance.
- **Forced outcomes:** Dev buttons can force specific stop sets for testing and demos.

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

---

## Architecture Overview

### Entry and bootstrap

1. `src/index.html` provides `#game-container` and `#panel-root`.
2. `src/index.tsx` instantiates `new Slot()` on `window.load`.
3. `src/Slot.ts` initializes Pixi, loads `assets/manifest.json`, mounts the canvas, creates `MainView`, mounts React `GamePanel`, wires `GameController`, and applies responsive scaling via `ViewportLayout`.

### Configuration

- `src/utils/config.ts` is the source of truth for reel layout, bets, payouts, force-stop sets, free-spin settings, and UI/layout constants.

### Game logic (framework-agnostic)

- `src/logic/GameTypes.ts` - shared interfaces and event/state types.
- `src/logic/GameStateHandler.ts` - pure reducer for game state transitions.
- `src/logic/WinLogic.ts` - ways evaluation and payout calculation.
- `src/logic/GameController.ts` - orchestrates panel events, reels, win evaluation, and state updates.

### Views

- **Pixi scene:** `MainView` with background, reels, frame background, win field, feature view, and character spine layer.
- **React panel:** `GamePanel` + `ReactPanelAdapter` for wallet/bet/win display, spin button, and Bro call buttons.

### Utilities and tests

- `src/utils/Helper.ts` - force-stop retrieval and fit-scale helpers.
- `src/utils/ViewportLayout.ts` - responsive scale/center utilities.
- `src/utils/SymbolGenerator.ts` - random symbol generation for non-forced spins.
- `src/tests/` - unit tests for `Helper`, `WinLogic`, and `GameStateHandler` with shared `testConfig`.

---

## Tech Stack

- PixiJS
- React + React DOM
- TypeScript
- Parcel
- Vitest
- GSAP

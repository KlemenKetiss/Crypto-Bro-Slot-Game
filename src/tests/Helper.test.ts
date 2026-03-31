import { describe, it, expect } from 'vitest';
import { Helper } from '../utils/Helper';
import { FORCE_STOP_SETS, REELS_CONFIG } from '../utils/config';

const INVALID_INDEX_NEGATIVE = -1;
const INVALID_INDEX_PAST_END_OFFSET = 10;
const FIRST_VALID_INDEX = 0;

describe('Helper', () => {
  describe('getForceStops', () => {
    it('returns empty array for negative index', () => {
      expect(Helper.getForceStops(INVALID_INDEX_NEGATIVE)).toEqual([]);
    });

    it('returns empty array when index is >= FORCE_STOP_SETS length', () => {
      expect(Helper.getForceStops(FORCE_STOP_SETS.length)).toEqual([]);
      expect(Helper.getForceStops(FORCE_STOP_SETS.length + INVALID_INDEX_PAST_END_OFFSET)).toEqual(
        []
      );
    });

    it('returns the force stop set at the given valid index', () => {
      const firstSet = Helper.getForceStops(FIRST_VALID_INDEX);
      expect(Array.isArray(firstSet)).toBe(true);
      expect(firstSet.length).toBeGreaterThan(0);
      expect(firstSet).toEqual(FORCE_STOP_SETS[FIRST_VALID_INDEX]);
    });

    it('uses the 5-reel force-stop shape from config', () => {
      for (let setIndex = 0; setIndex < FORCE_STOP_SETS.length; setIndex++) {
        const set = Helper.getForceStops(setIndex);
        expect(set).toHaveLength(REELS_CONFIG.numReels);
      }
    });
  });
});

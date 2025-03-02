import { describe, it, expect } from 'vitest';
/* import { Home } from "Home"; */

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
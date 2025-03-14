import { getBugScore, getBugPriority } from '../bugScoring'

describe('getBugScore', () => {
  it('calculates bug score correctly', () => {
    expect(getBugScore(10, 10)).toBe(100)
    expect(getBugScore(5, 5)).toBe(50)
    expect(getBugScore(1, 1)).toBe(10)
  })
})

describe('getBugPriority', () => {
  it('returns Critical for high impact regardless of score', () => {
    const priority = getBugPriority(40, 9)
    expect(priority.level).toBe('Critical')
  })

  it('returns Critical for high scores', () => {
    const priority = getBugPriority(75, 8)
    expect(priority.level).toBe('Critical')
  })

  it('returns High for scores between 45-69', () => {
    const priority = getBugPriority(50, 6)
    expect(priority.level).toBe('High')
  })

  it('returns Medium for scores between 25-44', () => {
    const priority = getBugPriority(30, 4)
    expect(priority.level).toBe('Medium')
  })

  it('returns Low for scores below 25', () => {
    const priority = getBugPriority(20, 2)
    expect(priority.level).toBe('Low')
  })
}) 
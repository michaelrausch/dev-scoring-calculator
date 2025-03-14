import { getIceScore, getIcePriority } from '../iceScoring'

describe('getIceScore', () => {
  it('calculates ICE score correctly', () => {
    expect(getIceScore(10, 10, 10)).toBe(100)
    expect(getIceScore(5, 5, 5)).toBe(13)
    expect(getIceScore(1, 1, 1)).toBe(0)
  })
})

describe('getIcePriority', () => {
  it('returns Must Have for high scores', () => {
    const priority = getIcePriority(75)
    expect(priority.level).toBe('Must Have')
  })

  it('returns High Impact for scores between 45-69', () => {
    const priority = getIcePriority(50)
    expect(priority.level).toBe('High Impact')
  })

  it('returns Medium for scores between 25-44', () => {
    const priority = getIcePriority(30)
    expect(priority.level).toBe('Medium')
  })

  it('returns Low Priority for scores below 25', () => {
    const priority = getIcePriority(20)
    expect(priority.level).toBe('Low Priority')
  })
}) 
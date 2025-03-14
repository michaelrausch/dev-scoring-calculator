import { getIceScore, getIcePriority } from '../iceScoring'

describe('getIceScore', () => {
  it('calculates ICE score correctly', () => {
    expect(getIceScore(10, 10, 10)).toBe(1000)
    expect(getIceScore(5, 5, 5)).toBe(125)
    expect(getIceScore(1, 1, 1)).toBe(1)
  })
})

describe('getIcePriority', () => {
  it('returns Must Have for high scores', () => {
    const priority = getIcePriority(1000)
    expect(priority.level).toBe('Must Have')
  })

  it('returns High Impact for scores between 280-500', () => {
    const priority = getIcePriority(400)
    expect(priority.level).toBe('High Impact')
  })

  it('returns Medium for scores between 100-280', () => {
    const priority = getIcePriority(110)
    expect(priority.level).toBe('Medium')
  })

  it('returns Low Priority for scores below 100', () => {
    const priority = getIcePriority(20)
    expect(priority.level).toBe('Low Priority')
  })
}) 
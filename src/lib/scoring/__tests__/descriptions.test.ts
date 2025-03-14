import { getDescriptions } from '../descriptions'
import { strings } from '../../strings'

describe('getDescriptions', () => {
  const descriptions = getDescriptions()

  describe('getImpactDescription', () => {
    it('returns correct descriptions for different values', () => {
      expect(descriptions.getImpactDescription(10)).toBe(strings.ice.impact.levels[9])
      expect(descriptions.getImpactDescription(7)).toBe(strings.ice.impact.levels[7])
      expect(descriptions.getImpactDescription(5)).toBe(strings.ice.impact.levels[5])
      expect(descriptions.getImpactDescription(3)).toBe(strings.ice.impact.levels[3])
      expect(descriptions.getImpactDescription(1)).toBe(strings.ice.impact.levels[1])
    })
  })

  describe('getLikelihoodDescription', () => {
    it('returns correct descriptions for different values', () => {
      expect(descriptions.getLikelihoodDescription(9)).toBe(strings.bugs.likelihood.levels[9])
      expect(descriptions.getLikelihoodDescription(7)).toBe(strings.bugs.likelihood.levels[7])
      expect(descriptions.getLikelihoodDescription(5)).toBe(strings.bugs.likelihood.levels[5])
      expect(descriptions.getLikelihoodDescription(3)).toBe(strings.bugs.likelihood.levels[3])
      expect(descriptions.getLikelihoodDescription(1)).toBe(strings.bugs.likelihood.levels[1])
    })
  })
}) 
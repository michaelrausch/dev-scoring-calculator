import { strings } from '../strings'

export function getDescriptions() {
  return {
    getImpactDescription: (value: number) => {
      if (value >= 9) return strings.ice.impact.levels[9]
      if (value >= 7) return strings.ice.impact.levels[7]
      if (value >= 5) return strings.ice.impact.levels[5]
      if (value >= 3) return strings.ice.impact.levels[3]
      return strings.ice.impact.levels[1]
    },

    getConfidenceDescription: (value: number) => {
      if (value >= 9) return strings.ice.confidence.levels[9]
      if (value >= 7) return strings.ice.confidence.levels[7]
      if (value >= 5) return strings.ice.confidence.levels[5]
      if (value >= 3) return strings.ice.confidence.levels[3]
      return strings.ice.confidence.levels[1]
    },

    getEaseDescription: (value: number) => {
      if (value >= 9) return strings.ice.ease.levels[9]
      if (value >= 7) return strings.ice.ease.levels[7]
      if (value >= 5) return strings.ice.ease.levels[5]
      if (value >= 3) return strings.ice.ease.levels[3]
      return strings.ice.ease.levels[1]
    },

    getBugImpactDescription: (value: number) => {
      if (value >= 9) return strings.bugs.impact.levels[9]
      if (value >= 7) return strings.bugs.impact.levels[7]
      if (value >= 5) return strings.bugs.impact.levels[5]
      if (value >= 3) return strings.bugs.impact.levels[3]
      return strings.bugs.impact.levels[1]
    },

    getLikelihoodDescription: (value: number) => {
      if (value >= 9) return strings.bugs.likelihood.levels[9]
      if (value >= 7) return strings.bugs.likelihood.levels[7]
      if (value >= 5) return strings.bugs.likelihood.levels[5]
      if (value >= 3) return strings.bugs.likelihood.levels[3]
      return strings.bugs.likelihood.levels[1]
    }
  }
} 
import { strings } from '../strings'

type ScoreCategory = 'ice' | 'bugs'
type ScoreType = 'impact' | 'confidence' | 'ease' | 'likelihood'

interface Strings {
  ice: Record<ScoreType, { levels: Record<number, string> }>
  bugs: Record<'impact' | 'likelihood', { levels: Record<number, string> }>
}

// Remove the declare const strings line and add type assertion here
const typedStrings = strings as unknown as Strings

const THRESHOLD_LEVELS = [9, 7, 5, 3, 1]

function getDescription(category: ScoreCategory, type: ScoreType, value: number): string {
  const level = THRESHOLD_LEVELS.find(threshold => value >= threshold) ?? 1
  if (category === 'ice') {
    return typedStrings.ice[type].levels[level]
  }
  return typedStrings.bugs[type as 'impact' | 'likelihood'].levels[level]
}

export function getDescriptions() {
  return {
    getImpactDescription: (value: number) => 
      getDescription('ice', 'impact', value),

    getConfidenceDescription: (value: number) => 
      getDescription('ice', 'confidence', value),

    getEaseDescription: (value: number) => 
      getDescription('ice', 'ease', value),

    getBugImpactDescription: (value: number) => 
      getDescription('bugs', 'impact', value),

    getLikelihoodDescription: (value: number) => 
      getDescription('bugs', 'likelihood', value)
  }
} 
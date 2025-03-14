import { useState } from 'react'
import { getDescriptions } from '@/lib/scoring/descriptions'
import { getBugPriority, getBugScore } from '@/lib/scoring/bugScoring'

export function useBugScoring() {
  const [impact, setImpact] = useState(5)
  const [likelihood, setLikelihood] = useState(5)

  const bugScore = getBugScore(impact, likelihood)
  const bugPriority = getBugPriority(bugScore, impact)

  return {
    impact,
    setImpact,
    likelihood,
    setLikelihood,
    bugScore,
    bugPriority,
    ...getDescriptions(),
  }
} 
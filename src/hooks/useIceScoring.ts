import { useState } from 'react'
import { getIceScore, getIcePriority } from '@/lib/scoring/iceScoring'
import { getDescriptions } from '@/lib/scoring/descriptions'

export function useIceScoring() {
  const [impact, setImpact] = useState(5)
  const [confidence, setConfidence] = useState(5)
  const [ease, setEase] = useState(5)

  const iceScore = getIceScore(impact, confidence, ease)
  const icePriority = getIcePriority(iceScore)

  return {
    impact,
    setImpact,
    confidence,
    setConfidence,
    ease,
    setEase,
    iceScore,
    icePriority,
    ...getDescriptions(),
  }
} 
import { strings } from '../strings'

export function getIceScore(impact: number, confidence: number, ease: number): number {
  return Math.round(impact * confidence * ease)
}

export function getIcePriority(score: number) {
  if (score >= 500) return {
    level: strings.ice.priorities.mustHave.label,
    color: 'bg-red-500',
    description: strings.ice.priorities.mustHave.description
  }
  if (score >= 280) return {
    level: strings.ice.priorities.highImpact.label,
    color: 'bg-orange-500',
    description: strings.ice.priorities.highImpact.description
  }
  if (score >= 100) return {
    level: strings.ice.priorities.medium.label,
    color: 'bg-yellow-500',
    description: strings.ice.priorities.medium.description
  }
  return {
    level: strings.ice.priorities.low.label,
    color: 'bg-blue-500',
    description: strings.ice.priorities.low.description
  }
} 
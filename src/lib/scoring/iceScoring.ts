export function getIceScore(impact: number, confidence: number, ease: number): number {
  return Math.round(impact * confidence * ease / 10)
}

export function getIcePriority(score: number) {
  if (score >= 70) return {
    level: 'Must Have',
    color: 'bg-red-500',
    description: 'High-impact feature with high confidence and ease of implementation'
  }
  if (score >= 45) return {
    level: 'High Impact',
    color: 'bg-orange-500',
    description: 'Important feature that should be prioritized'
  }
  if (score >= 25) return {
    level: 'Medium',
    color: 'bg-yellow-500',
    description: 'Valuable feature to consider for upcoming sprints'
  }
  return {
    level: 'Low Priority',
    color: 'bg-blue-500',
    description: 'Feature to revisit when higher priorities are completed'
  }
} 
export function getBugScore(impact: number, likelihood: number): number {
  return Math.round((impact * 1.3 + likelihood * 0.7) * 5)
}

export function getBugPriority(score: number, impact: number) {
  if (impact >= 9) return {
    level: 'Critical',
    color: 'bg-red-500',
    description: 'Severe impact on business/users, needs immediate attention regardless of frequency'
  }
  
  if (score >= 70) return {
    level: 'Critical',
    color: 'bg-red-500',
    description: 'Severe impact on business/users, needs immediate attention'
  }
  if (score >= 45) return {
    level: 'High',
    color: 'bg-orange-500',
    description: 'Significant impact, should be fixed in next release'
  }
  if (score >= 25) return {
    level: 'Medium',
    color: 'bg-yellow-500',
    description: 'Moderate impact, plan to fix soon'
  }
  return {
    level: 'Low',
    color: 'bg-blue-500',
    description: 'Minor impact, fix when convenient'
  }
} 
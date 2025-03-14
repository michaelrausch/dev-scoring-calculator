import { strings } from '../strings';

export function getBugScore(impact: number, likelihood: number): number {
  return Math.round((impact * 1.2 + likelihood * 0.8) * 5)
}

export function getBugPriority(score: number, impact: number) {
  const { priorities } = strings.bugs;

  if (impact >= 9) return {
    level: priorities.critical.label,
    color: 'bg-red-500',
    description: priorities.critical.description
  }
  
  if (score >= 70) return {
    level: priorities.critical.label,
    color: 'bg-red-500',
    description: priorities.critical.description
  }
  if (score >= 45) return {
    level: priorities.high.label,
    color: 'bg-orange-500',
    description: priorities.high.description
  }
  if (score >= 25) return {
    level: priorities.medium.label,
    color: 'bg-yellow-500',
    description: priorities.medium.description
  }
  return {
    level: priorities.low.label,
    color: 'bg-blue-500',
    description: priorities.low.description
  }
} 
import { renderHook, act } from '@testing-library/react'
import { useBugScoring } from '../useBugScoring'

describe('useBugScoring', () => {
  it('initializes with default values', () => {
    const { result } = renderHook(() => useBugScoring())
    
    expect(result.current.impact).toBe(5)
    expect(result.current.likelihood).toBe(5)
    expect(result.current.bugScore).toBe(50) // (5 * 1.3 + 5 * 0.7) * 5 rounded
  })

  it('updates score when values change', () => {
    const { result } = renderHook(() => useBugScoring())
    
    act(() => {
      result.current.setImpact(10)
      result.current.setLikelihood(10)
    })

    expect(result.current.bugScore).toBe(100)
    expect(result.current.bugPriority.level).toBe('Critical')
  })

  it('sets Critical priority for high impact regardless of likelihood', () => {
    const { result } = renderHook(() => useBugScoring())
    
    act(() => {
      result.current.setImpact(9)
      result.current.setLikelihood(1)
    })

    expect(result.current.bugPriority.level).toBe('Critical')
  })

  it('provides correct descriptions', () => {
    const { result } = renderHook(() => useBugScoring())
    
    expect(result.current.getBugImpactDescription(9)).toBe("Critical system failure or data loss")
    expect(result.current.getLikelihoodDescription(7)).toBe("Affects majority of users (>70%)")
  })
}) 
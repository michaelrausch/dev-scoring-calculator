import { renderHook, act } from '@testing-library/react'
import { useIceScoring } from '../useIceScoring'

describe('useIceScoring', () => {
  it('initializes with default values', () => {
    const { result } = renderHook(() => useIceScoring())
    
    expect(result.current.impact).toBe(5)
    expect(result.current.confidence).toBe(5)
    expect(result.current.ease).toBe(5)
    expect(result.current.iceScore).toBe(13) // 5 * 5 * 5 / 10 rounded
  })

  it('updates score when values change', () => {
    const { result } = renderHook(() => useIceScoring())
    
    act(() => {
      result.current.setImpact(10)
      result.current.setConfidence(10)
      result.current.setEase(10)
    })

    expect(result.current.iceScore).toBe(100)
    expect(result.current.icePriority.level).toBe('Must Have')
  })

  it('provides correct descriptions', () => {
    const { result } = renderHook(() => useIceScoring())
    
    expect(result.current.getImpactDescription(9)).toBe("Game-changing feature that transforms the product")
    expect(result.current.getConfidenceDescription(7)).toBe("Strong confidence based on user feedback")
    expect(result.current.getEaseDescription(3)).toBe("Complex implementation, significant effort")
  })
}) 
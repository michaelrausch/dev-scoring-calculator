import { render, screen } from '@testing-library/react'
import { ScoreLegend } from '../ScoreLegend'
import { strings } from '@/lib/strings'

describe('ScoreLegend', () => {
  const defaultProps = {
    score: 75,
    priority: {
      level: strings.bugs.priorities.critical.label,
      color: 'bg-red-500',
      description: strings.bugs.priorities.critical.description
    },
    levels: [
      { 
        color: 'bg-red-500', 
        label: strings.bugs.priorities.critical.label, 
        range: strings.bugs.priorities.critical.range 
      },
      { 
        color: 'bg-orange-500', 
        label: strings.bugs.priorities.high.label, 
        range: strings.bugs.priorities.high.range 
      }
    ]
  }

  it('renders score and priority level', () => {
    render(<ScoreLegend {...defaultProps} />)
    
    expect(screen.getByText('75')).toBeInTheDocument()
    expect(screen.getByText(strings.bugs.priorities.critical.label)).toBeInTheDocument()
    expect(screen.getByText(strings.bugs.priorities.critical.description)).toBeInTheDocument()
  })

  it('renders all priority levels', () => {
    render(<ScoreLegend {...defaultProps} />)
    
    expect(screen.getByText(`${strings.bugs.priorities.critical.label} (${strings.bugs.priorities.critical.range})`)).toBeInTheDocument()
    expect(screen.getByText(`${strings.bugs.priorities.high.label} (${strings.bugs.priorities.high.range})`)).toBeInTheDocument()
  })
}) 
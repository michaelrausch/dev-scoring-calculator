import { render, screen } from '@testing-library/react'
import { SliderWithDescription } from '../SliderWithDescription'
import { strings } from '@/lib/strings'

describe('SliderWithDescription', () => {
  const defaultProps = {
    label: strings.ice.impact.label,
    value: 5,
    onChange: jest.fn(),
    description: strings.ice.impact.description,
    dynamicDescription: strings.ice.impact.levels[5]
  }

  it('renders all components correctly', () => {
    render(<SliderWithDescription {...defaultProps} />)
    
    expect(screen.getByText(`${strings.ice.impact.label} (1-10): 5`)).toBeInTheDocument()
    expect(screen.getByText(strings.ice.impact.description)).toBeInTheDocument()
    expect(screen.getByText(`→ ${strings.ice.impact.levels[5]}`)).toBeInTheDocument()
  })
}) 
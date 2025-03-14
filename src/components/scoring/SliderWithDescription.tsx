import { Slider } from "../ui/slider"

interface SliderWithDescriptionProps {
  label: string
  value: number
  onChange: (value: number) => void
  description: string
  dynamicDescription: string
}

export function SliderWithDescription({
  label,
  value,
  onChange,
  description,
  dynamicDescription,
}: SliderWithDescriptionProps) {
  return (
    <div>
      <label className="text-sm font-medium mb-2 block">
        {label} (1-10): {value}
      </label>
      <p className="text-sm text-muted-foreground mb-2">
        {description}
      </p>
      <p className="text-sm font-medium text-primary mb-4">
        → {dynamicDescription}
      </p>
      <Slider 
        value={[value]}
        onValueChange={([newValue]) => onChange(newValue)}
        max={10}
        min={1}
        step={1}
      />
    </div>
  )
} 
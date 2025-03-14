"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useBugScoring } from "@/hooks/useBugScoring"
import { SliderWithDescription } from "./SliderWithDescription"
import { ScoreLegend } from "./ScoreLegend"
import { strings } from "@/lib/strings"

const BUG_PRIORITY_LEVELS = [
  { color: 'bg-red-500', label: strings.bugs.priorities.critical.label, range: strings.bugs.priorities.critical.range },
  { color: 'bg-orange-500', label: strings.bugs.priorities.high.label, range: strings.bugs.priorities.high.range },
  { color: 'bg-yellow-500', label: strings.bugs.priorities.medium.label, range: strings.bugs.priorities.medium.range },
  { color: 'bg-blue-500', label: strings.bugs.priorities.low.label, range: strings.bugs.priorities.low.range },
]

export function BugScoreCard() {
  const {
    impact, setImpact,
    likelihood, setLikelihood,
    bugScore,
    bugPriority,
    getBugImpactDescription,
    getLikelihoodDescription,
  } = useBugScoring()

  const sliders = [
    {
      label: strings.bugs.impact.label,
      value: impact,
      onChange: setImpact,
      description: strings.bugs.impact.description,
      dynamicDescription: getBugImpactDescription(impact),
    },
    {
      label: strings.bugs.likelihood.label,
      value: likelihood,
      onChange: setLikelihood,
      description: strings.bugs.likelihood.description,
      dynamicDescription: getLikelihoodDescription(likelihood),
    },
  ]

  return (
    <Card className="w-full backdrop-blur-sm bg-card/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          {strings.bugs.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground/80">
          {strings.bugs.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-10">
        <div className="space-y-6 px-1">
          {sliders.map((props, index) => (
            <div key={index} className="relative">
              <SliderWithDescription {...props} />
              {index !== sliders.length - 1 && (
                <div className="absolute -bottom-3 left-0 right-0 h-px bg-border/50" />
              )}
            </div>
          ))}
        </div>
        
        <div className="space-y-6 rounded-lg bg-muted/50 p-6">
          <ScoreLegend
            score={bugScore}
            priority={bugPriority}
            levels={BUG_PRIORITY_LEVELS}
          />
          
          <div className="relative pt-4">
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-border/50" />
            <p className="text-xs text-muted-foreground text-center font-mono">
              Bug Score = Impact × Likelihood
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 
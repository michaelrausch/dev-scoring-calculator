"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useBugScoring } from "@/hooks/useBugScoring"
import { SliderWithDescription } from "./SliderWithDescription"
import { ScoreLegend } from "./ScoreLegend"

export function BugScoreCard() {
  const {
    impact, setImpact,
    likelihood, setLikelihood,
    bugScore,
    bugPriority,
    getImpactDescription,
    getLikelihoodDescription,
  } = useBugScoring()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bug Priority Calculator</CardTitle>
        <CardDescription>
          Score bugs based on their Impact and Likelihood of occurring
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <SliderWithDescription
            label="Impact"
            value={impact}
            onChange={setImpact}
            description="How severe is the bug's impact on users or business?"
            dynamicDescription={getImpactDescription(impact)}
          />
          
          <SliderWithDescription
            label="Likelihood"
            value={likelihood}
            onChange={setLikelihood}
            description="How often does this bug occur?"
            dynamicDescription={getLikelihoodDescription(likelihood)}
          />
        </div>
        
        <ScoreLegend
          score={bugScore}
          priority={bugPriority}
          levels={[
            { color: 'bg-red-500', label: 'Critical', range: 'Impact 9-10 or Score 70+' },
            { color: 'bg-orange-500', label: 'High', range: 'Score 45-69' },
            { color: 'bg-yellow-500', label: 'Medium', range: 'Score 25-44' },
            { color: 'bg-blue-500', label: 'Low', range: 'Score 0-24' },
          ]}
        />
      </CardContent>
    </Card>
  )
} 
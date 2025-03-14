"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useIceScoring } from "@/hooks/useIceScoring"
import { SliderWithDescription } from "./SliderWithDescription"
import { ScoreLegend } from "./ScoreLegend"

export function ICEScoreCard() {
  const {
    impact, setImpact,
    confidence, setConfidence,
    ease, setEase,
    iceScore,
    icePriority,
    getImpactDescription,
    getConfidenceDescription,
    getEaseDescription,
  } = useIceScoring()

  return (
    <Card>
      <CardHeader>
        <CardTitle>ICE Score Calculator</CardTitle>
        <CardDescription>
          Score features based on Impact, Confidence, and Ease using the ICE framework
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <SliderWithDescription
            label="Impact"
            value={impact}
            onChange={setImpact}
            description="How much will this feature benefit users/business?"
            dynamicDescription={getImpactDescription(impact)}
          />
          
          <SliderWithDescription
            label="Confidence"
            value={confidence}
            onChange={setConfidence}
            description="How confident are you in your impact assessment?"
            dynamicDescription={getConfidenceDescription(confidence)}
          />
          
          <SliderWithDescription
            label="Ease"
            value={ease}
            onChange={setEase}
            description="How easy is it to implement this feature?"
            dynamicDescription={getEaseDescription(ease)}
          />
        </div>
        
        <ScoreLegend
          score={iceScore}
          priority={icePriority}
          levels={[
            { color: 'bg-red-500', label: 'Must Have', range: 'Score 70+' },
            { color: 'bg-orange-500', label: 'High Impact', range: 'Score 45-69' },
            { color: 'bg-yellow-500', label: 'Medium', range: 'Score 25-44' },
            { color: 'bg-blue-500', label: 'Low Priority', range: 'Score 0-24' },
          ]}
        />
      </CardContent>
    </Card>
  )
} 
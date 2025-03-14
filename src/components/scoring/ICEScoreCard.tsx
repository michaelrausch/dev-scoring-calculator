"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useIceScoring } from "@/hooks/useIceScoring"
import { SliderWithDescription } from "./SliderWithDescription"
import { ScoreLegend } from "./ScoreLegend"
import { strings } from "@/lib/strings"

const ICE_PRIORITY_LEVELS = [
  { color: 'bg-red-500', label: strings.ice.priorities.mustHave.label, range: strings.ice.priorities.mustHave.range },
  { color: 'bg-orange-500', label: strings.ice.priorities.highImpact.label, range: strings.ice.priorities.highImpact.range },
  { color: 'bg-yellow-500', label: strings.ice.priorities.medium.label, range: strings.ice.priorities.medium.range },
  { color: 'bg-blue-500', label: strings.ice.priorities.low.label, range: strings.ice.priorities.low.range },
]

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

  const sliders = [
    {
      label: strings.ice.impact.label,
      value: impact,
      onChange: setImpact,
      description: strings.ice.impact.description,
      dynamicDescription: getImpactDescription(impact),
    },
    {
      label: strings.ice.confidence.label,
      value: confidence,
      onChange: setConfidence,
      description: strings.ice.confidence.description,
      dynamicDescription: getConfidenceDescription(confidence),
    },
    {
      label: strings.ice.ease.label,
      value: ease,
      onChange: setEase,
      description: strings.ice.ease.description,
      dynamicDescription: getEaseDescription(ease),
    },
  ]

  return (
    <Card className="w-full backdrop-blur-sm bg-card/50 shadow-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          {strings.ice.title}
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground/80">
          {strings.ice.description}
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
            score={iceScore}
            priority={icePriority}
            levels={ICE_PRIORITY_LEVELS}
          />
          
          <div className="relative pt-4">
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-border/50" />
            <p className="text-xs text-muted-foreground text-center font-mono">
              ICE Score = (Impact × Confidence × Ease) / 10
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 
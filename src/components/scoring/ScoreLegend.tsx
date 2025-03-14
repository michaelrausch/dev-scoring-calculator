interface ScoreLegendProps {
  score: number
  priority: {
    level: string
    color: string
    description: string
  }
  levels: {
    color: string
    label: string
    range: string
  }[]
}

export function ScoreLegend({ score, priority, levels }: ScoreLegendProps) {
  return (
    <div className="mt-6 p-4 bg-secondary rounded-lg">
      <h3 className="font-semibold mb-2">Score</h3>
      <div className="flex items-center gap-3">
        <div className="text-3xl font-bold">{score}</div>
        <span className={`${priority.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {priority.level}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mt-2">
        {priority.description}
      </p>
      <div className="mt-4 space-y-2 text-sm">
        <p className="text-muted-foreground">Priority Levels:</p>
        <div className="grid grid-cols-2 gap-2">
          {levels.map((level) => (
            <div key={level.label} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
              <span>{level.label} ({level.range})</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 
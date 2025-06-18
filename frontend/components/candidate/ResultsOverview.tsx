import React from 'react'

type Scores = {
  [key: string]: number
}

interface ResultsOverviewProps {
  scores: Scores
}

const ResultsOverview: React.FC<ResultsOverviewProps> = ({ scores }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2">Drijfverenscores</h3>
      <ul className="space-y-1">
        {Object.entries(scores).map(([key, value]) => (
          <li key={key} className="flex justify-between">
            <span className="capitalize">{key}</span>
            <span className="font-medium">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResultsOverview 
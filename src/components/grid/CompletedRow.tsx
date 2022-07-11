import { getGuessFrequencies, getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'

type Props = {
  solution: string
  guess: string
  isRevealing?: boolean
}

export const CompletedRow = ({ solution, guess, isRevealing }: Props) => {
  const statuses = getGuessStatuses(solution, guess)
  const frequencies = getGuessFrequencies(solution, guess)
  const splitGuess = unicodeSplit(guess)

  return (
    <div className="flex justify-center" style={{marginBottom: 6}}>
      <div className={"text-3xl"} style={{color: "#1f1f1f", marginLeft: -40, marginRight: 12, marginBottom: 0}}>{"#"}</div>
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          count={statuses[i]==='correct'?frequencies[i]:0}
          position={i}
          isRevealing={isRevealing}
          isCompleted
        />
      ))}
      <div style={{ marginRight: -39, marginLeft: 14, marginTop: 12, height: 24, width: 24, borderRadius: 4, backgroundColor: `#${guess}`}}/>
    </div>
  )
}

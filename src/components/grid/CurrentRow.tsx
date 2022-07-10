import { Cell } from './Cell'
import { solution, unicodeSplit } from '../../lib/words'

type Props = {
  guess: string
  className: string
}

export const CurrentRow = ({ guess, className }: Props) => {
  const splitGuess = unicodeSplit(guess)
  const emptyCells = Array.from(Array(solution.length - splitGuess.length))
  const classes = `flex justify-center ${className}`

  return (
    <div className={classes} style={{marginBottom: 6}}>
      <div className={"text-3xl"} style={{color: "#1f1f1f", marginLeft: -40, marginRight: 12, marginBottom: 0}}>{"#"}</div>
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}

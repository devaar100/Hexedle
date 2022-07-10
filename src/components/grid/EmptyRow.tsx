import { solution } from '../../lib/words'
import { Cell } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(solution.length))

  return (
    <div className="flex justify-center" style={{marginBottom: 6}}>
      <div className={"text-3xl"} style={{color: "#1f1f1f", marginLeft: -40, marginRight: 12, marginBottom: 0}}>{"#"}</div>
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}

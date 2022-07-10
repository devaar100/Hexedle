import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  value?: string
  status?: CharStatus,
  count?: number,
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  count,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  const animationDelay = `${position * REVEAL_TIME_MS}ms`
  const isHighContrast = getStoredIsHighContrastMode()
  const showFreq = count && count>=2

  const classes = classnames(
    'w-12 h-12 border-solid border-2 flex items-center justify-center mx-1 text-2xl font-bold dark:text-white rounded-full',
    {
      'border-neutral-200 dark:border-neutral-600':
        !status,
      // 'border-black dark:border-neutral-100': value && !status,
      'absent shadowed bg-neutral-400 dark:bg-neutral-700 text-white border-neutral-400 dark:border-neutral-700':
        status === 'absent',
      'correct shadowed bg-orange-500 text-white border-orange-500':
        status === 'correct' && isHighContrast,
      'present shadowed bg-cyan-500 text-white border-cyan-500':
        status === 'present' && isHighContrast,
      'correct shadowed bg-blue-500 text-white border-blue-500':
        status === 'correct' && !isHighContrast,
      'present shadowed bg-yellow-500 text-white border-yellow-500':
        status === 'present' && !isHighContrast,
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
    }
  )

  return (
    <div className={classes} style={{ animationDelay, position: "relative" }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
      {showFreq ? <div style={
        {
          position: "absolute", top: -5, right: -5, fontSize: 8, 
          backgroundColor: "white", color: "black", height: 16, 
          width: 16, borderRadius: 8, textShadow: 'none'
        }}><text style={{position: "absolute", top: -8, right: 5}}>{count}</text></div> : null }
    </div>
  )
}

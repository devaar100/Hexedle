import { ReactNode } from 'react'
import classnames from 'classnames'
import { CharStatus } from '../../lib/statuses'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'
import { solution } from '../../lib/words'

type Props = {
  children?: ReactNode
  value: string
  width?: number
  status?: CharStatus
  onClick: (value: string) => void
  isRevealing?: boolean
}

export const Key = ({
  children,
  status,
  width = 40,
  value,
  onClick,
  isRevealing,
}: Props) => {
  const keyDelayMs = REVEAL_TIME_MS * solution.length
  // const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'flex items-center justify-center mx-0.5 text-l font-bold cursor-pointer select-none dark:text-white rounded-full',
    {
      'bg-[#1c1c1c]' : status===undefined || status==='absent',
      'bg-blue-500 border-blue-500' : status==='correct',
      'bg-yellow-500 border-yellow-500' : status==='present'
    }
  )

  const styles = {
    width: `${width}px`,
    height: '40px',
    animationDelay: `${keyDelayMs}ms`
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(value)
    event.currentTarget.blur()
  }

  return (
    <button
      style={styles}
      aria-label={`${value} ${status}`}
      className={classes}
      onClick={handleClick}
    >
      {children || value}
    </button>
  )
}

import * as React from 'react'

type Props = {
  count: number
  onIncrementClick: () => void
  onDecrementClick: () => void
}
const Top: React.FC<Props> = ({
  count,
  onDecrementClick,
  onIncrementClick
}) => (
  <div>
    <div>
      Connt:
      {count}
    </div>
    <button onClick={onIncrementClick} type="button">
      Increment
    </button>
    <button onClick={onDecrementClick} type="button">
      Decrement
    </button>
  </div>
)

export default Top

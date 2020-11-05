import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
// Utils
import { getTimeRemaining, buildTimePieces } from './datetime-utils'

const CountdownWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

const Timer = styled.span({
  fontWeight: '800',
})


export const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate))
  const timePieces = buildTimePieces(timeLeft)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getTimeRemaining(targetDate))
    }, 1000)

    return () => clearTimeout(timer)
  })

  return (
    <>
      {timePieces.length ? (
        <CountdownWrapper>
          <Timer>{timePieces}</Timer>
        </CountdownWrapper>
      ) : (
        <span>{`Time's up!`}</span>
      )}
    </>
  )
}

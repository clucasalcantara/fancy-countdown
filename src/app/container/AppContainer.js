import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
// Context
import { useAppSettings } from '../context' 
// UI Elements
import { CountdownTimer } from '../components'
// Unsplash Service
import { getRandomImage } from '../services/unsplash'

const fixedPosition = {
  position: 'fixed',
  height: '100%',
  width: '100%'  
}

const Background = styled.div(({ backgroundImage }) => ({
  ...fixedPosition,
  background: backgroundImage ? `url(${backgroundImage})` : 'red',
  backgroundSize: 'cover'
}))

const Overlay = styled.div({
  zIndex: 2,
 ...fixedPosition,
  background: 'rgba(0,0,0,.7)'
})

const Container = styled.div({
 ...fixedPosition,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const CountdownWrapper = styled.div({
  zIndex: 3,
  color: 'white'
})

export const AppContainer = ({ imageQuery }) => {
  const [bgImage, setBgImage] = useState(null)
  const { targetDate } = useAppSettings()
  
  useEffect(() => {
    getRandomImage(setBgImage, imageQuery)
    return () => setBgImage(null)
  }, [imageQuery])
  
  return (
    <Container>
      <Overlay />
      {bgImage && <Background backgroundImage={bgImage} />}
      <CountdownWrapper>
        <CountdownTimer targetDate={targetDate} />
      </CountdownWrapper>
    </Container>
  )
}

AppContainer.defaultProps = {
  imageQuery: 'beach'
}
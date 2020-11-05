import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
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

export const AppContainer = ({ imageQuery }) => {
  const [bgImage, setBgImage] = useState(null)
  
  useEffect(() => {
    getRandomImage(setBgImage, imageQuery)
    return () => setBgImage(null)
  }, [imageQuery])
  
  return (
    <Container>
      <Overlay />
      {bgImage && <Background backgroundImage={bgImage} />}
    </Container>
  )
}

AppContainer.defaultProps = {
  imageQuery: 'beach'
}
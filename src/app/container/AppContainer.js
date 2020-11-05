import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
// Context
import { useAppSettings } from '../contexts' 
// UI Elements
import { CountdownTimer, SettingsModal } from '../components'
// Unsplash Service
import { getRandomImage } from '../services/unsplash'
// Utils
import { useURLParams } from '../hooks'
// Assets
import { Settings } from '../../assets'

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

const Actions = styled.div({
  zIndex: 3,
  color: 'white',
  position: 'absolute',
  bottom: 10,
  right: 10
})

export const AppContainer = ({ imageQuery }) => {
  const [bgImage, setBgImage] = useState(null)
  const [settingsIsOpen, setSettingsIsOpen] = useState(false)
  const { targetDate } = useAppSettings()
  const params = useURLParams()
  
  const sharedDate = params.get('targetDate')
  // const backgroundImage = params.get('bgImage')
  
  useEffect(() => {
    getRandomImage(setBgImage, imageQuery)
    return () => setBgImage(null)
  }, [imageQuery])
  
  return (
    <Container>
      <SettingsModal isOpen={settingsIsOpen} />
      <Overlay />
      {bgImage && <Background backgroundImage={bgImage} />}
      <CountdownWrapper>
        <CountdownTimer targetDate={sharedDate || targetDate} />
      </CountdownWrapper>
      <Actions role="presentation" onClick={() => setSettingsIsOpen(!settingsIsOpen)}>
        <Settings width="24px" height="24px" />
      </Actions>
    </Container>
  )
}

AppContainer.defaultProps = {
  imageQuery: 'beach'
}
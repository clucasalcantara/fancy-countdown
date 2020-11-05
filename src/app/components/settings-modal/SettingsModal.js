import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div(({ isOpen }) => ({
    zIndex: 10,
    position: 'absolute',
    width: '50%',
    height: '50%',
    background: 'rgba(255,255,255,0.9)',
    display: isOpen ? 'flex' : 'none',
    justifyContent: 'center',
    padding: '2rem',
    fontWeight: 'bold'
}))

export const SettingsModal = ({ isOpen }) => (
    <Wrapper isOpen={isOpen}>
        <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                <label style={{ paddingBottom: 10 }}>Target date</label>
                <input type="date" />
            </div>
            <button style={{ width: '100%', height: '40px' }}>Save</button>
        </div>
    </Wrapper>
)

SettingsModal.defaultProps = {
    isOpen: false,
}
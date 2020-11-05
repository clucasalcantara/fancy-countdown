import React, { createContext, useContext } from 'react';

const context = {
    targetDate: '11/13/2020'
}

const AppSettingsContext = createContext(context)

export const useAppSettings = () => useContext(AppSettingsContext)

export const AppSettingsProvider = ({children}) => (
    <AppSettingsContext.Provider value={context}>
        {children}
    </AppSettingsContext.Provider>
)

import React, { Component } from 'react'

const GLOBAL_CONTEXT=React.createContext();

export const GlobalProvider=({children})=>{
    return <GLOBAL_CONTEXT.Provider>{children}</GLOBAL_CONTEXT.Provider>
}
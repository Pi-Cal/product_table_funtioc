import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {TabNavigator} from './TabNavigator'

export const Root = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<TabNavigator/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

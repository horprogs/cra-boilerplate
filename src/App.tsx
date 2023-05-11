import React from 'react'
import Header from './features/Header/Header'
import { Container, Switch } from '@nextui-org/react'
import List from './features/List/List'
import { Route, Router, RouterProvider, Routes } from 'react-router'
import { BrowserRouter, createBrowserRouter } from 'react-router-dom'
import routes from './routes'
import About from './features/About/About'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={routes.pages.main} element={<List />} />
        <Route path={routes.pages.about} element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { store } from '../app/store'
import { Provider } from 'react-redux'

export const renderApp = (elem: React.ReactElement) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  )
  return render(elem, { wrapper: Wrapper })
}

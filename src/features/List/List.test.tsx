import { renderApp } from '../../utils/testing'
import React from 'react'
import List from './List'
import { screen, waitFor } from '@testing-library/react'
import { fetchList } from '../../api/list'

jest.mock('../../api/list')

describe('List', () => {
  it('should render List', async () => {
    ;(fetchList as jest.MockedFunction<typeof fetchList>).mockResolvedValue([
      { id: 1, name: 'Item' },
    ])
    renderApp(<List />)

    await waitFor(() => {
      expect(screen.getByText('Item')).toBeInTheDocument()
    })
  })
})

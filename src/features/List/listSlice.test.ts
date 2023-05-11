import listReduced, { ListState } from './listSlice'

describe('counter reducer', () => {
  const initialState: ListState = {
    list: [],
    status: 'idle',
  }
  it('should handle initial state', () => {
    expect(listReduced(undefined, { type: 'unknown' })).toEqual(initialState)
  })
})

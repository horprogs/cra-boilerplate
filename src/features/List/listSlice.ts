import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { addItem, fetchList } from '../../api/list'
import { ListItemInterface } from '../../interfaces/list'

export interface ListState {
  list: ListItemInterface[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: ListState = {
  list: [],
  status: 'idle',
}

export const addItemAction = createAsyncThunk(
  'list/add',
  async (item: ListItemInterface) => {
    console.log('!!')
    const response = await addItem(item)
    return response
  },
)

export const fetchListAction = createAsyncThunk('list/fetch', async () => {
  const response = await fetchList()
  console.log(response)
  return response
})

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addItemAction.fulfilled, (state, action) => {
        state.list.push(action.payload)
      })
      .addCase(fetchListAction.fulfilled, (state, action) => {
        state.status = 'idle'
        state.list = action.payload
      })
      .addCase(fetchListAction.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchListAction.rejected, state => {
        state.status = 'failed'
      })
  },
})

export const selectList = (state: RootState) => state.list.list
export const selectListStatus = (state: RootState) => state.list.status

export default listSlice.reducer

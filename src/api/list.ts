import { useEffect, useState } from 'react'
import { api } from './index'
import routes from '../routes'
import { ListItemInterface } from '../interfaces/list'

export const addItem = (item: ListItemInterface) =>
  api.post<ListItemInterface>(routes.api.list, item)

export const fetchList = () => api.get<ListItemInterface[]>(routes.api.list)

export const useFetchList = () => {
  const [data, setData] = useState<ListItemInterface[]>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const handleFetchList = async () => {
    setError(false)
    setLoading(true)

    try {
      const resp = await fetchList()
      setData(resp)
    } catch (e) {
      setData([])
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleFetchList()
  }, [])

  return { loading, error, data }
}

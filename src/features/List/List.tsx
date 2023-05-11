import React, { useEffect } from 'react'
import { Button, Card, Container, Loading, Text } from '@nextui-org/react'
import { useFetchList } from '../../api/list'
import { addItemAction, fetchListAction, selectList, selectListStatus } from './listSlice'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../app/hooks'

const List = () => {
  // const { data, loading, error } = useFetchList()

  const data = useSelector(selectList)
  const status = useSelector(selectListStatus)
  const dispatch = useAppDispatch()

  const error = status === 'failed'
  const loading = status === 'loading'

  useEffect(() => {
    dispatch(fetchListAction())
  }, [])

  const renderContent = () => {
    if (error) {
      return (
        <Card>
          <Card.Body>
            <Text color="error">Something went wrong</Text>
          </Card.Body>
        </Card>
      )
    }

    if (loading) {
      return <Loading />
    }

    if (!data?.length) {
      return (
        <Card>
          <Card.Body>
            <Text color="primary">List is empty</Text>
          </Card.Body>
        </Card>
      )
    }

    return data.map(item => (
      <Card key={item.id} style={{ marginBottom: '16px' }}>
        <Card.Body>
          <Text color="primary">{item.name}</Text>
        </Card.Body>
      </Card>
    ))
  }

  return (
    <Container style={{ marginTop: '32px', padding: 0 }}>
      <Button
        onPress={() => {
          dispatch(
            addItemAction({
              name: 'New item',
            }),
          )
        }}
        style={{ marginBottom: '16px', display: 'block' }}
      >
        Add new item
      </Button>
      {renderContent()}
    </Container>
  )
}

export default List

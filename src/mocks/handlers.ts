import { rest } from 'msw'
import { API_ROUTE } from '../api'
import routes from '../routes'

export const handlers = [
  rest.get(`${API_ROUTE}${routes.api.list}`, (req, res, ctx) => {
    const items = sessionStorage.getItem('list')
    let parsed

    try {
      parsed = items ? JSON.parse(items) : []
    } catch (e) {
      parsed = []
    }

    return res(ctx.status(200), ctx.json(parsed))
  }),

  rest.post(`${API_ROUTE}${routes.api.list}`, (req, res, ctx) => {
    const items = sessionStorage.getItem('list')
    let parsed

    try {
      parsed = items ? JSON.parse(items) : []
    } catch (e) {
      parsed = []
    }

    let body

    try {
      body = JSON.parse(req.body as string)
      body.id = parsed.length + 1
    } catch (e) {
      body = null
    }

    const newItems = body ? [...parsed, body] : parsed

    sessionStorage.setItem('list', JSON.stringify(newItems))
    return res(ctx.status(200), ctx.json(body))
  }),
]

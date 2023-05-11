export const API_ROUTE = 'https://api.test.com'

export const api = {
  get: <T>(url: string): Promise<T> =>
    fetch(`${API_ROUTE}${url}`).then(async resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText)
      }

      return resp.json()
    }),

  post: <T>(url: string, body: any): Promise<T> =>
    fetch(`${API_ROUTE}${url}`, { method: 'POST', body: JSON.stringify(body) }).then(
      async resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText)
        }

        return resp.json()
      },
    ),

  patch: <T>(url: string, body: any): Promise<T> =>
    fetch(`${API_ROUTE}${url}`, { method: 'PATCH', body: JSON.stringify(body) }).then(
      async resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText)
        }

        return resp.json()
      },
    ),

  put: <T>(url: string, body: any): Promise<T> =>
    fetch(`${API_ROUTE}${url}`, { method: 'PUT', body: JSON.stringify(body) }).then(
      async resp => {
        if (!resp.ok) {
          throw new Error(resp.statusText)
        }

        return resp.json()
      },
    ),

  delete: <T>(url: string): Promise<T> =>
    fetch(`${API_ROUTE}${url}`, { method: 'DELETE' }).then(async resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText)
      }

      return resp.json()
    }),
}

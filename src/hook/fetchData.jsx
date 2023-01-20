import { useState, useEffect } from 'react'

export const useFetchData = ( url ) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const json = await response.json()
        setData(json)
      } catch (error) {
        error instanceof Error && setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url]) //[url])

  return { data, loading, error }
}

export const useFetchDataById = (url, id) => {
  const { data, loading, error } = useFetchData(url);
  const dataById = data.find( (item) => item.id === id )
  return { dataById, loading, error }
}
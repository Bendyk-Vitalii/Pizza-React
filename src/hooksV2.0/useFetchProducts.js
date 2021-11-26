import { useCallback, useState, useEffect } from "react"
import { commerce } from "../lib/commerce"

export const useFetchProductlist = () => {
  const [list, setList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true)
        const { data } = await commerce.products.list()
        if (!data[0]) {
          throw new Error("Can't fetch products!")
        }

        const pizza = data.filter((el) => el.sku === "pizza")
        const sweets = data.filter((el) => el.sku === "sweets")
        const productOfTheDay = data.filter((el) => el.sku === "Pizza of the Day")
        setList({ pizza, sweets, productOfTheDay })

        setIsError(false)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getProducts()
  }, [])
  return {
    list,
    isLoading,
    isError,
  }
}

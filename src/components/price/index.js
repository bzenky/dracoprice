import axios from 'axios'
import { useEffect, useState } from 'react'

export function Price() {

  const [dracoUSD, setDracoUSD] = useState('')

  useEffect(() => {
    axios.post('https://api.mir4global.com/wallet/prices/draco/lastest')
      .then(res => {
        setDracoUSD(res.data.Data.USDDracoRate)
      })
  }, [])


  return (
    <>
      <span>usd {dracoUSD}</span>
    </>
  )

}

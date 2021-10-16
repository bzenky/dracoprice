import { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

import styles from './styles.module.scss'

export function Price() {

  const date = format(new Date(), 'HH:mm (dd-MM-yyyy)')
  const [dracoUSD, setDracoUSD] = useState('')

  useEffect(() => {
    axios.post('https://api.mir4global.com/wallet/prices/draco/lastest')
      .then(res => {
        const formatedDracoUSD = (value) =>
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          }).format(value)

        setDracoUSD(formatedDracoUSD(res.data.Data.USDDracoRate))
      })
  }, [])


  return (
    <div className={styles.content}>
      <span className={styles.value}>USD {dracoUSD}</span>
      <time className={styles.date}>
        <span>Updated at {date}</span>
      </time>
    </div>
  )

}

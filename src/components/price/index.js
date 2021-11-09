import { useEffect, useState } from 'react'
import axios from 'axios'
import { format } from 'date-fns'
import { formatDerby, formatPrice } from '../../util/format'

import styles from './styles.module.scss'

export function Price() {

  const date = format(new Date(), 'HH:mm (dd-MM-yyyy)')
  const [dracoUSD, setDracoUSD] = useState('')
  const [derbyDS, setDerbyDS] = useState(0)

  useEffect(() => {
    axios.post('https://api.mir4global.com/wallet/prices/draco/lastest')
      .then(res => {
        const updatedDraco = res.data.Data.USDDracoRate

        setDracoUSD(formatPrice(updatedDraco))
      })
  }, [])

  useEffect(() => {
    axios.post('https://api.mir4global.com/wallet/prices/derby')
      .then(data => {

        const lastestDerby = data.data.Data
        const updatedDayDerby = lastestDerby[lastestDerby.length - 1].DS

        setDerbyDS(formatDerby(updatedDayDerby))
      })
  }, [])


  return (
    <div className={styles.content}>
      <span className={styles.dracoValue}>USD {dracoUSD}</span>
      <span className={styles.derbyValue}>Derby {derbyDS}</span>
      <time className={styles.date}>
        <span>Updated at {date}</span>
      </time>
    </div>
  )

}

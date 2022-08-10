import { FC } from 'react'
import styles from './input.module.css'
import { bind } from '../utils/bind'

const cx = bind(styles)

// example component input
export const Input: FC<{ name: string }> = () => {
  return <input className={cx('input')} />
}

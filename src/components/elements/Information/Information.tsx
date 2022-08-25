import React from 'react'
import { IMovie } from '../../../types/IMovie'
import styles from './Information.module.scss'

interface InformationProps {
  movie: IMovie
}

const Information: React.FC<InformationProps> = ({ movie }) => {
  return (
    <div className={styles.information}>
      123
    </div>
  )
}

export default Information
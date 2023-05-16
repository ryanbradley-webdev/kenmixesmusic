import React from 'react'
import styles from './credits.module.css'

type ThumbnailProps = {
    children: React.ReactNode
}

export default function Thumbnail({ children }: ThumbnailProps) {
    return (
        <div className={styles.thumbnail}>
            {children}
        </div>
    )
}
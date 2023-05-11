import React from 'react'
import styles from './credits.module.css'

type ThumbnailProps = {
    href?: string,
    children: React.ReactNode
}

export default function Thumbnail({ href, children }: ThumbnailProps) {
    if (href) {
        return (
            <a href={href} className={styles.thumbnail}>
                {children}
            </a>
        )
    } else {
        return (
            <div className={styles.thumbnail}>
                {children}
            </div>
        )
    }

}
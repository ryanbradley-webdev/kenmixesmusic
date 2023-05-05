import { Outlet } from 'react-router-dom'
import styles from './PageWrapper.module.css'

export default function PageWrapper() {
    return (
        <>
            <header className={styles.header}>
                header
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}
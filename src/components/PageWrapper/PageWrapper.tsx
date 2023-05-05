import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './PageWrapper.module.css'

export default function PageWrapper() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                &copy; 2023 by Ken Baumann
            </footer>
        </>
    )
}
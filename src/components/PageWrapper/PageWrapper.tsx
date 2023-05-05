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
            <footer>
                footer
            </footer>
        </>
    )
}
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './PageWrapper.module.css'

type PageWrapperProps = {
    toggleContactModal: () => void,
    togglePortfolio: () => void
}

export default function PageWrapper({ toggleContactModal, togglePortfolio }: PageWrapperProps) {
    return (
        <>
            <Header toggleContactModal={toggleContactModal} togglePortfolio={togglePortfolio} />
            <main className={styles.main}>
                <Outlet />
            </main>
            <footer className={styles.footer}>
                &copy; 2023 by Ken Baumann
            </footer>
        </>
    )
}
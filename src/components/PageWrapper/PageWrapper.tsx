import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import styles from './PageWrapper.module.css'
import Contact from '../Contact/Contact'

export default function PageWrapper() {
    const [contactModalVisible, setContactModalVisible] = useState(false)

    const toggleContactModal = () => {
        setContactModalVisible(!contactModalVisible)
    }

    return (
        <>
            <Header toggleContactModal={toggleContactModal} />
            <main className={styles.main}>
                <Outlet />
            </main>
            <Contact isVisible={contactModalVisible} toggleModal={toggleContactModal} />
            <footer className={styles.footer}>
                &copy; 2023 by Ken Baumann
            </footer>
        </>
    )
}
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from './NotFound.module.css'

export default function NotFound() {
    const [seconds, setSeconds] = useState(5)

    const navigate = useNavigate()

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds <= 0) {
                navigate('/')
            } else {
                setSeconds(prevSeconds => {
                    return prevSeconds - 1
                })
            }
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [navigate, seconds])

    return (
        <section className={styles.section}>
            <div>
                <p>The page you're looking for can't be found.</p>
                <p>Taking you to home page in {seconds} seconds.</p>
            </div>
        </section>
    )
}
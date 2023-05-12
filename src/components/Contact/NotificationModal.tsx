import { useEffect, useState } from 'react'
import styles from './Contact.module.css'

type NotificationModalProps = {
    sending: boolean,
    success: boolean,
    error: boolean
}

export default function NotificationModal({ sending, success, error }: NotificationModalProps) {
    const [isVisible, setIsVisible] = useState(sending || success || error)

    const sendingContent = (
        <div>
            <span>Sending Message</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
    )

    const successContent = (
        <div>
            Message sent!
        </div>
    )

    const errorContent = (
        <div>
            <p>Something went wrong.</p>
            <p>Please try again later.</p>
        </div>
    )

    useEffect(() => {
        setIsVisible(sending || success || error)
    }, [sending, success, error])

    return (
        <div className={styles.loadingModal} style={{ display: isVisible ? '' : 'none' }}>
            {sending && sendingContent}
            {success && successContent}
            {error && errorContent}
        </div>
    )
}
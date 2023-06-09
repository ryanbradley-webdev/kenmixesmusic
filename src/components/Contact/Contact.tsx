import { useRef, useState } from 'react'
import CloseBtn from '../../assets/CloseBtn'
import styles from './Contact.module.css'
import axios from 'axios'
import NotificationModal from './NotificationModal'

type ContactProps = {
    isVisible: boolean,
    toggleModal: () => void
}

export default function Contact({ isVisible, toggleModal }: ContactProps) {
    const [messageSending, setMessageSending] = useState(false)
    const [messageSuccess, setMessageSuccess] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const firstNameRef = useRef<HTMLInputElement>(null)
    const lastNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const validateInput = (ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>) => {
        if (!ref || !ref.current) return false

        if (ref.current.value === '') {
            ref.current.style.backgroundColor = 'var(--color-input-invalid)'
            ref.current.style.borderBottomColor = 'red'
            return false
        } else {
            ref.current.style.backgroundColor = ''
            ref.current.style.borderBottomColor = ''
            return true
        }
    }

    const validateForm = () => {
        const formRefs = [firstNameRef, lastNameRef, emailRef, messageRef]

        let valid = true

        formRefs.forEach(ref => {
            if (!validateInput(ref)) {
                valid = false
            }
        })

        return valid
    }

    const closeModalOnDelay = () => {
        setTimeout(() => {
            toggleModal()
            setMessageSending(false)
            setMessageSuccess(false)
            setMessageError(false)
            formRef?.current?.reset()
        }, 1000)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (validateForm()) {
            setMessageSending(true)

            const firstName = firstNameRef?.current?.value
            const lastName = lastNameRef?.current?.value
            const email = emailRef?.current?.value
            const message = messageRef?.current?.value

            const emailData = {
                firstName,
                lastName,
                email,
                message
            }

            axios.post(import.meta.env.VITE_CONTACT_URL, emailData)
                .then(res => {
                    setMessageSending(false)
                    if (res.status === 200) {
                        setMessageSuccess(true)
                    } else {
                        setMessageError(true)
                    }
                    closeModalOnDelay()
                })
                .catch(err => {
                    setMessageSending(false)
                    setMessageError(true)
                    console.log(err)
                    closeModalOnDelay()
                })
        }
    }

    return (
        <div className={styles.modal} style={{ display: isVisible ? 'grid' : 'none' }}>

            <form action="" onSubmit={handleSubmit} className={styles.form} ref={formRef}>

                <h2>GET IN TOUCH</h2>

                <CloseBtn className={styles.closeBtn} toggleMenu={toggleModal} />

                <div className={styles.namesGrid}>

                    <label htmlFor="first-name">
                        First Name *
                    </label>
                    <input 
                        type="text"
                        id='first-name'
                        name='first-name'
                        placeholder='e.g. Kat'
                        onBlur={() => validateInput(firstNameRef)}
                        onChange={() => validateInput(firstNameRef)}
                        ref={firstNameRef}
                        required
                    />

                    <label htmlFor="last-name">
                        Last Name *
                    </label>
                    <input
                        type="text"
                        id='last-name'
                        name='last-name'
                        placeholder='e.g. Jones'
                        onBlur={() => validateInput(lastNameRef)}
                        onChange={() => validateInput(lastNameRef)}
                        ref={lastNameRef}
                        required
                    />

                </div>

                <label htmlFor="email">
                    Email *
                </label>
                <input
                    type="email"
                    id='email'
                    name='email'
                    placeholder='e.g. example@mail.com'
                    onBlur={() => validateInput(emailRef)}
                    onChange={() => validateInput(emailRef)}
                    ref={emailRef}
                    required
                />

                <label htmlFor="message">
                    Message *
                </label>
                <textarea
                    id='message'
                    name='message'
                    placeholder='Type your message here'
                    onBlur={() => validateInput(messageRef)}
                    onChange={() => validateInput(messageRef)}
                    ref={messageRef}
                    required
                ></textarea>

                <button className={styles.submit} onClick={validateForm}>
                    Submit
                </button>

                <NotificationModal
                    sending={messageSending}
                    success={messageSuccess}
                    error={messageError}
                />

            </form>

        </div>
    )
}
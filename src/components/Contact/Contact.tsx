import CloseBtn from '../../assets/CloseBtn'
import styles from './Contact.module.css'

type ContactProps = {
    isVisible: boolean,
    toggleModal: () => void
}

export default function Contact({ isVisible, toggleModal }: ContactProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className={styles.modal} style={{ display: isVisible ? 'grid' : 'none' }}>
            <form action="" onSubmit={handleSubmit} className={styles.form}>
                <h2>GET IN TOUCH</h2>
                <CloseBtn toggleMenu={toggleModal} />
                <div className={styles.namesGrid}>
                    <label htmlFor="first-name">First Name *</label>
                    <input type="text" id='first-name' name='first-name' placeholder='e.g. Kat' required />
                    <label htmlFor="last-name">Last Name *</label>
                    <input type="text" id='last-name' name='last-name' placeholder='e.g. Jones' required />
                </div>
                <label htmlFor="email">Email *</label>
                <input type="email" id='email' name='email' placeholder='e.g. example@mail.com' required />
                <label htmlFor="message">Message *</label>
                <textarea id='message' name='message' placeholder='Type your message here' required></textarea>
                <button className={styles.submit}>
                    Submit
                </button>
            </form>
        </div>
    )
}
import { useEffect, useState } from 'react'
import styles from './Portfolio.module.css'
import CloseBtn from '../../assets/CloseBtn'

type PortfolioProps = {
    isVisible: boolean,
    toggleModal: () => void,
    toggleContactModal: () => void
}

export default function Portfolio({ isVisible, toggleModal, toggleContactModal }: PortfolioProps) {
    const [width, setWidth] = useState(() => {
        if (window.innerWidth > 480) return '300px'
        return  '100%'
    })

    const openContactModal = () => {
        toggleModal()
        toggleContactModal()
    }

    useEffect(() => {
        const listener = () => {
            if (window.innerWidth <= 480) {
                setWidth('100%')
            }
        }

        window.addEventListener('resize', listener)
        
        return () => window.removeEventListener('resize', listener)
    }, [])

    return (
        <div className={styles.modal} style={{ right: isVisible ? '0' : `-${width}` }}>

            <div>
                
                <CloseBtn toggleMenu={toggleModal} className={styles.closeBtn} />

                <iframe
                    src="https://app.filepass.com/player/ynidZbWPaZy6GTBG" 
                    style={{ 
                        background: 'transparent', 
                        border: 'none', 
                        outline: 'none', 
                        width: '100%',
                        height: '600px'
                    }}
                ></iframe>
            </div>

            <div className={styles.btnDiv}>
                <p>Like what you hear?</p>
                <button onClick={openContactModal} className={styles.btn}>
                    Get In Touch
                </button>
            </div>

        </div>
    )
}
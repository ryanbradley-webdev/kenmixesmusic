import { useEffect, useState } from 'react'
import Waveform from './Waveform'
import TrackItem from './TrackItem'
import { storage } from '../../util/firebase'
import { ref, listAll, StorageReference, getDownloadURL } from 'firebase/storage'
import styles from './Portfolio.module.css'

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
    const [selectedTrack, setSelectedTrack] = useState('/Commercial_Demo.wav')
    const [tracks, setTracks] = useState<string[]>([])

    const tracksRef = ref(storage)

    /* listAll(tracksRef)
        .then(res => {
            setTracks(res.items.map(item => {
                getDownloadURL(item)
            }))
        }) */

    const handleClick = (track: string) => {
        if (track === selectedTrack || !track) return

        setSelectedTrack(track)
    }

    const openContactModal = () => {
        toggleModal()
        toggleContactModal()
    }

    useEffect(() => {
        const changeListener = () => {
            if (window.innerWidth <= 480) {
                setWidth('100%')
            }
        }

        window.addEventListener('change', changeListener)
        
        return () => window.removeEventListener('change', changeListener)
    }, [])

    return (
        <div className={styles.modal} style={{ right: isVisible ? '0' : `-${width}` }}>

            <div>
                <span>Mixed by Ken Baumann</span>
                <button onClick={toggleModal}>close</button>
                <Waveform track={selectedTrack} />
                {tracks.length > 0 && tracks.map(track => (
                    <TrackItem onClick={handleClick} name={track} />
                ))}
            </div>

            <div>
                <p>Like what you hear?</p>
                <button onClick={openContactModal}>
                    Get In Touch
                </button>
            </div>

        </div>
    )
}
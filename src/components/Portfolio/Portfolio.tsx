import { useState } from 'react'
import Waveform from './Waveform'
import TrackItem from './TrackItem'
import { storage } from '../../util/firebase'
import { ref, listAll, StorageReference } from 'firebase/storage'
import styles from './Portfolio.module.css'

type PortfolioProps = {
    isVisible: boolean,
    toggleModal: () => void,
    toggleContactModal: () => void
}

export default function Portfolio({ isVisible, toggleModal, toggleContactModal }: PortfolioProps) {
    const [selectedTrack, setSelectedTrack] = useState('/Commercial_Demo.wav')
    const [tracks, setTracks] = useState([
        '/Commercial_Demo.wav',
        '/Narration_Demo.mp3',
        '/Voice_Acting_Demo.wav'
    ])

    const handleClick = (track: string) => {
        if (track === selectedTrack || !track) return

        setSelectedTrack(track)
    }

    const openContactModal = () => {
        toggleModal()
        toggleContactModal()
    }

    return (
        <div className={styles.modal} style={{ right: isVisible ? '0' : '-300px' }}>

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
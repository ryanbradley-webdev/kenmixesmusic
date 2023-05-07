import PlayBtn from '../../assets/PlayBtn'
import styles from './Portfolio.module.css'

type TrackItemProps = {
    onClick: (track: string) => void,
    name: string
}

export default function TrackItem({ onClick, name }: TrackItemProps) {
    return (
        <button className={styles.trackItem} onClick={() => onClick(name)}>
            <PlayBtn isSelected={true} />
            <span>{name}</span>
        </button>
    )
}
type PlayBtnProps = {
    isSelected: boolean
}

export default function PlayBtn({ isSelected }: PlayBtnProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isSelected ? 'var(--color-orange)' : '#3C4042'}>
            <title>play</title>
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
    )
}
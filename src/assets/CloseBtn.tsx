type CloseBtnProps = {
    toggleMenu: () => void,
    className: string
}

export default function CloseBtn({ toggleMenu, className }: CloseBtnProps) {
    return (
        <button className={className} onClick={toggleMenu} type='button'>
            <div></div>
            <div></div>
        </button>
    )
}
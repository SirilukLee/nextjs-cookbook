import styles from "../../styles/Atoms.module.scss"


const BackToListButton = ({ backToList }: { backToList: () => void }) => {
    return (
        <button className={styles.back} type="button"
            onClick={backToList}>
            -
        </button>
    )
}

export default BackToListButton;
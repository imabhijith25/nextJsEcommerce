import styles from "./Modal.module.css";
interface Element {
    children: JSX.Element;
    close(): void;
}
const Modal = ({ children, close }: Element) => {
    return (
        <>
            <div className={styles.modalContainer}>
                <div className={styles.modal}>
                    <div className={styles.close} onClick={close}>
                        &#10006;
                    </div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;

import styles from "./Checkbox.module.css";
interface CheckboxProps {
    onClickHandler(): void;
    text: string;
}
const Checkbox = ({ onClickHandler, text }: CheckboxProps) => {
    return (
        <>
            <div>
                <label className={styles.container} onClick={onClickHandler}>
                    <input type="checkbox" className={styles.input} />
                    <span className={styles.checkmark}></span>
                    {text}
                </label>
            </div>
        </>
    );
};

export default Checkbox;

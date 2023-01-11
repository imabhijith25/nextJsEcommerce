import styles from "./Checkbox.module.css";
interface CheckboxProps {
    onClickHandler(): void;
    text: string;
    selected: boolean;
}
const Checkbox = ({ onClickHandler, text, selected }: CheckboxProps) => {
    return (
        <>
            <div>
                <label className={styles.container}>
                    <input
                        type="checkbox"
                        className={styles.input}
                        onChange={onClickHandler}
                        checked={selected}
                    />
                    <span className={styles.checkmark}></span>
                    {text}
                </label>
            </div>
        </>
    );
};

export default Checkbox;

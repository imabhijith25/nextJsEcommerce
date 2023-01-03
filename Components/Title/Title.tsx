import styles from "./Title.module.css";
interface TitleProps {
    title: string;
    subtitle: string;
}
const Title = ({ title, subtitle }: TitleProps) => {
    return (
        <>
            <div className={styles.titleContainer}>
                <h4>{title}</h4>
                <p>{subtitle}</p>
            </div>
        </>
    );
};

export default Title;

import styles from "./ImageSlider.module.css";
interface itemInterface {
    item: { name: string; desc: string; img: string };
}

const Slide = ({ item }: itemInterface): JSX.Element | null => {
    return (
        <>
            <div className={styles.container}>
                <img src={item.img}></img>
                <div className={styles.textHolder}>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    );
};

export default Slide;

import styles from "./Card.module.css";

interface Source {
    source: {
        title: string;
        price: number;
        category: string;
        image: string;
    };
}
const Card = ({ source }: Source) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.img}>
                <img src={source.image} alt="item" />
            </div>
            <div className={styles.info}>
                <div className={styles.nameandPara}>
                    <h4>
                        {source.title.length > 23
                            ? source.title.slice(0, 12) + "..."
                            : source.title}
                    </h4>
                    <p>{source.category}</p>
                </div>
                <div className={styles.price}>${source.price}</div>
            </div>
            <div className={styles.addCard}>
                <button>Add Card</button>
            </div>
        </div>
    );
};

export default Card;

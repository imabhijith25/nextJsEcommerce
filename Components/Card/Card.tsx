import styles from "./Card.module.css";

const Card = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.img}>
                <img
                    src="https://images.unsplash.com/photo-1673212816026-208c314ed405?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="item"
                />
            </div>
            <div className={styles.info}>
                <div className={styles.nameandPara}>
                    <h4>Name of the asset</h4>
                    <p>Para denoting expl</p>
                </div>
                <div className={styles.price}>$32</div>
            </div>
            <div className={styles.addCard}>
                <button>Add Card</button>
            </div>
        </div>
    );
};

export default Card;

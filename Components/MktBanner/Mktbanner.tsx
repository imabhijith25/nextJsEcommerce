import styles from "./Mktbanner.module.css";
const Mktbanner = (): JSX.Element | null => {
    const imageAddress: string =
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80";
    return (
        <div className="middleContainer">
            <div className={styles.container}>
                <img
                    src={imageAddress}
                    alt="market"
                    className={styles.marketplaceImg}
                />
                <div className={styles.leftArea}>
                    <div>
                        <h4>
                            Explore <br></br>Marketplace
                        </h4>
                        <p>
                            Some Sample text denoting how marketplaces can be
                            used
                        </p>
                    </div>
                    <button className="button">Go to market</button>
                </div>
            </div>
        </div>
    );
};

export default Mktbanner;

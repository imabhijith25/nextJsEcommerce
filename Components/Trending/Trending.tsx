import { useState } from "react";
import styles from "./Trending.module.css";
import Title from "../Title/Title";
const Trending = (): JSX.Element | null => {
    const [showDetails, setShowDetails] = useState<number | null>(null);
    const trendingValues: {
        name: string;
        price: number;
        img: string;
        details: string;
    }[] = [
        {
            name: "Propter Bag",
            price: 23,
            img: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80",
            details: "Powerful handbags from dior",
        },
        {
            name: "Snyd Bag",
            price: 23,
            img: "https://images.unsplash.com/photo-1566150902887-9679ecc155ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            details: "Powerful handbags from dior",
        },
        {
            name: "Propter Bag",
            price: 23,
            img: "https://images.unsplash.com/photo-1605733513597-a8f8341084e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80",
            details: "Powerful handbags from dior",
        },
    ];

    return (
        <>
            <div className="middleContainer">
                <Title
                    title="Latest Bags"
                    subtitle="Get the latest Dior Bags"
                ></Title>
                <div className={styles.grids}>
                    {trendingValues.map((item, index) => (
                        <div className={styles.carCon} key={index}>
                            <div
                                className={styles.card}
                                key={index}
                                onMouseEnter={() => {
                                    setShowDetails(index);
                                }}
                                onMouseLeave={() => {
                                    setShowDetails(null);
                                }}
                            >
                                <img src={item.img} alt="bags" />
                                {showDetails == index && (
                                    <div className={styles.details}>
                                        <h4>{item.name}</h4>
                                        <p>{item.details}</p>
                                        <p>${item.price}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Trending;

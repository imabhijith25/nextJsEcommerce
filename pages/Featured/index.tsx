import { useState } from "react";
import Card from "../../Components/Card/Card";
import styles from "./featured.module.css";
interface ItemInterface {
    title: string;
    price: number;
    category: string;
    image: string;
}
export default function Featured() {
    const items: ItemInterface[] = [
        {
            title: "Test Asset one",
            price: 43,
            category: "Asset desc",
            image: "https://images.unsplash.com/photo-1673212816026-208c314ed405?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        },
        {
            title: "Test Asset one",
            price: 43,
            category: "Asset desc",
            image: "https://images.unsplash.com/photo-1673205194019-55ac9f0a0899?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            title: "Test Asset three",
            price: 23,
            category: "Asset desc",
            image: "https://images.unsplash.com/photo-1659427932480-a1043d6c642f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        },
        {
            title: "Test Asset three",
            price: 23,
            category: "Asset desc",
            image: "https://images.unsplash.com/photo-1615198957251-0639801c91c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        },
    ];
    return (
        <>
            <div className={styles.container}>
                <div className={styles.middlePart}>
                    <div className={styles.wrapper}>
                        <div className={styles.imageHolder}>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1669703777692-0289d224bcc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                alt="collection"
                            />
                        </div>
                    </div>

                    <h4>Sample Collection Page</h4>
                    <p>Subtitle</p>
                </div>
            </div>

            <div className="middleContainer">
                <div className={styles.cardContainer}>
                    {items.map((item, index) => (
                        <div className={styles.cardArea} key={index}>
                            <Card source={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

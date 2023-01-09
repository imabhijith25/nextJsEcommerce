import { useState } from "react";
import Card from "../../Components/Card/Card";
import styles from "./featured.module.css";
export default function Featured() {
    const items: string[] = ["one", "two", "three"];
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
                    <p>Some description denoting sample collection</p>
                </div>
            </div>

            <div className="middleContainer">
                <div className={styles.cardContainer}>
                    {items.map((item, index) => (
                        <div className={styles.cardArea}>
                            <Card />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

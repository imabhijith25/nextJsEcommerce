import { useEffect, useState } from "react";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { instance } from "../../RestAPI/API";
import styles from "./marketplace.module.css";
import Card from "../../Components/Card/Card";
const Marketplace = () => {
    const items: string[] = ["One", "two"];
    const [data, setData] = useState<Array<any>>([]);

    useEffect(() => {
        instance.get("products?limit=8").then((res) => {
            setData(res?.data);
        });
    }, []);

    return (
        <>
            <div className="middleContainer">
                <div className={styles.header}>
                    <div>
                        <h3>Marketplace</h3>
                    </div>
                    <div className={styles.filterArea}>
                        <div className={styles.dropContainer}>
                            <Dropdown label="Price Filter" items={items} />
                        </div>
                        <div className={styles.dropContainer}>
                            <Dropdown label="Relevance" items={items} />
                        </div>
                    </div>
                </div>

                <div className={styles.itemContainer}>
                    <div className={styles.filter}>
                        <div className={styles.check}>
                            <Checkbox
                                onClickHandler={() => {
                                    console.log("i");
                                }}
                                text="Bags"
                            />
                        </div>
                        <div className={styles.check}>
                            <Checkbox
                                onClickHandler={() => {
                                    console.log("i");
                                }}
                                text="Shoes"
                            />
                        </div>
                        <div className={styles.check}>
                            <Checkbox
                                onClickHandler={() => {
                                    console.log("i");
                                }}
                                text="Jewellery"
                            />
                        </div>
                    </div>
                    <div className={styles.itemsArea}>
                        <div className={styles.cardContainer}>
                            {data.map((item, index) => (
                                <div className={styles.cardArea}>
                                    <Card source={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Marketplace;

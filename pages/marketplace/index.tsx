import { useEffect, useState } from "react";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { instance } from "../../RestAPI/API";
import styles from "./marketplace.module.css";
import Card from "../../Components/Card/Card";
const Marketplace = () => {
    const items: string[] = ["Low to High", "High to Low"];
    const [data, setData] = useState<Array<any>>([]);
    const [category, setCategory] = useState<Array<any>>([
        {
            name: "Jewellery",
            id: "jewelery",
            selected: false,
        },
        {
            name: "Electronics",
            id: "electronics",
            selected: false,
        },
        {
            name: "Men's Clothing",
            id: "men's clothing",
            selected: false,
        },
    ]);

    useEffect(() => {
        getAssets();
    }, [category]);

    const getAssets = () => {
        let checkboxSelected: string = "";
        category.forEach((item) => {
            if (item.selected) {
                checkboxSelected = item.id;
            }
        });
        let baseURL: string = "products";
        if (checkboxSelected) {
            baseURL = baseURL + "/category/" + checkboxSelected;
        }
        instance.get(baseURL + "?limit=8").then((res) => {
            setData(res?.data);
        });
    };

    const handleCheckBox = (index: number) => {
        console.log(index);
        const existing = [...category];
        const m = existing.map((item, indx) => {
            if (index === indx) {
                return {
                    ...existing[indx],
                    selected: !existing[indx].selected,
                };
            } else {
                return { ...existing[indx], selected: false };
            }
        });
        setCategory(m);
    };
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
                    </div>
                </div>

                <div className={styles.itemContainer}>
                    <div className={styles.filter}>
                        {category.map((item, index) => (
                            <div className={styles.check} key={index}>
                                <Checkbox
                                    onClickHandler={() => {
                                        handleCheckBox(index);
                                    }}
                                    text={item.name}
                                    selected={item?.selected}
                                />
                            </div>
                        ))}
                    </div>
                    <div className={styles.itemsArea}>
                        <div className={styles.cardContainer}>
                            {data.map((item, index) => (
                                <div className={styles.cardArea} key={index}>
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

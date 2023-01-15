import { useEffect, useState } from "react";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { instance } from "../../RestAPI/API";
import styles from "./marketplace.module.css";
import Card from "../../Components/Card/Card";
import axios from "axios";
import FilterIcon from "../../Icons/Filter";
import Filter from "./Filter";
import Modal from "../../Components/Modals/Modals";
const Marketplace = () => {
    const items: string[] = ["Low to High", "High to Low"];
    const controller = new AbortController();
    const [filterModal, setFilterModal] = useState(false);
    const [select, setSelect] = useState<string>("");
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
        console.log("called");
        getAssets();
        return () => {
            controller.abort();
        };
    }, [category, select]);

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
        instance
            .get(baseURL + "?limit=8&&sort=" + select, {
                signal: controller.signal,
            })
            .then((res) => {
                setData(res?.data);
            })
            .catch((err) => {
                console.log("Request Aborted");
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

    const handleDropDownChanges = (selected: string) => {
        console.log(selected);
        if (selected == "Low to High") {
            console.log("ASC");
            setSelect("asc");
        } else if (selected == "High to Low") {
            console.log("desC");
            setSelect("desc");
        }
    };
    return (
        <>
            {filterModal && (
                <>
                    <Modal
                        close={() => {
                            setFilterModal(false);
                        }}
                    >
                        <div className={styles.modalContainer}>
                            <h4>Filter marketplace</h4>
                            <div className={styles.modalDrop}>
                                <Dropdown
                                    label="Price Filter"
                                    items={items}
                                    onSelected={handleDropDownChanges}
                                />
                            </div>
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
                            <button
                                className={styles.apply}
                                onClick={() => {
                                    setFilterModal(false);
                                }}
                            >
                                Apply
                            </button>
                        </div>
                    </Modal>
                </>
            )}
            <div className="middleContainer">
                <div className={styles.header}>
                    <div>
                        <h3>Marketplace</h3>
                    </div>
                    <div className={styles.filterArea}>
                        <div className={styles.dropContainer}>
                            <Dropdown
                                label="Price Filter"
                                items={items}
                                onSelected={handleDropDownChanges}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.mobileFilter}>
                    <div
                        className={styles.iconArea}
                        onClick={() => {
                            setFilterModal(true);
                        }}
                    >
                        <FilterIcon />
                        <label>Filter</label>
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

import { useState } from "react";
import DropArrow from "../../Icons/Dropdown";
import styles from "./Dropdown.module.css";
interface DropdownValues {
    label: string;
    items: string[];
}
const Dropdown = ({ label, items }: DropdownValues) => {
    const [selected, setSelected] = useState<string>("Select");

    const [open, setOpen] = useState<boolean>(false);

    const calculateHeightoFDropdown = () => {
        return String(items?.length * 40);
    };
    return (
        <div className={styles.container}>
            <label>{label}</label>
            <div
                className={styles.selector}
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <div>{selected}</div>
                <div
                    className={
                        open
                            ? styles.dropArrow + " " + styles.down
                            : styles.dropArrow + " " + styles.up
                    }
                >
                    <DropArrow />
                </div>
            </div>
            <div
                style={
                    open
                        ? {
                              height: calculateHeightoFDropdown() + "px",
                              visibility: "visible",
                          }
                        : { height: "0px", visibility: "hidden" }
                }
                className={styles.dropdown}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={styles.item}
                        onClick={() => {
                            setSelected(item);
                            setOpen(false);
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dropdown;

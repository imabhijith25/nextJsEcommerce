import { useState } from "react";
import Checkbox from "../Components/Checkbox/Checkbox";
import Dropdown from "../Components/Dropdown/Dropdown";

export default function Marketplace() {
    const [items, setItems] = useState<string[]>([
        "One",
        "Two",
        "Three",
        "four",
    ]);
    return (
        <div>
            <p>hiii</p>
            <Checkbox
                onClickHandler={() => {
                    console.log("hii");
                }}
                text="Click me"
            />
            <Dropdown items={items} label="Price" />
        </div>
    );
}

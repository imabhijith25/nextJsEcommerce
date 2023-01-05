import Checkbox from "../Components/Checkbox/Checkbox";

export default function Marketplace() {
    return (
        <div>
            <Checkbox
                onClickHandler={() => {
                    console.log("checked");
                }}
                text="Socks"
            />
        </div>
    );
}

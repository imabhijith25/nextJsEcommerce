import styles from "./ImageSlider.module.css";
import { useRouter } from "next/navigation";
interface itemInterface {
    item: { name: string; desc: string; img: string };
}

const Slide = ({ item }: itemInterface): JSX.Element | null => {
    const router = useRouter();
    return (
        <>
            <div className={styles.container}>
                <img src={item.img}></img>
                <div className={styles.textHolder}>
                    <h4>{item.name}</h4>
                    <p>{item.desc}</p>
                    <button
                        onClick={() => {
                            router.push("/Featured");
                        }}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Slide;

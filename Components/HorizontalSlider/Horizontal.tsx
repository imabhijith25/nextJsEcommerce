import { useEffect } from "react";
import styles from "./Horizontal.module.css";
import { ChevronLeft } from "react-feather";
import { ChevronRight } from "react-feather";
import Title from "../Title/Title";
const Horizontal = (): JSX.Element | null => {
    const sliderImage: {
        name: string;
        img: string;
        price: number;
    }[] = [
        {
            name: "alpha",
            img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 23,
        },
        {
            name: "alpha",
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 23,
        },
        {
            name: "alpha",
            img: "https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 23,
        },
        {
            name: "alpha",
            img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 23,
        },
        {
            name: "alpha",
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 23,
        },
        {
            name: "alpha",
            img: "https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 23,
        },
        {
            name: "alpha",
            img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 23,
        },
        {
            name: "alpha",
            img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 23,
        },
        {
            name: "alpha",
            img: "https://images.unsplash.com/photo-1542219550-37153d387c27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            price: 23,
        },
    ];
    useEffect(() => {
        let currIndex = 0;
        const next = document.getElementById("nexts");
        const back = document.getElementById("backs");
        const slide = document.getElementById("rowcontainer") as HTMLElement;
        const single = document.getElementById("rowItems") as HTMLElement;
        console.log(single?.offsetWidth);

        next?.addEventListener("click", () => {
            if (currIndex == 3) {
                currIndex = 0;
            }
            currIndex += 1;

            slide.style.transform = `translateX(-${
                currIndex * single?.offsetWidth
            }px)`;
        });

        back?.addEventListener("click", () => {
            if (currIndex == 0) {
                return;
            }
            currIndex -= 1;
            slide.style.transform = `translateX(-${
                currIndex * single?.offsetWidth
            }px)`;
        });
    }, []);
    return (
        <div className="middleContainer">
            <Title
                title="Trending Now"
                subtitle="Apparels and accessories that are hot now"
            ></Title>

            <div className={styles.row}>
                <button id="nexts" className={styles.nexts}>
                    <ChevronRight color="white" />
                </button>
                <button id="backs" className={styles.backs}>
                    <ChevronLeft color="white" />
                </button>
                <div className={styles.rowContainer} id="rowcontainer">
                    {sliderImage.map((item, index) => (
                        <div
                            className={styles.rowItems}
                            id="rowItems"
                            key={index}
                        >
                            <img src={item.img} alt="display"></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Horizontal;

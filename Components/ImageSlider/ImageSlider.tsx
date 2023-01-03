import { useEffect } from "react";
import styles from "./ImageSlider.module.css";
import Slide from "./Slide";
import { ChevronLeft, ChevronRight } from "react-feather";
const ImageSlider = (): JSX.Element | null => {
    const sliderValues: { name: string; desc: string; img: string }[] = [
        {
            name: "Winter Collections",
            desc: "Get the latest fashion from winter collections at great discounts. Made from the finest wool",
            img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            name: "Iconic Citizen",
            desc: "Get the latest fashion from winter collections at great discounts. Made from the finest wool",
            img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            name: "Sport Ranger",
            desc: "Get the latest fashion from winter collections at great discounts. Made from the finest wool",
            img: "https://images.unsplash.com/photo-1625204614387-6509254d5b02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        },
    ];

    useEffect(() => {
        const slide: any = document.querySelectorAll("#slide");
        slide.forEach((slid: any, indx: any) => {
            slid.style.transform = `translateX(${indx * 100}%)`;
        });
        let currIndex = 0;
        const next: any = document.getElementById("next");
        next.addEventListener("click", () => {
            currIndex += 1;
            if (currIndex > slide.length - 1) {
                currIndex = 0;
            }
            slide.forEach((slid: any, indx: any) => {
                slid.style.transform = `translateX(${
                    (indx - currIndex) * 100
                }%)`;
            });
        });

        const back: any = document.getElementById("back");
        back.addEventListener("click", () => {
            currIndex -= 1;
            if (currIndex < 0) {
                currIndex = slide.length - 1;
            }
            slide.forEach((slid: any, indx: any) => {
                slid.style.transform = `translateX(${
                    (indx - currIndex) * 100
                }%)`;
            });
        });
    }, []);
    return (
        <div className={styles.imageContainer}>
            <div className={styles.slides}>
                <button id="next" className={styles.next}>
                    <ChevronRight color="white" />
                </button>
                <button id="back" className={styles.back}>
                    <ChevronLeft color="white" />
                </button>
                {sliderValues.map((item, index) => (
                    <div className={styles.slide} key={index} id="slide">
                        <Slide item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;

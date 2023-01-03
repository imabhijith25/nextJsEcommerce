import Head from "next/head";
import Image from "next/image";
import Footer from "../Components/Footer/Footer";
import Horizontal from "../Components/HorizontalSlider/Horizontal";
import ImageSlider from "../Components/ImageSlider/ImageSlider";
import Mktbanner from "../Components/MktBanner/Mktbanner";
import Trending from "../Components/Trending/Trending";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>mktplc</title>
                <meta
                    name="description"
                    content="mktplc- Find the latest fashion here"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ImageSlider />
            <Horizontal />
            <Trending />
            <Mktbanner />
        </div>
    );
}

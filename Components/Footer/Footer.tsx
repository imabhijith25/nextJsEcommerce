import Link from "next/link";
import styles from "./Footer.module.css";
const Footer = (): JSX.Element | null => {
    const validObj: string[] = [
        "Home",
        "Terms & Conditions",
        "About",
        "Careers",
    ];
    return (
        <>
            <div className={styles.footer + " container"}>
                <div className={styles.absolute}>
                    <div className={styles.content}>
                        <h4>We would love to here from you..</h4>
                        <button className="button">Contact Us</button>
                    </div>
                </div>

                <div className={styles.userCon}>
                    <div className="middleContainer">
                        <div className={styles.menu}>
                            <div className={styles.logo}>
                                <h4>mktplc</h4>
                                <p>© 2023</p>
                            </div>
                            <div className={styles.links}>
                                {validObj?.map((item, index) => (
                                    <Link href="/">{item}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;

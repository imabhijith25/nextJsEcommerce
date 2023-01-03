import styles from "./Header.module.css";
import { ShoppingCart } from "react-feather";
import { useEffect, useRef, useState } from "react";
const Header = () => {
    const [showDrop, setShowDrop] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    let link: string =
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80";

    const menuLink: { title: string; url: string }[] = [
        {
            title: "Account",
            url: "/link",
        },
        {
            title: "About",
            url: "/link",
        },
        {
            title: "Account",
            url: "/link",
        },
        {
            title: "Terms and Conditions",
            url: "/link",
        },
        {
            title: "Career",
            url: "/link",
        },
    ];

    useEffect(() => {
        const drp: HTMLElement | null = document.getElementById("dropdownArea");
        document.addEventListener("click", (e: any) => {
            if (!drp?.contains(e.target)) {
                setShowDrop(false);
            }
        });
    }, [ref]);
    return (
        <div className={styles.header + " container"}>
            <div className={styles.navBar}>
                <div className={styles.logoRegion}>
                    <h4>mktplc</h4>
                </div>
                <div className={styles.searchAndCard}>
                    <div>
                        <input type="text" placeholder="search"></input>
                    </div>
                    <div className={styles.shoppingCart}>
                        <ShoppingCart color="white" size={22} />
                    </div>
                    <div className={styles.profilePic} id="dropdownArea">
                        <img
                            src={link}
                            alt="profile"
                            onClick={() => {
                                setShowDrop(!showDrop);
                            }}
                        />
                        {showDrop && (
                            <div className={styles.dropDown}>
                                <ul className={styles.list}>
                                    {menuLink?.map((item, index) => (
                                        <li key={index}>{item.title}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

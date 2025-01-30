import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { ULearn } from "../../assets/svg/svg";
import { useReactPath } from "./path.hook.ts";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [openmenu, setopenmenu] = useState(false);
    const [navbg, setNavBg] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const openMenu = () => {
        setopenmenu(!openmenu);
    };

    const path = useReactPath();
    const navContent = ["home", "about", "gallery", "team", "contact"];

    useEffect(() => {}, [path]);

    const changeNavBg = () => {
        window.scrollY >= 600 ? setNavBg(true) : setNavBg(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNavBg);
        const handleScroll = () => {
            const sections = navContent.map(id => document.getElementById(id));
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(section.id);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", changeNavBg);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`${styles.navbarWrapper} ${navbg ? styles.scrolled : ''}`}
        >
            <div className={styles.navbarLeft}>
                <a href="#home" className={styles.logo}>
                    <ULearn />
                </a>
            </div>
            <div className={styles.navbarRight}>
                <div className={styles.navLinks}>
                    {navContent.map((content, i) => (
                        <a 
                            href={`#${content}`} 
                            key={i.toString() + content}
                            className={`${styles.navLink} ${activeSection === content ? styles.active : ''}`}
                        >
                            {content}
                            <span className={styles.navHover}></span>
                        </a>
                    ))}
                </div>
                <a href="#explore" className={styles.joinButton}>
                    Join us
                    <span className={styles.buttonSparkle}></span>
                </a>
            </div>

            <div className={styles.navbarMobile}>
                <button onClick={openMenu} className={styles.hamburger}>
                    {openmenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
                <div className={`${styles.mobileMenu} ${openmenu ? styles.open : ''}`}>
                    {navContent.map((content, i) => (
                        <a 
                            href={`#${content}`} 
                            key={i.toString() + content}
                            className={`${styles.mobileLink} ${activeSection === content ? styles.active : ''}`}
                            onClick={() => setopenmenu(false)}
                        >
                            {content}
                        </a>
                    ))}
                    <a 
                        href="#explore" 
                        className={styles.mobilejoinButton}
                        onClick={() => setopenmenu(false)}
                    >
                        Join us
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

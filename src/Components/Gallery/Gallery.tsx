import Marquee from "react-fast-marquee";
import styles from "./Gallery.module.css";
import data from '../../../data.json'

const Gallery = () => {
    const marqParams = {
        autoFill: true,
        pauseOnHover: true,
        speed: 35,
        gradient: true,
        gradientColor: [255, 255, 255],
        gradientWidth: 100
    };

    return (
        <div className={styles.gallery} id="gallery">
            <div className={styles.titleWrapper}>
                <h2>Memories</h2>
                <div className={styles.titleDecoration}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            
            <div className={styles.row}>
                <Marquee {...marqParams} style={{ width: "100vw" }}>
                    {data.gallery.row1.map((src, index) => (
                        <div className={styles.imgContainer} key={index}>
                            <div className={styles.imgWrapper}>
                                <img src={src.image} loading="lazy" alt="Gallery" />
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className={styles.row}>
                <Marquee
                    direction="right"
                    {...marqParams}
                    style={{ width: "100vw" }}
                >
                    {data.gallery.row2.map((src, index) => (
                        <div className={styles.imgContainer} key={index}>
                            <div className={styles.imgWrapper}>
                                <img src={src.image} loading="lazy" alt="Gallery" />
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default Gallery;

import React, { useEffect, useState } from "react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftArrow } from "../../../assets/leftArrow.svg";
// import { useSwiper } from "swiper/react/swiper-react";
import { useSwiper } from "swiper/react";
// import 'swiper/swiper.scss';
import 'swiper/css';

export default function CarouselLeftNavigation(){
    const swiper = useSwiper();
    const [isBeggining, setIsBeggining] = useState(swiper.isBeginning);

    useEffect(() => {
        swiper.on("slideChange", function(){
            setIsBeggining(swiper.isBeginning);
        })
    }, []);

    return (
        <div className={styles.leftNavigation}>
            {!isBeggining && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    )
}
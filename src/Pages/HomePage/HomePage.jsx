import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
import styles from "./HomePage.module.css";
import { fetchFilters } from "../../Api/api";
import HeroSection from "../../components/HeroSection/HeroSection";

export default function HomePage(){
    const {data} = useOutletContext();
    const {topAlbums, newAlbums, songs} = data;
    return (
    <>
        <HeroSection/>
        <div className={styles.wrapper}>
            <Section title="Top Albums" data={topAlbums} type="album" />
            <Section title="New Albums" data={newAlbums} type="album" />
            <hr />
            <Section title="Songs" data={songs} type="song" filterSource={fetchFilters} />
        </div>
    </>
    );
}
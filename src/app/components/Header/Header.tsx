"use client";

import { useEffect, useState } from 'react';
import styles from '@/app/components/Header/Header.module.css';
import BlurAnimation from '../BlurAnimation/BlurAnimation';
import animationData from '@/app/assets/lotties/object1.json';

export default function Header() {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} flex flex-column justify-center`}>
            <BlurAnimation animation={animationData} style={
                {
                    top: "0px",
                    left: "0px",
                    position: "absolute",
                    transform: `translateY(${offsetY * 0.8}px)`
                }
            } />
            <div className={`${styles.infos} flex flex-column justify-around`}>
                <div className={styles.name}>
                    <p className={styles.firstname}>jayson</p>
                    <p className={styles.lastname}>mourier</p>
                </div>

                <div className={`${styles.job} self-end`}>
                    <p>Développeur</p>
                </div>

                <div className={styles.type}>
                    <p>Mobile</p>
                    <p>& Web</p>
                </div>
            </div>
            <div
                className={styles.imageParallax}
                style={{
                    transform: `translateY(${offsetY * 0.5}px)`
                }}
            ></div>
        </header>
    );
}
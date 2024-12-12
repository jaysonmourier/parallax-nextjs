"use client";

import { useEffect, useState } from 'react';
import styles from '@/app/components/Header/Header.module.css';

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
        <header className={`${styles.header} flex flex-column`}>
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
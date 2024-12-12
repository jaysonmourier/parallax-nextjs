"use client";

import { useEffect, useState } from 'react';
import styles from '@/app/components/Header/Header.module.css';
import Image from 'next/image';

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
        <header className={`${styles.header} flex flex-column justify-around`}>
            <div className={styles.infos}>
                <div className={styles.names}>
                    <p>jayson</p>
                    <p className={styles.lastname}>mourier</p>
                </div>
                <p className={`${styles.dev} self-end`}>développeur</p>
                <p className={styles.devtype}>mobile<br />& web</p>
            </div>
            <div className={styles.image}>
                <Image
                    src={'/images/person.webp'}
                    alt="A simple person"
                    priority
                    fill
                    style={
                        {
                            objectFit: "contain",
                            objectPosition: "center",
                            zIndex: "0",
                            transform: `translateY(${offsetY * 0.5}px)`
                        }
                    }
                />
            </div>
        </header>
    );
}
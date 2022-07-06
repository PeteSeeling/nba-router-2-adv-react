import React from 'react';
import styles from './Header.css'

export default function Header() {
    return(
        <>
        <header>
            <div className={styles.headerDiv}>
                <section>
            <h1 className={styles.top}>Rick and Morty Router</h1>
            </section>
            </div>
            </header></>
    )
}
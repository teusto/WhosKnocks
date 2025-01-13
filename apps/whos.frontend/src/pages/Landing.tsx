import React, { useEffect, useState } from "react";
import styles from '../styles/landing.module.scss';

const LandingPage: React.FC = () => {

    return (
        <section className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.left}>
                    <div className={styles.container_logo}>
                        <p className={styles.logo}>Who's knock</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <p>-</p>
                </div>
            </div>
            <div className={styles.main_frame}>
                <div className={styles.top}>
                    <h1 className={styles.title}>Revolutionary Access</h1>
                </div>

                <div className={styles.bottom}>
                    <h1 className={styles.title}>Zero Compromises</h1>
                    <p className={styles.text}>Simplify Permission Management Today</p>
                </div>

                <div className={styles.card}>
                    <div className={styles.container}>
                        <div className={styles.container_logo}>logo</div>
                        <div className={styles.container_text}>
                            <p>Manage access the smart way.</p>
                            <p>
                                With just a QR code, you can grant or revoke permissions
                                instantly—simple, secure, and built on Web3 technology.
                                Perfect for startups, teams, and individuals looking to
                                simplify and scale their access management.
                            </p>
                        </div>
                        <div className={styles.container_qr}>
                            <div className={styles.qr}>qrcode</div>
                            <div className={styles.hash}>
                                <p>7e2584f62abf83fba</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingPage;

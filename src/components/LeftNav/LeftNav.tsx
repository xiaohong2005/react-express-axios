import React from "react";
import styles from "./LeftNav.module.css";

function LeftNav() {
    return (
        <div className={styles.leftNavBox}>
            <div className={styles.LeftNav}>
                {[1, 1, 1, 1, 1].map(() => (
                    <div className={styles.navBtn}>x</div>
                ))}
            </div>
        </div>
    );
}

export default LeftNav;

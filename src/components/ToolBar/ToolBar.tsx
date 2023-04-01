import React, { Children, ReactElement } from "react";
import IconBtn from "../IconBtn/IconBtn";
import styles from "./ToolBar.module.css";

interface Props {
    title: string;
    children: ReactElement;
}

function ToolBar({ title, children }: Props) {
    return (
        <div className={styles.toolBarBox}>
            <div className={styles.toolBar}>
                <div className={styles.logo}>{title}</div>
                <div className={styles.fillBox}>{children}</div>
            </div>
        </div>
    );
}

export default ToolBar;

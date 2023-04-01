import React, { ReactElement } from "react";
import styles from "./Mask.module.css";
interface Props {
    location: string;
    children: ReactElement;
}

function Mask({ location, children }: Props) {
    return (
        <>
            <div className={[styles[location], styles.Mask].join(" ")}>
                {children}
            </div>
        </>
    );
}

export default Mask;

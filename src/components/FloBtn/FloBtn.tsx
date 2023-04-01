import React from "react";
import styles from "./FloBtn.module.css";
interface Props {
    color?: string;
    icon: string;
    onClick: () => void;
}

function FloBtn({ color = "#eeeeee", icon, onClick }: Props) {
    return (
        <div
            style={{ backgroundColor: color }}
            className={[styles.floBtn, "material-symbols-outlined"].join(" ")}
        >
            {icon}
        </div>
    );
}

export default FloBtn;

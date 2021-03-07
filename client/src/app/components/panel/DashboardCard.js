import React from "react";
import '../../stylesheets/panel/PanelCompenent.css';

const DashboardCard = ({theme, title, description, emoji}) => {
    return (
        <div className={"w-100 p-2 rounded d-flex flex-row bg-" + theme}>
            <div className={"d-flex flex-column w-75"}>
                <span className={`fs-3 text-${theme === "warning" ? "dark" : "light"}`}>{title}</span>
                <span className={`fs-5 text-${theme === "warning" ? "dark" : "light"}`}>{description}</span>
            </div>
            <div className={"d-flex justify-content-end align-items-center w-25"}>
                <span className={"fs-1"}>{emoji}</span>
            </div>
        </div>
    );
}

export {DashboardCard};

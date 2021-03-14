import React from "react";

export default function SightItem({title, info}) {
    return (
        <div className="about-sights__item active">
            <h2 className="about-sights__title">{title}</h2>
            <div className="about-sights__desc">
                <p className="about-sights__p">{info}</p>
            </div>
        </div>
    );
}

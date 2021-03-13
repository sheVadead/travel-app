import React from "react";

import "./WidgetTime.scss"

export default function WidgetTime({capital}) {
    return (
        <section className="wg-time">
            <h3 className="wg-time__title">Time in {capital}</h3>
            <div className="wg-time__date">Thursday, 4 March</div>
            <div className="wg-time__clock">15 : 42 : 17</div>
        </section>
    )
}

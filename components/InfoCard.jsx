import React from "react"

export default function InfoCard({img, location, link, title, startDate, endDate, description}) {
    return (
        <div className="infoCard">
            <img src={img} className="infoCard--img"/>
            <div className="infoCard--infoArea">
                <div className="infoCard--location">
                    <img src="./ping.png" className="infoCard--ping"/>
                    <span>{location}</span>
                    <a href={link}>View on Google Maps</a>
                </div>
                <h3 className="infoCard--title">{title}</h3>
                <h4 className="infoCard--date">{`${startDate} - ${endDate}`}</h4>
                <p className="infoCard--description">{description}</p>
            </div>
        </div>
    )
}
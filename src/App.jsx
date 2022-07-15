import React from "react"
import Navbar from "../components/Navbar"
import InfoCard from "../components/InfoCard"
import data from "./seperate"

export default function App() {
    //loop through data and create InfoCard components
    const infoCard = data.map((card, index) => {
        return (
            <div>
               <InfoCard
                key={index} 
                img={card.imageUrl}
                location={card.location}
                link={card.googleMapsUrl}
                title={card.title}
                startDate={card.startDate}
                endDate={card.endDate}
                description={card.description}
                /> 
                {data.length - 1 - index !== 0 && <hr></hr>}
            </div>
        )
    })

    return (
        <div>
            <Navbar />
            <main>
                {infoCard}
            </main>
        </div>
    )
}
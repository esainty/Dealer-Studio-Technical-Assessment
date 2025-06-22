import { sva } from "../../styled-system/css"
import Card from "./Card"
import fetchCardData, { type CardData } from "../utils/data_fetch_util"
import { useEffect, useState } from "react"

export default function CardMenu() {
    const styles = sva({
        slots: ["container"],
        base: {
            container: {
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "top",
                justifyContent: "center",
                padding: ["16px", "8px"],
                margin: "16px",
                overflow: "auto",
                gap: "32px",
            },
        },
    })

    const [cardData, setCardData] = useState<CardData[]>([])

    useEffect(() => {
        // Perform check of array length to ensure effectful fetch only runs once
        if (cardData.length === 0) {
            const fetchData = async () => {
                try {
                    const data = await fetchCardData();
                    setCardData(data);
                } catch (error) {
                    console.error("Error fetching card data:", error)
                }

            }
            // Actually fetch the data
            fetchData();
        }
    })

    return (
        <div className={styles().container}>
            {cardData.length > 0
                ? cardData.map((card, index) => (
                    <Card key={index} title={card.title} description={card.content} actionString={card.action} startWithBorder={card.startWithBorder} />
                ))
                : <Card title={"Loading..."} description={""} actionString={"..."} /> // Placeholder card while data is loading
            }
        </div>
    )
}
import { sva } from "../../styled-system/css"
import Card from "./Card"
import fetchCardData, { type CardData } from "../utils/data_fetch_util"
import { useEffect, useState } from "react"

export default async function CardMenu() {
    const styles = sva({
        slots: ["container"],
        base: {
            container: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: ["16px", "8px"],
                margin: "16px",
                overflow: "auto",
            },
        },
    })

    const [cardData, setCardData] = useState<CardData[]>([])

    useEffect(() => {
        if (cardData.length === 0) {
            const fetchData = async () => {
                try {
                    const data = await fetchCardData();
                    setCardData(data);
                } catch (error) {
                    console.error("Error fetching card data:", error)
                }

            }
            fetchData();
        }
    })

    return (
        <div className={styles().container}>
            {cardData.map((card, index) => (
                <Card key={index} title={card.title} description={card.content} />
            ))}
        </div>
    )
}
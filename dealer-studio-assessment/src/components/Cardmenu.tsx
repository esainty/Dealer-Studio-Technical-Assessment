import { sva } from "../../styled-system/css"
import Card from "./Card"
import fetchCardData, { type CardData } from "../utils/data_fetch_util"
import { useEffect, useState } from "react"
import Button from "./Button"

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

    const [cardData, setCardData] = useState<CardData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Perform check of array length to ensure effectful fetch only runs once
        // !error is specified in order to prevent this re-fetching automatically on error
        if (cardData.length === 0 && !error) {
            const fetchData = async () => {
                try {
                    const data = await fetchCardData();
                    setCardData(data);
                    if (error !== null) setError(null); // Reset error state if data fetch is successful
                } catch (error) {
                    if (error instanceof Error) {
                        console.error("Simulated error received:", error.message);
                        setError(error.message);
                    }
                }
            }
            // Actually fetch the data
            fetchData();
        }
    })

    return (
        <div className={styles().container}>
            {error
                ? <>
                    <p>An error occurred while fetching data: {error}</p>
                    <Button text="Retry" onClick={() => {
                        setError(null); // Reset error state and trigger re-fetch
                    }} />
                </>
                : cardData.length > 0
                    ? cardData.map((card, index) => (
                        <Card key={index} title={card.title} description={card.content} actionString={card.action} startWithBorder={card.startWithBorder} />
                    ))
                    : <Card title={"Loading..."} description={""} actionString={"..."} /> // Placeholder card while data is loading
            }
        </div>
    )
}
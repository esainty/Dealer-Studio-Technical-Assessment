import cardData from '../assets/data/cards.json';

export type CardData = {
    title: string;
    content: string;
    action: string;
    startWithBorder?: boolean;
}

const data: CardData[] = cardData.cards

var shouldReturnError: boolean = true;

export default function fetchCardData() {
    if (shouldReturnError) {
        console.log("Generating simulated error for the first call...");
        return new Promise<CardData[]>((resolve, reject) => {
            try {
                // Simulate a network request with a timeout
                setTimeout(() => {
                    shouldReturnError = false; // Set to false after the first call to trigger a successful fetch next time
                    reject(new Error("Simulated network error")); // Simulate a network error on the first call
                }, 1000);
            } catch (error) {
                reject(error);
            }
        });
    } else {
        console.log("Returning simulated card data...");
        return new Promise<CardData[]>((resolve, reject) => {
            try {
                // Simulate a network request with a timeout
                setTimeout(() => {
                    resolve(data);
                }, 1000);
            } catch (error) {
                reject(error);
            }
        });
    }
}
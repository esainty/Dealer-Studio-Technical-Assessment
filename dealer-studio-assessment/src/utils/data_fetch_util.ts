import cardData from '../assets/data/cards.json';

export type CardData = {
    title: string;
    content: string;
    action: string;
}

const data: CardData[] = cardData.cards

export default function fetchCardData() {
    console.log(cardData);
    console.log("Result is: ", data[0].title);
    return new Promise<CardData[]>((resolve, reject) => {
        try {
            // Simulate a network request with a timeout
            setTimeout(() => {
                resolve(data);
            }, 1000);
        } catch (error) {
            reject(error);
        }
    })
}
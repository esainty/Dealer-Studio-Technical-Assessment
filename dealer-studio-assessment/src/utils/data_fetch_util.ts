import cardData from '../assets/data/cards.json';

export type CardData = {
    title: string;
    content: string;
    action: string;
    startWithBorder?: boolean;
}

const data: CardData[] = cardData.cards

export default function fetchCardData() {
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
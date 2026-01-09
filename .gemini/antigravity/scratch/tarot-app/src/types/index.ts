export interface TarotCard {
    id: number;
    name: string;
    nameJa: string; // Japanese name
    number: number;
    arcana: 'Major' | 'Minor';
    suit?: 'Wands' | 'Cups' | 'Swords' | 'Pentacles';
    keywords: string[];
    meaningUpright: string;
    meaningReversed: string;
    imageUrl: string;
}

export interface DrawResult {
    card: TarotCard;
    isReversed: boolean;
}

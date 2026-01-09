import { useState, useCallback } from 'react';
import { majorArcana } from '../data/tarotData';
import { TarotCard, DrawResult } from '../types';

export const useTarot = () => {
    const [deck, setDeck] = useState<TarotCard[]>(majorArcana);
    const [drawnCards, setDrawnCards] = useState<DrawResult[]>([]);

    // Fisher-Yates Shuffle
    const shuffleDeck = useCallback(() => {
        const newDeck = [...majorArcana];
        for (let i = newDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
        }
        setDeck(newDeck);
        setDrawnCards([]); // Reset drawn cards on shuffle
    }, []);

    const drawCard = useCallback((count: number = 1) => {
        // Basic implementation: take top N cards after shuffle, or just random
        // For a real feel, we usually shuffle then pop.
        // Let's ensure we have enough cards.
        if (deck.length < count) {
            console.warn('Not enough cards in deck, reshaping');
            shuffleDeck();
            // In a real app we might want to wait for state update, but for now let's just use the logic
            // to pick randoms from the base set if deck is empty, or better, just reuse the logic.
        }

        const currentDeck = [...deck];
        const results: DrawResult[] = [];

        for (let i = 0; i < count; i++) {
            if (currentDeck.length === 0) break;
            const card = currentDeck.shift()!;
            // 50% chance of being reversed
            const isReversed = Math.random() < 0.5;
            results.push({ card, isReversed });
        }

        setDeck(currentDeck);
        setDrawnCards(results);
        return results;
    }, [deck, shuffleDeck]);

    const resetGame = useCallback(() => {
        setDrawnCards([]);
        shuffleDeck(); // Reshuffle on reset
    }, [shuffleDeck]);

    return {
        deck,
        drawnCards,
        shuffleDeck,
        drawCard,
        resetGame
    };
};

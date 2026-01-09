import React, { useState } from 'react';
import { useTarot } from '../hooks/useTarot';
import { TarotCard } from './TarotCard';
import { motion } from 'framer-motion';

export const GameBoard: React.FC = () => {
    const { drawCard, drawnCards, resetGame } = useTarot();
    const [isThinking, setIsThinking] = useState(false);
    const [gameMode, setGameMode] = useState<'one' | 'three'>('one');

    const handleDraw = () => {
        setIsThinking(true);
        // Simulate "thinking" time
        setTimeout(() => {
            if (gameMode === 'one') {
                drawCard(1);
            } else {
                drawCard(3);
            }
            setIsThinking(false);
        }, 800);
    };

    const handleReset = () => {
        resetGame();
    };

    const getPositionLabel = (index: number) => {
        if (gameMode === 'one') return null;
        switch (index) {
            case 0: return '過去';
            case 1: return '現在';
            case 2: return '未来';
            default: return '';
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            maxWidth: '1200px'
        }}>
            {drawnCards.length === 0 && (
                <div style={{ marginBottom: '2rem', display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={() => setGameMode('one')}
                        style={{
                            padding: '10px 20px',
                            background: gameMode === 'one' ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
                            color: 'white',
                            border: '1px solid var(--color-primary)',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    >
                        ワンオラクル (1枚)
                    </button>
                    <button
                        onClick={() => setGameMode('three')}
                        style={{
                            padding: '10px 20px',
                            background: gameMode === 'three' ? 'var(--color-primary)' : 'rgba(255,255,255,0.1)',
                            color: 'white',
                            border: '1px solid var(--color-primary)',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    >
                        スリーカード (3枚)
                    </button>
                </div>
            )}

            <div style={{
                marginBottom: '2rem',
                minHeight: '360px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '2rem',
                width: '100%'
            }}>
                {drawnCards.length > 0 ? (
                    drawnCards.map((result, index) => (
                        <div key={result.card.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {gameMode === 'three' && (
                                <h4 style={{ color: 'var(--color-secondary)', marginBottom: '0.8rem', fontWeight: 'bold' }}>{getPositionLabel(index)}</h4>
                            )}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <TarotCard
                                    card={result.card}
                                    isReversed={result.isReversed}
                                    isRevealed={true}
                                />
                            </motion.div>
                        </div>
                    ))
                ) : (
                    <div
                        onClick={!isThinking ? handleDraw : undefined}
                        style={{
                            width: '200px',
                            height: '340px',
                            borderRadius: '12px',
                            border: '2px dashed #d4af37',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--color-primary)',
                            background: 'rgba(212, 175, 55, 0.05)',
                            transition: 'all 0.3s ease',
                            boxShadow: 'var(--shadow-card)'
                        }}
                    >
                        {isThinking ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
                            >
                                <span style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>✦</span>
                            </motion.div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                <span style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>✦</span>
                                <span style={{ fontWeight: 500 }}>Tap to Draw</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {drawnCards.length > 0 && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        {drawnCards.map((result, index) => (
                            <motion.div
                                key={`${result.card.id}-desc`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (index * 0.2) }}
                                style={{
                                    background: 'rgba(255, 255, 255, 0.9)',
                                    padding: '1.5rem',
                                    borderRadius: '16px',
                                    border: '1px solid var(--color-glass-border)',
                                    maxWidth: '350px',
                                    textAlign: 'center',
                                    flex: '1 1 300px',
                                    boxShadow: '0 8px 32px rgba(212, 175, 55, 0.1)'
                                }}
                            >
                                {gameMode === 'three' && (
                                    <div style={{ color: 'var(--color-accent)', fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                                        {getPositionLabel(index)}
                                    </div>
                                )}
                                <h3 style={{ color: 'var(--color-secondary)', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                                    {result.card.nameJa}
                                    <span style={{ fontSize: '0.9rem', marginLeft: '10px', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>
                                        {result.isReversed ? '（逆位置）' : '（正位置）'}
                                    </span>
                                </h3>
                                <p style={{ fontStyle: 'italic', marginBottom: '1rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
                                    "{result.isReversed ? result.card.meaningReversed : result.card.meaningUpright}"
                                </p>
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    {result.card.keywords.map(k => (
                                        <span key={k} style={{
                                            fontSize: '0.75rem',
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            background: 'rgba(212, 175, 55, 0.1)',
                                            color: '#8e7018',
                                            fontWeight: 500
                                        }}>
                                            {k}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        onClick={handleReset}
                        style={{
                            marginTop: '1rem',
                            padding: '12px 32px',
                            background: 'var(--color-primary)',
                            color: 'white',
                            borderRadius: '30px',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 15px rgba(212, 175, 55, 0.4)',
                            transition: 'all 0.2s',
                            cursor: 'pointer',
                            border: 'none',
                            fontSize: '1rem'
                        }}
                    >
                        新しい占いを始める
                    </button>
                </div>
            )}
        </div>
    );
};

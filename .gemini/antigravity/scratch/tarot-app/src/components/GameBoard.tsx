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
                                <h4 style={{
                                    color: 'var(--color-text-main)',
                                    marginBottom: '0.8rem',
                                    fontWeight: 'bold',
                                    borderBottom: '1px solid var(--color-primary)',
                                    paddingBottom: '2px'
                                }}>{getPositionLabel(index)}</h4>
                            )}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.2 }}
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
                            borderRadius: '8px',
                            border: '2px dashed var(--color-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--color-text-muted)',
                            background: 'rgba(255, 255, 255, 0.2)',
                            transition: 'all 0.3s ease',
                            boxShadow: 'inset 0 0 20px rgba(141, 110, 99, 0.1)'
                        }}
                    >
                        {isThinking ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                            >
                                <span style={{ fontSize: '3rem', opacity: 0.6 }}>🔮</span>
                            </motion.div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                                <span style={{ fontSize: '3rem', opacity: 0.8 }}>🃏</span>
                                <span style={{ fontFamily: 'serif', fontStyle: 'italic', fontSize: '1.2rem' }}>Draw Card</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {drawnCards.length > 0 && (
                <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', paddingBottom: '4rem' }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '2rem',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        {drawnCards.map((result, index) => (
                            <motion.div
                                key={`${result.card.id}-desc`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (index * 0.15) }}
                                className="paper-panel"
                                style={{
                                    padding: '2rem',
                                    maxWidth: '320px',
                                    textAlign: 'center',
                                    flex: '1 1 300px'
                                }}
                            >
                                {gameMode === 'three' && (
                                    <div style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                        — {getPositionLabel(index)} —
                                    </div>
                                )}
                                <h3 style={{
                                    color: 'var(--color-text-main)',
                                    fontSize: '1.6rem',
                                    marginBottom: '0.8rem',
                                    fontFamily: 'serif'
                                }}>
                                    {result.card.nameJa}
                                    <span style={{ fontSize: '1rem', marginLeft: '10px', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>
                                        {result.isReversed ? '(逆位置)' : '(正位置)'}
                                    </span>
                                </h3>
                                <p style={{
                                    fontStyle: 'italic',
                                    marginBottom: '1.5rem',
                                    color: 'var(--color-text-main)',
                                    lineHeight: '1.8',
                                    fontSize: '1.05rem',
                                    borderTop: '1px solid #d7ccc8',
                                    borderBottom: '1px solid #d7ccc8',
                                    padding: '1rem 0'
                                }}>
                                    "{result.isReversed ? result.card.meaningReversed : result.card.meaningUpright}"
                                </p>
                                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    {result.card.keywords.map(k => (
                                        <span key={k} style={{
                                            fontSize: '0.85rem',
                                            padding: '4px 12px',
                                            borderRadius: '2px',
                                            background: '#efebe9',
                                            border: '1px solid #d7ccc8',
                                            color: '#5d4037',
                                            fontFamily: 'sans-serif'
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
                            padding: '12px 40px',
                            background: '#3e2723',
                            color: '#fff8e1',
                            borderRadius: '4px',
                            fontWeight: 'normal',
                            fontFamily: 'serif',
                            fontSize: '1.1rem',
                            letterSpacing: '0.1em',
                            border: '1px solid #5d4037'
                        }}
                    >
                        占いをやり直す
                    </button>
                </div>
            )}
        </div>
    );
};

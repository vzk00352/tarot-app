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
                            padding: '10px 24px',
                            background: gameMode === 'one' ? '#1d1d1f' : '#ffffff',
                            color: gameMode === 'one' ? '#ffffff' : '#1d1d1f',
                            border: '1px solid #d2d2d7',
                            borderRadius: '980px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            fontWeight: 500
                        }}
                    >
                        One Oracle (1枚)
                    </button>
                    <button
                        onClick={() => setGameMode('three')}
                        style={{
                            padding: '10px 24px',
                            background: gameMode === 'three' ? '#1d1d1f' : '#ffffff',
                            color: gameMode === 'three' ? '#ffffff' : '#1d1d1f',
                            border: '1px solid #d2d2d7',
                            borderRadius: '980px',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            fontWeight: 500
                        }}
                    >
                        Three Spread (3枚)
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
                                <span style={{
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '0.5rem',
                                    fontSize: '0.8rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>{getPositionLabel(index)}</span>
                            )}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: 'easeOut', delay: index * 0.1 }}
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
                            border: '2px dashed #d2d2d7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--color-text-muted)',
                            background: '#ffffff',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        {isThinking ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            >
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    border: '2px solid var(--color-text-muted)',
                                    borderTopColor: 'transparent',
                                    borderRadius: '50%'
                                }} />
                            </motion.div>
                        ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                                <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>+</span>
                                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Tap to Draw</span>
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
                        gap: '1.5rem',
                        justifyContent: 'center',
                        width: '100%'
                    }}>
                        {drawnCards.map((result, index) => (
                            <motion.div
                                key={`${result.card.id}-desc`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                                className="simple-card"
                                style={{
                                    flex: '1 1 300px',
                                    maxWidth: '320px',
                                    textAlign: 'left'
                                }}
                            >
                                {gameMode === 'three' && (
                                    <div style={{
                                        color: 'var(--color-text-muted)',
                                        fontSize: '0.75rem',
                                        marginBottom: '0.5rem',
                                        fontWeight: 600,
                                        textTransform: 'uppercase'
                                    }}>
                                        {getPositionLabel(index)}
                                    </div>
                                )}
                                <h3 style={{
                                    color: 'var(--color-text-main)',
                                    fontSize: '1.25rem',
                                    marginBottom: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    {result.card.nameJa}
                                    <span style={{
                                        fontSize: '0.75rem',
                                        color: 'var(--color-text-muted)',
                                        fontWeight: 400,
                                        background: '#f5f5f7',
                                        padding: '4px 8px',
                                        borderRadius: '4px'
                                    }}>
                                        {result.isReversed ? '逆位置' : '正位置'}
                                    </span>
                                </h3>
                                <p style={{
                                    marginBottom: '1.25rem',
                                    color: '#424245',
                                    lineHeight: '1.6',
                                    fontSize: '0.95rem'
                                }}>
                                    {result.isReversed ? result.card.meaningReversed : result.card.meaningUpright}
                                </p>
                                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                    {result.card.keywords.map(k => (
                                        <span key={k} style={{
                                            fontSize: '0.75rem',
                                            padding: '4px 10px',
                                            borderRadius: '4px',
                                            background: '#f5f5f7',
                                            color: 'var(--color-text-muted)',
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
                            padding: '14px 40px',
                            background: '#1d1d1f',
                            color: '#ffffff',
                            fontWeight: 600,
                            border: 'none',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                        }}
                    >
                        New Reading
                    </button>
                </div>
            )}
        </div>
    );
};

import React from 'react';
import { motion } from 'framer-motion';
import { TarotCard as TarotCardType } from '../types';

interface TarotCardProps {
    card: TarotCardType;
    isReversed: boolean;
    isRevealed: boolean;
    onReveal?: () => void;
    style?: React.CSSProperties;
}

export const TarotCard: React.FC<TarotCardProps> = ({ card, isReversed, isRevealed, onReveal, style }) => {
    return (
        <div style={{ perspective: '1000px', width: '200px', height: '340px', ...style }}>
            <motion.div
                className="card-inner"
                initial={false}
                animate={{ rotateY: isRevealed ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                onClick={onReveal}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    cursor: isRevealed ? 'default' : 'pointer',
                }}
            >
                {/* Card Back - Antique Parchment */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    backgroundColor: '#fff8e1', /* Cream paper */
                    borderRadius: '8px',
                    border: '4px double #8d6e63', /* Double border like a book */
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '2px 4px 10px rgba(0,0,0,0.2)',
                    background: 'radial-gradient(circle, #fff8e1 20%, #ffecb3 100%)',
                }}>
                    <div style={{
                        width: '85%',
                        height: '92%',
                        border: '1px solid #d4af37',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.8
                    }}>
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            border: '2px solid #8d6e63',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#efebe9'
                        }}>
                            <span style={{ fontSize: '2rem', color: '#5d4037' }}>⚜️</span>
                        </div>
                    </div>
                </div>

                {/* Card Front */}
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    backgroundColor: '#dfe4ea',
                    borderRadius: '12px',
                    transform: 'rotateY(180deg)',
                    overflow: 'hidden',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.5)',
                }}>
                    {/** Image Area */}
                    <div style={{
                        height: '70%',
                        backgroundImage: `url(${card.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: isReversed ? 'rotate(180deg)' : 'none',
                    }} />

                    {/** Text Area */}
                    <div style={{
                        height: '30%',
                        padding: '10px',
                        textAlign: 'center',
                        background: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        color: '#2c3e50'
                    }}>
                        <h3 style={{ margin: 0, fontSize: '0.9rem', marginBottom: '4px', fontFamily: 'var(--font-serif)' }}>{card.nameJa}</h3>
                        <p style={{ margin: 0, fontSize: '0.7rem', color: '#7f8c8d' }}>
                            {isReversed ? '(逆位置)' : '(正位置)'}
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

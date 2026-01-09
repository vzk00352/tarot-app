import './index.css'
import { GameBoard } from './components/GameBoard'

function App() {
    return (
        <div className="app-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            padding: '2rem'
        }}>
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{
                    marginBottom: '2rem',
                    fontSize: '2.5rem',
                    color: '#1d1d1f'
                }}>
                    Tarot Mystique
                </h1>
                <p style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Reveal your destiny</p>
            </header>

            <main style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <GameBoard />
            </main>
        </div>
    )
}

export default App

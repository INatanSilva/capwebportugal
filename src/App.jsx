import { useState } from 'react'
import './App.css'

function App() {
  const [showPopup, setShowPopup] = useState(false)
  const [copiedNumber, setCopiedNumber] = useState(null)

  const copyToClipboard = async (number) => {
    try {
      await navigator.clipboard.writeText(number)
      setCopiedNumber(number)
      setTimeout(() => setCopiedNumber(null), 2000)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  return (
    <div className="app">
      <div className="container">
        {/* Ícones de Redes Sociais */}
        <div className="social-icons">
          <a 
            href="https://www.instagram.com/cap_portugal/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link instagram"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a 
            href="https://www.facebook.com/CAPPORTUGAL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link facebook"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
        </div>

        {/* Botão de Ajudar Missões */}
        <button 
          className="btn-missoes"
          onClick={() => setShowPopup(true)}
        >
          Ajudar as Missões Portugal 2025
        </button>
      </div>

      {/* Popup MBWay */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="popup-close"
              onClick={() => setShowPopup(false)}
              aria-label="Fechar"
            >
              ×
            </button>
            <h3 className="popup-title">MBWay</h3>
            <p className="popup-subtitle">Clique no número para copiar</p>
            
            <div className="mbway-numbers">
              <div 
                className={`mbway-number ${copiedNumber === '960314621' ? 'copied' : ''}`}
                onClick={() => copyToClipboard('960314621')}
              >
                <span className="number">960314621</span>
                {copiedNumber === '960314621' && (
                  <span className="copied-text">✓ Copiado!</span>
                )}
              </div>
              
              <div 
                className={`mbway-number ${copiedNumber === '969074425' ? 'copied' : ''}`}
                onClick={() => copyToClipboard('969074425')}
              >
                <span className="number">969074425</span>
                {copiedNumber === '969074425' && (
                  <span className="copied-text">✓ Copiado!</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

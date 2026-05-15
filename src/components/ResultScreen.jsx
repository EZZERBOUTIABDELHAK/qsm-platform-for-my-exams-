export default function ResultScreen({ score, total, onRetry, onBack }) {
  const pct = Math.round((score / total) * 100);

  function getMessage() {
    if (pct === 100) return 'Parfait ! 🎉';
    if (pct >= 80) return 'Excellent travail !';
    if (pct >= 60) return 'Bon résultat, continuez !';
    if (pct >= 40) return 'Encore un effort…';
    return 'Révisez et réessayez.';
  }

  return (
    <div className="container">
      <div className="result-wrapper">
        <h1>Résultats</h1>

        <div className="score-display">
          {score}<span style={{ fontSize: '1.8rem', color: 'var(--text-muted)' }}>/{total}</span>
        </div>
        <p className="score-sub">{pct}% de bonnes réponses — {getMessage()}</p>

        <div className="score-bar-wrap">
          <div className="score-bar-fill" style={{ width: `${pct}%` }} />
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          marginBottom: 32,
          textAlign: 'left',
        }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '14px 18px' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#22c55e' }}>{score}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 2 }}>Correctes</div>
          </div>
          <div style={{ border: '1px solid var(--border)', borderRadius: 8, padding: '14px 18px' }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ef4444' }}>{total - score}</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 2 }}>Incorrectes</div>
          </div>
        </div>

        <div className="result-actions">
          <button className="btn btn-primary" onClick={onRetry}>↺ Réessayer</button>
          <button className="btn btn-outline" onClick={onBack}>← Retour aux cours</button>
        </div>
      </div>
    </div>
  );
}

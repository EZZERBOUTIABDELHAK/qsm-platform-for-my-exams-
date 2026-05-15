import React from 'react';

export default function ModuleSelectionScreen({ quizData, onSelectModule }) {
  return (
    <div className="container">
      <div className="home-header">
        <h1>Plateforme QSM</h1>
        <p style={{ marginTop: 6 }}>Sélectionnez un module pour commencer.</p>
      </div>

      <div className="module-section">
        <div className="module-label">Modules disponibles</div>
        <div className="course-list">
          {quizData.modules.map((module) => (
            <button
              key={module.id}
              className="card course-card"
              onClick={() => onSelectModule(module)}
              style={{ display: 'flex', alignItems: 'center', padding: '20px' }}
            >
              <div style={{ flex: 1, textAlign: 'left' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: 4 }}>
                  {module.name}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  {module.courses.length} Chapitres • {module.courses.reduce((acc, c) => acc + c.questions.length, 0)} Questions
                </div>
              </div>
              <div style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>→</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

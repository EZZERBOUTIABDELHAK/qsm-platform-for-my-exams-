import { useState } from 'react';

export default function HomeScreen({ quizData, onStart }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [questionCount, setQuestionCount] = useState(10);

  const module = quizData.modules[0];
  const maxQuestions = selectedCourse ? selectedCourse.questions.length : 0;
  const MIN = 5;

  function handleCourseClick(course) {
    setSelectedCourse(course);
    setQuestionCount(Math.min(10, course.questions.length));
  }

  function handleCountChange(e) {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val)) val = MIN;
    val = Math.max(MIN, Math.min(maxQuestions, val));
    setQuestionCount(val);
  }

  function handleStart() {
    if (!selectedCourse) return;
    onStart(module, selectedCourse, questionCount);
  }

  return (
    <div className="container">
      <div className="home-header">
        <p className="module-label">Module</p>
        <h1>{module.name}</h1>
        <p style={{ marginTop: 6 }}>Choisissez un cours et lancez votre quiz.</p>
      </div>

      <div className="module-section">
        <div className="module-label">Cours disponibles</div>
        <div className="course-list">
          {module.courses.map((course) => {
            const isSelected = selectedCourse?.id === course.id;
            return (
              <button
                key={course.id}
                className={`card course-card${isSelected ? ' correct' : ''}`}
                onClick={() => handleCourseClick(course)}
              >
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{course.name}</div>
                  {course.description && (
                    <div style={{ fontSize: '0.76rem', color: isSelected ? '#166534' : 'var(--text-muted)', marginTop: 3 }}>
                      {course.description}
                    </div>
                  )}
                </div>
                <span className="course-badge">{course.questions.length} q.</span>
              </button>
            );
          })}
        </div>
      </div>

      {selectedCourse && (
        <>
          <div className="divider" />
          <div className="count-row">
            <label htmlFor="question-count">
              Nombre de questions
              <br />
              <span style={{ fontWeight: 400, color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                min {MIN} — max {maxQuestions}
              </span>
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <button
                className="btn btn-outline"
                style={{ padding: '6px 12px', fontSize: '1rem', lineHeight: 1 }}
                onClick={() => setQuestionCount(q => Math.max(MIN, q - 5))}
              >−</button>
              <input
                id="question-count"
                type="number"
                min={MIN}
                max={maxQuestions}
                value={questionCount}
                onChange={handleCountChange}
              />
              <button
                className="btn btn-outline"
                style={{ padding: '6px 12px', fontSize: '1rem', lineHeight: 1 }}
                onClick={() => setQuestionCount(q => Math.min(maxQuestions, q + 5))}
              >+</button>
            </div>
          </div>
          <div style={{ marginBottom: 20 }}>
            <button
              className="btn btn-outline"
              style={{ fontSize: '0.78rem', padding: '5px 12px' }}
              onClick={() => setQuestionCount(maxQuestions)}
            >
              Tout sélectionner ({maxQuestions})
            </button>
          </div>
        </>
      )}

      <div className="start-row">
        <button
          className="btn btn-primary"
          onClick={handleStart}
          disabled={!selectedCourse}
        >
          Commencer →
        </button>
      </div>
    </div>
  );
}

export default function QuizScreen({ questions, courseName, currentIndex, selectedAnswer, onAnswer, onNext }) {
  const question = questions[currentIndex];
  const total = questions.length;
  const progress = ((currentIndex + (selectedAnswer !== null ? 1 : 0)) / total) * 100;
  const answered = selectedAnswer !== null;

  function getCardClass(idx) {
    if (!answered) return 'card';
    if (idx === question.correctAnswer) return 'card correct';
    if (idx === selectedAnswer) return 'card wrong';
    return 'card neutral';
  }

  return (
    <div className="container">
      {/* Progress */}
      <p className="progress-label">{currentIndex + 1} / {total}</p>
      <div className="progress-wrap">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Meta */}
      <div className="quiz-meta">
        <span className="quiz-course-name">{courseName}</span>
      </div>

      {/* Question */}
      <p className="question-text">{question.question}</p>

      {/* Options */}
      <div className="options-list">
        {question.options.map((opt, idx) => (
          <button
            key={idx}
            className={getCardClass(idx)}
            onClick={() => !answered && onAnswer(idx)}
            disabled={answered}
          >
            <span style={{ fontWeight: 600, marginRight: 10, color: 'inherit' }}>
              {String.fromCharCode(65 + idx)}.
            </span>
            {opt}
          </button>
        ))}
      </div>

      {/* Explanation */}
      {answered && question.explanation && (
        <div className="explanation-box">
          <strong>Explication</strong>
          {question.explanation}
        </div>
      )}

      {/* Next */}
      {answered && (
        <div className="next-row">
          <button className="btn btn-primary" onClick={onNext}>
            {currentIndex + 1 < total ? 'Suivant →' : 'Voir les résultats →'}
          </button>
        </div>
      )}
    </div>
  );
}

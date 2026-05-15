import { useState, useMemo } from 'react';
import quizData from './data/quizData';
import HomeScreen from './components/HomeScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import './index.css';

// Fisher-Yates shuffle (pure, does not mutate)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [screen, setScreen] = useState('home'); // 'home' | 'quiz' | 'result'
  const [activeModule, setActiveModule] = useState(null);
  const [activeCourse, setActiveCourse] = useState(null);
  const [questionCount, setQuestionCount] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  function handleStart(module, course, count) {
    const shuffled = shuffle(course.questions).slice(0, count);
    setActiveModule(module);
    setActiveCourse(course);
    setQuestionCount(count);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setScreen('quiz');
  }

  function handleAnswer(idx) {
    setSelectedAnswer(idx);
    if (idx === questions[currentIndex].correctAnswer) {
      setScore((s) => s + 1);
    }
  }

  function handleNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setScreen('result');
    }
  }

  function handleRetry() {
    // Re-shuffle same course + same count
    const shuffled = shuffle(activeCourse.questions).slice(0, questionCount);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setScreen('quiz');
  }

  function handleBack() {
    setScreen('home');
    setActiveModule(null);
    setActiveCourse(null);
    setQuestions([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
  }

  return (
    <div className="app">
      {screen === 'home' && (
        <HomeScreen quizData={quizData} onStart={handleStart} />
      )}

      {screen === 'quiz' && (
        <QuizScreen
          questions={questions}
          courseName={activeCourse.name}
          currentIndex={currentIndex}
          selectedAnswer={selectedAnswer}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          score={score}
          total={questions.length}
          onRetry={handleRetry}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

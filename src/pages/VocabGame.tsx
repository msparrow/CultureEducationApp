import { useEffect, useMemo, useState } from 'react';

import { shuffleInPlace, sampleDistinct } from '@utils/game';
import { GameShell } from '@components/GameShell';
import { useCulture } from '../context/CultureContext';

export type Direction = 'native-en' | 'en-native';

export default function VocabGame({ direction }: { direction: Direction }) {
  const { config, loading } = useCulture();
  const vocabPairs = config.vocab;
  // Use the entire dataset in one session
  const [indices, setIndices] = useState<number[]>(() => {
    const all = Array.from({ length: vocabPairs.length }, (_, i) => i);
    return shuffleInPlace(all);
  });
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [showResult, setShowResult] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => { /* streak removed */ }, []);

  // Restart session when direction or culture changes
  useEffect(() => {
    const all = Array.from({ length: vocabPairs.length }, (_, i) => i);
    setIndices(shuffleInPlace(all));
    setQuestionIndex(0);
    setScore(0);
    setWrong(0);
    setSelected(null);
    setShowResult('idle');
  }, [direction, vocabPairs]);

  const total = indices.length;
  if (loading) {
    return (
      <GameShell title={direction === 'native-en' ? `Loading…` : `Loading…`} subtitle={''} progress={0}>
        <div className="glass card">Loading…</div>
      </GameShell>
    );
  }
  const currentPair = questionIndex < total ? vocabPairs[indices[questionIndex]] : null;

  const options = useMemo(() => {
    if (!currentPair) return [] as string[];
    const isNativeEn = direction === 'native-en';
    const correct = isNativeEn ? currentPair.en : currentPair.ca;
    const others = sampleDistinct([...vocabPairs] as any[], 3, (p) => (isNativeEn ? p.en : p.ca) === correct)
      .map((p) => (isNativeEn ? p.en : p.ca));
    const mixed = shuffleInPlace([correct, ...others]);
    return mixed;
  }, [currentPair?.ca, currentPair?.en, direction, vocabPairs]);

  function handleChoose(idx: number) {
    if (showResult !== 'idle' || !currentPair) return;
    setSelected(idx);
    const isNativeEn = direction === 'native-en';
    const correct = isNativeEn ? currentPair.en : currentPair.ca;
    const chosen = options[idx];
    const ok = chosen === correct;
    setShowResult(ok ? 'correct' : 'wrong');
    if (ok) {
      setScore((s) => s + 1);
      // points removed
    } else {
      setWrong((w) => w + 1);
    }
    setTimeout(() => {
      if (questionIndex + 1 >= total) {
        // Mark finished
        setQuestionIndex(total);
      } else {
        setQuestionIndex((i) => i + 1);
      }
      setShowResult('idle');
      setSelected(null);
    }, 700);
  }

  const progress = total > 0 ? Math.round(((Math.min(questionIndex, total)) / total) * 100) : 0;
  const isDone = questionIndex >= total;

  if (isDone) {
    return (
      <GameShell title={direction === 'native-en' ? `${config.nativeLanguageLabel} → ${config.englishLabel}` : `${config.englishLabel} → ${config.nativeLanguageLabel}`}
        subtitle={`Session complete (${total} questions)`} progress={100} onReset={() => {
        const all = Array.from({ length: vocabPairs.length }, (_, i) => i);
        setIndices(shuffleInPlace(all));
        setQuestionIndex(0);
        setScore(0);
        setWrong(0);
        setSelected(null);
        setShowResult('idle');
      }}>
        <div className="glass card" style={{ display: 'grid', gap: 12 }}>
          <h3>Great job!</h3>
          <p>You scored <strong>{score}</strong> / {total} · Wrong: <strong>{total - score}</strong>.</p>
          <button className="btn" onClick={() => {
            const all = Array.from({ length: vocabPairs.length }, (_, i) => i);
            setIndices(shuffleInPlace(all));
            setQuestionIndex(0);
            setScore(0);
            setWrong(0);
            setSelected(null);
            setShowResult('idle');
          }}>Play again</button>
        </div>
      </GameShell>
    );
  }

  const prompt = currentPair ? (direction === 'native-en' ? currentPair.ca : currentPair.en) : '';

  return (
    <GameShell title={direction === 'native-en' ? `${config.nativeLanguageLabel} → ${config.englishLabel}` : `${config.englishLabel} → ${config.nativeLanguageLabel}`}
      subtitle={total > 0 ? `Question ${questionIndex + 1} of ${total}` : 'Loading…'} progress={progress}>
      <div className="glass card">
        <div style={{ fontSize: 24, fontWeight: 800, marginBottom: 12 }}>{prompt}</div>
        <div className="kpi">Correct: <strong>{score}</strong> · Wrong: <strong>{wrong}</strong></div>
        <div className="options">
          {options.map((opt, idx) => {
            const isSelected = selected === idx; const isCorrect = currentPair && (direction === 'native-en' ? currentPair.en : currentPair.ca) === opt;
            // isCorrect computed above
            const className = [
              'option',
              showResult !== 'idle' && isCorrect ? 'correct' : '',
              showResult !== 'idle' && isSelected && !isCorrect ? 'wrong' : '',
            ].filter(Boolean).join(' ');
            return (
              <button key={idx} className={className} onClick={() => handleChoose(idx)}>
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </GameShell>
  );
}

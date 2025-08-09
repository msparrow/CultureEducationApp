import { Link } from 'react-router-dom';
import { useCulture } from '../context/CultureContext';

export default function Home() {
  const { config } = useCulture();
  return (
    <div className="grid">
      <div className="glass card tile">
        <h3>Vocabulary: {config.nativeLanguageLabel} → {config.englishLabel}</h3>
        <p>Match {config.nativeLanguageLabel} words to their English meanings.</p>
        <Link to="/vocab/native-en" className="btn">Play</Link>
      </div>
      <div className="glass card tile">
        <h3>Vocabulary: {config.englishLabel} → {config.nativeLanguageLabel}</h3>
        <p>Match English words to their {config.nativeLanguageLabel} translations.</p>
        <Link to="/vocab/en-native" className="btn">Play</Link>
      </div>
      <div className="glass card tile">
        <h3>Culture, History, Cuisine & Geography</h3>
        <p>Multiple-choice quiz about {config.name}.</p>
        <Link to="/culture" className="btn">Play</Link>
      </div>
    </div>
  );
}

import { Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import VocabGame from './pages/VocabGame';
import CultureQuiz from './pages/CultureQuiz';
import { useCulture } from './context/CultureContext';

export default function App() {
  const { config, key, setCulture } = useCulture();
  return (
    <div className="app-root">
      <header className="app-header glass">
        <div className="brand">
          <NavLink to="/" className="nav-brand" style={{ color: 'inherit', textDecoration: 'none' }}>
            <h1>Cultural Learning</h1>
          </NavLink>
        </div>
        <div className="brand-center">
          <h1>{config.name}</h1>
        </div>
        <nav className="nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/vocab/native-en">{config.nativeLanguageLabel} → {config.englishLabel}</NavLink>
          <NavLink to="/vocab/en-native">{config.englishLabel} → {config.nativeLanguageLabel}</NavLink>
          <NavLink to="/culture">Culture Quiz</NavLink>
          <div className="select" style={{ marginLeft: 12 }}>
            <select
              className="nav-select"
              aria-label="Select culture"
              value={key}
              onChange={(e) => setCulture(e.target.value as any)}
            >
              <option value="catalonia">Catalonia</option>
              <option value="finland">Finland</option>
              <option value="ireland">Ireland</option>
              <option value="egypt">Egypt</option>
              <option value="mexico">Mexico</option>
              <option value="thailand">Thailand</option>
            </select>
          </div>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vocab/native-en" element={<VocabGame direction="native-en" />} />
          <Route path="/vocab/en-native" element={<VocabGame direction="en-native" />} />
          <Route path="/culture" element={<CultureQuiz />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>{config.footerTagline} · Built by Matt Sparrow</p>
      </footer>
    </div>
  );
}

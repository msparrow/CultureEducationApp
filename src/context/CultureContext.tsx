import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CULTURE_REGISTRY, type CultureKey, type CultureMeta } from '../data/cultures';

export type CultureContextValue = {
  key: CultureKey;
  meta: CultureMeta;
  config: { vocab: readonly any[]; culture: readonly any[]; appTitle: string; nativeLanguageLabel: string; englishLabel: string; footerTagline: string; name: string };
  setCulture: (key: CultureKey) => void;
  loading: boolean;
};

const CultureContext = createContext<CultureContextValue | undefined>(undefined);

export function CultureProvider({ children }: { children: ReactNode }) {
  const [key, setKey] = useState<CultureKey>('catalonia');
  const meta = CULTURE_REGISTRY[key];
  const [loading, setLoading] = useState(true);
  const [vocab, setVocab] = useState<readonly any[]>([]);
  const [culture, setCultureData] = useState<readonly any[]>([]);

  React.useEffect(() => {
    let alive = true;
    setLoading(true);
    meta.loader().then(({ vocab, culture }) => {
      if (!alive) return;
      // Freeze arrays to avoid accidental mutation and enable structural sharing
      setVocab(Object.freeze(vocab.slice()) as readonly any[]);
      setCultureData(Object.freeze(culture.slice()) as readonly any[]);
      setLoading(false);
    });
    return () => { alive = false; };
  }, [key]);

  const config = {
    vocab,
    culture,
    appTitle: meta.appTitle,
    nativeLanguageLabel: meta.nativeLanguageLabel,
    englishLabel: meta.englishLabel,
    footerTagline: meta.footerTagline,
    name: meta.name,
  };

  return (
    <CultureContext.Provider value={{ key, meta, config, setCulture: setKey, loading }}>
      {children}
    </CultureContext.Provider>
  );
}

export function useCulture(): CultureContextValue {
  const ctx = useContext(CultureContext);
  if (!ctx) throw new Error('useCulture must be used within CultureProvider');
  return ctx;
}

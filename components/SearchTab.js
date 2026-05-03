import { useState } from 'react';
import Header from './Header';
import ProviderCard from './ProviderCard';
import providers from '../data/providers';

export default function SearchTab({ onSelectProvider }) {
  const [query, setQuery] = useState('');

  const results = query.trim().length < 2
    ? []
    : providers.filter(p =>
        [p.name, p.service, p.location, ...p.tags]
          .join(' ')
          .toLowerCase()
          .includes(query.toLowerCase())
      );

  return (
    <div className="tab-content">
      <Header subtitle="Plugged" title="Search" />

      <div style={{ padding: '0 20px 20px' }}>
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute',
            left: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 16,
            pointerEvents: 'none',
          }}>
            🔍
          </span>
          <input
            className="input"
            style={{ paddingLeft: 40 }}
            placeholder="Search by name, service, location…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
        </div>
      </div>

      <div style={{ padding: '0 20px' }}>
        {query.trim().length < 2 && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: 32, marginBottom: 8 }}>🔍</p>
            <p>Type to search providers</p>
          </div>
        )}
        {query.trim().length >= 2 && results.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: 32, marginBottom: 8 }}>😔</p>
            <p>No results for "<strong style={{ color: 'var(--text)' }}>{query}</strong>"</p>
            <p style={{ fontSize: 13, marginTop: 8 }}>Try a different service or location</p>
          </div>
        )}
        {results.map(p => (
          <ProviderCard key={p.id} provider={p} onClick={() => onSelectProvider(p)} />
        ))}
      </div>
    </div>
  );
}

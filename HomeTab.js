import Header from './Header';
import ProviderCard from './ProviderCard';
import providers from '../data/providers';

const categories = [
  { id: 'all',      label: 'All',      icon: '⚡' },
  { id: 'barber',   label: 'Barbers',  icon: '✂️' },
  { id: 'nails',    label: 'Nails',    icon: '💅' },
  { id: 'hair',     label: 'Hair',     icon: '💇' },
  { id: 'catering', label: 'Food',     icon: '🍽️' },
  { id: 'tech',     label: 'Tech',     icon: '📱' },
  { id: 'cleaning', label: 'Clean',    icon: '🧹' },
];

export default function HomeTab({ onSelectProvider }) {
  const [active, setActive] = require('react').useState('all');

  const filtered = active === 'all' ? providers : providers.filter(p => p.category === active);

  return (
    <div className="tab-content">
      <Header
        subtitle="Cape Town"
        title="Find Local Services"
      />

      {/* hero strip */}
      <div style={{
        margin: '0 20px 20px',
        padding: '16px 18px',
        borderRadius: 16,
        background: 'linear-gradient(135deg, rgba(200,241,53,.12) 0%, rgba(241,200,53,.08) 100%)',
        border: '1px solid rgba(200,241,53,.25)',
      }}>
        <p style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600, marginBottom: 4 }}>⚡ Plugged connects you to</p>
        <p style={{ fontFamily: 'Syne, sans-serif', fontSize: 22, fontWeight: 800, lineHeight: 1.2 }}>
          Local talent,<br />no middleman.
        </p>
      </div>

      {/* category pills */}
      <div style={{
        display: 'flex',
        gap: 8,
        overflowX: 'auto',
        padding: '0 20px 16px',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}>
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '8px 14px',
              borderRadius: 99,
              fontSize: 13,
              fontWeight: 600,
              border: active === cat.id ? '1.5px solid var(--accent)' : '1px solid var(--border)',
              background: active === cat.id ? 'rgba(200,241,53,.12)' : 'var(--surface)',
              color: active === cat.id ? 'var(--accent)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all .15s',
            }}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* provider list */}
      <div style={{ padding: '0 20px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: 12, marginBottom: 12, fontWeight: 500 }}>
          {filtered.length} provider{filtered.length !== 1 ? 's' : ''} found
        </p>
        {filtered.map((p, i) => (
          <div key={p.id} className={`delay-${Math.min(i + 1, 4)}`}>
            <ProviderCard provider={p} onClick={() => onSelectProvider(p)} />
          </div>
        ))}
      </div>
    </div>
  );
}

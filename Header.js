export default function Header({ title, subtitle, action }) {
  return (
    <header style={{
      padding: '20px 20px 0',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 20,
    }}>
      <div>
        {subtitle && (
          <p style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 4 }}>
            {subtitle}
          </p>
        )}
        <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 26, fontWeight: 800, lineHeight: 1.1, color: 'var(--text)' }}>
          {title}
        </h1>
      </div>
      {action && (
        <button
          onClick={action.onClick}
          style={{
            background: 'var(--accent)',
            color: '#0a0a0a',
            border: 'none',
            borderRadius: 10,
            padding: '8px 14px',
            fontWeight: 700,
            fontSize: 13,
            cursor: 'pointer',
          }}
        >
          {action.label}
        </button>
      )}
    </header>
  );
}

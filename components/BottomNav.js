export default function BottomNav({ active, setActive }) {
  const tabs = [
    { id: 'home',   label: 'Home',   icon: '🏠' },
    { id: 'search', label: 'Search', icon: '🔍' },
    { id: 'join',   label: 'Join',   icon: '✨' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: 480,
      height: 'var(--nav-h)',
      background: 'rgba(14,14,14,.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      zIndex: 100,
      padding: '0 8px',
    }}>
      {tabs.map(tab => {
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              padding: '8px 0',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              transition: 'all .15s ease',
            }}
          >
            <span style={{ fontSize: tab.id === 'join' ? 22 : 20, filter: isActive ? 'none' : 'grayscale(1) opacity(.5)' }}>
              {tab.icon}
            </span>
            <span style={{
              fontSize: 11,
              fontWeight: isActive ? 700 : 400,
              color: isActive ? 'var(--accent)' : 'var(--text-muted)',
              fontFamily: 'Syne, sans-serif',
              letterSpacing: '.04em',
            }}>
              {tab.label}
            </span>
            {isActive && (
              <span style={{
                position: 'absolute',
                bottom: 6,
                width: 4,
                height: 4,
                borderRadius: '50%',
                background: 'var(--accent)',
              }} />
            )}
          </button>
        );
      })}
    </nav>
  );
}

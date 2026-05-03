export default function ProviderCard({ provider, onClick }) {
  const { name, service, price, rating, reviews, location, badge, badgeType, available, tags, emoji } = provider;

  return (
    <div
      className="card fade-up"
      onClick={onClick}
      style={{
        padding: 16,
        marginBottom: 12,
        cursor: 'pointer',
        transition: 'border-color .15s, transform .15s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(200,241,53,.4)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {/* avatar */}
          <div style={{
            width: 48,
            height: 48,
            borderRadius: 14,
            background: 'var(--surface2)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            flexShrink: 0,
          }}>
            {emoji}
          </div>
          <div>
            <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, marginBottom: 2 }}>{name}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>{service} · {location}</p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
          <span className={`badge badge-${badgeType}`}>{badge}</span>
          {!available && <span className="badge badge-gray">Busy</span>}
        </div>
      </div>

      {/* rating + price */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span className="stars">{'★'.repeat(Math.round(rating))}</span>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{rating}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: 12 }}>({reviews})</span>
        </div>
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--accent)', fontSize: 14 }}>{price}</span>
      </div>

      {/* tags */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            padding: '3px 10px',
            borderRadius: 99,
            fontSize: 11,
            background: 'var(--surface2)',
            color: 'var(--text-muted)',
            border: '1px solid var(--border)',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

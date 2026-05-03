export default function ProviderProfile({ provider, onBack }) {
  if (!provider) return null;
  const { name, service, price, rating, reviews, location, badge, badgeType, available, bio, tags, emoji, whatsapp } = provider;

  const waLink = `https://wa.me/${whatsapp}?text=Hi%20${encodeURIComponent(name)}%2C%20I%20found%20you%20on%20Plugged%20and%20I%27d%20like%20to%20book%20your%20services.`;

  return (
    <div className="tab-content" style={{ padding: '0 0 80px' }}>
      {/* hero */}
      <div style={{
        background: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '20px 20px 24px',
        position: 'relative',
      }}>
        <button
          onClick={onBack}
          style={{
            background: 'var(--surface2)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            padding: '6px 12px',
            color: 'var(--text)',
            fontSize: 13,
            cursor: 'pointer',
            marginBottom: 20,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          ← Back
        </button>

        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 16 }}>
          <div style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            background: 'var(--bg)',
            border: '2px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 34,
          }}>
            {emoji}
          </div>
          <div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{name}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>{service} · {location}</p>
            <div style={{ display: 'flex', gap: 6, marginTop: 6 }}>
              <span className={`badge badge-${badgeType}`}>{badge}</span>
              <span className={`badge badge-${available ? 'green' : 'gray'}`}>
                {available ? 'Available now' : 'Currently busy'}
              </span>
            </div>
          </div>
        </div>

        {/* stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 8,
        }}>
          {[
            { label: 'Rating', value: `${rating} ★` },
            { label: 'Reviews', value: reviews },
            { label: 'Starting at', value: price },
          ].map(s => (
            <div key={s.label} style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '10px 12px',
              textAlign: 'center',
            }}>
              <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 15, color: 'var(--accent)', marginBottom: 2 }}>{s.value}</p>
              <p style={{ color: 'var(--text-muted)', fontSize: 11 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* body */}
      <div style={{ padding: '20px 20px 0' }}>

        {/* about */}
        <div style={{ marginBottom: 20 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.06em' }}>About</h3>
          <p style={{ lineHeight: 1.7, color: 'var(--text)', fontSize: 14 }}>{bio}</p>
        </div>

        {/* tags */}
        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.06em' }}>Services</h3>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {tags.map(tag => (
              <span key={tag} style={{
                padding: '6px 14px',
                borderRadius: 99,
                fontSize: 13,
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-wa"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            padding: '16px 20px',
            borderRadius: 14,
            fontSize: 16,
            fontWeight: 700,
            textDecoration: 'none',
            background: '#25D366',
            color: '#fff',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book via WhatsApp
        </a>

        <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 12, marginTop: 12 }}>
          Opens WhatsApp with a pre-filled message
        </p>
      </div>
    </div>
  );
}

import { useState } from 'react';
import Header from './Header';

const FORM_WA = '27600000000'; // replace with the business WhatsApp number

export default function JoinTab() {
  const [form, setForm] = useState({ name: '', service: '', location: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.service || !form.phone) return;
    const msg = `Hi Plugged! I want to list my services.%0A%0A*Name:* ${encodeURIComponent(form.name)}%0A*Service:* ${encodeURIComponent(form.service)}%0A*Location:* ${encodeURIComponent(form.location)}%0A*Phone:* ${encodeURIComponent(form.phone)}`;
    window.open(`https://wa.me/${FORM_WA}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="tab-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 24px' }}>
        <p style={{ fontSize: 56, marginBottom: 16 }}>🎉</p>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 24, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>You&apos;re on your way!</h2>
        <p style={{ color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.7 }}>
          We&apos;ve opened WhatsApp for you. Send the message and we&apos;ll get you listed within 24 hours.
        </p>
        <button
          className="btn btn-outline"
          onClick={() => setSubmitted(false)}
          style={{ marginTop: 32, maxWidth: 240 }}
        >
          Start over
        </button>
      </div>
    );
  }

  return (
    <div className="tab-content">
      <Header subtitle="For providers" title="Get Listed" />

      {/* value props */}
      <div style={{ padding: '0 20px 24px' }}>
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: 16,
          marginBottom: 20,
        }}>
          {[
            { icon: '🆓', text: 'Free to list — no monthly fees' },
            { icon: '📲', text: 'Customers contact you directly on WhatsApp' },
            { icon: '🌍', text: 'Reach people in your area' },
          ].map(b => (
            <div key={b.icon} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: 20 }}>{b.icon}</span>
              <p style={{ fontSize: 14, lineHeight: 1.5 }}>{b.text}</p>
            </div>
          )).reduce((acc, el, i, arr) => {
            const item = { ...el, props: { ...el.props, style: i === arr.length - 1 ? { ...el.props.style, borderBottom: 'none' } : el.props.style } };
            acc.push(item);
            return acc;
          }, [])}
        </div>

        {/* form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', marginBottom: 6 }}>
              Your name *
            </label>
            <input className="input" placeholder="e.g. Kabelo Mokoena" value={form.name} onChange={set('name')} />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', marginBottom: 6 }}>
              What service do you offer? *
            </label>
            <input className="input" placeholder="e.g. Barber, Nail Tech, Catering…" value={form.service} onChange={set('service')} />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', marginBottom: 6 }}>
              Your area / suburb
            </label>
            <input className="input" placeholder="e.g. Khayelitsha, Bellville…" value={form.location} onChange={set('location')} />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '.06em', display: 'block', marginBottom: 6 }}>
              WhatsApp number *
            </label>
            <input className="input" placeholder="e.g. 071 234 5678" value={form.phone} onChange={set('phone')} />
          </div>

          <button
            className="btn btn-primary"
            onClick={handleSubmit}
            style={{ marginTop: 8, padding: '16px', fontSize: 16 }}
          >
            Submit via WhatsApp ✨
          </button>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 12 }}>
            We&apos;ll verify and list you within 24 hours
          </p>
        </div>
      </div>
    </div>
  );
}

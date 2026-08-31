import React from 'react';

export function Field({ label, name, type = 'text', value, onChange, error, required, options, rows, placeholder }) {
  const base = 'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy outline-none transition focus:border-royal focus:ring-2 focus:ring-royal/20';
  const cls = `${base} ${error ? 'border-destructive' : 'border-border'}`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-500 text-navy" style={{ fontWeight: 500 }}>
        {label}{required && <span className="text-destructive"> *</span>}
      </label>
      {type === 'textarea' ? (
        <textarea id={name} name={name} value={value} onChange={onChange} rows={rows || 4} placeholder={placeholder} className={cls} />
      ) : type === 'select' ? (
        <select id={name} name={name} value={value} onChange={onChange} className={cls}>
          <option value="">Select...</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} className={cls} />
      )}
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}

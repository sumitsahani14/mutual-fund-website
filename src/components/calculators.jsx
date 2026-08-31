import React, { useMemo, useState } from 'react';

const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
const fmtShort = (n) => {
  if (n >= 10000000) return '₹' + (n / 10000000).toFixed(2) + ' Cr';
  if (n >= 100000) return '₹' + (n / 100000).toFixed(2) + ' L';
  return fmt(n);
};

function Slider({ label, value, set, min, max, step, unit }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-500 text-navy" style={{ fontWeight: 500 }}>{label}</label>
        <span className="rounded-lg bg-muted px-3 py-1 text-sm font-600 text-royal" style={{ fontWeight: 600 }}>
          {unit === '₹' ? fmt(value) : `${value}${unit || ''}`}
        </span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => set(Number(e.target.value))}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-[hsl(var(--royal))]"
        style={{ accentColor: 'hsl(var(--royal))' }} />
    </div>
  );
}

function ResultCard({ rows, highlight }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="space-y-3">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0">
            <span className="text-sm text-muted-foreground">{r.label}</span>
            <span className="font-600 text-navy" style={{ fontWeight: 600 }}>{r.value}</span>
          </div>
        ))}
      </div>
      {highlight && (
        <div className="mt-5 rounded-xl navy-gradient p-5 text-center text-white">
          <p className="text-xs uppercase tracking-wider text-white/60">{highlight.label}</p>
          <p className="mt-1 font-display text-3xl font-700" style={{ fontWeight: 700 }}>{highlight.value}</p>
        </div>
      )}
    </div>
  );
}

function Shell({ controls, result }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-7 rounded-2xl border border-border bg-white p-6 shadow-sm">{controls}</div>
      <div>{result}</div>
    </div>
  );
}

function SIP() {
  const [amt, setAmt] = useState(10000);
  const [yrs, setYrs] = useState(15);
  const [rate, setRate] = useState(12);
  const { invested, total } = useMemo(() => {
    const n = yrs * 12, i = rate / 100 / 12;
    const fv = amt * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    return { invested: amt * n, total: fv };
  }, [amt, yrs, rate]);
  return <Shell
    controls={<>
      <Slider label="Monthly Investment" value={amt} set={setAmt} min={500} max={200000} step={500} unit="₹" />
      <Slider label="Investment Period" value={yrs} set={setYrs} min={1} max={40} step={1} unit=" yrs" />
      <Slider label="Expected Return (p.a.)" value={rate} set={setRate} min={1} max={20} step={0.5} unit="%" />
    </>}
    result={<ResultCard
      rows={[{ label: 'Invested Amount', value: fmtShort(invested) }, { label: 'Estimated Returns', value: fmtShort(total - invested) }]}
      highlight={{ label: 'Total Wealth', value: fmtShort(total) }} />}
  />;
}

function Lumpsum() {
  const [amt, setAmt] = useState(500000);
  const [yrs, setYrs] = useState(10);
  const [rate, setRate] = useState(12);
  const total = useMemo(() => amt * Math.pow(1 + rate / 100, yrs), [amt, yrs, rate]);
  return <Shell
    controls={<>
      <Slider label="Investment Amount" value={amt} set={setAmt} min={10000} max={10000000} step={10000} unit="₹" />
      <Slider label="Investment Period" value={yrs} set={setYrs} min={1} max={40} step={1} unit=" yrs" />
      <Slider label="Expected Return (p.a.)" value={rate} set={setRate} min={1} max={20} step={0.5} unit="%" />
    </>}
    result={<ResultCard rows={[{ label: 'Invested Amount', value: fmtShort(amt) }, { label: 'Estimated Returns', value: fmtShort(total - amt) }]} highlight={{ label: 'Total Value', value: fmtShort(total) }} />}
  />;
}

function SWP() {
  const [corpus, setCorpus] = useState(5000000);
  const [wd, setWd] = useState(30000);
  const [yrs, setYrs] = useState(20);
  const [rate, setRate] = useState(9);
  const { balance, withdrawn } = useMemo(() => {
    let bal = corpus; const i = rate / 100 / 12; const n = yrs * 12;
    for (let m = 0; m < n; m++) { bal = bal * (1 + i) - wd; if (bal < 0) { bal = 0; break; } }
    return { balance: bal, withdrawn: wd * n };
  }, [corpus, wd, yrs, rate]);
  return <Shell
    controls={<>
      <Slider label="Total Investment" value={corpus} set={setCorpus} min={100000} max={50000000} step={100000} unit="₹" />
      <Slider label="Monthly Withdrawal" value={wd} set={setWd} min={1000} max={500000} step={1000} unit="₹" />
      <Slider label="Period" value={yrs} set={setYrs} min={1} max={40} step={1} unit=" yrs" />
      <Slider label="Expected Return (p.a.)" value={rate} set={setRate} min={1} max={15} step={0.5} unit="%" />
    </>}
    result={<ResultCard rows={[{ label: 'Total Withdrawn', value: fmtShort(withdrawn) }, { label: 'Final Balance', value: fmtShort(balance) }]} highlight={{ label: 'Balance After Period', value: fmtShort(balance) }} />}
  />;
}

function Retirement() {
  const [age, setAge] = useState(30);
  const [ret, setRet] = useState(60);
  const [exp, setExp] = useState(50000);
  const [infl, setInfl] = useState(6);
  const [rate, setRate] = useState(12);
  const { corpus, sip } = useMemo(() => {
    const yrsToRet = ret - age;
    const futureExp = exp * 12 * Math.pow(1 + infl / 100, yrsToRet);
    const corpus = futureExp * 25;
    const n = yrsToRet * 12, i = rate / 100 / 12;
    const sip = corpus / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    return { corpus, sip };
  }, [age, ret, exp, infl, rate]);
  return <Shell
    controls={<>
      <Slider label="Current Age" value={age} set={setAge} min={18} max={55} step={1} unit=" yrs" />
      <Slider label="Retirement Age" value={ret} set={setRet} min={45} max={70} step={1} unit=" yrs" />
      <Slider label="Monthly Expenses (today)" value={exp} set={setExp} min={10000} max={500000} step={5000} unit="₹" />
      <Slider label="Inflation" value={infl} set={setInfl} min={2} max={10} step={0.5} unit="%" />
      <Slider label="Expected Return" value={rate} set={setRate} min={6} max={18} step={0.5} unit="%" />
    </>}
    result={<ResultCard rows={[{ label: 'Retirement Corpus Needed', value: fmtShort(corpus) }]} highlight={{ label: 'Monthly SIP Required', value: fmtShort(sip) }} />}
  />;
}

function EMI({ maxLoan = 20000000, label = 'Loan Amount' }) {
  const [amt, setAmt] = useState(1000000);
  const [rate, setRate] = useState(9);
  const [yrs, setYrs] = useState(10);
  const { emi, interest, total } = useMemo(() => {
    const i = rate / 100 / 12, n = yrs * 12;
    const emi = (amt * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    const total = emi * n;
    return { emi, interest: total - amt, total };
  }, [amt, rate, yrs]);
  return <Shell
    controls={<>
      <Slider label={label} value={amt} set={setAmt} min={50000} max={maxLoan} step={50000} unit="₹" />
      <Slider label="Interest Rate (p.a.)" value={rate} set={setRate} min={5} max={20} step={0.1} unit="%" />
      <Slider label="Tenure" value={yrs} set={setYrs} min={1} max={30} step={1} unit=" yrs" />
    </>}
    result={<ResultCard rows={[{ label: 'Principal', value: fmtShort(amt) }, { label: 'Total Interest', value: fmtShort(interest) }, { label: 'Total Payment', value: fmtShort(total) }]} highlight={{ label: 'Monthly EMI', value: fmt(emi) }} />}
  />;
}

function Goal() {
  const [goal, setGoal] = useState(5000000);
  const [yrs, setYrs] = useState(10);
  const [rate, setRate] = useState(12);
  const sip = useMemo(() => {
    const n = yrs * 12, i = rate / 100 / 12;
    return goal / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
  }, [goal, yrs, rate]);
  return <Shell
    controls={<>
      <Slider label="Target Amount" value={goal} set={setGoal} min={100000} max={100000000} step={100000} unit="₹" />
      <Slider label="Time to Goal" value={yrs} set={setYrs} min={1} max={40} step={1} unit=" yrs" />
      <Slider label="Expected Return" value={rate} set={setRate} min={1} max={20} step={0.5} unit="%" />
    </>}
    result={<ResultCard rows={[{ label: 'Target Amount', value: fmtShort(goal) }]} highlight={{ label: 'Monthly SIP Needed', value: fmt(sip) }} />}
  />;
}

function StepUp() {
  const [amt, setAmt] = useState(10000);
  const [step, setStep] = useState(10);
  const [yrs, setYrs] = useState(15);
  const [rate, setRate] = useState(12);
  const { invested, total } = useMemo(() => {
    const i = rate / 100 / 12; let bal = 0, monthly = amt, invested = 0;
    for (let y = 0; y < yrs; y++) {
      for (let m = 0; m < 12; m++) { bal = (bal + monthly) * (1 + i); invested += monthly; }
      monthly = monthly * (1 + step / 100);
    }
    return { invested, total: bal };
  }, [amt, step, yrs, rate]);
  return <Shell
    controls={<>
      <Slider label="Initial Monthly SIP" value={amt} set={setAmt} min={500} max={200000} step={500} unit="₹" />
      <Slider label="Annual Step-Up" value={step} set={setStep} min={0} max={25} step={1} unit="%" />
      <Slider label="Period" value={yrs} set={setYrs} min={1} max={40} step={1} unit=" yrs" />
      <Slider label="Expected Return" value={rate} set={setRate} min={1} max={20} step={0.5} unit="%" />
    </>}
    result={<ResultCard rows={[{ label: 'Total Invested', value: fmtShort(invested) }, { label: 'Estimated Returns', value: fmtShort(total - invested) }]} highlight={{ label: 'Total Wealth', value: fmtShort(total) }} />}
  />;
}

function Education() {
  const [cost, setCost] = useState(2000000);
  const [yrs, setYrs] = useState(12);
  const [infl, setInfl] = useState(8);
  const [rate, setRate] = useState(12);
  const { future, sip } = useMemo(() => {
    const future = cost * Math.pow(1 + infl / 100, yrs);
    const n = yrs * 12, i = rate / 100 / 12;
    const sip = future / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    return { future, sip };
  }, [cost, yrs, infl, rate]);
  return <Shell
    controls={<>
      <Slider label="Current Education Cost" value={cost} set={setCost} min={200000} max={50000000} step={100000} unit="₹" />
      <Slider label="Years Until Needed" value={yrs} set={setYrs} min={1} max={25} step={1} unit=" yrs" />
      <Slider label="Education Inflation" value={infl} set={setInfl} min={4} max={12} step={0.5} unit="%" />
      <Slider label="Expected Return" value={rate} set={setRate} min={6} max={18} step={0.5} unit="%" />
    </>}
    result={<ResultCard rows={[{ label: 'Future Cost', value: fmtShort(future) }]} highlight={{ label: 'Monthly SIP Needed', value: fmt(sip) }} />}
  />;
}

function Compound() {
  const [amt, setAmt] = useState(100000);
  const [rate, setRate] = useState(10);
  const [yrs, setYrs] = useState(10);
  const [freq, setFreq] = useState(1);
  const total = useMemo(() => amt * Math.pow(1 + rate / 100 / freq, freq * yrs), [amt, rate, yrs, freq]);
  return <Shell
    controls={<>
      <Slider label="Principal Amount" value={amt} set={setAmt} min={10000} max={10000000} step={10000} unit="₹" />
      <Slider label="Interest Rate (p.a.)" value={rate} set={setRate} min={1} max={20} step={0.5} unit="%" />
      <Slider label="Period" value={yrs} set={setYrs} min={1} max={40} step={1} unit=" yrs" />
      <Slider label="Compounds / Year" value={freq} set={setFreq} min={1} max={12} step={1} unit="x" />
    </>}
    result={<ResultCard rows={[{ label: 'Principal', value: fmtShort(amt) }, { label: 'Interest Earned', value: fmtShort(total - amt) }]} highlight={{ label: 'Maturity Value', value: fmtShort(total) }} />}
  />;
}

const MAP = {
  sip: SIP, lumpsum: Lumpsum, swp: SWP, retirement: Retirement, emi: EMI,
  goal: Goal, stepup: StepUp, education: Education,
  homeloan: () => <EMI maxLoan={100000000} label="Home Loan Amount" />, compound: Compound,
};

export default function Calculator({ slug }) {
  const C = MAP[slug] || SIP;
  return <C />;
}

export { SIP as SipPreview };

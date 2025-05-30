import React from "react";

export default function Portfolio2025Page() {
  return (
    <main className="p-4 md:p-8 max-w-5xl mx-auto">
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-2">DTC Invest War Resistant Portfolio 2025</h1>
        <p className="text-gray-600">Dynamic, crisis-resilient portfolio optimized for geopolitical instability and fiscal efficiency.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1">Overview</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-2 text-sm">
          <div><strong>Asset Class:</strong> Multi-Asset</div>
          <div><strong>Net Asset Value (NAV):</strong> $24.243 (EUR equivalent)</div>
          <div><strong>Equities Weight:</strong> 38%</div>
          <div><strong>As of:</strong> 29 May 2025</div>
          <div><strong>Use of Income:</strong> Accumulating</div>
          <div><strong>Daily Change:</strong> $0.122</div>
          <div><strong>Base Currency:</strong> USD</div>
          <div><strong>Daily Return:</strong> 0.51%</div>
          <div><strong>Dividend Frequency:</strong> N/A</div>
          <div><strong>Total AUM:</strong> $9,157,881.77 (converted)</div>
          <div><strong>Inception Date:</strong> 1 May 2025</div>
          <div><strong>Issuer AUM:</strong> —</div>
          <div><strong>Index Name:</strong> Custom Weighted Global Defensive Index</div>
          <div><strong>TER:</strong> ~0.29% (estimated weighted average)</div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1">Key Features</h2>
        <ul className="list-disc list-inside text-gray-800">
          <li>Risk score (ESMA): 6/7</li>
          <li>Projected 5Y return: 44% (baseline), 68% (war), 56% (optimistic)</li>
          <li>Beta vs. S&P500: 0.67</li>
          <li>Sharpe Ratio: 1.41 | Sortino Ratio: 1.85</li>
          <li>Volatility: 12.2% | Max Drawdown: -12.3%</li>
          <li>Returns since May 1st 2025: +3.88% unrealized, +1.73% realized</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1">Investment Objective</h2>
        <p>Deliver capital growth while hedging geopolitical, inflationary, and systemic risks using a globally diversified, actively balanced portfolio composed of:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Accumulative ETFs (e.g. CSPX, IWDA)</li>
          <li>Gold (SGLD, GLD options)</li>
          <li>Options for tail-risk hedging (SPY puts, VIX calls)</li>
          <li>Crypto (BTC, ETH, SOL)</li>
          <li>Emerging markets (AVEM, EIS)</li>
          <li>Defensive sector ETFs (WDEF, 3EDF)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1">Comparison vs. Top Funds</h2>
        <table className="table-auto w-full border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-2 py-1">Fund</th>
              <th className="border px-2 py-1">Morningstar Score</th>
              <th className="border px-2 py-1">Provider</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="border px-2 py-1 font-semibold">DTC Invest War Resistant Portfolio 2025</td><td className="border px-2 py-1 font-bold">134.0</td><td className="border px-2 py-1">—</td></tr>
            <tr><td className="border px-2 py-1">Vanguard LifeStrategy 80% Equity</td><td className="border px-2 py-1">122.3</td><td className="border px-2 py-1">Vanguard</td></tr>
            <tr><td className="border px-2 py-1">KBC Equity Fund Global Leaders</td><td className="border px-2 py-1">120.1</td><td className="border px-2 py-1">KBC</td></tr>
            <tr><td className="border px-2 py-1">iShares MSCI World SRI ETF</td><td className="border px-2 py-1">118.6</td><td className="border px-2 py-1">iShares</td></tr>
            <tr><td className="border px-2 py-1">BNP Global Sustainable Eq.</td><td className="border px-2 py-1">117.8</td><td className="border px-2 py-1">BNP Paribas</td></tr>
          </tbody>
        </table>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-1">Sustainability and Tax Optimization</h2>
        <p>100% of products are dividend-free accumulative ETFs, crypto, or options—designed to optimize Belgian taxation. No tax on crypto/options outside professional activity, no withholding taxes, and reduced TOB exposure.</p>
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        Last updated: 30 May 2025 · DTC Invest · All rights reserved
      </footer>
    </main>
  );
}

module.exports = {
  extends: 'lighthouse:default',
  settings: {
    emulatedFormFactor: 'desktop',
    throttling: { rttMs: 40, throughputKbps: 10240, cpuSlowdownMultiplier: 1 },
    audits: [
      { path: 'metrics/first-contentful-paint', options: { scorePODR: 80, scoreMedian: 160 } },
      { path: 'metrics/first-meaningful-paint', options: { scorePODR: 80, scoreMedian: 160 } },
      { path: 'metrics/speed-index', options: { scorePODR: 110, scoreMedian: 230 } },
      { path: 'metrics/interactive', options: { scorePODR: 200, scoreMedian: 450 } },
      { path: 'metrics/first-cpu-idle', options: { scorePODR: 200, scoreMedian: 450 } }
    ]
  }
}

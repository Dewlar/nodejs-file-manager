import os from 'os';

export function getCPUs() {
  const cpus = os.cpus();
  const formatted = cpus.map(cpu => ({
    model: cpu.model,
    speed: `${cpu.speed / 1000} GHz`
  }));
  console.log(`Total CPUs: ${cpus.length}`);
  console.table(formatted);
}

const RATIO = Math.sqrt(Math.sqrt(Math.E));
const BASE = 32;

export default function scale(s: number) {
  return nearestRoundNumber(BASE * Math.pow(RATIO, s));
}

function nearestRoundNumber(i: number) {
  return 2 * Math.round(i / 2);
}

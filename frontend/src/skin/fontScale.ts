import { css } from 'glamor';

const RATIO = Math.sqrt(Math.sqrt(Math.E));
const BASE = 32;

export default function fontScale(s: number) {
  return css({
    fontSize: `${scale(s)}px`,
    lineHeight: `${scale(s + 1)}px`,
    marginBottom: `${scale(s) - scale(s - 1)}px`
  });
}

function scale(s: number) {
  return nearestRoundNumber(BASE * Math.pow(RATIO, s));
}

function nearestRoundNumber(i: number) {
  return 2 * Math.round(i / 2);
}

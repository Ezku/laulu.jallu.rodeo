const RATIO = Math.E
const BASE = 16
const STEP = 1 / 4
const ZERO = 0

export default makeScale({})

export type ScaleParams = {
  base?: number
  ratio?: number
  step?: number
  zero?: number
}

export function makeScale({ base = BASE, ratio = RATIO, step = STEP, zero = ZERO }: ScaleParams) {
  return function scale(s: number) {
    return nearestRoundNumber(base * Math.pow(ratio, (s - zero) * step))
  }
}

function nearestRoundNumber(i: number) {
  return 2 * Math.round(i / 2)
}

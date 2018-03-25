export default function getSearchParam(searchString: string, paramName: string): string | null {
  // tslint:disable-next-line
  return typeof URLSearchParams !== 'undefined'
    ? new URLSearchParams(searchString).get(paramName)
    : null
}

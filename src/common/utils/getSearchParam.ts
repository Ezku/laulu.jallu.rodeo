export default function getSearchParam(searchString: string, paramName: string): string | null {
  return typeof URLSearchParams !== 'undefined'
    ? new URLSearchParams(searchString).get(paramName)
    : null
}

import * as React from 'react'
import FilterIcon from './filterInput/FilterIcon'

export type Props = {
  value: string
  onValue: (value: string) => void
}

export default function FilterInput(props: Props) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    if (value !== props.value) {
      props.onValue(value)
    }
  }
  return (
    <div>
      <label>
        <input type="text" placeholder="Rajaa hakua" value={props.value} onChange={onChange} />
        <FilterIcon />
      </label>
    </div>
  )
}

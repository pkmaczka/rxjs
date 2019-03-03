import React from 'react'
import { of } from 'rxjs'
import { flatMap } from 'rxjs/operators'

const Playground = () => {
  const observable = of(1)
  observable.subscribe(x => console.log(x))

  const arrayObservable = of(['foo', 'bar'])
  const arrayStream = arrayObservable.pipe(flatMap(x => x))
  arrayObservable.subscribe(value => console.log(value))
  arrayStream.subscribe(value => console.log(value))

  return <>
    <button>Click!</button>
  </>
}

export default Playground
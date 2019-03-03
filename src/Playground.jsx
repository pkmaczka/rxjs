import React, { useEffect } from 'react'
import { BehaviorSubject, fromEvent, interval, of, ReplaySubject, Subject } from 'rxjs'
import { flatMap, switchMap } from 'rxjs/operators'
const log = x => console.log(x)

const Playground = () => {
  // const observable = of(1)
  // observable.subscribe(x => console.log(x))
  //
  // const arrayObservable = of(['foo', 'bar'])
  // const arrayStream = arrayObservable.pipe(flatMap(x => x))
  // arrayObservable.subscribe(value => console.log(value))
  // arrayStream.subscribe(value => console.log(value))


  // const observable = of(1)
  // observable.subscribe(x => console.log(x)) // 1
  //
  // const arrayObservable = of(['foo', 'bar']) // ['foo', 'bar']
  // const arrayStream = arrayObservable.pipe(flatMap(x => x)) // 'foo', 'bar'
  // arrayObservable.subscribe(value => console.log(value))
  // arrayStream.subscribe(value => console.log(value))

  // const subject = new Subject()
  // const behaviorSubject = new BehaviorSubject(1)
  // subject.subscribe(x => console.log(x))
  // behaviorSubject.subscribe(x => console.log(x)) // 1
  // console.log(`Current value: ${behaviorSubject.value}`) // Current value: 1
  // subject.next('foo') // foo
  // subject.next('bar') // bar
  // subject.subscribe(x => console.log(x)) // no effect
  //
  // const replaySubject = new ReplaySubject(2)
  // replaySubject.subscribe(log)
  // replaySubject.next(1) // 1
  // replaySubject.next(2) // 2
  // replaySubject.next(3) // 3
  // replaySubject.subscribe(log) // 2, 3

  useEffect(() => {
    const observable = fromEvent(document.querySelector('#btn'), 'click')
    const pipe = observable.pipe(
      switchMap(() => interval(1000))
    )
    pipe.subscribe(log) // 1, 2, 3, 4, ...
  }, [])

  return <>
    <button id="btn">Click!</button>
    <button id="stop">Stop</button>
  </>
}

export default Playground
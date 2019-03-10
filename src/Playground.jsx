import React, from 'react'

const Playground = () => {
  source.pipe(scan((acc, curr) => acc + curr, 0));

  return <>
    <button id="btn">Click!</button>
    <button id="stop">Stop</button>
  </>
}

export default Playground
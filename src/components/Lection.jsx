import React from 'react'
import Block from './Lection/Block'
import MB from './Lection/MB'
import CPU from './Lection/CPU'
import RAM from './Lection/RAM'
import BIOS from './Lection/BIOS'
import DD from './Lection/DD'
import GPU from './Lection/GPU'
import Power from './Lection/Power'
import Other from './Lection/Other'



const Lection = () => {
  return (
    <div>
      <section>
        <Block />
        <MB />
        <CPU />
        <RAM />
        <BIOS />
        <DD />
        <GPU />
        <Power />
        <Other />
      </section>
    </div>
  )
}

export default Lection
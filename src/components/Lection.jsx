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


  const scrollToTop = () => {
    window.scrollTo({top: 0});
  }

  return (
    <div>
      <section>
        <div>
          <h1 className='text-center my-7 text-[35px] font-bold'>Загальна будова ПК</h1>
          <div>
            <h3 className='font-bold text-[22px]'>План вивчення матеріалу:</h3>
            <p className='mb-[15px] text-[14px] underline'>Кожен підпункт є посиланням до відповідного матеріалу!</p>
            <h4 className='font-semibold text-[18px]'>1. Внутрішня будова комп'ютера:</h4>
            <ul className='ml-[15px] flex flex-col gap-2 my-[10px]'>
              <li><a href="#block">1.1. Системний блок;</a></li>
              <li><a href="#mb">1.2. Материнська плата;</a></li>
              <li><a href="#CPU">1.3. Процессор;</a></li>
              <li><a href="#RAM">1.4. Оперативна пам'ять;</a></li>
              <li><a href="#bios">1.5. Базова система вводу-виводу BIOS;</a></li>
              <li><a href="#disks">1.6. Постійний запам'ятовуючі пристрої;</a></li>
              <li><a href="#gpu">1.7. Відеоадаптери;</a></li>
              <li><a href="#power">1.8. Блок живлення;</a></li>
            </ul>
            <h4 className='font-semibold text-[18px]'>2. Периферійні пристрої ПК:</h4>
            <ul className='ml-[15px] flex flex-col gap-2 my-[10px]'>
              <li><a href="#monitor">2.1. Монітор;</a></li>
              <li><a href="#kb">2.2. Клавіатура;</a></li>
              <li><a href="#mouse">2.3. Миша;</a></li>
              <li><a href="#print">2.4. Принтер і сканери;</a></li>
            </ul>
          </div>
        </div>
        <button className=' bg-slate-200 text-slate-600 font-medium rounded-lg px-4 py-2 fixed z-10 bottom-5 right-[2%]' onClick={scrollToTop}>
          Наверх!
        </button>
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
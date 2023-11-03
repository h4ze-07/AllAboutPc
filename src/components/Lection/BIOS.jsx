import React from 'react'
import bios1 from '../../images/bios1.jpg';
import bios3 from '../../images/bios3.jpg';

const BIOS = () => {
  return (
    <div className='mt-[60px]' id='bios'>
        <h2 className='text-center text-[25px] font-bold my-[10px]'>Базова система вводу-виводу BIOS</h2>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col lg:flex-row gap-5 mt-[40px] items-start'>
              <p className='mt-[20px]'>
              <span className='font-bold'>BIOS</span>  – це головна програма, присутня на будь-якому комп'ютері або ноутбуці, яка визначає порядок роботи його складових частин, а також їх взаємодії між собою. Термін "BIOS" походить від англ. "Basic Input - Output System", що переводиться як "Базова система введення - виводу".
              <span className='font-bold'>BIOS є первинною і найголовнішою програмою комп'ютера. Під час запуску комп'ютера першим стартує саме BIOS.</span> Він перевіряє і ініціює усі пристрої комп'ютера, і лише потім передає функції управління ними операційній системі (Windows або інший), що завантажується. Від налаштувань BIOS в першу чергу залежить спосіб завантаження комп'ютера, порядок взаємодії між собою його процесора, материнської плати, відеокарти і інших складових частин.
              </p>
              <img src={bios1} alt="bios1" className='max-w-[600px] h-full w-full mx-auto my-[30px]' />
            </div>

            <div className='flex gap-4 flex-col lg:flex-row-reverse mt-[40px]'>
                <p>
                На нових комп'ютерах замість BIOS може використовуватися <span className='font-bold'>UEFI (Unified Extensible Firmware Interface)</span> - уніфікований розширюваний інтерфейс прошивки. За своєю суттю і призначенню UEFI являється тим самим BIOS, але з ширшими можливостями. На відміну від BIOS, UEFI може мати вбудовані драйвери базових пристроїв і спеціальні додаткові оболочки, а меню його налаштувань може бути багатомовним. Це дозволяє без завантаження ОС користуватися зручнішим графічним інтерфейсом, маніпулятором «Миша» , деякими засобами діагностики комп'ютера, файловим менеджером і іншими зручними інструментами (залежно від версії UEFI).
                </p>
                <img src={bios3} alt="bios3" className='w-[430px]' />
            </div>
        </div>
    </div>
  )
}

export default BIOS
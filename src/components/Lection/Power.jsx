import React from 'react'
import power1 from '../../images/power.jpg';

const Power = () => {
  return (
    <div className='mt-[60px]' id='power'>
        <h2 className='text-center text-[25px] font-bold my-[10px]'>Блок живлення</h2>
        <div className='flex flex-col lg:flex-row gap-4 items-center'>
            <p>
            <span className='font-bold'>Для живлення комп'ютера потрібен блок живлення.</span> Від його надійності залежить стабільність роботи комп'ютера. Встановлюється блок живлення в спеціальний відсік системного блоку і підключається до материнської плати, відеокарти та деяких інших внутрішніх пристроїв за допомогою кабелів.
            Під час вибору блоку живлення необхідно враховувати його сумарну потужність, силу струму на лінії 12В (ці показники повинні задовільняти вимоги відеокарти, процесора й інших "споживачів електроенергії"), а також наявність кабелів з необхідними роз'ємами та інші характеристики.
            </p>
            <img src={power1} alt="power" className='max-w-[400px] w-full h-full max-h-[350px]' />
        </div>
    </div>
  )
}

export default Power
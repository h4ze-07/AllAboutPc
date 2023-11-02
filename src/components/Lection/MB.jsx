import React from 'react'
import mb from '../../images/mb.jpg';
import mb2 from '../../images/mb2.png';

const MB = () => {
  return (
    <div className='mt-[60px]'>
        <h2 className='text-center text-[25px] font-bold my-[10px]'>Материнська плата</h2>
        <div className='flex flex-col gap-4 mt-[40px]'>
            <p className='text-center text-[18px]'>
                Основою будь-якого комп'ютера є <span className='font-bold'>материнська плата</span> (головна плата, англ. Motherboard, MB, mainboard, розм. – мамка, материнка, мати та ін.).
            </p>
            <div className='flex flex-col md:flex-row justify-evenly mt-[30px]'>
                <div className='max-w-[570px]'>
                    <p className='mb-[20px] font-bold text-[20px]'>На материнській платі знаходяться:</p>
                    <div>
                        <div>– центральний процесор <span className='font-bold'>(CPU)</span>;</div>
                        <div>– оперативна пам'ять  <span className='font-bold'>(RAM)</span>;</div>
                        <div>– базова система вводу-виводу <span className='font-bold'>(чипсет)</span>;</div>
                        <div>– пам'ять з даними про апаратні налаштування <span className='font-bold'>BIOS</span>;</div>
                        <div>– <span className='font-bold'>CMOS</span> пам'ять з даними про апаратні налаштування;</div>
                        <div>– слоти для підключення плат розширення;</div>
                        <div>– роз'єми для підключення інтерфейсних кабелів запам'ятовуючих пристроїв, живлення, USB та інші роз'єми для підключення решти обладнання.</div>
                    </div>
                </div>

                <img src={mb2} alt="mb" className='w-[320px]' />
            </div>


            <p>
                Головне завдання материнської плати - з'єднати всі ці компоненти і змусити їх працювати як єдине ціле. Усі компоненти материнської плати пов'язані друг з одним <span className='font-bold'>системою провідників</span> (ліній), якими відбувається обміну інформацією. Цю сукупність ліній називають <span className='font-bold'>шиною</span> (bus).
                Більшість персональних комп'ютерів системні плати містять інтегровані основні функціональні вузли: <span className='font-bold'>відеокарту, звукову карту, мережну карту і т.д.</span> Якщо треба збільшити продуктивність це можливо зробити за допомогою окремих друкованих плат (плат розширення), які встановлюються в роз'єми розширення. Наприклад, пристрій формування зображення на екрані монітора – <span className='font-bold'>відеоадаптер</span> – найчастіше розташовується на окремій платі розширення – <span className='font-bold'>відеокарті</span>.
            </p>
        </div>
    </div>
  )
}

export default MB
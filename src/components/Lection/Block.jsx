import React from 'react';
import pc1 from '../../images/pc1.jpg';

const Block = () => {
  return (
    <>
        <h1 className='text-center my-[30px] text-[25px] font-bold' id='block'>Пристрої системного блоку</h1>
        <div className='flex flex-col gap-4'>
            <p>
                Комп'ютер, в повсякденному розумінні, складається з <span className='font-bold'>системного блоку, монітора, клавіатури, мишки, аудіосистеми.</span> До нього можна підключити геймпад, принтер, сканер і багато інших пристроїв.
            </p>
            <p className='mt-[10px]'>
                Але найголовнішою, складаною і дороговартісною частиною комп'ютера є <span className='font-bold'>системний блок.</span> Власне, це і є комп'ютер (в класичному розумінні). Решта пристроїв призначені лише для введення і виведення інформації в різній формі. Тому вони і називаються периферійними (англійське слово peripheral перекладається як "другорядний, зовнішній, окружний, віддалений").
            </p>
            <p className='mt-[10px]'>
                Якщо до системного блоку приєднати сучасніший монітор, клавіатуру або мишу, стане зручніше дивитися фільми, працювати з текстом або грати, але можливості комп'ютера від цього не покращаться. Більше того, при відключенні будь-якого з периферійних пристроїв комп'ютер буде продовжувати працювати, оскільки всі обчислювальні процеси відбуваються <span className='font-bold'>всередині системного блоку.</span>
            </p>
            <div className='flex flex-col-reverse gap-[50px] lg:flex-row mt-[10px]'>
                <p>
                    <span className='font-bold'>Системний блок</span> складається з декількох ключових частин, без яких комп'ютер не може функціонувати - це <span className='font-bold'>материнська плата, процесор, оперативна пам'ять, постійний запам'ятовуючі пристрої HDD або SSD, карти розширення і блок живлення.</span> Критично важливою є також наявність <span className='font-bold'>відеокарти</span>, без якої неможливо вивести графічну інформацію із комп'ютера на монітор.
                    Всередину системного блоку можуть встановлюватися інші пристрої, які, по суті, є "внутрішніми" аналогами периферійних пристроїв і без них цілком можна обійтися (<span className='font-bold'>телевізійні тюнери, карти захоплення відео, звукові карти, модеми, wi-fi модулі, дисководи, карт-рідери тощо</span>).
                </p>
                <img src={pc1} alt="pc1" className='max-w-[400px]' />
            </div>
        </div>
    </>
  )
}

export default Block
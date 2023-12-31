import React from 'react'
import screen from '../../images/screen.jpg'
import kb from '../../images/kb.jpg'
import mouse from '../../images/mouse.jpg'
import bfp from '../../images/bfp.png'

const Other = () => {
  return (
    <div className='mt-[60px]'>
        <h1 className='text-center my-[30px] text-[25px] font-bold'>Периферійні пристрої комп’ютера</h1>


        <div id='monitor'>
            <h2 className='text-center text-[25px] font-bold my-[10px]'>Монітор</h2>
            <div className='flex flex-col lg:flex-row-reverse gap-[20px] lg:gap-[45px] items-center'>
                <p>
                <span className='font-bold'>Монітор</span> – пристрій візуального представлення даних. Це не єдино можливий, але головний пристрій виведення. Його основними споживчими параметрами є: тип, розмір та крок маски екрану, максимальна частота регенерації зображення, клас захисту. <br />
                Наразі найбільш поширені монітори двох основних типів: <br />
                –	<span className='font-bold'>на основі електронно-променевої трубки</span> (ЕЛТ) (cathode ray tube, CRT); <br />
                –	<span className='font-bold'>плоскі рідкокристалічні монітори</span>  (liquid crystal display, LCD); <br />
                –	<span className='font-bold'>плазмовий монітор</span> на основі плазмової панелі (plazma display panel); <br />
                –	<span className='font-bold'>LED-монітор</span> – на технології LED (light-emitting diode – світло випромінюючий діод). <br />
                </p>
                <img src={screen} alt="screen" className='max-w-[400px]' />
            </div>
        </div>

        <div id='kb'>
            <h2 className='text-center text-[25px] font-bold my-[10px]'>Клавіатура</h2>
            <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[45px] items-center'>
                <p>
                <span className='font-bold'>Клавіатура</span> є основним пристроєм для введення інформації в комп'ютер. На сьогоднішній день існує 3 основних типи клавіатур: <span className='font-bold'>мембранними; ножичні; механічні.</span> Усередині корпусу будь-якої клавіатури, крім датчиків клавіш, розташовані електронні схеми дешифрації та мікроконтролер клавіатури. У переважній більшості сучасних ПК використовується так звана покращена (Enhanced) клавіатура. Вона містить 101 або 104 кнопки. Найбільш поширеним стандартом розташування символьних клавіш є розкладка QWERTY (ЙЦУКЕН), яка за бажання може бути перепрограмована на іншу.
                Основною тенденцією розвитку клавіатур домашніх ПК є підвищення їхньої ергономічних якостей. Ергономічні клавіатури випускають Microsoft, Logitech, Razer, та інші компанії. З усіх удосконалень найбільш практичним є бездротова клавіатура, що передає інформацію в ПК за допомогою ІЧ-хвиль.
                </p>
                <img src={kb} alt="keyboard" className='max-w-[400px]' />
            </div>
        </div>

        <div id='mouse'>
            <h2 className='text-center text-[25px] font-bold my-[10px]'>Миша</h2>
            <div className='flex flex-col lg:flex-row-reverse gap-[20px] lg:gap-[45px] items-center'>
                <p>
                <span className='font-bold'>Миша, джойстик, трекбол</span> – пристрої ручного керування курсором та графічними об'єктами (в окремих програмах). Кожен вид таких пристроїв пристосований до виконання специфічних рухів руками, необхідні управління конкретної програмою. Миша робить дуже зручним маніпулювання такими широко поширеними у графічних пакетах об'єктами, як вікна, меню, кнопки, піктограми.
                На сьогоднішній день усі миші можна розділити на три категорії: <span className='font-bold'>кулькові; оптичні; лазерні.</span>
                Переважна кількість комп'ютерних мишок оптична. Оптичні миші не мають частин, що рухаються, і позбавлені такого властивого оптико-механічним мишам недоліку, як переміщення курсору миші ривками через забруднення кульки. Роздільна здатність застосовуваного в миші пристрою зчитування координат становить 800 dpi (Dot per Inch - точок на дюйм) і вище, перевищуючи аналогічні значення для механічних пристроїв.
                </p>
                <img src={mouse} alt="mouse" />
            </div>
        </div>

        <div className='mb-[50px]' id='print'>
            <h2 className='text-center text-[25px] font-bold my-[10px]'>Принтер і сканери</h2>
            <div className='flex flex-col lg:flex-row gap-[20px] lg:gap-[45px] items-center'>
                <div>
                    <p>
                    <span className='font-bold'>Принтер</span> (друкарський пристрій) призначений для виведення текстової або графічної інформації з комп'ютера на папір або плівку.
                    Принтери можна поділити на послідовні, малі та сторінкові. Приналежність принтера до тієї чи іншої групи залежить від того, формує він на папері символ за символом, одразу весь рядок або цілу сторінку. У свою чергу, у кожній групі можна виділити принтери ударної (impact) та ненаголошеної (non– impact) дії.
                    </p>
                    <p>
                    <span className='font-bold'>Сканером</span> називається пристрій для введення в комп'ютер зображень, нанесених на прозорій або непрозорій плоскій поверхні. Вони дозволяють вводити на комп'ютер зображення текстів, малюнків, слайдів, фотографій, креслень та іншої графічної інформації. У більшості пристроїв для перетворення зображення на цифрову форму застосовуються матриця або лінійка світлочутливих елементів на основі ПЗЗ – приладів із зарядним зв'язком (CCD – Charge–Coupled Device).
                    </p>
                </div>
                <img src={bfp} alt="bfp" className='max-w-[400px]' />
            </div>
        </div>


    </div>
  )
}

export default Other
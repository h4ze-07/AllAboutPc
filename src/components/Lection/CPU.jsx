import React from 'react'
import cpu1 from '../../images/cpu1.jpg';
import cpu2 from '../../images/cpu2.jpg';
import cpu3 from '../../images/cpu3.jpg';
import intel from '../../images/intel.jpg';

const CPU = () => {
  return (
    <div className='mt-[60px]' id='CPU'>
        <h2 className='text-center text-[25px] font-bold my-[10px]'>Процесор</h2>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-col lg:flex-row'>
                <p className='mt-[20px]'> <span className='font-bold'>Процесор</span> (CPU – Central Processing Unit) управляє взаємозв'язками між програмним забезпеченням та іншими компонентами комп'ютера. Від його швидкодії залежить швидкість обробки даних (основні виробники – Intel, AMD, Apple, Samsung). Основна функція процесора - це обробка даних по заданій програмі шляхом виконання арифметичних і логічних операцій та програмне керування роботою пристроїв комп'ютера. <br />
                Основні параметри: <br />
                    –	тип процесора (маркування моделей та поколінь: Core i9-10900K, Ryzen 5000);<br />
                    –	кількість ядер та потоків (4 ядра та 8 обчислювальних потоків);<br />
                    –	тактова частота та ІРС (1,2-4 ГГц. IPC - по суті, він позначає продуктивність на кожен герц частоти. Відрізняється в залежності від архітектури побудови CPU.); <br />
                    –	наявність та продуктивність відеоядра (можуть виконувати роль відеокарти).           
                </p>
                <img src={intel} alt="cpu 1" className='max-w-[500px] h-full w-full mx-auto'/>
            </div>
            <p>
                Важливим моментом, який потрібно враховувати при виборі процесора, є те, для встановлення в <span className='font-bold'>сокет</span> якого типу він призначений. <span className='font-bold'>Cокет</span> (socket, роз'єм центрального процесора) – це щілинний або гніздовий роз'єм на материнській платі, в який встановлюється процесор. Кожен процесор можна встановити тільки на материнську плату з відповідним роз'ємом, який має відповідні розміри, необхідну кількість та структуру контактних елементів.
            </p>
            <img src={cpu2} alt="cpu 2" className='mx-auto w-full max-w-[900px] my-[40px]'/>
            <p>
                Поверхня процесора вкрита металевою коробкою, яка виконує, крім захисних, ще й тепловідвідні функції. Поверх процесора на материнській платі встановлюється система охолодження. Її тепловідвідні елементи повинні щільно притискатись до поверхні процесора. Для покращення передачі тепла з процесора на радіатор системи охолодження, між ними прокладається шар <span className='font-bold'>термопасти</span> – спеціальної пастоподібної речовини з високою теплопровідністю. Процесори зазвичай продаються в комплекті зі штатною системою охолодження. Але іноді її ефективності недостатньо (наприклад, якщо було зроблено розгон і частота процесора, отже і його TDP, зросла). У такому разі можна окремо придбати потужнішу систему охолодження.
            </p>
            <img src={cpu3} alt="cpu 3" className='mx-auto w-full max-w-[900px] my-[40px]'/>
            <p>
                Нормальна температура роботи процесора - до 50 градусів Цельсія (при пікових навантаженнях можливо трохи більше). Але від моделі до моделі вона може відрізнятись. Засоби вимірювання температури вбудовані у центральний процесор. За допомогою спеціальних програм можна відстежувати температуру в режимі реального часу (наприклад, програмою SpeedFan). Сучасний процесор влаштований так, що при досягненні ним критичної температури він вимикається і не вмикається, доки не охолоне. Це дозволяє запобігти його пошкодженню під впливом високої температури. Перегрів можливий внаслідок низької ефективності системи охолодження, виходу її з ладу, засмічення пилом, пересихання термопасти та ін.
            </p>
        </div>
    </div>
  )
}

export default CPU
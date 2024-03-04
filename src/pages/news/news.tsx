import '../../index.css'
import './news.css'
import { CustomBorderHead } from '../../custom_borders'
import { Link } from "react-router-dom";

export default function News_Page() {
  let title= document.getElementById('head_title')!
  title.textContent='Новости'
  
  return (
    <>
        <header className='header'>

            <div className='logo_div'>
                <img src="/src/assets/Logo.png" className='logo'/>
                <p> 
                    <span className='main_title'> НОВОЕ МЫШЛЕНИЕ </span> <br/>
                    Школа общественных наук
                </p>
            </div>

            <div className="menu_tab" id="menu_tab">
              <Link to={'/news'}><button className="menu"> <span>Новости</span> </button></Link>
              <hr/>
              <a href='https://vk.com/guziy_school'><button className='menu'> <span>Группа Vk</span> </button></a>
              <hr/>
              <Link to={'/'}><button className="menu"> <span>О нас</span> </button></Link>
            </div>

            <div className="menu_tab" id="sign">
              <Link to={'/login'}><button className="menu"> <span>Log In</span> </button></Link>
            </div>
        </header>
        <CustomBorderHead/>

        <div className='body' id='body_div'>
          <div className='leftMenu'>
            <ul>
              <li>ВСОШ</li>
              <li>Перечневые олимпиады</li>
            </ul>
          </div>
          <div className='news'>
            <h1>Новости</h1>
            <p>--------Здесь пока нет новостей</p>
          </div>
        </div>
        <footer>КОНТАТКТНАЯ И ЮР. ИНФРОМАЦИЯ</footer>
    </>
  )
}
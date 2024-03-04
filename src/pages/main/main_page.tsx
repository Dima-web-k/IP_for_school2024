import '../../index.css'
import style from './main_page.module.css'
import { CustomBorder1 , CustomBorder1_RT, CustomBorder2 } from '../../custom_borders'
import { Team } from './team_tabs'
import { Content1 } from './content1'
import { Link } from "react-router-dom";


import logo_img from "../../assets/logo.png"
import arrow_down_img from "../../assets/arrow_down.png"
import content_icon1_img from "../../assets/content_icon1.png"
import content_icon2_img from "../../assets/content_icon2.png"
import content_icon3_img from "../../assets/content_icon3.png"
import avatar_default_img from "../../assets/avatar_default.png"
import cup_img from "../../assets/cup.png"

export default function MainPage() {
  let title= document.getElementById('head_title')!
  title.textContent='"Новое мышление" - Школа общественных наук'
  
  return (
    <>
      {/* <div className='head'> */}
      <header className={style.mainpage_header}>
  
        <div className={style.mainpage_head_div}>

          <div className={style.mainpage_logo_div}>
            <img src={logo_img} className={style.mainpage_logo}/>
            <p> 
              <span className={style.mainpage_main_title}> НОВОЕ МЫШЛЕНИЕ </span> <br/>
              Школа общественных наук
            </p>
          </div>

          <div className={style.mainpage_menu_tab} id={style.menu_tab}>
            <Link to={'/news'}><button className={style.mainpage_menu}> <span>Новости</span> </button></Link>
            <hr/>
            <a href='#body_div'><button className={style.mainpage_menu}> <span>Предметы</span> </button></a>
            <hr/>
            <a href='https://vk.com/guziy_school'><button className={style.mainpage_menu}> <span>Группа Vk</span> </button></a>
          </div>

          <div className={style.mainpage_menu_tab} id={style.sign}>
            <Link to={'/login'}><button className={style.mainpage_menu}> <span>Log In</span> </button></Link>
          </div>

        </div>

        <p className={style.mainpage_title_tagline}> 
          «Non scholae sed vitae discimus»<br/>
          <span>"Мы учимся не в школе, а в жизни(лат.)"</span>
        </p>

        <button className={style.mainpage_buy_button}>Начать обучение ᐳᐳ</button>


        <a href='#body_div'>
          <img src={arrow_down_img} className={style.mainpage_arrow}/>
        </a>
        
      </header>
      {/* </div> */}

      <div className={style.mainpage_body} id='body_div'>

        <Content1/>

        <CustomBorder1/>
        <div className={style.mainpage_content2}>
          <h2> 
            Наши принципы
          </h2>
          <div className={style.mainpage_principle}>

            <div>
              <img src={content_icon1_img}/>
              <p> 
                Интересно
              </p>
            </div>
            <hr/>
            <div>
              <img src={content_icon2_img}/>
              <p> 
                Понятно
              </p>
            </div>
            <hr/>
            <div>
              <img src={content_icon3_img}/>
              <p> 
                С душой
              </p>
            </div>

          </div>
        </div>
        <CustomBorder1_RT/>

        <Team/>

        <CustomBorder2/>
        <div className={style.mainpage_content3}>
          <h2>Отзывы выпускников</h2> 
          <div className={style.mainpage_content3_content}>
            <div className={style.mainpage_reviews}>
              <div className={style.mainpage_review}>
              <section>
                <img src={avatar_default_img}/>
                <p className={style.mainpage_name}>
                  <span>Иванов Иван</span> <br/>
                  призер ВСОШ по праву
                </p>
              </section>
              <p className={style.mainpage_review_text}>
                  “Пришёл в школу для того чтобы поднять знание обществознания, а потом искра, буря, безумие”
              </p>
              </div>
              <div className={style.mainpage_review}>
                <section>
                  <img src={avatar_default_img}/>
                  <p className={style.mainpage_name}>
                    <span>Иванов Иван</span> <br/>
                    призер ВСОШ по праву
                  </p>
                </section>
                <p className={style.mainpage_review_text}>
                    “Пришёл в школу для того чтобы поднять знание обществознания, а потом искра, буря, безумие”
                </p>
              </div>
              <div className={style.mainpage_review}>
                <section>
                  <img src={avatar_default_img}/>
                  <p className={style.mainpage_name}>
                    <span>Иванов Иван</span> <br/>
                    призер ВСОШ по праву
                  </p>
                </section>
                <p className={style.mainpage_review_text}>
                    “Пришёл в школу для того чтобы поднять знание обществознания, а потом искра, буря, безумие”
                </p>
              </div>
            </div>
            <img className={style.mainpage_cup} src={cup_img}/>
          </div>
          {/* <CustomBorder2_RT/> */}
        </div>

      </div>

      <footer>КОНТАТКТНАЯ И ЮР. ИНФРОМАЦИЯ</footer>
    </>
  )
}
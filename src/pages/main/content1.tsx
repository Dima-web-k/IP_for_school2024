import style from './main_page.module.css'

import content_icon4_img from "../../assets/content_icon4.png"
import content_icon5_img from "../../assets/content_icon5.png"
import content_icon6_img from "../../assets/content_icon6.png"

export const Content1 = () => {

    const subjects = [
        {
            img: content_icon4_img,
            title: 'История',
            content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        },
        {
            img: content_icon5_img,
            title: 'Обществознание',
            content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        },
        {
            img: content_icon6_img,
            title: 'Право',
            content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        },
    ]
    return (
        <div className={style.mainpage_content1}>
            <h2>Чему мы учим?</h2> 
            {subjects.map((el) => 
                    <div className={style.mainpage_subject}>
                        <img src={el.img}/>
                        <p>
                            <span>{el.title}</span> <br/>
                            {el.content}
                        </p>
                    </div>
            )}
        </div>
    );
};
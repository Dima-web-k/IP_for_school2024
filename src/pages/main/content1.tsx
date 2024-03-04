import style from './main_page.module.css'

export const Content1 = () => {

    const subjects = [
        {
            img: 'src/assets/content_icon4.png',
            title: 'История',
            content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        },
        {
            img: 'src/assets/content_icon5.png',
            title: 'Обществознание',
            content: '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
        },
        {
            img: 'src/assets/content_icon6.png',
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
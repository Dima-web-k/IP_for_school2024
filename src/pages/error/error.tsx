import '../../index.css'
import './error.css'

export default function ErrorPage() {
  // const error = useRouteError()!
  
  // console.log(error!.status)
  let title= document.getElementById('head_title')!
  title.textContent='Ошибка'

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Что-то пошло не так</p>
      <p>
        <span>ERROR: </span>404 Not Found
      </p>
    </div>
  )
}
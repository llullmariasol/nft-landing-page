import './style.css'

function LogoWithText(props) {
  const { image, title, descriptionTop, descriptionBottom } = props
  return (
    <div className="logo-with-text">
      <img className="logo-with-text__image" src={image}></img>
      <h3 className="logo-with-text__title">{title}</h3>
      <p className="logo-with-text__text">{descriptionTop}</p>
      <p className="logo-with-text__text">{descriptionBottom}</p>
    </div>
  )
}

export default LogoWithText

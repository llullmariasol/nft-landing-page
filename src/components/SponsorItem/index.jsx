import './style.css'

function SponsorItem(props) {
  // eslint-disable-next-line react/prop-types
  const logo = props.logo
  // eslint-disable-next-line react/prop-types
  const text = props.text
  return (
    <div className="sponsor-item">
      <img className="sponsor-item__logo" src={logo} />
      <span>{text}</span>
    </div>
  )
}

export default SponsorItem

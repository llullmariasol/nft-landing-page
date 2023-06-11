import './style.css'
import NftCard from '@/components/NftCard'

function NftCardWithText(props) {
  const {
    nftData,
    title,
    descriptionTop,
    descriptionBottom,
    color,
    imageOnRight,
  } = props
  return (
    <div
      className={`nft-card-with-text ${color} ${
        imageOnRight ? 'image-on-right' : ''
      }`}
    >
      <NftCard
        image={nftData.image}
        name={nftData.name}
        price={nftData.price}
        daysLeft={nftData.daysLeft}
        number={nftData.number}
      />
      <div className="nft-card-with-text__text">
        <h3>{title}</h3>
        <p>{descriptionTop}</p>
        <p>{descriptionBottom}</p>
        <span className="nft-card-with-text__text-check-them-out">
          Check them out
        </span>
      </div>
    </div>
  )
}

export default NftCardWithText

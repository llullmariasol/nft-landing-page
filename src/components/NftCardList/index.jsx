import './style.css'
import NftCard from '@/components/NftCard'
import Nft12345 from '@/assets/nft-12345.png'
import Nft11223 from '@/assets/nft-11223.png'
import Nft34455 from '@/assets/nft-34455.png'
import Nft67890 from '@/assets/nft-67890.png'

export const nfts = [
  {
    image: Nft12345,
    name: 'Ginger',
    price: 2.99,
    daysLeft: 5,
    number: 12345,
  },
  {
    image: Nft11223,
    name: 'Van Gogh',
    price: 1.99,
    daysLeft: 2,
    number: 11223,
  },
  {
    image: Nft34455,
    name: 'Mosaic',
    price: 2.99,
    daysLeft: 5,
    number: 34455,
  },
  {
    image: Nft67890,
    name: 'Universe',
    price: 2.5,
    daysLeft: 5,
    number: 67890,
  },
]

function NftCardList() {
  return (
    <div className="nft-card-list">
      {nfts.map((nft) => (
        <NftCard
          image={nft.image}
          name={nft.name}
          price={nft.price}
          daysLeft={nft.daysLeft}
          number={nft.number}
        />
      ))}
    </div>
  )
}

export default NftCardList

/* eslint-disable react/jsx-no-target-blank */
import './App.css'
import Header from '@/components/Header'
import SponsorItemList from '@/components/SponsorItemList'
import Hero from '@/components/Hero'
import heroImg from '@/assets/hero.png'
import NftCardList, { nfts } from '@/components/NftCardList'
import NftCardWithText from '@/components/NftCardWithText'
import LogoWithText from '@/components/LogoWithText'
import EthColorLogo from '@/assets/eth-color-logo.png'
import EthGreyLogo from '@/assets/eth-grey-logo.png'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Hero heroImage={heroImg} />
        <NftCardWithText
          nftData={nfts[0]}
          title="Initial Release 30/05"
          descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea."
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out! 50% of proceeds go to charity."
          color="orange"
          imageOnRight={true}
        />
        <SponsorItemList />
        <NftCardList />
        <NftCardWithText
          nftData={nfts[3]}
          title="Initial Release 30/05"
          descriptionTop="We have released four limited edition NFTs early which can be bid on via OpenSea."
          descriptionBottom="These will be the only four of these NFTs we ever make, so be sure not to miss out! 50% of proceeds go to charity."
          color="green"
        />
        <div className="App__logo-with-text">
          <LogoWithText
            image={EthColorLogo}
            title="An NFT like no other"
            descriptionTop="Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9."
            descriptionBottom="Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don't miss out on the release of our new NFT."
          />
          <LogoWithText
            image={EthGreyLogo}
            title="An NFT like no other"
            descriptionTop="Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9."
            descriptionBottom="Don't miss out on the release of our new NFT. Sign up below to receive updates when we go live on 18/9.Don't miss out on the release of our new NFT."
          />
        </div>
        <Hero heroImage={heroImg} />
      </div>
    </div>
  )
}

export default App

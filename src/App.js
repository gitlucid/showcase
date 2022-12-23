
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Your source for the hottest NFTs. "
        description="Buy, store, collect, exchange and create NFTs. Join our community and browse our collections today!"
        showQr
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience the cutting-edge marketplace for NFTs."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="Built using Expo which runs natively on all users' devices. "
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase your NFT project"
        description="View all listed NFT projects, or list your own!"
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.smallText} ${styles.whiteText}`}>
          &copy; <span className="bold">Kevin Smith</span>
        </p>
      </div>
    </>
  );
}

export default App;

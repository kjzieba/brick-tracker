import style from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar';
import FeatureBox from '../../components/FeatureBox/FeatureBox';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <>
            <div className={style.home}>
                <Navbar></Navbar>
                <div className={style.features}>
                    <FeatureBox buttonText={'Browse custom sets'}
                                text={'Upload your custom brick set with instructions and parts list or browse and rate other custom sets.'}
                                title={'Browse, create and build custom sets'}
                                redirection={'/custom-sets'}
                                alt={'Custom sets'}
                                img={0}></FeatureBox>
                    <FeatureBox buttonText={'Track your sets'}
                                text={'Add sets you own from catalogue to keep track of them and add sets you want to wishlist.'}
                                title={'Keep track of your sets collection'}
                                redirection={'/my-sets'}
                                alt={'Your sets'}
                                img={1}></FeatureBox>
                    <FeatureBox buttonText={'See what can you build'}
                                text={'This feature allows you to see what custom sets can you build out of bricks from sets from your collection.'}
                                title={'See what can you build out of old bricks'}
                                redirection={'/build'}
                                alt={'What can you build'}
                                img={2}></FeatureBox>
                </div>
                <div className={style.footer}>
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

export default Home;

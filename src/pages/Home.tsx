import Hero from '../components/Hero';
import Features from '../components/Feature';
import PopularProducts from '../components/PopularProducts';
import DeepLook from '../components/DeepLook';
import WhyChooseUs from '../components/WhyChooseUs';
import GetToKnowPhone from '../components/GetToKnowPhone';
import Questions from '../components/Questions';
import PhoneList from '../components/PhoneList';

export default function Home() {
    return (
        <>
            <Hero />
            <PopularProducts />
            <DeepLook />
            <GetToKnowPhone />
            <WhyChooseUs />
            <Features />
            <Questions />
            <PhoneList />
        </>
    );
}
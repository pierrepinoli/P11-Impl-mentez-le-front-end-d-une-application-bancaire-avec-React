import Banner from '../../components/Banner/Banner.jsx';
import Cards from '../../components/Cards/Cards.jsx';
import ChatIcon from '../../assets/img/icon-chat.png';
import MoneyIcon from '../../assets/img/icon-money.png';
import SecurityIcon from '../../assets/img/icon-security.png';

import './home.scss';

function Home() {
    return ( 
        <main>
            <Banner />
                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Cards 
                        imageSource={ChatIcon}
                        title="You are our #1 priority" 
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat 
                                     or through a phone call in less than 5 minutes." 
                    />
                    <Cards 
                        imageSource={MoneyIcon}
                        title="More savings means higher rates" 
                        description=" The more you save with us, the higher your interest rate will be!" 
                    />
                    <Cards 
                        imageSource={SecurityIcon}
                        title="Security you can trust" 
                        description="We use top of the line encryption to make sure your data and money
                                    is always safe." 
                    />
            </section>
        </main>
    );
}

export default Home;
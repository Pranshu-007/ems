import lamp from "../../assets/lamp.png";
import girl from "../../assets/SigmaFemale.png"
import male from "../../assets/sigmaMale.png"
import city from "../../assets/city.png"
import './home.css';

const About = () => {
    return (
        <div className="about">
            <div className="about-section about-pic">
                <img src={male} alt="SigmaMale"/>
            </div>
            <div className="about-section about-text">
                <div className="branding">
                    <span className="about-heading">ABOUT EVENTO</span>
                </div>
                <div className="branding">Welcome to our vibrant Event Hub! Here, you can dive into a world of thrilling possibilities. Discover a wide array of events, book top-notch venues, and craft unforgettable experiences with ease. Our platform simplifies the event planning process, making it effortless to organize gatherings that leave lasting memories. Whether you are a passionate event enthusiast, an event organizer with grand visions, or a venue owner looking to showcase your space, our user-friendly features cater to your unique needs. make this more short</div>
                <div className="branding">But there&apos;s more. We&apos;re here to enrich your event journey. Explore premium listings, ads, subscriptions, and ticketing services to enhance your experience. Whether you&apos;re seeking adventure or hosting a memorable event, join us today and let&apos;s embark on this exciting journey together. Your unforgettable moments await!</div>
            </div>
            <div className="about-section about-pic">
                <img src={girl} alt="SigmaFemale"/>
            </div>
        </div>
    )
}

const Home = () => {
    return (
        <div className="home">
            <div className="hero">
                <div className="txt">
                    <div className="crown">
                        <p className="evento">EVENTO</p>
                        <p>CELEBRATION</p>
                        <p>THAT EVERY ONE WANTS</p>
                    </div>
                    <div className="lamp">
                        <img src={lamp} alt="lamp"/>
                    </div>
                </div>

                <div className="build"></div>
            </div>
            <div className="rectangle">
                <div className="epitom">UNVEILING THE EPITOM OF LUXURIOUS EVENTS</div>
            </div>
            
            <About />
            
            <div className="experience">
                <div className="newDadar">EXPERIENCE NEW EVENTS</div>
                <div>Be at the Top of the crown of Luxury & EVENT-FUL life That is rare, Premium & Top of the World</div>
            </div>

            <div className="city">
                <img src={city} alt="Mumbai" />
            </div>

            
        </div>
    )
}

export default Home


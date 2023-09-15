import { useState } from 'react';
import './features.css';
import left from '../../../assets/left.png';
import right from '../../../assets/right.png';
import cityLabled from '../../../assets/city-labled.png';
import mapp from '../../../assets/mapp.png';

import cardData from '../../../CardData';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className="card">
            <img src={`/src/assets/${props.pic}`} alt="photo" />
            <div className='card-title'>{props.title}</div>
            <p className='card-des'>{props.description}</p>
        </div>
    )
}

Card.propTypes = {
    pic: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const Amenities = () => {
    const [CurrentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 6;
    const cardDataLength = cardData.length;
  
    const handleNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardDataLength);
    };
  
    const handlePrevSlide = () => {
      setCurrentIndex((prevIndex) =>  prevIndex === 0 ? cardDataLength - 1 : prevIndex - 1);
    };

    const startIndex = CurrentIndex;
    const endIndex = (startIndex + cardsPerPage) % cardDataLength;
    const visibleCards =[
            ...cardData.slice(startIndex),
            ...cardData.slice(0, endIndex),
          ];
  
    return (
        <div className="amenities-container">
            <div className="amenities-heading">TOP RATED SPOTS</div>
            <hr className='my-hr'/>
            
            <div className="amenities-cards">
            <button className="prev-button" onClick={handlePrevSlide}>
                <img src={left} alt="prev" />
            </button>
                {visibleCards.map((card, index) => (
                        <Card
                            key={index}
                            pic={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                    <button className="next-button" onClick={handleNextSlide}>
                        <img src={right} alt="next" />
                    </button>
            </div>
            <div className="amenities-buttons">
                
                
            </div>
        </div>
    )
}

const UtilitySection = () => {
    const utilityOptions = [
        ['Shopping Mall', 'Westfield Mall', 'Fashion Square', 'Downtown Shopping'],
        ['Hospital', 'City General Hospital', 'Mercy Medical Center', 'Sunnydale Clinic'],
        ['Theater', 'Grand Cinema', 'Broadway Theater', 'Starlight Multiplex'],
        ['Educational Institute', 'Central High School', 'Riverside College', 'St. Johns University'],
        ['Religious Place', 'St. Marys Cathedral', 'First Baptist Church', 'Islamic Center'],
        ['Hotel', 'Grand Hotel & Spa', 'Marriott Suites', 'Riverside Inn'],
        ['Corporate & Business Hub', 'Tech Park Plaza', 'Downtown Business Center', 'Financial District'],
        ['Nearby Landmarks', 'Riverside Park', 'City Zoo', 'Riverfront Statue'],
      ];
      
  
    const [selectedItems, setSelectedItems] = useState(Array(9).fill(''));
  
    const handleDropdownChange = (index, event) => {
      const updatedItems = [...selectedItems];
      updatedItems[index] = event.target.value;
      setSelectedItems(updatedItems);
    };
  
    return (
        <div className="utilities">
        {utilityOptions.map((options, index) => (
          <div className="utilities-card" key={index}>
            <select
              value={selectedItems[index]}
              onChange={(event) => handleDropdownChange(index, event)}
              className="transparent-background"
            >
              <option value="" disabled hidden>
                {options[0]} {/* Display the default name */}
              </option>
              {options.slice(1).map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    );
  };

const Landmark = () => {
    return (
        <>
            
            <h3 className='landmark-heading'>
                <div>AFFILIATED SPOTS</div>
            </h3>
            <div className="landmark">
                <div className="map">
                    <img src={mapp} alt="Map" />
                </div>
                < UtilitySection />
            </div>
        </>
    )
}


const Features = () => {
    return (
        <div className="features">
            <br />
            <div className="details-card">
                <div className="item2">
                    <div className="build-upon">
                        <span>GET</span> THE BEST EXPERIENCE OF YOUR LIFE!
                    </div>
                    <div className="harmony">
                    Harmony of Happiness - Savor the Opulence of Your Upcoming Event, Where Unmatched Comfort and Delight Await in Our Event Management Haven.
                    </div>
                    <button className="broucher">Download Broucher</button>
                </div>
                <div className="item3"></div>
            </div>

            <div className="details-card">
                <div className="item5">
                    <div className="build-upon">
                    ENJOY ALL THE EVENTS THAT MAKE UP <span>A RICH EXPERIENCE!</span>
                    </div>
                    <div className="harmony">
                    Indulge in opulence at our Mumbai haven, where luxury meets unparalleled comfort for an unforgettable stay.
                    </div>
                    <button className="quote">BOOK</button>
                </div>
                <div className="item6"></div>
            </div>

            <Amenities />

            <location className="location">
                <div className="location-heading">
                    <div className='location-center'><span>LOCATION</span> THAT MAKES US CENTER OF EVENTS</div>
                    <div>Welcome to EVENTO, your premier destination for exquisite event experiences in the vibrant heart of Dadar, Mumbai. We are dedicated to curating refined and visionary gatherings that leave lasting impressions.</div>
                </div>
                <div className="location-image">
                    <img src={cityLabled} alt="city" />
                </div>
            </location>

            < Landmark />

            
        </div>
    )
}

export default Features
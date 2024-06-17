// src/components/TiltCardCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import TiltCard from './TiltCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import atog from '../Images/MTGImages/Atogatog (11fzjRsfGOBOYBOQ_Wubb_vmLZG2eGWE8).png'
import breya from '../Images/MTGImages/Breya, Etherium Shaper (NormalPlus Clint Cearley) (1Hc0vD-nGBSbL13-0U4VGzoZumCBKJ75k).jpg'
import chulane from '../Images/MTGImages/Chulane, Teller of Tales (Victor Adame Minguez) (1oQBImxvZ8Lx1kCTPYMZRfeRUPzTtdkOk).jpg'
import firesong from '../Images/MTGImages/Firesong and Sunspeaker (1wfzy-Jd-VxB8uTRLod2x8PPqLfyQ7q11).png'
import geralf from '../Images/MTGImages/Geralf, the Fleshwright (1p-IbTjHV1uDUNC35IoJTDkcOAObMZ0fB).png'
import gishath from "../Images/MTGImages/Gishath, Sun's Avatar (Normal) [LCI] {229} (1HGcOxbxxPiHpHuc8brkfDbhxtnurC9Zt).jpg"
import grenzo from '../Images/MTGImages/Grenzo, Dungeon Warden (1hOUjYt0XQSOyZXKIa05LBejK-hL5xb_X).png'
import horde from '../Images/MTGImages/Horde of Notions (12pUT74o0gY28IpW77qbBrmIxVaGYVo90).png'
import meren from '../Images/MTGImages/Meren of Clan Nel Toth (NormalPlus Mark Winters) (1K8_Mf778l7mHw_dZNm4tEWQRRI1jgr57).jpg'
import okaun from '../Images/MTGImages/Okaun, Eye of Chaos (sld1) (1LpubdYNqCqN3XYyZzMKQ00wTGp3vfHuk).png'
import rinseri from '../Images/MTGImages/Rin and Seri, Inseparable (1JdYFCG7fFo7NBzYXbvPN0PJLNT-3d0J-).png'

const TiltCardCarousel = () => {
  const cards = [
    { id: 1, title: 'Card 1', description: 'This is the first card.', imageUrl: atog, linkUrl: 'https://archidekt.com/decks/6466202/atogs_feast_of_success' },
    { id: 2, title: 'Card 2', description: 'This is the second card.', imageUrl: breya, linkUrl: 'https://archidekt.com/decks/5264238/if_she_breathe_she_a_thopt' },
    { id: 3, title: 'Card 3', description: 'This is the third card.', imageUrl: chulane, linkUrl: 'https://archidekt.com/decks/5264140/bant_solitaire' },
    { id: 4, title: 'Card 4', description: 'This is the fourth card.', imageUrl: firesong, linkUrl: 'https://archidekt.com/decks/5264217/masochistic_minotaurs' },
    { id: 5, title: 'Card 5', description: 'This is the fifth card.', imageUrl: geralf, linkUrl: 'https://archidekt.com/decks/7822160/geralf_needs_his_cereal' },
    { id: 6, title: 'Card 6', description: 'This is the sixth card.', imageUrl: gishath, linkUrl: 'https://archidekt.com/decks/7118593/phillips_dinosour' },
    { id: 7, title: 'Card 7', description: 'This is the seventh card.', imageUrl: grenzo, linkUrl: 'https://archidekt.com/decks/6012940/grenzo_christmas_warden' },
    { id: 8, title: 'Card 8', description: 'This is the eight card.', imageUrl: horde, linkUrl: 'https://archidekt.com/decks/5264226/gaslight_gatekeep_girlboss' },
    { id: 9, title: 'Card 9', description: 'This is the ninth card.', imageUrl: meren, linkUrl: 'https://archidekt.com/decks/5264206/die_another_day' },
    { id: 10, title: 'Card 10', description: 'This is the tenth card.', imageUrl: okaun, linkUrl: 'https://archidekt.com/decks/5724722/heads_i_win_tails_you_lose' },
    { id: 11, title: 'Card 11', description: 'This is the eleventh card.', imageUrl: rinseri, linkUrl: 'https://archidekt.com/decks/5288599/its_raining_these_guys' }
    // Add more cards as needed
  ];
// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        position: 'absolute',
        right: '25px',
        zIndex: 1,
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: '50px',
      }}
      onClick={onClick}
    />
  );
  
  // Custom Prev Arrow
  const PrevArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        position: 'absolute',
        left: '25px',
        zIndex: 1,
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: '50px',
      }}
      onClick={onClick}
    />
  );
  
  const settings = {
    dots: true,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        }
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />
        }
      }
    ]
  };

  return (
    <div className="min-h-screen m-3 p-3">
      <Slider {...settings}>
        {cards.map(card => (
          <TiltCard key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} linkUrl={card.linkUrl} />
        ))}
      </Slider>
    </div>
  );
}

export default TiltCardCarousel;
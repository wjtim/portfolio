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
    { id: 1, title: 'Atog', description: 'This is the first card.', imageUrl: atog, linkUrl: 'https://archidekt.com/decks/6466202/atogs_feast_of_success' },
    { id: 2, title: 'Breya', description: 'This is the second card.', imageUrl: breya, linkUrl: 'https://archidekt.com/decks/5264238/if_she_breathe_she_a_thopt' },
    { id: 3, title: 'Chulane', description: 'This is the third card.', imageUrl: chulane, linkUrl: 'https://archidekt.com/decks/5264140/bant_solitaire' },
    { id: 4, title: 'FireSong', description: 'This is the fourth card.', imageUrl: firesong, linkUrl: 'https://archidekt.com/decks/5264217/masochistic_minotaurs' },
    { id: 5, title: 'Geralf', description: 'This is the fifth card.', imageUrl: geralf, linkUrl: 'https://archidekt.com/decks/7822160/geralf_needs_his_cereal' },
    { id: 6, title: 'Gishath', description: 'This is the sixth card.', imageUrl: gishath, linkUrl: 'https://archidekt.com/decks/7118593/phillips_dinosour' },
    { id: 7, title: 'Grenzo', description: 'This is the seventh card.', imageUrl: grenzo, linkUrl: 'https://archidekt.com/decks/6012940/grenzo_christmas_warden' },
    { id: 8, title: 'Horde', description: 'This is the eight card.', imageUrl: horde, linkUrl: 'https://archidekt.com/decks/5264226/gaslight_gatekeep_girlboss' },
    { id: 9, title: 'Meren', description: 'This is the ninth card.', imageUrl: meren, linkUrl: 'https://archidekt.com/decks/5264206/die_another_day' },
    { id: 10, title: 'Okaun and Zndrsplt', description: 'This is the tenth card.', imageUrl: okaun, linkUrl: 'https://archidekt.com/decks/5724722/heads_i_win_tails_you_lose' },
    { id: 11, title: 'Rin and Seri', description: 'This is the eleventh card.', imageUrl: rinseri, linkUrl: 'https://archidekt.com/decks/5288599/its_raining_these_guys' }
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "ease",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            className: "center",
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };

  return (
    <div className="container mx-auto mb-8 mt-8">
      <Slider {...settings}>
        {cards.map(card => (
          <TiltCard key={card.id} title={card.title} description={card.description} imageUrl={card.imageUrl} linkUrl={card.linkUrl} />
        ))}
      </Slider>
    </div>
  );
}

export default TiltCardCarousel;
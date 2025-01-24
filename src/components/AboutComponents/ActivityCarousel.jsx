import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from "../../Images/ActivityImages/1A4F808C-E760-44EB-BC79-12A1D511A786_1_105_c.jpeg";
import second from "../../Images/ActivityImages/30B2E031-7B86-4538-8EA3-7DFD91C56FF9_1_105_c.jpeg";
import third from "../../Images/ActivityImages/34FE7937-CB29-4AD2-9A53-A20929F972E7_1_105_c.jpeg";
import fifth from "../../Images/ActivityImages/74A28346-1FF6-40DB-A6F9-110950C08D4F_1_105_c.jpeg";
import sixth from "../../Images/ActivityImages/7645496A-64EF-4ACA-A9C4-0A827BAD8F79_1_105_c.jpeg";
import seventh from "../../Images/ActivityImages/778BDF44-921F-4D23-90AE-EC57A32EAC81_1_105_c.jpeg";
import eighth from "../../Images/ActivityImages/93E06524-7E7B-4BD2-91B6-F1D49BB39167.jpeg";
import ninth from "../../Images/ActivityImages/9BF9195D-1EA5-4179-B18D-E7762B01766E_1_105_c.jpeg";
import tenth from "../../Images/ActivityImages/9FC1B9CB-C075-4884-8106-24D1BA7762DD_1_105_c.jpeg";
import twelfth from "../../Images/ActivityImages/BE5063A8-66B3-451C-9C36-ECFEF860B2F6_1_105_c.jpeg";
import thirteenth from "../../Images/ActivityImages/EDCC82AF-7336-442C-A1B0-815A58980778_1_105_c.jpeg";
import fourteenth from "../../Images/ActivityImages/FD240375-325D-45CA-A902-D389A69238D9_1_105_c.jpeg";
import fifteenth from "../../Images/ActivityImages/FEF979ED-5331-4DCF-B606-6467A5DA34A4.jpeg";

const ActivityCarousel = () => {
  const sliderRef = useRef(null);

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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [
    { src: first, alt: "The inside of BC Place during a WhiteCaps soccer game" },
    { src: second, alt: "The inside of Rogers Arena during a Canucks hockey game" },
    { src: third, alt: "A small mountaineering shack peeking over the top of Panorama Ridge Mountain" },
    { src: fifth, alt: "A black and white kitten (Poppy!) sitting smugly on a laptop" },
    { src: sixth, alt: "A blonde girl (RuthAnne!) smirking at the camera while on a boardwalk in a field surrounded by mountains" },
    { src: seventh, alt: "An outdoor Canadians baseball game at Nat Bailey Stadium" },
    { src: eighth, alt: "A man and woman, (Me and Ruthie!), smiling atop a mountain overlooking a large lake" },
    { src: ninth, alt: "A man in active wear (Me!) running on the Vancouver sea wall" },
    { src: tenth, alt: "A woman in the distance (Ruthie!) walking on the ridgeline of a snowy mountain " },
    { src: twelfth, alt: "A gondola passing through the trees of Grouse Mountain" },
    { src: thirteenth, alt: "Two tents on a wooden platform in light forest cover, mountains can be seen in the background" },
    { src: fourteenth, alt: "The SkyTrain pulling into Olympic Village station on a sunny day" },
    { src: fifteenth, alt: "A man and woman (Me and Ruthie!) smiling infront of a large waterfall" },
  ];

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      sliderRef.current.slickPrev();
    } else if (event.key === "ArrowRight") {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div
      className="container mx-auto mb-8 mt-8 relative"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <button
        aria-label="Previous slide"
        className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => sliderRef.current.slickPrev()}
      >
        &lt;
      </button>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <div className="relative w-[244px] h-[360px] bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </Slider>
      <button
        aria-label="Next slide"
        className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => sliderRef.current.slickNext()}
      >
        &gt;
      </button>
    </div>
  );
};

export default ActivityCarousel;
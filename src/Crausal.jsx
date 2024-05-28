import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Crausal() {

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  
  return (
    <><div className='container mx-auto'>
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  
  
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className="flex flex-row w-full justify-center text-center bg-orange-500 py-12">Item 1</div>
  <div className="flex flex-row w-full justify-center text-center bg-red-500 py-12">Item 2</div>
  <div className="flex flex-row w-full justify-center text-center bg-green-500 py-12">Item 3</div>
  <div className="flex flex-row w-full justify-center text-center bg-yellow-500 py-12">Item 4</div>
</Carousel>
        
        </div></>
    
  )
}

export default Crausal
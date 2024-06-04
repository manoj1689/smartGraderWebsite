import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../services/api/axiosInstance";
import codingDev from "../../../assets/individual/codingdeveloper.png";
import star from "../../../assets/individual/Star.png";
import graderLogo from "../../../assets/individual/graderIcon.png";
import java from "../../../assets/individual/javaLogo.png";
import { HiDotsVertical } from "react-icons/hi";
import { CiClock2 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { HiDotsHorizontal } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NotificationBar from "../../NotificationBar/NotificationBar";
import QuestionPage from "../userDashBoard/QuestionPage";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Bind modal to root of the app to avoid screen readers issues

const SelectQuestion = () => {
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [query, setQuery] = useState("");
  const prevQueryRef = useRef("");
  const [cardId, setCardId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchSearch = async (searchTerm) => {
    if (searchTerm) {
      try {
        const response = await axiosInstance.get(
          `/categories/search?term=${searchTerm}`
        );
        setSearchList(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          "/categories/subcat?category_id=1"
        );
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const fetchCardData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await axiosInstance.get(
          "/sets/all?sub_category_id=11",
          {
            headers: {
              Accept: "application/json",
              Token: token,
            },
          }
        );

        let filteredData = response.data.data;
        if (selectedCategories.length > 0) {
          filteredData = filteredData.filter((item) =>
            selectedCategories.includes(item.name)
          );
        }

        setCardsData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCardData();

    if (query !== prevQueryRef.current) {
      prevQueryRef.current = query;
      fetchSearch(query);
    }
  }, [query, selectedCategories]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category.name)) {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== category.name)
      );
    } else {
      setSelectedCategories([...selectedCategories, category.name]);
    }
  };

  const handleCardClick = (id) => {
    setCardId(id);
    setIsModalOpen(true); // Open modal when card is clicked
  };

  const handleOnSearch = (string) => {
    setQuery(string);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span
          style={{ display: "block", textAlign: "left", cursor: "pointer" }}
        >
          {item.name}
        </span>
      </>
    );
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1264 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container mx-auto w-full h-full px-4 md:px-10">
      <NotificationBar />
    
      <div className="rounded-md border border-solid my-5 py-10 border-black border-opacity-10">
      <div className="container mx-auto lg:w-11/12 relative z-10"> 
  <div className="flex justify-end items-center">
    <div className="md:mb-0 px-4 relative sm:w-[350px] max-sm:w-full">
      <ReactSearchAutocomplete
        items={searchList}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        autoFocus
        formatResult={formatResult}
        styling={{ border: "1.5px solid #C0C0C0", borderRadius: "5px" }}
      />
    </div>
  </div>
</div>

<div className="container mx-auto lg:w-11/12">
  <Carousel
    swipeable={true}
    draggable={false}
    showDots={false}
    responsive={responsive}
    ssr={true}
    infinite={true}
    autoPlaySpeed={1000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    className="container py-5 relative z-0" 
    customLeftArrow={
      <div className="absolute left-2 bg-gray-400 bg-opacity-60 px-3 py-3 rounded-full">
        <FaChevronLeft className="max-w-6 cursor-pointer text-primary-300" />
      </div>
    }
    customRightArrow={
      <div className="absolute right-2 bg-gray-400 bg-opacity-60 px-3 py-3 rounded-full">
        <FaChevronRight className="max-w-6 cursor-pointer text-primary-300" />
      </div>
    }
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-20-px"
  >
    {categories.map((category) => (
      <div
        key={category.id}
        onClick={() => toggleCategory(category)}
        className={`flex justify-center align-center text-sm py-2 mx-2 border border-solid border-neutral-500 rounded-[30px] cursor-pointer ${
          selectedCategories.includes(category.name)
            ? "text-sky-500 bg-sky-50 border-sky-500"
            : "border-neutral-500"
        }`}
      >
        {category.name}
      </div>
    ))}
  </Carousel>
</div>


        <div className="flex flex-wrap max-lg:justify-center max-lg:align-center gap-2 px-10 py-10 mt-10">
          {cardsData.map((card) => (
            <div
              key={card.id}
              onClick={(e) => {
                e.stopPropagation();
                handleCardClick(card.id);
              }}
              className="flex flex-row  h-2/5 bg-white rounded-md border border-solid border-black border-opacity-10 shadow-md hover:shadow-lg hover:border-slate-800 transition duration-300 ease-in-out  font-light text-neutral-500 cursor-pointer"
            >
              <div className="flex gap-5 justify-between px-6 py-6 font-light bg-sky-50 rounded-md border border-sky-500 border-solid max-w-[561px] text-neutral-500 max-md:flex-wrap max-md:pr-5">
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="flex justify-center">
                    <img
                      loading="lazy"
                      src={codingDev}
                      alt={card.title}
                      className="w-20 h-20"
                    />
                  </div>
                  
                  <div className="flex flex-col ">
                    <div className="flex gap-1 self-start py-1.5 text-xs leading-4 whitespace-nowrap rounded-sm shadow-sm">
                      <img
                        loading="lazy"
                        alt="star"
                        src={star}
                        className="shrink-0 aspect-[1.09] fill-amber-400 w-[17px] h-[17px]"
                      />
                      <div className="flex-auto">{card.rating}/5</div>
                    </div>
                    <div className="mt-2.5 text-lg leading-4 text-slate-800">
                      <div className="flex ">
                        <div>{card.title}</div>
                        <img
                          loading="lazy"
                          alt="java"
                          src={java}
                          className="shrink-0 aspect-[1.09] ml-5 w-[30px] h-[30px]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 mt-3 items-center px-0.5  text-sm leading-5">
                      <div className="flex flex-col gap-1 lg:flex-row">
                        <div className="flex gap-1">
                          <div className="flex justify-center items-center ">
                            <CiClock2 size={14} color="#01AFF4" />
                          </div>
                          <div>{card.duration} Min</div>
                        </div>
                        <div className="flex gap-1">
                          <div className="flex justify-center items-center ">
                            <IoHelpCircleOutline size={14} color="#01AFF4" />
                          </div>
                          <div>{card.questions_count} Questions</div>
                        </div>
                      </div>
                      <div className=" flex justify-center items-center self-stretch px-2.5 py-1 text-xs leading-4 whitespace-nowrap bg-sky-50 rounded-md border border-solid border-neutral-500">
                        Frontend
                      </div>
                      <div className="flex justify-center w-[25px] lg:hidden items-center">
                        <HiDotsVertical size={40} />
                      </div>
                    </div>
                  </div>
                  <div className="flex max-lg:hidden justify-center  items-center">
                    <HiDotsHorizontal size={40} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:w-2/3 gap-5 lg:flex-row">
        <button className="flex justify-center  items-center self-stretch mx-auto px-4 py-5 mt-10 text-base text-white bg-sky-500 rounded-md border border-sky-500 border-solid w-full  max-md:px-5">
          <div className="flex gap-2.5">
            <div className='flex items-center gap-3'>
              <span>Continue With This Question Set</span>
              <span><MdArrowOutward /></span>
            </div>
          </div>
        </button>
        <button className="flex justify-center items-center mx-auto self-stretch px-4 py-5 mt-10 text-red-500 bg-white rounded-md border border-gray-400 w-full max-md:px-5">
          <div className="flex gap-2.5">
            <div className='flex items-center gap-3'>
              <span>View Question Set Details</span>
              <span><MdArrowOutward /></span>
            </div>
          </div>
        </button>
      </div>

      <Modal
  isOpen={isModalOpen}
  onRequestClose={() => {
    setIsModalOpen(false);
    setCardId(""); // Reset cardId when modal is closed
  }}
  contentLabel="Question Page Modal"
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Add an overlay with some transparency
      zIndex: 20, // Set a higher z-index for the overlay
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      zIndex: 21, // Set a higher z-index for the modal content
      position: 'absolute',
      maxHeight: '80%', // Set a maximum height for the modal content
      overflowY: 'auto', // Enable vertical scrolling when content exceeds the height
      transform: 'translate(-50%, -50%)',
      width: '80%', // Set width as needed
      maxWidth: '500px', // Set maximum width if needed
    },
  }}
>
  <QuestionPage cardId={cardId} />
</Modal>


    </div>
  );
};

export default SelectQuestion;

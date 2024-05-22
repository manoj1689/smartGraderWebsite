import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import codingDev from "../../../assets/individual/codingdeveloper.png";
import star from "../../../assets/individual/Star.png";
import graderLogo from "../../../assets/individual/graderIcon.png";
import LineScoreCard from "./LineScoreCard";
import CircleScoreCard from "./CircleScoreCard";
import { TfiBell } from "react-icons/tfi";
import { FiArrowUpRight } from "react-icons/fi";
import { CiClock2 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import womanCheck from "../../../assets/individual/woman-plan-todo-list.png";
import axiosInstance from "../../../axiosInstance";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
function UserDashBoard(props) {
  const navigate = useNavigate();
  const [cardsData, setCardsData] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [seachList,setSearchList]=useState()
  const [query, setQuery] = useState('');
 
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch('/categories/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }), // Set the query dynamically
        });
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setSearchList(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchSearch();
  }, [query]); // Fetch categories whenever the query changes

console.log("query",query)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/categories/subcat?category_id=1');
        console.log('Response data:', response.data.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category.name)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category.name));
    } else {
      setSelectedCategories([...selectedCategories, category.name]);
    }
  };
 console.log("categories Data top Bar",selectedCategories)
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < categories.length - 4) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://34.131.249.177:8000/sets/all?sub_category_id=10",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              // Add your token header here if required
            },
          }
        );
  
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
  
        const responseData = await response.json();
  
        // Filter the data based on selected categories
        let filteredData = responseData.data;
        if (selectedCategories.length > 0) {
          filteredData = responseData.data.filter((item) =>
            selectedCategories.includes(item.name)
          );
        }
  
        setCardsData(filteredData);
        console.log("cardsData", filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [selectedCategories]);
  
  const handleCardClick = (id) => {
    navigate(`/signIn/dashboard/question/${id}`);
  };
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>id: {item.name}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.id}</span>
      </>
    )
  }

  return (
    <div className=" w-full px-4 py-4">
      <div className="  px-4 md:px-10 md:py-10 py-4">
        <div className="flex gap-5 my-10 justify-between max-md:flex-wrap">
          <div className="flex gap-3.5 px-5  max-md:flex-wrap">
            <div className="grow  text-2xl font-medium leading-8 text-sky-500">
              <span className="">Hello!</span>{" "}
              <span className="text-sky-500">{props.individualData.name}</span>
            </div>
            <div className="flex-auto my-auto text-base font-light leading-4 text-neutral-500">
              Here's the current status for today!
            </div>
          </div>
          <TfiBell size={30} />
        </div>
        <div className="flex  justify-between items-center px-5 text-xs leading-4 text-neutral-500 max-md:flex-wrap">
        <div className="flex gap-5  flex-row justify-between items-center">
        <FaChevronLeft onClick={handlePrevious} />
        <div className="flex gap-2 self-stretch my-auto font-light max-md:flex-wrap">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.slice(currentIndex, currentIndex + 4).map((category) => (
              <div
                key={category.id}
                onClick={() => toggleCategory(category)}
                className={`justify-center text-sm px-8 py-2 border border-solid border-neutral-500 rounded-[30px] max-md:px-5 cursor-pointer ${
                  selectedCategories.includes(category.name)
                    ? "text-sky-500 bg-sky-50 border-sky-500"
                    : "border-neutral-500"
                }`}
              >
                {category.name}
              </div>
            ))}
          </div>
        </div>
        <FaChevronRight onClick={handleNext} />
      </div>
   
      <div className="flex gap-5 self-stretch max-md:flex-wrap max-md:max-w-full">
      <div style={{ width: 400 }}>
          <ReactSearchAutocomplete
            items={seachList}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            formatResult={formatResult}
            onInputChange={(input) => setQuery(input)}
          />
        </div>
      
      </div>
    </div>

        <div className="flex flex-wrap gap-4 px-10 py-10 mt-10">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col p-4 h-2/5 bg-white rounded-md border border-solid border-black border-opacity-10 shadow-md hover:shadow-lg hover:border-slate-800 transition duration-300 ease-in-out w-64 font-light text-neutral-500 cursor-pointer"
            >
              <div className="flex flex-col justify-center text-xs leading-6 whitespace-nowrap bg-sky-50 rounded-md">
                <div className="flex overflow-hidden relative flex-col pt-4 pb-1 w-full aspect-w-1 aspect-h-1">
                  <img
                    loading="lazy"
                    src={card.img_url}
                    alt={card.title}
                    className="object-cover absolute inset-0 w-full h-full"
                  />
                  <img
                    loading="lazy"
                    alt="Coding"
                    src={codingDev}
                    className="self-end aspect-square w-12"
                  />
                  <div className="flex relative gap-1 py-1.5 mt-3 bg-white rounded-sm shadow-sm">
                    <img
                      loading="lazy"
                      alt="star"
                      src={star}
                      className="shrink-0 aspect-[1.09] fill-amber-400 w-[17px] h-[17px]"
                    />
                    <div className="flex-auto">{card.rating}/5</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 justify-between mt-4">
                <div className="flex gap-1 text-sm leading-4">
                  <img
                    loading="lazy"
                    alt="grader"
                    src={graderLogo}
                    className="shrink-0 aspect-[1.27] w-[30px]"
                  />
                  <div className="my-auto">{card.title}</div>
                </div>
                <div className="justify-center px-2 py-1 my-auto text-xs leading-4 whitespace-nowrap bg-sky-50 rounded-md border border-solid border-neutral-500">
                  {card.level}
                </div>
              </div>
              <div className="mt-2 text-sm leading-6 text-slate-800">
                {card.description}
              </div>
              <div className="flex gap-2 self-start mt-2 text-xs leading-5">
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
              <button
                className="flex items-center justify-center px-3 py-2 mt-4 text-xs text-white bg-sky-500 rounded-md border border-sky-500 border-solid hover:bg-slate-800 hover:border-slate-800"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(card.id);
                }}
              >
                <div className="flex flex-row items-center gap-2">
                  <div>Take a Test</div>
                  <div>
                    <FiArrowUpRight size={15} />
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div className="pt-5 pl-8 bg-white rounded-md border border-solid border-black border-opacity-10 max-md:pl-5">
          <div className="flex flex-col md:flex-row " >
            <div className="basis-5/6 flex flex-col xl:flex-row  gap-5  max-md:gap-0">
            <div className="md:w-full  flex flex-col sm:flex-row ">
          <div >
           
            <div className="font-medium  text-slate-800">
                  Set Your Own Questions{" "}
                </div>

           
            <div className="flex flex-col md:flex-row " >
            <div className=" flex flex-col self-stretch my-auto text-lg font-light leading-6 text-neutral-500 ">
                
                <div className="flex gap-2.5 mt-7">
                  <IoCheckmark size={28} color="#01AFF4" />
                  <div className="flex-auto my-auto">
                    Create by Selecting Domain
                  </div>
                </div>
                <div className="flex gap-2.5 mt-1.5">
                  <IoCheckmark size={28} color="#01AFF4" />
                  <div className="flex-auto my-auto">Create by Writing JD</div>
                </div>
              </div>
              <div className="flex flex-col ml-5  max-md:ml-0 max-md:w-full ">
              <div className="flex flex-col self-stretch my-auto text-lg font-light leading-6 text-neutral-500 ">
                <div className="flex gap-2.5 mt-7">
                  <IoCheckmark size={28} color="#01AFF4" />
                  <div className="flex-auto my-auto">
                    Create by Resume Uploading
                  </div>
                </div>
                <div className="flex gap-2.5 mt-1.5">
                  <IoCheckmark size={28} color="#01AFF4" />
                  <div className="flex-auto my-auto">
                    Create by Your Own Questions
                  </div>
                </div>
              </div>
            </div>
            </div>
           
            </div>
            
          </div>
          
          <div className=" lg:pt-10 w-full ">
              <button
                onClick={() => navigate("/signIn/dashboard/generatequestion")}
                type="button"
                className="flex justify-center items-center bg-blue-400 w-50 md:w-72 mx-auto  my-5 text-white px-4 py-2 mt-4 rounded-sm hover:bg-blue-500 transition duration-300"
              >
                <span className="mr-2">Lets Get Started</span>
                <FiArrowUpRight size={20} />
              </button>
       

          </div>
              
            </div>
       
           
            <div className="basis-1/6  max-md:w-full">
            
                    <img
                      loading="lazy"
                      alt="womanCheck"
                      src={womanCheck}
                      className="w-96"
                    />
                  </div>
         
          </div>
        </div>
        <div className="flex flex-col md:flex-row  max-md:flex-col max-md:gap-0">
          <div
            className="w-full md:w-1/2 cursor-pointer"
            onClick={() => navigate("/signIn/dashboard/result")}
          >
            <LineScoreCard />
          </div>
          <div className="w-full md:w-1/2">
            <CircleScoreCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashBoard;

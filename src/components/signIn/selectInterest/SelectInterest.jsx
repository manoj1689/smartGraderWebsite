import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axiosInstance from '../../../axiosInstance';
import { FiArrowUpRight } from "react-icons/fi";

function SelectInterest() {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/categories/all');
        console.log('Response data:', response.data.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category.id)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category.id));
    } else {
      setSelectedCategories([...selectedCategories, category.id]);
    }
  };

  const handleSubmit = () => {
    if (selectedCategories.length >= 5) {
      console.log("Proceeding with selected categories:", selectedCategories);
      navigate("/signIn/dashboard");
    } else {
      alert("Please select five or more categories to proceed.");
    }
  };

  return (
    <div className="container mx-auto h-screen px-4 py-4 justify-center">
      <div className="flex flex-col px-5">
        <div className="self-center text-2xl mt-20 md:mt-40 font-medium leading-8 text-slate-800">
          Let’s Select Your Interest{" "}
        </div>
        <div className="flex justify-center items-center mt-5 w-full text-base font-light leading-6 text-neutral-500">
          Please select <span className="text-base px-2 font-normal leading-6 text-neutral-500"> Five or more </span> categories to proceed
        </div>
        <div className="flex flex-col mt-5 mb-5 items-center text-xs leading-4">
          <div className="flex gap-2.5 px-5 font-light text-neutral-500 max-md:flex-wrap">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  onClick={() => toggleCategory(category)}
                  className={`justify-center text-sm px-8 py-4 border border-solid border-neutral-500 rounded-[30px] max-md:px-5 cursor-pointer ${
                    selectedCategories.includes(category.id)
                      ? "text-sky-500 bg-sky-50 border-sky-500"
                      : "border-neutral-500"
                  }`}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            className={`flex justify-center items-center px-4 py-5 mt-11 w-full text-sm text-white bg-sky-500 rounded-md border border-sky-500 border-solid max-w-[707px] max-md:px-5 max-md:mt-10 max-md:max-w-full ${
              isPressed ? "bg-sky-600" : "bg-sky-500"
            }`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onClick={handleSubmit}
          >
            <div className="flex gap-2.5 px-px">
              <span>Continue</span>
              <span>
              <FiArrowUpRight size={20} />
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectInterest;

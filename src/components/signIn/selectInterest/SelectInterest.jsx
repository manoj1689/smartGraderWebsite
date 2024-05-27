import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosInstance';
import { FiArrowUpRight } from "react-icons/fi";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SelectInterest() {
  const navigate = useNavigate();
  const [isPressed, setIsPressed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const notify = () => toast.warn('🦄 Please select five or more categories to proceed!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });

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

  const handleSubmit = async () => {
    if (selectedCategories.length >= 5) {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        toast.error('Token is missing. Please log in again.');
        return;
      }

      try {
        const response = await axiosInstance.post(
          'http://34.131.249.177:8000/users/career_domain',
          selectedCategories,
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              token: token
            }
          }
        );
        console.log(response)
        if (response.data.status ===1 && response.data.msg==="success") {
          console.log("Proceeding with selected categories:", selectedCategories);
          navigate("/signIn/dashboard");
        } else {
          toast.error('Failed to save selected categories.');
        }
      } catch (error) {
        console.error('Error submitting data:', error);
        toast.error('An error occurred while submitting your selection.');
      }
    } else {
      notify();
    }
  };

  return (
    <div className="container mx-auto h-screen px-4 py-4 justify-center">
      <ToastContainer type="warning" />
      <div className="flex flex-col px-5">
        <div className="flex flex-row self-center text-2xl mt-20 md:mt-40 font-medium leading-8 text-slate-800">
          Let’s Select Your Interest
        </div>
        <div className="flex flex-col md:flex-row mt-5 justify-center items-center text-base font-light leading-6 text-neutral-500 text-center md:text-left">
          <div className="self-center">
            Please select <span className="text-base px-2 font-bold leading-6 text-neutral-500">Five or more</span>
          </div>
          <div className="self-center md:ml-2">
            categories to proceed
          </div>
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

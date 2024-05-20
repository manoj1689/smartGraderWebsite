import React,{useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
function SelectInterest() {
    const navigate = useNavigate();
  //   const location = useLocation();
  // const { activeTab } = location.state || {};
    const [isPressed, setIsPressed] = useState(false);
    const handleMouseDown = () => {
        setIsPressed(true);
      };
    
      const handleMouseUp = () => {
        setIsPressed(false);
      };
    const categories = [
        "Geometry",
        "Calculus",
        "Statistics",
        "Biology",
        "Chemistry",
        "Physics",
        "Earth Science",
        "Reading Comprehension",
        "Writing Skills",
        "Literary Analysis",
        "World History"
      ];
      const [selectedCategories, setSelectedCategories] = useState([]);

      const toggleCategory = (category) => {
        if (selectedCategories.includes(category)) {
          setSelectedCategories(selectedCategories.filter((c) => c !== category));
        } else {
          setSelectedCategories([...selectedCategories, category]);
        }
      };
    
      const handleSubmit = () => {
        if (selectedCategories.length >= 5) {
          // Proceed with the action, e.g., navigate to the next page
          console.log("Proceeding with selected categories:", selectedCategories);
          navigate("/signIn/dashboard"); 
         // navigate('/signIn',{state:{activeTab}})
        } else {
          alert("Please select five or more categories to proceed.");
        }
      };   
  return (
    <div className="container mx-auto h-screen  px-4 py-4 justify-center ">
        <div className="flex flex-col px-5">
      <div className="self-center text-2xl mt-20 md:mt-40 font-medium leading-8 text-slate-800">
        Let’s Select Your Interest{" "}
      </div>
      <div className="flex justify-center items-center mt-5 w-full text-base font-light leading-6 text-neutral-500">
  Please select {' '}<span className="text-base px-2 font-normal leading-6 text-neutral-500"> Five or more </span>{' '} categories to proceed
</div>
<div className="flex flex-col mt-5 mb-5 items-center text-xs leading-4">
      <div className="flex gap-2.5 px-5 font-light text-neutral-500 max-md:flex-wrap">
      <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <div
          key={category}
          onClick={() => toggleCategory(category)}
          className={`justify-center text-sm px-8 py-4 border border-solid border-neutral-500 rounded-[30px] max-md:px-5 cursor-pointer ${
            selectedCategories.includes(category)
              ? "text-sky-500 bg-sky-50 border-sky-500"
              : "border-neutral-500"
          }`}
        >
          {category}
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
                  <span>Create an Account</span>
                </div>
              </button>
</div>

    </div>

    </div>
  )
}

export default SelectInterest
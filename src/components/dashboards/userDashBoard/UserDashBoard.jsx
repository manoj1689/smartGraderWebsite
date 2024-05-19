import React ,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom' 
import smartLogo from "../../../assets/images/smart-logo.png"
import LineScoreCard from './LineScoreCard';
import CircleScoreCard from './CircleScoreCard';
function UserDashBoard(props) {
  const [cardsData, setCardsData] = useState([]);

  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://34.131.249.177:8000/sets/all?sub_category_id=10', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            // Add your token header here if required
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setCardsData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/');
  };

  const handleCardClick = (id) => {
    navigate(`/signIn/dashboard/question/${id}`);
  };

  return (
    <div className="flex flex-col md:flex-row px-4 py-4">
      <div className="flex flex-col w-full md:w-1/6 px-10 py-5 bg-white border-r border-solid border-black border-opacity-10">
        <div className="flex  mb-8">
          <Link to ="/signIn/dashboard">
          <img className='h-11' src={smartLogo} alt="smart Grader" />
          </Link>
  
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5 justify-between self-start px-px text-base">
            <div className="flex gap-3">
              <div className="flex flex-col my-auto">
                <div className="font-light leading-[150%] text-neutral-500">
                  Welcome!
                </div>
                <div className="mt-2.5 leading-[100%] text-slate-800">
                  {props.individualData.name}
                </div>
              </div>
            </div>
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ab6f2493bc7f6254ec22b4ea860b52cc9ca6fb726427d72283b074d65eb70b9?"
              className="shrink-0 self-start mt-2.5 aspect-[4.35] w-[13px]"
            />
          </div>
          <div className="shrink-0 self-start mt-5 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10" />
          <div
            className={`flex gap-2 mt-7 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Dashboard' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Dashboard')}
          >
            <div className="flex overflow-hidden relative flex-col justify-center items-center w-4 aspect-square">
              <img
                loading="lazy"
                alt="icon"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba8fd369eed5249898922030772c2767223a956d7cbbfec314e96ac763671efb?"
                className="shrink-0 aspect-square w-[18px] transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <div className="flex-auto my-auto">
              Dashboard
            </div>
          </div>
          <div
            className={`flex gap-2 mt-7 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Mock Interviews' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Mock Interviews')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9986a12bb134a1073bac464361a9e56a52cbd38f5581cec938a55959604ee5d?"
              className="shrink-0 aspect-square w-[18px] transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex-auto my-auto">Mock Interviews</div>
          </div>
          <div
            className={`flex gap-2 mt-10 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Progress Tracker' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Progress Tracker')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ea158ca81ca036e0424dd2095b2555f3f16d5b7bf6f55822fc548cd23436bb4?"
              className="shrink-0 self-start aspect-[1.14] w-[17px] transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex-auto">Progress Tracker</div>
          </div>
          <div
            className={`flex gap-2 mt-10 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Quick Access' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Quick Access')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/05341026f5ad1893ba1609ad6de1ee0d029b8f640153ce85a8cb046046721d71?"
              className="shrink-0 aspect-square w-[18px] transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex-auto">Quick Access</div>
          </div>
          <button onClick={handleLogout} type="button" className="bg-blue-400 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-500 transition duration-300">
          Logout
        </button>
          <div className="shrink-0 self-start mt-96 h-px border border-solid bg-black bg-opacity-10 border-black border-opacity-10" />
          <div
            className={`flex gap-2 mt-12 ml-4 text-base leading-4 whitespace-nowrap cursor-pointer transition duration-300 ${
              activeItem === 'Settings' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Settings')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a24349ad5042312e50be0c6d5bcaca1ef4ca22b96ae99f43efb72112df1e7441?"
              className="shrink-0 aspect-square w-[19px] transition-transform duration-300 transform hover:scale-110"
            />
            <div>Settings</div>
          </div>
          <div
            className={`flex gap-1.5 mt-10 text-base leading-4 cursor-pointer transition duration-300 ${
              activeItem === 'Help & Support' ? 'text-[#0190C3]' : 'text-neutral-500'
            }`}
            onClick={() => handleItemClick('Help & Support')}
          >
            <img
              loading="lazy"
              alt="icon"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca9bf7d7f2cbc11aebaef6ed2889430e122ca8ee6948d0ceabbe6c7bfeb8636b?"
              className="shrink-0 aspect-square w-[21px] transition-transform duration-300 transform hover:scale-110"
            />
            <div className="flex-auto my-auto">Help & Support</div>
          </div>
        </div>
        </div>
    <div className='w-full  px-4 md:px-10 md:py-10 py-4'>
    <div className="flex gap-5 justify-between max-md:flex-wrap">
      <div className="flex gap-3.5 px-5 my-auto max-md:flex-wrap">
        <div className="grow text-2xl font-medium leading-8 text-sky-500">
          <span className="">Hello!</span>{" "}
          <span className="text-sky-500">{props.individualData.name}</span>
        </div>
        <div className="flex-auto my-auto text-base font-light leading-4 text-neutral-500">
          Here's the current status for today!
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/eadc73067cac4b04fb39f7dbe19b7fbe82b827d24b0a929bddaf5d0ef961a267?"
        className="shrink-0 w-6 aspect-[0.7]"
      />
    </div>
        
        <div className="flex flex-wrap gap-4 px-10 py-10 mt-10">
  {cardsData.map((card) => (
    <div key={card.id} className="flex flex-col p-4 h-2/5 bg-white rounded-md border border-solid border-black border-opacity-10 shadow-md hover:shadow-lg hover:border-slate-800 transition duration-300 ease-in-out w-64 font-light text-neutral-500 cursor-pointer" >
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
            alt=""
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d0c594958ca1e635d880ffc9427a70b6140c14614bd200826b4ee9ee6b04b8b?"
            className="self-end aspect-square w-12"
          />
          <div className="flex relative gap-1 py-1.5 mt-3 bg-white rounded-sm shadow-sm">
            <img
              loading="lazy"
              alt=""
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/48ac4a8b86895860941586dccd8bd2679810c703a33b1e67f2173d1016138428?"
              className="shrink-0 aspect-[1.09] fill-amber-400 w-[13px]"
            />
            <div className="flex-auto">{card.rating}/5</div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between mt-4">
        <div className="flex gap-1 text-sm leading-6">
          <img
            loading="lazy"
            alt=""
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67afd907ddbad73a613c755b6abb717256487023921b5497d85b408ca1ca26d7?"
            className="shrink-0 aspect-[1.27] w-[20px]"
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
          <img
            loading="lazy"
            alt=""
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/59136ee86d1a39641361d5dc01700197133eb02dfb7db850e241d9028d55ab3c?"
            className="shrink-0 w-3 aspect-square"
          />
          <div className="my-auto">{card.duration} Min</div>
        </div>
        <div className="flex gap-1">
          <img
            loading="lazy"
            alt=""
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e2250f63297f492a2f445a2ccb86da57f7fb4bb4ba66f771cd716b8bf4ee838?"
            className="shrink-0 aspect-square w-3"
          />
          <div>{card.questions_count} Questions</div>
        </div>
      </div>
      <button
        className="flex gap-2 justify-center px-3 py-2 mt-4 text-xs text-white bg-sky-500 rounded-md border border-sky-500 border-solid hover:bg-slate-800 hover:border-slate-800"
        
        onClick={(e) => {
          e.stopPropagation();
          handleCardClick(card.id);
        }}
      >
        <div>Take A Test</div>
        <img
          loading="lazy"
          alt=""
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed497768b332ec6a18438d602c8ba173c3be32b8dfe35e408b12ed9e6dc49a2?"
          className="shrink-0 my-auto w-2 border-2 border-white border-solid aspect-square"
        />
      </button>
     
    </div>
  ))}
</div>
<div className="pt-5 pl-8 bg-white rounded-md border border-solid border-black border-opacity-10 max-md:pl-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-lg font-light leading-6 text-neutral-500 max-md:mt-10">
            <div className="font-medium text-slate-800">
              Set Your Own Questions{" "}
            </div>
            <div className="flex gap-2.5 mt-7">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d2a63875396311f4b50decc038227ca619b39c52f074c4464499cf9280e641?"
                className="shrink-0 aspect-square w-[29px]"
              />
              <div className="flex-auto my-auto">
                Create by Selecting Domain
              </div>
            </div>
            <div className="flex gap-2.5 mt-1.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d2a63875396311f4b50decc038227ca619b39c52f074c4464499cf9280e641?"
                className="shrink-0 aspect-square w-[29px]"
              />
              <div className="flex-auto my-auto">Create by Writing JD</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-lg font-light leading-6 text-neutral-500 max-md:mt-10">
            <div className="flex gap-2.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d2a63875396311f4b50decc038227ca619b39c52f074c4464499cf9280e641?"
                className="shrink-0 aspect-square w-[29px]"
              />
              <div className="flex-auto my-auto">
                Create by Resume Uploading
              </div>
            </div>
            <div className="flex gap-2.5 mt-2">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20d2a63875396311f4b50decc038227ca619b39c52f074c4464499cf9280e641?"
                className="shrink-0 aspect-square w-[29px]"
              />
              <div className="flex-auto my-auto">
                Create by Your Own Questions
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 justify-center items-center">
      <button onClick={()=>navigate('/signIn/dashboard/generatequestion')} type="button" className="bg-blue-400 w-40 text-white px-4 py-2 mt-4 rounded-sm hover:bg-blue-500 transition duration-300">
        Lets Get Started
      </button>
    </div>
        <div className="flex flex-col ml-5 w-[51%] max-md:ml-0 max-md:w-full">
          <div className="z-10 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/37f489cd18518afab1c8e928e892f7821b4d5c6ff6b2ee2ac0065288bf6ffc97?"
                  className="grow w-full aspect-[1.56]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col md:flex-row  max-md:flex-col max-md:gap-0">
      
      
        <div className="w-full md:w-1/2 cursor-pointer"onClick={()=>navigate('/signIn/dashboard/result')} >
          <LineScoreCard />
        </div>
        <div className="w-full md:w-1/2">
          <CircleScoreCard />
        </div>
      </div>

        </div>
        



    </div>
  )
}

export default UserDashBoard
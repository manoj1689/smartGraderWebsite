import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuestionPage = (props) => {
  const  id  = props.cardId;
  console.log("Question Page Recieve id",id)
  const [questionsData, setQuestionsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        if (!token) {
          throw new Error('No access token found');
        }

        const response = await fetch(`https://api.smartgrader.in/questions/all?set_id=${id}`, {
          headers: {
            Accept: 'application/json',
            Token: token,
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setQuestionsData(data.data);
        console.log(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="overflow-y-auto"> {/* Add overflow-y-auto for vertical scrolling */}
    <h1 className="text-2xl font-bold mb-6">Questions for Set ID: {id}</h1>
    {error ? (
      <div className="text-red-500">{error}</div>
    ) : (
      <ul className="mx-4 whitespace-nowrap"> {/* Add whitespace-nowrap to prevent line breaks */}
        {questionsData.map((question) => (
          <li key={question.id} > {/* Set a fixed width */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
                <h5 className="text-lg font-semibold mb-2">{question.description}</h5>
                <p className="text-gray-600 mb-4">{question.text}</p>
                <p className="text-gray-600">Duration: {question.duration/6} sec</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
  

  );
};

export default QuestionPage;

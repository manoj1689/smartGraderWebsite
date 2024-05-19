import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuestionPage = () => {
  const { id } = useParams();
  const [questionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://34.131.249.177:8000/questions/all?set_id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setQuestionsData(data.data);
        console.log(data.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
        
      <h1>Questions for Set ID: {id}</h1>
      <ul className="flex flex-wrap">
        {questionsData.map((question) => (
          <li key={question.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
                <h5 className="text-lg font-semibold mb-2">{question.description}</h5>
                <p className="text-gray-600 mb-4">{question.text}</p>
                <p className="text-gray-600">Duration: {question.duration}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionPage;

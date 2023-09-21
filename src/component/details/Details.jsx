import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import HeroSection from '../home/HeroSection';
import DetailsContent from './DetailsContent';


export default function Details() {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://tap-web-1.herokuapp.com/topics/details/${id}`
        );
        const result = await response.json();

        setTopic(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id]);


  return (
    <>
      <HeroSection />

      {topic ? (
        <DetailsContent
          category={topic?.category}
          description={topic?.description}
          id={topic?.id}
          image={topic?.image}
          name={topic?.name}
          topic={topic?.topic}
          subtopics={topic?.subtopics}
          rating={topic?.rating}
         
        />
      ) : (
        '...loading'
      )}
    </>
  );
}

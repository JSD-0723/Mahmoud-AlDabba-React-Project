import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSection';
import Card from './Card';

export default function Home() {
const[topicsArr,setTopics]=useState(null)


useEffect(()=>{
    async function fetchData() {
    try {
        const response = await fetch('https://tap-web-1.herokuapp.com/topics/list');
        const topics = await response.json();
    
       setTopics(topics)
    
       
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
},[])

  return (
    <>
    <HeroSection/>
   
    <main className="content-body">
      <div className="content-container">
        <div className="search-box">
          <div className="search">
            <ion-icon name="search-outline" className="search-icon"></ion-icon>
            <input type="text" className="search-input" id="myText"  placeholder="Search the website ..." />
          </div>
          <div className="menu-list">
            <div className="sort">
              <label htmlFor="sort">Sort by</label>
              <select className="select" name="sort" id="sort">
                <option value="">Default</option>
                <option value="topic">Topic</option>
                <option value="name">Author Name</option>
               
              </select>
            </div>
            <div className="filter">
              <label htmlFor="filter">Filter by</label>
              <select className="select" name="filter" id="filter">
                <option value="">Default</option>
                <option value="Web Development Languages">
                  Web Development Languages</option>
                <option value="Frontend Frameworks and Libraries">Frontend Frameworks and Libraries</option>
                <option value="Backend Frameworks and Libraries">Backend Frameworks and Libraries</option>
                <option value="Databases and APIs">Databases and APIs</option>
                <option value="Web Development Concepts and Technologies">Web Development Concepts and Technologies</option>
              </select>
            </div>
          </div>
        </div>
        <h2 className="no-topic">'24' Web Topics Found</h2>
        <div className="cards">
       {topicsArr?.map((topic)=>{
        return <Card key={topic.id} id={topic.id} name={topic.name} image={topic.image} category={topic.category} topic={topic.topic}/>
       })}
         
      </div>
      </div>
    </main>
    </>
  )
}

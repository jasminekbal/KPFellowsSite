import React from 'react';
import { useState, } from 'react';


import './App.css';

function App() {

  const [promptNum, setPromptNum] = useState("1")

  return (
    <div className="App">
        <div className='App-navbar'>
          <div className='App-navlinks'>
          <a className='App-navlink' href='https://www.linkedin.com/in/jasminekbal/'> LinkedIn </a>
          
          <a className='App-navlink' href="https://www.linkedin.com/in/jasminekbal/"> Code for this Site</a>
          </div>
          
        </div>

        <div className='App-body'>
        <div className='App-words'>
          
        <h1 className="App-header">Hello <span role="img" aria-label="Wave">👋</span>, I’m Jasmine</h1>
        <p className="App-subheading"> I’m a software developer fascinated by the intersection of technology, finance and entrepreneurship.   </p>
        

        <div className='App-promptInfo'>
          <div className='App-infoTitleWrapper'>
          <div className='App-infoTitle'>
          Here are my responses to the personal statements for the KP fellows program:
          </div>
          <div className='App-promptLinks'>
          <span  className='App-promptLink' onClick={(e)=> setPromptNum("1")}>Problem Statement #1</span> | <span  className='App-promptLink' onClick={(e)=> setPromptNum("2")}>Problem Statement #2</span>
          </div>
          </div>
          

        { promptNum === "1" &&
          <div className='App-prompt'>
            <div className='App-promptTitle'>What impact do you want to have on the world and why?</div>
            <div className='App-promptText'> There's no doubt that pursuing a career in technology has been an empowering experience. I’ve learned how to take a problem, analyze it, design solutions and work towards a solution that can have an impact on the world around me. I love immersing myself in building, whether it be feature scoping, design meetings or the technical implementation. I am grateful to the many communities that provided spaces for me to grow in tech and spark my curiosity to explore further.  </div>
            <div className='App-promptText'> Being an executive for Waterloo Women in Computer Science I’ve witnessed the importance of having mentors and seeing others similar to you succeed in tech. Participating in organizations such as UW Start Ups and Socratica - a coworking community- I was exposed to the world of venture capital, start ups and it sparked my interest in entrepreneurship and introduced me to additional possibilities and applications of my technical skills. After this I dove into understanding venture capital by participating in the public RippleX Fellowship and researching startups. </div>
            <div className='App-promptText'> I want to help build more such communities that expose others to a variety of opportunities and allow like minded individuals to meet one another and inspire each other to reach their goals. I’ve seen first hand how these communities have empowered me to build and work towards solving interesting problems and would love to provide others with these opportunities so they have the resources to reach their full potential.</div>
          </div>}

        { promptNum === "2" && 
          <div className='App-prompt'>
            <div className='App-promptTitle'>Describe your most meaningful experience(s) and why they matter to you.</div>
            <div className='App-promptText'> My most meaningful experiences include my first technical internship at a 50 person textiles startup, Sheertex, and co-founding TechNova, an organization that aims to promote gender equity in tech. </div>
            <div className='App-promptText'> During my internship at Sheertex I was given the same autonomy and ownership as a fulltime employee. After receiving a project, I had the freedom to make technical design decisions and speak to designers, the product manager and other stakeholders to further understand and define the scope of the project. Not only was I able to grow my technical skills, I also participated in the entire software development life cycle and witnessed the development of a feature from ideation through to deployment. Comparing this experience to later internships, I’ve learned that I love the ambition, autonomy and passion of start-up environments.</div>
            <div className='App-promptText'> Co-founding TechNova taught me how to build an organization from the ground up, how to hire and I witnessed first hand the impact of a driven team. I lead the engineering, design and marketing teams in planning the inaugural event - Hack With Us - a Hackathon for 500+ attendees. Coordinating logistics at such a scale, I learned how to design an event with the user in mind, communicate and negotiate with stakeholders and lead cross functional teams. </div>
            <div className='App-promptText'> These experiences empowered me to continue learning and growing my skills, and sparked my interest in startups, entrepreneurship and in building communities. I’ve been inspired to use the intersection between my interests and technical background to find creative solutions to problems around me. </div>
          </div>}
        </div> 
        </div>
        </div>
        
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./styles.css";

const courseDB = {
  Psychology: [
    {
      name: "Introduction to Psychology",
      link: "https://www.youtube.com/playlist?list=PL6A08EB4EEFF3E91F",
      university: "Yale"
    },
    {
      name: "Personality and its transformation",
      link:
        "https://www.youtube.com/playlist?list=PL22J3VaeABQApSdW8X71Ihe34eKN6XhCi",
      university: "University of Toronto"
    }
  ],
  Philosophy: [
    {
      name: "Philosophy and the Science of Human Nature",
      link: "https://www.youtube.com/playlist?list=PL3F6BC200B29300844",
      university: "Yale"
    }
  ],
  Physics: [
    {
      name:
        "Fundamentals of Physics: Mechanics, Relativity, and Thermodynamics",
      link: "https://youtube.com/playlist?list=PLFE3074A4CB751B2B",
      university: "Yale"
    },
    {
      name:
        "Fundamentals of Physics: Mechanics, Relativity, and Thermodynamics ||",
      link: "https://youtube.com/playlist?list=PLD07B2225BB40E582",
      university: "Yale"
    }
  ],
  Biology: [
    {
      name: "Human Behavioural Biology",
      link: "https://youtube.com/playlist?list=PL848F2368C90DDC3D",
      university: "Stanford"
    },
    {
      name: "Introductory Biology, MIT Fall 2018",
      link:
        "https://www.youtube.com/playlist?list=PLUl4u3cNGP63LmSVIVzy584-ZbjbJ-Y63",
      university: "MIT"
    }
  ],
  Startup: [
    {
      name: "Y Combinator - How to Start a Startup",
      link:
        "https://youtube.com/playlist?list=PL11qn6zM2Y3bMZdChxEqHKaCaKUjwItGLL",
      university: "Y Combinator"
    }
  ]
};
var courseList = Object.keys(courseDB);

export default function App() {
  const [selectedTopic, setTopic] = useState("Psychology");

  function clickHandler(topic) {
    console.log(topic);
    setTopic(topic);
  }
  return (
    <div className="App">
      <h2>Learn from top Universities for free</h2>
      <p>
        <strong>Pick your topic of Intrest</strong>
      </p>
      <div className="topics">
        {courseList.map((topic, index) => {
          return (
            <button key={index} onClick={() => clickHandler(topic)}>
              {topic}
            </button>
          );
        })}
      </div>
      <hr></hr>
      <div className="list">
        <ul>
          {courseDB[selectedTopic].map((course, index) => {
            return (
              <li key={index}>
                {" "}
                <p>
                  <a href={course.link}>{course.name}</a>{" "}
                </p>
                <p className="university">University: {course.university}</p>
              </li>
            );
          })}
        </ul>
      </div>
      Connect on Twitter -{" "}
      <a className="twitter" href="https://twitter.com/whysokara">
        whysokara
      </a>
    </div>
  );
}

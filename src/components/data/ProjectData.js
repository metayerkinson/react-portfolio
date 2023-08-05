// Imports the images for each project

import imgSocialNetworkAPI from "../../images/social-network-api.jpg";
import imgECommerceBackend from "../../images/e-commerce-back-end.jpg";
import imgEmployeeTracker from "../../images/employee-tracker.jpg";
import imgWeatherDashboard from "../../images/weather-dashboard.jpg";
import imgNoteTaker from "../../images/note-taker.jpg";
import imgReadmeGenerator from "../../images/readme-generator.jpg";
import imgWorkDayScheduler from "../../images/work-day-scheduler.jpg";
import imgPasswordGenerator from "../../images/password-generator.jpg";
import imgBookSearchEngine from "../../images/book-search-engine.jpg";
// Export and array of project objects
export const projects = [
  {
    title: "Book Search Engine",
    url: "https://dpk5e7-book-search-engine.herokuapp.com/",
    image: imgBookSearchEngine,
    description:
      "Challenge #21 for the University of Central Florida Coding Bootcamp 2023. The purpose of this challenge is to build a MERN stack application.",
    technologies: "MongoDB, Express, React, Node, Apollo Server, & GraphQL",
    GitHubRepo: "https://github.com/metayerkinson/mern-book-search-engine/",
  },
  {
    title: "Social Network API",
    url: "https://github.com/metayerkinson/social-network-api",
    image: imgSocialNetworkAPI,
    description:
      "Challenge #18 for the University of Central Florida Coding Bootcamp 2023. The purpose of this challenge is to understand the unstructured nature of NoSQL by building an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    technologies: "Node.js, Express.js, MongoDB, & Mongoose",
    GitHubRepo: "https://github.com/metayerkinson/nosql-social-network-app",
  },

  {
    title: "e-Commerce Back End",
    url: "https://github.com/metayerkinson/e-commerce-back-end",
    image: imgECommerceBackend,
    description:
      "Challenge #13 for the University of Central Florida Coding Bootcamp 2023. The purpose of this challenge is to build a back end for a generic e-commerce site using one-to-many and many-to-many database relationships.",
    technologies: "Node.js, Express.js, MySQL, & Sequelize",
    GitHubRepo: "https://github.com/metayerkinson/ecommerce-backend",
  },
  {
    title: "Employee Tracker",
    url: "https://github.com/metayerkinson/employee-tracker",
    image: imgEmployeeTracker,
    description:
      "Challenge #12 for the University of Central Florida Coding Bootcamp 2023. The purpose of this challenge is to build a command-line application to manage a company's employee database.",
    technologies: "Node.js, Inquirer v8.2.4, dotenv, & MySQL",
    GitHubRepo: "https://github.com/metayerkinson/employee-tracker",
  },
  {
    title: "Note Taker",
    url: "https://github.com/metayerkinson/note-taker",
    image: imgNoteTaker,
    description:
      "Challenge #11 for the University of Central Florida Coding Bootcamp 2023. The purpose of this challenge is to build a note taker application to save and retreive data from a JSON file.",
    technologies: "Node.js, Express.js",
    GitHubRepo: "https://github.com/metayerkinson/note-taker",
  },
  {
    title: "Readme Generator",
    url: "https://github.com/metayerkinson/readme-generator/",
    image: imgReadmeGenerator,
    description:
      "Challenge #9 for the University of Central Florida Coding Bootcamp 2023. The purpose of this challenge is to build a GitHub README generator.",
    technologies: "Node.js & Inquirer v8.2.4",
    GitHubRepo: "https://github.com/metayerkinson/readme-generator/",
  },
  {
    title: "Weather Dashboard",
    url: "https://github.com/metayerkinson/weather-dashboard",
    image: imgWeatherDashboard,
    description:
      "Challenge #6 for the University of Central Florida Coding Bootcamp 2023. The purpose of this challenge is to build a weather dashboard that calls the OpenWeather API.",
    technologies: "HTML, CSS, Moment.js, Bootstrap 5.2, & OpenWeather API",
    GitHubRepo: "https://github.com/metayerkinson/weather-dashboard",
  },
  {
    title: "Work Day Scheduler",
    url: "https://github.com/metayerkinson/work-day-scheduler",
    image: imgWorkDayScheduler,
    description:
      "Challenge #5 for the University of Central Florida Coding Bootcamp 2023. The purpose of this challenge is to build a work day scheduler.",
    technologies: "HTML, CSS, jQuery, Moment.js & Bootstrap 5.2",
    GitHubRepo: "https://github.com/metayerkinson/work-day-scheduler",
  },

  {
    title: "Password Generator",
    url: "https://github.com/metayerkinson/password-generator",
    image: imgPasswordGenerator,
    description:
      "Challenge #3 for the University of Central Florida Coding Bootcamp 2023. The purpose of this challenge is to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected.",
    technologies: "Javascript",
    GitHubRepo: "https://github.com/metayerkinson/password-generator",
  },
];

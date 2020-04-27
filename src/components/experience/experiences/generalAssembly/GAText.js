import BoredGames from 'static/GAProjects/BoredGames.png';
import LostThePlot from 'static/GAProjects/LostThePlot.png';
import PacMan from 'static/GAProjects/PacMan.png';
import YesChef from 'static/GAProjects/YesChef.png';

export const GAMainText = {
  punctuation: {
    fullStop: '.'
  },
  title: {
    study: 'Studying at ',
    london: 'General Assembly'
  },
  main: {
    role: {
      role: 'Role: ',
      student: 'Software Engineering Student.'
    },
    date: {
      dates: 'Dates: ',
      june: 'June 2019 - September 2019. 4 months.'
    },
    body: {
      summer: 'Spent a fantastic summer learning the ',
      fundamentals: 'fundamentals ',
      group:
        'of being a software enginer along with a fantastic group of 20 Students.',
      basics: 'We learned the basics of HTML, CSS and ',
      javaScript: 'JavaScript ',
      frameworks: 'along with some fantatic and higly used framework such as ',
      react: 'React & Express',
      four:
        ' We used these skills we learned during the course to make 4 projects that show cased our work. All of which can be seen in more detail on my GitHub.'
    }
  },
  repo: 'See project repo & website',
  fourProjects: 'My four projects',
  rightArrow: '→',
  leftArrow: '←'
};

export const GAProjectText = {
  titles: {
    about: 'About',
    tech: 'Technologies'
  },
  projectInfoArray: [
    {
      title: 'Lost The Plot',
      about:
        'The idea for this app was for users to share space in their garden for other users to grow food in, joining the sustainable food movement growing in London right now. This was my first group project extensively using Git to collaborate on the project. Most of my work was on the backend, searching using React-mapbox, styling and the homepage',
      technologies:
        'JavaScript, React, Express, MongoDB, Git, react-mapbox, Mocha, Chai & SuperTest.',
      image: LostThePlot,
      gitHubLink: 'https://github.com/FreddieHoy/GA-P3-Lost-the-plot',
      index: 0
    },
    {
      title: 'YesChef',
      about:
        'The idea for this App was to allow users to share their home-cooked meals with one another by posting an image with a description and allowing other users to comment. The user can see their profile page and a news feed.',
      technologies:
        'JavaScript, Python, React, Django, SQL, Yarn, Heroku, Node.',
      image: YesChef,
      gitHubLink: 'https://github.com/FreddieHoy/GA-P4-YesChef',
      index: 1
    },
    {
      title: 'PacMan',
      about:
        'This was my first significant coding project. HTML, CSS & JS were used to create the game. The game was built starting with a basic grid and developed using extensive game logic and interaction with DOM elements.',
      technologies: 'JavaScript, HTML & CSS',
      image: PacMan,
      gitHubLink: 'https://github.com/FreddieHoy/GA-P1-PacMan',
      index: 2
    },
    {
      title: 'Bored Games',
      about:
        'The project was focused on consuming an API and using RESTful routes. We consumed a board game API with very useful data allowing us to display a search page for board games which by the number of players, genre, length of time, game mechanics (ie. dice), price and more.',
      technologies: 'JavaScript, React, API, RESTful Routes, Insomnia, CRUD',
      image: BoredGames,
      gitHubLink: 'https://github.com/FreddieHoy/GA-P2-BoredGames',
      index: 3
    }
  ]
};

export const TechSheetText = {
  title: 'Tech Sheet',
  javaScript: 'JavaScript',
  python: 'Python',
  react: 'React',
  git: 'Git / GitHub',
  node: 'Node.js',
  express: 'Express',
  restful: 'RESTful routes',
  mongoDB: 'MongoDB',
  sql: 'SQL DB',
  npm: 'npm & yarn',
  chrome: 'Browsers',
  atom: 'Atom'
};

# React Portfolio

This site is to showcase my experience and my ability to potential employers. I am looking to get a job as a junior front-end software engineer.

This site included pages about my experience at Lyvly my first job and GA the engineering bootcamp I attended in summer 2019, and a page about me and interests. It also includes a link to a game I created - Unbeatable Tic-tac-toe.

## Technologies used

- ECMA 6 (JavaScript)
- React
- create-react-app
- styled-components
- Jest

### Why I used create-react-app.

- Initially I was focused on Design and what my new site might look like. I Used CRA to get started quickly so I could try things out.
- Using webpack and Babel under the hood - it quickly allows me to get started on my localhost with hot reload.

### Why I did not use Next.js to SSR.

Next.js allows the JS to be run on the server side so when the site is called it can respond quickly with just HTML.

- This is very beneficial for clients that have poor connection, especially on mobile.
- The site can also be indexed easily by all browsers allowing great SEO. Only Google is able to run JS and then index a website, but with limited capabilities.

Although these are great benefits of using Next.js - My site will mainly be seen by clients with a strong internet connection and who I have shared the site with. I therefore decided that the added layer of complexity was not necessary.

# Other points

- Styled components
- File structure - config
- Testing with Jest
- Eslint and prettier.

# Biggest challenges

- Design and layout. Figuring out what I wanted to make. I would start creating a page and the responsiveness would never look right because I realized I didn't really know how I wanted it to look.

# Main learnings

- Design. Research design.
- Eslint and prettier.
- Deploying with an AWS Lambda.

# Future ideas.

- Game page using state to create a leaderboard for my PacMan Game. (Would include creating a backend)
- Testing with react-testing-library.
- Testing with puppeteer.

---

# Create React App Information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

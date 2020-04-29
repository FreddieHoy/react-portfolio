# React Portfolio

Check it out: [freddiehoy.com](https://freddiehoy.com)

This site is to showcase my experience and my ability to potential employers. I am looking for a new job as a junior front-end software engineer.

This site included pages about my experience at Lyvly my first job and GA the engineering bootcamp I attended in summer 2019, and a page about me and interests. It also includes a link to a game I created - Unbeatable Tic-tac-toe as well as to my LinkedIn Page and Git hub repos for each project at GA. Oh and a link to this cool cycle trip I did once.

### Technologies used.

- ECMA 6 (JavaScript)
- React
- create-react-app
- styled-components
- Jest
- Enzyme
- HTML 5 & CSS

### Pages

- Home page
- About page
- Experience page
- Lyvly experience page
- GA experience page

# Some points on my approach.

## Why I used create-react-app.

When starting the portfolio I was focused on design, what my new site might look like and how a user would interact with it. So I decided to use create-react-app. These were some of the benefits:

- It had a built in template for setting up React.
- Using webpack and Babel under the hood - it quickly allows me to work with a hot reload.
- It's a popular tool to use and so many online tutorials use it for different aspects of the project.
- It came in handy further down the line with its build script, making deployment much easier.

## Why I considered using Next.js for Server Side Rendering.

Having used Next.js in my previous job I considered it for my site by weight up the benefits.

- Allows the JS to be run on the server side so when the site is called it can respond quickly with just HTML.
- This is very beneficial for clients that have poor connection, especially on mobile.
- The site can also be indexed easily by all browsers allowing great SEO. Only Google is able to run JS and then index a website, but with limited capabilities.

Although these are great benefits my site will mainly be seen by clients with a strong internet connection and who I have shared the site with. I therefore decided that the added layer of complexity was not necessary.

## My Design Approach.

In order to be a well rounded developer I wanted to also consider and understand basic web design approach. This lead me to reading more about the **Mobile First** rule and **Progressive Advancement**.

I learned that the idea was that by starting with a more limited screen size and capability you can work out what are the core features the app needs. Then as you gain more screen space and the cursor, you can start adding more features to the design. I therefore did just this and started with building the mobile version first before altering it to be responsive to larger views, adding hover effects etc.

The biggest problem I had with design is that I didn't really know what I wanted to build. Often I tried building something without knowing exactly how I wanted it to work. I would then spend a long time playing around and wasting time.

To solve this I decided that I would research how other people had designed something, for example the home page. I looked up how others had designed their home pages, see what I liked and what I didn't then figure out exactly how I would want mine to look before starting. This method proved to be much more efficient.

## File Structure

From the start of the project I create a config folder which would allow me to keep some things uniform across the project including:

- Font styling
- Page spacing
- Responsiveness Breakpoints
- Colors
- Key frames for animations

I also decided that each page should have text file for a couple of reasons.

- It allowed for the components to have more readable code.
- It removed complicated Linting errors.
- It placed all the text in one editable.

## Styling Methods.

Often in the past I have used a CSS frame work / component library such as Bulma, Material-ui, bootstrap etc.

I did not use one of these in this project for a few reasons:

- I did not think I would use many of the pre-styled components.
- I wanted to create all of the components myself with full control and understanding of how they were constructed.
- I wanted to practice my ability to make fully responsive components.

In the end I completed the styling using the JS Styled-components package however quite time consuming, especially when it came to building for complete responsiveness.

## Front-end Testing.

After doing a lot of front-end testing at Lyvly I hoped to use this project to showcase my ability.

I created some very simple snapshots tests for all the content on the About page, however I did not continue this testing across the entire code base for two reasons.

1. The site is very static and is not interacting with any data that may cause incorrect rendering.
2. I'm the only person working on this repo. So I do not need to worry about someone else breaking so of my code.

I was hoping to preform other tests but currently my site lacks any testable functionality. I will therefore look to showcase my testing knowledge after I have built some more functionality or on a different app.

## Deployment & AWS

One of my main aims for creating this project was to deploy the site using AWS. With AWS being so successful recently I know that the earlier I can learn how to work with it the better.

Having completed a lot of exciting work at Lyvly using AWS. The next step was to deploy a simple static website which I had made from scratch.

After completing this [Serverless-stack](https://serverless-stack.com/) tutorial online. I was able to host my website in an AWS S3 Bucket. Giving it the domain name [freddiehoy.com](https://freddiehoy.com) and redirect from [www.freddiehoy.com](https://www.freddiehoy.com). I was also able to attain an AWS certificate and https status.

The project is deployed and updated in 3 stages:

1. Using the **react-script build** this nice generates a build folder.
2. Use **aws s3 sync build** command to upload the build into an S3 Bucket.
3. Finally **aws cloudfront** command to clear all AWS cloud front invalidations.

Using the package.json these 3 commands are packaged into a single command:

> npm run build

One issue with the way that I have deployed this is that there is no dev environment to deploy to first. So it is possible for me to deploy bugs. However given the nature of the project and the low traffic deploying bugs can be fixed quickly and with no impact on the few users.

# Biggest challenges.

- I wasted time trying to build something without knowing how I wanted it to look.
- I struggled sometimes with making the site responsive. A couple of time I had to re-think the layout of the project and how the pages were constructed.
- Learning to use AWS was tricky and the Serverless AWS full-stack tutorial took 3/4 days.

# What I've learned.

- If designing something from scratch research and work out the design before building it.
- How to host a static website using an AWS Bucket.
- How to create a website domain using AWS Route 53 & CloudFront and how to gain https status using AWS Certificate Manager.
- How to create simple and subtle CSS animations to which really enhance the impact of the site on the user.
- I learned a great deal on how to set up an effective workspace using Eslint and Prettier just through organic need for quick code formatting.
- I spent quite some time learning more about CSS animations in order to raise the experience of the user.

# Future ideas.

My site lacks functionality to showcase some of my skills with state and testing. In the future I could:

- Add Game page creating a leaderboard for my PacMan Game and tic-tac-toe.
- Testing this game page with react-testing-library and integration tests using puppeteer.
- Create full stack app using AWS apart from the tutorial.

Ideas for beyond this app.

- Create a blog including user registration and login to showcase state ability.
- Remake GA projects to use hooks. Remake using AWS products.

---

Thanks for having look! :D

---

# Contact information

Freddie Hoy

Email: freddiehoy0@gmail.com

[Portfolio](https://freddiehoy.github.io/) | [LinkedIn](https://www.linkedin.com/in/freddie-hoy/) |
[GitHub](https://github.com/FreddieHoy?tab=repositories)

---

# Appendix

## 1. Create React App Information.

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

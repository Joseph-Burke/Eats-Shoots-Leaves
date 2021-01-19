# Eats, Shoots & Leaves

This project is the capstone project for Microverse's React & Redux module.

The website is a catalogue of vegan recipes, provided by the [Edamam Recipe Search API](https://developer.edamam.com/edamam-docs-recipe-api).

![screenshot](./screenshot.png)

The website consists of two pages:

1) The main page, where the user may view images and titles for all the recipes and apply filters to the list of recipes shown.

2) The recipe page, which can be accessed by clicking on any of the recipe tiles on the main page. Here, the user can view more details about the recipe and follow a link to the original recipe's website.

## Live Demo

To jump right into the project, visit the [Live Demo](https://eats-shoots-leaves.herokuapp.com/), deployed on Heroku.

## Built With

- **[React](https://reactjs.org/)** - Bootstrapped using the [**create-react-app**](https://www.npmjs.com/package/create-react-app) package)
- **[Redux](https://redux.js.org/)** - Redux is used for storing state. The `react-redux` package was used to enable React bindings for Redux.
- **[React Router](https://reactrouter.com/)** - the `react-router-dom` package was used to allow navigation between pages.
- **[Bootstrap]** and **[Font Awesome]** were both used, via their npm packages.
- Kent Dodds' **[Testing Library](https://testing-library.com/)** - the `/jest-dom` and `/react` APIs were used for testing, on top of Jest, which is `create-react-app`'s default testing suite.
- **ESLint** and **Stylelint** for linting JavaScript and CSS respectively.

## Local Setup

### Prerequisites

_**node.js is a pre-requisite of this project.**_

Don't have node.js? Choose a download method [here](https://nodejs.org/en/download/).

## Setup Instructions

1. Open a Terminal and navigate to the location in your system where you would like to download the project. **New to Terminal? [Learn here](https://www.freecodecamp.org/news/conquering-the-command-line-f85f5e46c07c/).**

2. Enter the following line of code to clone this repository:

`git clone git@github.com:Joseph-Burke/Eats-Shoots-Leaves.git`

3. Now that the repository has been cloned, navigate inside it using `cd Eats-Shoots-Leaves`.

4. The project's dependencies are managed by npm. The details of this project's dependencies can be found in `package.json`. To install them, enter the following line of code in the Terminal.

`npm install`

5. Congratulations! All dependencies have now been installed. The source code may now be compiled. Simply enter the pre-existing script below to compile the code and view the project: 

`npm start`

7. Enjoy!

> #### Important note on environment variables: 

> This project makes calls to the Edamam Recipe Search API using its own APP_ID and APP_KEY variables, which are protected for security reasons.

> For the project to work locally, the user must first sign up to the Edamam API to obtain their own ID and KEY. [dotenv] is listed as a project dependency, so the user then just needs to create a `.env` file in the root directory of the cloned repository, where they may store the two necessary variables: `REACT_APP_ID` and `REACT_APP_KEY`. Read about how to use the `dotenv` package [here](https://www.npmjs.com/package/dotenv).

## Author

👤 **Joe "Employable" Burke**

- Github: [@Joseph-Burke](https://github.com/Joseph-Burke)
- Twitter: [@__joeburke](https://twitter.com/__joeburke)
- Linkedin: [Joseph Burke](https://www.linkedin.com/in/--joeburke/)

## 🤝 Contributing

Contributions, issues and feature requests are always welcome!

Drop me a line through any of the channels listed above or head directly to the [issues page](issues/).

## Show your support

Hey! Give this project a ⭐️! It costs nothing :)

## Acknowledgments

- This project was built as part of the Microverse Web Development course, which you can learn more about [here](https://www.microverse.org/).

## 📝 License

This project is [MIT](lic.url) licensed.

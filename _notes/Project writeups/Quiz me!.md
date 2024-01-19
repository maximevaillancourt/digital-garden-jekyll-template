---
title: "Quiz me!: Building a trivia app with React and OpenTriviaDB"
---
Hello world! 👋
Today I want to tell you about the React-Redux app I built recently using `create-react-app`. The app is called **Quiz Me!** and it cost me $0.00 and a few hours to develop.

## 1. Defining my goals for the project
I wanted to create an interactive app using React-Redux that I could add to my portfolio to demonstrate my understanding of the tech, which I have been learning for the past several months. The key technologies in play here are [React](https://react.dev/) and [Redux](https://redux.js.org/). I also used [Opentdb API](https://opentdb.com/) for the data, [MaterialUI](https://mui.com/material-ui/) for some interface components and [he](https://www.npmjs.com/package/he) for HTML encoding/decoding.

## 2. Wireframe the project
After exploring the Opentdb API online to see what data would be available, I wireframed the project with a quick sketch, which was enough to have an idea of what components and slices I would need to set up.
## 3. Set up the development environment
I used [`npm`](https://www.npmjs.com/) to create the React app (for more info about `create-react-app`, see [the docs](https://create-react-app.dev/docs/getting-started)). With my project created, I installed my dependencies with `npm` (React, Redux, MaterialUI, and he, as explained in #1). After running `npm start`, I was able to see the changes I was making live, thanks to the webpack hot loader that comes pre-configured when you create an app this way.

## 4. Setting up the Redux store and slices
Since I was using Redux for this project, a certain project structure is used which streamlines state management by avoiding prop threading, among other benefits. To start, I created a `redux` folder in my project directory. Inside the new folder, made a `store.js` file and a `slices` folder. I made a file for each of the two slices I used for this project — `categoriesSlice` and `quizSlice`. In each file, I imported and used `createSlice` from redux toolkit. Using the categories slice as an example, the basic structure of creating the slice looks like so:
``` jsx
import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    selectedCategory: null,
    loading: false,
    error: null,
  },
  reducers: {...},
});

export const {...} = categoriesSlice.actions; // export each of reducers created above

export default categoriesSlice.reducer;
```
The reducers I defined included `setCategories`, `selectCategory`, `fetchCategoriesPending`, `fetchCategoriesSuccess`, and `fetchCategoriesFailure`. Notice I defined three `fetchCategories` functions, one for each possible action state. This is because fetchCategories will be an asynchronous request to the Opentdb API, so I need an action for each state.
Next it was time to pass the slice reducers to the store in `store.js` like so:
``` jsx
import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer  from "./slices/categoriesSlice";
import quizReducer from "./slices/quizSlice";

const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    quiz: quizReducer,
  },
});

export default store;
```
Then finally, I wrapped the `<App />` with a `<Provider />`, passing the newly-created store as an argument:
``` jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import  store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```


## 5. Developing the basic interface
Using the wireframe as a guide, I decided to break the interface into 5 components:
- Header
- Categories Navbar (left-aligned)
- Quiz (right-aligned)
	- ActiveQuestion (child component of Quiz)
- Footer
I put these components in their own `components` folder and created a file for each one. Each file defines and exports a `const` callback which returns a `<div />` containing the relevant information. A main benefit of using Redux is that state variables can easily be accessed with the `useSelector` hook, which takes a callback and extracts the relevant data from `state`. Using this feature of React-Redux, I was able to add variables and data to my component, such as `selectedAnswer`, `isAnswerCorrect`, `questions`, and `activeQuestion`. Once I integrate the Opentdb API, these variables will be crucial to controlling the user experience. After some CSS manipulation, I was able to get an interface that resembled the wireframe sketch I started with and it was time for the next step.

## 6. API Integration
The Opentdb API is easy to use and doesn't require an API key. Thus, I was able to quickly spin up an `opentdb.js` file with two functions, `fetchCategories` (to get the data that should go in the navbar on the left) and `fetchQuestions` (to get new quiz data) which each used `fetch` to send a GET request to the proper URL.
I then imported these questions into the `categoriesSlice` and `quizSlice`, respectively, and created and exported a [[thunk]] in each of the files. Here is the `fetchAvailableCategories` thunk, for example:
``` jsx
export const fetchAvailableCategories = () => async (dispatch) => {
  dispatch(fetchCategoriesPending());
  try {
    const categories = await fetchCategories();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};
```

## 7. Tying things together and styling the app
With all the basic functionalities defined, it was now time to tie everything together. After changing a few things in my `Navbar` and `Quiz` components, my previously-created interface actually worked to change the underlying state. The next step was improving the styling of the app.
At this point, I changed my buttons to MUI `<Button />`s for a nicer look. I also added a dark-mode toggle to improve the app just a little bit. Finally, I added correct and incorrect response messages using conditional rendering.

## 8. Deploying the app with Github pages
I followed the instructions on [this repo](https://github.com/gitname/react-gh-pages) to deploy my app with Github pages.

## Conclusion
Thank you for reading and I hope that you learned something or at least found it interesting! If you're interested in checking out my project, you can find a live demo hosted by Github pages [here](https://ejaynew.github.io/quiz-me/).

_Post written with assistance from GPT-3.5._

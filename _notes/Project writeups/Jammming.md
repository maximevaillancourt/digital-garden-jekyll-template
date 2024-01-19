---
title: "Jammming: Building a playlist creation app using React and the Spotify API"
---
Hi friends! 👋 Today, I'm excited to share with you one of my recent projects -- a Spotify playlist creation app built using [[React.js]]. In this post, I'll walk you through the development process, the challenges I faced, and the valuable lessons I learned along the way.

**Introduction**

I embarked on this project while following a full-stack development career path on Codecademy. As part of the course, I had the opportunity to work on off-platform projects, and this Spotify playlist app was one of them.

**Tech Stack**

Before we dive in, let's quickly discuss the technologies I utilized for this project:
- **React:** The core framework for building the user interface and managing component interactions.
- **React hooks:** Used to effectively manage state in functional components.
- **Spotify API:** Enabled users to search for songs and save playlists to their Spotify accounts.
- **CSS3:** Utilized for styling the app and ensuring a clean and intuitive user experience.

**Development Process**

1. **Planning**

The planning process was streamlined since Codecademy provided a Kanban board with task breakdowns and descriptions of the required components and functionalities. My focus here was on designing an aesthetically pleasing app with a clean and appealing look.

{:start="2"}
2. **Setting up the Project**

To set up the project, I used `create-react-app`, which provided a well-organized structure, allowing me to concentrate on writing the application logic.

{:start="3"}
3. **Building the Components**

The app consists of five main components: **SearchBar**, **Search Results**, **Playlist**, **TrackList**, and **Track**. Additionally, the app features a `Save to Spotify` button and a `Search` button. During this stage, I used mock data to simplify the process.

{:start="4"}
4. **Implementing the `Save` and `Search` Functionalities**

The core functionalities of the app were the `Save` and `Search` features. Getting them right was crucial. I connected with the Spotify API at this point to make these functions work with real data.

{:start="5"}
5. **Styling with CSS**

Styling was an essential aspect of the app. I aimed for a simple color scheme that would be accessible to all users, including those with colorblindness. I ensured a responsive design using [breakpoints and media queries](https://rad-starlight-37304d.netlify.app/breakpoints-and-media-queries), making the app look great on all devices.

**Challenges and Learnings**
During the development process, I encountered a few challenges:
1. **Spotify API**

Working with the Spotify API presented some bugs that required debugging. I noted the solutions to these issues in my [working with Spotify's web API](https://rad-starlight-37304d.netlify.app/working-with-spotify-s-web-api) notes.

{:start="2"}
2. **Styling the App**

Initially, styling the app was straightforward. However, when I tested it on different window sizes using Chrome developer tools, I noticed unintended layout changes. To address this, I incorporated [breakpoints and media queries](https://rad-starlight-37304d.netlify.app/breakpoints-and-media-queries) for a responsive design.

{:start="3"}
3. **Refactoring code**

At first, I used Promise chains in the API requests to handle asynchronous operations. While it worked, the code started to become less maintainable as the project grew. To improve the code's readability and maintainability, I refactored the API request logic using the `async...await` syntax. This change not only made the code cleaner but also made it easier to handle errors and asynchronous operations more effectively.

**Conclusion**

Creating this Spotify playlist app was a rewarding learning experience. It solidified my knowledge of React and its ecosystem, while also allowing me to express some creativity through the colors and layout.

If you're interested in checking out the app, you can find it live [here](https://storied-cuchufli-6f6a35.netlify.app/). The complete source code is available on [GitHub](https://github.com/ejaynew/jammming).

I hope you enjoyed reading about my journey in creating this project! Feel free to reach out to me with any questions or feedback. Happy coding! 😃

_Post written with assistance from GPT-3.5._
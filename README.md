# Top subreddit Post Tracker

## About This Project

This is a small frontend project that displays up to 10 top posts from [reddit](https://reddit.com) subreddits.

It was built using [React](https://reactjs.org), [Redux](https://redux.js.org), [Redux Thunk](https://github.com/reduxjs/redux-thunk), [Framer Motion](https://www.framer.com/motion), [Tailwind CSS](https://tailwindcss.com), and [Create React App](https://create-react-app.dev).

## Trying It Out

You can clone the repository and run the [`package.json`](./package.json) start script:

`yarn start` or `npm start`

You can also simply visit the GitHub page here: https://mattlean.github.io/reddit-frontend

Typing in a subreddit name into the search field and hitting the "Add Post" button will send a request for the recent top posts in that subreddit. The app will then attempt to find the most recent top post that isn't pinned. If it cannot find a post that isn't pinned, it will simply return the top pinned post. If it cannot find any post, it will return an error.

The top posts will always be sorted by highest score first.

If you add a new top post, but you have already reached the max capacity of 10 posts, the oldest post will be replaced.

The app will periodically save your progress in local storage so your posts can persist across sessions.

## License

This project is licensed with an [MIT license](https://github.com/mattlean/reddit-frontend/blob/master/LICENSE).

All images were taken from the [archived reddit GitHub repository](https://github.com/reddit-archive/reddit).

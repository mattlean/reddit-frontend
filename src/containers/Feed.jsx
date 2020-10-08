import React from 'react'
import { useSelector } from 'react-redux'
import upvote from '../assets/aupmod.gif'

/**
 * Feed of top subreddit posts
 */
const Feed = () => {
  const feed = useSelector((state) => state.topPosts.feed)

  let content
  if (feed.length > 0) {
    content = (
      <ul className="mt-16">
        {feed.map((p) => (
          <li
            key={p.id}
            className="bg-white hover:bg-indigo-200 mb-4 py-2 px-4 rounded"
          >
            <a href={p.link} rel="noopener noreferrer" target="_blank">
              <h1 className="font-bold text-lg">{p.title}</h1>
              <div className="flex flex-row justify-between">
                <p className="mt-2 text-gray-700">{`r/${p.subreddit}`}</p>
                <p className="flex flex-row items-center mt-2">
                  <img src={upvote} alt="upvote" className="h-4 mr-1" />
                  <span className="font-bold text-orange-500">{p.score}</span>
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    )
  } else {
    content = (
      <p className="italic mt-64 text-center text-gray-500">
        Don't let your memes just be dreams. Add a top post now.
      </p>
    )
  }

  return content
}

export default Feed

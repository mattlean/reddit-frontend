import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useSelector } from 'react-redux'
import TopPost from '../components/TopPost'

/**
 * Feed of top subreddit posts
 */
const Feed = () => {
  const feed = useSelector((state) => state.topPosts.feed)

  let content
  if (feed.length > 0) {
    content = (
      <ul className="mt-16">
        <AnimatePresence>
          {feed.map((p) => (
            <TopPost key={p.id} data={p} />
          ))}
        </AnimatePresence>
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

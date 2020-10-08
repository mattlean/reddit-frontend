import React from 'react'
import { motion } from 'framer-motion'
import { postVariants } from '../variants'
import upvote from '../assets/aupmod.gif'

/**
 * Item for top post in feed
 * @param {Object} data Top post data
 */
const TopPost = ({ data }) => (
  <motion.li
    animate="visible"
    exit="hidden"
    initial="initial"
    variants={postVariants}
    whileHover="hover"
    className="bg-white mb-4 py-2 px-4 rounded transition-colors"
  >
    <a href={data.link} rel="noopener noreferrer" target="_blank">
      <h1 className="font-bold text-lg">{data.title}</h1>
      <div className="flex flex-row justify-between">
        <p className="mt-2 text-gray-700">{`r/${data.subreddit}`}</p>
        <p className="flex flex-row items-center mt-2">
          <img src={upvote} alt="upvote" className="h-4 mr-1" />
          <span className="font-bold text-orange-500">{data.score}</span>
        </p>
      </div>
    </a>
  </motion.li>
)

export default TopPost

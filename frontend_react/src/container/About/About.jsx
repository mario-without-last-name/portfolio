import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { AppWrap, MotionWrap } from '../../wrapper'
// import { images } from '../../constants'
import './About.scss'
import { urlFor, client } from '../../client'

// This is static data
// const abouts = [
//   { title: 'Frontend Development', description: 'I can create functional user-end interfaces that deliver the message', imgURL: images.about01},
//   { title: 'Backend Development',  description: 'Behind-the-scenes server tasks are easy for me to handle',             imgURL: images.about02},
//   { title: 'UI/UX Designer',       description: 'Want to create eye-cathing websites, I got your back',                 imgURL: images.about03},
//   { title: 'Data Analyst',         description: 'Crunching numbers is what I do',                                       imgURL: images.about04},
// ]

// This is dynamic data, using cms, Sanity
const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
      .then((data) => {setAbouts(data)})
  }, [])
  
  return (
    <>
      {/* <motion.div
      whileInView={{y:[100,0], opacity:[0,1]}}
      transition={{ duration:0.5 }}> */}
      <h2 className="head-text">I Know That <span>Good Design</span><br/>means <span>Good Business</span></h2>
      {/* </motion.div> */}
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
          // whileInView = {{y:[100,0], opacity: [0,1]}}
          whileInView={{ opacity: 1 }}
          whileHover = {{scale: 1.2}}
          transition= {{duration: 0.5, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}>
            {/* This is if you are still using the static data. When using Sanity, use a different code */}
            {/* <img src={about.imgURL} alt={about.title} /> */}
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

// export default About
// export default AppWrap(About, 'about');
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);

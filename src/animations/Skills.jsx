import React, { Component } from 'react'
 
import TagsCanvas from 'react-tags-canvas'
 
class Skills extends Component {
  render() {
    return (
      <TagsCanvas
        textColour='#1E293B'
        maxSpeed={0.06}
        freezeActive
        shuffleTags
        shape='sphere'
        zoom={1.5}
        noSelect
        textFont={null}
        pinchZoom
        outlineThickness={0.5}
        outlineColour='#fe0853'
        freezeDecel={true}
        fadeIn={3000}
        initial={[0.3,-0.1]}
        depth={0.2}
        tags={[
          { value: 'HTML5', weight: 7 },
          { value: 'CSS3', weight: 9 },
          { value: 'Javascript', weight: 8 },
          { value: 'React', weight: 10 },
          { value: 'Next.js', weight: 10 },
          { value: 'Redux', weight: 10 },
          { value: 'Typescript', weight: 6 },
          { value: 'SVG', weight: 4 },
          { value: 'Less', weight: 6 },
          { value: 'SASS', weight: 7 },
          { value: 'BEM', weight: 6 },
          { value: 'FLEX', weight: 8 },
          { value: 'Foundation', weight: 5 },
          { value: 'Boostrap', weight: 4 },
          { value: 'ES6', weight: 10 },
          { value: 'Ajax', weight: 5 },
          { value: 'JSON', weight: 6 },
          { value: 'Jquery', weight: 10 },
          { value: 'Loadash', weight: 9 },
          { value: 'Underscore', weight: 10 },
          { value: 'D3.js', weight: 10 },
          { value: 'Styled components', weight: 7 },
          { value: 'Webpack', weight: 10 },
          { value: 'NodeJS', weight: 10 },
          { value: 'MongoDB', weight: 10 },
          { value: 'NodeJS', weight: 10 },
          { value: 'Wordpress', weight: 8 },
          { value: 'Hubspot', weight: 8 },
          { value: 'Git', weight: 10 },
          { value: 'PHP', weight: 6 },
        ]}
      />
    )
  }
}

export default Skills
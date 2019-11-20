import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                <img
                  src="https://media.licdn.com/dms/image/C5603AQFMuCStLMpx8A/profile-displayphoto-shrink_200_200/0?e=1579737600&v=beta&t=bXn6by-_JJdZA1iZA1KsH0Pb--o8Zvu4D-3mMtcYqlk"
                  alt="avatar"
                  className="Image"
                  />
    
                <div className="banner-text">
                  <h1>Software Developer</h1>
    
                <hr/>
    
              <p>HTML/CSS | Bootstrap | JavaScript | React | NodeJS | ASP.NET MVC | MS SQL</p>
    
            <div className="social-links">
    
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/michaeljosephgarcia/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
    
              {/* Github */}
              <a href="https://github.com/mgarcia707" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>
    
              {/* Freecodecamp */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-free-code-camp" aria-hidden="true" />
              </a>
    
              {/* Youtube */}
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
    
            </div>
                </div>
              </Cell>
              <h2 className="construction"> Under Construction!</h2>
            </Grid>
          </div>
        )
    }
}

export default Landing; 
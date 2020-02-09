import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import logo from '../michaelg.jpg';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
              <Cell col={12}>
                <img
                  src={logo}
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

              {/* Github */}
              <a href="mailto: garciajosephmichael@gmail.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-envelope" aria-hidden="true" />
              </a>
    
              {/* Freecodecamp
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-free-code-camp" aria-hidden="true" />
              </a>
    
               Youtube 
              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
              */}
    
            </div>
                </div>
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Landing; 
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
    
              <p> .NET Framework & .NET Core | React | JavaScript | HTML & CSS | MS SQL</p>
    
            <div className="social-links">
    
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/michaeljosephgarcia/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>
    
              {/* Github */}
              <a href="https://github.com/mgarcia707" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Gmail */}
              <a href="mailto: garciajosephmichael@gmail.com" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-envelope" aria-hidden="true" />
              </a>
    
              {/* Devpost*/}
              <a href="https://devpost.com/mgarcia707?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-trophy" aria-hidden="true" />
              </a>
              
            </div>
                </div>
              </Cell>
            </Grid>
          </div>
        )
    }
}

export default Landing; 
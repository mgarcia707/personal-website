import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
      }
    
      toggleCategories() {
    
        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid">
              {/* Project 1 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/vkang02/SlugNutrition/blob/master/Sample/app/src/main/res/drawable-nodpi/logo.png?raw=true) center / cover'}} ></CardTitle>
                <CardText>
                  An Android Mobile Application built at a UC Berkeley Hackathon!
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/vkang02/SlugNutrition">GitHub</Button>
                  <Button colored href="https://devpost.com/software/slug-nutrition">DEVPOST</Button>
                  {/*<Button colored>Live Demo</Button> */}
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  {/*<IconButton name="share" />*/}
                </CardMenu>
              </Card>
              {/* Project 2 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQskBZr90Ynl_cBFf4qX9_afo_rGidyojsRWMMMSbU3PwaFvdeA&s) center / cover'}} ></CardTitle>
                <CardText>
                  An Amazon Alexa Skill built at a UC Davis Hackathon!
                </CardText>
                <CardActions border>
                  <Button colored href="https://github.com/mgarcia707/Nutrition-Tracker">GitHub</Button>
                  <Button colored href="https://devpost.com/software/health-tracker-074byg">DEVPOST</Button>
                  {/*<Button colored>Live Demo</Button> */}
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  {/*<IconButton name="share" />*/}
                </CardMenu>
              </Card>
              {/* Project 3 */}
              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px',  background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF2xvEgvlD3W1ZJ7Z4YbTDwAouaIuJS9N79Uu3zOovijakvS9v) center / cover'}} ></CardTitle>
                <CardText>
                  My portfolio website built with React!
                </CardText>
                <CardActions border>
                  <Button colored href="https://www.michaeljosephgarcia.com/">Live Demo</Button>
                   {/*<Button colored>DEVPOST</Button>
                  <Button colored>Live Demo</Button> */}
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  {/*<IconButton name="share" />*/}
                </CardMenu>
              </Card>
            </div>
          )
        } else if(this.state.activeTab === 1) {
          return (
            <div><h1>This is Angular</h1></div>
          )
        } else if(this.state.activeTab === 2) {
          return (
            <div><h1>This is VueJS</h1></div>
          )
        } else if(this.state.activeTab === 3) {
          return (
            <div><h1>This is MongoDB</h1></div>
          )
        }
      }
    
    render() {
        return(
            <div>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Projects</Tab>
            {/*
            <Tab>Angular</Tab>
            <Tab>VueJS</Tab>
            <Tab>MongoDB</Tab>
            */}
            </Tabs>
            <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
            </Grid>
          </div>
        )
    }
}

export default Projects; 
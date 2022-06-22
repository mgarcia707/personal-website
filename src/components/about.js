import React, { Component } from 'react';
import Terminal from 'terminal-in-react';

class About extends Component {
    render() {
        return(
            <div
            className="project"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh"
            }}
          >
            <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: "bold", fontSize: "1em" }}
                commands={{
                'open-google': () => window.open('https://www.google.com/', '_blank'),
                showmsg: this.showMsg,
                popup: () => alert('Terminal in React')
                }}
                descriptions={{
                'open-google': 'opens google.com',
                showmsg: 'shows a message',
                alert: 'alert', popup: 'alert'
                }}
                msg='Hello and welcome to my portfolio page! My name is Michael Garcia and
                I am a Software Developer located in the San Francisco Bay Area (:'
            />
            </div>
        )
    }
}

export default About; 
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class ProsCons extends React.Component {
  constructor() {
    super();
    this.state = {pros : [''], cons: ['']};
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    console.log('Mounted');
  }

  handleChange(e) {
    console.log(e.target.id.substr(0,1));
  }

  render() {


    const mainContainer = {
      width: '70%',
      margin: '0px auto',
    };

    const widget = {
      width: 'calc(100%/2)',
      height: '600px',
      border: '1px solid black',
      borderCollapse: 'collapse',
    };

    const header = {
      width: '100%',
      height: '10%',
      textAlign: 'center',
      borderBottom: '1px solid black',
    };

    const main = {
      width: '100%',
      width: '90%',
    };

    const headerStyle = {
      display: 'block',
      backgroundColor: '#f1f1f1',
      color: 'white',
      margin: '0',
      textAlign: 'center',
      height: '100px',
    };

    const mainWidget = {
      display: 'flex',
      flexDirection: 'row',
    };

    return (
      <div style={mainContainer}>
        <h1 style={headerStyle}>Should I eat at McDonalds</h1>
        <div style={mainWidget}>
          <div style={widget}>
            <div style={header}>
              PROS
            </div>
            <div style={main}>
              <ol>
                <li><input type={'text'} onChange={this.handleChange} id={`${1}P`} /></li>
              </ol>
            </div>
          </div>
          <div style={widget}>
            <div style={header}>
              CONS
            </div>
            <div style={main}>
              <ol>
                <li><input type={'text'} onChange={this.handleChange} id={`${1}C`} /></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<ProsCons />,
		document.getElementById('react-container'));

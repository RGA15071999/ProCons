'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class ProsCons extends React.Component {
  constructor() {
    super();
    this.state = {pros : [''], cons: ['']};
    this.handleChangeP = this.handleChangeP.bind(this);
    //this.handleChangeC = this.handleChangeC.bind(this);
  }

  componentDidMount(){
    console.log('Mounted');
  }

  handleChangeP(number, e) {
    //const number = Number(e.target.id.substr(0,1));
    const allPros = this.state.pros;
    allPros[number] = e.target.value;
    if(allPros[number+1] === undefined) {
      allPros.push('');
    }
    if(allPros[number] === "") {
      allPros.splice(number, 1);
    }
    this.setState({ pros : allPros });
  }

  handleChangeC(number, e) {
    //const number = Number(e.target.id.substr(0,1));
    const allPros = this.state.cons;
    allPros[number] = e.target.value;
    if(allPros[number+1] === undefined) {
      allPros.push('');
    }
    if(allPros[number] === "") {
      allPros.splice(number, 1);
    }
    this.setState({ cons : allPros });
  }

  render() {
    const listItems = this.state.pros.map((currElm, index) => {
      return (
        <li><input type={'text'} onChange={this.handleChangeP.bind(this, index)} value={`${currElm}`} />
        </li>
      );
    });

    const listItemsC = this.state.cons.map((currElm, index) => {
      return (
        <li><input type={'text'} onChange={this.handleChangeC.bind(this, index)} value={`${currElm}`} />
        </li>
      );
    });

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
                {listItems}
              </ol>
            </div>
          </div>
          <div style={widget}>
            <div style={header}>
              CONS
            </div>
            <div style={main}>
              <ol>
                {listItemsC}
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

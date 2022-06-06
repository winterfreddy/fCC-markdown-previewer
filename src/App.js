import './App.css';
import React from 'react';
import Markdown from 'marked-react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markdownText: "# React Markdown Previewer\n## What you see on the left is will appear on the right.\nIn this sample previewer, I want to show you how to print `Hello world`.\n\nBefore we can get started, here are some pre-requisities.\n\n1. You know how to read code\n2. You know what a function is\n3. You know how simple this is\n\nWithout further ado, here is the **code**.\n```function myFunction() {\nconsole.log('Hello World'); }```\n\nThat was simple right? Hope you enjoyed this little exercise!\n\nThis project is one of many projects on [freeCodeCamp](https://www.freecodecamp.org) website!\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)"
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({markdownText: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div>
          <div>
            <h1>Markdown Editor</h1>
            <textarea id='editor' onChange={this.handleChange} value={this.state.markdownText}></textarea>
          </div>
          <div>
            <h1>Markdown Previewer</h1>
            <div id='preview'>
              <Markdown>{this.state.markdownText}</Markdown>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

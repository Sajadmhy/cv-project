import React , {Component} from "react";
import Name from "./Components/Name";
import Email from "./Components/Email";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        text: '',
      },
      nameStack: {
        text:'',
      },
      email: {
        text:'',
      },
      emailStack: {
        text:'',
      },
    };
  }

  handleChangeName = (e) => {
    this.setState({
      name: {
        text: e.target.value,
      },
    });
  };

  handleChangeEmail = (e) => {
    this.setState({
      email: {
        text: e.target.value,
      },
    });
  };

  handleSubmitName = (e) => {
    e.preventDefault();
    if (this.state.name.text === "") {
      alert ("Please enter a name")
    } else {
    this.setState({
      nameStack: {
        text: this.state.name.text,
      },
      name: {
        text: '',
      },
    });
  }
  };

  handleSubmitEmail = (e) => {
    e.preventDefault();
    if (this.state.email.text === "") {
      alert ("Please enter an email")
    } else {
    this.setState({
      emailStack: {
        text: this.state.email.text,
      },
      email: {
        text: '',
      },
    });
  }
  };

  render() {
      const { name, email, nameStack, emailStack } = this.state;

      return (
      <div>
        <form onSubmit={this.handleSubmitName}>
          <label htmlFor="taskInput">Name</label>
          <input
            onChange={this.handleChangeName}
            value= {name.text}
            type="text"
            id="taskInput"
          />
          <button type="submit">Add Name</button>
        </form> 
        <form onSubmit={this.handleSubmitEmail}>
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChangeEmail}
            value={email.text}
            type= "email"
            id="email"
          />
          <button type="submit">Add Email</button>
          
        </form>
        <Name tasks={nameStack}/>
        <Email tasks={emailStack}/>
      </div>
    );
  }
}

export default App;

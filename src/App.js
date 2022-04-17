import React , {Component} from "react";
import Name from "./Components/Name";
import Email from "./Components/Email";
import Phone from "./Components/Phone";

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
      phone: {
        text:'',
      },
      phoneStack: {
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

  handleEditName = (e) => {
    this.setState({
      name: {
        text: this.state.nameStack.text,
      },
      nameStack:{
        text: '',
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
  };
  };

  handleChangeEmail = (e) => {
    this.setState({
      email: {
        text: e.target.value,
      },
    });
  };

  handleEditEmail = (e) => {
    this.setState({
      email: {
        text: this.state.emailStack.text,
      },
      emailStack:{
        text: '',
      },
    });
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

  handleChangePhone = (e) => {
    this.setState({
      phone: {
        text: e.target.value,
      },
    });
  };

  handleEditPhone = (e) => {
    this.setState({
      phone: {
        text: this.state.phoneStack.text,
      },
      phoneStack:{
        text: '',
      },
    });
  };

  handleSubmitPhone = (e) => {
    e.preventDefault();
    if (this.state.phone.text === "") {
      alert ("Please enter a phone number")
    } else {
    this.setState({
      phoneStack: {
        text: this.state.phone.text,
      },
      phone: {
        text: '',
      },
    });
  }
  };

  render() {
      const { name, email, nameStack, emailStack,
       phone, phoneStack } = this.state;

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
          <button type= "button" onClick={this.handleEditName}>Edit Name</button>
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
          <button type= "button" onClick={this.handleEditEmail}>Edit Email</button>
        </form>
        <form onSubmit={this.handleSubmitPhone}>
          <label htmlFor="phone">Phone</label>
          <input
            onChange={this.handleChangePhone}
            value={phone.text}
            type= "tel"
            id="phone"
          />
          <button type="submit">Add Phone Number</button>
          <button type= "button" onClick={this.handleEditPhone}>Edit Phone Number</button>
        </form>
        <Name tasks={nameStack}/>
        <Email tasks={emailStack}/>
        <Phone tasks={phoneStack}/>
      </div>
    );
  }
}

export default App;

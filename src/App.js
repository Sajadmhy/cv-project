import React , {Component} from "react";
import Name from "./Components/Name";
import Email from "./Components/Email";
import Phone from "./Components/Phone";
import Skill from "./Components/Skill";
import "./App.css"

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
      skill: {
        text:'',
      },
      skillStack: {
        text: [],
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

  handleChangeSkill = (e) => {
    this.setState({
      skill: {
        text: e.target.value,
      },
    });
  };

  handleClearSkill = (e) => {
    this.setState({
      skillStack:{
        text: [],
      },
    });
  };

  handleSubmitSkill = (e) => {
    e.preventDefault();
    if (this.state.skill.text === "") {
      alert ("Please enter a skill")
    } else {
    this.setState({
      // skillStack: {
      //   text: this.state.skill.text,
      // },
      skillStack: {
        text: [...this.state.skillStack.text, this.state.skill.text],
      },
      skill: {
        text: '',
      },
    });
  }
  }

  render() {
      const { name, email, nameStack, emailStack,
       phone, phoneStack, skill, skillStack } = this.state;

      return (
      <div className="cont">
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
        <form onSubmit={this.handleSubmitSkill}>
          <label htmlFor="skill">Skills</label>
          <input
            onChange={this.handleChangeSkill}
            value={skill.text}
            type= "text"
            id="skill"
          />
          <button type="submit">Add Skills</button>
          <button type= "button" onClick={this.handleClearSkill}>Clear Skills</button>
        </form>
        <div className="card">
          <div className="name"><Name tasks={nameStack}/></div>
          <div className="email"><Email tasks={emailStack}/></div>
          <div className="phone"><Phone tasks={phoneStack}/></div>
          <div className="skill"><Skill tasks={skillStack}/></div>
        </div>
      </div>
    );
  }
}

export default App;

import { render } from '@testing-library/react';
import './App.css';
import List from "../src/List"
import Form from "../src/Form"

function App() {
  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <Form
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
        <List itemList={this.state.itemList} />
      </div>
    );
  }
}


export default App;

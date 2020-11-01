import { render } from '@testing-library/react';
import './App.css';

function App() {
  return (
    <div className="App">
      constructor() {
        super()
        this.state = {
          itemList: [],
        }
      }
    </div>
  );

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <List itemList={this.state.itemList} />
      </div>
    )
  }
}

export default App;

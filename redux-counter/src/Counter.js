import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

class Counter extends React.Component {
  state = {
    count: 0,
  };

  // Increment method
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Decrement method
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  // Reset method
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="container mt-4">
        <h2>Counter</h2>
        <div
          className="d-flex align-items-center p-3"
          style={{ backgroundColor: '#00d4ff', borderRadius: '5px' }}
        >
          <span style={{border: "1px solid white", color: "white", padding: '6px', marginRight: "10px"}}>{this.state.count}</span>
          <button
            className="btn mx-1"
            style={{ backgroundColor: 'white', border: '1px solid #ccc', color: 'black' }}
            onClick={this.decrement}
          >
            -
          </button>
          <button
            className="btn mx-1"
            style={{ backgroundColor: 'white', border: '1px solid #ccc', color: 'black' }}
            onClick={this.increment}
          >
            +
          </button>
          <button
            className="btn mx-1"
            style={{ backgroundColor: 'white', border: '1px solid #ccc', color: 'black' }}
            onClick={this.reset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;

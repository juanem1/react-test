import React, {PropTypes} from 'React';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <p>Header</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;

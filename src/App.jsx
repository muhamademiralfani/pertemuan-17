import { Component } from 'react';
import NewsDetailContainer from './containers/NewsDetailContainer';
import NewsListContainer from './containers/NewsListContainer';

export class App extends Component {
  state = {
    selectedNewsKey: null,
  };

  handleSelectNews = (key) => {
    this.setState({ selectedNewsKey: key });
  };

  handleBack = () => {
    this.setState({ selectedNewsKey: null });
  }

  render() {
    return <div className='App'>{this.state.selectedNewsKey ? <NewsDetailContainer newsKey={this.state.selectedNewsKey} onBack={this.handleBack} /> : <NewsListContainer onSelect={this.handleSelectNews} />}</div>;
  }
}

export default App;

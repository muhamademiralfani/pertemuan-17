/* eslint-disable react/prop-types */
import { Component } from 'react';
import NewsList from '../components/NewsList';
import { fetchGame } from '../utils/api';

export class NewsListContainer extends Component {
  state = {
    news: [],
    loading: true,
  };

  componentDidMount() {
    this.fetchNewsData();
  }

  async fetchNewsData() {
    try {
      const data = await fetchGame();
      this.setState({ news: data, loading: false });
    } catch (err) {
      console.log(err);
      this.setState({ loading: false });
    }
  }

  render() {
    const { news, loading } = this.state; // destucturing object

    return (
      <div>
        <h1 style={{ color: 'black' }}>List Artikel</h1>
        {loading ? (
          <div className='loading-container'>
            <div className='custom-loader'></div>
          </div>
        ) : (
          <NewsList news={news} onSelect={this.props.onSelect} />
        )}
      </div>
    );
  }
}

export default NewsListContainer;

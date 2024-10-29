/* eslint-disable react/prop-types */
import { Component } from 'react';
import { fetchGameDetail } from '../utils/api';
import NewsDetail from '../components/NewsDetail';

export class NewsDetailContainer extends Component {
  state = {
    detail: null,
    loading: true,
  };

  componentDidMount() {
    this.fetchDetailData();
  }

  async fetchDetailData() {
    try {
      const data = await fetchGameDetail(this.props.newsKey);
      this.setState({ detail: data.results, loading: false });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        {/* <h1>NewsDetailContainer</h1> */}
        {this.state.loading ? (
          <div className='loading-container'>
            <div className='custom-loader'></div>
          </div>
        ) : (
          <NewsDetail detail={this.state.detail} onBack={this.props.onBack} />
        )}
      </div>
    );
  }
}

export default NewsDetailContainer;

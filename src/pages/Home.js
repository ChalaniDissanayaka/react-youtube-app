import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'; 
import SearchBar from "../components/SearchBar";
import youtube from "../apis/youtube";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";


class Home extends React.Component {
    state = { videos: [], selectedVideo: null };
  
    componentDidMount() {
      this.onTermSubmit("Scenaries");
    }
  
    onTermSubmit = async (term) => {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
  
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
    };
  
    onVideoSelect = (video) => {
      this.setState({ selectedVideo: video });
    };
  
    render() {
      return (
        <>
          <Navbar />
            <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                  <VideoList
                    onVideoSelect={this.onVideoSelect}
                    videos={this.state.videos}
                  />
                </div>
              </div>
            </div>
          </div>
        <Footer />
        </>
      );
    }
  }
  
export default Home;
  
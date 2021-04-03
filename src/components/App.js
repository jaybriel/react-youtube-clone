import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo:null };


  componentDidMount(){
    this.onSearchSubmit('buildings');
  }

  onSearchSubmit = async (searchKey) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchKey,
      },
    });

    console.log(response.data.items);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };


  //enclose in curly brackets when json object
  onVideoSelect = ({videoItem}) =>{
    console.log("this is from app",videoItem);
    this.setState({selectedVideo: videoItem})
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className = "ui grid">
          <div className = "ui row">
        <div className = "eleven wide column"><VideoDetail videoItem = {this.state.selectedVideo} /></div>
        <div className = "five wide column"><VideoList onVideoSelect={this.onVideoSelect} videos ={this.state.videos} /></div>
        </div>
        </div>
  </div>
    );
  }
}

export default App;

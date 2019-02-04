import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
// To install lodash, do 'npm install --save lodash'
// In react, only the most parent component is responsible for fetching the data. Be it from an api or from anywhere else. This is called downward data flow. 
const API_KEY = 'AIzaSyCNNOt1rzZVv-cUt9zk931oZ0Mi6zdhjrw';
// we need to install a package called 'youtube api search'. This will take our api key and on our behalf make request to youtube and return data to us.
// to install it, in terminal write 'npm install --save youtube-api-search'. -- with save tells that to please install it in our package.json file which has list of all the dependencies our project has.

// This function will create an element 'App'. If you will pass this in babel then you will understand.
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        };
        this.VideoSearch('javascript');
    }

     VideoSearch(term){
        // Here function with videos with parameter is callback function
        YTSearch({key:API_KEY,term:term},(videos)=>{
        this.setState({
            videos:videos,
            selectedVideo:videos[0]
        });
        // This can also be written as this.setState({videos:videos}); but here both names are same.
        });
   }

    render(){
        const VideoSearch=_.debounce((term)=>{this.VideoSearch(term)}, 300);
        return(
            <div>
                <SearchBar onSearchTermChange={VideoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
        ); 
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));




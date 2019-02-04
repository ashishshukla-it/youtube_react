import React from 'react';
import VideoListItem from './video_list_item';

const VideoList= (props)=>{
   // map works like for each
    const videoItems=props.videos.map((videooo)=>{
       return <VideoListItem 
       onVideoSelect={props.onVideoSelect}
       key={videooo.etag} video={videooo}/>
   })

    return(
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
    );
};

export default VideoList;

// map is used like this-
// var array=[1,2,3]
// array.map(function(number){return 2*number})
// output will be [2,4,6]
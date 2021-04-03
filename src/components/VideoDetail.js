import React from 'react';

const VideoDetail = ({videoItem}) =>{

    if(!videoItem){
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${videoItem.id.videoId}`
    return (
        

        <div>
            <div className ="ui embed">
                <iframe title = "video player" src={videoSrc}/>
            </div>
        <div className ="ui segment">
        <h4 className ="ui header">{videoItem.snippet.title}</h4>
        <p>{videoItem.snippet.description}</p>
        </div>
        </div>);
};

export default VideoDetail;
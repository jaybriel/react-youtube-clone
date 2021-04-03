import axios from 'axios';


const KEY = 'AIzaSyBYYTVgDU6sCYQJy3GmcummQmyKt_XFd4s';


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: '5',
        type: 'video',
        key: KEY
    }
});
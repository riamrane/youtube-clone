import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "Kanada raja pandharicha",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Rahul Deshpande",
    views: "10 mins",
    timestamp: "10 days ago"
},
{
    title: "Kanada raja pandharicha",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Rahul Deshpande",
    views: "10 mins",
    timestamp: "10 days ago"
},
{
    title: "Kanada raja pandharicha",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Rahul Deshpande",
    views: "10 mins",
    timestamp: "10 days ago"
},
{
    title: "Kanada raja pandharicha",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Rahul Deshpande",
    views: "10 mins",
    timestamp: "10 days ago"
},
{
    title: "Kanada raja pandharicha",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Rahul Deshpande",
    views: "10 mins",
    timestamp: "10 days ago"
},
{
    title: "Kanada raja pandharicha",
    image: "photo.jpg",
    thumbImage: "photo.jpg",
    author: "Rahul Deshpande",
    views: "10 mins",
    timestamp: "10 days ago"
},
]

export const VideoGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {VIDEOS.map(video => <div>
                <VideoCard title={video.title}
                    image={video.image}
                    thumbImage={video.thumbImage}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp}
                ></VideoCard>
            </div>)}
        </div>
    )
}
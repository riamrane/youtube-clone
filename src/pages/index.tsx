import {VideoCard} from "@/components/VideoCard";


export default function Home() {
  return (
    <div>
      <VideoCard title={"Kanada raja pandharicha"}
        image={'photo.jpg'}
        thumbImage={'photo.jpg'}
        author={'Rahul Deshpande'}
        views={"10 mins"}
        timestamp={" 10 days ago"}
        ></VideoCard>

        
    </div>
  );
}

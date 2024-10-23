import { Carousel } from "@/components/carousel/Carousel";
import TopBanner from "@/components/topBanner/TopBanner";



export default function Home() {
  return (
    <div className="overflow-x-hidden">
     
      <Carousel/>
      <TopBanner/>
    </div>
  );
}

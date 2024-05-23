import React,{useEffect, useState} from 'react';
import SnapShortComponentDesign from './SnapShortComponentDesign';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

const SnapShortDiv = (props) => {
    const [data,setData] = useState([]);
    const [loading, setloading] = useState(false);
    const [totalResults, settotalResults] = useState(0);
    const [page, setpage] = useState(0);
    const FetchData = async () => {
      try {
          const response = await fetch(`https://pixabay.com/api/?key=40093189-6b5570210bd8defe44e41d6a7&q=${props.message}&page=${page+1}&image_type=photo&pretty=true&orientation=horizontal&per_page=20#`);
          let Data=await response.json();
          let res=Data.hits;
          setloading(false)
          setData(data.concat(res));
          setpage(page+1);
          settotalResults(Data.totalHits);
        }catch (error) {
          console.log(error);
          setloading(false);
        }
      }
    useEffect(() => {
      setloading(true);
      FetchData();
      setloading(false);
      // eslint-disable-next-line
    },[loading]);
  return (
    <>
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={FetchData}
        hasMore={(totalResults>data.length)?true:false}
        loader={<Loader/>}>
        <div>
          {loading && <Loader/>}
          {!loading && <SnapShortComponentDesign data={data}/> }
        </div>
      </InfiniteScroll>
    </>
    
    
  )
}

export default SnapShortDiv

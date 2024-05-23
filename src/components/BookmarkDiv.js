import React, { useContext } from 'react'
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import BookmarkDesign from './BookmarkDesign';
import Context from '../Context API/ContextState';


const BookmarkDiv = () => {
  const context = useContext(Context);
  const { BookMarkDate } = context;

  return (
    <>
      <InfiniteScroll
        dataLength={BookMarkDate.length} //This is important field to render the next data
        loader={<Loader />}>
        <div>
          {<BookmarkDesign />}
        </div>
      </InfiniteScroll>
    </>
  )
}

export default BookmarkDiv

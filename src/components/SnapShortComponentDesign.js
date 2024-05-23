import React, { useContext } from 'react';
import './Components.css';
import Context from '../Context API/ContextState';

const SnapShortComponentDesign = (props) => {
  const context = useContext(Context);
  const {handleOnBookmark} = context;
  const CopyLink = (data) => {
    let Text = data;
    navigator.clipboard.writeText(Text);
    document.getSelection().removeAllRanges();
    return navigator;
  }
  return (
    <>
      <div className="container mb-5 mt-5 py-5">
        <div className="row mx-5">
          {props.data.map((ele) => {
            return (
              <div className="col-lg-4 p-5" key={ele.webformatURL}>
                <div className="card" style={{ width: "30rem" }}>
                  <img src={ele.webformatURL} className="card-img-top" alt="pictures" height="200" />
                  <div className="card-body d-flex flex-row flex-wrap justify-content-between">
                    <button type="button" className="btn btn-outline-primary" onClick={() => { handleOnBookmark(ele) }}><i className="bi bi-journal-bookmark-fill"></i></button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => { CopyLink(ele.webformatURL) }}><i className="bi bi-link-45deg"></i></button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SnapShortComponentDesign

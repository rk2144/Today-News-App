import React, { Component } from 'react';

class NewsItems extends Component {
  render() {
    const { title, description, newsUrl, imageUrl,author,date,source } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left:'90%',zIndex:'1'}}>{source}</span>
          <img className="card-img-top" src={!imageUrl ? "https://image.cnbcfm.com/api/v1/image/107364873-1706251336811-gettyimages-1933268460-SKOREA_SAMSUNG_GALAXY_S24.jpeg?v=1706251364&w=1920&h=1080" : imageUrl} alt="..." />
          <div className="card-body">
            <h6 className="card-title">{title}...</h6>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;

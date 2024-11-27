import React from 'react';

function Portfolio ({resumeData}) {
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out some of my works:</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.work && resumeData.work.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img" alt="Portfolio item preview"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.ProjectName}</h5>
                          <p>{item.shortdesc}</p>
                          <a href={item.GithubLink}>Github repo</a>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }

  export default Portfolio;
import React from "react";

export const About = (props) => {
  return (
    <div id="#about">
      <div id={props?.data?.id} className="container">
        <div className="row align-items-center">
          {  
            (!!props?.data?.showImage) ?
              <div className="col-xs-12 col-md-6">
                <img src={props.data.image} className="img-fluid rounded p-5" alt="" />{" "}
              </div>
              : null
          } 
          <div className={(!!props?.data?.showImage) ? "col-xs-12 col-md-6" : "col-xs-12"}>
            <div className="about-text">
              <h2>{props?.data?.title}</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>{props?.data?.subtitle}</h3>
              <div 
                className="list-style"
                style={{"padding": "0 0 0 3rem"}}
              >
                <div>
                  <ul>
                    {props.data?.topics
                      ? props.data.topics.map((d, i) => (
                          <li className="mb-2" key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

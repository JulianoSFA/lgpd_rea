import React from "react";

export const Recommendations = (props) => {
  return (
    <div id="services" className="text-center">
      <div id={props?.data?.id ? props.data.id : "services"} className="container">
        <div className="section-title">
          <h2>{props?.data?.title ? props.data.title : "...loading"}</h2>
          <p>
            { props?.data?.info ? props.data.info : "...loading"}
          </p>
        </div>
        <div className="row">
          {props?.data?.items
            ? props.data.items.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div class="section-title">
          <p>
            { props?.data?.postInfo ? props.data.postInfo : "...loading"}
          </p>
        </div>
        
      </div>
    </div>
  );
};

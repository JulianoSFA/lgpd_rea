import React from "react";

export const Features = (props) => {
  return (
    <div id="features"  class="py-5 text-center">
      <div className="container">
        <div class="row justify-content-center">
          <div className="col-md-10 section-title">
            <h2>{props?.title ? props.title : 'Carregando'}</h2>
          </div>
          <div className="row">
            {
              props.data
                ? props.data.map((d, i) => (
                    <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                      {" "}
                      <a href={d.href}>
                        <i className={d.icon}></i>
                      </a>
                      <h3>{d.title}</h3>
                      <p>{d.text}</p>
                    </div>
                  ))
                : "Carregando..."
            }
          </div>
        </div>
      </div>
    </div>
  );
};

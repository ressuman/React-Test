import React from "react";

function Card() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div>
              <div className="card" style={{ width: "25.7rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1695548043715-feb22ef40436?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="wallpaper"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div>
              <div className="card" style={{ width: "25.7rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1695367255569-85b0536aeed2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="wallpaper"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div>
              <div className="card" style={{ width: "25.7rem" }}>
                <img
                  src="https://images.unsplash.com/photo-1695575161810-5f083f6609a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  className="card-img-top"
                  alt="wallpaper"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

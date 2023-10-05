import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1695095737430-78f5a89aab77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-100"
                    alt="wallpaper"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1694267510052-feac0d872085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-100"
                    alt="wallpaper"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1695018128519-bced2bac1b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-100"
                    alt="wallpaper"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

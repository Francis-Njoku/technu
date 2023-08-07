import React from "react";

import Slider from "./slider";

function BoxSlideTwo() {
  return (
    <div className='game_info_box_container'>
      <div
        id='box-slide'
        // className='carousel'
        // data-flickity='{ "lazyLoad": 2, "initialIndex": 0, "autoPlay": true,"wrapAround": true, "autoPlay": 2500 }'
      >
        <Slider
          options={{
            autoPlay: 4000,
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            fullscreen: true,
            adaptiveHeight: true,
          }}
        >
          <div className='carousel-cell carousel-cell-wide'>
            <div className='wrapper'>
              <div className='game_info_box'>
                <div className='badge'>
                  {" "}
                  <img src='/assets/svg/game 3.svg' alt='' /> PS5
                </div>
                <div className='details'>
                  <img src='/assets/img/blue_thumb.png' alt='thumbnail' />
                  <p>
                    <small>Posted an hour ago</small>
                    Master-dee 001
                  </p>
                </div>
              </div>

              <div className='more_details'>
                <small>
                  2v2 | N4000 PRICE POOL{" "}
                  <i className='material-icons'>bookmark_border</i>
                </small>

                <h3>Call of Duty: Modern Warfare</h3>
                <small className='bottom'>
                  N2000 Entry Fee - Best of 5* <span>24 POINTS LADDER</span>
                </small>
              </div>
            </div>
          </div>

          <div className='carousel-cell carousel-cell-wide'>
            <div className='wrapper'>
              <div className='game_info_box'>
                <div className='badge'>
                  {" "}
                  <img src='/assets/svg/game 2.svg' alt='' /> XBOX
                </div>
                <div className='details'>
                  <img src='/assets/img/blue_thumb.png' alt='thumbnail' />
                  <p>
                    <small>Posted an hour ago</small>
                    Master-dee 001
                  </p>
                </div>
              </div>

              <div className='more_details'>
                <small>
                  2v2 | N4000 PRICE POOL{" "}
                  <i className='material-icons'>bookmark_border</i>
                </small>

                <h3>Call of Duty: Modern Warfare</h3>
                <small className='bottom'>
                  N2000 Entry Fee - Best of 5* <span>24 POINTS LADDER</span>
                </small>
              </div>
            </div>
          </div>

          <div className='carousel-cell carousel-cell-wide'>
            <div className='wrapper'>
              <div className='game_info_box'>
                <div className='badge'>
                  {" "}
                  <img src='/assets/svg/game 1.svg' alt='' /> PC
                </div>
                <div className='details'>
                  <img src='/assets/img/blue_thumb.png' alt='thumbnail' />
                  <p>
                    <small>Posted an hour ago</small>
                    Master-dee 001
                  </p>
                </div>
              </div>

              <div className='more_details'>
                <small>
                  2v2 | N4000 PRICE POOL{" "}
                  <i className='material-icons'>bookmark_border</i>
                </small>

                <h3>Call of Duty: Modern Warfare</h3>
                <small className='bottom'>
                  N2000 Entry Fee - Best of 5* <span>24 POINTS LADDER</span>
                </small>
              </div>
            </div>
          </div>

          <div className='carousel-cell carousel-cell-wide'>
            <div className='wrapper'>
              <div className='game_info_box'>
                <div className='badge'>
                  {" "}
                  <img src='/assets/svg/game 4.svg' alt='' /> MOBILE
                </div>
                <div className='details'>
                  <img src='/assets/img/blue_thumb.png' alt='thumbnail' />
                  <p>
                    <small>Posted an hour ago</small>
                    Master-dee 001
                  </p>
                </div>
              </div>

              <div className='more_details'>
                <small>
                  2v2 | N4000 PRICE POOL{" "}
                  <i className='material-icons'>bookmark_border</i>
                </small>

                <h3>Call of Duty: Modern Warfare</h3>
                <small className='bottom'>
                  N2000 Entry Fee - Best of 5* <span>24 POINTS LADDER</span>
                </small>
              </div>
            </div>
          </div>

          <div className='carousel-cell carousel-cell-wide'>
            <div className='wrapper'>
              <div className='game_info_box'>
                <div className='badge'>
                  {" "}
                  <img src='/assets/svg/game 3.svg' alt='' /> PS5
                </div>
                <div className='details'>
                  <img src='/assets/img/blue_thumb.png' alt='thumbnail' />
                  <p>
                    <small>Posted an hour ago</small>
                    Master-dee 001
                  </p>
                </div>
              </div>

              <div className='more_details'>
                <small>
                  2v2 | N4000 PRICE POOL{" "}
                  <i className='material-icons'>bookmark_border</i>
                </small>

                <h3>Call of Duty: Modern Warfare</h3>
                <small className='bottom'>
                  N2000 Entry Fee - Best of 5* <span>24 POINTS LADDER</span>
                </small>
              </div>
            </div>
          </div>

          <div className='carousel-cell carousel-cell-wide'>
            <div className='wrapper'>
              <div className='game_info_box'>
                <div className='badge'>
                  {" "}
                  <img src='/assets/svg/game 1.svg' alt='' /> PC
                </div>
                <div className='details'>
                  <img src='/assets/img/blue_thumb.png' alt='thumbnail' />
                  <p>
                    <small>Posted an hour ago</small>
                    Master-dee 001
                  </p>
                </div>
              </div>

              <div className='more_details'>
                <small>
                  2v2 | N4000 PRICE POOL{" "}
                  <i className='material-icons'>bookmark_border</i>
                </small>

                <h3>Call of Duty: Modern Warfare</h3>
                <small className='bottom'>
                  N2000 Entry Fee - Best of 5* <span>24 POINTS LADDER</span>
                </small>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BoxSlideTwo;

import React from "react";

import "./BoxSlides.scss";

import Slider from "./slider";

function boxSlideOne() {
  
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
          <div className='game_info_box'>
            <div className='badge'>Won ₦4,000.00</div>
            <div className='details'>
              <img src="/assets/img/blue_thumb.png" alt='thumbnail' />
              <p>
                COD: MW
                <small>aimamisa | Pro Player</small>
              </p>
            </div>
          </div>
        </div>

        <div className='carousel-cell carousel-cell-wide'>
          <div className='game_info_box'>
            <div className='badge'>Lost ₦2,000.00</div>
            <div className='details'>
              <img src="/assets/img/blue_thumb.png" alt='thumbnail' />
              <p>
                MK X
                <small>somto | Pro Player</small>
              </p>
            </div>
          </div>
        </div>

        <div className='carousel-cell carousel-cell-wide'>
          <div className='game_info_box'>
            <div className='badge'>Won ₦1,500.00</div>
            <div className='details'>
              <img src="/assets/img/blue_thumb.png" alt='thumbnail' />
              <p>
                Fifa20
                <small>mavinxx | Semi-pro Player</small>
              </p>
            </div>
          </div>
        </div>

        <div className='carousel-cell carousel-cell-wide'>
          <div className='game_info_box'>
            <div className='badge'>Won ₦13,000.00</div>
            <div className='details'>
              <img src="/assets/img/blue_thumb.png" alt='thumbnail' />
              <p>
                GOW
                <small>chinok | Legendary Player</small>
              </p>
            </div>
          </div>
        </div>

        <div className='carousel-cell carousel-cell-wide'>
          <div className='game_info_box'>
            <div className='badge'>Won ₦40,000.00</div>
            <div className='details'>
              <img src="/assets/img/blue_thumb.png" alt='thumbnail' />
              <p>
                SF XX
                <small>chimaobi | World Class Player</small>
              </p>
            </div>
          </div>
        </div>

        <div className='carousel-cell carousel-cell-wide'>
          <div className='game_info_box'>
            <div className='badge'>Lost ₦1,000.00</div>
            <div className='details'>
              <img src="/assets/img/blue_thumb.png" alt='thumbnail' />
              <p>
                Fortnite
                <small>awesomeness | Ultimate Player</small>
              </p>
            </div>
          </div>
        </div>

        </Slider>

      </div>

    </div>
  );
}

export default boxSlideOne;

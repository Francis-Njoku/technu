import React from "react";
import { Button } from "antd";
import "./BoxSlides.scss";

import Slider from "./slider";

function GenreSlide() {
  return (
    <div className='button_container genre-slide'>
      <div
        id='box-slide'
        // className='carousel'
        // data-flickity='{ "lazyLoad": 2, "initialIndex": 0, "autoPlay": false,"wrapAround": true }'
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
          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Action
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Adventure
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Fighting
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Racing
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Puzzle
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Sports
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Shooting
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Role Playing
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Tactical
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Soccer
            </Button>
          </div>

          <div className='carousel-cell'>
            <Button type='primary' className='btn_dark'>
              Others
            </Button>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default GenreSlide;

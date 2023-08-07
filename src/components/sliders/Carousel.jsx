import React from "react";
import { Link } from 'react-router-dom';

import "./Carousel.scss";
import { Button, Carousel } from "antd";

import ActionBtn from "../buttons/ActionBtn";

function carousel() {
  return (
    <React.Fragment>
      <Carousel autoplay>
        <div>
          <div className='slide_one'>
            <div className='heading'>
              <div className='badge'>Role Playing</div>
              <h1>Call of Duty: Modern Warfare</h1>
            </div>

            <div className='call_to_action'>
              <p>
                Slide into the action with COD: MW Leaderboard, cashouts and
                tournaments now live
              </p>

              <div className='button_container'>
                <Link to="/" className="mr-10">
                  <Button type="primary" className="btn_primary short">CREATE MATCH</Button>
                </Link>

                <Link to="/" className="mr-10">
                  <Button type="secondary" className="btn_secondary short">TOURNAMENTS</Button>
                </Link>

                {/* <ActionBtn
                  link='/'
                  className='blue h-outline h-outline-blue short'
                  text='CREATE A MATCH'
                />
                <ActionBtn
                  link='/'
                  className='red h-outline h-outline-red short'
                  text='TOURNAMENTS'
                /> */}
                {/* <ActionBtn
                  link='/'
                  className='black h-outline short icon'
                  text={
                    <i style={{ color: "#335191" }} className='material-icons'>
                      bookmark_border
                    </i>
                  }
                /> */}
                <ActionBtn
                  link='/'
                  className='black h-outline short icon'
                  text={<i className='material-icons'>share</i>}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='slide_one'>
            <div className='heading'>
              <div className='badge'>Role Playing</div>
              <h1>Call of Duty: Modern Warfare</h1>
            </div>

            <div className='call_to_action'>
              <p>
                Slide into the action with COD: MW Leaderboard, cashouts and
                tournaments now live
              </p>

              <div className='button_container'>
                <Link to="/" className="mr-10">
                  <Button type="primary" className="btn_primary short">CREATE MATCH</Button>
                </Link>

                <Link to="/" className="mr-10">
                  <Button type="secondary" className="btn_secondary short">TOURNAMENTS</Button>
                </Link>

                {/* <ActionBtn
                  link='/'
                  className='black h-outline short icon'
                  text={
                    <i style={{ color: "#335191" }} className='material-icons'>
                      bookmark_border
                    </i>
                  }
                /> */}
                <ActionBtn
                  link='/'
                  className='black h-outline short icon'
                  text={<i className='material-icons'>share</i>}
                />
              </div>
            </div>

          </div>
        </div>

        <div>
          <div className='slide_one'>
            <div className='heading'>
              <div className='badge'>Role Playing</div>
              <h1>Mortal Kombat X</h1>
            </div>

            <div className='call_to_action'>
              <p>
                Slide into the action with COD: MW Leaderboard, cashouts and
                tournaments now live
              </p>

              <div className='button_container'>
                <Link to="/" className="mr-10">
                  <Button type="primary" className="btn_primary short">CREATE MATCH</Button>
                </Link>

                <Link to="/" className="mr-10">
                  <Button type="secondary" className="btn_secondary short">TOURNAMENTS</Button>
                </Link>

                {/* <ActionBtn
                  link='/'
                  className='black h-outline short icon'
                  text={
                    <i style={{ color: "#335191" }} className='material-icons'>
                      bookmark_border
                    </i>
                  }
                /> */}
                <ActionBtn
                  link='/'
                  className='black h-outline short icon'
                  text={<i className='material-icons'>share</i>}
                />
              </div>
            </div>

            {/* <div className='slide_indicators'>
              <div className='active'></div>
              <div></div>
              <div></div>
            </div> */}
          </div>
        </div>
      </Carousel>
    </React.Fragment>
  );
}

export default carousel;

import React from 'react';

import { Modal, Button } from "antd";
import { QuestionOutlined } from '@ant-design/icons';

const CreateMatch3 = ( {action} ) => {

  return (
    <Modal visible={true} onCancel={() => action(0)} className='blur-bg'>
    <div id="create-match-three">
      <div className='heading'>
        <h2>Create a Match</h2>
        <p>Confirm Match Creation</p>
      </div>

      <div className="section">
        <div className="left">
          <div className='image_wrap'>
            <img src="/assets/img/fifa-long.png" alt="game"/>
            <div className='device-type'>
              <img src="/assets/svg/game 3.svg" alt="playstation"/>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="top">
            <div>
              <img src="/assets/svg/game 3.svg" alt="playstation"/>
            </div>
          </div>
          <div className="bottom">
            <div className="row">
              <p>Game Type</p>
              <p>Match</p>
            </div>
            <div className="row">
              <p>Game Genre</p>
              <p>Fifa 20 / Soccer</p>
            </div>
            <div className="row">
              <p>Versus Size</p>
              <p>2v2</p>
            </div>
            <div className="row">
              <p>Entry Fee / Game Fee</p>
              <p>₦2500 / ₦250</p>
            </div>
            <div className="row">
              <p>Additional Rule <QuestionOutlined /></p>
              <p>Best of 3* Matches</p>
            </div>
          </div>
        </div>

      </div>

      <div className="footer">
        <Button type='primary' className='btn_primary' onClick={() => action(4)}>
          CREATE MATCH
        </Button>
      </div>
    </div>
    </Modal>
  )
}

export default CreateMatch3

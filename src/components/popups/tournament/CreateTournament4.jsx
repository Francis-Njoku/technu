import React from "react";

import { Modal, Button } from "antd";
import { QuestionOutlined } from "@ant-design/icons";

const CreateTournament4 = ({ action }) => {
  return (
    <Modal visible={true} onCancel={() => action(0)}>
      <div id='create-tour-three'>
        <div className='heading'>
          <h2>Create a Tournament</h2>
          <p>Confirm Match Creation</p>
        </div>

        <div className='section'>
          <div className='left'>
            <div className='image_wrap'>
              <img src='/assets/img/fifa-long.png' alt='game' />
              <div className='device-type'>
                <img src='/assets/svg/game 3.svg' alt='playstation' />
              </div>
            </div>
          </div>

          <div className='right'>
            <div className='top'>
              <div>
                <img src='/assets/svg/game 3.svg' alt='playstation' />
              </div>
            </div>
            <div className='bottom'>
              <div className='row'>
                <p>Game Type</p>
                <p>Tournament</p>
              </div>
              <div className='row'>
                <p>Game / Genre</p>
                <p>Fifa 20 / Soccer</p>
              </div>
              <div className='row'>
                <p>Tournament Size / Type</p>
                <p>16 / Knockout</p>
              </div>
              <div className='row'>
                <p>Entry Fee Per Team / Game Fee</p>
                <p>₦2500 / ₦250</p>
              </div>
              <div className='row'>
                <p>
                  Additional Rule <QuestionOutlined />
                </p>
                <p>Single Elimination</p>
              </div>
            </div>
          </div>
        </div>

        <div className='footer'>
          <Button
            type='secondary'
            className='btn_secondary'
            onClick={() => action(5)}
          >
            CREATE TOURNAMENT
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTournament4;

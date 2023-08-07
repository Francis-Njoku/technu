import React from "react";
import "./RemovePlayers.scss";

import { Modal, Button } from "antd";

function RemovePlayer({ showModal, close, action }) {
  return (
    <div>
      <Modal
        className='blur-bg profile-modal'
        visible={showModal}
        onCancel={close}
      >
        <div className='modal__heading'>
          <h2>Remove Players</h2>
          <p>Remove members of your team</p>
        </div>

        <div className='main-container'>
          <h4 className='form-section-heading'>Remove team member</h4>

          <div className='invite-players'>
            <div className='player-container'>
              <img src='/assets/img/atoms_circle.png' alt='' />
              <p>
                <b>
                  Barrister (Chinok Alvin) 
                </b>
                <span className='subtitle'>Proplayer</span>
                <span className='cancel-sign'>Remove</span>
              </p>
            </div>

            <div className='player-container'>
              <img src='/assets/img/atoms_circle.png' alt='' />
              <p>
                <b>
                  Barrister (Chinok Alvin) <span className='tag'>Pending</span>
                </b>
                <span className='subtitle'>Proplayer</span>
                <span className='cancel-sign'>Remove</span>
              </p>
            </div>

            <div className='player-container'>
              <img src='/assets/img/atoms_circle.png' alt='' />
              <p>
                <b>
                  Barrister (Chinok Alvin) 
                </b>
                <span className='subtitle'>Proplayer</span>
                <span className='cancel-sign'>Remove</span>
              </p>
            </div>

            <div className='player-container'>
              <img src='/assets/img/atoms_circle.png' alt='' />
              <p>
                <b>
                  Barrister (Chinok Alvin)
                </b>
                <span className='subtitle'>Proplayer</span>
                <span className='cancel-sign'>Remove</span>
              </p>
            </div>

            <div className='player-container'>
              <img src='/assets/img/atoms_circle.png' alt='' />
              <p>
                <b>
                  Barrister (Chinok Alvin) <span className='tag'>Pending</span>
                </b>
                <span className='subtitle'>Proplayer</span>
                <span className='cancel-sign'>Remove</span>
              </p>
            </div>
          </div>
        </div>

        <div className='modal___button-container'>
          <Button
            type='primary'
            className='btn_primary active'
            onClick={action}
          >
            SAVE CHANGES
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default RemovePlayer;

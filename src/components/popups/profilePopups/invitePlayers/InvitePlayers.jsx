import React from "react";
import "../ProfilePopups.scss";
import "./InvitePlayers.scss";

import { Modal, Button } from "antd";

function DepositStep({ showModal, close, action }) {
  return (
    <div>
      <Modal
        className='blur-bg profile-modal'
        visible={showModal}
        onCancel={close}
      >
        <div className='modal__heading'>
          <h2>Invite Players</h2>
          <p>Add members to your team</p>
        </div>

        <div className='main-container'>
          <h4 className='form-section-heading'>Invite team member</h4>

          <div className='invite-players'>
            <div className='player-container'>
              <img src='/assets/img/atoms_circle.png' alt='' />
              <p>
                <b>
                  Barrister (Chinok Alvin) <span className='tag'>Pending</span>
                </b>
                <span className='subtitle'>Proplayer</span>
                <span className='cancel-sign'>x</span>
              </p>
            </div>
            <div className='add-btn-container'>
              <p>
                <span>+</span>Add Member
              </p>
            </div>

            <form>
              <input type='text' placeholder='@' />
            </form>

            <div className="form-info-container">
              <p>
                <span>Maximum of 5 members per team</span>
                <span>Read terms of service</span>
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
            ADD MEMBER (5)
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default DepositStep;

import React from "react";


import { Modal, Button } from "antd";

function EditTeam({ showModal, close, action }) {
  return (
    <div>
      <Modal
        className='blur-bg profile-modal'
        visible={showModal}
        onCancel={close}
      >
        <div className='modal__heading'>
          <h2>Edit Team (Vostro)</h2>
          <p>Edit your team</p>
        </div>

        <div className='main-container'>

          <div className="bio-container">
            <img src="/assets/svg/profile-picture.svg" alt="avi"/>
            <Button type='primary' className='btn_primary' >CHANGE AVATAR</Button>
          </div>

          <h4 className='form-section-heading'>Enter team name</h4>

          <div className='create-team'>

            <form>
              <input type='text' value='Vostro' placeholder='Enter name' />
            </form>

            <div className="form-info-container">
              <p>
                <span>4-33 characters allowed</span>
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

export default EditTeam;

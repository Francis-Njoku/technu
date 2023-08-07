import React from "react";
import "../depositStep/DepositStep.scss";

import { Modal, Button } from "antd";

function VerificationID({ showModal, close, action }) {
  return (
    <div id='match-warning'>
      <Modal
        className='blur-bg deposit-payment-modal'
        visible={showModal}
        onCancel={close}
      >
        <div className='modal__heading'>
          <h2 className='with-bars'>
            Verification
            <img src='/assets/svg/bar.svg' alt='' />
            <img src='/assets/svg/bar.svg' alt='' />
            <img src='/assets/svg/red-bar.svg' alt='' />
            <img src='/assets/svg/red-bar.svg' alt='' />
          </h2>
        </div>

        <div className='form-container' style={{marginTop: '3rem'}} >
          <h4 className='form-section-heading'>Step 2: Identification</h4>

          <form className='file-upload'>
            <p className='form-tip'>Upload file</p>
            <label>
              <input type='file' name='file' />
              <div className='button'>Browse</div>
            </label>
          </form>
          <div className='form-details' style={{marginTop: '0'}} >
            <p>
              <span>
                Submit photo of government issued ID card <span className='icon'>?</span>
              </span>
            </p>
          </div>
        </div>

        <div className='modal___button-container'>
          <Button
            type='primary'
            className='btn_primary active'
            onClick={action}
          >
            NEXT
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default VerificationID;

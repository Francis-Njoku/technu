import React from "react";

import { Modal, Button } from "antd";

function WithdrawDetails({ showModal, close, action }) {
  return (
    <div id='match-warning'>
      <Modal
        className='blur-bg deposit-payment-modal'
        visible={showModal}
        onCancel={close}
      >
        <div className='modal__heading'>
          <h2>Withdrawal</h2>
          <p>From NGN wallet</p>
        </div>

        <div className='form-container withdrawdetails'>

          <div className='form-details'>
            <p>
              <span>Requested amount of withdrawal</span>
              <span>N2500</span>
            </p>

            <p>
              <span>Requested bank account</span>
              <span>Guarantee Trust Bank</span>
            </p>

            <p>
              <span>Withdrawal fee <span className='icon'>?</span></span>
              <span>N750</span>
            </p>

            <p>
              <span>Withdrawal note</span>
              <span>This is a reference note for withdrawal</span>
            </p>
          </div>
        </div>

        <div className='modal___button-container'>
          
          <Button
            type='primary'
            className='btn_primary active'
            onClick={action}
          >
            CONTINUE
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default WithdrawDetails;

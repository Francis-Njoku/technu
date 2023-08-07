import React from "react";
import "../depositStep/DepositStep.scss";

import { Modal, Button } from "antd";

function WithdrawalStep({ showModal, close, action }) {
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

        <div className='form-container'>

          <h4 className="form-section-heading">
            How much would you like to withdraw
          </h4>

          <form>
            <p>NGN</p>
            <input type='number' placeholder='1000' /> 
      
            <input className='full' type="text" placeholder='Add reference note (optional)'/>
          </form>

          
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

export default WithdrawalStep;

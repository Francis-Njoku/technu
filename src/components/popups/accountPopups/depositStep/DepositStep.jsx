import React from "react";
import "./DepositStep.scss";

import { Modal, Button } from "antd";

function DepositStep({ showModal, close, action }) {
  return (
    <div id='match-warning'>
      <Modal
        className='blur-bg deposit-payment-modal'
        visible={showModal}
        onCancel={close}
      >
        <div className='modal__heading'>
          <h2>Deposit</h2>
          <p>NGN wallet deposit (Bank transfer with flutterwave)</p>
        </div>

        <div className='form-container'>

          <h4 className="form-section-heading">
            How much would you like to pay
          </h4>

          <form>
            <p>NGN</p>
            <input type='number' placeholder='1000' />
          </form>

          <div className='form-details'>
            <p>
              <span>Minimum Amount</span>
              <span>N2500</span>
            </p>

            <p>
              <span>
                Maximum amount <span className='icon'>?</span>
              </span>
              <span>N100,000</span>
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

export default DepositStep;

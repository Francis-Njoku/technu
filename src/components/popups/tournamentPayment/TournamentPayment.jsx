import React from "react";
import "./TournamentPayment.scss";

import { Modal, Button } from "antd";

function TournamentPayment({ showModal, close, action }) {
  return (
    <div id='match-warning'>
      <Modal
        className='blur-bg tournament-payment-modal'
        visible={showModal}
        onCancel={close}
      >
        <div className='modal__heading'>
          <h2>Join Match (Fifa 20)</h2>
          <p>Match Payment</p>
        </div>

        <div className='form-container'>

          <h4 className="form-section-heading">
            Proceed To Payment To Join Tournament
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
                Tournament fee <span className='icon'>?</span>
              </span>
              <span>N250</span>
            </p>
          </div>
        </div>

        <div className='modal___button-container'>
          <Button
            type='primary'
            className='btn_primary active'
            onClick={action}
          >
            PAY WITH WALLET
          </Button>
          <Button
            type='primary'
            className='btn_primary active'
            onClick={action}
          >
            CONTINUE TO FLUTTERWAVE
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default TournamentPayment;

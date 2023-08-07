import React from "react";
import "../Popup.scss";

import { Modal } from "antd";
import { CheckOutlined } from '@ant-design/icons';

function SuccessPopup({ showModal, action, note }) {
  return (
    <div>
      <Modal
        className='blur-bg match-warning-modal'
        visible={showModal}
        onCancel={action}
      >
        <div id='success-alert'>
          <div className='wrapper'>
            <div className='icon'>
              <CheckOutlined />
            </div>

            <div className='text'>
              <p>Payment Complete</p>
              <p>
                <b> {note} </b>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SuccessPopup;

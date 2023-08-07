import React
// , { useState } 
from "react";
import "./ConfirmStatus.scss";

import { Modal, Slider, Button, Input } from "antd";

function ConfirmStatus({ showModal, action }) {
  // const [slideValue, setSlideValue] = useState(500);
  const { TextArea } = Input;

  return (
    <div>
      <Modal visible={showModal} onCancel={action}>
        <div id="confirm-status-modal">
          <div className="heading">
            <h2>Confirm Status</h2>
            <p>Confirm game status</p>
          </div>

          <form action="">
            <div className="section">
              <h4>Update Status</h4>
              <div className="buttons">
                <Button className="btn_secondary">Lost</Button>
                <Button className="btn_primary">Won</Button>
              </div>
              <div className="input">
                <TextArea rows={6} placeholder="Feedback" />
                <p>Clearly state your experience (if any)</p>
              </div>
            </div>

            <div className="section">
              <h4>Rate your experience</h4>

              <div className="slider">
                <p>3</p>
                <Slider
                  min={3}
                  max={10}
                  // onChange={(value) => setSlideValue(value)}
                />
                <p>10</p>
              </div>
            </div>
          </form>

          <div className="footer">
            <Button type="primary" className="btn_primary" onClick={action}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ConfirmStatus;

import React from 'react'
import './JoinMatchWarning.scss'

import { Modal, Button } from "antd";

function JoinMatchWarning({showModal, setShowModal}) {

  return (
    <div id='match-warning'>
      <Modal
        className='blur-bg match-warning-modal'
        visible={showModal}
        onCancel={() => {setShowModal(false)}}
      >
        <div className="modal__heading">
          <h2>Warning!</h2>
        </div>

        <div className="modal__message">
          <p>Are you sure you want to proceed to payment withoout reading match details?</p>
        </div>

        <div className="modal___button-container">
          <Button type='primary' className='btn_primary active'>Join Now</Button>
          <Button type='primary' className='btn_primary active'>View Details</Button>
        </div>
      </Modal>
    </div>
  )
}

export default JoinMatchWarning

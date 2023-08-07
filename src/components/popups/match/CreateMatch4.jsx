import React from 'react'
import { Link } from 'react-router-dom'

import { Modal } from "antd";
import { CheckOutlined } from '@ant-design/icons';

function CreateMatch4( {action} ) {

  return (
    <Modal visible={true} onCancel={() => action(0)} className='blur-bg'>
    <div id='success-alert'>
      <div className="wrapper">
        <div className="icon">
          <CheckOutlined />
        </div>

        <div className="text">
          <p>Payment Complete</p>
          <p>Tournament successfully created <Link>View</Link></p>
        </div>
      </div>
    </div>
    </Modal>
  )
}

export default CreateMatch4

import React from "react";
import { Link } from 'react-router-dom';

import { Modal, Select, Button } from "antd";
import { InfoOutlined } from '@ant-design/icons';


const CreateTour2 = ( {action, background} ) => {
  const { Option } = Select;

  const styles = {
    background: `url('${background}')`,
    backgroundRepead: 'no-repeat',
    backgroundSize: 'cover',
    padding: '6%'
  };

  return (
    <Modal visible={true} onCancel={() => action(0)} className='dynamicImg'>
    <div id='create-tour-one' style={styles}>
      <div className='heading'>
        <h2>Create a Tournament</h2>
        <p>Continue...</p>
      </div>

      <form action=''>

        <div className='section'>
          <h4>Select Your Team</h4>

          <div className='input'>
            <Select defaultValue='lucy'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
            </Select>

            <p>Can't see a team? <Link to="/"><span>Create Now</span></Link></p>
          </div>
        </div>

        <div className='section'>
          <h4>Tournament size  <InfoOutlined /></h4>

          <div className='input'>
            <Select defaultValue='lucy'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
            </Select>
          </div>
        </div>

        <div className='section'>
          <h4>Tournament Type  <InfoOutlined /></h4>

          <div className='input'>
            <Select defaultValue='lucy'>
              <Option value='jack'>Jack</Option>
              <Option value='lucy'>Lucy</Option>
            </Select>
          </div>
        </div>

      </form>
      <div className="footer">
          <Button type='secondary' className='btn_secondary' onClick={() => action(3)}>
            Next
          </Button>
      </div>
    </div>
    </Modal>
  );
};

export default CreateTour2;

import React, { useState } from "react";

import { Modal, Slider, Select, Button, InputNumber } from "antd";
import { InfoOutlined } from "@ant-design/icons";

const CreateMatch2 = ({ action, background }) => {
  const [slideValue, setSlideValue] = useState(500);
  const { Option } = Select;

  const styles = {
    background: `url('${background}')`,
    backgroundRepead: 'no-repeat',
    backgroundSize: 'cover',
    padding: '6%'
  };

  return (

    <Modal visible={true} onCancel={() => action(0)} className='dynamicImg'>
      <div id='create-match-two' style={styles}>
        <div className='heading'>
          <h2>Create a Match</h2>
          <p>Continue...</p>
        </div>

        <form action=''>
          <div className='section'>
            <h4>Select your platform</h4>
            <div className='platforms'>
              <div>
                <img src='/assets/svg/game 3.svg' alt='playstation' />
              </div>

              <div>
                <img src='/assets/svg/game 1.svg' alt='personal computer' />
              </div>

              <div>
                <img src='/assets/svg/game 2.svg' alt='xbox' />
              </div>

              <div>
                <img src='/assets/svg/game 4.svg' alt='mobile' />
              </div>
            </div>
          </div>

          <div className='section'>
            <h4>Set your entry fee</h4>

            <div className='slider'>
              <p>₦{slideValue} </p>
              <Slider
                min={500}
                max={20000}
                onChange={(value) => setSlideValue(value)}
              />

              <InputNumber
                min={500}
                max={20000}
                style={{ margin: "0 0 0 10px" }}
                value={slideValue}
                onChange={(value) => setSlideValue(value)}
              />
            </div>
          </div>

          <div className='section'>
            <h4>
              Versus size <InfoOutlined />
            </h4>

            <div className='input'>
              <Select defaultValue='lucy'>
                <Option value='jack'>Jack</Option>
                <Option value='lucy'>Lucy</Option>
              </Select>
            </div>
          </div>

          <div className='section'>
            <h4>
              Additional Rule <InfoOutlined />
            </h4>

            <div className='input'>
              <Select defaultValue='lucy'>
                <Option value='jack'>Jack</Option>
                <Option value='lucy'>Lucy</Option>
              </Select>
            </div>
          </div>
        </form>

        <div className='footer'>
          <Button
            type='primary'
            className='btn_primary'
            onClick={() => action(3)}
          >
            Next
          </Button>
        </div>
      </div>
    </Modal>

  );
};

export default CreateMatch2;

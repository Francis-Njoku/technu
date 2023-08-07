import React from "react";
import { Link } from 'react-router-dom'
import "./TournamentTeamSelect.scss";

import { Modal, Button, Select } from "antd";
import { InfoOutlined } from '@ant-design/icons';


function TournamentTeamSelect({ showModal, close, action }) {
  const { Option } = Select;

  return (
    <div id='match-warning'>
      <Modal
        className='blur-bg tournament-teamSelect-modal'
        visible={showModal}
        onCancel={close}
      >
        <div className='modal__heading'>
          <h2>Join Tournament (Fifa 20)</h2>
          <p>Team Selection</p>
        </div>

        <div className='form-container'>
          <form>
            <div className='section'>
              <h4>
                Select Team <InfoOutlined />
              </h4>

              <div className='input'>
                <Select defaultValue='lucy'>
                  <Option value='jack'>Avengers</Option>
                  <Option value='lucy'>Wakandanz</Option>
                </Select>

                <p>Don't have a team yet? <Link to="/"><span>Create a Team</span></Link></p>
              </div>
            </div>
          </form>
        </div>

        <div className='modal___button-container'>
          <Button
            type='primary'
            className='btn_primary'
            onClick={action}
          >
            CONTINUE
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default TournamentTeamSelect;

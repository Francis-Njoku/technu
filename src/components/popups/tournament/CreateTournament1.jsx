import React from "react";

import { Button, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";

function CreateTour1({ action, setBackground }) {
  const games = [
    {
      name: "Fifa 21",
      icon: "/assets/img/fifa-long.png",
      background: "/assets/img/fifa-blur.png",
    },
    {
      name: "Game Of War",
      icon: "/assets/img/gow_long.png",
      background: "/assets/img/fifa-blur.png",
    },
    {
      name: "Fortnite",
      icon: "/assets/img/fortnite-long.png",
      background: "/assets/img/fifa-blur.png",
    },
    {
      name: "Call Of Duty",
      icon: "/assets/img/cod-long.png",
      background: "/assets/img/fifa-blur.png",
    },
    {
      name: "Fifa 21",
      icon: "/assets/img/fifa-long.png",
      background: "/assets/img/fifa-blur.png",
    },
    {
      name: "Game Of War",
      icon: "/assets/img/gow_long.png",
      background: "/assets/img/fifa-blur.png",
    },
    {
      name: "Fortnite",
      icon: "/assets/img/fortnite-long.png",
      background: "/assets/img/fifa-blur.png",
    },
    {
      name: "Call Of Duty",
      icon: "/assets/img/cod-long.png",
      background: "/assets/img/fifa-blur.png",
    },
  ];

  return (
    <Modal visible={true} onCancel={() => action(0)}>
      <div id='create-match-one'>
        <div className='heading'>
          <h2>Create Tournament</h2>
          <p>Select a game and to started</p>
        </div>

        <div className='title-bar'>
          <h4>Select a Game</h4>

          <form action=''>
            <label>
              <SearchOutlined />
              <input type='text' name='search' placeholder='Search...' />
            </label>
          </form>
        </div>

        <div className='game-box'>
          {games.map((game) => (
            <div className='game'>
              <Button className='btn_transparent' onClick={() => [action(2), setBackground(game.background)]}>
                <img src={game.icon} alt={game.name} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

export default CreateTour1;

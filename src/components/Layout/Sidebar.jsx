import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Layout } from "antd";
import MatchOne from "../popups/match/CreateMatch1";
import MatchTwo from "../popups/match/CreateMatch2";
import MatchThree from "../popups/match/CreateMatch3";
import MatchFour from "../popups/match/CreateMatch4";

import TournamentOne from "../popups/tournament/CreateTournament1";
import TournamentTwo from "../popups/tournament/CreateTournament2";
import TournamentThree from "../popups/tournament/CreateTournament3";
import TournamentFour from "../popups/tournament/CreateTournament4";
import TournamentFive from "../popups/tournament/CreateTournament5";

import ConfirmStatus from '../popups/confirmStatus/ConfirmStatus'

const Sidebar = ({ status, navMenu, activeSidebarPage }) => {
  const [activeMenu, setActiveMenu] = useState(0);
  const [matchModal, setMatchModal] = useState(0);
  const [tournamentModal, setTournamentModal] = useState(0);
  const [background, setBackground] = useState("");

  const [confirmStatusModal, setConfirmStatusModal] = useState(true)

  const { Sider } = Layout;

  useEffect(() => {
    activeSidebarPage && setActiveMenu(activeSidebarPage)
    // eslint-disable-next-line
  }, [])

  return (
    <div id={status ? "sidebar" : "collapse-sidebar"}>
      <Sider>
        <div className='logo_container'>
          {status && (
            <button className='close_menu' onClick={() => navMenu()}>
              <span className='material-icons'>close</span>
            </button>
          )}

          <div className='logo'>
            <a href='/'>
              <img src='/assets/img/playarone.png' alt='playarone logo' />
            </a>
          </div>
        </div>

        <div className='menu_group menu_group_one'>
          <h4>Browse</h4>

          <ul>
            <li className={activeMenu === 1 ? "selected" : ""}>
              <button
                onClick={() => {
                  setActiveMenu(1);
                  setMatchModal(1);
                }}
              >
                <img src='/assets/svg/ico-menu-buzz.svg' alt='Station icon' />
                <p>
                  CREATE A MATCH
                  <small>Create a match and compete</small>
                </p>
              </button>
            </li>

            <li className={activeMenu === 2 ? "selected" : ""}>
              <button
                onClick={() => {
                  setActiveMenu(2);
                  setTournamentModal(1);
                }}
              >
                <img
                  src='/assets/svg/ico-menu-compass.svg'
                  alt='Station icon'
                />
                <p>
                  JOIN A TOURNAMENT
                  <small>Browse our upcoming tournaments</small>
                </p>
              </button>
            </li>

            <li className={activeMenu === 3 ? "selected" : ""}>
              <button onClick={() => setActiveMenu(3)}>
                <img
                  src='/assets/svg/ico-menu-stations.svg'
                  alt='Station icon'
                />
                <p>
                  CREATE A TEAM
                  <small>Create a team and invite players</small>
                </p>
              </button>
            </li>

            <li className={activeMenu === 4 ? "selected" : ""}>
              <button onClick={() => setActiveMenu(4)}>
                <img src='/assets/svg/ico-menu-book.svg' alt='Station icon' />
                <Link to='/recommendations'>
                  RECOMMENDATIONS
                  <small>Join recommended matches</small>
                </Link>
              </button>
            </li>

            <li className={activeMenu === 5 ? "selected" : ""}>
              <button onClick={() => setActiveMenu(5)}>
                <img src='/assets/svg/ico-menu-charts.svg' alt='buzzer' />
                <Link to='/topcharts'>
                  TOP CHARTS
                  <small>View charts of top players</small>
                </Link>
              </button>
            </li>
          </ul>
        </div>

        <div className='menu_group menu_group_two'>
          <h4>My Games</h4>

          <ul>
            <li>
              <Link to='/bookmarks'>
                <img src='/assets/svg/ico-menu-bookmark.svg' alt='bookamrk' />
                <p>Bookmarks</p>
              </Link>
            </li>

            <li>
              <Link to='/messages'>
                <img src='/assets/svg/ico-menu-buzz.svg' alt='messages' />
                <p>Messages</p>
              </Link>
            </li>

            <li>
              <Link to='/leaderboard'>
                <img src='/assets/svg/ico-menu-graph.svg' alt='leaderboard' />
                <p>Leaderboard</p>
              </Link>
            </li>
          </ul>
        </div>

        <div className='menu_group'>
          <h4>Upcoming Games</h4>

          <ul>
            <li>
              <Link to='/'>
                <img src='/assets/img/gameofwar-thumb.png' alt='' />
                <p>
                  COD: Modern warfare
                  <small>2v2 | N4000 Price Pool | Best of 5*</small>
                </p>
              </Link>
            </li>

            <li>
              <Link to='/'>
                <img src='/assets/img/gameofwar-thumb.png' alt='' />
                <p>
                  Gears Of War 5
                  <small>2v2 | N4000 Price Pool | Best of 5*</small>
                </p>
              </Link>
            </li>

            <li>
              <Link to='/'>
                <img src='/assets/img/gameofwar-thumb.png' alt='' />
                <p>
                  Mortal Kombat X
                  <small>2v2 | N4000 Price Pool | Best of 5*</small>
                </p>
              </Link>
            </li>

            <li>
              <Link to='/'>
                <img src='/assets/img/gameofwar-thumb.png' alt='' />
                <p>
                  Fifa 20
                  <small>2v2 | N4000 Price Pool | Best of 5*</small>
                </p>
              </Link>
            </li>
          </ul>
          <div className='single_link'>
            <Link to='/'> View my timeline</Link>
          </div>
        </div>

        <div className='menu_group'>
          <h4>Join Us</h4>

          <div className='social_icons'>
            <Link to='/'>
              <img src='/assets/svg/fb.svg' alt='social-icon' />
            </Link>
            <Link to='/'>
              <img src='/assets/svg/twitter.svg' alt='social-icon' />
            </Link>
            <Link to='/'>
              <img src='/assets/svg/instagram.svg' alt='social-icon' />
            </Link>
            <Link to='/'>
              <img src='/assets/svg/youtube.svg' alt='social-icon' />
            </Link>
            <Link to='/'>
              <img src='/assets/svg/discord.svg' alt='social-icon' />
            </Link>
          </div>
        </div>
      </Sider>

      {matchModal === 1 && (
        <MatchOne action={setMatchModal} setBackground={setBackground} />
      )}

      {matchModal === 2 && (
        <MatchTwo action={setMatchModal} background={background} />
      )}

      {matchModal === 3 && (
        <MatchThree action={setMatchModal} />
      )}

      {matchModal === 4 && (
        <MatchFour action={setMatchModal} />
      )}


      {tournamentModal === 1 && (
        <TournamentOne action={setTournamentModal} setBackground={setBackground} />
      )}

      {tournamentModal === 2 && (
        <TournamentTwo action={setTournamentModal} background={background} />
      )}

      {tournamentModal === 3 && (
        <TournamentThree action={setTournamentModal} background={background} />
      )}

      {tournamentModal === 4 && (
        <TournamentFour action={setTournamentModal} />
      )}

      {tournamentModal === 5 && (
        <TournamentFive action={setTournamentModal} />
      )}

      {
        confirmStatusModal && <ConfirmStatus showModal={confirmStatusModal} action={() => setConfirmStatusModal(false)} />
      }
    </div>
  );
};

export default Sidebar;

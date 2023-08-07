import React from "react";
import "./Template.scss";
import Layout from "../Layout/Template";
import { Link } from "react-router-dom";

import { Button } from "antd";

function Template({ activeMenu, type, currentSideMenu, children, title = '' }) {
  return (
    <div id='profile'>
      <Layout page={0}>
        <header className='profile-header'>
          <div className='avi-container'>
            <img src='/assets/svg/profile-picture.svg' alt='avatar' />
          </div>

          <div className='wrap'>
            <div className='profile-details'>
              <h2>Djestra</h2>
              <div>
                <img src='/assets/svg/ng-flag.svg' alt='flag' />
                <p>Nigeria | Player</p>
              </div>

              <Button type='primary' className='btn_primary'>
                EDIT PROFILE
              </Button>
            </div>

            <nav>
              <ul>
                <li className={activeMenu === "1" ? "active" : ""}>
                  <Link to='/profile/overview'>Overview</Link>
                </li>
                <li className={activeMenu === "2" ? "active" : ""}>
                  <Link to='/profile/timeline'>Timeline</Link>
                </li>
                <li className={activeMenu === "3" ? "active" : ""}>
                  <Link to='/profile/teams'>Teams</Link>
                </li>
                <li className={activeMenu === "4" ? "active" : ""}>
                  <Link to='/profile/activity'>Activity</Link>
                </li>
                <li className={activeMenu === "5" ? "active" : ""}>
                  <Link to='/profile/streams'>Stream</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className='bg-fader'></div>
        </header>

        <section className='main-container'>
          {type === "sidebar" && (
            <React.Fragment>

              

              <aside>
                <h1>{title}</h1>
                <ul>
                  <li className={currentSideMenu === "1" ? "active" : ""}>
                    <Link to='#'>All</Link>
                  </li>

                  <li className={currentSideMenu === "2" ? "active" : ""}>
                    <Link to='#'>PS5 (4)</Link>
                  </li>

                  <li className={currentSideMenu === "3" ? "active" : ""}>
                    <Link to='#'>Xbox(3) </Link>
                  </li>

                  <li className={currentSideMenu === "4" ? "active" : ""}>
                    <Link to='#'>PC (2)</Link>
                  </li>

                  <li className={currentSideMenu === "5" ? "active" : ""}>
                    <Link to='#'>Mobile(1)</Link>
                  </li>

                </ul>
              </aside>

              <main>{children}</main>
            </React.Fragment>
          )}

          {type === "nosidebar" && <React.Fragment>{children}</React.Fragment>}
        </section>
      </Layout>
    </div>
  );
}

export default Template;

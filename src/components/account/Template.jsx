import React from "react";
import { Link } from "react-router-dom";
import "./Template.scss";

import Layout from "../Layout/Template";

function Template({ activeMenu, children }) {
  return (
    <div id='account'>
      <Layout page={0}>
        <div className='page-header'>
          <h1>Account</h1>
        </div>

        <div className='main-wrapper'>
          <aside>
            <ul>
              <li className={activeMenu === "1" ? "active" : ""}>
                <Link to='/account/general'>General</Link>
              </li>

              <li className={activeMenu === "2" ? "active" : ""}>
                <Link to='/account/profile'>Profile</Link>
              </li>

              <li className={activeMenu === "3" ? "active" : ""}>
                <Link to='/account/bank'>Bank Account</Link>
              </li>

              <li className={activeMenu === "4" ? "active" : ""}>
                <Link to='/account/verify'>Verification</Link>
              </li>

              <li className={activeMenu === "5" ? "active" : ""}>
                <Link to='/account/security'>Security</Link>
              </li>

              <li className={activeMenu === "6" ? "active" : ""}>
                <Link to='/account/security-questions'>Security Questions</Link>
              </li>

              <li className={activeMenu === "7" ? "active" : ""}>
                <Link to='/account/redeem-offer'>Redeem Offer</Link>
              </li>
            </ul>
          </aside>

          <main>
            {children}
          </main>
        </div>
      </Layout>
    </div>
  );
}

export default Template;

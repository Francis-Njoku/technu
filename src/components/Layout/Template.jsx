import React, { useState } from 'react'

// import Sidebar from "../../components/Layout/Sidebar";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

import './Header.scss';
// import './Sidebar.scss';
import './Footer.scss';
// import './Layout.scss'

import { Layout } from "antd";

function Template( {page, sideBarPage, children} ) {

  const { Content } = Layout;
  const [menuCollapse, setMenuCollapse] = useState(false);

  const collapseMenu = () => {
    setMenuCollapse(!menuCollapse);
  };

  return (
    <React.Fragment>
      <Layout className='main_container'>
        {/* <Sidebar status={menuCollapse} navMenu={collapseMenu} activeSidebarPage={sideBarPage} /> */}
        <Layout className='inner_container'>
          <Header navMenu={collapseMenu} currentPage={page} />
          <Content> 
            {children}
          </Content>
          <Footer />
        </Layout>   
      </Layout>   
        
    </React.Fragment>
  )
}

export default Template

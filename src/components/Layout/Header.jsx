import React
// , { useEffect, useState } 
from "react";
// import { Link
//   , useLocation 
// } from "react-router-dom";

// import { SearchOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";

function Header({ navMenu, currentPage }) {
  // let location = useLocation();

  // const { Header } = Layout;
  // const [auth, setAuth] = useState(true);
  // const [scroll, setScroll] = useState(false)

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //       let isTop = window.scrollY;
  //       if(isTop > 0){
  //         setScroll(true)
  //       }else{
  //         setScroll(false)
  //       }
  //   });

  //   window.removeEventListener('scroll', () => {
  //       let isTop = window.scrollY;
  //       if(isTop === true){
  //         setScroll(true)
  //       }else{
  //         setScroll(false)
  //       }
  //   });
  // },[location])

  const mobileMenu = (
    <Menu className='link-menu'>
      <Menu.Item key='1' icon=''>
        <a href="/">
          <div className={currentPage === 1 ? 'text-9' : 'text-8 koho-normal-mist-gray-16px'}>01. Home</div>
        </a>
      </Menu.Item>
      <Menu.Item key='2' icon=''>
        <a href="/about-us">
          <div className={currentPage === 2 ? 'text-9' : 'text-8 koho-normal-mist-gray-16px'}>02. About Us</div>
        </a>
      </Menu.Item>
      <Menu.Item key='3' icon=''>
        <a href="/services">
          <div className={currentPage === 3 ? 'text-9' : 'text-8 koho-normal-mist-gray-16px'}>03. Services</div>
        </a>
      </Menu.Item>
      <Menu.Item key='4' icon=''>
        <a href="/">
          <div className={currentPage === 4 ? 'text-9' : 'text-8 koho-normal-mist-gray-16px'}>04. Careers</div>
        </a>
      </Menu.Item>
      <Menu.Item key='5' icon=''>
        <a href="/">
          <div className={currentPage === 5 ? 'text-9' : 'text-8 koho-normal-mist-gray-16px'}>05. Blog</div>
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div id='header'>
      <div className="navbar">
        <div className="btn-container border-1px-stroke-coloura7a7a7">
          <div className="home-btn">
            <a href='/'>
              <div className="group-1">
                <div className={currentPage === 1 ? 'text-9' : 'text-8 koho-normal-mist-gray-12px'}>01.</div>
                <div className="place rozhaone-normal-island-spice-16px">Home</div>
              </div>
              {/* <div className={currentPage === 1 ? 'ellipse-1-4' : ''}></div> */}
            </a>
          </div>

          <div className="about-btn">
            <a href='/about-us'>
              <div className={currentPage === 2 ? 'text-9' : 'text-8 koho-normal-mist-gray-12px'}>02.</div>
              <div className="about-us rozhaone-normal-island-spice-16px">About Us</div>
            </a>
          </div>

          <div className="services-btn">
            <a href='/services'>
            <div className={currentPage === 3 ? 'text-9' : 'text-8 koho-normal-mist-gray-12px'}>03.</div>
              <div className="services rozhaone-normal-island-spice-16px">Services</div>
            </a>
          </div>

          <div className="careers-btn">
            <a href='/'>
              <div className={currentPage === 4 ? 'text-9' : 'text-8 koho-normal-mist-gray-12px'}>04.</div>
              <div className="careers rozhaone-normal-island-spice-16px">Careers</div>
            </a>
          </div>

          <div className="blog-btn">
            <a href='/'>
              <div className={currentPage === 5 ? 'text-9' : 'text-8 koho-normal-mist-gray-12px'}>05.</div>
              <div className="blog rozhaone-normal-island-spice-16px">Blog</div>
            </a>
          </div>

          <div class="group-12166">
            <a 
            class="enter-label-1 rozhaone-normal-gallery-16px"
            href="/">
              Contact Us
            </a>

            <Dropdown
            className="options-menu"
            overlay={mobileMenu}
            placement="bottomCenter"
            trigger={["click"]}>
                <img class="frame" src="assets/svg/menu-bar.svg" alt=""/>
            </Dropdown>
          </div>
        </div>

        <a href="/">
          <img className="tse-logo-orange4x-1" src="/assets/svg/TSE-logo.svg" alt="" />
        </a>

        <div class="group-12592 border-1px-stroke-coloura7a7a7">
          <a href="https://linkedin.com/company/teksight-edge-ltd" target="_blank" rel="noopener noreferrer">
            <img className="linkedin-1" src="assets/svg/linkedin.svg" alt="" />
          </a>
          <a href="https://instagram.com/teksightedge" target="_blank" rel="noopener noreferrer">
            <img className="group-12592-item" src="assets/svg/instagram.svg" alt="" />
          </a>
          <a href="https://twitter.com/teksightedge" target="_blank" rel="noopener noreferrer">
            <img className="group-12592-item" src="assets/svg/twitter.svg" alt="" />
          </a>
          <a href="https://facebook.com/teksight-edge-ltd-102343631920534" target="_blank" rel="noopener noreferrer">
            <img className="group-12592-item" src="assets/svg/facebook.svg" alt="" />
          </a>
        </div>
      </div>

      {/* <div className="text-filled-icon-1">
        <div className="enter-label rozhaone-normal-gallery-16px">Contact Us</div>
        <div className="frame-25-2">
          <div className="iconly-light-arrow-right-2"></div>
        </div>
      </div> */}

      {/* <Header id='main-header' className={`${scroll === false ? '' : 'header-active'}`}>
        <button className='hamburger_left' onClick={() => navMenu()}>
          <span className='material-icons'>menu</span>
        </button>

        <div className='left'>
          <form action='/search-results'>
            <label>
              <SearchOutlined />
              <input type='text' name='search' placeholder='Search...' />
            </label>
          </form>
        </div>

        <div className='right'>
          <ul>
            <li className={currentPage === 1 ? 'active' : ''}>
              <Link to='/'>
                <b>Home</b>
              </Link>
            </li>
            <li className={currentPage === 2 ? 'active' : ''}>
              <Dropdown overlay={gamesMenu} placement='bottomCenter'>
                <Button>
                  <b>Games </b> <span className="material-icons">keyboard_arrow_down </span>
                </Button>
              </Dropdown>
            </li>
            <li className={currentPage === 3 ? 'active' : ''}>
              <Link to='/browse-matches'>
                <b>Browse Matches</b>
              </Link>
            </li>
            <li className={currentPage === 4 ? 'active' : ''}>
              <Link to='/tournaments'>
                <b>Tournaments</b>
              </Link>
            </li>
          </ul>

          <div className='button_container'>
            {!auth ? (
              <React.Fragment>
                <Link to='/sign-in'>
                  <Button type='primary blue'>
                    <b>SIGN IN</b>
                  </Button>
                </Link>
                <Link to='/sign-up' style={{marginRight: '2rem' }}>
                  <Button type='primary red'>
                    <b>SIGN UP</b>
                  </Button>
                </Link>
              </React.Fragment>
            ) : (
              <div className='profile_box'>
                <div className='img_container'>
                  <Dropdown overlay={notificationMenu} placement='bottomCenter'>
                    <img src="/assets/svg/notification.svg" alt='notification' />
                  </Dropdown>
                </div>
                <Dropdown overlay={profileMenu} placement='bottomCenter'>
                  <Button>
                    <img src="/assets/img/avatar.png" alt='avatar' />
                    <div className='wrap'>
                      <b>AIMAMISA </b>
                      <span>
                        <span className='balance'>₦0.00</span> /{" "}
                        <span className='points'>0 points</span>
                      </span>
                    </div>
                    <span className="material-icons">keyboard_arrow_down </span>
                  </Button>
                </Dropdown>
              </div>
            )}
          </div>
        </div>
      </Header>

      <Header id='mobile-header'>
        <div className='left'>
          <button className='hamburger_left' onClick={() => navMenu()}>
            <span className='material-icons'>menu</span>
          </button>

          <div className='logo'>
            <img src="/assets/img/playarone.png" alt='playarone logo' />
          </div>
        </div>

        <div className='right'>
          <div className='button_container'>
            {!auth ? (
              <Link to='/sign-in'>
                <Button onClick={() => setAuth(true)} type='primary blue'>
                  <b>SIGN IN</b>
                </Button>
              </Link>
            ) : (
              <div className='profile_box'>
                <Button>
                  <SearchOutlined />
                </Button>

                <Dropdown
                  className='options-menu'
                  overlay={profileMenu}
                  placement='bottomCenter'
                >
                  <Button>
                    <img src="/assets/svg/user.svg" alt='user' />
                  </Button>
                </Dropdown>
              </div>
            )}
          </div>

          <Dropdown
            className='options-menu'
            overlay={mobileMenu}
            placement='bottomCenter'
          >
            <Button>
              <span className='material-icons'>more_vert</span>
            </Button>
          </Dropdown>
        </div>
      </Header> */}
    </div>
  );
}

export default Header;

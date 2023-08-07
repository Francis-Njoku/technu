import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./Landing.scss";
import "./Mobile_Landing.scss";

import Template from "../../components/Layout/Template";
// import MainCarousel from "../../components/sliders/Carousel";

// import GenreSlide from "../../components/sliders/GenreSlide";
// import BoxSlideOne from "../../components/sliders/BoxSlideOne";
// import BoxSlideTwo from "../../components/sliders/BoxSlideTwo";
// import BoxSlideThree from "../../components/sliders/BoxSlideThree";

const Landing = () => {

  return (
    <div id='landing'>
      <Template page={1}>
        <div className="landing-page screen">
          <div className="flex-row">
            <img className="confetti1" src="assets/svg/confetti1.svg" alt="" />

            <div className="group-container">
              <div className="group-12200">
                <div className="welcome-to-tek-sight-edge kohobt2regular">Welcome To TekSight Edge</div>
                <div className="ellipse-2"></div>
              </div>

              <div className="overlap-group-2">
                <div className="overlap-group19">
                  <div className="number">01</div>

                  <div className="that-inspire-emotions">
                    <span className="rozhaone-normal-island-spice-68px">That Inspire Emotions </span>
                    <span className="span1">.</span>
                  </div>
                  
                  <div className="group-12233">
                    <div className="we rozhaone-normal-island-spice-68px">We</div>
                    <div className="frame-103">
                      <div className="create">Create</div>
                    </div>
                    <div className="experiences rozhaone-normal-island-spice-68px">Experiences</div>
                  </div>

                  <img className="confetti6" src="assets/svg/confetti6.svg" alt="" />
                </div>

                <div className="if-youre-looking-fo kohobt2regular">
                  If you're looking for a well-rounded PR and Tech agency that goes beyond public relations, you're in the 
                  right place. Welcome to Teksight, Africa's foremost PR, Tech, Digital Communications and Data Focused 
                  agency.
                </div>
                <img className="confetti3" src="assets/svg/confetti3.svg" alt="" />
              </div>
            </div>
          </div>

          <div className="flex-col">
            <div className="flex-row-1">
              <div className="overlap-group22">
                <div class="group-12242">
                  <img class="play-1" src="assets/img/ehingbeti.png" alt="" />
                </div>
                <div className="usaid-ifes-media-mon kohobt1semibold">Ehingbeti Lagos Economic Summit</div>
              </div>

              <img className="rectangle-620" src="assets/img/SDG.png" alt="" />

              <div className="overlap-group23">
                <div className="group-12242">
                  <img className="play-1" src="assets/img/tecno_1.png" alt="" />
                </div>

                <div className="tecno-live-smart-campaign">TECNO Live Smart Campaign</div>
              </div>
            </div>

            <div className="group-12243">
              <div className="frame-26">
                <div className="frame-25 border-1px-brand-coloureea120">
                  <div className="iconly-light-arrow-right"></div>
                </div>
              </div>

              <div className="frame-25-3 border-1px-brand-coloureea120">
                <div className="iconly-light-arrow-right"></div>
              </div>
            </div>

            <div className="anniversary_section">
              <div className="overlap-group1" style={{ backgroundImage: `url("assets/svg/confetti-1.svg")` }}>
                <div className="overlap-group-3">
                  <h1 className="title">We Are Eight!</h1>
                  <img className="party_cone" src="assets/svg/party-cone.svg" alt="" />
                </div>
                
                <p className="its-been-an-amazing kohobt3regular">
                  It's been an amazing 8 years of working with amazing clients and employees, birthing incredible ideas and creating value. We are
                  extremely grateful to everyone who has been a part of our journey.
                </p>
              </div>
            </div>

            <div className="flex-row-2">
              <div className="why-they-call-us-the-pr-maestro rozhaone-normal-white-48px-2">
                <span className="rozhaone-normal-island-spice-48px">Why They Call Us The PR Maestro </span>
                <span className="rozhaone-normal-tangerine-48px">.</span>
              </div>
              <img className="confetti4" src="assets/svg/confetti4.svg" alt="" />
            </div>
          </div>

          <div className="flex-row-3">
            <img className="confetti2" src="assets/svg/confetti2.svg" alt="" />

            <div className="group-12491">
              <div className="group-12490">
                <div className="circle">
                  <div className="ellipse-container">
                    <div className="ellipse-20 border-1px-stroke-coloura7a7a7"></div>
                    <div className="ellipse-19"></div>
                  </div>
                </div>
                <div className="text-2 kohobt2regular">01.</div>
              </div>

              <div className="group-12489">
                <div className="global-recognition rozhaone-normal-island-spice-20px">Global Recognition</div>
                <p className="our-tentacles-surge kohobt3regular">
                  Our tentacles surge far and wide. We'll build, enhance, protect, and handle your brand awareness and 
                  reputation and tell it to the world.
                </p>
              </div>
            </div>

            <div className="group-12493">
              <div className="group-12492">
                <div className="traiangle">
                  <div className="polygon-container">
                    <img className="polygon-14" src="assets/svg/triangle.svg" alt="" />
                  </div>
                </div>
                <div className="text-1 kohobt2regular">02.</div>
              </div>

              <div className="group-12488">
                <div className="perfect-strategy rozhaone-normal-island-spice-20px">Perfect Strategy</div>
                <p className="although-our-values kohobt3regular">
                  Although our values are rigid, our strategies dance with time. We do not use the one-size-fits-all approach 
                  that is usually common in the PR space. We learn about your brand and develop the best strategy suitable for 
                  you.
                </p>
              </div>
            </div>

            <div className="group-459">
              <div className="ace">
                <div className="ellipse-container-1">
                  <img className="ellipse-22" src="assets/svg/ace.svg" alt="" />
                </div>
              </div>

              <div className="group-458">
                <div className="text-3 kohobt2regular">03.</div>
                <div className="group-453">
                  <div className="innovative-idea rozhaone-normal-island-spice-20px">Innovative Idea</div>
                  <p className="while-the-rest-of-th kohobt3regular">
                    While the rest of the world might be trying to think outside the box, for us at Teksight, there is no 
                    box. We scale ideas that are new, bold, effective, and that change with technological advancements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col-1">
            <div 
            className="overlap-group16" 
            style={{ 
              backgroundImage: `url("assets/img/vector-bg.png")`,
              backgroundSize: `contain`
            }}></div>

            <div className="overlap-group25">
              <div className="delivering-services-that-stand-out-1 rozhaone-normal-white-48px-2">
                <span className="rozhaone-normal-island-spice-48px">Delivering Services That<br alt="" />Stand Out</span>
                <span className="rozhaone-normal-tangerine-48px">.</span>
              </div>

              <div className="overlap-group20">
                <div className="group-488">
                  <div className="group-479">
                    <div className="polygon-container-1">
                      <img className="polygon-14" src="assets/svg/triangle.svg" alt="" />
                    </div>

                    <div className="group-478">
                      <div className="ation rozhaone-normal-island-spice-22px">Public Relations</div>
                      <p className="x-as-a kohobt3regular">
                        <span class="span0 kohobt3regular">
                          Our role as a PR agency is to help brands tell compelling stories that influence public perception of 
                          products and services. We execute this through an emotive approach backed by data insight...
                        </span>
                        <span className="span1 kohobt3regular">Read more</span>
                      </p>
                    </div>
                  </div>

                  <div className="group-487">
                    <div className="ellipse-container-8">
                      <div className="ellipse-20 border-1px-stroke-coloura7a7a7"></div>
                      <div className="ellipse-19"></div>
                    </div>

                    <div className="group-485">
                      <div className="ation rozhaone-normal-island-spice-22px">Reputation Management</div>
                      <p className="the-hallmark-to-buil kohobt3regular">
                        <span className="span0 kohobt3regular">
                          The hallmark to building reputation is consistency in the fulfilment of brand promise communicated 
                          timely. We've, over the years, helped our clients building relevance amongst their key stakeholders... 
                        </span>
                        <span className="span1 kohobt3regular">Read more</span>
                      </p>
                    </div>
                  </div>

                  <div className="group-486">
                    <div className="star-container">
                      <img className="star-6" src="assets/svg/star.svg" alt="" />
                    </div>

                    <div className="group-470">
                      <div className="ation rozhaone-normal-island-spice-22px">Media Relations</div>
                      <p className="x-as-a kohobt3regular">
                        <span className="span0 kohobt3regular">
                          We act as an intermediary between a brand and its target audience. We help brands build, manage and maintain value in the
                          market using all forms of useful and relevant media channels derived from a well-researched m... 
                        </span>
                        <span className="span1 kohobt3regular">Read more</span>
                      </p>
                    </div>
                  </div>
                </div>

                <img className="confetti7" src="assets/svg/confetti7.svg" alt="" />
                <img className="confetti8" src="assets/svg/confetti8.svg" alt="" />
              </div>

              <div className="text-filled-icon-6">
                <div className="enter-label-1 rozhaone-normal-gallery-16px">Learn More</div>
                <div className="frame-25-1 border-1px-brand-coloureea120">
                  <div className="iconly-light-arrow-right-4"></div>
                </div>
              </div>

              <Button 
              type="link"
              href="/">
                <div className="primary-default-small-button-icon-2">
                  <div className="enter-label-2 kohobt4regular">Contact Us</div>
                  <div className="iconly-light-arrow-right-5"></div>
                </div>
              </Button>
            </div>

            <div className="flex-row-4">
              <div className="overlap-group17">
                <div className="our-clients-love-us rozhaone-normal-white-48px-2">
                  <span className="rozhaone-normal-island-spice-48px">Our Clients Love Us</span>
                  <span className="rozhaone-normal-tangerine-48px">.</span>
                </div>

                <div className="group-503">
                  <img className="ellipse-40" src="assets/img/img-1.png" alt=""/>
                  <img className="ellipse" src="assets/img/img-2.png" alt=""/>
                  <div className="overlap-group-4">
                    <img className="ellipse-37" src="assets/img/img-3.png" alt=""/>
                    <img className="group-12594" src="assets/img/kevin-olumese.png" alt=""/>
                  </div>
                  <img className="ellipse" src="assets/img/img-4.png" alt=""/>
                  <img className="ellipse" src="assets/img/img-5.png" alt=""/>
                </div>

                <div className="group-container-1">
                  <div className="group-472">
                    <div className="adenike-adesanoye rozhaone-normal-island-spice-20px">Kelvin Olumesi</div>
                    <div className="product-designer-tangerine-life kohobt2regular">PR & Marketing Manager, Infinix</div>
                  </div>

                  <div className="group-12208">
                    <div className="text-4 rozhaone-normal-gray-100px">“</div>
                    <div className="overlap-group1-1">
                      <p className="lorem-ipsum-dolor-si kohobt3regular">
                        Working with Teksight Edge has been an interesting experience. The agency has been able to build 
                        the brands public perception while offering strategic support of other aspects of brand marketing. 
                        The agency is commended for their flexibility in planning and budgeting.
                      </p>
                      <div className="text-5 rozhaone-normal-gray-100px">”</div>
                    </div>
                  </div>
                </div>

                <div className="group-12244">
                  <div className="frame-26 frame-25 border-1px-brand-coloureea120">
                    <div className="iconly-light-arrow-right"></div>
                  </div>

                  <div className="frame-25-4 border-1px-brand-coloureea120">
                    <div className="iconly-light-arrow-right"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="overlap-group21">
              <div className="group-12497">
                <div className="companies-that-trust-teksight-edge rozhaone-normal-white-48px-2">
                  <span className="rozhaone-normal-island-spice-48px">Companies That Trust Teksight Edge</span>
                  <span className="rozhaone-normal-tangerine-48px">.</span>
                </div>

                <div className="group-430">
                  <div className="overlap-group-1">
                    <div className="logo rozhaone-normal-white-48px">
                      <img class="our-teksight" src="/assets/img/our-teksight/9mobile.png" alt="" />
                    </div>
                  </div>
                  <div className="overlap-group-1">
                    <img class="our-teksight" src="/assets/img/our-teksight/Adidas.png" alt="" />
                  </div>
                  <div className="overlap-group-1">
                    <img class="our-teksight" src="/assets/img/our-teksight/infinix.png" alt="" />
                  </div>
                  <div className="overlap-group-1">
                    <img class="our-teksight" src="/assets/img/our-teksight/itel.png" alt="" />
                  </div>
                </div>
              </div>

              <img className="confetti9" src="assets/svg/confetti9.svg" alt="" />
            </div>
          </div>
        </div>
      </Template>
    </div>
  );
};

export default Landing;

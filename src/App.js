import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import SignIn from './pages/auth/SignIn';
// import SignUp from './pages/auth/SignUp';
// import RecoverPassword from './pages/auth/RecoverPassword';
// import Welcome from './pages/onboarding/Welcome';
// import Verify from './pages/onboarding/VerifyAcct';
// import GenresWz from './pages/onboarding/Genres';
// import GamesWz from './pages/onboarding/Games';
// import FinishWz from './pages/onboarding/Finish';

import Landing from './pages/landing/Landing';
import AboutUs from './pages/aboutUs/AboutUs'
import Services from './pages/services/Services';
// import Careers from './pages/messages/Messages'
// import Blog from './pages/leaderboard/Leaderboard'

// import MatchOverview from './pages/matchOverview/MatchOverview'
// import MatchRules from './pages/matchRules/MatchRules'
// import MatchDetails from './pages/matchDetails/MatchDetails';

// import AcctGeneral from './pages/accountPages/general/General'
// import AcctProfile from './pages/accountPages/profile/Profile'
// import AcctSecurity from './pages/accountPages/security/Security'
// import AcctSecurityQuestions from './pages/accountPages/securityQuestions/SecurityQuestions'
// import AcctRedeemOffer from './pages/accountPages/redeemOffer/RedeemOffer'
// import AcctVerify from './pages/accountPages/verification/Verify'
// import AcctBank from './pages/accountPages/bank/Bank'

// import ProfileOverview from './pages/profilePages/overview/Overview'
// import ProfileTimeline from './pages/profilePages/timeline/Timeline'
// import ProfileTeams from './pages/profilePages/teams/Teams'
// import ProfileActivity from './pages/profilePages/activity/Activity'
// import ProfileStreams from './pages/profilePages/streams/Streams';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          {/* <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/recover-password' component={RecoverPassword} />
          <Route exact path='/verify' component={Verify} />
          <Route exact path='/welcome' component={Welcome} />
          <Route exact path='/genres-wizard' component={GenresWz} />
          <Route exact path='/games-wizard' component={GamesWz} />
          <Route exact path='/wizard-complete' component={FinishWz} /> */}

          <Route exact path='/' component={Landing} />
          <Route exact path='/about-us' component={AboutUs} />
          <Route exact path='/services' component={Services} />
          {/* <Route exact path='/careers' component={Messages} />
          <Route exact path='/Blog' component={Notifications} /> */}

          {/* <Route exact path='/match/overview' component={MatchOverview} /> 
          <Route exact path='/match/rules' component={MatchRules} />
          <Route exact path='/match/details' component={MatchDetails} />

          <Route exact path='/account/general' component={AcctGeneral} />
          <Route exact path='/account/profile' component={AcctProfile} />
          <Route exact path='/account/security' component={AcctSecurity} />
          <Route exact path='/account/security-questions' component={AcctSecurityQuestions} />
          <Route exact path='/account/redeem-offer' component={AcctRedeemOffer} />
          <Route exact path='/account/verify' component={AcctVerify} />
          <Route exact path='/account/bank' component={AcctBank} />

          <Route exact path='/profile/overview' component={ProfileOverview} />
          <Route exact path='/profile/timeline' component={ProfileTimeline} />
          <Route exact path='/profile/streams' component={ProfileStreams} />
          <Route exact path='/profile/activity' component={ProfileActivity} />
          <Route exact path='/profile/teams' component={ProfileTeams} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

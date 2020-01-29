import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';


// Constants/Styles
import * as actions from './actions';
import * as routes from './constants';
import './styles/App.css';

// Static/Stateless
import { PageLayout } from './components/PageLayout'
import { Welcome } from './components/Welcome';

// Content
// import ItemsPage from './containers/ItemsPage';
// import ItemPage from './containers/ItemPage';

class App extends Component {
  render() {

    const publicViews = (
      <React.Fragment>
        <Route exact path={routes.HOME} component={Welcome} />
        {/* <Route exact path={routes.ITEMS} component={ItemsPage} />
        <Route exact path={routes.ITEM} component={ItemPage} /> */}
      </React.Fragment>
    )

    return (
      <Router>
        <div className="App">
          <PageLayout />
          <div className="ViewContainer">
            { publicViews }
          </div>
        </div>
      </Router>
    );
  };
};

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

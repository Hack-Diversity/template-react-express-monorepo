import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// Constants/Styles
import * as actions from './actions';
import { routes } from './constants';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Static/Stateless
import { NavBar, PageLayout, Welcome } from './components';
import { ItemsList, ItemInsert, ItemUpdate } from './pages';

// Content
// import ItemsPage from './containers/ItemsPage';
// import ItemPage from './containers/ItemPage';

class App extends Component {
    render() {

        const publicViews = (
            <Switch>
                {/* <React.Fragment> */}
                <Route exact path={routes.HOME} component={Welcome} />
                <Route exact path={routes.ITEMS} component={ItemsList} />
                {/* <Route exact path={routes.ITEM} component={ItemPage} /> */}
                <Route exact path={routes.ITEM_INSERT} component={ItemInsert} />
                <Route exact path={routes.ITEM_UPDATE} component={ItemUpdate} />
                {/* </React.Fragment> */}
            </Switch>
        );

        return (
            <Router>
                <NavBar />
                <div className="app--main">
                    <PageLayout />
                    <div className="view-container">
                        {publicViews}
                    </div>
                </div>
            </Router>
        );
    };
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

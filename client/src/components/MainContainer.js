import React from "react";
import {Container} from "reactstrap";
import NavBar from "./NavBar";
import Jumbo from "./Jumbo";
import SearchBar from "./SearchBar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



export default class MainContainer extends React.Component {
    state = {
        page: 'Search',
    };
    hPChange = newPage => this.setState({page: newPage});
    render() {
        return (
            <Container>
                <NavBar cPage={this.state.page} hPChange={this.hPChange}></NavBar>
                <Jumbo />
                <Router>
                    <Switch>
                        <Route path="/search" component={SearchBar} />
                        <Route path="/" component={SearchBar} />
                    </Switch>
                </Router>
            </Container>
        );
    };
};
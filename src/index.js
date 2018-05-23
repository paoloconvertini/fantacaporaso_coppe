import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import { Panel, Grid, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MenuLaterale from "./components/MenuLaterale";
import { BrowserRouter, Route } from 'react-router-dom';
import dotenv from 'dotenv';

dotenv.config();
const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Panel>
                <Panel.Heading>
                    <Panel.Title componentClass="h1">FantaCaporaso - Gestione Coppe</Panel.Title>
                </Panel.Heading>
                    <Panel.Body>
                        <Grid>
                            <Row className="show-grid">
                                <Col xs={4} md={2}>
                                    <MenuLaterale />
                                </Col>
                                <Col xs={8} md={10}>
                                    <NavBar />
                                    <Route component={App} />
                                </Col>
                            </Row>
                        </Grid>
                    </Panel.Body>
                <Panel.Footer>copyright 2018</Panel.Footer>
            </Panel>
        </Provider>
    </BrowserRouter>
, document.getElementById('root'));

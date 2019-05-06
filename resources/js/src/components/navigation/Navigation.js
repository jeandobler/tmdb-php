import React from "react";
import {NavLink} from 'react-router-dom';

const Navigation = () => (
    <div>
        <div className="horizontal-menu">
            <nav className="navbar top-navbar col-lg-12 col-12 p-0">
                <div className="nav-top flex-grow-1">
                    <div className="container d-flex flex-row h-100 align-items-center">
                        <div
                            className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                            <NavLink className="navbar-brand brand-logo" to="/">
                                <img
                                    src="../../assets/images/logo.svg" alt="logo"/>
                            </NavLink>

                        </div>
                        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
                            <ul className="navbar-nav navbar-nav-right">
                                <li className="nav-item dropdown">
                                    <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown"
                                       href="#" data-toggle="dropdown">
                                        <i className="mdi mdi-bell-outline mx-0"></i>
                                        <span className="count"></span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                         aria-labelledby="notificationDropdown">
                                        <a className="dropdown-item">
                                            <p className="mb-0 font-weight-normal float-left">You have 4 new
                                                notifications
                                            </p>
                                            <span className="badge badge-pill badge-warning float-right">View all</span>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-success">
                                                    <i className="mdi mdi-information mx-0"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <h6 className="preview-subject font-weight-medium">Application
                                                    Error</h6>
                                                <p className="font-weight-light small-text">
                                                    Just now
                                                </p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-warning">
                                                    <i className="mdi mdi-settings mx-0"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <h6 className="preview-subject font-weight-medium">Settings</h6>
                                                <p className="font-weight-light small-text">
                                                    Private message
                                                </p>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-info">
                                                    <i className="mdi mdi-account-box mx-0"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <h6 className="preview-subject font-weight-medium">New user
                                                    registration</h6>
                                                <p className="font-weight-light small-text">
                                                    2 days ago
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </li>

                            </ul>
                            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                                    type="button" data-toggle="horizontal-menu-toggle">
                                <span className="mdi mdi-menu"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bottom-navbar">
                <div className="container">
                    <ul className="nav page-navigation">

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">
                                <i className="mdi mdi-view-dashboard-outline menu-icon"></i>
                                <span className="menu-title">Home</span>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                <i className="mdi mdi-view-dashboard-outline menu-icon"></i>
                                <span className="menu-title">Login</span>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                <i className="mdi mdi-view-dashboard-outline menu-icon"></i>
                                <span className="menu-title">Login</span>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>


        {/*<ul>*/}
        {/*    <li><NavLink to="/login">Login</NavLink></li>*/}
        {/*    <li><NavLink to="/">Main</NavLink></li>*/}
        {/*    <li><NavLink to="/logout">Logout</NavLink></li>*/}
        {/*</ul>*/}
    </div>
);


export default Navigation

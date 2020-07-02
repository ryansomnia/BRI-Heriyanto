import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        const sections = ['Home', 'DB_KB']
        const navLink = sections.map(sections => {
            return (
                <li><a href={sections}>{sections}</a></li>
            )

        });
        return (
            <nav className="header">
                <h1 className="logo">{this.props.logoTitle}</h1>
                <ul>
                    {navLink}
                </ul>
            </nav>
        );
    }
}

export default Navigation;

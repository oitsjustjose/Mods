import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavItem extends React.Component {
    render() {
        return (
            <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="nav-link active" to={this.props.to}>
                    <span>
                        {this.props.icon == null ? '' : <FontAwesomeIcon icon={this.props.icon} /> }
                        &nbsp;
                        {this.props.name}
                    </span>
                </NavLink>
            </li>
        );
    }
}
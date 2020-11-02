import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({
  icon, name, to,
}) => (
  <li className="nav-item">
    <NavLink exact className="nav-link" activeClassName="nav-link active" to={to}>
      <span>
        {icon == null ? '' : <FontAwesomeIcon icon={icon} /> }
        &nbsp;
        {name}
      </span>
    </NavLink>
  </li>
);

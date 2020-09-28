import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';


export default function Nav() {
    return (
    <div>
      <ul>
        <li>
          <Link to="/importantInfo">Important Info</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/prices">Prices</Link>
        </li>
        <li>
          <Link to="/instagram">Instagram</Link>
        </li>
      </ul>
    </div>
    )
}
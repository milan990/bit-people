import React from 'react';
import { Link } from "react-router-dom";

export const Header = (props) => (
    <header>
         <Link className="link" to="/"><h2>React Users</h2></Link>
        <button onClick={props.reload}><i className="fa fa-th-large"></i> Refresh</button>
        <button onClick={props.event}><i className="fa fa-th-large"></i>List/Grid</button>
        <Link to="/about/"> <button>About</button> </Link>

    </header>
)

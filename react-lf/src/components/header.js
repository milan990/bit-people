import React from 'react';

export const Header = (props) => (
    <header>
        <h2>React Users</h2>
        <button onClick={props.reload}><i class="fa fa-th-large"></i> Refresh</button>
        <button onClick={props.event}><i class="fa fa-th-large"></i>List/Grid</button>
        <button onClick={props.about}>About</button>

    </header>
)

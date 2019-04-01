import React from 'react';

export const Header = (props) => (
    <header>
        <h2>React Users</h2>
        <button onClick={props.event}><i class="fa fa-th-large"></i> Grid</button>
    </header>
)

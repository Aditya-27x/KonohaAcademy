import React from 'react';
import '/src/index.css';

const HeaderText = () => {
    return (
        <div id="header-text">
            <h1 className='welcome' aria-label="Welcome">
                <span aria-hidden="true">W</span>
                <span aria-hidden="true">e</span>
                <span aria-hidden="true">l</span>
                <span aria-hidden="true">c</span>
                <span aria-hidden="true">o</span>
                <span aria-hidden="true">m</span>
                <span aria-hidden="true">e</span>
            </h1>
            <h4 className='to' aria-label='to'>
                <span aria-hidden="true">t</span>
                <span aria-hidden="true">o</span>
            </h4>
            <h1 className="konoha" aria-label='Konoha'>
                <span aria-hidden="true">K</span>
                <span aria-hidden="true">O</span>
                <span aria-hidden="true">N</span>
                <span aria-hidden="true">O</span>
                <span aria-hidden="true">H</span>
                <span aria-hidden="true">A</span>
                <span aria-hidden="true">C</span>
                <span aria-hidden="true">L</span>
                <span aria-hidden="true">A</span>
                <span aria-hidden="true">S</span>
                <span aria-hidden="true">S</span>
            </h1>
        </div>
    );
};

export default HeaderText;

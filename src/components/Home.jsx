import React from 'react';
import '../css/home.css';

export default () => {
    return (
        <div className="d-flex h-100 text-center text-white" id="masthead">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
                <main>
                    <h1 className="up arrow">
                        ^
                    </h1>
                    <h1>
                        oitsjustjose's mods
                    </h1>
                    <h2>
                        A Wiki for Mods
                    </h2>
                    <h5>
                        Made with Bootstrap 5 and React
                    </h5>
                </main>
            </div>
        </div>
    );
};
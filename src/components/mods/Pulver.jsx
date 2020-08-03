import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default () => {
    return (
        <CSSTransition classNames="react-router" appear in timeout={300}>
            <div className="mb-3">
                <div className="d-flex text-center text-white generic masthead mb-5" style={{ height: `${50}vh` }}>
                    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column align-items-center justify-content-center">
                        <h1
                            style={{ fontSize: `${2}rem` }}
                            className="mc-font mb-3"
                        >
                            Pulver
                        </h1>
                        <img src="/img/pulver/dust.png" alt="" className="d-block mx-auto" width="128px"/>
                    </div>
                </div>

                <div className="fluid container">
                    <h2>About</h2>
                    <h5>Pulver adds Dusts that don't already exist for ores that have a corresponding Ingot.</h5>
                    <p>It does this solely using the Ore Dictionary. It checks to see if there exists some ore (for example, let's use copper), such as <code>copperOre</code>. Then it checks to see if an ingot (<code>copperIngot</code>) exists and makes sure that a dust (<code>copperDust</code>) does not exist. If an item satisfies these conditions, then Pulver will create a new dust and use the center pixel value of the first ingot it finds as an overlay color.</p>
                    <hr/>
                </div>

                <div className="fluid container">
                    <h2>How That's Helpful</h2>
                    <p>Many Ore Processors (for example Extra Utils' crusher) use the ore dictionary to automatically add recipes - so this will bridge that gap. If you add your own processing recipe via XML / CraftTweaker / Other, then you'll already have a dust item generated with the correct textures, OreDict names and more.</p>
                </div>
            </div>
        </CSSTransition>
    );
};
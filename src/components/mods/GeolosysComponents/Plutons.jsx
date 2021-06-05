import React from 'react';

export default () => (
  <div className="pb-5">
    <div className="fluid container pb-5">
      <h1>Plutons</h1>

      <p>
        There are many specificities to plutons and how they&apos;re implemented
        in Geolosys, and knowing them could be helpful while creating your datapack,
        {' '}
        <code>geolosys.json</code>
        , or CraftTweaker Script.
      </p>
    </div>

    <div className="fluid container pb-3">
      <h2>Types of Plutons</h2>

      <p>
        In the Geolosys configuration tool and in the Datapack, you&apos;ll see mention
        of Ore- and Stone-type plutons. There are some key differences between the two,
        which are outlined below:
      </p>
    </div>

    <div className="fluid container pb-3">
      <h3>All Pluton Types</h3>

      <p>
        All pluton types have the following attributes:
      </p>

      <ul>
        <li>
          <code>yMin/yMax</code>
          : this is a range where the pluton can be found. Any
          Y-Level above sea level will generate only in hills/mountains where the pluton&apos;s
          block matchers are located. These values can range from 0 to worldheight.
        </li>
        <li>
          <code>size</code>
          : The size variable is dependent on the type of pluton. For example, a dike pluton
          uses the derivatives of the Size variable to determine the starting radius of the dike.
        </li>
        <li>
          <code>chance</code>
          : chance is always relative to the sum of all chances - that is to say, if you have
          three plutons X, Y and Z with chances 3, 5 and 10 respectively, then X will have a 3/18
          chance of generating, Y will have a 5/18 chance and Z will have a 10/18 chance -- see the
          below graphic if that helps:

          <img
            src="/img/geolosys/generation.png"
            className="d-block m-auto w-75 py-3"
            alt=""
          />
        </li>
        <li>
          <code>dimensions</code>
          : a way to choose which dimensions a pluton can generate in. For your
          convenience you can choose to treat the list of dimensions as a whitelist
          {' '}
          <i>or</i>
          {' '}
          a blacklist, depending on which is easier!
        </li>
      </ul>
    </div>

    <div className="fluid container pb-3">
      <h3>Ore Plutons</h3>
      <p>
        Ore plutons have a different possible attributes over all plutons in general.
        To start, ore plutons all have sample blocks -- these are blocks on that
        generate on the surface of the world above a pluton to indicate that a pluton
        is in that area. Secondly, ore plutons can replace any block you specify - grass,
        stone, air, gravel? No problem! Lastly, ore plutons can generate in different shapes,
        referred to as &quot;types&quot; in the config. These types can be:
      </p>

      <div className="pb-1 w-100 d-block m-auto">
        <div className="d-flex justify-content-around align-items-center">
          <div className="w-100">
            <h4>Dense</h4>
            <p>
              This type of pluton generates in a spheroid structure:
            </p>
          </div>
          <img
            src="/img/geolosys/dense.png"
            style={{ borderRadius: '8px', width: '128px' }}
            alt=""
          />
        </div>
      </div>
      <div className="pb-1 w-100 d-block m-auto">
        <div className="d-flex justify-content-around align-items-center">
          <div className="w-100">
            <h4>Dike</h4>
            <p>
              This type of pluton generates as a pillar/column underground:
            </p>
          </div>
          <img
            src="/img/geolosys/dike.png"
            style={{ borderRadius: '8px', width: '128px' }}
            alt=""
          />
        </div>
      </div>
      <div className="pb-1 w-100 d-block m-auto">
        <div className="d-flex justify-content-around align-items-center">
          <div className="w-100">
            <h4>Sparse</h4>
            <p>
              This type of pluton spans an entire chunk, filling it with single
              blocks here and there:
            </p>
          </div>
          <img
            src="/img/geolosys/sparse.png"
            style={{ borderRadius: '8px', width: '128px' }}
            alt=""
          />
        </div>
      </div>
      <div className="pb-1 w-100 d-block m-auto">
        <div className="d-flex justify-content-around align-items-center">
          <div className="w-100">
            <h4>Layer</h4>
            <p>
              This type of pluton generates in layers (based on the size attribute):
            </p>
          </div>
          <img
            src="/img/geolosys/layer.png"
            style={{ borderRadius: '8px', width: '128px' }}
            alt=""
          />
        </div>
      </div>
      <div className="pb-1 w-100 d-block m-auto">
        <h4>Top Layer</h4>
        <p>
          This type of pluton generates in layers but on the surface instead of underground.
        </p>
      </div>
    </div>

    <div className="fluid container">
      <h3>Stone Plutons</h3>
      <p>
        Stone Plutons are essentially identical to Ore Plutons aside from the three things that
        were specified; stone plutons cannot have samples, specific block replacement matches or
        types. Stone plutons have
        {' '}
        <i>no</i>
        {' '}
        samples, take on a Dense formation and will only replace stone blocks, which cannot be
        configured or changed. Stone plutons are meant to be very basic methods of generating
        large amounts of stone of whatever type you&apos;d like!
      </p>
    </div>
  </div>
);

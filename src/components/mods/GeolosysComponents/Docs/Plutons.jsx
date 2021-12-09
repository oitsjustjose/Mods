import React from 'react';

export default () => (
  <div className="pb-5">
    <div className="fluid container pb-5">
      <h1>Plutons</h1>
      <p>
        There are many specificities to plutons and how they&apos;re implemented in Geolosys,
        and knowing them could be helpful while creating your datapack.
      </p>
    </div>

    <div className="fluid container pb-3">
      <h2>Pluton Types</h2>

      <p>
        Plutons have a different possible attributes over all plutons in general, and you can
        read about them in the Datapacks documentation. As you explore, you&apos;ll see that plutons
        can have sample blocks -- these are blocks on that generate on the surface of the world
        above a pluton to indicate that a pluton is in that area. No problem! These plutons can
        form in a few variants based on what type of resource it&apos;s made of:
      </p>
    </div>

    <div className="fluid container pb-3">
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
  </div>
);

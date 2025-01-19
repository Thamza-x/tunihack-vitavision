import React from 'react';

const SketchfabEmbed = () => {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Upper Body Anatomy"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        webShare
        src="https://sketchfab.com/models/bd4aa30efaa0455eaf3b4d59e9fe9c65/embed"
      ></iframe>
      <p
        style={{
          fontSize: '13px',
          fontWeight: 'normal',
          margin: '5px',
          color: '#4A4A4A',
        }}
      >
        <a
          href="https://sketchfab.com/3d-models/upper-body-anatomy-bd4aa30efaa0455eaf3b4d59e9fe9c65?utm_medium=embed&utm_campaign=share-popup&utm_content=bd4aa30efaa0455eaf3b4d59e9fe9c65"
          target="_blank"
          rel="nofollow"
          style={{
            fontWeight: 'bold',
            color: '#1CAAD9',
          }}
        >
          Upper Body Anatomy
        </a>{' '}
        by{' '}
        <a
          href="https://sketchfab.com/580000158?utm_medium=embed&utm_campaign=share-popup&utm_content=bd4aa30efaa0455eaf3b4d59e9fe9c65"
          target="_blank"
          rel="nofollow"
          style={{
            fontWeight: 'bold',
            color: '#1CAAD9',
          }}
        >
          580000158
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=bd4aa30efaa0455eaf3b4d59e9fe9c65"
          target="_blank"
          rel="nofollow"
          style={{
            fontWeight: 'bold',
            color: '#1CAAD9',
          }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabEmbed;

import React from "react";

const SketchfabModel = () => {
  return (
    <div
      className="sketchfab-embed-wrapper"
      style={{ width: "100%", height: "500px" }}
    >
      <iframe
        title="纏 流子 Matoi Ryuuko, from Kill La Kill (キルラキル)"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
        web-share
        src="https://sketchfab.com/models/05134f606fcd44a5ba7e3eb0930c0848/embed?autospin=1&autostart=1&preload=1&transparent=1"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
      <p
        style={{
          fontSize: "13px",
          fontWeight: "normal",
          margin: "5px",
          color: "#4A4A4A",
        }}
      >
        <a
          href="https://sketchfab.com/3d-models/matoi-ryuuko-from-kill-la-kill-05134f606fcd44a5ba7e3eb0930c0848?utm_medium=embed&utm_campaign=share-popup&utm_content=05134f606fcd44a5ba7e3eb0930c0848"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          纏 流子 Matoi Ryuuko, from Kill La Kill (キルラキル)
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/chambersu1996?utm_medium=embed&utm_campaign=share-popup&utm_content=05134f606fcd44a5ba7e3eb0930c0848"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          ChamberSu1996
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=05134f606fcd44a5ba7e3eb0930c0848"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
};

export default SketchfabModel;

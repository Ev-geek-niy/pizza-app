import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="pizza-block"
  >
    <circle cx="142" cy="120" r="120" />
    <rect x="0" y="260" rx="20" ry="20" width="280" height="28" />
    <rect x="0" y="305" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="418" rx="20" ry="20" width="103" height="28" />
    <rect x="160" y="406" rx="31" ry="31" width="118" height="45" />
  </ContentLoader>
);

export default Skeleton;

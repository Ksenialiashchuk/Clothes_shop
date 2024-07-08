import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={290}
    height={340}
    viewBox="0 0 290 340"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="1" rx="0" ry="0" width="290" height="231" />
    <rect x="80" y="371" rx="10" ry="10" width="95" height="30" />
    <rect x="7" y="251" rx="0" ry="0" width="279" height="28" />
    <rect x="51" y="296" rx="0" ry="0" width="180" height="22" />
  </ContentLoader>
);

export default Skeleton;

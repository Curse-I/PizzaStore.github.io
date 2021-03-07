import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="287" rx="4" ry="4" width="280" height="26" />
      <rect x="0" y="324" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="415" rx="3" ry="3" width="90" height="30" />
      <circle cx="140" cy="140" r="130" />
      <rect x="189" y="415" rx="10" ry="10" width="90" height="35" />
    </ContentLoader>
  );
}

export default LoadingBlock;

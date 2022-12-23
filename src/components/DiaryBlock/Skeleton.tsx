import ContentLoader from 'react-content-loader';

export const Skeleton = () => {
  return (
    <div className="diary-block">
      <ContentLoader
        speed={2}
        width={280}
        height={474}
        viewBox="0 0 280 474"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width="233" height="291" />
        <rect x="0" y="306" rx="0" ry="0" width="233" height="31" />
        <rect x="0" y="346" rx="0" ry="0" width="233" height="35" />
        <rect x="0" y="390" rx="0" ry="0" width="233" height="35" />
        <rect x="133" y="436" rx="0" ry="0" width="100" height="47" />
        <rect x="0" y="436" rx="0" ry="0" width="60" height="47" />
      </ContentLoader>
    </div>
  );
};

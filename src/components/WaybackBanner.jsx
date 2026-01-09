import React from "react";

const WaybackBanner = ({ data }) => {
  return (
    <>
      <style>{`
        .wayback-banner {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          border-bottom: 3px solid #0f3460;
          padding: 12px 20px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }
        .wayback-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .wayback-title {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #e94560 !important;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none !important;
        }
        .wayback-title:hover {
          color: #ff6b6b !important;
        }
        .wayback-icon {
          font-size: 20px;
        }
        .wayback-versions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .wayback-version {
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          text-decoration: none !important;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .wayback-version.other {
          background: rgba(255,255,255,0.1);
          color: #a0a0a0 !important;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .wayback-version.other:hover {
          background: rgba(255,255,255,0.2);
          color: #ffffff !important;
        }
        .wayback-version.current {
          background: #e94560;
          color: #ffffff !important;
          border: 1px solid #e94560;
        }
        @media screen and (max-width: 640px) {
          .wayback-banner {
            padding: 10px 15px;
          }
          .wayback-content {
            justify-content: center;
          }
          .wayback-title-text {
            display: none;
          }
        }
      `}</style>
      <div className="wayback-banner">
        <div className="wayback-content">
          <span className="wayback-title">
            <span className="wayback-icon">⏳</span>
            <span className="wayback-title-text">Portfolio Archive</span>
          </span>
          <div className="wayback-versions">
            {data.portfolioHistory.map((version, index) => (
              <a
                key={version.id}
                href={version.previewUrl || "#"}
                className={`wayback-version ${index === 0 ? "current" : "other"}`}
                onClick={index === 0 ? (e) => e.preventDefault() : undefined}
              >
                {version.date}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WaybackBanner;

import React from 'react';

const UrlInfo = ({ urlData }) => {
  if (!urlData) return null;

  return (
    <div className="url-info">
      <p><strong>Short URL:</strong> <a href={urlData.shortUrl}>{urlData.shortUrl}</a></p>
      <p><strong>Expiry Date:</strong> {urlData.expiryDate}</p>
      <p><strong>Times Used:</strong> {urlData.timesUsed}</p>
      <p><strong>Timestamp:</strong> {urlData.timestamp}</p>
      <p><strong>Source:</strong> {urlData.source}</p>
      <p><strong>Location:</strong> {urlData.location}</p>
    </div>
  );
};

export default UrlInfo;


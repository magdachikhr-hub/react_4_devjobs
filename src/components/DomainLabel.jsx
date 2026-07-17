import React from "react";

function DomainLabel({ url }) {
  const extractDomain = (url) => {
    const match = url.match(/\/([^/]+)\/?$/);
    return match ? `${match[1]}.com` : url;
  };

  return <span>{extractDomain(url)}</span>;
}

export default DomainLabel;

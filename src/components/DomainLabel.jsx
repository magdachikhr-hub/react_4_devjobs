import React from "react";

function DomainLabel({ url }) {
  const extractDomain = (url) => {
    const match = url.match(/\/([^/]+)\/?$/);
    return match ? `${match[1]}.com` : url;
  };

  return <span className="text-[#6E8098]">{extractDomain(url)}</span>;
}

export default DomainLabel;

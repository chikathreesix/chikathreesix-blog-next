import React from "react";

const EmbedPreview = ({ code }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: code }} />
  );
};

export default EmbedPreview;

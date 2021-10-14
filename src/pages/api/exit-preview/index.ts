/* eslint-disable import/no-anonymous-default-export */
export default async (_, res) => {
    res.clearPreviewData();
  
    res.writeHead(307, { Location: "/" });
    res.end();
  };
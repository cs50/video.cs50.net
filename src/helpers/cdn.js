// Extract CDN path from widow url or default 
export const cdnEpisodefromUrl = () =>
  window.location.pathname === '/' ?
    '/2016/fall/lectures/0' :
    window.location.pathname.replace(/\/$/, '');

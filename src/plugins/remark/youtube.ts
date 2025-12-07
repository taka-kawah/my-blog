import { type Transformer } from "@remark-embedder/core";

const urlPattern =
  /(?=(\s*))\1(?:<a [^>]*?>)??(?=(\s*))\2(?:https?:\/\/)??(?:w{3}\.)??(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|shorts\/)??([A-Za-z0-9-_]{11})(?:[^\s<>]*)(?=(\s*))\4(?:<\/a>)??(?=(\s*))\5/;

function extractVideoId(url: string): string | undefined {
  const match = url.match(urlPattern);
  return match?.[3];
}

export const YoutubeTransformer: Transformer = {
  name: "youtube",
  shouldTransform(url) {
    return url.match(urlPattern) !== null;
  },
  getHTML(url, _config) {
    const videoId = extractVideoId(url);
    const iframeUrl = `https://www.youtube.com/embed/${videoId}`;
    return `<div style="position: relative; padding-bottom: 56.25%"><iframe src="${iframeUrl}" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; border: 0"></iframe></div>`;
  },
};

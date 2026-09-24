import { useId, useRef, useState } from 'react';

type Props = {
  title: string;
  summary?: string;
  posterSrc?: string;
  videoSrc?: string;
  transcriptHref?: string;
  fund?: 'training' | 'health' | 'retirement' | 'legal';
};

export function VideoFeature({
  title,
  summary,
  posterSrc,
  videoSrc,
  transcriptHref,
  fund = 'training'
}: Props) {
  const titleId = useId();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function play() {
    try { await videoRef.current?.play(); } catch { setPlaying(false); }
  }

  return (
    <article className={`ds-video ds-video--${fund}`} aria-labelledby={titleId} data-figma-node="930:5567">
      <h2 id={titleId}>{title}</h2>
      {summary && <p className="ds-video__summary">{summary}</p>}
      <div className="ds-video__player">
        {videoSrc ? (
          <video ref={videoRef} poster={posterSrc} controls={playing} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} aria-label={title}>
            <source src={videoSrc} />
            Your browser does not support video playback.
          </video>
        ) : posterSrc ? <img src={posterSrc} alt="" /> : <span className="ds-video__placeholder">Video poster goes here</span>}
        {videoSrc && !playing && (
          <button type="button" className="ds-video__play" onClick={play} aria-label={`Play ${title}`}>
            <span aria-hidden="true">▶</span>
          </button>
        )}
      </div>
      {transcriptHref && <a className="ds-video__transcript" href={transcriptHref}>Read transcript</a>}
    </article>
  );
}

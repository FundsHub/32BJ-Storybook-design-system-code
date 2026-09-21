import { useId, useState } from 'react';

type Props = {
  title: string;
  summary?: string;
  duration?: string;
  transcriptHref?: string;
  hasCaptions?: boolean;
};

export function VideoFeature({
  title,
  summary,
  duration = '2:30',
  transcriptHref = '#transcript',
  hasCaptions = true
}: Props) {
  const [playing, setPlaying] = useState(false);
  const titleId = useId();

  return (
    <article className="ds-video" aria-labelledby={titleId}>
      <div className="ds-video__player" data-playing={playing}>
        <span className="ds-video__brand" aria-hidden="true">32BJ Funds</span>
        <button type="button" aria-pressed={playing} onClick={() => setPlaying((value) => !value)}>
          <span aria-hidden="true">{playing ? 'Ⅱ' : '▶'}</span>
          {playing ? 'Pause video' : 'Play video'}
        </button>
        <span className="ds-video__duration">{duration}</span>
      </div>
      <div className="ds-video__copy">
        <div className="ds-video__meta">
          <span>Video</span>
          {hasCaptions && <span>CC</span>}
        </div>
        <h2 id={titleId}>{title}</h2>
        {summary && <p>{summary}</p>}
        <a href={transcriptHref}>Read transcript</a>
      </div>
    </article>
  );
}

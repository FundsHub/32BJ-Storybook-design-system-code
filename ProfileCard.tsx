import type { ReactNode } from 'react';

type Props = {
  name: string;
  role: string;
  bio?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  figmaNode?: string;

  group?: string;
  profileHref?: string;
};

export function ProfileCard({
  name,
  role,
  bio,
  imageSrc,
  imageAlt = '',
  figmaNode
}: Props) {
  const initials = name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <article
      className="ds-profile"
      data-figma-node={figmaNode}
    >
      <div className="ds-profile__image">
        {imageSrc ? (
          <img src={imageSrc} alt={imageAlt} />
        ) : (
          <span aria-hidden="true">{initials}</span>
        )}
      </div>

      <div className="ds-profile__copy">
        <h2>{name}</h2>

        <p className="ds-profile__role">
          {role}
        </p>

        {bio && (
          <div className="ds-profile__bio">
            {typeof bio === 'string' ? <p>{bio}</p> : bio}
          </div>
        )}
      </div>
    </article>
  );
}

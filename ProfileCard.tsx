type Props = {
  name: string;
  role: string;
  group?: string;
  bio?: string;
  imageSrc?: string;
  profileHref?: string;
};

export function ProfileCard({ name, role, group, bio, imageSrc, profileHref = '#profile' }: Props) {
  const initials = name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('');

  return (
    <article className="ds-profile">
      <div className="ds-profile__image">
        {imageSrc ? <img src={imageSrc} alt="" /> : <span aria-hidden="true">{initials}</span>}
      </div>
      <div className="ds-profile__copy">
        {group && <p className="ds-profile__group">{group}</p>}
        <h2>{name}</h2>
        <p className="ds-profile__role">{role}</p>
        {bio && <p className="ds-profile__bio">{bio}</p>}
        <a href={profileHref} aria-label={`Read ${name}'s profile`}>View profile <span aria-hidden="true">→</span></a>
      </div>
    </article>
  );
}

import Link from "next/link";

interface GitHubIconProps {
  size?: number;
  className?: string;
}

interface LinkedInIconProps {
  size?: number;
  className?: string;
}

interface MailIconProps {
  size?: number;
  className?: string;
}

function GitHubIcon({ size = 18, className = "" }: GitHubIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10,0 C4.477,0 0,4.484 0,10.017 C0,14.425 2.865,18.18 6.839,19.49 C7.339,19.581 7.521,19.272 7.521,19.006 C7.521,18.722 7.512,17.988 7.507,17.192 C4.726,17.69 4.139,15.97 4.139,15.97 C3.685,14.83 3.029,14.5 3.029,14.5 C2.121,13.88 3.097,13.895 3.097,13.895 C4.101,13.965 4.629,14.93 4.629,14.93 C5.521,16.367 6.97,15.937 7.539,15.737 C7.631,15.134 7.889,14.771 8.175,14.577 C5.954,14.329 3.62,13.448 3.62,9.582 C3.62,8.469 4.01,7.577 4.649,6.894 C4.546,6.602 4.203,5.567 4.747,4.18 C4.747,4.18 5.586,3.905 7.496,5.207 C8.295,4.98 9.15,4.866 10,4.862 C10.85,4.866 11.705,4.98 12.504,5.207 C14.414,3.905 15.253,4.18 15.253,4.18 C15.797,5.567 15.454,6.602 15.351,6.894 C15.99,7.577 16.38,8.469 16.38,9.582 C16.38,13.455 14.041,14.33 11.817,14.576 C12.172,14.833 12.482,15.397 12.482,16.279 C12.482,17.559 12.469,18.524 12.469,19.006 C12.469,19.27 12.649,19.577 13.155,19.481 C17.135,18.175 20,14.421 20,10.017 C20,4.484 15.522,0 10,0"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon({ size = 18, className = "" }: LinkedInIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="18" height="18" rx="6" ry="6" fill="#0d0d0d" />
      <path
        d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon({ size = 24, className = "" }: MailIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M2.12015 6.20855C2.07321 6.40572 2.04691 6.60508 2.03057 6.80497C1.99997 7.17953 1.99998 7.63426 2 8.16138V15.8385C1.99998 16.3657 1.99997 16.8205 2.03057 17.195C2.06287 17.5904 2.13419 17.9836 2.32698 18.362C2.6146 18.9265 3.07355 19.3854 3.63803 19.673C4.01641 19.8658 4.40963 19.9371 4.80498 19.9694C5.17951 20 5.63422 20 6.16129 20H17.8385C18.3656 20 18.8205 20 19.195 19.9694C19.5904 19.9371 19.9836 19.8658 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C21.8658 17.9836 21.9371 17.5904 21.9694 17.195C22 16.8205 22 16.3657 22 15.8386V8.16144C22 7.6343 22 7.17954 21.9694 6.80497C21.9531 6.60507 21.9268 6.40572 21.8799 6.20855L13.8997 12.7378C12.7946 13.6419 11.2054 13.6419 10.1003 12.7378L2.12015 6.20855Z"></path>
      <path d="M20.7406 4.55656C20.6207 4.47119 20.4943 4.39438 20.362 4.32698C19.9836 4.13419 19.5904 4.06287 19.195 4.03057C18.8205 3.99997 18.3657 3.99998 17.8386 4H6.16146C5.63434 3.99998 5.17953 3.99997 4.80498 4.03057C4.40963 4.06287 4.01641 4.13419 3.63803 4.32698C3.50575 4.39438 3.37927 4.47119 3.25943 4.55656L11.3668 11.1898C11.7351 11.4912 12.2649 11.4912 12.6332 11.1898L20.7406 4.55656Z"></path>
    </svg>
  );
}

export function Socials() {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/felipe-min/",
      icon: LinkedInIcon,
      iconSize: 18,
    },
    {
      name: "GitHub",
      url: "https://github.com/xxfmin",
      icon: GitHubIcon,
      iconSize: 18,
    },
    {
      name: "Mail",
      url: "mailto:felipemin03@gmail.com",
      icon: MailIcon,
      iconSize: 20,
    },
  ];

  return (
    <div className="flex flex-row gap-3 items-center">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        const isMail = social.name === "Mail";
        return (
          <Link
            key={social.name}
            href={social.url}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
            className="flex items-center gap-3 rounded-full text-sm font-medium text-muted/70 hover:text-muted transition-colors duration-300"
          >
            <IconComponent size={social.iconSize} />
          </Link>
        );
      })}
    </div>
  );
}

// Renders the page from the SOCIAL_LINKS config in links.js.
// You shouldn't need to touch this file — just edit links.js.

const ICONS = {
  youtube: `<svg class="tag__icon" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z"/></svg>`,
  twitch: `<svg class="tag__icon" viewBox="0 0 24 24"><path d="M4.3 2 2 6.9v13.4h5.1V23l3.4-2.7h4.3L21.4 14V2H4.3Zm15.1 11.1-3.4 3.4h-4.3l-3 3v-3H5.7V4h13.7v9.1Z"/><path d="M16.6 6.9h1.7v5.1h-1.7zM11.7 6.9h1.7v5.1h-1.7z"/></svg>`,
  instagram: `<svg class="tag__icon" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5a4.8 4.8 0 0 1 1.8 1.1 4.8 4.8 0 0 1 1.1 1.8c.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4a4.8 4.8 0 0 1-1.1 1.8 4.8 4.8 0 0 1-1.8 1.1c-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5a4.8 4.8 0 0 1-1.8-1.1 4.8 4.8 0 0 1-1.1-1.8c-.2-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4a4.8 4.8 0 0 1 1.1-1.8 4.8 4.8 0 0 1 1.8-1.1c.4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2Zm0 3a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm5-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z"/></svg>`,
  discord: `<svg class="tag__icon" viewBox="0 0 24 24"><path d="M20.3 5.4A18 18 0 0 0 15.8 4l-.3.5a12.6 12.6 0 0 1 3.9 1.5 15 15 0 0 0-14.9 0A12.9 12.9 0 0 1 8.4 4.5L8.2 4a18 18 0 0 0-4.5 1.4C1 9.6.3 13.6.6 17.5A15 15 0 0 0 5.2 20l.9-1.3a9.6 9.6 0 0 1-1.9-.9l.5-.4a13.6 13.6 0 0 0 10.6 0l.5.4a9.6 9.6 0 0 1-1.9.9l.9 1.3a15 15 0 0 0 4.6-2.5c.4-4.6-.5-8.6-2.1-12.1ZM8.7 15.2c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.6 1.7-1.5 1.7Zm6.5 0c-.8 0-1.5-.8-1.5-1.7 0-1 .6-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .9-.6 1.7-1.5 1.7Z"/></svg>`
};

const LABELS = {
  youtube: "YouTube",
  twitch: "Twitch",
  instagram: "Instagram",
  discord: "Discord"
};

function render() {
  const nameEl = document.getElementById('name');
  const taglineEl = document.getElementById('tagline');
  const tagsEl = document.getElementById('tags');

  nameEl.textContent = SOCIAL_LINKS.displayName || '';
  taglineEl.textContent = SOCIAL_LINKS.tagline || '';

  const platforms = ['youtube', 'twitch', 'instagram', 'discord'];

  platforms.forEach((key) => {
    const url = SOCIAL_LINKS[key];
    if (!url) return; // skip anything left blank

    const a = document.createElement('a');
    a.className = 'tag';
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = `${ICONS[key]}<span class="tag__label">${LABELS[key]}</span><span class="tag__arrow">↗</span>`;
    tagsEl.appendChild(a);
  });
}

render();

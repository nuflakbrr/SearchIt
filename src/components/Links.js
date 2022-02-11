import React from 'react';
import { Link } from 'react-router-dom';

const linked = [
  { url: '/search', text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4">
    {linked.map(({ url, text }) => (
      <Link to={url} className="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{text}</Link>
    ))}
  </div>
);
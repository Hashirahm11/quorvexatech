import { useEffect } from 'react';
import siteConfig from '../config/siteConfig';

/** Sets the document title and meta description for the current page. */
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | Web Development & Digital Solutions`;

    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description || siteConfig.description);
  }, [title, description]);
}

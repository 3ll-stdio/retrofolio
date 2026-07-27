import { marked, Renderer } from "marked";
import DOMPurify, { type Config } from "dompurify";

const SAFE_URL_SCHEME = /^(https?:|mailto:|tel:|\/|\.\/|\.\.\/|#)/i;
const EXTERNAL_HREF = /^(https?:)?\/\//i;

const escapeAttr = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const renderer = new Renderer();

renderer.link = function ({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens);
  const safeHref = href?.trim() ?? "";

  if (!safeHref || !SAFE_URL_SCHEME.test(safeHref)) {
    return text;
  }

  const parts = [`href="${escapeAttr(safeHref)}"`];

  if (title) {
    parts.push(`title="${escapeAttr(title)}"`);
  }

  if (EXTERNAL_HREF.test(safeHref)) {
    parts.push('target="_blank"', 'rel="noopener noreferrer"');
  }

  return `<a ${parts.join(" ")}>${text}</a>`;
};

marked.setOptions({
  gfm: true,
  breaks: false,
  pedantic: false,
  renderer,
});

const PURIFY_CONFIG: Config = {
  USE_PROFILES: { html: true },
  ADD_ATTR: ["target"],
  ALLOWED_URI_REGEXP:
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  RETURN_TRUSTED_TYPE: false,
};

export const renderMarkdown = (source: string): string => {
  if (!source.trim()) {
    return "";
  }

  const html = marked.parse(source, { async: false }) as string;
  return DOMPurify.sanitize(html, PURIFY_CONFIG);
};

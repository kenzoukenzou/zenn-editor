import cheerio from 'cheerio';
import { katexClassName } from './constants';
import { isTweetUrl } from './url-matcher';
import { generateTweetHtml } from './helper';

type cheerioProcesser = (cheerioRoot: cheerio.Root) => void;

function generateCardHtml(url: string) {
  return `<div class="embed-zenn-link"><iframe src="https://asia-northeast1-zenn-dev-production.cloudfunctions.net/iframeLinkCard?url=${encodeURIComponent(
    url
  )}" frameborder="0" scrolling="no" loading="lazy"></iframe></div>`;
}

const linkToEmbed: cheerioProcesser = function ($) {
  $('body > p > .linkified').each(function (this: cheerio.Element) {
    // 直前にテキストが存在する場合は変換しない
    const isPrevAnyText =
      $(this).get(0)?.previousSibling?.type === 'text' &&
      $(this).get(0).previousSibling.data !== '\n';
    if (isPrevAnyText) return;

    // 直後にテキストが存在する場合は変換しない
    const isNextAnyText = $(this).get(0)?.nextSibling?.type === 'text';
    if (isNextAnyText) return;

    // 前に要素がない
    const isPrevNoElement = !$(this).prev().get(0);

    // 直前・直後にbrタグ
    const isPrevBr = $(this).prev().get(0)?.tagName === 'br';
    const isNextBr = $(this).next().get(0)?.tagName === 'br';

    const isPrevEmpty = isPrevNoElement || isPrevBr;

    if (!isPrevEmpty) return;

    const url = $(this).attr('href');
    if (!url) return;

    // 前後のbrタグはスペースを広げすぎてしまうため非表示に
    if (isPrevBr) {
      $(this).prev('br').attr({ style: 'display: none' });
    }
    if (isNextBr) {
      $(this).next('br').attr({ style: 'display: none' });
    }

    let replacedHtml = '';
    if (isTweetUrl(url)) {
      replacedHtml = generateTweetHtml(url);
    } else {
      replacedHtml = generateCardHtml(url);
    }
    return $(this).replaceWith(replacedHtml);
  });
};

function checkIsKatex(text: string) {
  return text.indexOf(katexClassName) !== -1; // fastest way...?
}

export function processHtml(html: string) {
  if (!html || html.length < 5) return html;

  const isKatex = checkIsKatex(html);

  const $ = cheerio.load(html);
  linkToEmbed($);

  /**
   * cheerioで自動でhtmlとbodyが付与されてしまうため、除く
   * - ref: https://github.com/cheeriojs/cheerio/issues/1031
   * - workaround: https://zenn.dev/catnose99/articles/76d77ac4a352d3
   */
  let processedHtml = $(`body`).html() || '';

  /**
   * katex記法が存在するときのみstylesheetを読みこむ
   */
  if (isKatex) {
    processedHtml = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css"/>${processedHtml}`;
  }
  return processedHtml;
}

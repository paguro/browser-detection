import $ from './helpers';
import { detectEdge } from './desktop/edge';
import { detectFirefox } from './desktop/firefox';
import { detectChrome } from './desktop/chrome';
import { detectInternetExplorer } from './desktop/ie';
import { detectOpera } from './desktop/opera';
import { detectSafari } from './desktop/safari';
import { detectBrave } from './desktop/brave';

export default function BrowserDetection() {
  return (
    detectBrave() ||
    detectEdge() ||
    detectInternetExplorer() ||
    detectFirefox() ||
    detectOpera() ||
    detectSafari() ||
    detectChrome()
  );
}

BrowserDetection.helpers = $;

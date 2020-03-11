import $ from './helpers';
import { detectChromium } from './desktop/chromium';
import { detectBrave } from './desktop/brave';
import { detectEdge } from './desktop/edge';
import { detectInternetExplorer } from './desktop/ie';
import { detectFirefox } from './desktop/firefox';
import { detectOpera } from './desktop/opera';
import { detectSafari } from './desktop/safari';
import { detectChrome } from './desktop/chrome';

export default function BrowserDetection() {
  return (
    detectOpera() ||
    detectBrave() ||
    detectEdge() ||
    detectInternetExplorer() ||
    detectFirefox() ||
    detectSafari() ||
    detectChromium() ||
    detectChrome()
  );
}

BrowserDetection.helpers = $;

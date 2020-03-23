import $ from './helpers';
import { detectChromium } from './desktop/chromium';
import { detectBrave } from './desktop/brave';
import { detectEdge } from './desktop/edge';
import { detectInternetExplorer } from './desktop/ie';
import { detectFirefox } from './desktop/firefox';
import { detectOpera } from './desktop/opera';
import { detectSafari } from './desktop/safari';
import { detectChrome } from './desktop/chrome';
import { detectChromeMobile } from './mobile/chrome-mobile';
import { detectEdgeMobile } from './mobile/edge-mobile';
import { detectFirefoxMobile } from './mobile/firefox-mobile';

export default function BrowserDetection() {
  return (
    ($.isMobile() && detectEdgeMobile()) ||
    ($.isMobile() && detectFirefoxMobile()) ||
    ($.isMobile() && detectChromeMobile()) ||
    detectOpera() ||
    detectBrave() ||
    detectEdge() ||
    detectInternetExplorer() ||
    detectFirefox() ||
    detectSafari() ||
    detectChrome() ||
    detectChromium()
  );
}

BrowserDetection.helpers = $;

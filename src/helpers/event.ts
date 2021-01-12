import { IS_DEV } from 'constants/common';

export function sendEvent(eventName: string, eventParams?: Record<string, unknown>): void {
  if (!IS_DEV && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

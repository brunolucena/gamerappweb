import firebase from 'firebase/app';
import { EventParams, EventsAllProperties } from './models';

export function logEvent(
  eventName: EventsAllProperties | string,
  eventParams?: {
    coupon?: EventParams['coupon'];
    currency?: EventParams['currency'];
    items?: EventParams['items'];
    // regra de camelcase desabilitada porque essas propriedades são da biblioteca do firebase
    payment_type?: EventParams['payment_type']; // eslint-disable-line camelcase
    value?: EventParams['value'];
    [key: string]: any;
  },
  options?: firebase.analytics.AnalyticsCallOptions,
) {
  firebase.analytics().logEvent(eventName, eventParams, options);
}

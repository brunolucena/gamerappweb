// referencia: https://support.google.com/firebase/answer/9267735?hl=en&ref_topic=6317484&visit_id=637446900746260993-1379061375&rd=1

/**
 * Standard gtag.js event parameters.
 * For more information, see
 * {@link https://developers.google.com/gtagjs/reference/parameter
 * the gtag.js documentation on parameters}.
 */
export interface EventParams {
  affiliation?: string;
  checkout_option?: string;
  checkout_step?: number;
  content_id?: string;
  content_type?: string;
  coupon?: string;
  currency?: string;
  description?: string;
  event_category: string;
  event_label?: string;
  fatal?: boolean;
  item_list_id?: string;
  item_list_name?: string;
  items?: Item[];
  method?: string;
  number?: string;
  payment_type?: string;
  promotion_id?: string;
  promotion_name?: string;
  promotions?: Promotion[];
  screen_name?: string;
  search_term?: string;
  shipping?: Currency;
  shipping_tier?: string;
  tax?: Currency;
  transaction_id?: string;
  value?: number;
}

export type Currency = string | number;

export interface Item {
  item_id?: string;
  item_name?: string;
  item_brand?: string;
  item_category?: string;
  item_category2?: string;
  item_category3?: string;
  item_category4?: string;
  item_category5?: string;
  item_variant?: string;
  price?: Currency;
  quantity?: number;
  index?: number;
  coupon?: string;
  item_list_name?: string;
  item_list_id?: string;
  discount?: Currency;
  affiliation?: string;
  creative_name?: string;
  creative_slot?: string;
  promotion_id?: string;
  promotion_name?: string;
  location_id?: string;
  /** @deprecated Use item_brand instead. */
  brand?: string;
  /** @deprecated Use item_category instead. */
  category?: string;
  /** @deprecated Use item_id instead. */
  id?: string;
  /** @deprecated Use item_name instead. */
  name?: string;
}

export interface Promotion {
  creative_name?: string;
  creative_slot?: string;
  id?: string;
  name?: string;
}

export type EventsAllProperties =
  | 'earn_virtual_currency'
  | 'join_group'
  | 'login'
  | 'purchase'
  | 'refund'
  | 'search'
  | 'select_content'
  | 'share'
  | 'sign_up'
  | 'spend_virtual_currency'
  | 'tutorial_begin'
  | 'tutorial_complete';

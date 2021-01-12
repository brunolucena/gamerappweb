export interface EventArgs {
  /** Typically the object that was interacted with (e.g. 'Video') */
  category: string;
  /** The type of interaction (e.g. 'play') */
  action: string;
  /** Useful for categorizing events (e.g. 'Fall Campaign') */
  label?: string;
  /** A numeric value associated with the event (e.g. 42) */
  value?: number;
}

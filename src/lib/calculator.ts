export type TrackEvent =
  | '60m'
  | '100m'
  | '200m'
  | '400m'
  | '800m'
  | '1000m'
  | '1500m'
  | '60mH'
  | '100mH'
  | '110mH';

export type JumpEvent = 'High Jump' | 'Pole Vault' | 'Long Jump';

export type ThrowEvent = 'Shot' | 'Discus' | 'Javelin';

export type FieldEvent = JumpEvent | ThrowEvent;

export enum Gender {
  men = 'men',
  women = 'women',
}

export type TableHeader = readonly ['name', 'a', 'b', 'c'];
export type TableRow = readonly [
  TrackEvent | FieldEvent,
  number,
  number,
  number
];
export type TableMapping = {
  readonly name: string;
  readonly a: number;
  readonly b: number;
  readonly c: number;
};

export const MEN_TABLE: readonly (TableHeader | TableRow)[] = [
  ['name', 'a', 'b', 'c'],
  ['100m', 25.4347, 18.0, 1.81],
  ['200m', 5.8425, 38.0, 1.81],
  ['400m', 1.53775, 82.0, 1.81],
  ['1500m', 0.03768, 480.0, 1.85],
  ['110mH', 5.74352, 28.5, 1.92],
  ['High Jump', 0.8465, 75.0, 1.42],
  ['Pole Vault', 0.2797, 100.0, 1.35],
  ['Long Jump', 0.14354, 220.0, 1.4],
  ['Shot', 51.39, 1.5, 1.05],
  ['Discus', 12.91, 4.0, 1.1],
  ['Javelin', 10.14, 7.0, 1.08],
  // (Indoors)
  ['60m', 58.015, 11.5, 1.81],
  ['1000m', 0.08713, 305.5, 1.85],
  ['60mH', 20.5173, 15.5, 1.92],
];

export const WOMEN_TABLE: readonly (TableHeader | TableRow)[] = [
  ['name', 'a', 'b', 'c'],
  ['200m', 4.99087, 42.5, 1.81],
  ['800m', 0.11193, 254.0, 1.88],
  ['100mH', 9.23076, 26.7, 1.835],
  ['High Jump', 1.84523, 75.0, 1.348],
  ['Long Jump', 0.188807, 210.0, 1.41],
  ['Shot', 56.0211, 1.5, 1.05],
  ['Javelin', 15.9803, 3.8, 1.04],
  // (Decathlon)
  ['100m', 17.857, 21.0, 1.81],
  ['400m', 1.34285, 91.7, 1.81],
  ['1500m', 0.02883, 535, 1.88],
  ['Pole Vault', 0.44125, 100, 1.35],
  ['Discus', 12.3311, 3.0, 1.1],
  // (Indoors)
  ['60mH', 20.0479, 17.0, 1.835],
];

function convertRowToConstantsMap(
  row: TableRow | TableHeader,
  header: TableRow | TableHeader
) {
  return row
    .map((value, index) => ({
      [header[index]]: value,
    }))
    .reduce((a, b) => ({ ...a, ...b }));
}

/**
 * Get the official men's scoring tables per event.
 */
export function getMensConstants(eventName: TrackEvent | FieldEvent) {
  const header = MEN_TABLE[0];
  const row = MEN_TABLE.find((row) => row[0] === eventName);
  return convertRowToConstantsMap(row, header);
}

/**
 * Get the official women's scoring tables per event.
 */
export function getWomensConstants(eventName: TrackEvent | FieldEvent) {
  const header = WOMEN_TABLE[0];
  const row = WOMEN_TABLE.find((row) => row[0] === eventName);
  return convertRowToConstantsMap(row, header);
}

/**
 * Track events, where T is Time in seconds.
 */
export function calculateTrackPoints(
  a: number,
  b: number,
  c: number,
  T: number
) {
  return Math.floor(a * Math.pow(b - T, c));
}

/**
 * Jumps events where M is Measurement in centimeters.
 */
export function calculateJumpsPoints(
  a: number,
  b: number,
  c: number,
  M: number
) {
  return Math.floor(a * Math.pow(M - b, c));
}

/**
 * Throws events where D is Distance in metres.
 */
export function calculateThrowsPoints(
  a: number,
  b: number,
  c: number,
  D: number
) {
  return Math.floor(a * Math.pow(D - b, c));
}

/**
 * Track events where P is Performance in points.
 */
export function calculateTrackTimeFromPoints(
  a: number,
  b: number,
  c: number,
  P: number
) {
  return Math.floor((b - Math.pow(P / a, 1 / c)) * 100) / 100;
}

/**
 * Jumps events where P is Performance in points.
 */
export function calculateJumpsMeasurementFromPoints(
  a: number,
  b: number,
  c: number,
  P: number
) {
  return Math.ceil((b + Math.pow(P / a, 1 / c)) * 100) / 100;
}

/**
 * Throws events where P is Performance in points.
 */
export function calculateThrowsDistanceFromPoints(
  a: number,
  b: number,
  c: number,
  P: number
) {
  return Math.ceil((b + Math.pow(P / a, 1 / c)) * 100) / 100;
}

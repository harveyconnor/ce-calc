import approximatelyEqual from 'approximately-equal';
import test from 'ava';

import {
  calculateJumpsMeasurementFromPoints,
  calculateJumpsPoints,
  calculateThrowsDistanceFromPoints,
  calculateThrowsPoints,
  calculateTrackPoints,
  calculateTrackTimeFromPoints,
  getMenConstants,
} from './calculator';

const _100m = getMenConstants('100m');
const _longJump = getMenConstants('Long Jump');
const _shot = getMenConstants('Shot');
const _highJump = getMenConstants('High Jump');
const _400m = getMenConstants('400m');
const _110mH = getMenConstants('110mH');
const _discus = getMenConstants('Discus');
const _poleVault = getMenConstants('Pole Vault');
const _javelin = getMenConstants('Javelin');
const _1500m = getMenConstants('1500m');

test('calculateTrackPoints', (t) => {
  t.is(calculateTrackPoints(_100m.a, _100m.b, _100m.c, 11.49), 755);
  t.is(calculateTrackPoints(_400m.a, _400m.b, _400m.c, 52.45), 705);
  t.is(calculateTrackPoints(_110mH.a, _110mH.b, _110mH.c, 17.74), 549);
  t.is(calculateTrackPoints(_1500m.a, _1500m.b, _1500m.c, 286), 643);
});

test('calculateJumpsPoints', (t) => {
  t.is(
    calculateJumpsPoints(_longJump.a, _longJump.b, _longJump.c, 6.7 * 100),
    743
  );
  t.is(
    calculateJumpsPoints(_highJump.a, _highJump.b, _highJump.c, 1.85 * 100),
    670
  );
  t.is(
    calculateJumpsPoints(_poleVault.a, _poleVault.b, _poleVault.c, 4 * 100),
    617
  );
});

test('calculateThrowsPoints', (t) => {
  t.is(calculateThrowsPoints(_shot.a, _shot.b, _shot.c, 11.51), 577);
  t.is(calculateThrowsPoints(_discus.a, _discus.b, _discus.c, 35.09), 565);
  t.is(calculateThrowsPoints(_javelin.a, _javelin.b, _javelin.c, 49.32), 579);
});

test('calculateTrackTimeFromPoints', (t) => {
  t.assert(
    approximatelyEqual(
      calculateTrackTimeFromPoints(_100m.a, _100m.b, _100m.c, 755),
      11.49,
      1
    )
  );
  t.assert(
    approximatelyEqual(
      calculateTrackTimeFromPoints(_400m.a, _400m.b, _400m.c, 705),
      52.45,
      1
    )
  );
  t.assert(
    approximatelyEqual(
      calculateTrackTimeFromPoints(_110mH.a, _110mH.b, _110mH.c, 549),
      17.74,
      1
    )
  );
  t.assert(
    approximatelyEqual(
      calculateTrackTimeFromPoints(_1500m.a, _1500m.b, _1500m.c, 643),
      286,
      1
    )
  );
});

test('calculateJumpsMeasurementFromPoints', (t) => {
  t.assert(
    approximatelyEqual(
      calculateJumpsMeasurementFromPoints(
        _longJump.a,
        _longJump.b,
        _longJump.c,
        743
      ),
      6.7 * 100,
      1
    )
  );
  t.assert(
    approximatelyEqual(
      calculateJumpsMeasurementFromPoints(
        _highJump.a,
        _highJump.b,
        _highJump.c,
        670
      ),
      1.85 * 100,
      1
    )
  );
  t.assert(
    approximatelyEqual(
      calculateJumpsMeasurementFromPoints(
        _poleVault.a,
        _poleVault.b,
        _poleVault.c,
        617
      ),
      4 * 100,
      1
    )
  );
});

test('calculateThrowsDistanceFromPoints', (t) => {
  t.assert(
    approximatelyEqual(
      calculateThrowsDistanceFromPoints(_shot.a, _shot.b, _shot.c, 577),
      11.51,
      1
    )
  );
  t.assert(
    approximatelyEqual(
      calculateThrowsDistanceFromPoints(_discus.a, _discus.b, _discus.c, 565),
      35.09,
      1
    )
  );
  t.assert(
    approximatelyEqual(
      calculateThrowsDistanceFromPoints(
        _javelin.a,
        _javelin.b,
        _javelin.c,
        579
      ),
      49.32,
      1
    )
  );
});

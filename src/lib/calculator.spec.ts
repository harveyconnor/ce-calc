import approximatelyEqual from 'approximately-equal';
import test from 'ava';

import {
  calculateJumpsMeasurementFromPoints,
  calculateJumpsPoints,
  calculateThrowsDistanceFromPoints,
  calculateThrowsPoints,
  calculateTrackPoints,
  calculateTrackTimeFromPoints,
  getMensConstants,
  getWomensConstants,
} from './calculator';

const _100m = getMensConstants('100m');
const _longJump = getMensConstants('Long Jump');
const _shot = getMensConstants('Shot');
const _highJump = getMensConstants('High Jump');
const _400m = getMensConstants('400m');
const _110mH = getMensConstants('110mH');
const _discus = getMensConstants('Discus');
const _poleVault = getMensConstants('Pole Vault');
const _javelin = getMensConstants('Javelin');
const _1500m = getMensConstants('1500m');

const _200mW = getWomensConstants('200m');
const _800mW = getWomensConstants('800m');
const _100mHW = getWomensConstants('100mH');
const _highJumpW = getWomensConstants('High Jump');
const _longJumpW = getWomensConstants('Long Jump');
const _shotW = getWomensConstants('Shot');
const _javelinW = getWomensConstants('Javelin');
const _100mW = getWomensConstants('100m');
const _400mW = getWomensConstants('400m');
const _1500mW = getWomensConstants('1500m');
const _poleVaultW = getWomensConstants('Pole Vault');
const _discusW = getWomensConstants('Discus');
const _60mHW = getWomensConstants('60mH');

test('calculateTrackPoints', (t) => {
  // Test men's events.
  t.is(calculateTrackPoints(_100m.a, _100m.b, _100m.c, 11.49), 755);
  t.is(calculateTrackPoints(_400m.a, _400m.b, _400m.c, 52.45), 705);
  t.is(calculateTrackPoints(_110mH.a, _110mH.b, _110mH.c, 17.74), 549);
  t.is(calculateTrackPoints(_1500m.a, _1500m.b, _1500m.c, 286), 643);

  //Test women's events
  t.is(calculateTrackPoints(_200mW.a, _200mW.b, _200mW.c, 25), 887);
  t.is(calculateTrackPoints(_800mW.a, _800mW.b, _800mW.c, 140), 824);
  t.is(calculateTrackPoints(_100mHW.a, _100mHW.b, _100mHW.c, 13), 1124);
  t.is(calculateTrackPoints(_100mW.a, _100mW.b, _100mW.c, 12), 952);
  t.is(calculateTrackPoints(_400mW.a, _400mW.b, _400mW.c, 49), 1199);
  t.is(calculateTrackPoints(_1500mW.a, _1500mW.b, _1500mW.c, 60 * 5), 826);
  t.is(calculateTrackPoints(_60mHW.a, _60mHW.b, _60mHW.c, 8), 1130);
});

test('calculateJumpsPoints', (t) => {
  // Test men's events.
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

  //Test women's events
  t.is(
    calculateJumpsPoints(_highJumpW.a, _highJumpW.b, _highJumpW.c, 1.8 * 100),
    978
  );
  t.is(
    calculateJumpsPoints(_longJumpW.a, _longJumpW.b, _longJumpW.c, 6 * 100),
    850
  );
  t.is(
    calculateJumpsPoints(_poleVaultW.a, _poleVaultW.b, _poleVaultW.c, 4 * 100),
    974
  );
});

test('calculateThrowsPoints', (t) => {
  // Test men's events.
  t.is(calculateThrowsPoints(_shot.a, _shot.b, _shot.c, 11.51), 577);
  t.is(calculateThrowsPoints(_discus.a, _discus.b, _discus.c, 35.09), 565);
  t.is(calculateThrowsPoints(_javelin.a, _javelin.b, _javelin.c, 49.32), 579);

  //Test women's events
  t.is(calculateThrowsPoints(_shotW.a, _shotW.b, _shotW.c, 14), 794);
  t.is(calculateThrowsPoints(_javelinW.a, _javelinW.b, _javelinW.c, 52), 899);
  t.is(calculateThrowsPoints(_discusW.a, _discusW.b, _discusW.c, 35), 558);
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

/**
 * Created by kc on 04.04.16.
 */

const fs     = require('fs');
const path   = require('path');
const assert = require('assert');

const netsh = require('../lib/netsh');


describe('netsh', function () {

  it('parses de locale output', function (done) {
    netsh.parseOutput(fs.readFileSync(path.join(__dirname, 'fixtures', 'netsh', 'netsh_de_complex01.txt'), {encoding: 'utf8'}), (err, info) => {
      assert.ok(info);
      assert.equal(info.length, 86);

      var ap = info[0];
      assert.equal(ap.mac, '00:f2:8b:8c:a6:88');
      assert.equal(ap.ssid, '');
      assert.equal(ap.signal_level, -88.5);
      assert.strictEqual(ap.channel, 1);

      ap = info[22];
      assert.equal(ap.mac, '00:35:1a:5b:46:7b');
      assert.equal(ap.ssid, '');
      assert.equal(ap.signal_level, -90);
      assert.strictEqual(ap.channel, 116);

      ap = info[23];
      assert.equal(ap.mac, '10:bd:18:ab:4d:8f');
      assert.equal(ap.ssid, 'Network-1');
      assert.equal(ap.signal_level, -81);
      assert.strictEqual(ap.channel, 6);

      ap = info[74];
      assert.equal(ap.mac, '00:f2:8b:8c:a6:8d');
      assert.equal(ap.ssid, 'Network-6');
      assert.equal(ap.signal_level, -87.5);
      assert.strictEqual(ap.channel, 1);

      ap = info[85];
      assert.equal(ap.mac, '00:f2:8b:8c:a6:85');
      assert.equal(ap.ssid, 'Network-7');
      assert.equal(ap.signal_level, -89.5);
      assert.strictEqual(ap.channel, 1);
      done(err);
    });
  });


  it('parses en locale output', function (done) {
    netsh.parseOutput(fs.readFileSync(path.join(__dirname, 'fixtures', 'netsh', 'netsh_en_complex01.txt'), {encoding: 'utf8'}), (err, info) => {
      assert.ok(info);
      assert.equal(info.length, 86);

      var ap = info[0];
      assert.equal(ap.mac, '00:f2:8b:8c:a6:88');
      assert.equal(ap.ssid, '');
      assert.equal(ap.signal_level, -88.5);
      assert.strictEqual(ap.channel, 1);

      ap = info[22];
      assert.equal(ap.mac, '00:35:1a:5b:46:7b');
      assert.equal(ap.ssid, '');
      assert.equal(ap.signal_level, -90);
      assert.strictEqual(ap.channel, 116);

      ap = info[23];
      assert.equal(ap.mac, '10:bd:18:ab:4d:8f');
      assert.equal(ap.ssid, 'Network-1');
      assert.equal(ap.signal_level, -81);
      assert.strictEqual(ap.channel, 6);

      ap = info[74];
      assert.equal(ap.mac, '00:f2:8b:8c:a6:8d');
      assert.equal(ap.ssid, 'Network-6');
      assert.equal(ap.signal_level, -87.5);
      assert.strictEqual(ap.channel, 1);

      ap = info[85];
      assert.equal(ap.mac, '00:f2:8b:8c:a6:85');
      assert.equal(ap.ssid, 'Network-7');
      assert.equal(ap.signal_level, -89.5);
      assert.strictEqual(ap.channel, 1);
      done(err);
    });
  });

});

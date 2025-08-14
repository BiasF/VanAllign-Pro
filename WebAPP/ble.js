// BLE-Verbindung und Sensor-Daten
export async function startBLE(onData) {
  let pitchChar, rollChar;
  try {
    const device = await navigator.bluetooth.requestDevice({
      filters: [{ services: ['2a24b789-7aab-4535-af3e-ee76a35cc42d'] }],
      optionalServices: ['2a24b789-7aab-4535-af3e-ee76a35cc42d']
    });
    const server = await device.gatt.connect();
    const service = await server.getPrimaryService('2a24b789-7aab-4535-af3e-ee76a35cc42d');
    pitchChar = await service.getCharacteristic('cad48e28-7fbe-41cf-bae9-d77a6c233424');
    rollChar  = await service.getCharacteristic('cad48e28-7fbe-41cf-bae9-d77a6c233425');
    let lastPitch = null, lastRoll = null;
    setInterval(async () => {
      try {
        const pitchVal = await pitchChar.readValue();
        const rollVal  = await rollChar.readValue();
        function decodeFloat(val) {
          if (val.byteLength !== 4) return null;
          let fLE = val.getFloat32(0, true);
          let fBE = val.getFloat32(0, false);
          if (!isNaN(fLE) && Math.abs(fLE) < 1000) return fLE;
          if (!isNaN(fBE) && Math.abs(fBE) < 1000) return fBE;
          return null;
        }
        let pitch = decodeFloat(pitchVal);
        let roll  = decodeFloat(rollVal);
        if (pitch !== null) lastPitch = pitch;
        if (roll !== null) lastRoll = roll;
        if (lastPitch !== null && lastRoll !== null) {
          onData({ pitch: lastPitch, roll: lastRoll });
        }
      } catch (err) {
        onData({ error: 'Fehler beim Lesen: ' + err });
      }
    }, 1000);
  } catch (error) {
    onData({ error: 'Fehler: ' + error });
  }
}

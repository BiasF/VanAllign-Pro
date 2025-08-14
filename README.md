# VanAlign Pro 1.0 – WebBLE & ESPHome Projekt

Dieses Projekt besteht aus drei Komponenten:

1. **ESPHome BLE-Server (esp32_ble.yaml):**
   - Für ESP32-S3 mit MPU6050 Gyro/Accelerometer.
   - Stellt Pitch/Roll als BLE-Characteristics bereit.
   - Kalibrierung über ESPHome-Webserver (Button im Webportal).
   - Flashe mit `esphome run esp32_ble.yaml`.

2. **WebBLE Frontend (webble.html):**
   - Öffne die HTML-Datei im Browser (Chrome empfohlen).
   - Klicke auf "Mit VanAlign Pro Verbinden".
   - Grafische Wasserwaage zeigt Pitch/Roll live an.
   - Kalibrierung per WebBLE nicht möglich, nur über ESPHome-Webserver.


**Hinweise:**
- Nur ein BLE-Client kann gleichzeitig verbunden sein (WebBLE oder ESP32-Client).
- Service- und Characteristic-UUIDs müssen in allen Komponenten übereinstimmen.
- Kalibrierung erfolgt ausschließlich über das ESPHome-Webserver-Portal.

## Ordnerstruktur
- esp32_ble.yaml
- webble.html

## Voraussetzungen
- ESP32-S3 Board
- MPU6050 Sensor
- Chrome oder Edge für WebBLE
- Unter iOS WebBLE App (z.B. WebBLE)

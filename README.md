# Neon Royale — Casino 3D jugable

## Ejecutar
1. Descomprime el ZIP.
2. Abre una terminal en la carpeta `vegas_3d_casino`.
3. Ejecuta `python -m http.server 8000`.
4. Abre `http://localhost:8000` en Chrome, Edge o Firefox.

También puedes usar cualquier servidor estático equivalente. No abras `index.html` con `file://`: los módulos ES de Three.js requieren HTTP.

## Controles
- WASD: caminar
- Ratón: mirar 360° (haz clic en la vista para recuperar el control)
- Espacio: saltar
- E: interactuar con el juego cercano
- ESC: liberar el ratón

## Incluye
- Entorno 3D en primera persona con iluminación, sombras, arquitectura, columnas, suelo brillante y señalización.
- Máquinas tragaperras con apuesta configurable y pagos virtuales.
- Ruleta europea con apuestas a color, paridad y número.
- Carrera arcade con selección de vehículo y apuesta.
- Saldo inicial de 10.000 créditos virtuales, historial de resultados y minimapa.
- NPCs con movimiento ambiental.

## Notas
- Es una primera versión jugable. Los gráficos y modelos se generan proceduralmente con geometrías de Three.js; no requiere assets descargables.
- Requiere conexión a Internet para cargar Three.js y la fuente web desde sus CDNs.
- Toda la economía es ficticia: no hay pagos, depósitos ni dinero real.

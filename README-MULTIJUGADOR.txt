NEON ROYALE — MULTIJUGADOR

IMPORTANTE: ya no se debe iniciar con `py -m http.server 8000`.
Esta versión necesita Node.js para sincronizar jugadores y saldo compartido.

1) Instala Node.js LTS desde https://nodejs.org/ (si no tienes permisos, puede necesitar ayuda del administrador).
2) Abre CMD dentro de esta carpeta.
3) Ejecuta: npm install
4) Ejecuta: npm start
5) En otra terminal inicia Cloudflare:
   E:\casino\cloudflared-windows-386.exe tunnel --protocol http2 --url http://localhost:8000
6) Comparte el nuevo enlace trycloudflare.com. No reutilices el enlace antiguo.
7) Mantén abiertas ambas terminales.

Los jugadores aparecen como avatares 3D y comparten el saldo virtual.
El saldo es de prueba, no dinero real. Esta es una primera versión multijugador:
las posiciones y el saldo se sincronizan; las partidas de cada máquina aún no tienen
una resolución totalmente autoritativa en servidor.

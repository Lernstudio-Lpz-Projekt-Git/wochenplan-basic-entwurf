## Installierte Node Versionen prüfen
Nach der Installtion sollten wir die Versionen von node, npm, and npx prüfen! Im ergebnis sollten folgende Versionen installiert sein:
`node -v //v16.22.7`\
`npm -v //6.14.15` NPM - verwaltet Pakete, kann aber keine pakete ausführen, Pakete auszuführen. \
`npx -v //6.14.15` NPX - ein Tool zum Ausführen von Node-Paketen.

## Packages installieren & Projekt starten
`npm install` ist der Befehl, der alle Packages installiert und alle Abhänigkeiten auflöst.

`npm run dev` ist der Befehl, der den Dev-Server startet, alles Dateien werden kompiliert (TS, SCSS) und auf Änderungen gewartet. Hierbei wird ein Liveserver inkl. Browser-Refresh gestartet.

`npm run build` ist der Build-Befehl, hierbei wird das Projekt kompiliert und im `dist/` Verzeichnis hinterlegt. Es wird nicht auf Änderungen an Dateien gewartet.

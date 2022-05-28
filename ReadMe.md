## <g>Installierte Node Versionen prüfen</g>
Nach der Installtion sollten wir die Versionen von node, npm, and npx prüfen! Im ergebnis sollten folgende Versionen installiert sein:
`node -v //v16.22.7`\
`npm -v //6.14.15` NPM - verwaltet Pakete, kann aber keine pakete ausführen, Pakete auszuführen. \
`npx -v //6.14.15` NPX - ein Tool zum Ausführen von Node-Paketen.

## <g>Packages installieren & Projekt starten</g>
`npm install` alle Projekt-Packages werden installiert und die Abhänigkeiten auflöst. Das Projekt ist startfähig.

`npm run dev` der Web-Server wird gestartet, alle Dateien werden kompiliert (TS,JS, SCSS) und der Server wartet auf Änderungen.

`npm run build` das Projekt wird kompiliert und im `dist/` Verzeichnis kompiliert. Änderungen in den Quell-Dateien werden nicht im Browser sichtbar.


<style>
r { color: Blue }
o { color: #ff6e48 }
g { color: rgb(158, 255, 201) }
</style>

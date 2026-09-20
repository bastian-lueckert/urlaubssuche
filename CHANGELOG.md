# Urlaubssuche – Versionen & Fortschritt

`index.html` im Hauptordner ist immer die aktuelle Version. Jede Version liegt zusätzlich unter `versions/vX.Y/index.html`.

## v0.6 – GitHub, Tagesausflüge, neue Kategorien, Flüge, interaktive Karte, Wikivoyage (aktuell)
**Erledigt**
- GitHub: Repository `bastian-lueckert/urlaubssuche`, Online-Version über GitHub Pages (auch vom Smartphone). Jede neue Version wird nach GitHub gepusht, die Versionsstände bleiben lokal unter `versions/`.
- Tagesausflug als neue Reiseart (gleiches Anreise- und Abreisedatum), ohne Unterkunftsschritt und mit Tageskosten.
- Neue Kategorien für alle Reisearten: Shopping (Einkaufsstädte, Outlets), Kulinarik & Genuss, Familie & Freizeitparks, Wintersport. Dazu neue kuratierte Ziele (Europa-Park, Phantasialand, Heide Park, Winterberg, Garmisch, Roermond, Metzingen) und mehr Tags bei bestehenden Zielen. Auch die Live-Suche kennt die neuen Kategorien.
- Flüge: Nächster Flughafen am Startort und am Ziel (75 Flughäfen), Flugdauer, Tür-zu-Tür-Zeit, Preisidee pro Person und Gruppe (Schätzung) und Links mit Flughäfen und Reisedaten zu Google Flights, Skyscanner und Kayak.
- Interaktive Karte beim Aufklappen (Leaflet/OpenStreetMap): Route (Auto als echte Strecke, Bahn und Flug als Linie), Start, Ziel, Sehenswürdigkeiten, Hotels, Restaurants und Wikivoyage-Tipps als Markierungen mit Popups, im Dunkelmodus angepasst.
- Wikivoyage: Einleitung und Listen zu Sehenswürdigkeiten, Aktivitäten, Einkaufen und Essen mit Öffnungszeiten, Preisen und Links, plus Markierungen in der Karte.

**Bekannte Grenzen**
- Flugpreise und Flugzeiten sind Schätzungen. Live-Preise gibt es nur über die Links, weil Airlines und Portale im Browser nicht abfragbar sind.
- Wikivoyage hat nicht für jeden Ort einen Artikel und nicht überall Listen.
## v0.5 – Kompakte Übersicht, Kartenvorschau, schöneres PDF
**Erledigt**
- Kompakte Übersicht: Jedes Ziel ist eine Zeile mit Google-Maps-Routenvorschau (zeigt auch Googles eigene Fahrzeit), Fahrzeit, Entfernung, Interessen-Tags und Gesamtpreis. Ein Klick klappt alle Details auf (Kosten, Hotels, Sehenswürdigkeiten, Wetter, Links). Knopf "Alle auf-/zuklappen".
- Fahrzeit pro Ziel: Auto mit echter Routenzeit (OSRM) sobald geladen, sonst Schätzung. Bahn und Flug als Schätzung.
- Hinweis auf der Übersichtsseite, dass nur mit "☆ Merken" markierte Optionen in Zusammenfassung und Export landen. Dazu eine mitlaufende Leiste mit der Anzahl gemerkter Ziele und Sprung zur Zusammenfassung.
- Neues PDF: Logo-Kopf, Reiseeckdaten, Vergleichstabelle der Favoriten, pro Favorit Foto, Beschreibung, Kostenaufstellung, Fahrzeit, Wetter, Hotels, Sehenswürdigkeiten, Essen und Buchungslinks, Zusatzkosten und Gesamtsumme. Der Export wartet, bis die Live-Infos und Bilder der Favoriten geladen sind.
- Markdown-Export enthält jetzt dieselben Inhalte.
- Merken, Aufklappen und Nachladen der Details aktualisieren nur die betroffene Karte, sodass Kartenvorschauen nicht neu laden.

**Bekannte Grenzen**
- Die Google-Karten sind eingebettete Vorschauen, im PDF steht statt der Karte die Route als Text und Link.
- Fahrzeit für Bahn und Flug sind Schätzungen.
- Das PDF entsteht über den Druckdialog des Browsers ("Als PDF speichern" wählen).
## v0.4 – Design, Logo, Hell/Dunkel, besserer Live-Filter
**Erledigt**
- Neues Logo (Sonne, Berge, Wellen im Kompass-Kreis) im Kopfbereich und als Browser-Icon.
- Überarbeitetes Design: Farbverlauf im Kopf, weichere Karten mit Schatten, größere Abstände.
- Hell- und Dunkelmodus per Knopf umschaltbar. Die Wahl wird gemerkt, Voreinstellung folgt dem System.
- Besserer Live-Filter: Es werden nur Orte und Landschaften (Stadt, Gemeinde, Insel, Gebirge, Nationalpark usw.) anhand der Wikipedia-Kurzbeschreibung zugelassen. Gebäude, Bahnhöfe, Vereine, Kastelle und Ähnliches sowie Stadtteile und Bezirke mit wenig Aufrufen fliegen raus. Die Kurzbeschreibung steht jetzt in der Karte.
- Bessere Bilder: Wappen, Flaggen und Logos werden ausgefiltert, fehlende Fotos kommen aus Wikimedia Commons in der Umgebung.

**Bekannte Grenzen**
- Die Trefferzahl live gefundener Ziele ist bei strengem Filter kleiner, dafür passender.
- Preise weiterhin Schätzungen.
## v0.3 – Hotels, Route und Sehenswürdigkeiten im Detail
**Erledigt**
- Hotelvorschläge pro Ziel aus OpenStreetMap (Name, Sterne, Webseite) mit Preisschätzung pro Nacht und gesamt (nach Sternen, Region und Zimmerzahl) und einem Link "Preis bei Booking prüfen" pro Hotel mit Reisedaten.
- Karte mit Anreise: eingebettete Google-Karte mit Route für das gewählte Verkehrsmittel (Auto, Bahn/ÖPNV, bei Flug das Ziel), dazu die echte Autoroute (Kilometer und Fahrzeit über OSRM).
- Sehenswürdigkeiten mit Foto, Beschreibung, Wikipedia-Link und Kartenlink.

**Bekannte Grenzen**
- Konkrete Live-Preise gibt es nicht: Die Buchungsportale haben keine offene Schnittstelle, ein Auslesen im Browser ist technisch blockiert. Preise sind Schätzungen. Echte Preise bräuchten eine Preis-API mit Schlüssel (z. B. Amadeus) oder einen Server.
- Einige live gefundene Ziele haben unpassende Namen (z. B. "Confluentes" für Koblenz oder Gebäude statt Orte). Filter folgt.
## v0.2 – Live-Suche und funktionierende Links
**Erledigt**
- Live-Suche im Internet: Ziele werden per Wikipedia-Umkreissuche (Radius aus der Fahrzeit) passend zu den gewählten Interessen gefunden und nach Beliebtheit (Seitenaufrufe) sortiert. Nahe Orte werden zusammengefasst, kuratierte Ziele haben bei Doppelungen Vorrang.
- Pro Ziel Live-Details: Foto und Kurzbeschreibung (Wikipedia), Sehenswürdigkeiten (Wikipedia), Touren/Wege bei Wandern und Rad, echte Restaurants (OpenStreetMap/Nominatim), Wetter im gleichen Zeitraum des Vorjahres (Open-Meteo).
- Beliebiger Startort per Ortssuche (Open-Meteo Geocoding).
- Links geprüft und korrigiert: Booking.com und Airbnb mit Reisedaten und Personenzahl, Bahn.de mit Start und Ziel, Trivago, Urlaubspiraten, Outdooractive, Wikipedia, Google Maps. Der nicht funktionierende Komoot-Link ist entfernt.
- Die 35 kuratierten Ziele bleiben als Grundstock und für den Offline-Fall.

**Bekannte Grenzen**
- Preise sind weiterhin Richtwerte (nach Region geschätzt), keine Live-Preise.
- Urlaubspiraten lässt sich im Browser nicht auslesen (CORS), deshalb nur als Link.
- Wikidata und Overpass waren beim Test instabil und werden nicht genutzt.
- Trivago und Check24 öffnen die Suche, das Ziel ist dort nicht vorbelegt.
- Ziele im Ausland sind meist deutschsprachig gut abgedeckt, sonst dünner.

## v0.1 – Erster Wurf
- Assistent mit Entscheidungsbaum: Personen/Startort, Zeitraum (Reiseart wird abgeleitet), Budget, Anreise, Art des Urlaubs, Region, Unterkunft.
- 35 fest eingebaute Ziele, Kostenrechnung mit Summe und Budgetampel.
- Automatisches Speichern, Pausieren und Fortsetzen, Stand als Datei speichern und laden.
- Export als Markdown und PDF (Druckdialog).

## Nächste Schritte (Vorschlag für v0.3)
- Echtere Preise: Preisdatenbasis nach Land und Saison, optional Anbindung einer Preis-API (braucht Backend oder API-Schlüssel).
- Angebote von Urlaubspiraten und ähnlichen Seiten einbinden (braucht einen kleinen Server als Proxy).
- Bessere Vorschlagsqualität: Gewichtung der Interessen, Kinderfreundlichkeit, Hund, Barrierefreiheit.
- Vergleichsansicht für gemerkte Ziele, Tagesplan.
- Veröffentlichung über GitHub Pages.





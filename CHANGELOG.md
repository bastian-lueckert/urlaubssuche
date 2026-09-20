# Urlaubssuche – Versionen & Fortschritt

`index.html` im Hauptordner ist immer die aktuelle Version. Jede Version liegt zusätzlich unter `versions/vX.Y/index.html`.

## v0.9.1 – Startort ohne Vorbelegung (aktuell)
**Erledigt**
- Keine Vorbelegung mit Köln mehr. Der Startort wird beim Öffnen des Schritts "Wer & von wo" automatisch per GPS versucht (der Browser fragt nach Erlaubnis). Klappt das nicht, gibst du deinen Ort ein: Suche mit Trefferliste (z. B. mehrere Orte mit gleichem Namen), Auswahl per Antippen. Ein Knopf startet die GPS-Ermittlung auch manuell.
- Der Ortsname zum GPS-Standort wird per Rückwärtssuche ermittelt und angezeigt.
- Ohne Startort geht es nicht weiter: "Weiter" und Sprünge über die Schrittleiste führen zurück zum Startort-Schritt. Gespeicherte Stände aus älteren Versionen (mit Köln) verlangen den Startort einmal neu.
- Getestet: Suche und Auswahl per Klick, Sperre beim Weiterklicken, GPS-Ablauf mit simuliertem Standort (echtes GPS im Browser-Test nicht möglich).
## v0.9 – Schlanker Kopf und Favoriten-Pille für Mobilgeräte
**Erledigt**
- Kopfzeile: Speichern und Laden liegen jetzt in einem Burger-Menü (☰). Neustart ist ein Symbol (↺), ebenso der Hell/Dunkel-Schalter (🌙/☀️). Auf dem Handy bleibt alles in einer Zeile, der Untertitel wird dort ausgeblendet.
- Favoriten: Statt der breiten Leiste unten gibt es eine kleine Pille mit Stern und Zahl (⭐ 2) unten rechts. Ein Klick klappt die Liste der gemerkten Ziele mit Fahrzeit und Preis auf, einzelne Ziele lassen sich entfernen, und ein Knopf führt zur Zusammenfassung. Die Pille erscheint nur auf der Ergebnisseite.
- Getestet: Menü öffnen und schließen, Merken, Liste aufklappen, Entfernen und Sprung zur Zusammenfassung; Ansicht bei Handybreite (375 px) geprüft.
## v0.8.1 – Fix Startbildschirm
**Behoben**
- Die Auswahl "Ich habe schon ein Ziel" / "Ich brauche Ideen" und die Trefferliste der Zielsuche reagierten nicht auf Klicks, weil ein allgemeiner Handler für Auswahlkarten die Klicks überschrieb. Der Handler gilt jetzt nur noch für Auswahlkarten mit Datenfeld. Mit Klicks getestet: Ziel-Pfad (Suche, Treffer hinzufügen, weiter) und Ideen-Pfad.
## v0.8 – Zielmodus, echte Fahrzeiten, Events, Begründung
**Erledigt**
- Footer mit Version und Deploy-Datum. Vor jedem Release wird das Datum eingetragen.
- Standarddatum: Start in einer Woche, Ende Start + 2 Tage. Vergangene gespeicherte Daten werden auf diesen Standard zurückgesetzt.
- Maximale Fahrzeit im 0,25-Stunden-Raster (15 Minuten), Anzeige als h:mm.
- Fahrzeiten geprüft: Statt Luftlinien-Schätzung nutzt die App echte Straßenrouten (OpenStreetMap-Routing, OSRM) für alle Kandidaten plus 10 % Puffer für Verkehr und Pausen. Ziele ohne Straßenverbindung (Inseln) und ungewöhnliche Umwege fallen für das Auto heraus. Bahnzeit wird daraus abgeleitet. Im Test mit 3 h Limit ab Köln lag kein Ergebnis darüber. Beispiel Köln–Heidelberg: 2:53 h, Googles Kartenvorschau zeigt 2 h 54 min.
- Sehenswürdigkeiten: Städte zeigen nur Orte im Zentrum (Radius 5 km, sortiert nach Bekanntheit und Nähe, Ortsnamen und Stadtteile ausgeschlossen), Regionen bis 25 km mit zwei Suchen (Bauwerke sowie Natur und Freizeit). Die Entfernung vom Zentrum steht dabei. Mehrfache Abrufe werden bei kurzen Ausfällen wiederholt.
- Veranstaltungen im Reisezeitraum: Feiertage am Zielort (date.nager.at), Feste und Veranstaltungen aus Wikivoyage (Treffer im Reisemonat oben, mit ⭐), Links zu Google Events, Eventim, Ticketmaster und Tourist-Info. Optional Ticketmaster-API für konkrete Konzerte und Events, wenn du einen kostenlosen Schlüssel einträgst (wird nur im Browser gespeichert; noch nicht mit echtem Schlüssel getestet).
- Kurze Begründung pro Ziel in der Übersichtszeile: "Warum hier?" (passt zu deinen Wünschen, Fahrzeit, Budget) und "Darum lohnt es sich" (Einleitung, Highlights, Wetter, Feiertage). Auch in PDF und Markdown.
- Neuer Startbildschirm: "Ich habe schon ein Ziel" oder "Ich brauche Ideen". Beim Ziel-Modus gibst du Ort, Stadt oder Region frei ein (Suche über Open-Meteo-Geocoding und Wikipedia), fügst mehrere Ziele hinzu und bekommst dieselbe Ergebnisdarstellung wie beim Brainstorming (Karte, Kosten, Hotels, Sehenswertes, Wikivoyage, Events, Flüge). Die Ziele sind automatisch gemerkt.

**Bekannte Grenzen**
- "Google-Rückmeldung" zur Fahrzeit: Googles Zeit ist in der eingebetteten Karte sichtbar, lässt sich aber nicht auslesen. Dafür wäre ein Google-API-Schlüssel mit Abrechnung nötig. Die App rechnet stattdessen mit echten OSM-Routen plus Puffer.
- Konkrete Events (Konzerte, Messen) gibt es ohne Schlüssel nur als Links. Frei nutzbare Event-Schnittstellen ohne Schlüssel existieren kaum. Wikivoyage-Feste haben keine festen Termine.
- Bei mehrdeutigen Ortsnamen (z. B. "Harz") musst du den passenden Treffer selbst antippen.
- Wegen echter Routen gibt es bei kleinem Zeitlimit weniger, dafür realistischere Treffer.
## v0.7 – Mehr Vielfalt, "Etwas Ausgefallenes", saubere Wikivoyage-Texte
**Erledigt**
- Neue Option "Etwas Ausgefallenes": Geheimtipps wie Höhlen, Klammen, Wasserfälle, Baumwipfelpfade, Schaubergwerke, Leuchttürme, Burgruinen, Vulkane und Moore. Bei dieser Option werden weniger bekannte Orte bevorzugt, pro Namenstyp (z. B. "Burg") höchstens zwei.
- Mehr Vielfalt: 
  - Die Live-Suche fragt pro Kategorie mehrere Suchbegriffe und zwei Ergebnisseiten ab.
  - Ziele in unmittelbarer Nähe zueinander (unter 20 km) werden nicht doppelt gezeigt.
  - Kleine zufällige Streuung im Ranking, dazu die Knöpfe "🔀 Neu mischen", "Neu suchen" (neue Auswahl) und "Mehr Ideen anzeigen" (weitere 10 pro Klick).
  - Der Knopf "🎲 Überrasch mich" öffnet ein zufälliges Ziel aus den besten 40.
- 52 neue kuratierte Ziele (Ausgefallenes wie Helgoland, Hallig Hooge, Spreewald, Saarschleife, Externsteine, Eifel-Maare, Hallstatt, Zermatt, Azoren, Cinque Terre, Meteora, dazu Städte, Weinregionen und Inseln in Deutschland und Europa).
- Wikivoyage-Texte werden von Wiki-Code bereinigt (Vorlagen, Links, Bilder, Formatierung). Der Parser liest jetzt auch mehrzeilige Einträge korrekt, mit Beschreibung, Öffnungszeiten und Preisen. In Tests mit Heidelberg, Lübeck und Prag blieb kein Code-Rest übrig.

**Bekannte Grenzen**
- Die Live-Auswahl für "Ausgefallenes" hängt von Wikipedia-Stichwörtern ab und enthält gelegentlich Burgen oder Bergwerke, die nicht jeden überraschen.
- Bei kurzen Reisezeiten (kleiner Radius) gibt es insgesamt weniger Treffer.
## v0.6 – GitHub, Tagesausflüge, neue Kategorien, Flüge, interaktive Karte, Wikivoyage
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










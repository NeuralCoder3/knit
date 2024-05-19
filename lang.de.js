if (typeof langProxy === 'undefined') {
    langProxy = {};
}
langProxy['de'] = {
    icon: '🇩🇪',
    name: 'german',
    // Language
    german: 'Deutsch',
    english: 'Englisch',
    // UI
    title: 'Strickmuster-Planer',
    about: 'Über diese Software',
    aboutText: `
        <h3>Strickmuster-Planer</h3>
        <p>Der Strickmuster-Planer ist ein Werkzeug zum Entwerfen und Visualisieren von Strickmustern. Er ist einfach und benutzerfreundlich gestaltet und konzentriert sich auf die visuelle Darstellung des Musters.</p>
        <p>Sie können die Website herunterladen/installieren, um sie offline zu verwenden. Die Website ist eine einzelne HTML-Datei, die keine Internetverbindung erfordert, um zu funktionieren. Sie können die Website auch auf Ihrem Telefon oder Tablet verwenden.</p>
        <p>(Optional) Stricken Sie ein kleines Muster, um die Länge und Breite Ihres Schals in Reihen und Maschen zu bestimmen (z.B., wenn jede Ihrer Reihen 4mm misst, benötigen Sie 250 Reihen für einen 1m langen Schal). In dieser Software geben Sie einfach die Anzahl der Reihen und Maschen ein, die Ihr Schal haben soll.</p>
        <p>Konfigurieren Sie Ihren Schal: Passen Sie die Parameter an, bis Sie zufrieden sind. Sie können mit der Maus über jede Eingabe fahren, um weitere Informationen zu erhalten. Wenn Sie zufrieden sind, klicken Sie auf Stricken.</p>
        <p>Das Stricken Ihres Schals dauert in der Regel einige Stunden, abhängig von Ihren Parametern. Wenn Sie nicht vorhaben, Ihren gesamten Schal in einem Durchgang zu stricken, sollten Sie vor dem Start einen einfachen Test durchführen: Gehen Sie ein paar Reihen in der Software voran (ohne zu stricken), legen Sie Ihr Telefon (oder Ihren Computer) weg (z.B. sperren Sie es oder ähnliches) und kehren Sie zu Ihrem Browser zurück. Bestätigen Sie, dass Ihr Browser sich korrekt daran erinnert, auf welcher Reihe Sie waren.</p>
        <p>Beginnen Sie mit dem Stricken. Schlagen Sie 6 Maschen an. Dies ist die linke Spitze Ihres Schals.</p>
        <p>Arbeiten Sie sich durch die Reihen, beginnend bei Reihe 0. Wenn Sie eine Reihe beendet haben, klicken Sie auf "Nächste", um fortzufahren; Sie können auch die Leertaste, die Pfeiltasten nach oben oder unten oder auf mobilen Geräten nach links oder rechts wischen.</p>
        <p>Ketten Sie die letzten 6 Maschen ab.</p>
        <p>Viel Spaß mit Ihrem Schal!</p>
    `,
    configure: 'Muster ändern',
    start: 'Stricken starten',
    prev: 'Vorherige Reihe',
    next: 'Nächste Reihe',
    rows: 'Reihen',
    stitches: 'Maschen',
    totalLength: 'Gesamtlänge',
    totalLengthDescription: 'Wie lang soll der Schal von Spitze bis Spitze entlang seiner längsten Dimension sein?',
    centerLength: 'Mittellänge',
    centerLengthDescription: 'Wie viele zusätzliche Reihen soll der Schal im Mittelteil (zwischen Zunahmen und Abnahmen) entlang der langen Dimension haben?',
    centerWidth: 'Mittelbreite',
    centerWidthDescription: 'Wie viele Maschen soll der Schal im Mittelteil, zwischen den Zunahmen und Abnahmen, haben (Breite des Schals)? Enthält nicht die 6 Maschen für den i-cord Rand.',
    texture: 'Textur',
    textureDescription: 'Welche Art von Textur möchtest du?',
    shape: 'Form',
    shapeDescription: 'Welche allgemeine Form möchtest du?',
    inputs: 'Eingaben',
    outputs: 'Ausgaben',
    of: 'von',
    stitchesShort: 'M',
    // Patterns
    garter: 'Kraus rechts',
    doubleMoss: 'Perlmuster',
    // Shapes
    balanced: 'Ausgeglichen',
    thin: 'Dünn',
    thick: 'Dick',
    straight: 'Dreieck',
    // Stitches
    stitchKnit: 'R',
    stitchKnitDescription: 'Rechts',
    stitchPurl: 'L',
    stitchPurlDescription: 'Links',
    stitchKnitFrontBack: 'RZ',
    stitchKnitFrontBackDescription: 'Rechts zunehmen',
    stitchSlipStitchPurlwise: 'A',
    stitchSlipStitchPurlwiseDescription: 'Abheben',
    stitchKnitTwoTogether: '2RzZ',
    stitchKnitTwoTogetherDescription: 'Zwei rechte Maschen zusammenstricken',
    stitchWithYarnInFront: 'F',
    stitchWithYarnInFrontDescription: 'Faden vor die Arbeit legen',
    // Errors
    lessOrEqual: '%1 (%2) muss kleiner oder gleich %3 (%4) sein',
    nanOutputs: 'Ausgaben müssen eine Zahl sein',
    nanRepetitions: 'Wiederholungen müssen eine Zahl sein',
    constantsUndefined: 'Konstante %1 ist nicht definiert.',
    invalidBezierParameter: 'Ungültiger Zeitpunkt %1 für Bezier-Kurve',
    invalidIndex: 'Ungültiger Index %1 für Bezier-Array (Größe: %2)',
    invalidIndexN: 'Ungültiger Index n = %1 für Bezier-Array',
    emptyLastRow: 'Versuch, die letzte Reihe eines leeren Musters abzurufen',
};

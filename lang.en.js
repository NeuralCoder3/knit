if (typeof langProxy === 'undefined') {
    langProxy = {};
}
langProxy['en'] = {
    icon: '🇬🇧',
    name: 'english',
    // Language
    german: 'German',
    english: 'English',
    // UI
    title: 'Knitting Pattern Viewer',
    about: 'About this software',
    aboutText: `
        <h3>Knitting Pattern Viewer</h3>
        <p>Knitting Pattern Viewer is a tool for designing and visualizing knitting patterns. It is designed to be simple and easy to use, with a focus on the visual representation of the pattern.</p>
        <p>You can download/install the website for offline use. The website is a single HTML file that does not require an internet connection to work. You can also use the website on your phone or tablet.</p>
        <p>(Optional) Knit a small swatch to inform the length and width of your scarf in rows and stichtes (e.g., if each of your rows measures 4mm, you'll need 250 rows for a 1m long scarf). In this software, you enter just the amount of rows and stitches you want your scarf to have.</p>
        <p>Configure your scarf: adjust the parameters until you're satisfied. You can mouse over each input for more information. When you're satisfied, click Knit.</p>
        <p>Knitting your scarf typically takes a few hours, depending on your parameters. Unless you plan to knit your entire scarf in a single sitting, consider doing a simple test before you start: advance a few rows in the software (without knitting), put your phone (or computer) away (e.g., lock it or such), and come back to your browser. Confirm that your browser correctly remembers which row you were on.</p>
        <p>Start knitting. Cast-on 6 stitches. This is the left tip of your scarf.</p>
        <p>Work through the rows, starting at row 0. Whenever you finish a row, click "Next" to advance; you can also press space, up or down or, on mobile devices, swipe left or right.</p>
        <p>Bind-off the last 6 stitches.</p>
        <p>Enjoy your scarf!</p>
    `,
    configure: 'Change the pattern',
    start: 'Start knitting',
    prev: 'Previous row',
    next: 'Next row',
    rows: 'rows',
    stitches: 'stitches',
    totalLength: 'Total Length',
    totalLengthDescription: 'How long should the scarf measure from tip to top along its longest dimension?',
    centerLength: 'Center Length',
    centerLengthDescription: 'How many additional rows should the scarf have in the center part (between increases and decreases) along the long dimension?',
    centerWidth: 'Center Width',
    centerWidthDescription: 'How many stitches should the scarf have in the center part, between the increases and decreases? Does not include the 6 stitches for the i-cord border.',
    texture: 'Texture',
    textureDescription: 'What type of texture do you want?',
    shape: 'Shape',
    shapeDescription: 'What general shape would you like?',
    inputs: 'Inputs',
    outputs: 'Outputs',
    of: 'of',
    stitchesShort: 'st',
    // Patterns
    garter: 'Garter',
    doubleMoss: 'Double moss',
    // Shapes
    balanced: 'Balanced',
    thin: 'Thin',
    thick: 'Thick',
    straight: 'Straight',
    // Stitches
    stitchKnit: 'K',
    stitchKnitDescription: 'Knit',
    stitchPurl: 'P',
    stitchPurlDescription: 'Purl',
    stitchKnitFrontBack: 'KFB',
    stitchKnitFrontBackDescription: 'Knit front and back',
    stitchSlipStitchPurlwise: 'SLP',
    stitchSlipStitchPurlwiseDescription: 'Slip stitch purlwise',
    stitchKnitTwoTogether: 'K2Tog',
    stitchKnitTwoTogetherDescription: 'Knit two together',
    stitchWithYarnInFront: 'WYIF',
    stitchWithYarnInFrontDescription: 'With yarn in front',
    // Errors
    lessOrEqual: '%1 (%2) must be smaller than or equal to %3 (%4)',
    nanOutputs: 'Outputs must be a number',
    nanRepetitions: 'Repetitions must be a number',
    constantsUndefined: 'Constant %1 is not defined.',
    invalidBezierParameter: 'Invalid time step %1 for bezier curve',
    invalidIndex: 'Invalid index %1 for bezier array (size: %2)',
    invalidIndexN: 'Invalid index n = %1 for bezier array',
    emptyLastRow: 'Attempt to retrieve last row of an empty pattern',
};
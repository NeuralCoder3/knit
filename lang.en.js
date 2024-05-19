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
        <h3>Knitting Pattern Viewer</h3> Test
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
class ScarfPatternFactory {
  static {
    const cubicBezierFocalPoints = {};
    cubicBezierFocalPoints[lang.balanced] = [{x: 0.6, y: 0.3}, {x: 0.4, y: 0.7}];
    cubicBezierFocalPoints[lang.thin] = [{x: 0.75, y: 0.3}, {x: 0.5, y: 0.7}];
    cubicBezierFocalPoints[lang.thick] = [{x: 0.5, y: 0.3}, {x: 0.25, y: 0.7}];
    cubicBezierFocalPoints[lang.straight] = [{x: 0.5, y: 0.5}, {x: 0.5, y: 0.5}];
    ScarfPatternFactory.cubicBezierFocalPoints = cubicBezierFocalPoints;

    const textures = {};
    textures[lang.garter] = garterRow;
    textures[lang.doubleMoss] = doubleMossStitchRow;
    ScarfPatternFactory.textures = textures;
  }

  constructor(borderStitches) {
    this.borderStitches = borderStitches;
    this.rowsInput = new PatternFactoryInput(
      lang.totalLength,
      lang.totalLengthDescription,
      412, lang.rows);
    this.centerLengthInput = new PatternFactoryInput(
      lang.centerLength,
      lang.centerLengthDescription,
      0, lang.rows);
    this.centerWidthInput = new PatternFactoryInput(
      lang.centerWidth,
      lang.centerWidthDescription,
      25, lang.stitches);
    this.textureInput = new PatternFactoryInput(
      lang.texture,
      lang.textureDescription,
        Object.keys(ScarfPatternFactory.textures)[0], null,
        Object.keys(ScarfPatternFactory.textures));
    this.shapeInput = new PatternFactoryInput(
      lang.shape,
      lang.shapeDescription,
        Object.keys(ScarfPatternFactory.cubicBezierFocalPoints)[0], null,
        Object.keys(ScarfPatternFactory.cubicBezierFocalPoints));
  }

  getInputs() {
    return [
      this.rowsInput, this.centerLengthInput, this.centerWidthInput,
      this.textureInput, this.shapeInput
    ];
  }

  build() {
    if (this.centerLengthInput.numberValue() > this.rowsInput.numberValue())
      throw new Error(lang.lessOrEqual
        .replace('%1', this.centerLengthInput.name)
        .replace('%2', this.centerLengthInput.numberValue())
        .replace('%3', this.rowsInput.name)
        .replace('%4', this.rowsInput.numberValue()));


    const stitchesPerRow = this.#computeStitchesPerRow();
    const output = new Pattern();
    stitchesPerRow.forEach((value, index) => this.#addRow(output, value));
    for (let row = 0; row < this.centerLengthInput.numberValue(); row++)
      this.#addRow(output, this.centerWidthInput.numberValue());
    stitchesPerRow.reverse().forEach(
        (value, index) => this.#addRow(output, value));
    return output;
  }

  #computeStitchesPerRow() {
    const rowsPerSide = Math.floor(
        (this.rowsInput.numberValue() - this.centerLengthInput.numberValue()) /
        2);
    const coordinates =
        ScarfPatternFactory.cubicBezierFocalPoints[this.shapeInput.value()];
    const p0 = {x: 0, y: 0};
    const p1 = {
      x: coordinates[0].x * rowsPerSide,
      y: coordinates[0].y * this.centerWidthInput.numberValue()
    };
    const p2 = {
      x: coordinates[1].x * rowsPerSide,
      y: coordinates[1].y * this.centerWidthInput.numberValue()
    };
    const p3 = {x: rowsPerSide, y: this.centerWidthInput.numberValue()};
    return cubicBezierArray(rowsPerSide, p0, p1, p2, p3);
  }

  #addRow(pattern, desiredStitches) {
    const totalBorderStitches = this.borderStitches * 2;
    const previousStitches = pattern.isEmpty() ?
        0 :
        pattern.lastRow().countOutputStitches() - totalBorderStitches;
    const atEvenRow = pattern.rowsCount() % 2 == 0;

    let growType = null;
    if (atEvenRow && previousStitches < desiredStitches)
      growType = KnitFrontBack;
    else if (atEvenRow && previousStitches > desiredStitches)
      growType = KnitTwoTogether;
    pattern.addRow(
        ScarfPatternFactory
            .textures[this.textureInput.value()](
                pattern.rows.length,
                previousStitches - (growType === KnitTwoTogether ? 1 : 0))
            .borderWrap(growType));
  }
}

function row2x2(rowId, stitches) {
  const rightSide = rowId % 2 == 0;
  const rowBottomKnit = (rowId + 1) % 4 < 2;
  let head = [new StitchSequence(
      rightSide != rowBottomKnit ? [Knit, Knit, Purl, Purl] :
                                   [Purl, Purl, Knit, Knit],
      Math.floor(stitches / 4))];
  let tail = [];
  if (stitches % 4 >= 1)
    tail.push(new StitchSequence([rowBottomKnit ? Knit : Purl], 1));
  if (stitches % 4 >= 2)
    tail.push(new StitchSequence([rowBottomKnit ? Knit : Purl], 1));
  if (stitches % 4 == 3)
    tail.push(new StitchSequence([rowBottomKnit ? Purl : Knit], 1));
  return new Row(
      !rightSide ? [...head, ...tail] : [...tail.reverse(), ...head]);
}

function doubleMossStitchRow(rowId, stitches) {
  return row2x2(rowId, stitches);
}

function garterRow(rowId, stitches) {
  return new Row([new StitchSequence([Knit], stitches)]);
}

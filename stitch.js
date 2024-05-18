class Stitch {
  constructor(inputs, outputs, representation, color, tooltip) {
    if (isNaN(outputs)) throw Error(lang.nanOutputs);
    this.inputs = inputs;
    this.outputs = outputs;
    this.representation = representation;
    this.color = color;
    this.tooltip = tooltip;  // Store the tooltip text
  }

  describe() {
    return `${this.representation} (${lang.inputs}: ${this.inputs}, ${lang.outputs}: ${
        this.outputs})`;
  }

  html() {
    return `<span style="color: ${this.color};" title="${this.tooltip}">${
        this.representation}</span>`;
  }
}

const Knit = new Stitch(1, 1, lang.stitchKnit, '#b3e2cd', lang.stitchKnitDescription);
const Purl = new Stitch(1, 1, lang.stitchPurl, '#fdcdac', lang.stitchPurlDescription);
const KnitFrontBack = new Stitch(1, 2, lang.stitchKnitFrontBack, '#cbd5e8', lang.stitchKnitFrontBackDescription);
const SlipStitchPurlwise = new Stitch(1, 1, lang.stitchSlipStitchPurlwise, '#f4cae4', lang.stitchSlipStitchPurlwiseDescription);
const KnitTwoTogether = new Stitch(2, 1, lang.stitchKnitTwoTogether, '#e6f5c9', lang.stitchKnitTwoTogetherDescription);
const WithYarnInFront = new Stitch(0, 0, lang.stitchWithYarnInFront, '#f4cae4', lang.stitchWithYarnInFrontDescription);
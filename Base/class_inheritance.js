class CurrentStyle {
  constructor(color) {
    this.color = color;
  }

  currentColor() {
    return 'The color is ' + this.color + '.';
  }
}


currentStyle = new CurrentStyle('red');
console.log(currentStyle.color);
console.log(currentStyle.currentColor());
console.log();



// inheritance
class NewStyle extends CurrentStyle {
  constructor(color, font) {
    super(color);
    this.font = font;
  }

  styles() {
    console.log(this.color);
    console.log(this.currentColor());
    console.log(this.font);
    return "The styles changed."
  }
}


newStyles = new NewStyle("blue", "Times New Roman");
console.log(newStyles.styles());
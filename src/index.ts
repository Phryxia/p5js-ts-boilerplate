import P5 from 'p5'

let t = 0

const sketch = (p5: P5) => {
  // The sketch setup method
  p5.setup = () => {
    // Creating and positioning the canvas
    p5.createCanvas(640, 360)
    p5.colorMode(p5.HSB, 1)
    p5.frameRate(60)

    // Configuring the canvas
    p5.background('black')
  }

  // The sketch draw method
  p5.draw = () => {
    p5.fill(0, 1, 0.5)
    p5.circle(p5.width / 2 + Math.sin(2 * Math.PI * t * 0.001) * 100, p5.height / 2, 100)
    t += 1
  }
}

const p5App = document.getElementById('p5-app')!

new P5(sketch, p5App)

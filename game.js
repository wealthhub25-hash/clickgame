const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#87CEEB',
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

let score = 0;
let scoreText;

function preload() {
  this.load.image('chicken', 'chicken.png'); // لازم الصورة
}

function create() {
  const chicken = this.add.sprite(400, 300, 'chicken').setInteractive();
  chicken.on('pointerdown', () => {
    score++;
    scoreText.setText('Score: ' + score);
  });
  
  scoreText = this.add.text(10, 10, 'Score: 0', { fontSize: '32px', fill: '#000' });
}

function update() {}

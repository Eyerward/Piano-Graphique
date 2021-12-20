let gameConfig = {
    type: Phaser.AUTO,
    width: 1024,
    height: 579,
    parent: 'game',
    scene: new Tableau1()
};
let game = new Phaser.Game(gameConfig);

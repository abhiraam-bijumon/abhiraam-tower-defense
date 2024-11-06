namespace SpriteKind {
    export const Plant = SpriteKind.create()
    export const Tower = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile`)) {
        myTower = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Tower)
        tiles.placeOnTile(myTower, mySprite.tilemapLocation())
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    game.gameOver(false)
})
let myEnemy: Sprite = null
let myTower: Sprite = null
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f . . . . . . . . . . 
    . . . . f 1 f f . . . . . . . . 
    . . . . f 1 1 1 f f . . . . . . 
    . . . . f 1 1 1 1 f f f . . . . 
    . . . . f 1 1 1 1 1 1 f f f . . 
    . . . . f 1 1 1 1 1 1 1 f f . . 
    . . . . f 1 1 1 1 1 1 f f . . . 
    . . . . f 1 1 1 1 1 f f . . . . 
    . . . . f 1 1 1 1 1 1 f . . . . 
    . . . . f 1 1 f f f 1 f f . . . 
    . . . . . f f . . f f f f . . . 
    . . . . . . . . . . f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
game.onUpdateInterval(2000, function () {
    myEnemy = sprites.create(img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        `, SpriteKind.Enemy)
    tiles.placeOnRandomTile(myEnemy, assets.tile`myTile2`)
    myEnemy.vx = -20
})

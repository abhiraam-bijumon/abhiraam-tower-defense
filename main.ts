namespace SpriteKind {
    export const Plant = SpriteKind.create()
    export const Tower = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() > 1 && tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile`)) {
        info.changeScoreBy(-1)
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
        mySprite.lifespan = 4000
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite2, otherSprite) {
    sprites.destroy(mySprite)
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    game.gameOver(false)
})
let projectile: Sprite = null
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
info.setScore(2)
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
game.onUpdateInterval(500, function () {
    for (let value of sprites.allOfKind(SpriteKind.Tower)) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 6 . . . . . . . 
            . . . . 6 6 6 6 6 6 . . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . 6 6 6 6 6 6 6 6 6 6 . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 . . . . 
            . . 6 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 6 6 6 6 6 6 . . . 
            . . . . . 6 6 6 6 6 6 6 6 . . . 
            . . . . . . . 6 6 6 6 6 6 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, value, 50, 0)
    }
})

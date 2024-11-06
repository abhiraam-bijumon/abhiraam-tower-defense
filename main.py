@namespace
class SpriteKind:
    Plant = SpriteKind.create()
    Tower = SpriteKind.create()

def on_a_pressed():
    global myTower
    if info.score() > 1 and tiles.tile_at_location_equals(mySprite.tilemap_location(), assets.tile("""
        myTile
    """)):
        info.change_score_by(-1)
        myTower = sprites.create(img("""
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
            """),
            SpriteKind.Tower)
        tiles.place_on_tile(myTower, mySprite.tilemap_location())
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_hit_wall(sprite, location):
    game.game_over(False)
scene.on_hit_wall(SpriteKind.enemy, on_hit_wall)

def on_on_overlap(sprite2, otherSprite):
    sprites.destroy(mySprite)
    sprites.destroy(otherSprite)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

projectile: Sprite = None
myEnemy: Sprite = None
myTower: Sprite = None
mySprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
info.set_score(2)

def on_update_interval():
    global myEnemy
    myEnemy = sprites.create(img("""
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
        """),
        SpriteKind.enemy)
    tiles.place_on_random_tile(myEnemy, assets.tile("""
        myTile2
    """))
    myEnemy.vx = -20
game.on_update_interval(2000, on_update_interval)

def on_update_interval2():
    global projectile
    for value in sprites.all_of_kind(SpriteKind.Tower):
        projectile = sprites.create_projectile_from_sprite(img("""
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
            """),
            value,
            50,
            0)
game.on_update_interval(500, on_update_interval2)

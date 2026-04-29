# TODO:

- [x] Genueinly create a working prototype
- [x] Add a screen lock feture (prevent arrow keys from scrolling)
- [ ] Add start menu
- [x] Add pause menu
- [x] At speed up feture
- [ ] Add difficulty selector (game speed faster)
- [x] Add high score system
> gemini example:
```
// 1. Save a new high score
let currentScore = 5000;
localStorage.setItem('racingHighScore', currentScore);

// 2. Retrieve it later (even after a reload)
let savedHighScore = localStorage.getItem('racingHighScore');

// Since localStorage only stores text, convert it back to a number
let scoreAsNumber = parseInt(savedHighScore); 
```
- [x] Add menu and instructions
- [x] MAKE IT NOT LOOK LIKE SOMEONE GAVE A 5 YEAR-OLD ACCESS TO MICROSOFT PAINT
- [x] add more lines to the road so that is is acually a road and not a gray plane with colored rectangles
- [x] make lane lines better
- [x] Add game over screen
- [x] add score/lives to pause menu
- [ ] Create crash indicator (explosion or something)
- [ ] Make road lines slow down on crash (right now speed is attached to gameScore needs to be a new variable)
- [x] Lives Looks so bad
- [ ] Add side blocks

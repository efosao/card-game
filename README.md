## Requirements

- Create class that represents a deck of cards
- Create an HTML/CSS UI for a game that interacts with this deck of cards class
- Please make sure there is a valid package.json file in the root of the repo
- Upload this homework to a github repository or a github gist

## Todo

- Create `CardDeck` and `Card` Classes.
- Deck
  - 52 card
  - 4 suits -> Clubs, Diamonds, Hearts, Spades
  - Ace -> 10, Jack, Queen, King

### Class Definitions

#### Deck Class

- Properties
  - id (auto)
  - name (string, opt)
  - color (string, opt)
  - Cards[] - 52
- Methods to implement
  - Constructor - ({ color: optional, name: optional })
  - Swap (a, b) - swaps any two cards
  - Shuffle () - shuffles deck
  - Reset () - reinitializes card deck

#### Card Class

- Props
  - value [1 - 10, j, q, k]
  - suite [c, d, h, s]

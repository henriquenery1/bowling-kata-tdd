import { Game } from './game'

let game = new Game();

describe("Game", () => {
  it("should score 0 for gutter game ", () => {
    expect(game.score()).toBe(0);
  });
});

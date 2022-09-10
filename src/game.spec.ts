import { Game } from "./game";

let game = new Game();

describe("Game", () => {
  it("should score 0 for gutter game ", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });
});

function rollMany(plays: number, downPins: number): void {
  for (let i = 0; i < plays; i++) {
    game.roll(downPins);
  }
}

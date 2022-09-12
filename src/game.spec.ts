import { Game } from "./game";

let game: Game = new Game();

beforeEach(() => {
  game = new Game();
});

describe("Game", () => {
  it("should score 0 for gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it("should score 20 for all ones game", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it("should score 14 for spare followed by a 2 ball", () => {
    rollSpare();
    game.roll(2);
    expect(game.score()).toBe(14);
  });

  it("should score 24 for a strike followed by a 3 and a 4 ball", () => {
    rollStrike()
    game.roll(3)
    game.roll(4)
    expect(game.score()).toBe(24);
  });
});

function rollMany(plays: number, downPins: number): void {
  for (let i = 0; i < plays; i++) {
    game.roll(downPins);
  }
}

function rollStrike (): void {
  game.roll(10)
}

function rollSpare(): void {
  game.roll(5);
  game.roll(5);
}

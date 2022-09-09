export class Game {
  private totalPlays: number = 20;
  private rolls: number[] = new Array(this.totalPlays++).fill(0);
  private currentRoll: number = 0

  score(): number {
    const score: number = this.rolls.reduce((a, b) => a + b, 0)
    return score
  }
}

export class Game {
  private totalPlays: number = 20;
  private rolls: number[] = new Array(this.totalPlays++).fill(0);
  private currentRoll: number = 0;
  private frameIndex: number = 0;
  private spareValue: number = 10;
  private strikeValue: number = 10;

  score(): number {
    let score: number = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isSpare(this.frameIndex)) {
        score = this.spareValue + this.spareBonus(this.frameIndex);
        this.frameIndex += 2;
      } else if (this.isStrike(this.frameIndex)) {
        score += this.strikeValue + this.strikeBonus(this.frameIndex)
        this.frameIndex++ 
      } else {
        score += this.sumOfBallsInFrame(this.frameIndex);
        this.frameIndex += 2;
      }
    }
    return score;
  }

  private isSpare(frameIndex: number): boolean {
    return (
      this.rolls[frameIndex] + this.rolls[frameIndex + 1] === this.spareValue
    );
  }

  private isStrike(frameIndex: number): boolean {
    return this.rolls[frameIndex] === this.strikeValue;
  }

  private strikeBonus(frameIndex): number {
    return this.rolls[frameIndex + 1] +
           this.rolls[frameIndex + 2]
  }

  private spareBonus(frameIndex: number): number {
    return this.rolls[frameIndex + 2];
  }

  private sumOfBallsInFrame(frameIndex: number): number {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  roll(downPins: number): void {
    this.rolls[this.currentRoll++] = downPins;
  }
}

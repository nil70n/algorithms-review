type Position = {
  r: number,
  c: number,
};

export default class Fisher {
  private _max: number = 0;
  private _visited: Position[] = [];

  is_position_available (position: Position, fishing_land: number[][]): boolean {
    return position.r >= 0 
      && position.r < fishing_land.length
      && position.c >= 0 
      && position.c < fishing_land[0].length
      && fishing_land[position.r][position.c] > 0
      && !this._visited.some(v => v.r === position.r && v.c === position.c);
  }

  sum_fishing_spot (position: Position, fishing_land: number[][]): number {
    let total = fishing_land[position.r][position.c];
    this._visited.push(position);

    const next_positions: Position[] = [];

    next_positions.push({ r: position.r - 1, c: position.c } as Position);
    next_positions.push({ r: position.r, c: position.c - 1 } as Position);
    next_positions.push({ r: position.r + 1, c: position.c } as Position);
    next_positions.push({ r: position.r, c: position.c + 1 } as Position);

    for (let i = 0; i < next_positions.length; ++i) {
      if (this.is_position_available(next_positions[i], fishing_land)) {
        total += this.sum_fishing_spot(next_positions[i], fishing_land);
      }
    }

    return total;
  }

  public fish_search(fishing_land: number[][]): number {
   for (let i = 0; i < fishing_land.length; ++i) {
    for (let j = 0; j < fishing_land[0].length; ++j) {
      const position = { r: i, c: j } as Position;
      if (this.is_position_available(position, fishing_land)) {
        const spot_total = this.sum_fishing_spot(position, fishing_land);
        this._max = spot_total > this._max ? spot_total : this._max;
      }
    }
   }

   return this._max;
  }
}


import Fisher from "@code/Fisher";

test("Max Fish", function() {
  expect((new Fisher()).fish_search([[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]])).toEqual(7);
  expect((new Fisher()).fish_search([[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]])).toEqual(1);
  expect((new Fisher()).fish_search([[1,0,3,0],[2,2,1,0],[0,0,0,9],[0,0,2,1]])).toEqual(12);
  expect((new Fisher()).fish_search([[1,0,3,0],[2,2,1,0],[0,0,0,2],[0,0,2,1]])).toEqual(9);
});

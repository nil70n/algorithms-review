import HashMap from "@code/HashMap";
import { test_list } from "./SingleLinkedList";

test("Hash Map", function () {
  const list = new HashMap<number>();
  test_list(list);
});

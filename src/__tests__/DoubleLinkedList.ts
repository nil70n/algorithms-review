import DoubleLinkedList from "@code/DoubleLinkedList";
import { test_list } from "./SingleLinkedList";

test("Double linked list", function() {
  const list = new DoubleLinkedList<number>();
  test_list(list);
});

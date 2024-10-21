import { assertEquals } from "@std/assert/equals";
import { anagrams } from "./anagrams.ts";

Deno.test("anagrams test", () => {
  assertEquals<boolean>(anagrams("Listen", "Silent"), true);

  assertEquals<boolean>(anagrams("Dormitory", "Dirty room"), true);

  assertEquals<boolean>(anagrams("rail safety", "fairy tales"), true);

  assertEquals<boolean>(anagrams("RAIL! SAFETY!", "fairy tales"), true);

  assertEquals<boolean>(anagrams("abc", "def"), false);

  assertEquals<boolean>(anagrams("Hi there", "Bye there"), false);

  assertEquals<boolean>(anagrams("One one", "One one c"), false);
});

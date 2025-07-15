import { it } from "vitest";
import memoizeDecorator from "@github/memoize/decorator";
import memoize from "@github/memoize";

class BaseFilterElement {
  // Removing either the decorator or the memoize call resolves the issue.
  // Using them together, with keepNames enabled, causes the error.
  @memoizeDecorator()
  someFunction() {
    memoize(() => {});
  }
}

it("run the test without issues", () => {});

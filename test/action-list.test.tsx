import { it, expect } from "vitest";
import { ActionListElement } from "@primer/view-components/app/components/primer/alpha/action_list";

it("should create action-list element", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  container.innerHTML = `
    <action-list>
      <div class="ActionListItem" role="option">
        <div class="ActionListItem-label">Test Action</div>
      </div>
    </action-list>
  `;

  const actionList = container.querySelector("action-list");
  expect(actionList).toBeTruthy();
  expect(actionList instanceof ActionListElement).toBe(true);

  document.body.removeChild(container);
});

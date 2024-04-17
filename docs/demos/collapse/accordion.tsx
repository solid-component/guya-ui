import { Collapse } from "happy-ui";
export function Accordion() {
  return (
    <div>
      <Collapse accordion>
        <Collapse.Panel label={"面板1"} key="1">
          <div>
            Consistent with real life: in line with the process and logic of
            real life, and comply with languages and habits that the users are
            used to; Consistent within interface: all elements should be
            consistent, such as: design style, icons and texts, position of
            elements, etc.
          </div>
        </Collapse.Panel>
        <Collapse.Panel label={<div>面板2</div>} key="2">
          <div>
            Operation feedback: enable the users to clearly perceive their
            operations by style updates and interactive effects; Visual
            feedback: reflect current state by updating or rearranging elements
            of the page.
          </div>
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}

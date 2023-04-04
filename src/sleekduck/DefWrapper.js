import React from "react";
import Box from "../wrappers/Box";
import Def from "../wrappers/Def";

export default function DefWrapper() {
  return (
    <Box title="<Def>" level="h3" collapse>
      <Def title="About" indent>
        Wrapper Def gives with dictionary-like structure. Intended for inline text children, that will be passed to unformatted paragraph{" "}
          <strong>&lt;p&gt;</strong> element, but can easily be adapted for any element using property <strong>div</strong>.
      </Def>
      <Def title="Properties" indent>
        <Def title="title" inline>
          Pass the title through property "title". The title will be rendered
          semibold using title color.{" "}
        </Def>
        <Def title="(default)" inline>
          If no layout property added, it will assume the default where the text
          explanation is added under the title.
        </Def>
        <Def title="(children)" inline>
          Since this wrapper firstly designed with dictionary in mind, without
          additional indicator, children will be passed to a paragraph{" "}
          <strong>&lt;p&gt;</strong> element.
        </Def>
        <Def title="indent" inline>
          In indent, the text explanation is added under the title, indented.
        </Def>
        <Def title="inline" inline>
          In inline, the text explanation will be added in the same line with
          the text.
        </Def>
        <Def title="div" inline>
          When the children is wrapped in block element(s), use property div to pass them into a <strong>&lt;div&gt;</strong> element.
        </Def>
        <Def title="div indent" inline>
          Div can be made with indentation.
        </Def>
      </Def>
      <Def title="Additional notes" indent>
        About and properties (list) above are using indent layout. The property
        items are using inline layout. This Additional notes is using default
        layout, no property added. The 3 layout together create comprehensive
        and pleasant to follow notes.
      </Def>
      <Def title="Examples" indent>
        For now, check out the notes on <strong>&lt;Button&gt;</strong>. It is made with nesting <strong>&lt;Def&gt;</strong> of variety of property combinations. The wrapper itseld is better not used.
      </Def>
    </Box>
  );
}

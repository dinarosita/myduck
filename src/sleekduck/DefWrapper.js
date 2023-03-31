import React from "react";
import Box from "../wrappers/Box";
import Def from "../wrappers/Def";

export default function DefWrapper() {
  return (
    <Box title="<Def>" collapse>
      <Def title="About" indent>
        Wrapper Def deals with definition-like structure.
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
        <Def title="indent" inline>
          In indent, the text explanation is added under the title, indented.
        </Def>
        <Def title="inline" inline>
          In inline, the text explanation will be added in the same line with
          the text.
        </Def>
      </Def>
      <Def title="Additional notes">
        About and properties (list) above are using indent layout. The property items are using inline layout. This Additional notes is using default layout, no property added. The 3 layout together create comprehensive and pleasant to follow notes.
      </Def>
    </Box>
  );
}

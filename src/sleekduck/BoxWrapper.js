import React from "react";
import Box from "../wrappers/Box";

export default function BoxWrapper() {
  return (
    <Box collapse level="h3" title="<Box>">
      <p>
        Box wrapper recognized a lot of properties. The boxes below will
        demonstrate, starting from the most modest one, plain &lt;Box&gt;. As
        you can see throughout the page here, nesting Boxes is not merely
        possible, but also looking very neat.
      </p>

      <div>
        <Box title="No property" collapse>
          <Box>
            <p>Plain &lt;Box&gt;.</p>
          </Box>
          <Box>
            <p>No property.</p>
          </Box>
          <Box>
            <p>As you can see, by default a border is applied.</p>
          </Box>
        </Box>

        <Box title="title & level" collapse>
          {" "}
          <Box title="title">
            <p>Title can be added through "title" property.</p>
          </Box>
          <Box level="h3" title='level="h3"'>
            <p>
              The heading level of the title can be included in "level" property
              that currently reconizes "h2" and "h3". This one is using "h3".
            </p>
          </Box>
          <Box level="h2" title='level="h2"'>
            <p>
              This one is using level "h2". Please code this line using all
              lowercase letters. It's only capitalized because the h2 styling
              includes "uppercase".
            </p>
          </Box>
        </Box>

        <Box title="collapse" collapse>
          <Box collapse title="collapse">
            <p>
              The box can be made collapsible with collapsed state as the
              default through property "collapse". For demonstration of how neat
              it looks, the rest of the boxes will be using collapse property
              too.
            </p>
          </Box>
          <Box collapse>
            This can even be done without a title, because the collapse
            indicator is still there.
          </Box>
          <Box collapse expand title="expanded (future work)">
            In the future, collapse box will allow expanded state as a starting
            point through property "expanded". When property expanded is added,
            property "collapse" doesn't have to be included because it will be
            assumed by property expanded itself.
          </Box>
        </Box>

        <Box title="addStyle" collapse>
          <Box addStyle="text-red-500" title="addStyle">
            <p>
              Additional style can be attached through "addStyle" property. This
              one is adding bold and red text to the style:
            </p>
            <p>addStyle="text-red-500 font-bold"</p>
          </Box>
          <Box addStyle="border-4" title="addStyle">
            <p>This one adds "border-4.</p>
            <p>addStyle="border-4"</p>
          </Box>
          <Box
            title="addStyle & collapse"
            collapse
            addStyle="border-dashed border-gold-700 border-2"
          >
            <p>This one is using addStyle and collapse</p>
          </Box>
        </Box>
        <Box title="noborder" collapse>
          <Box title="noborder" noborder>
            If border is not desired, it can be removed using "noborder"
            property.
          </Box>
          <Box title="noborder" noborder>
            Here is another noborder. Even though it doesn't have the border,
            the separation from other field can be seen because padding and
            margin are still applied.
          </Box>
          <Box title="noborder" noborder>
            Its' true that noborder can also be achieved by adding "border-0" to
            Addstyle property. However, it's such a common need, it deserves its
            own property.
          </Box>
        </Box>
        <Box title="noborder collapse" collapse>
          <Box title="Combo noborder collapse" noborder collapse>
            It's pretty obvious that noborder collapse is possible.
          </Box>
          <Box title="Another one" noborder collapse>
            However here it is still, displayed here for the visual.
          </Box>
          <Box title="Isn't it cute" noborder collapse>
            Just another tidy and neat way to create a clean look.
          </Box>
        </Box>
      </div>
    </Box>
  );
}

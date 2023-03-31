import React from "react";
import Box from "../wrappers/Box";
import SnapFlex from "../wrappers/SnapFlex";

export default function SnapFlexWrapper() {
  return (
    <Box collapse level="h3" title="<SnapFlex>">
      <p>
        This wrapper makes a column flex in small screen and row for regular
        screen.
      </p>
      <SnapFlex grow>
        <Box addStyle="grow">Item 1</Box>
        <Box addStyle="grow">Item 2</Box>
        <Box addStyle="grow">Item 3</Box>
        <Box addStyle="grow">Item 4</Box>
      </SnapFlex>
    </Box>
  );
}

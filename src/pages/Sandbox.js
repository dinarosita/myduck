import React from "react";
import Box from "../wrappers/Box";

export default function Sandbox() {
  return (
    <main className="flex-1 shrink grow overflow-y-auto">
      <Box level="h2" title="Sandbox" noborder>
        {/* Insert your code here */}
        <div class="bg-gradient-to-b from-sol-l to-sol">
 
       

Force height to be screen height.
1. Body flex: made fit screen-h, flex-col
2. Header made fit-content-h
3. MainContent made flex grow to max
4. Navibar: h-max to parent, scrollable.
5. Main: h-max to parent, flex col
   a. Chat title fit-content-h
   b. Msg history: Flex grow to fit parent
   c. Add chat: fit-content-h
</div>
        {/* Code end */}
      </Box>
    </main>
  );
}

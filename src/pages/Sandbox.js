import React from "react";

export default function Sandbox() {
  return (
    <main>
      <h1>Sandbox</h1>
      {/* Insert your code here */}
      <div class="m-4 border border-sol bg-gradient-to-b from-white to-sol-100 p-4">
        <p>
          This is default font for regular text{" "}
          <code>and this is code element inserted </code>
        </p>
        <pre>And this is pre element.</pre>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing <code>quam in odio</code> suspendisse ultricies quam in odio sodales, nec malesuada sapien <code>example</code> praesent bibendum molestie nisl sit amet ultricies.
      </p>
      </div>
      <div class="m-4 border border-sol">
        <p>
          This is default font for regular text{" "}
          <code>and this is code element inserted </code>
        </p>
        <pre>And this is pre element.</pre>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing <code>quam in odio</code> suspendisse ultricies quam in odio sodales, nec malesuada sapien <code>example</code> praesent bibendum molestie nisl sit amet ultricies.
      </p>
      </div>

      {/* Code end */}
    </main>
  );
}

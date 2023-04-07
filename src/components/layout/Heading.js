import React from 'react'

export default function Heading() {
  return (
    <div className="border-screen border-b flex-none">
    <div
      id="heading-effective"
      className="w-effective flex items-center justify-between leading-none"
    >
      <div id="headingLeft" className="flex gap-2">
        <div id="chatBurger">
          <button id="chatIcon" className="border-guide px-1 text-red">
            {" "}
            ={" "}
          </button>
          <nav id="useChatNav" className="hidden">
            Chat Nav
          </nav>
        </div>
        <div id="siteName">MyDuck</div>
      </div>

      <div id="headingRight" className="flex gap-2">
        <div id="pageBurger">
          <nav id="pageOptions">PageNav</nav>
        </div>
        <div id="addChat" className="border-guide px-1 text-red">
          {" "}
          +{" "}
        </div>
        <div id="login" className="border-guide px-1 text-red">
          {" "}
          O{" "}
        </div>
      </div>
    </div>
  </div>
  )
}

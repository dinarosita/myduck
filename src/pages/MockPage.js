import React from 'react'

export default function MockPage() {
  return (
    <div id="screen" className="flex flex-col h-screen w-screen sm:max-w-screen-sm border-8 border-sol-300 gap-2">
      <div id="heading" className="flex-none border-8 border-blue-300">
        Heading
      </div>
      <div id="mainContent" className="flex flex-row flex-auto border-blue-300 border-8 gap-2">
        <div id="navigation" className="flex flex-col h-full border-4 border-red-300  gap-2">
          <div id="navHead" className="flex-none  border-4 border-green-300">Navigation</div>
          <nav className="flex-auto overflow-y-auto scrollbar-y h-full  border-4 border-green-300 ">
            <ul>
              <li>Item 1</li>
              <li>item 2</li>
              {/* Add more list items here */}
            </ul>
          </nav>
          <div id="navFoot" className="flex-none  border-4 border-green-300">Motto</div>
        </div>
        <main className="flex flex-col flex-auto border-4 border-red-300  gap-2">
          <header className="flex-none  border-4 border-green-300">Article Title</header>
          <section className="flex-auto overflow-y-auto scrollbar-y h-full  border-4 border-green-300">
            Article Content
            {/* Add more content here */}
          </section>
          <footer className="flex-none  border-4 border-green-300">Article Footer</footer>
        </main>
      </div>
      <div id="footing" className="flex-none border-blue-300 border-8">
        Footing
      </div>
    </div>
  )
}

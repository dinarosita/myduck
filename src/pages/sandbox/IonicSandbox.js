import React, { useState } from 'react'
import IconButton from '../../components/ui/IconButton';
import Box from '../../wrappers/Box';

export default function IonicSandbox() {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
  
    const handleIconClick = () => {
      alert("Icon clicked");
    };
  
  return (
    <Box title="ion-icons" addClass="p-4 flex flex-col gap-2 items-start">
    <Box title="onMouseEnter onMouseLeave approach" addClass="w-full">
      <button
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="focus:shadow-outline rounded-sm font-bold leading-none text-sol hover:text-sol focus:outline-none"
      >
        <ion-icon
          name={isHovered ? "eye-sharp" : "eye-outline"}
          style={{ fontSize: "24px" }}
        ></ion-icon>
      </button>

      <IconButton ionic="eye" onClick={handleIconClick} />
    </Box>
    <Box title="Hidden block approach" addClass="w-full">
      <button className="h-6 w-6 border border-sol">
        <div className="hover:hidden">
          <ion-icon
            name="leaf-outline"
            style={{ fontSize: "24px" }}
          ></ion-icon>
        </div>
        <div className=" hidden hover:block">
          <ion-icon
            name="leaf-sharp"
            style={{ fontSize: "24px" }}
          ></ion-icon>
        </div>
      </button>
    </Box>
    <Box title="Static" addClass="w-full">
      <button className="flex h-7 w-7 items-center justify-center rounded-full border border-sol bg-white text-sol hover:bg-sol hover:text-white">
        <ion-icon
          name="leaf-outline"
          style={{ fontSize: "20px" }}
        ></ion-icon>
      </button>
    </Box>
    <Box title="Class" addClass="w-full">
      <button
        onClick={() => {
          alert("hi");
        }}
      >
        <ion-icon
          name="heart"
          class="text-2xl font-bold text-sol hover:text-sea-600"
        ></ion-icon>
      </button>
    </Box>
    <Box title="IconButton" addClass="w-full">
      <IconButton linkto="/myduck" ionic="chatbubble" />
      <IconButton onClick={() => alert("Icon Button")} ionic="leaf" />
      <IconButton onClick={() => alert("Icon Button")} ionic="leaf" color="blue-500" hover="purple-500" size="3xl"  />
      <IconButton />
    </Box>
  </Box>
  )
}

import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import {
  BeakerIcon,
  BookOpenIcon,
  NewspaperIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  PuzzlePieceIcon,
  CubeIcon,
  SparklesIcon,
  WrenchIcon,
  AdjustmentsHorizontalIcon,
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  CheckCircleIcon,
  XCircleIcon,
  SwatchIcon,
  TrashIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

export default function Sandbox() {
  const windowSize = useWindowSize();
  return (
    <div className="pass-overflow w-full p-2">
      <main className="w-effective blush-frame pass-overflow flex h-full flex-col text-vincent-800">
        <header className="blush-header">
          <h1>Sandbox</h1>
          <p className="tagline">Currently no experiment</p>
        </header>

        <section className="pass-overflow flex flex-auto flex-col  gap-2 bg-transparent/20 p-2 text-petal">
          <div>
            <h2>Window size</h2>
            <p>Width: {windowSize.width}</p>
            <p>Height: {windowSize.height}</p>
          </div>

          <div>
            <h2>Heroicon</h2>

            <BeakerIcon className="blush-button h-6 w-6" />
            <BookOpenIcon className="blush-button h-6 w-6" />
            <NewspaperIcon className="blush-button h-6 w-6" />
            <GlobeAltIcon className="blush-button h-6 w-6" />
            <CodeBracketIcon className="blush-button h-6 w-6" />
            <PuzzlePieceIcon className="blush-button h-6 w-6" />
            <CubeIcon className="blush-button h-6 w-6" />
            <SparklesIcon className="blush-button h-6 w-6" />
            <WrenchIcon className="blush-button h-6 w-6" />
            <AdjustmentsHorizontalIcon className="blush-button h-6 w-6" />
          </div>
          <div>
            <h2>Center mid child</h2>
            <div className="flex w-full justify-between">
              <div className="flex-1">
                <div className="bg-blue-500 p-4">Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1Child 1</div>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="bg-green-500 p-4">Child 2</div>
              </div>
              <div className="flex flex-1 justify-end">
                <div className="bg-red-500 p-4">Child 3</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

import React, { useContext } from "react";
import { MockArrayContext } from "../pages/MockArrayContext";

export default function UsingUseArray() {
  const { mockArray, setMockArray } = useContext(MockArrayContext);

  return (
    <div className="flex-col-center">
      <h2>useArray</h2>
      <div className="sandbox">
        <div>Student List</div>
        <ul className="w-full space-y-1">
          {mockArray.length ? (
            mockArray.map((el) => (
              <li className="sandbox-display w-full ">{el.name}</li>
            ))
          ) : (
            <li className="sandbox-display w-full text-petal/50">
              Waiting for first student
            </li>
          )}
        </ul>
        <button className="sandbox-button">Add student</button>
      </div>
    </div>
  );
}

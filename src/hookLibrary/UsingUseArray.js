import React, { useContext, useRef } from "react";
import { MockArrayContext } from "../pages/MockArrayContext";
import useArray from "../hooks/useArray";

export default function UsingUseArray() {
  const { mockArray, setMockArray } = useContext(MockArrayContext);
  const { addItem } = useArray(setMockArray);
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    addItem({ id: Date.now(), name: nameRef.current.value, archived: false });
    nameRef.current.value = "";
  }

  return (
    <div className="flex-col-center">
      <h2>useArray</h2>
      <div className="sandbox">
        <div className="font-bold ">Student List</div>
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
        <div className="mt-4 font-bold">New Student Form</div>
        <form className="flex flex-row" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student name..."
            className="sandbox-input"
            ref={nameRef}
          />
          <button type="submit" className="sandbox-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

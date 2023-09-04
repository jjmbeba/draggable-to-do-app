"use client";

import { useStore } from "@/src/lib/store";
import React, { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import Image from "next/image";
import Circle from "@/public/circle.svg";
import CircleDark from "@/public/circleDark.svg";
import CheckedCircle from "@/public/checkedCircle.svg";
import Close from "@/public/delete.svg";
import { useTheme } from "next-themes";
import FilterPicker from "./FilterPicker";

type Props = {};

const ToDoList = (props: Props) => {
  const [todos, setTodos, activeSelection, deleteTodo, toggleDone, deleteCompletedTodos] = useStore(
    (state) => [
      state.todos,
      state.setTodos,
      state.activeSelection,
      state.deleteTodo,
      state.toggleDone,
      state.deleteCompletedTodos
    ]
  );

  const activeTodos = todos.filter(({ status }) => !status);
  const completedTodos = todos.filter(({ status }) => status);

  const [displayTodos, setDisplayTodos] = useState(todos);

  const { theme } = useTheme();

  const handleDragEnd = (result: DropResult) => {
    //Don't reorder if there is no destination
    if (!result.destination) return;

    //Make a copy of the items
    const todosCopy = [...displayTodos];

    const [reorderedTodo] = todosCopy.splice(result.source.index, 1);
    todosCopy.splice(result.destination.index, 0, reorderedTodo);

    setDisplayTodos(todosCopy);
  };

  useEffect(() => {
    if (activeSelection === "All") {
      setDisplayTodos(todos);
    } else if (activeSelection === "Active") {
      setDisplayTodos(activeTodos);
    } else if (activeSelection === "Completed") {
      setDisplayTodos(completedTodos);
    }
  }, [activeSelection, todos]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div
        className={`${
          theme === "light" ? "bg-white shadow-list" : "bg-[#25273D] shadow-list-dark"
        } md:mx-auto max-w-[540px] rounded-[5px] pt-[19px] pb-[22px]`}
      >
        <Droppable droppableId="list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {displayTodos.map(({ id, content, status }, index) => (
                <Draggable draggableId={id} key={id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      key={id}
                      className={`first:pt-0 pt-[19px] pb-[21px] flex items-center border-b ${
                        theme === "dark" && "border-b-[#393A4B]"
                      } px-5 md:px-6`}
                    >
                      <div className="flex items-center gap-3 md:gap-6 flex-1">
                        <Image
                          src={status ? CheckedCircle : Circle}
                          alt="circle-icon"
                          onClick={() => toggleDone(id)}
                        />
                        <span
                          className={`text-[0.75rem] md:text-[1.125rem] leading-[-0.167px] md:leading-[-0.25px] ${
                            status
                              ? `line-through  ${
                                  theme === "light"
                                    ? "text-[#D1D2DA]"
                                    : "text-[#4D5067]"
                                } `
                              : ` ${
                                  theme === "light"
                                    ? "text-[#494C6B]"
                                    : "text-[#C8CBE7]"
                                }`
                          } `}
                        >
                          {content}
                        </span>
                      </div>
                      <Image onClick={() => deleteTodo(id)} src={Close} className="cursor-pointer" alt="close-icon" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div
          className={` ${
            theme === "light" ? "text-[#9495A5]" : "text-[#5B5E7E]"
          } text-[0.75rem] md:text-[0.875rem] leading-normal tracking-[-0.167px] flex items-center justify-between pt-4 px-5`}
        >
          <span>
            {activeSelection === "Active" || activeSelection === "All"
              ? `${activeTodos.length} items left`
              : activeSelection === "Completed" && `${completedTodos.length} items completed` }
          </span>
          <FilterPicker className="hidden md:flex" />
          <span onClick={() => deleteCompletedTodos()} className="hover:text-white cursor-pointer">Clear completed</span>
        </div>
      </div>
      <FilterPicker className={`md:hidden rounded-[5px] ${theme === 'light' ? 'shadow-list' : 'shadow-list-dark'} mt-4 py-4`} />
      <div className={`mt-10 md:mt-12 flex items-center justify-center text-[0.875rem] leading-[-0.194px] ${theme === 'light' ? 'text-[#9495A5]' : 'text-[#5B5E7E]'}`}>Drag and drop to reorder list</div>
    </DragDropContext>
  );
};

export default ToDoList;

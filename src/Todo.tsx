import React, { FC, VFC } from "react";

interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const Todo: VFC<Pick<TodoType, "userId" | "title" | "completed">> = ({
  userId,
  title,
  completed,
}) => {
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark} ${title}(user: ${userId})`}</p>;
};

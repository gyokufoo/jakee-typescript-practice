import { userInfo } from "os";
import React, { FC, VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = ({ user }) => {
  const { name, hobbies } = user;
  return (
    <dl>
      <dt>name</dt>
      <dd>{name}</dd>
      <dt>hobbies</dt>
      <dd>{hobbies?.join(" / ")}</dd>
    </dl>
  );
};

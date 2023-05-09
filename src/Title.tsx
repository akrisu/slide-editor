import { Typography } from "antd";
import { useState } from "react";

export const Title = () => {
  const [title, setTitle] = useState("Insert a title here");

  return (
    <Typography.Title
      className="cursor-pointer !mx-auto w-fit"
      editable={{ onChange: setTitle, triggerType: ["text"] }}
      level={4}
      style={{ margin: 0 }}
    >
      {title}
    </Typography.Title>
  );
};

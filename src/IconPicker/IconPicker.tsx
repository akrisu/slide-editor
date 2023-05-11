import { Icon } from "@mui/material";
import { Modal, Space } from "antd";
import { FC } from "react";

import { IconName, iconNames } from "./icon-names";

type Props = {
  readonly onIconSelect: (name: IconName) => void;
  readonly onCancel: () => void;
  readonly open: boolean;
};

export const IconPicker: FC<Props> = ({ onIconSelect, onCancel, open }) => {
  return (
    <Modal
      bodyStyle={{ margin: "25px", height: "400px", overflow: "auto" }}
      footer={null}
      maskClosable={true}
      onCancel={onCancel}
      open={open}
    >
      <Space direction="horizontal" wrap={true} size={16}>
        {iconNames.map((icon) => (
          <Icon
            className="cursor-pointer !text-3xl"
            onClick={() => onIconSelect(icon)}
          >
            {icon}
          </Icon>
        ))}
      </Space>
    </Modal>
  );
};

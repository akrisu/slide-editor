import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import Icon from '@mui/material/Icon'
import { Typography } from 'antd'
import { FC, useState } from 'react'

import { IconName, IconPicker } from '../IconPicker'

const { Paragraph } = Typography;

type Props = {
  readonly defaultIcon: IconName;
};

export const Section: FC<Props> = ({ defaultIcon }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [icon, setIcon] = useState<IconName>(defaultIcon);
  const [mainText, setMainText] = useState("Insert text here");
  const [additionalText, setAdditionalText] = useState(
    "Add here your additional text"
  );

  const handleIconSelect = (iconName: IconName) => {
    setIcon(iconName);
    setPickerVisible(false);
  };

  const { attributes, listeners, transition, transform, setNodeRef } =
    useSortable({ id: defaultIcon });

  const style = { transform: CSS.Transform.toString(transform), transition };

  return (
    <div
      className="cursor-move grid gap-2"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <IconPicker
        onCancel={() => setPickerVisible(false)}
        onIconSelect={handleIconSelect}
        open={pickerVisible}
      />
      <Icon
        className="cursor-pointer justify-self-center !text-3xl"
        onClick={() => setPickerVisible(true)}
      >
        {icon}
      </Icon>
      <Paragraph
        className="bg-purple-300 cursor-pointer justify-self-center w-fit"
        editable={{ onChange: setMainText, triggerType: ["text"] }}
      >
        {mainText}
      </Paragraph>
      <Paragraph
        className="cursor-pointer justify-self-center"
        editable={{ onChange: setAdditionalText, triggerType: ["text"] }}
      >
        {additionalText}
      </Paragraph>
    </div>
  );
};

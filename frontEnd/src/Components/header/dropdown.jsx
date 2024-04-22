import React from "react";
import { Button, Dropdown, Space } from "antd";
import { IconMenu2 } from "@tabler/icons-react";
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const DropdownHeader = () => (
  <Space direction="vertical">
    <Dropdown
      menu={{
        items,
      }}
      placement="bottom"
      className="h-14 px-2"
    >
      <Button className="rounded-full flex justify-center items-center gap-2">
        <IconMenu2 stroke={2} />
        <div className="w-10 h-10 rounded-full bg-black text-white flex justify-center items-center">A</div>
      </Button>
    </Dropdown>
  </Space>
);
export default DropdownHeader;

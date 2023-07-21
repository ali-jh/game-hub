import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatfor, { Platform } from "../hooks/usePlatform";
import { useState } from "react";

interface Props {
  onSelected: (platform: Platform) => void;
  selectedPlatform: Platform | null
}

const SelectedPlatform = ({ onSelected  , selectedPlatform}: Props) => {
  const { data, errors } = usePlatfor();
  if (errors) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data.map((d) => (
          <MenuItem key={d.id} onClick={() => onSelected(d)} >
            {d.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SelectedPlatform;





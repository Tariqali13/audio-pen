import React from "react";
import { ProfileIcon, ProductBadge, SettingIcon } from "@/src/icons";

const Header = ({ handleOpenLoginSignUpModel }) => {
  return (
    <div class="w-full px-5 pt-5 mb-10 justify-between items-start flex">
      <ProfileIcon handleClick={handleOpenLoginSignUpModel} />
      <div class="justify-center items-center flex">
        <ProductBadge handleClick={handleOpenLoginSignUpModel} />
      </div>
      <SettingIcon handleClick={handleOpenLoginSignUpModel} />
    </div>
  );
};

export { Header };

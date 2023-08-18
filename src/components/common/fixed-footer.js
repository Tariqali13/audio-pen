import React from "react";
import { MicroPhone, MoveTop, Edit } from "@/src/icons";

const FixedFooter = (props) => {
  return (
    <div className="w-full h-20 px-5 bottom-[20px] justify-between flex items-end flex-row fixed">
      <MoveTop {...props} />
      <MicroPhone {...props} />
      <Edit {...props} />
    </div>
  );
};

export { FixedFooter };

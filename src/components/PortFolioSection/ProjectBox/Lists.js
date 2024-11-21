import React from "react";
import { v4 as uuidv4 } from "uuid";
import Icon from "../../../assets/icons/Icon";
import { Tag } from "@common";

const Lists = ({ className, list }) => {
  if (className == 'tech-icons') {
    return <div className={className}>
      {list.map(tech => <Tag key={uuidv4()}
        imgStyles={{ width: '25px', height: '24px' }}
        src={tech} text={"react"} />)}
    </div>
  }

  if (className == 'links') {
    return <div className={className}>
      {list.map(link => <div key={uuidv4()} onClick={() => location.href = `${link.url}`}>
        {<Icon
          width="30px"
          height="40px"
          viewBox="0 -5 30 40"
          name={link.logoName}
        />}
      </div>
      )}
    </div>
  }
}

export default Lists;
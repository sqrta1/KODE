import { useState } from 'react';

// import Dropdown from '../Select/Select';
import types from '../../data/types.json';
import subtypes from '../../data/subtypes.json';

import './SortBar.css';

function SortBar(props) {
  // const [value, setValue] = useState(null);

  return (
    <div className="sortbar-block">
      <div className="sortbar">
        <select id="type" onChange={props.handleType}>
          <option>{props.mainType}</option>
          {types.map((type) => {
            return <option>{type.name}</option>;
          })}
        </select>

        {/* <Dropdown // что-то по типу кастомного селектора
          prompt="Type"
          options={types}
          id="id"
          label="name"
          value={value}
          onChange={(val) => setValue(val)}
          handleType={props.handleType}
        /> */}
      </div>
      <div className="sortbar">
        <select id="subtype" onChange={props.handleSubType}>
          <option>{props.mainSubType}</option>
          {subtypes.map((subtype) => {
            return <option>{subtype.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default SortBar;

import React, { useState, useRef, useEffect } from 'react';
import './Select.css';

export default function Dropdown({ options, id, label, prompt, value, onChange, handleType }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    ['click'].forEach((e) => {
      document.addEventListener(e, toggle);
    });

    return () =>
      ['click'].forEach((e) => {
        document.removeEventListener(e, toggle);
      });
  }, []);

  function toggle(e) {
    setOpen(e && e.target === ref.current);
  }

  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1,
    );
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) return value[label];
    return '';
  }

  function selectOption(option) {
    setQuery('');
    onChange(option);
    setOpen(false);
  }

  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <input
            type="text"
            ref={ref}
            placeholder={value ? value[label] : prompt}
            value={displayValue()}
            onChange={(e) => {
              setQuery(e.target.value);
              onChange(null);
            }}
            onClick={toggle}
          />
        </div>
        <div className={`arrow ${open ? 'open' : null}`} />
      </div>
      <div className={`options ${open ? 'open' : null}`}>
        {filter(options).map((option, index) => (
          <div
            key={index}
            className={`option ${value === option ? 'selected' : null}`}
            onClick={() => selectOption(option)}>
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import Select from "react-select";
import "./Filter.css";

const Filter = ({ onGenderChange, onCountryChange, countries }) => {
  const genderOptions = [
    { value: "gender", label: "gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const countryOptions = [{ value: "country", label: "country" }, ...countries];

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h2>Employees</h2>
      </div>

      <div className="select_GC">
        <Select
          options={genderOptions}
          defaultValue={genderOptions[0]}
          onChange={onGenderChange}
          placeholder="Filter by Gender"
        />
        <Select
          options={countryOptions}
          defaultValue={countryOptions[0]}
          onChange={onCountryChange}
          placeholder="Filter by Country"
          style={{ marginTop: "1rem" }}
        />
      </div>
    </div>
  );
};

export default Filter;

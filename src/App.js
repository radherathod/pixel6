import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "./components/Logo";
import Filter from "./components/Filter";
import EmployeeTable from "./components/EmployeeTable";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [gender, setGender] = useState("gender");
  const [country, setCountry] = useState("country");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        const users = response.data.users.map((user) => ({
          id: user.id,
          img: user.image,
          fullName: `${user.firstName} ${user.lastName}`,
          demography: user.gender,
          designation: user.company.title,
          location: user.address.address,
          country: user.address.country,
        }));
        setData(users);
        setFilteredData(users);

        const uniqueCountries = [...new Set(users.map((user) => user.country))];
        setCountries(
          uniqueCountries.map((country) => ({ value: country, label: country }))
        );
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    let filtered = data;
    if (gender !== "gender") {
      filtered = filtered.filter(
        (employee) => employee.demography.toLowerCase() === gender
      );
    }
    if (country !== "country") {
      filtered = filtered.filter((employee) => employee.country === country);
    }
    setFilteredData(filtered);
  }, [gender, country, data]);

  const handleGenderChange = (selectedOption) => {
    setGender(selectedOption.value);
  };

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption.value);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Logo />
      <Filter
        onGenderChange={handleGenderChange}
        onCountryChange={handleCountryChange}
        countries={countries}
      />
      <EmployeeTable data={filteredData} />
    </div>
  );
};

export default App;

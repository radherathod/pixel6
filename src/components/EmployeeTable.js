import React, { useMemo } from "react";
import { useTable, useSortBy } from "react-table";
import {
  LiaSortUpSolid,
  LiaSortDownSolid,
  LiaSortSolid,
} from "react-icons/lia";

import "./EmployeeTable.css";

const EmployeeTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        sortType: "basic",
      },
      {
        Header: "Image",
        accessor: "img",
        Cell: ({ cell: { value } }) => (
          <img src={value} alt="Employee" style={{ height: "50px" }} />
        ),
        disableSortBy: true,
      },
      {
        Header: "Full Name",
        accessor: "fullName",
        sortType: "basic",
      },
      {
        Header: "Demography",
        accessor: "demography",
        disableSortBy: true,
      },
      {
        Header: "Designation",
        accessor: "designation",
        disableSortBy: true,
      },
      {
        Header: "Location",
        accessor: "location",
        disableSortBy: true,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <table {...getTableProps()} className="employee-table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                key={column.id}
              >
                {column.render("Header")}
                <span>
                  {column.canSort ? (
                    column.isSorted ? (
                      column.isSortedDesc ? (
                        <LiaSortUpSolid
                          style={{
                            height: "12px",
                            color: "green",
                            margin: "-1px",
                          }}
                        />
                      ) : (
                        <LiaSortDownSolid
                          style={{
                            height: "12px",
                            color: "red",
                            margin: "-1px",
                          }}
                        />
                      )
                    ) : (
                      <LiaSortSolid
                        style={{ height: "12px", margin: "-1px" }}
                      />
                    )
                  ) : null}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.id}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} key={cell.row.id + cell.column.id}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EmployeeTable;

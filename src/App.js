import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";

import TableComponent from "./TableComponent";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [pageCount, setPageCount] = React.useState(0);

  const columnsHeader = React.useMemo(
    () => [
      {
        Header: "Profile",
        accessor: "profile",
        Cell: (tableProps) => (
          <img
            className="bg-soft-primary rounded img-fluid avatar-40 me-3"
            src={tableProps.row.original.profile}
            alt={tableProps.row.original.name}
          />
        ),
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Contact",
        accessor: "phone_number",
      },
      {
        Header: "Email",
        accessor: "email_address",
      },
      {
        Header: "Join Date",
        accessor: "join_date",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: "action",
      },
    ],
    []
  );

  const data = {};

  const fetchData = React.useCallback(({ pageSize, pageIndex }) => {
    // setLoading(true);
    // dispatch(
    //   getEmployee(pageSize, pageIndex, (response) => {
    //     // setLoading(false);
    //     const { status, message, data } = response;
    //     // console.log(response);
    //     if (status == 200 && data) {
    //       // alert("emp");
    //       console.log("emp", data);
    //       const { employees } = data;
    //       const { last_page } = employees;
    //       const startRow = pageSize * pageIndex;
    //       const endRow = startRow + pageSize;
    //       //  const newEmployeeList = createEmployeeList(employees.data);
    //       if (newEmployeeList && newEmployeeList?.length > 0) {
    //         console.log("new emp", newEmployeeList);
    //         const mergedEmployeeList = [...employeeList, ...newEmployeeList];
    //         if (mergedEmployeeList?.length > 0) {
    //           console.log("new", startRow, endRow, mergedEmployeeList);
    //           //  setEmployeList(mergedEmployeeList);
    //           //  setEmployeData(mergedEmployeeList.slice(startRow, endRow));
    //           //  setPageCount(Math.ceil(mergedEmployeeList?.length / pageSize));
    //         }
    //       }
    //     }
    //   })
    // );
  }, []);
  return (
    <div className="App">
      <TableComponent />
      {/* <Table
        columns={columnsHeader}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
      /> */}
    </div>
  );
}

export default App;

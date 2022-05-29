import CustomTable from "../common/Table";

const createEmployeeRecord = (id, name, phoneNo, emailId) => {
  return { id, name, phoneNo, emailId };
};

const tableHeader = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "phoneNo", label: "Phone Number" },
  { key: "emailId", label: "Email Id" },
];

const employees = [
  createEmployeeRecord(1, "john", 121, "john@gmail.com"),
  createEmployeeRecord(2, "joe", 122, "joe@gmail.com"),
  createEmployeeRecord(3, "sam", 123, "sam@gmail.com"),
];

function Employees() {
  return (
    <div>
      <div>
        
      </div>
      <CustomTable rows={employees} tableHeader={tableHeader} />
    </div>
  );
}

export default Employees;

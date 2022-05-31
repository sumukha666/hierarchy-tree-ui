import { useSelector } from "react-redux";
function Home() {
  const departments = useSelector((state) => state.department.departmentList);

  return (
    <>
      <div>CEO</div>
    </>
  );
}

export default Home;

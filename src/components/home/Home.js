import { useSelector, useDispatch } from "react-redux";
import { config } from "../../helpers/config";
import { setShowTeams } from "../../store/departments";
import { setShowEmployees } from "../../store/teams";
import TreeView from "../common/Treeview";

const { TEAMS, EMPLOYEES } = config;
function Home() {
  const departments = useSelector((state) => state.departments.departmentList);
  const teams = useSelector((state) => state.teams.teamList);
  const employees = useSelector((state) => state.employees.employeeList);
  const dispatch = useDispatch();
  const onViewTeams = (elem, parentElem) => {
    switch (elem.childType) {
      case TEAMS: {
        dispatch(setShowTeams(elem.id));
        break;
      }
      case EMPLOYEES: {
        dispatch(setShowEmployees({ elem, parentElem }));
        break;
      }
      default: {
        return [];
      }
    }
  };

  const getChildren = (elem) => {
    switch (elem.childType) {
      case TEAMS: {
        return teams[elem.value];
      }
      case EMPLOYEES: {
        return employees[elem.value];
      }
      default: {
        return [];
      }
    }
  };

  return (
    <>
      <div>CEO</div>
      <button>+</button>
      <TreeView
        parentDetails={{}}
        list={departments}
        onViewChilds={onViewTeams}
        getChildren={getChildren}
      />
    </>
  );
}

export default Home;

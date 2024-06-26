import ChildrenComponent from "./ChildrenComponent";

function ParentComponent() {
  const company = "RK";
  const userName = " nguyen van A";
  return <ChildrenComponent company={company} user={userName} />;
}

export default ParentComponent;

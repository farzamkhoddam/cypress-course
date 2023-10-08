import NavItem from "./NavItem";

const navItems = [
  {
    label: "Why Cypress?",
    path: "/",
    dataTest: "why-us",
  },
  {
    label: "Overview",
    path: "/overview",
    dataTest: "overview",
  },
  {
    label: "Fundamentals",
    path: "/fundamentals",
    dataTest: "fundamentals",
  },
  {
    label: "Forms",
    path: "/forms",
    dataTest: "forms",
  },
  {
    label: "Examples",
    path: "/examples",
    dataTest: "examples",
  },
  {
    label: "Component",
    path: "/component",
    dataTest: "component",
  },
  {
    label: "Best Practices",
    path: "/best-practices",
    dataTest: "best-practices",
  },
];

export default function NavBar() {
  return (
    <ul className="nav-bar" data-test={"nav-bar"}>
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          label={item.label}
          dataTest={item.dataTest}
          path={item.path}
        />
      ))}
    </ul>
  );
}

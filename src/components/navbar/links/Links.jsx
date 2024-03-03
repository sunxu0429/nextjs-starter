import NavLink from "./navLink/navLink";
import styles from "./links.module.css";
const Links = () => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
      {session ? (
        <>
          {isAdmin && (
            <NavLink item={{ title: "Admin", path: "/admin" }}></NavLink>
          )}
          <button className={styles.logout}>Log Out</button>
        </>
      ) : (
        <NavLink item={{ title: "Login", path: "/login" }}></NavLink>
      )}
    </div>
  );
};

export default Links;

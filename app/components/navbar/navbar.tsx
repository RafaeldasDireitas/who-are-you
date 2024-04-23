export default function Navbar() {
  const links = [
    {
      name: "About us",
      href: "/",
    },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">Who are you</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {links.map((link, key) => {
            return (
              <li key={key}>
                <a href={link.href} className="text-white">
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

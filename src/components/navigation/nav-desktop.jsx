import { routes } from "../../routes";

const NavDesktop = () => {
  return (
    <ul className="hidden lg:flex lg:items-center gap-4 text-sm pr-2 justify-between w-[30%] h-[5rem]">
      {routes.map((route) => {
        const { Icon, href, title } = route;
        return (
          <li key={title}>
            <a
              href={href}
              className="flex items-center gap-1 hover:text-neutral-400 transition-all desktop-link"
            >
              <Icon />
              {title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavDesktop
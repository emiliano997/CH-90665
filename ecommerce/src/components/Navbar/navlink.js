export function Navlink({ name, href }) {
  return (
    <li className="w-full" key={name}>
      <a
        href={href}
        className="block py-2 px-3 text-white hover:bg-blue-700 md:hover:bg-transparent rounded-sm md:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white"
      >
        {name}
      </a>
    </li>
  );
}

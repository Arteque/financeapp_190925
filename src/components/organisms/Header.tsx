import Link from "../atoms/links/Link";

type HeaderProps = {
  loged: boolean;
};

const navItems = [
  {
    id: 1,
    href: "/",
    iconSrc: "/images/icon-nav-overview.svg",
    altText: "Overview Icon",
    text: "Overview",
  },
  {
    id: 2,
    href: "/transactions",
    iconSrc: "/images/icon-nav-transactions.svg",
    altText: "Transactions Icon",
    text: "Transactions",
  },
  {
    id: 3,
    href: "/budgets",
    iconSrc: "/images/icon-nav-budgets.svg",
    altText: "Budgets Icon",
    text: "Budgets",
  },
  {
    id: 4,
    href: "/pots",
    iconSrc: "/images/icon-nav-pots.svg",
    altText: "Pots Icon",
    text: "Pots",
  },
  {
    id: 5,
    href: "/recurringbills",
    iconSrc: "/images/icon-nav-recurring-bills.svg",
    altText: "Recurring Bills Icon",
    text: "Recurring Bills",
  },
];

const Header = ({ loged }: HeaderProps) => {
  return loged ? (
    <header className="bg-grey-500 text-grey-100 fixed bottom-0 left-0 right-0">
      <nav role="navigation" aria-label="Main Navigation">
        <Link className="hidden mx-auto w-fit" href="/" role="logo">
          <img src="/images/logo-large.svg" alt="Finance" />
        </Link>
        <ul className="flex justify-between items-center">
          {navItems.map((item) => (
            <li key={item.id} className="flex-1 p-3">
              <Link
                className="flex flex-col items-center gap-[0.5rem] py-[0.5rem] px-[0.75rem] hover:bg-grey-400 rounded-lg"
                href={item.href}
              >
                <span className="icon">
                  <img
                    src={item.iconSrc}
                    alt={item.altText}
                    className="w-[2rem]"
                  />
                </span>
                <span className="text_sm hidden">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  ) : (
    <header className="bg-grey-500 text-grey-100 py-[1.5rem] px-[2.5rem]">
      <Link className="mx-auto block w-fit" href="/">
        <img src="/images/logo-large.svg" alt="Finance" />
      </Link>
    </header>
  );
};
export default Header;

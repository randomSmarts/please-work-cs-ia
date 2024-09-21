import {
  UserGroupIcon,
  HomeIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import {DocumentDuplicateIcon} from "@heroicons/react/16/solid";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
              <Link
                  key={link.name}
                  href={link.href}>
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
          );
        })}
      </>
  );
}

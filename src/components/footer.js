import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'News', href: '/news' },
      { name: 'Getting Help', href: '/help' },
      { name: 'Charter', href: '/charter' },
      { name: 'Contact', href: '/contact' },
    ],
  }


  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link to={item.href} className="text-base font-medium tracking-wide text-gray-700 hover:text-blue-900">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-base text-gray-500">&copy; 2024 The Warewulf Project. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

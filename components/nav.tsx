import Link from 'next/link';

export const Nav = ({dark}: {dark?: boolean}) => {
  // TODO: figure out how to make this responsive!
  // See https://tailwindui.com/components/application-ui/navigation/navbars

  return (
    <nav
      className={`flex items-center justify-between flex-wrap p-6 ${
        dark ? 'dark bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="flex flex-grow items-center text-white mr-6">
        <Link href="/">
          <a>
            <img
              src={dark ? '/papercups-dark.svg' : '/papercups-v3.svg'}
              style={{height: 40, width: 160}}
            />
          </a>
        </Link>
      </div>

      <div className="hidden">
        <button className="flex justify-start items-center px-3 py-2 border rounded text-gray-700 dark:text-gray-300 border-blue-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-grow justify-center md:flex md:items-center md:w-auto">
        <div className="text-sm">
          <Link href="/blog">
            <a className="block mt-4 md:inline-block md:mt-0 text-gray-500 dark:text-gray-300 hover:text-gray-900 mx-6">
              Blog
            </a>
          </Link>
          <a
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 dark:text-gray-300 hover:text-gray-900 mx-6"
            href="https://docs.papercups.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <a
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 dark:text-gray-300 hover:text-gray-900 mx-6"
            href="https://docs.papercups.io/#features"
            target="_blank"
            rel="noopener noreferrer"
          >
            Features
          </a>
          <a
            className="block mt-4 md:inline-block md:mt-0 text-gray-500 dark:text-gray-300 hover:text-gray-900 mx-6"
            href="https://github.com/papercups-io/papercups"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <Link href="/pricing">
            <a className="block mt-4 md:inline-block md:mt-0 text-gray-500 dark:text-gray-300 hover:text-gray-900 mx-6">
              Pricing
            </a>
          </Link>
        </div>
      </div>

      <div className="hidden md:flex flex-grow justify-end">
        <a
          className="text-sm hover:text-blue-500 hover:bg-gray-50 dark:bg-white py-2 px-4 mr-2 rounded-full transition-colors"
          href="https://app.papercups.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log in
        </a>

        <a
          className="flex items-center bg-blue-500 hover:bg-blue-400 text-white text-sm hover:text-white py-2 px-4 rounded-full transition-colors"
          href="https://app.papercups.io/register?redirect=/getting-started"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2">Start now</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Nav;

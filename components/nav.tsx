export const Nav = () => {
  // TODO: figure out how to make this responsive!
  // See https://tailwindui.com/components/application-ui/navigation/navbars

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex flex-grow items-center text-white mr-6">
        <img src="/papercups-v2.svg" style={{height: 40, width: 160}} />
      </div>

      <div className="block lg:hidden">
        <button className="flex justify-start items-center px-3 py-2 border rounded text-gray-700 border-blue-400 hover:text-white hover:border-white">
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

      <div className="flex flex-grow justify-center lg:flex lg:items-center lg:w-auto">
        <div className="text-sm">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            Blog
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            Features
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            GitHub
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-gray-900 mx-6"
          >
            Pricing
          </a>
        </div>
      </div>

      <div className="flex flex-grow justify-end">
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-700 text-white text-sm hover:text-white py-2 px-4 rounded-full transition-colors"
        >
          Get started
        </a>
      </div>
    </nav>
  );
};

export default Nav;

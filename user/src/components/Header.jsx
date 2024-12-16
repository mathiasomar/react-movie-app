const Header = () => {
  return (
    <header className="fixed top-0 right-0 z-50 w-full bg-slate-900">
      <div className="container mx-auto flex items-center justify-between py-4 max-w-6xl">
        <a href="/" className="relative">
          <h1 className="text-2xl font-semibold text-gray-300">
            Movie
            <span className="font-extrabold italic text-g-500">Trailer</span>
          </h1>
        </a>
      </div>
    </header>
  );
};

export default Header;

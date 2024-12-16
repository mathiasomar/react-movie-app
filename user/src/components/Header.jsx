import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className="bg-backgroundContrast text-white">
        <Container className="flex items-center min-h-11">
          <a href="/" className="h-11 flex items-center px-6 -ml-6">
            🎬 <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>

      <div className="bg-backgroundContrast sticky top-0 z-50 text-white">
        <Container className="flex items-center justify-between py-2 min-h-11">
          <a href="/" className="relative">
            <h1 className="text-2xl font-semibold">
              Movie
              <span className="font-extrabold italic text-purple-700">
                Trailer
              </span>
            </h1>
          </a>

          <button className="py-2 px-4 rounded-xl bg-white text-sm font-bold text-backgroundContrast">
            Subscribe Now
          </button>
        </Container>
      </div>
    </>
  );
};

export default Header;

export const Footer = () => {
  return (
    <footer className="w-full py-8 text-center bg-bg-dark border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      <div className="container mx-auto px-6">
        <p className="text-sm text-gray-400 font-inter">
          Made with <span className="text-red-500 mx-1">❤️</span> by Mahalakshmi K &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

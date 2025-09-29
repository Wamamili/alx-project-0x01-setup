const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-center py-4 mt-8 text-sm text-gray-600">
      <p>© {new Date().getFullYear()} React Architect. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

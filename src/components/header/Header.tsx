import { colorPalette } from '../../styles/colors';
import Button from '../common/custom-elements/Button';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full" style={{ backgroundColor: colorPalette.bg2 }}>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex flex-row gap-10">
          <Button variant="link">Shop</Button>
          <Button variant="link">Subscribe</Button>
          <Button variant="link">Sign In</Button>
          <Button variant="primary">Register</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
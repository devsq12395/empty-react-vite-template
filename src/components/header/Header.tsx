import { colorPalette } from '../../styles/colors';
import Button from '../common/custom-elements/buttons/Button';

import { useModal } from '../../contexts/ModalContext';

const Header: React.FC = () => {
  const modalContext = useModal();

  return (
    <header className="fixed top-0 w-full" style={{ backgroundColor: colorPalette.bg2 }}>
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="flex flex-row gap-10">
          <Button variant="link">Shop</Button>
          <Button variant="link" onClick={() => modalContext.setisLoginModalOpen(true)}>Sign In</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
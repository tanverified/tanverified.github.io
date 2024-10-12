import { useContext } from 'react';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MenuContext } from 'src/contexts/MenuContext';

export default function MenuWidget() {
  const { isOpen, toggleOpen } = useContext(MenuContext);
  const icon = isOpen ? faClose : faBars;

  return (
    <button
      onClick={toggleOpen}
      className="absolute left-4 top-4 z-50 p-2 sm:hidden"
    >
      <FontAwesomeIcon icon={icon} size="2x" opacity={0.8} />
    </button>
  );
}

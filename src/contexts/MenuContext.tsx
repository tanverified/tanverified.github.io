import { createContext, PropsWithChildren } from 'react';
import useMenu from 'src/hooks/useMenu';
import type { MenuState } from 'src/types/Menu';

export const MenuContext = createContext<MenuState | undefined>(undefined);

export const MenuProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, toggleOpen] = useMenu();

  const menuStyle: React.CSSProperties = isOpen
    ? {
        display: 'block',
        width: '100%',
        height: '100%',
        paddingTop: '5rem',
      }
    : {};

  const restStyle: React.CSSProperties = isOpen
    ? {
        display: 'none',
      }
    : {
        display: 'block',
      };

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        toggleOpen,
        menuStyle,
        restStyle,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

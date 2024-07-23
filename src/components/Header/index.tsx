import React from 'react';
import { ReactComponent as WalletIcon } from '../../assets/icons/wallet.svg';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 border-b bg-background">
      <nav className="container flex h-14 items-center justify-between gap-4 px-4 sm:h-16 sm:px-6">
        <a className="flex items-center gap-2 font-semibold" href="#">
          <WalletIcon className="h-6 w-6 text-foreground" />
          <span className="hidden sm:inline text-foreground">BudgetBuddy</span>
        </a>
        <div className="flex items-center gap-4">
          <a
            className="hidden text-muted-foreground hover:text-foreground sm:inline"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="hidden text-muted-foreground hover:text-foreground sm:inline"
            href="#"
          >
            Transactions
          </a>
          <a
            className="hidden text-muted-foreground hover:text-foreground sm:inline"
            href="#"
          >
            Reports
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

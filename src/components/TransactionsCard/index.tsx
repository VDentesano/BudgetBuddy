import React from 'react';
import Table from '../Table';

const TransactionsCard: React.FC = () => {
  return (
    <div className="rounded-lg border bg-card shadow-sm text-foreground">
      {' '}
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Transactions
        </h3>
        <p className="text-sm text-muted-foreground">
          View and categorize your recent transactions
        </p>
      </div>
      <div className="p-6">
        <div className="relative w-full overflow-auto">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default TransactionsCard;

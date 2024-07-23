import React from 'react';

const ExpensesCard: React.FC = () => {
  return (
    <div className="rounded-lg border bg-card  shadow-sm text-foreground">      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Expenses
        </h3>
        <p className="text-sm text-muted-foreground">
          Total expenses this month
        </p>
      </div>
      <div className="p-6 flex items-center justify-between">
        <div className="text-4xl font-bold">$3,412</div>
        <div className="flex items-center gap-2 text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polyline points="22 17 13.5 8.5 8.5 13.5 2 7"></polyline>
            <polyline points="16 17 22 17 22 11"></polyline>
          </svg>
          <span>-7.2%</span>
        </div>
      </div>
    </div>
  );
};

export default ExpensesCard;

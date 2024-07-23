import React from 'react';

const IncomeCard: React.FC = () => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Income</h3>
        <p className="text-sm text-muted-foreground">Total income this month</p>
      </div>
      <div className="p-6 flex items-center justify-between">
        <div className="text-4xl font-bold">$5,234</div>
        <div className="flex items-center gap-2 text-green-500">
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
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
            <polyline points="16 7 22 7 22 13"></polyline>
          </svg>
          <span>+12.5%</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeCard;

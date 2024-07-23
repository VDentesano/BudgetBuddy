import React from 'react';

const FinancialReportsCard: React.FC = () => {
  return (
    <div className="rounded-lg border bg-card  shadow-sm text-foreground">      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Financial Reports
        </h3>
        <p className="text-sm text-muted-foreground">
          View detailed reports and analytics
        </p>
      </div>
      <div className="p-6">
        <div className="grid gap-4">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <p className="text-sm font-medium">Income vs Expenses</p>
              <p className="text-xs text-muted-foreground">Last 6 months</p>
            </div>
            <a className="text-primary" href="#">
              View Report
            </a>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <p className="text-sm font-medium">Spending Trends</p>
              <p className="text-xs text-muted-foreground">Last 12 months</p>
            </div>
            <a className="text-primary" href="#">
              View Report
            </a>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <p className="text-sm font-medium">Savings Growth</p>
              <p className="text-xs text-muted-foreground">Last 18 months</p>
            </div>
            <a className="text-primary" href="#">
              View Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialReportsCard;

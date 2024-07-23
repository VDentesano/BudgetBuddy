import React from 'react';

const BudgetingCard: React.FC = () => {
  return (
    <div className="rounded-lg border bg-card shadow-sm text-foreground">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Budgeting
        </h3>
        <p className="text-sm text-muted-foreground">
          Set spending limits and track your progress
        </p>
      </div>
      <div className="p-6">
        <div className="grid gap-4">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <p className="text-sm font-medium">Groceries</p>
              <p className="text-xs text-muted-foreground">
                $500 spent of $800 budget
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 rounded-full bg-muted">
                <div
                  className="h-full w-[62.5%] rounded-full bg-primary"
                  style={{ width: '62.5%' }}
                ></div>
              </div>
              <span className="text-sm font-medium">62.5%</span>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <p className="text-sm font-medium">Dining</p>
              <p className="text-xs text-muted-foreground">
                $150 spent of $200 budget
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 rounded-full bg-muted">
                <div
                  className="h-full w-[75%] rounded-full bg-primary"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <span className="text-sm font-medium">75%</span>
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            <div>
              <p className="text-sm font-medium">Entertainment</p>
              <p className="text-xs text-muted-foreground">
                $120 spent of $150 budget
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-24 rounded-full bg-muted">
                <div
                  className="h-full w-[80%] rounded-full bg-primary"
                  style={{ width: '80%' }}
                ></div>
              </div>
              <span className="text-sm font-medium">80%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetingCard;

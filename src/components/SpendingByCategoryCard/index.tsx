import React from 'react';

const SpendingByCategoryCard: React.FC = () => {
  return (
    <div className="rounded-lg border bg-card  shadow-sm text-foreground">      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Spending by Category
        </h3>
        <p className="text-sm text-muted-foreground">
          Track your spending across different categories
        </p>
      </div>
      <div className="p-6">
        <div className="aspect-square">
          <div
            className="flex aspect-video justify-center text-xs [&_recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_recharts-curve.recharts-tooltip-cursor]:stroke-border [&_recharts-dot[stroke='#fff']]:stroke-transparent [&_recharts-layer]:outline-none [&_recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_recharts-radial-bar-background-sector]:fill-muted [&_recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_recharts-reference-line_[stroke='#ccc']]:stroke-border [&_recharts-sector[stroke='#fff']]:stroke-transparent [&_recharts-sector]:outline-none [&_recharts-surface]:outline-none"
            data-chart="chart-R1pmnpnltf9f"
          >
            <div className="recharts-responsive-container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpendingByCategoryCard;

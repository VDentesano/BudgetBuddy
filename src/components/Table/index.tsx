import React from 'react';

const Table: React.FC = () => {
  return (
    <table className="w-full caption-bottom text-sm">
      <thead className="[&_tr]:border-b">
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Date
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Description
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Amount
          </th>
          <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
            Category
          </th>
        </tr>
      </thead>
      <tbody className="[&_tr:last-child]:border-0">
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <td className="p-4 align-middle">2023-06-01</td>
          <td className="p-4 align-middle">Grocery Store</td>
          <td className="p-4 align-middle">$75.42</td>
          <td className="p-4 align-middle">
            <button
              type="button"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="none"
              data-state="closed"
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span style={{ pointerEvents: 'none' }}>Groceries</span>
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
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <select
              aria-hidden="true"
              tabIndex={-1}
              style={{
                position: 'absolute',
                border: '0',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                wordWrap: 'normal'
              }}
            >
              <option value=""></option>
            </select>
          </td>
        </tr>
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <td className="p-4 align-middle">2023-06-05</td>
          <td className="p-4 align-middle">Acme Restaurant</td>
          <td className="p-4 align-middle">$42.18</td>
          <td className="p-4 align-middle">
            <button
              type="button"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="none"
              data-state="closed"
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span style={{ pointerEvents: 'none' }}>Dining</span>
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
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <select
              aria-hidden="true"
              tabIndex={-1}
              style={{
                position: 'absolute',
                border: '0',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                wordWrap: 'normal'
              }}
            >
              <option value=""></option>
            </select>
          </td>
        </tr>
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <td className="p-4 align-middle">2023-06-10</td>
          <td className="p-4 align-middle">Netflix Subscription</td>
          <td className="p-4 align-middle">$14.99</td>
          <td className="p-4 align-middle">
            <button
              type="button"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="none"
              data-state="closed"
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span style={{ pointerEvents: 'none' }}>Bills</span>
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
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <select
              aria-hidden="true"
              tabIndex={-1}
              style={{
                position: 'absolute',
                border: '0',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                wordWrap: 'normal'
              }}
            >
              <option value=""></option>
            </select>
          </td>
        </tr>
        <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
          <td className="p-4 align-middle">2023-06-15</td>
          <td className="p-4 align-middle">Movie Tickets</td>
          <td className="p-4 align-middle">$25.00</td>
          <td className="p-4 align-middle">
            <button
              type="button"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="none"
              data-state="closed"
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span style={{ pointerEvents: 'none' }}>Entertainment</span>
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
                className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <select
              aria-hidden="true"
              tabIndex={-1}
              style={{
                position: 'absolute',
                border: '0',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                wordWrap: 'normal'
              }}
            >
              <option value=""></option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

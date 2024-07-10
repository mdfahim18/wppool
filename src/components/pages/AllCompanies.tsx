'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '../DataTable';

interface CompanyDataProps {
  company: string;
  ticker: string;
  vertical: string;
  price: string;
  marketCap: string;
  revenueGrowth: string;
  grossMargin: string;
  evRevenue: string;
  ytdPerformance: string;
}

export const columns: ColumnDef<CompanyDataProps>[] = [
  {
    accessorKey: 'company',
    header: 'Company',
  },
  {
    accessorKey: 'ticker',
    header: 'Ticker',
  },
  {
    accessorKey: 'vertical',
    header: 'Vertical',
  },
  {
    accessorKey: 'price',
    header: 'Price',
  },
  {
    accessorKey: 'marketCap',
    header: 'market Cap ($B)',
  },
  {
    accessorKey: 'revenueGrowth',
    header: 'Revenue Growth',
  },
  {
    accessorKey: 'grossMargin',
    header: 'Gross Margin',
  },
  {
    accessorKey: 'evRevenue',
    header: 'EV/Revenue',
  },
  {
    accessorKey: 'ytdPerformance',
    header: 'YTD Performance',
  },
];

const data: CompanyDataProps[] = [
  {
    company: 'Apple',
    ticker: 'AAPL',
    vertical: 'Tech',
    price: '897.23',
    marketCap: '1443.87',
    revenueGrowth: '14.87%',
    grossMargin: '45.12%',
    evRevenue: '7.45',
    ytdPerformance: '22.34%',
  },
  {
    company: 'Google',
    ticker: 'GOOGL',
    vertical: 'Finance',
    price: '1234.56',
    marketCap: '1923.45',
    revenueGrowth: '18.45%',
    grossMargin: '50.78%',
    evRevenue: '5.23',
    ytdPerformance: '30.12%',
  },
  {
    company: 'Microsoft',
    ticker: 'MSFT',
    vertical: 'Retail',
    price: '745.23',
    marketCap: '1578.45',
    revenueGrowth: '10.56%',
    grossMargin: '60.45%',
    evRevenue: '6.12',
    ytdPerformance: '25.67%',
  },
  {
    company: 'Amazon',
    ticker: 'AMZN',
    vertical: 'Tech',
    price: '1456.78',
    marketCap: '1823.56',
    revenueGrowth: '12.34%',
    grossMargin: '55.23%',
    evRevenue: '7.89',
    ytdPerformance: '20.45%',
  },
  {
    company: 'Facebook',
    ticker: 'FB',
    vertical: 'Healthcare',
    price: '987.65',
    marketCap: '1324.56',
    revenueGrowth: '15.78%',
    grossMargin: '47.89%',
    evRevenue: '6.34',
    ytdPerformance: '28.90%',
  },
  {
    company: 'Tesla',
    ticker: 'TSLA',
    vertical: 'Energy',
    price: '1234.45',
    marketCap: '1723.89',
    revenueGrowth: '16.45%',
    grossMargin: '52.34%',
    evRevenue: '8.23',
    ytdPerformance: '31.45%',
  },
  {
    company: 'Netflix',
    ticker: 'NFLX',
    vertical: 'Tech',
    price: '1345.67',
    marketCap: '1623.45',
    revenueGrowth: '11.23%',
    grossMargin: '48.56%',
    evRevenue: '5.67',
    ytdPerformance: '26.78%',
  },
  {
    company: 'Nvidia',
    ticker: 'NVDA',
    vertical: 'Retail',
    price: '876.54',
    marketCap: '1523.78',
    revenueGrowth: '19.12%',
    grossMargin: '46.78%',
    evRevenue: '7.12',
    ytdPerformance: '24.67%',
  },
  {
    company: 'Adobe',
    ticker: 'ADBE',
    vertical: 'Finance',
    price: '654.32',
    marketCap: '1378.90',
    revenueGrowth: '13.45%',
    grossMargin: '49.23%',
    evRevenue: '6.89',
    ytdPerformance: '27.34%',
  },
  {
    company: 'Salesforce',
    ticker: 'CRM',
    vertical: 'Healthcare',
    price: '765.43',
    marketCap: '1432.67',
    revenueGrowth: '17.89%',
    grossMargin: '50.45%',
    evRevenue: '7.56',
    ytdPerformance: '29.56%',
  },
];

const AllCompanies = () => {
  return <DataTable columns={columns} data={data} />;
};

export default AllCompanies;

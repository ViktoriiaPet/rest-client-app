import { loadResources } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate, useLoaderData } from 'react-router';
import { Navigate } from 'react-router-dom';
import type { RequestData } from '@/types/user';
import type { JSX } from 'react';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

const mockHistory: RequestData[] = [
  {
    id: '1',
    userId: 'u123',
    method: 'GET',
    url: '/api/users/42',
    headers: { Accept: 'application/json' },
    body: { productId: '5', qty: '2' },
    statusCode: 200,
    duration: 123,
    requestSize: 150,
    responseSize: 512,
    timestamp: 2020,
  },
  {
    id: '2',
    userId: 'u123',
    method: 'POST',
    url: '/api/orders',
    headers: { 'Content-Type': 'application/json' },
    body: { productId: '5', qty: '2' },
    statusCode: 201,
    duration: 240,
    requestSize: 300,
    responseSize: 1024,
    timestamp: 2020,
  },
];

export function loader() {
  return mockHistory;
}

export default function HistoryPage(): JSX.Element {
  const { user, loading } = useAuth();
  const { t } = useTranslation();
  const data = useLoaderData<RequestData[]>();
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="p-[3vw]">
      {data.length > 0 ? (
        <table className="min-w-full border-separate border-spacing-0 border border-purple-300 text-purple-950 rounded-[15%]">
          <thead>
            <tr>
              <th className="border border-purple-300 px-4 text-center rounded-tl-[15%]">
                Method
              </th>
              <th className="border border-purple-300 px-4 text-center">URL</th>
              <th className="border border-purple-300 px-4 text-center">
                Status
              </th>
              <th className="border border-purple-300 px-4 text-center">
                Duration (ms)
              </th>
              <th className="border border-purple-300 px-4 text-center rounded-tr-[15%]">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((req: RequestData) => (
              <tr key={req.id}>
                <td
                  className={`px-4 text-center border border-purple-300 rounded-bl-[15%]`}
                >
                  {req.method}
                </td>
                <td className="border border-purple-300 px-4 text-center">
                  {req.url}
                </td>
                <td className="border border-purple-300 px-4 text-center">
                  {req.statusCode}
                </td>
                <td className="border border-purple-300 px-4 text-center">
                  {req.duration}
                </td>
                <td
                  className={`px-4 text-center border border-purple-300 rounded-br-[15%]`}
                >
                  {req.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <div className="p-[2vw]">
            You haven&apos;t executed any requests
            <br /> It&apos;s empty here. Try:
          </div>
          <NavLink to="/auth/restfull" end>
            <Button variant="custom" className="p-[1vw]">
              Restfull page
            </Button>
          </NavLink>
        </>
      )}
    </div>
  );
}

import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import HistoryPage from '@/pages/history.server';

vi.mock('firebase/firestore', async (importOriginal) => {
  const actual = await importOriginal<typeof import('firebase/firestore')>();
  return {
    ...actual,
    collection: vi.fn(),
    getDocs: vi.fn(),
    query: vi.fn(),
    where: vi.fn(),
    orderBy: vi.fn(),
    limit: vi.fn(),
  };
});

vi.mock('@/service/firebase', () => ({ db: {} }));

describe('HistoryPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders "No requests recorded yet." when history is empty (English)', async () => {
    const loaderData = {
      token: null,
      history: [],
      userId: null,
      userName: null,
      lang: 'en',
    };
    render(
      <MemoryRouter>
        <HistoryPage loaderData={loaderData} />
      </MemoryRouter>
    );
    await screen.findByText('No requests recorded yet.');
    expect(screen.getByText('No requests recorded yet.')).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('renders "История пока пуста." when history is empty (Russian)', async () => {
    const loaderData = {
      token: null,
      history: [],
      userId: null,
      userName: null,
      lang: 'ru',
    };
    render(
      <MemoryRouter>
        <HistoryPage loaderData={loaderData} />
      </MemoryRouter>
    );
    await screen.findByText('История пока пуста.');
    expect(screen.getByText('История пока пуста.')).toBeInTheDocument();
  });

  it('renders history items when provided', async () => {
    const loaderData = {
      token: 'mockToken',
      history: [
        {
          id: '1',
          method: 'GET',
          url: 'https://example.com/api/test',
          createdAt: new Date('2023-01-01T10:00:00Z'),
          bodyMode: 'json',
          bodyPreview: '{}',
          headersRecord: {},
          paramsRecord: {},
          latencyMs: 120,
          statusCode: 200,
          statusText: 'OK',
          lang: 'en',
        },
        {
          id: '2',
          method: 'POST',
          url: 'https://example.com/api/data',
          createdAt: new Date('2023-01-02T11:00:00Z'),
          bodyMode: 'json',
          bodyPreview: '{"key":"value"}',
          headersRecord: {},
          paramsRecord: {},
          latencyMs: 300,
          statusCode: 201,
          statusText: 'Created',
          lang: 'en',
        },
      ],
      userId: '123',
      userName: 'Test User',
      lang: 'en',
    };

    render(
      <MemoryRouter>
        <HistoryPage loaderData={loaderData} />
      </MemoryRouter>
    );

    await screen.findByText('https://example.com/api/test');

    expect(screen.getByText('Status Code')).toBeInTheDocument();
    expect(screen.getByText('Method')).toBeInTheDocument();
    expect(screen.getByText('URL')).toBeInTheDocument();
    expect(screen.getByText('Created At')).toBeInTheDocument();
    expect(screen.getByText('Request duration')).toBeInTheDocument();
    expect(screen.getByText('Error information')).toBeInTheDocument();

    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('GET')).toBeInTheDocument();
    expect(
      screen.getByText('https://example.com/api/test')
    ).toBeInTheDocument();
    expect(screen.getByText('120')).toBeInTheDocument();
    expect(screen.getByText('OK')).toBeInTheDocument();

    expect(screen.getByText('201')).toBeInTheDocument();
    expect(screen.getByText('POST')).toBeInTheDocument();
    expect(
      screen.getByText('https://example.com/api/data')
    ).toBeInTheDocument();
    expect(screen.getByText('300')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
  });
});

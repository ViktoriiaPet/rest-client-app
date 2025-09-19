// import { render, screen, waitFor, fireEvent } from '@testing-library/react';
// import { vi, it, describe, expect, beforeEach } from 'vitest';
// import { createRoutesStub, data } from 'react-router';
// import VariablesPage from '@/pages/variables';
// import { AuthContext } from '@/context/AuthContext';
// import { VariablesContext } from '@/context/VariablesContext';
// import type { User } from 'firebase/auth';
// import type { Variables } from '@/types/variables';
// import { Outlet } from 'react-router';

// // Моки зависимостей
// vi.mock('react-i18next', () => ({
//   useTranslation: () => ({
//     t: (key: string) => key,
//     i18n: {
//       changeLanguage: vi.fn(),
//       language: 'en',
//     },
//   }),
// }));

// vi.mock('@/components/TableRow', () => ({
//   default: ({ name, value, onClick }: { name: string; value: string; onClick: () => void }) => (
//     <div>
//       <span>{name}</span>
//       <span>{value}</span>
//       <button onClick={onClick}>Delete</button>
//     </div>
//   ),
// }));

// vi.mock('@/components/TableHeader', () => ({
//   default: () => <div data-testid="table-header">Table Header</div>,
// }));

// vi.mock('@/components/VariablesAddBar', () => ({
//   default: ({ onAdd }: { onAdd: (key: string, value: string) => void }) => (
//     <div data-testid="add-bar">
//       <button 
//         data-testid="add-variable-button" 
//         onClick={() => onAdd('testKey', 'testValue')}
//       >
//         Add Variable
//       </button>
//     </div>
//   ),
// }));

// const createTestAppStub = (
//   authValue: Parameters<typeof AuthContext.Provider>[0]['value'],
//   variablesValue: { variables: Variables; setVariables: vi.Mock }
// ) => {
//   return createRoutesStub([
//     {
//       path: '/',
//       Component: () => (
//         <AuthContext.Provider value={authValue}>
//           <VariablesContext.Provider value={variablesValue}>
//             <div className="test-root-wrapper">
//               <Outlet />
//             </div>
//           </VariablesContext.Provider>
//         </AuthContext.Provider>
//       ),
//       children: [
//         {
//           path: 'variables',
//           Component: VariablesPage,
//         },
//         {
//           path: '/',
//           Component: () => <div>Home Page</div>,
//         },
//       ],
//     },
//   ]);
// };

// describe('VariablesPage', () => {
//   const mockSetUser = vi.fn();
//   const mockSetToken = vi.fn();
//   const mockSetVariables = vi.fn();
//   const mockUser = { uid: 'test-uid', displayName: 'TestUser' } as User;

//   beforeEach(() => {
//     vi.clearAllMocks();
//   });

//   it('renders loading state when auth is loading', async () => {
//     const Stub = createTestAppStub(
//       {
//         user: null,
//         token: null,
//         loading: true,
//         setUser: mockSetUser,
//         setToken: mockSetToken,
//       },
//       {
//         variables: {},
//         setVariables: mockSetVariables,
//       }
//     );

//     render(<Stub initialEntries={['/variables']} />);

//     await waitFor(() => {
//       expect(screen.getByText('Loading...')).toBeInTheDocument();
//     });
//   });

//   it('redirects to home when user is not authenticated', async () => {
//     const Stub = createTestAppStub(
//       {
//         user: null,
//         token: null,
//         loading: false,
//         setUser: mockSetUser,
//         setToken: mockSetToken,
//       },
//       {
//         variables: {},
//         setVariables: mockSetVariables,
//       }
//     );

//     render(<Stub initialEntries={['/variables']} />);

//     await waitFor(() => {
//       expect(screen.getByText('Home Page')).toBeInTheDocument();
//       expect(screen.queryByText('variables.title')).not.toBeInTheDocument();
//     });
//   });

//   it('renders variables page with title when user is authenticated', async () => {
//     const Stub = createTestAppStub(
//       {
//         user: mockUser,
//         token: 'mock-token',
//         loading: false,
//         setUser: mockSetUser,
//         setToken: mockSetToken,
//       },
//       {
//         variables: {},
//         setVariables: mockSetVariables,
//       }
//     );

//     render(<Stub initialEntries={['/variables']} />);

//     await waitFor(() => {
//       expect(screen.getByText('variables.title')).toBeInTheDocument();
//       expect(screen.getByTestId('table-header')).toBeInTheDocument();
//       expect(screen.getByTestId('add-bar')).toBeInTheDocument();
//     });
//   });

//   it('displays variables list when variables exist', async () => {
//     const testVariables = {
//       API_KEY: '12345',
//       BASE_URL: 'https://api.example.com',
//       TIMEOUT: '5000'
//     };

//     const Stub = createTestAppStub(
//       {
//         user: mockUser,
//         token: 'mock-token',
//         loading: false,
//         setUser: mockSetUser,
//         setToken: mockSetToken,
//       },
//       {
//         variables: testVariables,
//         setVariables: mockSetVariables,
//       }
//     );

//     render(<Stub initialEntries={['/variables']} />);

//     await waitFor(() => {
//       expect(screen.getAllByTestId('table-row')).toHaveLength(3);
//       expect(screen.getByText('API_KEY')).toBeInTheDocument();
//       expect(screen.getByText('12345')).toBeInTheDocument();
//       expect(screen.getByText('BASE_URL')).toBeInTheDocument();
//       expect(screen.getByText('https://api.example.com')).toBeInTheDocument();
//     });
//   });

//   it('calls deleteVariable when delete button is clicked', async () => {
//     const testVariables = {
//       API_KEY: '12345',
//       BASE_URL: 'https://api.example.com'
//     };

//     const Stub = createTestAppStub(
//       {
//         user: mockUser,
//         token: 'mock-token',
//         loading: false,
//         setUser: mockSetUser,
//         setToken: mockSetToken,
//       },
//       {
//         variables: testVariables,
//         setVariables: mockSetVariables,
//       }
//     );

//     render(<Stub initialEntries={['/variables']} />);

//     await waitFor(() => {
//       const deleteButtons = screen.getAllByTestId('delete-button');
//       fireEvent.click(deleteButtons[0]);
//     });

//     expect(mockSetVariables).toHaveBeenCalledWith({ BASE_URL: 'https://api.example.com' });
//   });

//   it('calls addVariable when add button is clicked', async () => {
//     const Stub = createTestAppStub(
//       {
//         user: mockUser,
//         token: 'mock-token',
//         loading: false,
//         setUser: mockSetUser,
//         setToken: mockSetToken,
//       },
//       {
//         variables: {},
//         setVariables: mockSetVariables,
//       }
//     );

//     render(<Stub initialEntries={['/variables']} />);

//     await waitFor(() => {
//       const addButton = screen.getByTestId('add-variable-button');
//       fireEvent.click(addButton);
//     });

//     expect(mockSetVariables).toHaveBeenCalledWith({ testKey: 'testValue' });
//   });

//   it('displays empty state when no variables exist', async () => {
//     const Stub = createTestAppStub(
//       {
//         user: mockUser,
//         token: 'mock-token',
//         loading: false,
//         setUser: mockSetUser,
//         setToken: mockSetToken,
//       },
//       {
//         variables: {},
//         setVariables: mockSetVariables,
//       }
//     );

//     render(<Stub initialEntries={['/variables']} />);

//     await waitFor(() => {
//       expect(screen.queryByTestId('table-row')).not.toBeInTheDocument();
//       expect(screen.getByTestId('add-bar')).toBeInTheDocument();
//     });
//   });
// });
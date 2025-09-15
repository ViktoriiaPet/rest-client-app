import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

import type { JSX } from 'react';

import { useAuth } from '@/context/AuthContext';
import { DEFAULT_METHODS, type HttpMethod } from '@/types/apiMethods';
import { parseClientUrl, buildClientUrl } from '@/utils/restUrl';

const RestFullClient = lazy(() => import('@/components/RestFullClient'));

const isHttpMethod = (method: unknown): method is HttpMethod =>
  typeof method === 'string' &&
  DEFAULT_METHODS.includes(method.toUpperCase() as HttpMethod);

export default function Restfull(): JSX.Element {
  const { user, loading } = useAuth();
  const { method: methodParam, urlB64, bodyB64 } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  const parsed = parseClientUrl({
    method: methodParam,
    urlB64,
    bodyB64,
    search,
  });

  const currentMethod: HttpMethod = isHttpMethod(parsed.method)
    ? parsed.method
    : 'GET';

  useEffect(() => {
    if (!loading && user && !isHttpMethod(parsed.method)) {
      void navigate(
        buildClientUrl({
          method: 'GET',
          url: parsed.url,
          body: parsed.body,
          headers: parsed.headers,
        }),
        { replace: true }
      );
    }
  }, [
    loading,
    user,
    parsed.method,
    parsed.url,
    parsed.body,
    parsed.headers,
    navigate,
  ]);

  const handleChange = useCallback(
    ({ method }: { method: HttpMethod }): void => {
      const next = method.toUpperCase() as HttpMethod;
      if (next !== currentMethod) {
        void navigate(`/auth/restfull/${next}`, { replace: true });
      }
    },
    [navigate, currentMethod]
  );

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="p-[5vw] w-full">
      <Suspense fallback={null}>
        <RestFullClient method={currentMethod} onChange={handleChange} />
      </Suspense>
    </div>
  );
}

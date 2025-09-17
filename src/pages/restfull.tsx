import { Suspense, lazy, useCallback, useEffect, useMemo } from 'react';
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

const isHttpMethod = (value: unknown): value is HttpMethod =>
  typeof value === 'string' &&
  DEFAULT_METHODS.includes(value.toUpperCase() as HttpMethod);

export default function Restfull(): JSX.Element {
  const { user, loading } = useAuth();
  const { method: methodParam, urlB64 } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  const parsed = useMemo(
    () => parseClientUrl({ method: methodParam, urlB64, search }),
    [methodParam, urlB64, search]
  );

  const currentMethod: HttpMethod = isHttpMethod(parsed.method)
    ? parsed.method
    : 'GET';

  useEffect(() => {
    if (!loading && user && !isHttpMethod(parsed.method)) {
      navigate(
        buildClientUrl({
          method: 'GET',
          url: parsed.url,
          headers: parsed.headers,
        }),
        { replace: true }
      );
    }
  }, [loading, user, parsed.method, parsed.url, parsed.headers, navigate]);

  const handleChange = useCallback(
    ({ method }: { method: HttpMethod }): void => {
      const next = method.toUpperCase() as HttpMethod;
      if (next !== currentMethod) {
        const path = `/auth/restfull/${next}${urlB64 ? `/${urlB64}` : ''}${search}`;
        navigate(path, { replace: true });
      }
    },
    [navigate, currentMethod, urlB64, search]
  );

  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="w-full">
      <Suspense
        fallback={<div className="p-2 text-sm opacity-70">Loading…</div>}
      >
        <RestFullClient method={currentMethod} onChange={handleChange} />
      </Suspense>
    </div>
  );
}

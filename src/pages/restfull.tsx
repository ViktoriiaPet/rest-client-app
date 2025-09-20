import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
import { useTranslation } from 'react-i18next';
import { Loader } from '@/components/Loader';

const RestFullClient = lazy(() => import('@/components/RestFullClient'));

const isHttpMethod = (value: unknown): value is HttpMethod =>
  typeof value === 'string' &&
  DEFAULT_METHODS.includes(value.toUpperCase() as HttpMethod);

export default function Restfull(): JSX.Element {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  const { user, loading } = useAuth();
  const { method: methodParam, urlB64 } = useParams();
  const { search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

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
  if (!mounted) return <></>;

  if (loading) return <div>{t('app.loading')}</div>;
  if (!user) return <Navigate to="/" replace />;

  return (
    <div className="w-full">
      <Suspense
        fallback={
          <div className="p-2 text-sm opacity-70">
            {t('app.loading')} <Loader />
          </div>
        }
      >
        <RestFullClient method={currentMethod} onChange={handleChange} />
      </Suspense>
    </div>
  );
}

import { Component } from 'react';
import { withTranslation, type WithTranslation } from 'react-i18next';

import type { ErrorInfo, ReactNode } from 'react';

type Props = WithTranslation & { children: ReactNode };
type State = { hasError: boolean; message?: string };

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(err: unknown): State {
    return {
      hasError: true,
      message: err instanceof Error ? err.message : String(err),
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('ErrorBoundary:', error, info);
  }

  retry = (): void => {
    this.setState({ hasError: false, message: undefined });
  };

  render(): ReactNode {
    const { t } = this.props;

    if (this.state.hasError) {
      return (
        <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold">
            {t('errorBoundary.title', 'Something went wrong')}
          </h3>

          {!!this.state.message && (
            <p className="text-sm opacity-80 whitespace-pre-wrap break-words">
              {this.state.message}
            </p>
          )}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={this.retry}
              className="px-3 py-1 rounded border"
            >
              {t('errorBoundary.tryAgain', 'Try again')}
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);

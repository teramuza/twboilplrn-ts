import { TOptions } from 'i18next';

type TFunctionResult = string | object | Array<string | object> | undefined | null;

export function setTranslationBundle(
  namespace: string,
  ...resources: { lang: string; bundle: object }[]
): void;

export function useTranslate(
  key: string,
): <TResult extends TFunctionResult = string>(
  key: string | string[],
  option?: TOptions & { common?: boolean },
) => TResult;

export function lang(key: string, options?: TOptions): string;

export default function (key: string): string;

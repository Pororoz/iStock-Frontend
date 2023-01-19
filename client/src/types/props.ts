import { ReactNode } from 'react';

export type ReactProps<T> = T & { children?: ReactNode };
export type StyledProps<T> = T & { className?: string };

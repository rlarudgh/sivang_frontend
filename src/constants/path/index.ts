export const PageList = ['', 'main', 'write', 'regular', 'record'] as const;

export type PageListType = (typeof PageList)[number];

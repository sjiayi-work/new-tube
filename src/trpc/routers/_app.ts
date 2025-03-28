import { createTRPCRouter } from '../init';
import { studiosRouter } from '@/modules/studio/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedures';
import { videosRouter } from '@/modules/videos/server/procedures';

// This file is copied from https://trpc.io/docs/client/react/server-components#2-create-a-trpc-router

export const appRouter = createTRPCRouter({
    categories: categoriesRouter,
    studios: studiosRouter,
    videos: videosRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
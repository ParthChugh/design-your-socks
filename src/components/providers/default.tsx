import { ConvexProvider } from "convex/react";
import { ThemeProvider } from "next-themes";

import { convex } from "@/lib/convex.ts";
import { Toaster } from "@/components/ui/sonner.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { QueryClientProvider } from "@/components/providers/query-client.tsx";

export function DefaultProviders({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <QueryClientProvider>
        <TooltipProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            {children}
          </ThemeProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </ConvexProvider>
  );
}

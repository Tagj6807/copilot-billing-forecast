"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { ParsedReport } from "@/lib/report";

interface ReportContextValue {
  report: ParsedReport | null;
  setReport: (report: ParsedReport | null) => void;
  clearReport: () => void;
}

const ReportContext = createContext<ReportContextValue | null>(null);

/**
 * Holds the parsed usage report in memory on the client only.
 * The data never leaves the browser and is not persisted server-side.
 */
export function ReportProvider({ children }: { children: React.ReactNode }) {
  const [report, setReport] = useState<ParsedReport | null>(null);

  const value = useMemo<ReportContextValue>(
    () => ({
      report,
      setReport,
      clearReport: () => setReport(null),
    }),
    [report],
  );

  return <ReportContext.Provider value={value}>{children}</ReportContext.Provider>;
}

export function useReport(): ReportContextValue {
  const ctx = useContext(ReportContext);
  if (!ctx) {
    throw new Error("useReport must be used within a ReportProvider");
  }
  return ctx;
}

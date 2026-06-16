import type { ComponentType } from "react";
import type { Icon } from "@primer/octicons-react";
import {
  GraphIcon,
  PeopleIcon,
  PulseIcon,
  StackIcon,
  OrganizationIcon,
} from "@primer/octicons-react";
import { UsageForecast } from "@/components/tools/usage-forecast";
import { TeamInsights } from "@/components/tools/team-insights";
import { ModelBreakdown } from "@/components/tools/model-breakdown";
import { SpikeDetection } from "@/components/tools/spike-detection";
import { CostCenterRollup } from "@/components/tools/cost-center-rollup";

export interface Tool {
  /** Stable id used for routing/selection. */
  id: string;
  label: string;
  /** Short description shown in the sidebar / header. */
  description: string;
  /** Octicon component shown in the sidebar. */
  icon: Icon;
  /** Sidebar grouping. */
  category: ToolCategory;
  /** The view component for this tool. */
  component: ComponentType;
  /** Whether the tool is ready to use. */
  enabled: boolean;
}

/** Sidebar categories, in display order. */
export type ToolCategory = "Forecasting" | "Breakdowns" | "Monitoring";

export const TOOL_CATEGORIES: ToolCategory[] = [
  "Forecasting",
  "Breakdowns",
  "Monitoring",
];

/** Accent color per category, shared by the sidebar and the main content header. */
export const CATEGORY_COLOR: Record<ToolCategory, string> = {
  Forecasting: "#0969da",
  Breakdowns: "#8250df",
  Monitoring: "#bc4c00",
};

/**
 * Single source of truth for the sidebar. Add a new tool here (and its view
 * component) to register it across the app.
 */
export const TOOLS: Tool[] = [
  {
    id: "usage-forecast",
    label: "Usage Forecast",
    description: "Forecast AI Credit consumption and track it against your entitlement.",
    icon: GraphIcon,
    category: "Forecasting",
    component: UsageForecast,
    enabled: true,
  },
  {
    id: "team-insights",
    label: "Team Insights",
    description: "Per-user metrics, models, and budget forecasts.",
    icon: PeopleIcon,
    category: "Breakdowns",
    component: TeamInsights,
    enabled: true,
  },
  {
    id: "model-breakdown",
    label: "Model Breakdown",
    description: "AI Credit usage and trends by model.",
    icon: StackIcon,
    category: "Breakdowns",
    component: ModelBreakdown,
    enabled: true,
  },
  {
    id: "spike-detection",
    label: "Spike Detection",
    description: "Flag days with anomalous usage above the trend.",
    icon: PulseIcon,
    category: "Monitoring",
    component: SpikeDetection,
    enabled: true,
  },
  {
    id: "cost-center-rollup",
    label: "Cost Center Rollup",
    description: "Roll up AI Credit usage and budgets by cost center.",
    icon: OrganizationIcon,
    category: "Breakdowns",
    component: CostCenterRollup,
    enabled: true,
  },
];

export const DEFAULT_TOOL_ID = TOOLS[0].id;

export function getTool(id: string): Tool | undefined {
  return TOOLS.find((t) => t.id === id);
}

/** Accent color for a tool, derived from its category. */
export function getToolColor(id: string): string {
  const tool = getTool(id);
  return tool ? CATEGORY_COLOR[tool.category] : CATEGORY_COLOR.Forecasting;
}

/** Tools grouped by category, preserving registry order within each group. */
export function getToolsByCategory(): { category: ToolCategory; tools: Tool[] }[] {
  return TOOL_CATEGORIES.map((category) => ({
    category,
    tools: TOOLS.filter((t) => t.category === category),
  })).filter((group) => group.tools.length > 0);
}

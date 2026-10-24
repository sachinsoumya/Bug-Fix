import { Search, Code2, Bug, ShieldCheck, Rocket } from "lucide-react";

export const processSteps = [
  {
    number: "01",
    title: "Find the Problem",
    description:
      "We investigate the issue, understand your requirements, and identify the root cause before changing code.",
    note: "No random guessing.",
    icon: Search,
  },
  {
    number: "02",
    title: "Build the Fix",
    description:
      "We implement a focused solution using clean, maintainable code that fits your application.",
    note: "Fix the cause, not just the symptom.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Test Everything",
    description:
      "We verify the changes, check edge cases, and make sure the fix does not introduce new problems.",
    note: "Fingers crossed. Tests first.",
    icon: Bug,
  },
  {
    number: "04",
    title: "Review & Refine",
    description:
      "We review the implementation for reliability, responsiveness, and maintainability.",
    note: "Good enough is not always good.",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Deploy with Confidence",
    description:
      "We prepare the release, deploy to the appropriate environment, and verify the application.",
    note: "Less prayer. More monitoring.",
    icon: Rocket,
  },
];

import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ModuleDetail } from "@/components/ModuleDetail";
import { getModuleBySlug, modules } from "@/data/modules";

type ModulePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return modules.map((module) => ({ slug: module.slug }));
}

export function generateMetadata({ params }: ModulePageProps): Metadata {
  const moduleData = getModuleBySlug(params.slug);

  if (!moduleData) {
    return {
      title: "Module not found | Quantum Compass"
    };
  }

  return {
    title: `${moduleData.title} | Quantum Compass`,
    description: moduleData.summary
  };
}

export default function ModulePage({ params }: ModulePageProps) {
  const moduleData = getModuleBySlug(params.slug);

  if (!moduleData) {
    notFound();
  }

  return <ModuleDetail module={moduleData} />;
}

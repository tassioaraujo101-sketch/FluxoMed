"use client";

import { useState } from "react";
import type { Flowchart } from "@/data/flowcharts";

type FlowchartCardProps = {
  flowchart: Flowchart;
};

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 transition hover:border-sky-600/60">
      <h3 className="mb-2 text-sm font-semibold text-sky-300">{title}</h3>
      <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function FlowchartCard({ flowchart }: FlowchartCardProps) {
  const [anamnesisNotes, setAnamnesisNotes] = useState("");
  const [examNotes, setExamNotes] = useState("");
  const [conductNotes, setConductNotes] = useState("");

  return (
    <article className="glass-card animate-fade-up space-y-3 p-3 md:p-4">
      <div>
        <h2 className="text-xl font-semibold text-white">{flowchart.title}</h2>
        <p className="text-sm text-slate-400">Especialidade: {flowchart.specialty}</p>
        <p className="mt-1 text-sm text-slate-300">{flowchart.summary}</p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <ListSection title="Triagem inicial" items={flowchart.triageQuestions} />
        <ListSection title="Scores e escalas" items={flowchart.scores} />
        <ListSection title="Exames" items={flowchart.exams} />
        <ListSection title="Conduta inicial" items={flowchart.immediateConduct} />
        <ListSection title="Medicações" items={flowchart.medications} />
        <ListSection title="O que não fazer" items={flowchart.doNotDo} />
        <ListSection title="Critérios de gravidade" items={flowchart.severityCriteria} />
        <ListSection title="Encaminhamento/Internação" items={flowchart.referralCriteria} />
        <ListSection title="Anamnese direcionada" items={flowchart.anamnesisTemplate} />
        <ListSection title="Exame físico direcionado" items={flowchart.physicalExamTemplate} />
        <ListSection title="Referências" items={flowchart.references} />
      </div>

      <section className="grid gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4 md:grid-cols-3">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Anamnese editável</p>
          <textarea
            value={anamnesisNotes}
            onChange={(event) => setAnamnesisNotes(event.target.value)}
            className="h-24 w-full rounded-xl border border-slate-700 bg-slate-950 p-2 text-xs text-slate-200"
          />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Exame físico editável</p>
          <textarea
            value={examNotes}
            onChange={(event) => setExamNotes(event.target.value)}
            className="h-24 w-full rounded-xl border border-slate-700 bg-slate-950 p-2 text-xs text-slate-200"
          />
        </div>
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">Conduta defensiva</p>
          <textarea
            value={conductNotes}
            onChange={(event) => setConductNotes(event.target.value)}
            className="h-24 w-full rounded-xl border border-slate-700 bg-slate-950 p-2 text-xs text-slate-200"
          />
        </div>
      </section>
    </article>
  );
}

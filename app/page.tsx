"use client";

import { useMemo, useState } from "react";
import { Disclaimer } from "@/components/Disclaimer";
import { FlowchartCard } from "@/components/FlowchartCard";
import { QuickSuggestions } from "@/components/QuickSuggestions";
import { flowcharts, quickSuggestions, specialties, type Flowchart } from "@/data/flowcharts";
import { findFlowchartByQuery } from "@/lib/search";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const initialAssistantMessage =
  "Pronto para montar seu fluxo clínico. Digite o caso e selecione uma especialidade para buscar protocolos relacionados.";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("Neurologia");
  const [activeFlowchart, setActiveFlowchart] = useState<Flowchart>(flowcharts[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([{ role: "assistant", content: initialAssistantMessage }]);

  const filteredFlowcharts = useMemo(() => {
    const bySpecialty = flowcharts.filter((item) => item.specialty.toLowerCase() === selectedSpecialty.toLowerCase());
    if (!query.trim()) return bySpecialty;

    const normalized = query.toLowerCase();
    return bySpecialty.filter(
      (item) => item.title.toLowerCase().includes(normalized) || item.searchTags.some((tag) => tag.includes(normalized))
    );
  }, [query, selectedSpecialty]);

  const handleGenerateFlow = (input?: string) => {
    const caseQuery = (input ?? query).trim();
    if (!caseQuery) return;

    const result = findFlowchartByQuery(caseQuery, selectedSpecialty);
    const fallbackFlow = filteredFlowcharts[0] ?? flowcharts[0];
    const selectedFlow = result ?? fallbackFlow;

    setActiveFlowchart(selectedFlow);
    setMessages((current) => [
      ...current,
      { role: "user", content: caseQuery },
      {
        role: "assistant",
        content: `Fluxo sugerido: ${selectedFlow.title}. Revise anamnese, exame físico, conduta, medicações e referências antes de aplicar.`
      }
    ]);
  };

  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl p-3 pb-8 md:p-6">
      <div className="premium-gradient animate-fade-up mb-4 rounded-3xl p-5 text-white shadow-2xl shadow-black/30 md:p-7">
        <p className="text-[11px] uppercase tracking-[0.25em] text-sky-100/80">FluxoMed</p>
        <h1 className="mt-2 text-2xl font-semibold leading-tight md:text-4xl">Assistente médico premium</h1>
        <p className="mt-2 max-w-3xl text-sm text-slate-100/90 md:text-base">
          Chat clínico com fluxogramas modernos para triagem, conduta e documentação estruturada.
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-[260px_1fr] lg:gap-4">
        <aside className="glass-card animate-fade-up p-3 md:p-4">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">Especialidades</h2>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {specialties.map((specialty) => (
              <li key={specialty}>
                <button
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`w-full rounded-xl px-3 py-2 text-left text-xs transition-all md:text-sm ${
                    selectedSpecialty === specialty
                      ? "bg-sky-500/90 font-semibold text-white shadow-lg shadow-sky-900/40"
                      : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {specialty}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <section className="space-y-3 md:space-y-4">
          <div className="glass-card animate-fade-up p-3 md:p-4">
            <h2 className="mb-3 text-sm font-semibold text-slate-100">Chat clínico</h2>
            <div className="mb-3 h-[220px] space-y-3 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-950/60 p-3 md:h-[280px]">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[94%] rounded-2xl px-3 py-2 text-xs md:text-sm ${
                    message.role === "assistant"
                      ? "animate-fade-up border border-slate-800 bg-slate-900 text-slate-200"
                      : "ml-auto animate-fade-up bg-sky-500 text-white"
                  }`}
                >
                  {message.content}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 md:flex-row">
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex: paciente com suspeita de AVC"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none ring-sky-400 focus:ring"
              />
              <button
                onClick={() => handleGenerateFlow()}
                className="rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Buscar
              </button>
            </div>
          </div>

          <div className="glass-card animate-fade-up p-3 md:p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Resultados em {selectedSpecialty}</p>
            <ul className="space-y-2">
              {filteredFlowcharts.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveFlowchart(item)}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/90 px-3 py-2 text-left transition hover:border-sky-500"
                  >
                    <span className="text-sm font-semibold text-slate-100">{item.title}</span>
                    <p className="text-xs text-slate-400">{item.summary}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <QuickSuggestions
            suggestions={quickSuggestions}
            onSelectSuggestion={(item) => {
              setQuery(item);
              handleGenerateFlow(item);
            }}
          />

          <FlowchartCard flowchart={activeFlowchart} />
          <Disclaimer />
        </section>
      </div>
    </main>
  );
}

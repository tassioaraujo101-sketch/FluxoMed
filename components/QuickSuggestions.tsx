type QuickSuggestionsProps = {
  suggestions: string[];
  onSelectSuggestion: (value: string) => void;
};

export function QuickSuggestions({ suggestions, onSelectSuggestion }: QuickSuggestionsProps) {
  return (
    <div className="glass-card animate-fade-up p-3 md:p-4">
      <h2 className="mb-2 text-sm font-semibold text-slate-100">Sugestões rápidas</h2>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSelectSuggestion(suggestion)}
            className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-200 transition hover:border-sky-500 hover:text-white"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}

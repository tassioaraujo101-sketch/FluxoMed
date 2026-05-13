export type FlowchartSection = {
  title: string;
  items: string[];
};

export type Flowchart = {
  id: string;
  title: string;
  specialty: string;
  summary: string;
  searchTags: string[];
  triageQuestions: string[];
  scores: string[];
  exams: string[];
  immediateConduct: string[];
  medications: string[];
  doNotDo: string[];
  severityCriteria: string[];
  referralCriteria: string[];
  anamnesisTemplate: string[];
  physicalExamTemplate: string[];
  references: string[];
};

const baseReferences = [
  "Ministério da Saúde (Brasil) — Linha de cuidado do AVC agudo.",
  "AHA/ASA Guidelines for the Early Management of Patients With Acute Ischemic Stroke.",
  "ESO Guidelines on Intravenous Thrombolysis and Endovascular Treatment."
];

const buildGenericFlow = (id: string, title: string, specialty: string, tags: string[]): Flowchart => ({
  id,
  title,
  specialty,
  summary: "Fluxo inicial educacional. Personalize com protocolos locais e perfil do paciente.",
  searchTags: [title.toLowerCase(), specialty.toLowerCase(), ...tags],
  triageQuestions: ["Avaliação primária ABCDE", "História direcionada", "Sinais de alarme"],
  scores: ["Escalas específicas da condição", "Critérios de gravidade"],
  exams: ["Exames laboratoriais iniciais", "Imagem conforme suspeita"],
  immediateConduct: ["Estabilização inicial", "Tratamento de suporte", "Conduta específica"],
  medications: ["Prescrição guiada por protocolo", "Ajuste para comorbidades e função renal"],
  doNotDo: ["Evitar condutas sem confirmação", "Evitar atrasos em casos tempo-dependentes"],
  severityCriteria: ["Disfunção orgânica", "Instabilidade clínica"],
  referralCriteria: ["Internação", "Encaminhamento para UTI quando indicado"],
  anamnesisTemplate: ["Queixa principal", "HDA", "Comorbidades", "Medicações em uso"],
  physicalExamTemplate: ["Estado geral", "Sinais vitais", "Exame focado por sistema"],
  references: baseReferences
});

const avcFlow: Flowchart = {
  id: "suspeita-avc",
  title: "Suspeita de AVC",
  specialty: "Neurologia",
  summary:
    "Fluxo tempo-dependente para reconhecimento e manejo inicial de AVC isquêmico/hemorrágico na emergência.",
  searchTags: ["avc", "stroke", "neurologia", "déficit focal", "hemiparesia", "afasia", "nihss"],
  triageQuestions: [
    "Aplicar ABCDE e estabilizar via aérea/respiração/circulação.",
    "Determinar LAST KNOWN WELL (último momento sem sintomas).",
    "Investigar uso de anticoagulantes, antiagregantes e cirurgias recentes.",
    "Pesquisar início súbito de déficit focal: fala, força, sensibilidade, visão, equilíbrio.",
    "Registrar hora de chegada e ativar protocolo AVC imediatamente."
  ],
  scores: [
    "NIHSS na admissão e reavaliações seriadas.",
    "Escala de Glasgow para nível de consciência.",
    "mRS prévio para funcionalidade basal.",
    "Escala pré-hospitalar de oclusão de grande vaso quando aplicável (RACE/LAMS)."
  ],
  exams: [
    "Glicemia capilar imediata (descartar mimetizador).",
    "TC de crânio sem contraste em caráter de urgência.",
    "AngioTC de crânio/pescoço para elegibilidade de trombectomia.",
    "Laboratório inicial: hemograma, eletrólitos, função renal, TAP/INR, TTPa.",
    "ECG de 12 derivações e monitorização cardíaca contínua."
  ],
  immediateConduct: [
    "Objetivo porta-imagem ≤ 20 min e porta-agulha ≤ 60 min (quando trombólise indicada).",
    "Manter cabeceira 0–30° conforme estado respiratório e risco de broncoaspiração.",
    "Controlar temperatura, oxigenação (SatO2 > 94%) e glicemia.",
    "Avaliar elegibilidade para trombólise IV (janela e contraindicações).",
    "Avaliar elegibilidade para trombectomia mecânica (oclusão de grande vaso e critérios de imagem).",
    "Definir conduta específica para AVC isquêmico versus hemorrágico após neuroimagem."
  ],
  medications: [
    "Alteplase 0,9 mg/kg (máx. 90 mg): 10% bolus + restante em 60 min, quando elegível.",
    "Tenecteplase 0,25 mg/kg IV bolus (conforme protocolo institucional e diretriz local).",
    "Controle pressórico: anti-hipertensivo IV titulado quando PA acima de limites terapêuticos.",
    "AAS após exclusão de hemorragia e conforme estratégia de reperfusão.",
    "Profilaxia de TVP mecânica e farmacológica quando indicada e segura."
  ],
  doNotDo: [
    "Não atrasar TC para aguardar exames não essenciais.",
    "Não reduzir PA de forma agressiva sem indicação.",
    "Não oferecer antitrombótico antes de excluir hemorragia intracraniana.",
    "Não negligenciar hipoglicemia/hiperglicemia como mimetizadores ou agravantes.",
    "Não atrasar transferência para centro com trombectomia quando indicado."
  ],
  severityCriteria: [
    "NIHSS alto ou piora neurológica progressiva.",
    "Rebaixamento do nível de consciência/comprometimento de tronco.",
    "Instabilidade hemodinâmica ou respiratória.",
    "Edema cerebral extenso, efeito de massa ou sinais de herniação na imagem."
  ],
  referralCriteria: [
    "Internação em unidade de AVC para casos elegíveis e estáveis.",
    "UTI neurológica para casos graves, instáveis ou pós-intervenção complexa.",
    "Transferência imediata para centro terciário com neurorradiologia intervencionista quando necessário."
  ],
  anamnesisTemplate: [
    "Queixa principal e início súbito/progressivo dos sintomas.",
    "Horário exato do início ou último momento assintomático.",
    "Déficits observados: fraqueza, desvio de rima, fala, visão, coordenação.",
    "Comorbidades (HAS, DM, FA, AVC prévio), uso de anticoagulantes e última dose.",
    "Cirurgias/traumas recentes, sangramentos prévios e alergias medicamentosas.",
    "Estado funcional prévio (mRS basal), suporte familiar e autonomia."
  ],
  physicalExamTemplate: [
    "Sinais vitais completos + glicemia capilar + oximetria.",
    "Nível de consciência (Glasgow), orientação e linguagem.",
    "Pupilas, pares cranianos, desvio de olhar/rima.",
    "Força muscular segmentar (0-5), sensibilidade e coordenação.",
    "Marcha (se possível), negligência, disartria/afasia.",
    "Aplicar NIHSS completo e registrar escore por item."
  ],
  references: baseReferences
};

export const flowcharts: Flowchart[] = [
  avcFlow,
  buildGenericFlow("dor-toracica", "Dor torácica", "Cardiologia", ["iam", "sindrome coronariana", "ecg"]),
  buildGenericFlow("sepse", "Sepse", "UTI", ["lactato", "choque séptico", "antibiotico"]),
  buildGenericFlow("dispneia", "Dispneia", "Emergência", ["insuficiencia respiratoria", "asma", "tep"]),
  buildGenericFlow("cetoacidose-diabetica", "Cetoacidose diabética", "Clínica Médica", ["cad", "insulina", "acidose"]),
  buildGenericFlow("crise-hipertensiva", "Crise hipertensiva", "Clínica Médica", ["pressao alta", "urgencia", "emergencia hipertensiva"]),
  buildGenericFlow("rebaixamento-consciencia", "Rebaixamento do nível de consciência", "Emergência", ["coma", "glasgow", "delirium"]),
  buildGenericFlow("choque", "Choque", "UTI", ["hipotensao", "vasoativo", "hipoperfusao"]),
  buildGenericFlow("pneumonia", "Pneumonia", "Clínica Médica", ["cap", "infeccao pulmonar", "antibiotico"]),
  buildGenericFlow("abdome-agudo", "Abdome agudo", "Cirurgia", ["dor abdominal", "peritonite", "cirurgia"])
];

export const quickSuggestions = flowcharts.map((item) => item.title);

export const specialties = [
  "Emergência",
  "Clínica Médica",
  "UTI",
  "Neurologia",
  "Cardiologia",
  "Pediatria",
  "Ginecologia e Obstetrícia",
  "Cirurgia"
];

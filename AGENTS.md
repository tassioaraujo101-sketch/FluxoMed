Quero criar um app/site médico chamado FluxoMed.

Objetivo geral:
Desenvolver uma plataforma com interface semelhante a um chat, onde o médico ou estudante possa selecionar ou digitar uma situação clínica e receber um fluxograma de conduta baseado em literatura médica atualizada.

Ideia principal:
O sistema deve funcionar como um assistente de fluxogramas médicos. O usuário informa um caso, por exemplo: “paciente com suspeita de AVC”, e o app apresenta um fluxo organizado de atendimento, incluindo:

1. Perguntas iniciais para triagem do caso.
2. Scores e escalas aplicáveis.
3. Exames que devem ser solicitados.
4. Condutas imediatas.
5. Medicações indicadas, com doses quando apropriado.
6. O que não deve ser feito.
7. Critérios de gravidade.
8. Critérios de encaminhamento, internação ou UTI.
9. Referências e base científica utilizada.

Exemplo de uso:
Usuário digita: “Paciente com suspeita de AVC”.

O sistema deve exibir:
- Avaliação inicial ABCDE.
- Tempo de início dos sintomas.
- Escala NIHSS.
- Glicemia capilar.
- Tomografia de crânio sem contraste.
- Avaliação de trombólise.
- Avaliação de trombectomia.
- Condutas conforme AVC isquêmico ou hemorrágico.
- Contraindicações.
- Medicações.
- Cuidados que devem ser evitados.

Funcionalidade com IA:
Seria interessante integrar inteligência artificial dentro do próprio app para acelerar a construção do fluxograma e ajudar na tomada de decisão educacional. A IA deve organizar a informação de forma prática, mas sempre com aviso de que o conteúdo é educacional e não substitui julgamento clínico.

Atualização científica:
O sistema deve ser preparado para futuramente permitir atualização dos fluxogramas com base em diretrizes recentes, artigos, consensos e protocolos oficiais. A ideia é que a base de conhecimento possa ser atualizada periodicamente.

Anamnese e exame físico:
Além do fluxograma, o app deve gerar um modelo de anamnese e exame físico direcionado ao caso clínico.

Exemplo:
Para suspeita de AVC, o app deve sugerir:
- Queixa principal.
- História da doença atual.
- Horário de início dos sintomas.
- Comorbidades.
- Uso de anticoagulantes.
- Antecedentes neurológicos.
- Exame neurológico direcionado.
- Escala de força.
- Pupilas.
- Pares cranianos.
- Sensibilidade.
- Coordenação.
- Linguagem.
- Nível de consciência.

Medicina defensiva:
O modelo de anamnese, exame físico e conduta deve ser estruturado pensando em medicina defensiva, ajudando o médico a documentar bem o atendimento. O sistema deve deixar campos editáveis para que o profissional revise, personalize e finalize antes de usar no prontuário.

Funcionalidades iniciais desejadas:
1. Tela inicial em formato de chat.
2. Campo para o usuário digitar o caso clínico.
3. Sugestões rápidas de temas comuns.
4. Fluxogramas organizados por especialidade.
5. Módulo de anamnese direcionada.
6. Módulo de exame físico direcionado.
7. Módulo de conduta.
8. Módulo de prescrição sugerida.
9. Módulo “o que não fazer”.
10. Módulo de referências.
11. Aviso de segurança médica e uso educacional.

Especialidades iniciais:
- Emergência
- Clínica Médica
- UTI
- Neurologia
- Cardiologia
- Pediatria
- Ginecologia e Obstetrícia
- Cirurgia

Primeiros fluxogramas para criar:
1. Suspeita de AVC
2. Dor torácica
3. Sepse
4. Dispneia
5. Cetoacidose diabética
6. Crise hipertensiva
7. Rebaixamento do nível de consciência
8. Choque
9. Pneumonia
10. Abdome agudo

Estilo visual:
Quero uma interface moderna, limpa, responsiva e intuitiva, parecida com um chat médico premium. Deve funcionar bem em celular e computador.

Stack sugerida:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Estrutura modular
- Dados iniciais em JSON ou banco simples
- Preparar para futura integração com IA e banco de dados

Importante:
O projeto deve começar simples, mas com estrutura escalável para futuramente virar um app completo com login, favoritos, histórico, revisão, flashcards e integração com IA.

const STUDY_MODULES = [
  {
    id: "mod-magnesio-preeclampsia",
    titulo: "Sulfato de magnésio na pré-eclâmpsia",
    area: "Obstetrícia",
    tempo: "8–12 min",
    resumo: [
      "O sulfato de magnésio é usado principalmente para prevenir e tratar convulsões na pré-eclâmpsia/eclâmpsia. Ele não é o anti-hipertensivo principal.",
      "Molecularmente, reduz excitabilidade neuronal por antagonismo funcional do cálcio, modulação de receptores NMDA e redução da liberação pré-sináptica de neurotransmissores.",
      "Na junção neuromuscular, o magnésio reduz entrada de cálcio no terminal pré-sináptico e diminui liberação de acetilcolina. Por isso potencializa bloqueadores neuromusculares.",
      "A toxicidade evolui com perda de reflexos, sonolência, fraqueza, depressão respiratória, hipotensão, alterações de condução e parada em casos graves.",
      "O cálcio intravenoso é antídoto fisiológico: não remove magnésio do sangue, mas antagoniza seus efeitos no coração, músculo liso e junção neuromuscular."
    ],
    frasesOuro: [
      "Magnésio previne convulsão eclâmptica; não substitui tratamento da hipertensão grave.",
      "Cálcio não limpa magnésio: devolve cálcio funcional à membrana e à junção neuromuscular.",
      "Perda de reflexos é alerta precoce; depressão respiratória é emergência."
    ],
    pegadinhas: [
      "Confundir sulfato de magnésio com anti-hipertensivo primário.",
      "Esquecer que magnésio potencializa bloqueadores neuromusculares.",
      "Achar que cálcio reduz magnésio sérico. Ele antagoniza o efeito, mas a eliminação depende principalmente do rim.",
      "Fazer grandes volumes em pré-eclâmpsia grave sem lembrar risco de edema pulmonar."
    ],
    quickQuestions: [
      {
        pergunta: "Qual é o primeiro sinal clínico clássico de toxicidade por magnésio?",
        resposta: "Perda ou redução dos reflexos tendíneos profundos."
      },
      {
        pergunta: "Por que o cálcio melhora depressão respiratória por magnésio?",
        resposta: "Porque aumenta cálcio funcional na junção neuromuscular, favorecendo liberação de acetilcolina e transmissão neuromuscular."
      },
      {
        pergunta: "O sulfato de magnésio controla a pressão arterial grave da pré-eclâmpsia?",
        resposta: "Não como fármaco principal. Ele é anticonvulsivante. Hipertensão grave exige anti-hipertensivos apropriados."
      },
      {
        pergunta: "Qual cuidado anestésico é essencial se a paciente recebeu magnésio?",
        resposta: "Monitorar e titular bloqueadores neuromusculares, pois o magnésio pode prolongar e potencializar bloqueio."
      },
      {
        pergunta: "O que remove magnésio do corpo em intoxicação importante com insuficiência renal?",
        resposta: "Suspender a infusão, suporte clínico e, em casos graves ou insuficiência renal, diálise."
      }
    ]
  },
  {
    id: "mod-anestesicos-locais-last",
    titulo: "Anestésicos locais e toxicidade sistêmica",
    area: "Regional / Dor",
    tempo: "10–15 min",
    resumo: [
      "Anestésicos locais bloqueiam canais de sódio voltagem-dependentes, impedindo propagação do potencial de ação.",
      "A forma não ionizada atravessa a membrana neural; a forma ionizada atua de modo mais efetivo no lado intracelular do canal de sódio.",
      "Ambiente ácido, como tecido infectado, aumenta fração ionizada fora do nervo e prejudica penetração, causando falha ou bloqueio incompleto.",
      "Toxicidade sistêmica pode começar com sintomas neurológicos: gosto metálico, zumbido, parestesias, agitação e convulsão. Pode evoluir para arritmias, choque e parada.",
      "Hipóxia, hipercarbia e acidose pioram a toxicidade. Ventilar bem é tratamento, não detalhe. Em toxicidade grave, emulsão lipídica deve ser acionada precocemente."
    ],
    frasesOuro: [
      "Na toxicidade por anestésico local, ventilação é antídoto fisiológico contra acidose e hipóxia.",
      "Abscesso atrapalha anestésico local porque o pH baixo prende a molécula carregada fora do nervo.",
      "Em LAST grave: parar injeção, oxigenar, ventilar, tratar convulsão e iniciar emulsão lipídica."
    ],
    pegadinhas: [
      "Tratar convulsão com dose enorme de propofol em paciente instável.",
      "Esquecer emulsão lipídica quando aparecem arritmias.",
      "Continuar injetando após sintomas neurológicos iniciais.",
      "Usar dose por peso total no obeso extremo sem ponderação."
    ],
    quickQuestions: [
      {
        pergunta: "Por que tecido infectado dificulta bloqueio local?",
        resposta: "Porque o pH baixo aumenta a fração ionizada do anestésico local fora do nervo, reduzindo passagem pela membrana."
      },
      {
        pergunta: "Qual é a primeira conduta se surgem zumbido e gosto metálico durante bloqueio?",
        resposta: "Parar imediatamente a injeção, chamar ajuda e avaliar via aérea, ventilação e circulação."
      },
      {
        pergunta: "Por que acidose piora LAST?",
        resposta: "Porque aumenta toxicidade cardiovascular e favorece ligação do anestésico local aos canais de sódio."
      },
      {
        pergunta: "Qual emulsão é usada na toxicidade sistêmica grave?",
        resposta: "Emulsão lipídica intravenosa, conforme protocolo institucional."
      },
      {
        pergunta: "Qual é a prevenção prática mais importante durante bloqueio guiado por ultrassom?",
        resposta: "Injeção fracionada, aspiração frequente, dose segura e vigilância clínica contínua."
      }
    ]
  },
  {
    id: "mod-marcapasso-cdi",
    titulo: "Marcapasso e cardiodesfibrilador implantável",
    area: "Cardiovascular",
    tempo: "10–15 min",
    resumo: [
      "Marcapasso trata principalmente bradicardia ou falha de condução. Cardiodesfibrilador implantável trata taquiarritmias ventriculares malignas, podendo também ter função de marcapasso.",
      "O código NBG descreve câmara estimulada, câmara sentida e resposta ao sensoriamento. VVI estimula e sente ventrículo e inibe estímulo se percebe atividade ventricular. DDD sente e estimula átrio e ventrículo.",
      "Interferência eletromagnética por cautério monopolar pode ser percebida como atividade cardíaca e inibir marcapasso em paciente dependente.",
      "Magneto em marcapasso muitas vezes muda para modo assíncrono, mas isso depende do fabricante e programação. Magneto em cardiodesfibrilador geralmente suspende terapias de choque, mas não garante modo assíncrono de estimulação.",
      "No centro cirúrgico, é essencial saber se o paciente é dependente, onde será a cirurgia, tipo de cautério, resposta ao magneto, disponibilidade de desfibrilação e estimulação externa."
    ],
    frasesOuro: [
      "Marcapasso evita bradicardia; cardiodesfibrilador evita morte súbita por taquicardia ou fibrilação ventricular.",
      "Magneto no cardiodesfibrilador costuma calar o choque; não garante pacing assíncrono.",
      "Paciente dependente de marcapasso com cautério monopolar precisa de plano antes da incisão."
    ],
    pegadinhas: [
      "Achar que todo magneto faz a mesma coisa em todo dispositivo.",
      "Suspender terapia do cardiodesfibrilador e esquecer desfibrilador externo disponível.",
      "Monitorar apenas eletrocardiograma e não pulso mecânico.",
      "Não reativar terapias do cardiodesfibrilador ao final."
    ],
    quickQuestions: [
      {
        pergunta: "O que significa VVI?",
        resposta: "Estimula ventrículo, sente ventrículo e inibe estímulo quando detecta atividade ventricular própria."
      },
      {
        pergunta: "Qual é a principal diferença entre marcapasso e cardiodesfibrilador implantável?",
        resposta: "Marcapasso trata bradicardia; cardiodesfibrilador trata taquiarritmias ventriculares com terapia antitaquicardia e choque."
      },
      {
        pergunta: "Qual é a maior pegadinha do magneto no cardiodesfibrilador?",
        resposta: "Ele geralmente suspende choques, mas não necessariamente coloca o marcapasso em modo assíncrono."
      },
      {
        pergunta: "O que fazer se cautério inibe marcapasso e gera instabilidade?",
        resposta: "Parar cautério, tratar bradicardia, considerar magneto ou reprogramação se apropriado, e usar estimulação externa se necessário."
      },
      {
        pergunta: "Por que monitorar pulso mecânico além do eletrocardiograma?",
        resposta: "Porque espículas ou artefatos no eletrocardiograma não garantem contração efetiva e perfusão."
      }
    ]
  },
{
  "id": "mod-estatuto-sba",
  "titulo": "Estatuto e estrutura da SBA",
  "area": "Ética / SBA",
  "tempo": "12–18 min",
  "resumo": [
    "A SBA é associação civil sem fins econômicos, fundada em 1948, estruturada como Federação de Associações Regionais.",
    "Sua finalidade inclui formar, educar, certificar e representar o anestesiologista brasileiro associado, promovendo educação, pesquisa, apoio técnico e qualidade assistencial.",
    "Apenas uma Regional é reconhecida em cada Estado e no Distrito Federal, com estatuto compatível analisado conforme regras estatutárias.",
    "Categorias de membros incluem Fundadores, Honorários, Beneméritos, Estrangeiros, Ativos, Aspirantes, Adjuntos, Aspirantes-adjuntos, Remidos, Especiais e Estudantes de Medicina.",
    "Órgãos estatutários incluem Assembleia Geral, Assembleia de Representantes, Conselho Superior, Conselho Fiscal, Diretoria, Conselho de Defesa Profissional e Departamentos."
  ],
  "frasesOuro": [
    "SBA não é conselho profissional: é associação científica e representativa.",
    "Ativo exige TEA; Adjunto pratica Anestesiologia sem TEA outorgado pelo convênio SBA-AMB-CFM.",
    "Assembleia Geral, Assembleia de Representantes e Diretoria têm funções diferentes — a prova adora inverter."
  ],
  "pegadinhas": [
    "Confundir membro Aspirante com Aspirante-adjunto.",
    "Achar que podem existir várias Regionais reconhecidas no mesmo estado.",
    "Trocar Conselho Fiscal por Conselho Superior.",
    "Imaginar que a SBA substitui o CRM na fiscalização estatal do exercício profissional."
  ],
  "quickQuestions": [
    {
      "pergunta": "O que caracteriza membro Ativo da SBA?",
      "resposta": "Ser associado portador do Título de Especialista em Anestesiologia outorgado pela SBA em convênio com AMB e CFM."
    },
    {
      "pergunta": "Qual a diferença entre Aspirante e Aspirante-adjunto?",
      "resposta": "Aspirante está em CET credenciado pela SBA; Aspirante-adjunto está em residência credenciada pela CNRM-MEC que não integra o quadro oficial de CET da SBA."
    },
    {
      "pergunta": "Quantas Regionais podem ser reconhecidas por Estado?",
      "resposta": "Somente uma Regional por Estado e Distrito Federal."
    },
    {
      "pergunta": "Quais são os três Departamentos da SBA?",
      "resposta": "Administrativo, Científico e Defesa Profissional."
    },
    {
      "pergunta": "Qual é o órgão executivo da SBA?",
      "resposta": "A Diretoria."
    }
  ]
},
{
  "id": "mod-etica-anestesio",
  "titulo": "Ética médica aplicada à anestesiologia",
  "area": "Ética / SBA",
  "tempo": "12–18 min",
  "resumo": [
    "Consentimento informado exige capacidade, informação, compreensão e voluntariedade; assinatura isolada não basta.",
    "Sedativos, dor intensa, hipóxia, delirium e opioides podem comprometer capacidade decisória no pré-operatório.",
    "O anestesiologista tem dever de recusar condições inseguras, documentar adequadamente e comunicar equipe/instituição.",
    "Eventos adversos devem ser registrados com fidelidade e comunicados de forma honesta, sem especulação culposa, com plano de cuidado e acompanhamento.",
    "Ordens de não reanimar devem passar por reconsideração dirigida no perioperatório, não suspensão automática nem aplicação cega."
  ],
  "frasesOuro": [
    "Consentimento assinado sem compreensão é burocracia, não autonomia.",
    "O paciente não pode autorizar cuidado abaixo do padrão de segurança.",
    "DNR no centro cirúrgico não some: precisa ser traduzido para o plano anestésico."
  ],
  "pegadinhas": [
    "Confundir consentimento cirúrgico com consentimento anestésico.",
    "Achar que evento sem sequela permanente não precisa ser comunicado.",
    "Usar pressão do cirurgião como justificativa para prática insegura.",
    "Suspender automaticamente DNR ao entrar no centro cirúrgico."
  ],
  "quickQuestions": [
    {
      "pergunta": "Quais são os quatro pilares práticos do consentimento?",
      "resposta": "Capacidade, informação, compreensão e voluntariedade."
    },
    {
      "pergunta": "O que fazer se o paciente foi sedado antes de consentir?",
      "resposta": "Reavaliar capacidade; se comprometida, adiar se possível ou envolver representante conforme contexto e urgência."
    },
    {
      "pergunta": "Evento adverso deve ser registrado mesmo sem dano permanente?",
      "resposta": "Sim. Registro fiel e comunicação honesta fazem parte de segurança e ética."
    },
    {
      "pergunta": "DNR é automaticamente suspenso na anestesia?",
      "resposta": "Não. Deve haver reconsideração dirigida e documentada."
    },
    {
      "pergunta": "Consentimento permite anestesia em sala sem desfibrilador funcional?",
      "resposta": "Não. Autonomia não valida condição assistencial insegura."
    }
  ]
},
{
  "id": "mod-gestante-nao-obstetrica",
  "titulo": "Gestante em cirurgia não obstétrica e cirurgia fetal",
  "area": "Obstetrícia",
  "tempo": "12–18 min",
  "resumo": [
    "Cirurgia urgente não deve ser negada por gestação; o risco fetal costuma depender mais da doença materna, hipóxia, hipotensão, sepse e prematuridade do que do anestésico em dose clínica.",
    "A melhor proteção fetal é manter fisiologia materna: oxigenação, pressão arterial, ventilação, temperatura e deslocamento uterino adequados.",
    "Laparoscopia é possível na gestação com pressão de insuflação moderada, posicionamento cuidadoso e controle ventilatório.",
    "Monitorização fetal intraoperatória só é útil se houver feto viável, equipe capaz de interpretar e possibilidade real de intervenção.",
    "Em cirurgia fetal aberta e EXIT, relaxamento uterino e perfusão uteroplacentária passam a ser objetivos anestésicos centrais."
  ],
  "frasesOuro": [
    "Quem anestesia o feto é a fisiologia materna.",
    "Monitor fetal sem plano obstétrico é alarme sem bombeiro.",
    "No EXIT, o cordão espera a via aérea fetal."
  ],
  "pegadinhas": [
    "Hiperventilar demais a mãe achando que ajuda o feto.",
    "Evitar exame indicado por medo genérico de radiação.",
    "Usar monitorização fetal contínua sem capacidade de intervenção.",
    "Tratar cirurgia fetal como cesariana comum."
  ],
  "quickQuestions": [
    {
      "pergunta": "Qual a prioridade em trauma abdominal na gestante?",
      "resposta": "Ressuscitação materna e controle de hemorragia."
    },
    {
      "pergunta": "O que a hipocapnia materna intensa pode causar?",
      "resposta": "Redução de fluxo uterino e piora da entrega fetal de oxigênio."
    },
    {
      "pergunta": "Quando a monitorização fetal intraoperatória faz mais sentido?",
      "resposta": "Com feto viável, equipe capaz de interpretar e possibilidade real de intervenção."
    },
    {
      "pergunta": "Qual é o objetivo central no EXIT?",
      "resposta": "Manter circulação uteroplacentária até garantir via aérea fetal."
    },
    {
      "pergunta": "Qual posição deve ser lembrada após metade da gestação?",
      "resposta": "Deslocamento uterino à esquerda para reduzir compressão aortocava."
    }
  ]
},
{
  "id": "mod-transplante-hepatico",
  "titulo": "Hepatopata e transplante hepático",
  "area": "Gastro / Hepato / Transplantes",
  "tempo": "15–20 min",
  "resumo": [
    "O cirrótico tem hemostasia reequilibrada e frágil: razão normalizada internacional isolada não prediz sangramento de forma confiável.",
    "Transfusão profilática de plasma pode piorar volume, ascite e pressão portal sem corrigir adequadamente hemostasia global.",
    "No transplante hepático, as fases clássicas são dissecção, anepática e neo-hepática; cada uma tem riscos metabólicos e hemodinâmicos próprios.",
    "Na reperfusão, podem ocorrer hipotensão, bradicardia, hipercalemia, acidose, hipocalcemia e disfunção miocárdica transitória.",
    "Cálcio ionizado é crítico porque citrato transfusional, fígado ausente/doente e transfusão maciça reduzem cálcio funcional."
  ],
  "frasesOuro": [
    "No cirrótico, coagulograma isolado é mapa incompleto.",
    "Na reperfusão hepática, cálcio e potássio precisam estar prontos antes do clamp abrir.",
    "Transplante hepático é fisiologia em três atos."
  ],
  "pegadinhas": [
    "Normalizar INR com plasma antes de qualquer sangramento.",
    "Esquecer hipocalcemia por citrato na fase anepática.",
    "Atribuir síndrome pós-reperfusão apenas a plano anestésico profundo.",
    "Corrigir hiponatremia crônica rápido demais no cirrótico."
  ],
  "quickQuestions": [
    {
      "pergunta": "Quais são as três fases do transplante hepático?",
      "resposta": "Dissecção, anepática e neo-hepática."
    },
    {
      "pergunta": "O que caracteriza síndrome pós-reperfusão?",
      "resposta": "Hipotensão abrupta, bradicardia, acidose, hipercalemia e instabilidade logo após reperfundir o enxerto."
    },
    {
      "pergunta": "Por que cálcio cai no transplante hepático?",
      "resposta": "Citrato dos hemocomponentes quelando cálcio, com metabolismo reduzido pelo fígado doente ou ausente."
    },
    {
      "pergunta": "INR alto no cirrótico significa anticoagulação verdadeira?",
      "resposta": "Não necessariamente. A hemostasia é reequilibrada e exames convencionais são incompletos."
    },
    {
      "pergunta": "Qual risco da correção rápida de hiponatremia crônica?",
      "resposta": "Síndrome de desmielinização osmótica."
    }
  ]
},
{
  "id": "mod-renal-transplante",
  "titulo": "Nefropata e transplante renal",
  "area": "Renal / Endócrino / Metabólico",
  "tempo": "12–18 min",
  "resumo": [
    "No renal crônico, hipercalemia com alteração eletrocardiográfica exige cálcio para estabilizar membrana, medidas de redistribuição e remoção definitiva por diálise quando possível.",
    "Insuficiência renal isolada não contraindica automaticamente succinilcolina se potássio for normal e não houver receptores extrajuncionais aumentados, mas a margem de segurança é menor.",
    "Diálise pré-operatória geralmente é planejada no dia anterior, buscando euvolemia, potássio e acidose controlados, sem heparina residual relevante.",
    "Fístula arteriovenosa deve ser preservada: evitar punções, pressão arterial e compressões no membro.",
    "No transplante renal, diurético não substitui perfusão. Pressão, volume e débito adequados são prioridade para o enxerto."
  ],
  "frasesOuro": [
    "Cálcio protege agora; insulina desloca; diálise remove.",
    "Fístula de diálise não é veia conveniente: é patrimônio vascular.",
    "Rim transplantado urina por perfusão, não por ordem de furosemida."
  ],
  "pegadinhas": [
    "Usar succinilcolina em hipercalemia ativa.",
    "Dar furosemida para enxerto pálido antes de corrigir hipotensão.",
    "Usar grandes volumes de soro fisiológico e gerar acidose hiperclorêmica.",
    "Puncionar o membro da fístula porque a veia parece boa."
  ],
  "quickQuestions": [
    {
      "pergunta": "Qual é a primeira droga se hipercalemia tem alteração no eletrocardiograma?",
      "resposta": "Cálcio intravenoso para estabilizar membrana miocárdica."
    },
    {
      "pergunta": "Qual conduta remove potássio do corpo no dialítico anúrico?",
      "resposta": "Diálise."
    },
    {
      "pergunta": "Quando programar diálise eletiva antes da cirurgia?",
      "resposta": "Geralmente no dia anterior, ajustando volume, potássio, acidose e heparina residual."
    },
    {
      "pergunta": "Por que evitar soro fisiológico em grande volume?",
      "resposta": "Pode causar acidose hiperclorêmica e piorar potássio/perfusão renal."
    },
    {
      "pergunta": "O que fazer com braço de fístula arteriovenosa?",
      "resposta": "Preservar: sem punção, pressão, compressão ou trauma desnecessário."
    }
  ]
},
{
  "id": "mod-doencas-neuromusculares",
  "titulo": "Doenças neuromusculares e miopatias",
  "area": "Doenças neuromusculares",
  "tempo": "12–18 min",
  "resumo": [
    "Miastenia gravis aumenta sensibilidade a bloqueadores neuromusculares não despolarizantes e exige monitorização quantitativa.",
    "Distrofia muscular de Duchenne exige evitar succinilcolina e, quando possível, evitar halogenados por risco de rabdomiólise e hipercalemia.",
    "Guillain-Barré pode cursar com disautonomia, risco de hipercalemia com succinilcolina e resposta prolongada a bloqueadores.",
    "Distrofia miotônica é multissistêmica: miotonia, distúrbios de condução, aspiração e depressão respiratória prolongada.",
    "Doenças mitocondriais exigem evitar catabolismo, hipoglicemia, hipotermia, acidose e cautela com infusão prolongada de propofol."
  ],
  "frasesOuro": [
    "Na miastenia, dose comum de rocurônio pode virar UTI.",
    "Em Duchenne, succinilcolina não é relaxante: é gatilho de potássio.",
    "Na doença neuromuscular, extubação é prova funcional, não horário no relógio."
  ],
  "pegadinhas": [
    "Confundir Duchenne com hipertermia maligna clássica e achar que dantrolene profilático libera succinilcolina.",
    "Usar neostigmina automaticamente na distrofia miotônica.",
    "Subestimar disautonomia no Guillain-Barré.",
    "Extubar paciente com doença bulbar apenas porque abriu os olhos."
  ],
  "quickQuestions": [
    {
      "pergunta": "Miastênico é mais sensível a qual grupo de relaxantes?",
      "resposta": "Bloqueadores neuromusculares não despolarizantes."
    },
    {
      "pergunta": "Qual relaxante deve ser evitado em Duchenne?",
      "resposta": "Succinilcolina."
    },
    {
      "pergunta": "Qual risco autonômico no Guillain-Barré?",
      "resposta": "Hipotensão, hipertensão, bradicardia, taquiarritmias e resposta imprevisível a fármacos."
    },
    {
      "pergunta": "O que precipita miotonia?",
      "resposta": "Succinilcolina, hipotermia, tremores e estímulos mecânicos em alguns casos."
    },
    {
      "pergunta": "Por que cautela com propofol prolongado em doença mitocondrial?",
      "resposta": "Pelo risco de piora do metabolismo energético e síndrome de infusão de propofol em doses/durações altas."
    }
  ]
},
{
  "id": "mod-seguranca-paciente-anestesia",
  "titulo": "Segurança do paciente em anestesia",
  "area": "Segurança do paciente",
  "tempo": "10–14 min",
  "resumo": [
    "Segurança em anestesia depende de barreiras redundantes: avaliação pré-anestésica, checagem de equipamentos, identificação, alergias, antibiótico, via aérea e plano de crise.",
    "Time-out não é ritual burocrático; é pausa ativa para confirmar paciente, procedimento, lateralidade, alergias, antibiótico e pontos críticos.",
    "Eventos adversos exigem documentação, comunicação honesta e debriefing para aprendizado do sistema.",
    "Erros de medicação e falhas de comunicação geralmente são falhas de sistema, não apenas falhas individuais."
  ],
  "frasesOuro": [
    "Checklist bom é redundância inteligente.",
    "Alergia não checada no time-out é anafilaxia anunciada.",
    "Crise sem debriefing é simulação gratuita desperdiçada."
  ],
  "pegadinhas": [
    "Achar que consentimento assinado autoriza prática insegura.",
    "Tratar antibiótico profilático como assunto exclusivamente cirúrgico.",
    "Omitir evento adverso por medo de judicialização.",
    "Desligar alarmes para reduzir ruído."
  ],
  "quickQuestions": [
    {
      "pergunta": "Qual é a função real do time-out?",
      "resposta": "Criar uma pausa ativa e compartilhada para confirmar dados críticos e antecipar riscos."
    },
    {
      "pergunta": "Comunicar evento adverso equivale a assumir culpa?",
      "resposta": "Não. É dever de transparência e cuidado; causalidade e responsabilidade são apuradas com dados."
    },
    {
      "pergunta": "O que é cultura justa?",
      "resposta": "Modelo que diferencia erro humano, comportamento de risco e negligência, buscando aprendizado sem caça às bruxas."
    },
    {
      "pergunta": "Por que alergia deve ser checada mais de uma vez?",
      "resposta": "Porque barreiras redundantes reduzem falhas de comunicação e erro de medicação."
    },
    {
      "pergunta": "O que deve ocorrer após crise grave bem tratada?",
      "resposta": "Debriefing, documentação, reposição de materiais e plano de seguimento do paciente."
    }
  ]
},
{
  "id": "mod-nora-ressonancia-endoscopia",
  "titulo": "Anestesia fora do centro cirúrgico",
  "area": "Anestesia fora do centro cirúrgico",
  "tempo": "10–15 min",
  "resumo": [
    "Ambientes remotos têm os mesmos riscos fisiológicos do centro cirúrgico, mas com menos acesso ao paciente, equipe reduzida e logística mais difícil.",
    "Ressonância magnética exige equipamentos compatíveis e controle absoluto de objetos ferromagnéticos.",
    "Endoscopia terapêutica em paciente com sangramento, obesidade, refluxo ou apneia pode exigir via aérea protegida em vez de sedação profunda.",
    "Capnografia, oxigênio, aspiração, via aérea difícil, recuperação e plano de emergência precisam estar disponíveis antes de iniciar."
  ],
  "frasesOuro": [
    "Fora do centro cirúrgico, o risco não diminui; a distância aumenta.",
    "No ímã, cilindro comum vira projétil.",
    "Propofol em endoscopia pode virar anestesia geral sem pedir autorização."
  ],
  "pegadinhas": [
    "Fazer sedação profunda sem capnografia em paciente obeso/apneico.",
    "Entrar na sala de ressonância com equipamento não compatível.",
    "Achar que endoscopia terapêutica não precisa de plano de via aérea.",
    "Deixar acesso venoso inacessível dentro do aparelho de imagem."
  ],
  "quickQuestions": [
    {
      "pergunta": "Qual risco físico clássico da ressonância?",
      "resposta": "Efeito projétil de objetos ferromagnéticos."
    },
    {
      "pergunta": "Qual monitor é especialmente útil em sedação profunda?",
      "resposta": "Capnografia, por detectar hipoventilação antes da queda de saturação."
    },
    {
      "pergunta": "Quando considerar intubação em endoscopia?",
      "resposta": "Sangramento ativo, alto risco de aspiração, obstrução, apneia grave ou necessidade terapêutica prolongada."
    },
    {
      "pergunta": "O que deve existir em NORA antes da sedação?",
      "resposta": "Monitorização, oxigênio, aspiração, equipamentos de via aérea, drogas de emergência e recuperação segura."
    },
    {
      "pergunta": "Por que acesso físico importa na ressonância?",
      "resposta": "Porque o paciente fica distante e parcialmente inacessível durante o exame."
    }
  ]
},
{
  "id": "mod-sustentabilidade-anestesia",
  "titulo": "Sustentabilidade em anestesia",
  "area": "Sustentabilidade",
  "tempo": "8–12 min",
  "resumo": [
    "Anestésicos inalatórios e óxido nitroso contribuem para impacto ambiental; a redução de fluxos de gases frescos diminui consumo quando feita com monitorização adequada.",
    "Baixo fluxo exige analisador de oxigênio, agente inalatório, capnografia, absorvedor funcional e conhecimento do aparelho.",
    "Sustentabilidade não justifica reduzir segurança, monitorização ou reserva de oxigênio.",
    "Evitar desflurano ou óxido nitroso sem indicação forte pode reduzir impacto ambiental sem piorar cuidado."
  ],
  "frasesOuro": [
    "Sustentabilidade reduz desperdício, não segurança.",
    "Baixo fluxo sem monitorização é economia perigosa.",
    "Gás anestésico que não precisa ser usado não precisa chegar à atmosfera."
  ],
  "pegadinhas": [
    "Confundir baixo fluxo com fluxo inseguro.",
    "Usar absorvedor exaurido para economizar.",
    "Desligar analisadores para reduzir consumo.",
    "Manter desflurano por hábito quando alternativas são equivalentes."
  ],
  "quickQuestions": [
    {
      "pergunta": "Qual forma simples de reduzir consumo de halogenado?",
      "resposta": "Reduzir fluxo de gases frescos quando seguro e monitorizado."
    },
    {
      "pergunta": "Baixo fluxo exige qual monitorização?",
      "resposta": "Oxigênio inspirado, agente inalatório, capnografia e funcionamento do absorvedor."
    },
    {
      "pergunta": "Qual gás costuma ter impacto ambiental relevante e uso muitas vezes evitável?",
      "resposta": "Óxido nitroso."
    },
    {
      "pergunta": "Sustentabilidade permite reduzir fração de oxigênio abaixo do seguro?",
      "resposta": "Não. Segurança do paciente vem primeiro."
    },
    {
      "pergunta": "Qual é o erro de sustentabilidade mais perigoso?",
      "resposta": "Economizar removendo barreiras de segurança."
    }
  ]
},
{
  "id": "mod-hemoterapia-reacoes-transfusionais",
  "titulo": "Hemoterapia e reações transfusionais",
  "area": "Hematologia / Coagulação",
  "tempo": "12–18 min",
  "resumo": [
    "Transfusão maciça exige hemostasia balanceada, cálcio, aquecimento e controle de fonte de sangramento.",
    "TRALI e TACO causam hipoxemia após transfusão, mas diferem pela fisiologia: edema não cardiogênico versus sobrecarga hidrostática.",
    "Reação hemolítica aguda deve ser suspeitada com febre, hipotensão, dor, hemoglobinúria e coagulação intravascular após transfusão incompatível.",
    "Citrato pode causar hipocalcemia, piorando contratilidade, condução e coagulação."
  ],
  "frasesOuro": [
    "Transfundir sem cálcio é abastecer o tanque com a ignição falhando.",
    "TRALI é pulmão inflamado; TACO é volume demais.",
    "Hemoterapia boa trata sangue e sistema, não só hemoglobina."
  ],
  "pegadinhas": [
    "Confundir TACO com TRALI sem olhar pressão, balanço e resposta a diurético.",
    "Esquecer reação hemolítica em hipotensão intraoperatória durante transfusão.",
    "Achar que plasma sempre corrige qualquer sangramento.",
    "Não aquecer paciente em transfusão maciça."
  ],
  "quickQuestions": [
    {
      "pergunta": "O que sugere TACO?",
      "resposta": "Hipertensão, pressão venosa elevada, balanço positivo e melhora com diurético."
    },
    {
      "pergunta": "O que sugere TRALI?",
      "resposta": "Edema pulmonar não cardiogênico após transfusão, frequentemente com hipoxemia, febre ou hipotensão."
    },
    {
      "pergunta": "Por que cálcio cai na transfusão maciça?",
      "resposta": "Citrato dos hemocomponentes quela cálcio ionizado."
    },
    {
      "pergunta": "Qual é a primeira conduta se suspeitar reação hemolítica?",
      "resposta": "Suspender transfusão, manter acesso com solução adequada, suporte e investigação imediata."
    },
    {
      "pergunta": "Por que aquecimento importa?",
      "resposta": "Hipotermia piora coagulopatia, acidose e instabilidade."
    }
  ]
},
{
  "id": "mod-via-aerea-extubacao-risco",
  "titulo": "Extubação de risco e via aérea difícil",
  "area": "Via aérea",
  "tempo": "10–15 min",
  "resumo": [
    "Via aérea difícil não termina quando o tubo entra; extubação pode ser o momento mais perigoso.",
    "Edema, sangramento, cirurgia oral/cervical, obesidade, apneia e intubação difícil prévia exigem plano de extubação.",
    "Estratégias incluem adiar extubação, extubar acordado, usar trocador de tubo, preparar reintubação e escolher local adequado.",
    "Extubação profunda é contraindicada em muitos cenários de aspiração, obstrução ou reintubação difícil."
  ],
  "frasesOuro": [
    "Extubação difícil é intubação difícil ao contrário, com menos tempo para errar.",
    "Tubo saindo precisa de plano tão bom quanto tubo entrando.",
    "Pressa de sala não é critério de extubação."
  ],
  "pegadinhas": [
    "Extubar porque ventilou bem durante cirurgia.",
    "Extubação profunda em via aérea edemaciada.",
    "Não ter plano de reintubação.",
    "Ignorar sangramento ou edema cervical."
  ],
  "quickQuestions": [
    {
      "pergunta": "Quando considerar adiar extubação?",
      "resposta": "Edema importante, sangramento, baixa reserva, reintubação difícil ou ventilação inadequada."
    },
    {
      "pergunta": "Para que serve um trocador de tubo?",
      "resposta": "Mantém acesso à via aérea para possível reintubação após extubação de risco."
    },
    {
      "pergunta": "Extubação profunda é boa em via aérea difícil?",
      "resposta": "Geralmente não, especialmente se houver aspiração, obstrução ou reintubação difícil."
    },
    {
      "pergunta": "Quais cirurgias preocupam para extubação?",
      "resposta": "Cabeça e pescoço, via aérea, oral, cervical, tireoide complicada e cirurgias com edema/sangramento."
    },
    {
      "pergunta": "Qual o erro mais comum?",
      "resposta": "Tratar extubação como fim automático da anestesia."
    }
  ]
}
];
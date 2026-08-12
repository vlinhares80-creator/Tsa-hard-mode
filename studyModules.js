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
}
];

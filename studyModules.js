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
  }
];

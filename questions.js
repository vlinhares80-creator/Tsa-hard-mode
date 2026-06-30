const QUESTIONS = [
  {
    id: "yao-005-001",
    fonte: "Yao",
    capitulo: "Doença coronariana",
    tema: "Fisiologia coronariana",
    dificuldade: "média",
    pergunta: "Em paciente com doença coronariana grave, qual combinação aumenta mais o risco de isquemia miocárdica durante a indução anestésica?",
    alternativas: {
      A: "Bradicardia leve e aumento da pressão diastólica.",
      B: "Taquicardia, hipotensão diastólica e redução do conteúdo arterial de oxigênio.",
      C: "Aumento da pressão diastólica e redução da frequência cardíaca.",
      D: "Hipocapnia leve e aumento da pré-carga.",
      E: "Redução da contratilidade com aumento da perfusão coronariana."
    },
    resposta: "B",
    comentario: "A taquicardia aumenta consumo miocárdico de oxigênio e reduz tempo diastólico. A hipotensão diastólica reduz perfusão coronariana, e menor conteúdo arterial de oxigênio reduz oferta.",
    frase_ouro: "Na coronariopatia, isquemia nasce do desequilíbrio entre oferta e consumo de oxigênio."
  },
  {
    id: "yao-005-002",
    fonte: "Yao",
    capitulo: "Doença coronariana",
    tema: "CEC e heparinização",
    dificuldade: "média",
    pergunta: "Antes da circulação extracorpórea, qual é o objetivo principal da heparinização sistêmica?",
    alternativas: {
      A: "Reduzir a resistência vascular pulmonar.",
      B: "Aumentar a contratilidade do ventrículo esquerdo.",
      C: "Prevenir coagulação no circuito extracorpóreo e no campo cirúrgico.",
      D: "Corrigir hipocalcemia induzida pela circulação extracorpórea.",
      E: "Produzir hipotensão controlada."
    },
    resposta: "C",
    comentario: "A heparina é administrada antes da circulação extracorpórea para anticoagulação sistêmica adequada e prevenção de trombose no circuito.",
    frase_ouro: "Antes da CEC, anticoagular não é detalhe: é condição para circular fora do corpo."
  },
  {
    id: "yao-006-001",
    fonte: "Yao",
    capitulo: "Suporte circulatório mecânico",
    tema: "Balão intra-aórtico",
    dificuldade: "fácil",
    pergunta: "O balão intra-aórtico melhora a oferta de oxigênio ao miocárdio principalmente por qual mecanismo?",
    alternativas: {
      A: "Insuflação durante a diástole, aumentando a pressão diastólica aórtica.",
      B: "Insuflação durante a sístole, aumentando a pós-carga.",
      C: "Desinsuflação durante a diástole, reduzindo perfusão coronariana.",
      D: "Aumento direto da frequência cardíaca.",
      E: "Aumento da resistência vascular pulmonar."
    },
    resposta: "A",
    comentario: "O balão intra-aórtico infla na diástole, aumentando a pressão diastólica aórtica e a perfusão coronariana. Desinfla antes da sístole, reduzindo pós-carga.",
    frase_ouro: "O balão intra-aórtico infla para perfundir coronária e desinfla para aliviar o ventrículo."
  },
  {
    id: "yao-006-002",
    fonte: "Yao",
    capitulo: "Suporte circulatório mecânico",
    tema: "Balão intra-aórtico",
    dificuldade: "média",
    pergunta: "Qual condição é uma contraindicação importante ao uso do balão intra-aórtico?",
    alternativas: {
      A: "Doença coronariana estável.",
      B: "Insuficiência mitral leve.",
      C: "Bradicardia sinusal controlada.",
      D: "Insuficiência aórtica importante.",
      E: "Hipertensão arterial leve."
    },
    resposta: "D",
    comentario: "Na insuficiência aórtica importante, a insuflação diastólica pode aumentar refluxo para o ventrículo esquerdo e piorar a sobrecarga de volume.",
    frase_ouro: "Balão intra-aórtico e insuficiência aórtica importante não combinam: a diástole vira vazamento assistido."
  },
  {
    id: "yao-007-001",
    fonte: "Yao",
    capitulo: "Doença valvar",
    tema: "Estenose aórtica",
    dificuldade: "média",
    pergunta: "Em paciente com estenose aórtica grave, qual meta hemodinâmica é mais apropriada antes da circulação extracorpórea?",
    alternativas: {
      A: "Reduzir agressivamente a resistência vascular sistêmica.",
      B: "Manter ritmo sinusal, pré-carga adequada e pressão arterial diastólica preservada.",
      C: "Induzir taquicardia para aumentar débito cardíaco.",
      D: "Manter bradicardia profunda para prolongar a diástole.",
      E: "Evitar qualquer uso de vasopressor alfa-adrenérgico."
    },
    resposta: "B",
    comentario: "Na estenose aórtica grave, o ventrículo esquerdo é hipertrofiado e depende de ritmo sinusal, pré-carga e pressão diastólica para perfusão coronariana.",
    frase_ouro: "Na estenose aórtica grave, a pressão diastólica é patrimônio coronariano."
  },
  {
    id: "yao-007-002",
    fonte: "Yao",
    capitulo: "Doença valvar",
    tema: "Insuficiência mitral",
    dificuldade: "média",
    pergunta: "Na insuficiência mitral importante, qual alteração tende a aumentar a fração regurgitante?",
    alternativas: {
      A: "Redução controlada da pós-carga.",
      B: "Frequência cardíaca discretamente elevada.",
      C: "Aumento da resistência vascular sistêmica.",
      D: "Vasodilatação arterial.",
      E: "Redução da pressão sistêmica."
    },
    resposta: "C",
    comentario: "A elevação da resistência vascular sistêmica dificulta ejeção anterógrada para a aorta e favorece regurgitação para o átrio esquerdo.",
    frase_ouro: "Na insuficiência mitral, o ventrículo ejeta para onde for mais fácil."
  },
  {
    id: "yao-008-001",
    fonte: "Yao",
    capitulo: "Marca-passos e CDI",
    tema: "Magneto",
    dificuldade: "alta",
    pergunta: "Em paciente com CRT-D e risco de interferência eletromagnética, qual afirmação sobre magneto é mais correta?",
    alternativas: {
      A: "Sempre converte o pacing para modo assíncrono.",
      B: "Remove definitivamente a programação do dispositivo.",
      C: "Aumenta a energia dos choques internos.",
      D: "Geralmente suspende terapias antitaquicardia, mas não garante pacing assíncrono.",
      E: "Corrige automaticamente falha de captura."
    },
    resposta: "D",
    comentario: "Em desfibriladores implantáveis, o magneto geralmente suspende detecção/terapias antitaquicardia, mas não necessariamente altera a função de marca-passo para modo assíncrono.",
    frase_ouro: "Magneto em CDI costuma desligar choque, não transformar pacing em assíncrono."
  },
  {
    id: "yao-008-002",
    fonte: "Yao",
    capitulo: "Marca-passos e CDI",
    tema: "Modos de marca-passo",
    dificuldade: "média",
    pergunta: "Qual é a principal diferença prática entre os modos DDD e DDI?",
    alternativas: {
      A: "DDD não estimula ventrículo; DDI estimula apenas ventrículo.",
      B: "DDD rastreia atividade atrial; DDI não acompanha taquiarritmias atriais da mesma forma.",
      C: "DDD é sempre assíncrono; DDI é sempre desligado.",
      D: "DDD é usado apenas em fibrilação ventricular.",
      E: "DDI é exclusivo de cardiodesfibriladores subcutâneos."
    },
    resposta: "B",
    comentario: "O modo DDD pode rastrear eventos atriais e estimular o ventrículo após intervalo programado. O DDI evita acompanhar taquiarritmias atriais de modo semelhante.",
    frase_ouro: "DDD acompanha o átrio; DDI não sai correndo atrás dele."
  },
  {
    id: "yao-009-001",
    fonte: "Yao",
    capitulo: "Aneurisma toracoabdominal",
    tema: "Proteção medular",
    dificuldade: "média",
    pergunta: "Qual relação expressa melhor a pressão de perfusão medular durante cirurgia de aneurisma toracoabdominal?",
    alternativas: {
      A: "Pressão do líquor menos pressão arterial média.",
      B: "Frequência cardíaca multiplicada pela pressão de pulso.",
      C: "Pressão arterial média menos pressão do líquor.",
      D: "Pressão venosa central somada à pressão pulmonar.",
      E: "Pressão arterial sistólica dividida pelo débito cardíaco."
    },
    resposta: "C",
    comentario: "De forma prática, a pressão de perfusão medular depende da pressão arterial média efetiva menos a pressão do líquido cefalorraquidiano.",
    frase_ouro: "Proteção medular é pressão arterial suficiente menos líquor demais."
  },
  {
    id: "yao-009-002",
    fonte: "Yao",
    capitulo: "Aneurisma toracoabdominal",
    tema: "Queda de MEP",
    dificuldade: "alta",
    pergunta: "Durante correção de aneurisma toracoabdominal, ocorre queda dos potenciais evocados motores dos membros inferiores. Qual conduta inicial é mais adequada?",
    alternativas: {
      A: "Reduzir imediatamente a pressão arterial média.",
      B: "Aumentar anestésico volátil e administrar bloqueador neuromuscular.",
      C: "Ignorar se a pressão arterial proximal estiver normal.",
      D: "Aumentar perfusão medular, elevando pressão arterial, drenando líquor se indicado e otimizando oxigenação/hemoglobina.",
      E: "Administrar diurético para reduzir pressão venosa central."
    },
    resposta: "D",
    comentario: "Queda de MEP sugere isquemia medular até prova em contrário. Deve-se aumentar pressão de perfusão, reduzir pressão do líquor se possível e otimizar oferta de oxigênio.",
    frase_ouro: "MEP caiu: trate como alarme de medula até a medula provar o contrário."
  },
  {
    id: "yao-010-001",
    fonte: "Yao",
    capitulo: "Aneurisma de aorta abdominal",
    tema: "Clampeamento",
    dificuldade: "média",
    pergunta: "Durante correção aberta de aneurisma de aorta abdominal infrarrenal, o clampeamento aórtico tende a causar qual alteração?",
    alternativas: {
      A: "Aumento da pós-carga e da pressão arterial proximal.",
      B: "Redução obrigatória da resistência vascular sistêmica proximal.",
      C: "Desaparecimento do risco de isquemia miocárdica.",
      D: "Aumento imediato da perfusão distal.",
      E: "Redução da pressão arterial sistólica proximal."
    },
    resposta: "A",
    comentario: "O clampeamento infrarrenal aumenta a resistência à ejeção do ventrículo esquerdo e pode elevar a pressão proximal, aumentando consumo miocárdico.",
    frase_ouro: "No AAA aberto, o clamp aumenta a pós-carga; o desclamp tira o chão."
  },
  {
    id: "yao-010-002",
    fonte: "Yao",
    capitulo: "Aneurisma de aorta abdominal",
    tema: "EVAR",
    dificuldade: "média",
    pergunta: "Após EVAR, vazamento persistente no local de vedação proximal da endoprótese corresponde mais provavelmente a qual tipo de endoleak?",
    alternativas: {
      A: "Tipo II.",
      B: "Tipo IV.",
      C: "Tipo I.",
      D: "Tipo V.",
      E: "Tipo III por fratura obrigatória do enxerto."
    },
    resposta: "C",
    comentario: "Endoleak tipo I decorre de falha de vedação proximal ou distal e geralmente exige correção, por risco persistente de pressurização do saco aneurismático.",
    frase_ouro: "Endoleak tipo I é falha de vedação: o aneurisma continua ouvindo pressão."
  },
  {
    id: "yao-011-001",
    fonte: "Yao",
    capitulo: "Hipertensão",
    tema: "IECA e BRA",
    dificuldade: "média",
    pergunta: "Paciente em uso de losartana apresenta hipotensão importante e pouco responsiva a catecolaminas após indução anestésica. Qual droga pode ser especialmente útil?",
    alternativas: {
      A: "Nitroprussiato.",
      B: "Vasopressina.",
      C: "Hidralazina.",
      D: "Furosemida.",
      E: "Esmolol."
    },
    resposta: "B",
    comentario: "Em hipotensão vasoplégica associada a bloqueio do sistema renina-angiotensina, a vasopressina pode ser útil quando a resposta a catecolaminas é limitada.",
    frase_ouro: "IECA/BRA podem derrubar a pressão; vasopressina lembra que existe vida além da catecolamina."
  },
  {
    id: "yao-011-002",
    fonte: "Yao",
    capitulo: "Hipertensão",
    tema: "Feocromocitoma",
    dificuldade: "fácil",
    pergunta: "No preparo farmacológico do feocromocitoma, qual sequência é correta?",
    alternativas: {
      A: "Beta-bloqueio antes do alfa-bloqueio.",
      B: "Diurético antes do alfa-bloqueio.",
      C: "Alfa-bloqueio antes do beta-bloqueio.",
      D: "Suspensão de todos os anti-hipertensivos.",
      E: "Vasopressina profilática obrigatória."
    },
    resposta: "C",
    comentario: "O alfa-bloqueio deve preceder o beta-bloqueio para evitar vasoconstrição alfa-adrenérgica sem oposição.",
    frase_ouro: "No feocromocitoma: alfa antes de beta, sempre."
  },
  {
    id: "yao-012-001",
    fonte: "Yao",
    capitulo: "Tamponamento cardíaco",
    tema: "Fisiopatologia",
    dificuldade: "média",
    pergunta: "No tamponamento cardíaco agudo, a queda do débito cardíaco ocorre principalmente por qual mecanismo?",
    alternativas: {
      A: "Aumento primário da contratilidade ventricular.",
      B: "Redução da pressão venosa central.",
      C: "Aumento da complacência pericárdica.",
      D: "Limitação do enchimento diastólico por aumento da pressão intrapericárdica.",
      E: "Vasodilatação arterial isolada."
    },
    resposta: "D",
    comentario: "No tamponamento, a elevação da pressão intrapericárdica limita o enchimento diastólico, reduzindo volume sistólico e débito cardíaco.",
    frase_ouro: "Tamponamento é doença de enchimento, não de contratilidade."
  },
  {
    id: "yao-012-002",
    fonte: "Yao",
    capitulo: "Tamponamento cardíaco",
    tema: "Pós-operatório cardíaco",
    dificuldade: "alta",
    pergunta: "Após cirurgia cardíaca, baixo débito com PVC muito elevada e PAOP menos elevada sugere especialmente qual diagnóstico?",
    alternativas: {
      A: "Hipovolemia pura.",
      B: "Tamponamento regional ou compressão direita por coágulo.",
      C: "Vasoplegia isolada com alto débito.",
      D: "Broncoespasmo leve.",
      E: "Hipoglicemia."
    },
    resposta: "B",
    comentario: "No pós-operatório cardíaco, coágulos podem comprimir câmaras direitas de forma regional, elevando PVC e reduzindo débito sem equalização clássica de pressões.",
    frase_ouro: "Depois de cirurgia cardíaca, tamponamento pode ser coágulo fazendo bullying em uma câmara."
  },
  {
    id: "yao-012-003",
    fonte: "Yao",
    capitulo: "Tamponamento cardíaco",
    tema: "Tratamento",
    dificuldade: "média",
    pergunta: "Em tamponamento pós-cirurgia cardíaca por sangue coagulado comprimindo o átrio e ventrículo direitos, qual tratamento tende a ser mais apropriado?",
    alternativas: {
      A: "Diurese agressiva.",
      B: "Beta-bloqueio para reduzir frequência cardíaca.",
      C: "Reexploração cirúrgica para remoção do coágulo e controle de sangramento.",
      D: "Observação clínica por 24 horas.",
      E: "Vasodilatação arterial intensa."
    },
    resposta: "C",
    comentario: "Pericardiocentese pode falhar quando há coágulo regional. No pós-operatório cardíaco com compressão por coágulo, a reexploração cirúrgica costuma ser o tratamento definitivo.",
    frase_ouro: "Pericardiocentese drena líquido; reexploração remove coágulo."
  },
  {
    id: "yao-013-001",
    fonte: "Yao",
    capitulo: "Hipertensão pulmonar",
    tema: "Crise de ventrículo direito",
    dificuldade: "média",
    pergunta: "Em paciente com hipertensão pulmonar, qual fator intraoperatório tende a aumentar a resistência vascular pulmonar e piorar a função do ventrículo direito?",
    alternativas: {
      A: "Hipóxia, hipercapnia e acidose.",
      B: "Oxigenação adequada e normocapnia.",
      C: "Correção da acidose.",
      D: "Redução da pressão intratorácica excessiva.",
      E: "Controle de dor e ansiedade."
    },
    resposta: "A",
    comentario: "Hipóxia, hipercapnia e acidose são potentes estímulos para aumento da resistência vascular pulmonar, podendo precipitar falência de ventrículo direito.",
    frase_ouro: "O ventrículo direito sofre quando o pulmão fecha a porta."
  },
  {
    id: "yao-014-001",
    fonte: "Yao",
    capitulo: "Transplante cardíaco",
    tema: "Coração denervado",
    dificuldade: "média",
    pergunta: "Em paciente transplantado cardíaco, qual afirmação sobre resposta à atropina é mais adequada?",
    alternativas: {
      A: "Atropina sempre aumenta intensamente a frequência cardíaca.",
      B: "Atropina não aumenta a frequência cardíaca de forma confiável por ausência de inervação vagal funcional.",
      C: "Atropina é vasodilatador pulmonar direto.",
      D: "Atropina substitui catecolaminas em baixo débito.",
      E: "Atropina corrige rejeição aguda."
    },
    resposta: "B",
    comentario: "O coração transplantado é denervado; portanto, drogas que dependem de bloqueio vagal, como atropina, podem não produzir resposta cronotrópica esperada.",
    frase_ouro: "No coração transplantado, atropina toca uma campainha sem fio ligado."
  },
  {
    id: "yao-015-001",
    fonte: "Yao",
    capitulo: "Cardiopatias congênitas",
    tema: "Shunt",
    dificuldade: "média",
    pergunta: "Em uma lesão com shunt direita-esquerda, qual alteração tende a aumentar a cianose?",
    alternativas: {
      A: "Aumento da resistência vascular sistêmica.",
      B: "Redução da resistência vascular pulmonar.",
      C: "Aumento da fração inspirada de oxigênio.",
      D: "Redução da resistência vascular sistêmica ou aumento da resistência vascular pulmonar.",
      E: "Correção da acidose."
    },
    resposta: "D",
    comentario: "A redução da resistência vascular sistêmica ou aumento da resistência vascular pulmonar favorece passagem de sangue venoso para o lado sistêmico, aumentando cianose.",
    frase_ouro: "No shunt direita-esquerda, queda da resistência sistêmica é convite para dessaturar."
  },
  {
    id: "yao-016-001",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Analgesia de parto",
    dificuldade: "fácil",
    pergunta: "Qual é um objetivo central da analgesia neuraxial de parto bem conduzida?",
    alternativas: {
      A: "Eliminar completamente toda função motora obrigatoriamente.",
      B: "Produzir hipotensão materna profunda.",
      C: "Reduzir dor e resposta catecolaminérgica mantendo estabilidade materno-fetal.",
      D: "Aumentar resistência vascular uterina.",
      E: "Impedir qualquer possibilidade de conversão para cesárea."
    },
    resposta: "C",
    comentario: "Analgesia de parto busca alívio efetivo da dor, redução de resposta simpática e manutenção da estabilidade materna e fetal, idealmente com mínimo bloqueio motor.",
    frase_ouro: "Boa analgesia de parto alivia dor sem roubar fisiologia."
  }
];

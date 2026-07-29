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
  },
  {
    id: "yao-001-001",
    fonte: "Yao",
    capitulo: "Avaliação pré-operatória",
    tema: "Risco anestésico",
    dificuldade: "média",
    pergunta: "Na avaliação pré-operatória, qual achado deve levar o anestesista a investigar melhor a capacidade funcional e risco cardiovascular antes de cirurgia eletiva de médio/grande porte?",
    alternativas: {
      A: "Boa tolerância a esforços intensos sem sintomas.",
      B: "Dispneia aos pequenos esforços ou dor torácica aos esforços.",
      C: "História de rinite alérgica na infância.",
      D: "Uso ocasional de analgésico comum.",
      E: "Jejum adequado no dia da cirurgia."
    },
    resposta: "B",
    comentario: "Dispneia aos pequenos esforços ou dor torácica sugerem baixa capacidade funcional ou doença cardiovascular ativa, podendo modificar a conduta perioperatória.",
    frase_ouro: "Capacidade funcional ruim é aviso de que a cirurgia pode revelar doença escondida."
  },
  {
    id: "yao-001-002",
    fonte: "Yao",
    capitulo: "Avaliação pré-operatória",
    tema: "Medicações crônicas",
    dificuldade: "média",
    pergunta: "Qual conduta é geralmente adequada em relação ao beta-bloqueador crônico no perioperatório?",
    alternativas: {
      A: "Suspender sempre na véspera da cirurgia.",
      B: "Manter o uso crônico para evitar rebote simpático.",
      C: "Substituir obrigatoriamente por clonidina.",
      D: "Administrar dose alta pela primeira vez no dia da cirurgia.",
      E: "Manter apenas se o paciente for normotenso."
    },
    resposta: "B",
    comentario: "Beta-bloqueadores em uso crônico geralmente devem ser mantidos para evitar taquicardia, hipertensão rebote e isquemia.",
    frase_ouro: "Beta-bloqueador crônico se mantém; iniciar agressivo no dia da cirurgia é outra história."
  },
  {
    id: "yao-001-003",
    fonte: "Yao",
    capitulo: "Avaliação pré-operatória",
    tema: "Jejum e aspiração",
    dificuldade: "fácil",
    pergunta: "Qual situação aumenta o risco de aspiração pulmonar durante indução anestésica?",
    alternativas: {
      A: "Paciente eletivo em jejum adequado, sem refluxo.",
      B: "Cirurgia ambulatorial de extremidade em paciente hígido.",
      C: "Abdome agudo obstrutivo com vômitos recentes.",
      D: "Uso de óculos no pré-operatório.",
      E: "História remota de cefaleia."
    },
    resposta: "C",
    comentario: "Obstrução intestinal, vômitos, dor abdominal aguda e estômago cheio aumentam o risco de regurgitação e aspiração durante a indução.",
    frase_ouro: "Estômago cheio não respeita plano anestésico bonito."
  },
  {
    id: "yao-002-001",
    fonte: "Yao",
    capitulo: "Via aérea",
    tema: "Via aérea difícil",
    dificuldade: "média",
    pergunta: "Qual combinação sugere maior risco de dificuldade de ventilação ou intubação?",
    alternativas: {
      A: "Boa abertura oral, mobilidade cervical normal e Mallampati I.",
      B: "Distância tireomentoniana adequada e ausência de barba.",
      C: "Pescoço curto, limitação de abertura oral e mobilidade cervical reduzida.",
      D: "Paciente jovem sem comorbidades e cirurgia periférica.",
      E: "Saturação normal em ar ambiente."
    },
    resposta: "C",
    comentario: "Pescoço curto, limitação de abertura oral e mobilidade cervical reduzida são preditores de dificuldade de manejo da via aérea.",
    frase_ouro: "Via aérea difícil costuma avisar antes; o problema é quando ninguém escuta."
  },
  {
    id: "yao-002-002",
    fonte: "Yao",
    capitulo: "Via aérea",
    tema: "Intubação acordada",
    dificuldade: "alta",
    pergunta: "Em paciente com via aérea prevista como difícil e risco de não conseguir ventilar após indução, qual estratégia é mais segura?",
    alternativas: {
      A: "Indução rápida profunda antes de qualquer plano alternativo.",
      B: "Evitar oxigenação prévia para reduzir tosse.",
      C: "Intubação acordada com manutenção de ventilação espontânea, quando indicada.",
      D: "Paralisar imediatamente e tentar múltiplas laringoscopias.",
      E: "Usar máscara laríngea como única estratégia definitiva sempre."
    },
    resposta: "C",
    comentario: "Quando há risco de perda da via aérea após indução, intubação acordada com ventilação espontânea preservada é uma estratégia segura.",
    frase_ouro: "Na via aérea difícil prevista, dormir o paciente pode ser fechar a saída de emergência."
  },
  {
    id: "yao-002-003",
    fonte: "Yao",
    capitulo: "Via aérea",
    tema: "Aspiração",
    dificuldade: "média",
    pergunta: "Durante indução de sequência rápida, qual é o objetivo principal?",
    alternativas: {
      A: "Aumentar deliberadamente o tempo de apneia.",
      B: "Reduzir o intervalo entre perda de consciência e proteção da via aérea.",
      C: "Evitar completamente o uso de bloqueador neuromuscular.",
      D: "Garantir ventilação sob máscara prolongada em todos os casos.",
      E: "Produzir hipotensão controlada antes da intubação."
    },
    resposta: "B",
    comentario: "A sequência rápida visa minimizar o tempo em que o paciente está inconsciente, sem reflexos protetores e com via aérea desprotegida.",
    frase_ouro: "Sequência rápida é corrida contra regurgitação, não contra a calma."
  },
  {
    id: "yao-003-001",
    fonte: "Yao",
    capitulo: "Anestesia cardiovascular",
    tema: "Oferta e consumo de oxigênio",
    dificuldade: "média",
    pergunta: "Qual fator aumenta o consumo miocárdico de oxigênio?",
    alternativas: {
      A: "Redução extrema da frequência cardíaca com baixo débito.",
      B: "Taquicardia e aumento da tensão de parede ventricular.",
      C: "Melhora da perfusão coronariana diastólica.",
      D: "Correção de anemia grave.",
      E: "Redução da pós-carga em paciente hipertenso."
    },
    resposta: "B",
    comentario: "Taquicardia, contratilidade aumentada e maior tensão de parede elevam consumo miocárdico de oxigênio.",
    frase_ouro: "O miocárdio cobra caro por taquicardia, pressão e parede tensionada."
  },
  {
    id: "yao-003-002",
    fonte: "Yao",
    capitulo: "Anestesia cardiovascular",
    tema: "Hipotensão intraoperatória",
    dificuldade: "média",
    pergunta: "Em paciente coronariopata, por que a hipotensão diastólica é particularmente preocupante?",
    alternativas: {
      A: "Porque aumenta diretamente a resistência vascular pulmonar.",
      B: "Porque reduz a perfusão coronariana, que ocorre predominantemente na diástole.",
      C: "Porque impede a ventilação mecânica.",
      D: "Porque aumenta a pressão intracraniana obrigatoriamente.",
      E: "Porque causa hipercoagulabilidade imediata."
    },
    resposta: "B",
    comentario: "A perfusão do ventrículo esquerdo ocorre predominantemente na diástole; queda da pressão diastólica pode precipitar isquemia.",
    frase_ouro: "No coronariopata, a diástole é a janela de oxigênio do miocárdio."
  },
  {
    id: "yao-003-003",
    fonte: "Yao",
    capitulo: "Anestesia cardiovascular",
    tema: "Arritmias",
    dificuldade: "média",
    pergunta: "Durante anestesia, fibrilação atrial com alta resposta ventricular em paciente com ventrículo esquerdo rígido pode causar instabilidade por qual mecanismo?",
    alternativas: {
      A: "Melhora do enchimento ventricular por perda da contração atrial.",
      B: "Redução da pressão do átrio esquerdo.",
      C: "Perda da contribuição atrial ao enchimento e redução do tempo diastólico.",
      D: "Aumento obrigatório da perfusão renal.",
      E: "Redução do consumo miocárdico de oxigênio."
    },
    resposta: "C",
    comentario: "O ventrículo rígido depende mais da contração atrial; taquicardia ainda reduz o tempo de enchimento diastólico.",
    frase_ouro: "Ventrículo rígido sente falta do átrio quando a fibrilação começa."
  },
  {
    id: "yao-004-001",
    fonte: "Yao",
    capitulo: "Circulação extracorpórea",
    tema: "Efeitos sistêmicos",
    dificuldade: "média",
    pergunta: "Qual alteração é esperada durante ou após circulação extracorpórea?",
    alternativas: {
      A: "Resposta inflamatória sistêmica, hemodiluição e coagulopatia.",
      B: "Eliminação completa do risco de sangramento.",
      C: "Ausência de necessidade de anticoagulação.",
      D: "Aumento obrigatório e sustentado da função renal.",
      E: "Impossibilidade de hipotermia."
    },
    resposta: "A",
    comentario: "A circulação extracorpórea pode causar inflamação, hemodiluição, disfunção plaquetária, coagulopatia e alterações térmicas.",
    frase_ouro: "A CEC mantém a vida, mas cobra em inflamação, coagulação e temperatura."
  },
  {
    id: "yao-004-002",
    fonte: "Yao",
    capitulo: "Circulação extracorpórea",
    tema: "Desmame de CEC",
    dificuldade: "alta",
    pergunta: "Na dificuldade de saída da circulação extracorpórea, qual avaliação é mais útil para diferenciar hipovolemia, falência ventricular, tamponamento e lesão valvar residual?",
    alternativas: {
      A: "Apenas oximetria de pulso.",
      B: "Somente temperatura nasofaríngea.",
      C: "Ecocardiografia transesofágica associada aos dados hemodinâmicos.",
      D: "Capnografia isolada.",
      E: "Pressão do cuff do tubo traqueal."
    },
    resposta: "C",
    comentario: "O ecocardiograma transesofágico permite avaliar volume, função ventricular, próteses, ar intracardíaco, tamponamento e causas mecânicas de baixo débito.",
    frase_ouro: "Na saída difícil da CEC, o eco transforma suspeitas em fisiologia visível."
  },
  {
    id: "yao-004-003",
    fonte: "Yao",
    capitulo: "Circulação extracorpórea",
    tema: "Protamina",
    dificuldade: "média",
    pergunta: "Qual complicação grave pode ocorrer após administração de protamina?",
    alternativas: {
      A: "Hiperglicemia isolada e previsível.",
      B: "Hipertensão pulmonar aguda, hipotensão e reação anafilactoide.",
      C: "Aumento obrigatório da contratilidade ventricular.",
      D: "Correção imediata de plaquetopenia.",
      E: "Broncodilatação seletiva."
    },
    resposta: "B",
    comentario: "A protamina pode causar hipotensão, reações anafilactoides e, em casos graves, hipertensão pulmonar aguda com disfunção de ventrículo direito.",
    frase_ouro: "Protamina reverte heparina, mas pode desafiar o ventrículo direito."
  },
  {
    id: "yao-005-003",
    fonte: "Yao",
    capitulo: "Doença coronariana",
    tema: "Revascularização",
    dificuldade: "média",
    pergunta: "Em doença coronariana grave, qual objetivo anestésico é mais importante durante a indução?",
    alternativas: {
      A: "Manter equilíbrio entre oferta e consumo de oxigênio miocárdico.",
      B: "Produzir hipotensão profunda para reduzir sangramento.",
      C: "Induzir taquicardia para aumentar débito cardíaco.",
      D: "Reduzir saturação arterial para evitar vasoconstrição.",
      E: "Evitar totalmente opioides."
    },
    resposta: "A",
    comentario: "O foco é evitar taquicardia, hipotensão, anemia, hipoxemia e hipertensão excessiva, preservando oferta e reduzindo consumo de oxigênio.",
    frase_ouro: "Anestesia em coronariopata é contabilidade de oxigênio: oferta contra consumo."
  },
  {
    id: "yao-005-004",
    fonte: "Yao",
    capitulo: "Doença coronariana",
    tema: "Isquemia intraoperatória",
    dificuldade: "alta",
    pergunta: "Durante cirurgia de revascularização, surge alteração segmentar nova no ecocardiograma transesofágico antes da CEC. Qual interpretação é mais provável?",
    alternativas: {
      A: "Achado sem importância se a pressão estiver normal.",
      B: "Provável isquemia regional até prova em contrário.",
      C: "Sinal obrigatório de embolia pulmonar.",
      D: "Efeito esperado do bloqueador neuromuscular.",
      E: "Hipoglicemia como causa principal."
    },
    resposta: "B",
    comentario: "Alteração segmentar nova sugere isquemia regional e exige otimização de oferta/consumo, correção hemodinâmica e comunicação com a equipe cirúrgica.",
    frase_ouro: "Parede que parou de contrair está contando onde a coronária sofre."
  },
  {
    id: "yao-006-003",
    fonte: "Yao",
    capitulo: "Suporte circulatório mecânico",
    tema: "Balão intra-aórtico",
    dificuldade: "média",
    pergunta: "Quando o balão intra-aórtico desinsufla imediatamente antes da sístole, qual é o efeito esperado?",
    alternativas: {
      A: "Aumento da pós-carga do ventrículo esquerdo.",
      B: "Redução da pós-carga e do trabalho ventricular esquerdo.",
      C: "Aumento da regurgitação mitral por elevação da pressão atrial esquerda.",
      D: "Bloqueio completo da perfusão coronariana.",
      E: "Aumento obrigatório da pressão intracraniana."
    },
    resposta: "B",
    comentario: "A desinsuflação pré-sistólica reduz a pressão contra a qual o ventrículo esquerdo ejeta, diminuindo pós-carga e consumo de oxigênio.",
    frase_ouro: "Desinflar antes da sístole é tirar peso da ejeção ventricular."
  },
  {
    id: "yao-006-004",
    fonte: "Yao",
    capitulo: "Suporte circulatório mecânico",
    tema: "Dispositivos de assistência",
    dificuldade: "alta",
    pergunta: "Em paciente com dispositivo de assistência ventricular, qual princípio anestésico é essencial?",
    alternativas: {
      A: "Ignorar pré-carga, pois o dispositivo elimina dependência de volume.",
      B: "Evitar monitorização invasiva.",
      C: "Compreender se o fluxo é contínuo ou pulsátil e manter pré-carga, pós-carga e função do ventrículo direito adequadas.",
      D: "Tratar todo alarme com diurético.",
      E: "Manter hipertensão severa para aumentar fluxo."
    },
    resposta: "C",
    comentario: "Dispositivos de assistência dependem de condições adequadas de enchimento, pós-carga e função ventricular direita, além de compreensão do tipo de fluxo.",
    frase_ouro: "Dispositivo de assistência ajuda o coração, mas não perdoa fisiologia ignorada."
  },
  {
    id: "yao-007-003",
    fonte: "Yao",
    capitulo: "Doença valvar",
    tema: "Insuficiência aórtica",
    dificuldade: "média",
    pergunta: "Em insuficiência aórtica crônica importante, qual meta hemodinâmica é geralmente adequada?",
    alternativas: {
      A: "Bradicardia profunda e aumento de resistência vascular sistêmica.",
      B: "Frequência cardíaca moderadamente elevada, evitar bradicardia e reduzir pós-carga excessiva.",
      C: "Aumentar tempo diastólico para aumentar regurgitação.",
      D: "Manter hipertensão sistêmica sustentada.",
      E: "Evitar qualquer vasodilatação."
    },
    resposta: "B",
    comentario: "Na insuficiência aórtica, bradicardia aumenta o tempo de regurgitação. Reduzir pós-carga facilita fluxo anterógrado.",
    frase_ouro: "Na insuficiência aórtica, diástole longa é tempo extra para vazar."
  },
  {
    id: "yao-007-004",
    fonte: "Yao",
    capitulo: "Doença valvar",
    tema: "Estenose mitral",
    dificuldade: "média",
    pergunta: "Por que a taquicardia é especialmente deletéria na estenose mitral?",
    alternativas: {
      A: "Porque prolonga demais a diástole.",
      B: "Porque reduz o gradiente transmitral.",
      C: "Porque encurta a diástole, aumenta o gradiente transmitral e eleva a pressão do átrio esquerdo.",
      D: "Porque reduz a pressão pulmonar.",
      E: "Porque melhora o enchimento do ventrículo esquerdo."
    },
    resposta: "C",
    comentario: "Na estenose mitral, o enchimento do ventrículo esquerdo depende do tempo diastólico. Taquicardia piora gradiente, congestão pulmonar e hipertensão pulmonar.",
    frase_ouro: "Na estenose mitral, taquicardia fecha ainda mais uma porta já estreita."
  },
  {
    id: "yao-007-005",
    fonte: "Yao",
    capitulo: "Doença valvar",
    tema: "Pós-correção de insuficiência mitral",
    dificuldade: "alta",
    pergunta: "Após correção de insuficiência mitral crônica grave, o ventrículo esquerdo pode apresentar queda de fração de ejeção porque:",
    alternativas: {
      A: "A pós-carga efetiva diminui sempre após a correção.",
      B: "O ventrículo esquerdo perde a via de baixa pressão para o átrio esquerdo e precisa ejetar contra a aorta.",
      C: "A correção mitral impede retorno venoso sistêmico.",
      D: "A plastia mitral causa obrigatoriamente embolia pulmonar.",
      E: "A insuficiência mitral nunca altera a fração de ejeção."
    },
    resposta: "B",
    comentario: "Antes da correção, parte do volume era ejetado para o átrio esquerdo, uma via de menor pressão. Após correção, aumenta a pós-carga efetiva.",
    frase_ouro: "Corrigir a mitral tira a rota de fuga do ventrículo esquerdo."
  },
  {
    id: "yao-008-003",
    fonte: "Yao",
    capitulo: "Marca-passos e CDI",
    tema: "Interferência eletromagnética",
    dificuldade: "alta",
    pergunta: "Em paciente dependente de marca-passo com CRT-D submetido a cirurgia com cautério monopolar, qual plano é mais apropriado se houver tempo?",
    alternativas: {
      A: "Apenas aplicar magneto e dispensar desfibrilador externo.",
      B: "Suspender terapias antitaquicardia e programar pacing assíncrono se dependente, com desfibrilação externa disponível.",
      C: "Desligar definitivamente todo o dispositivo.",
      D: "Manter cautério monopolar contínuo próximo ao gerador.",
      E: "Evitar monitorização de pulso mecânico."
    },
    resposta: "B",
    comentario: "Em CRT-D, magneto geralmente suspende terapias antitaquicardia, mas pode não tornar o pacing assíncrono. Se dependente e risco de EMI, reprogramação é preferível.",
    frase_ouro: "Se o CDI foi calado, o desfibrilador externo precisa estar falando alto."
  },
  {
    id: "yao-008-004",
    fonte: "Yao",
    capitulo: "Marca-passos e CDI",
    tema: "Rate-responsive",
    dificuldade: "média",
    pergunta: "Durante ventilação mecânica, um marca-passo aumenta gradualmente a frequência estimulada sem arritmia verdadeira. Qual explicação é possível?",
    alternativas: {
      A: "Ativação de sensor rate-responsive por ventilação, movimento ou impedância.",
      B: "Ruptura obrigatória de eletrodo.",
      C: "Fibrilação ventricular silenciosa.",
      D: "Fim imediato de bateria.",
      E: "Desfibrilação interna contínua."
    },
    resposta: "A",
    comentario: "Funções rate-responsive podem interpretar ventilação, movimento ou alterações de impedância como aumento de demanda metabólica.",
    frase_ouro: "Nem toda frequência estimulada alta é arritmia; às vezes é o sensor animado."
  },
  {
    id: "yao-008-005",
    fonte: "Yao",
    capitulo: "Marca-passos e CDI",
    tema: "Pós-operatório",
    dificuldade: "média",
    pergunta: "Após cirurgia em paciente com ICD cujas terapias antitaquicardia foram suspensas, qual conduta é essencial?",
    alternativas: {
      A: "Alta imediata sem monitorização.",
      B: "Manter terapias desligadas até retorno ambulatorial.",
      C: "Reativar terapias, confirmar programação e monitorizar até segurança do dispositivo.",
      D: "Remover o dispositivo se não houve choque.",
      E: "Administrar diurético para substituir o CDI."
    },
    resposta: "C",
    comentario: "Terapias antitaquicardia devem ser reativadas e a programação confirmada antes de alta para ambiente não monitorizado.",
    frase_ouro: "Todo CDI desligado precisa de plano explícito para voltar a proteger."
  },
  {
    id: "yao-009-003",
    fonte: "Yao",
    capitulo: "Aneurisma toracoabdominal",
    tema: "Dreno de líquor",
    dificuldade: "média",
    pergunta: "Qual é o objetivo do dreno de líquor em cirurgias extensas de aorta toracoabdominal?",
    alternativas: {
      A: "Aumentar a pressão do líquor para proteger a medula.",
      B: "Reduzir pressão do líquor e aumentar pressão de perfusão medular.",
      C: "Substituir transfusão sanguínea.",
      D: "Impedir sangramento cirúrgico.",
      E: "Reduzir débito cardíaco."
    },
    resposta: "B",
    comentario: "Ao reduzir a pressão do líquido cefalorraquidiano, aumenta-se o gradiente de perfusão medular, desde que a pressão arterial seja mantida.",
    frase_ouro: "Drenar líquor é abrir espaço de perfusão para a medula."
  },
  {
    id: "yao-009-004",
    fonte: "Yao",
    capitulo: "Aneurisma toracoabdominal",
    tema: "Clampeamento torácico",
    dificuldade: "alta",
    pergunta: "Durante clampeamento da aorta torácica descendente, qual conjunto de alterações é esperado?",
    alternativas: {
      A: "Hipotensão proximal e aumento de perfusão visceral.",
      B: "Aumento de pós-carga proximal e redução da perfusão distal.",
      C: "Redução do trabalho do ventrículo esquerdo e aumento do fluxo renal.",
      D: "Ausência de impacto sobre medula.",
      E: "Redução obrigatória da resistência vascular sistêmica."
    },
    resposta: "B",
    comentario: "O clampeamento aumenta a resistência à ejeção proximal e reduz a perfusão distal, ameaçando rins, vísceras, medula e membros inferiores.",
    frase_ouro: "O clamp divide o corpo: pressão acima, isquemia abaixo."
  },
  {
    id: "yao-009-005",
    fonte: "Yao",
    capitulo: "Aneurisma toracoabdominal",
    tema: "Left heart bypass",
    dificuldade: "alta",
    pergunta: "Qual é uma função do bypass cardíaco esquerdo durante correção de aneurisma toracoabdominal?",
    alternativas: {
      A: "Manter perfusão distal durante o clampeamento e reduzir pós-carga proximal.",
      B: "Produzir parada cardíaca obrigatória.",
      C: "Substituir drenagem de líquor em todos os casos.",
      D: "Aumentar intencionalmente isquemia renal.",
      E: "Eliminar necessidade de anticoagulação sempre."
    },
    resposta: "A",
    comentario: "O bypass cardíaco esquerdo drena sangue do átrio esquerdo/veia pulmonar e devolve distalmente, ajudando perfusão de órgãos e reduzindo carga proximal.",
    frase_ouro: "Bypass esquerdo tenta impedir que o clamp deixe metade do corpo sem fluxo."
  },
  {
    id: "yao-010-003",
    fonte: "Yao",
    capitulo: "Aneurisma de aorta abdominal",
    tema: "Desclampeamento",
    dificuldade: "média",
    pergunta: "Qual mecanismo contribui para hipotensão após desclampeamento aórtico em correção aberta de AAA?",
    alternativas: {
      A: "Aumento sustentado da pós-carga.",
      B: "Queda de resistência vascular sistêmica, retorno de metabólitos ácidos e hipovolemia relativa.",
      C: "Aumento da pressão arterial proximal por obstrução persistente.",
      D: "Aumento imediato de contratilidade miocárdica.",
      E: "Vasoconstrição distal intensa."
    },
    resposta: "B",
    comentario: "Após desclampeamento, a reperfusão distal reduz RVS, devolve metabólitos ácidos e pode revelar hipovolemia/sangramento.",
    frase_ouro: "O desclamp devolve sangue ao território distal e cobra a conta metabólica."
  },
  {
    id: "yao-010-004",
    fonte: "Yao",
    capitulo: "Aneurisma de aorta abdominal",
    tema: "Endoleak",
    dificuldade: "média",
    pergunta: "Após EVAR, endoleak tipo II geralmente se origina de qual mecanismo?",
    alternativas: {
      A: "Falha de vedação proximal.",
      B: "Fluxo retrógrado por vasos colaterais, como lombares ou mesentérica inferior.",
      C: "Ruptura obrigatória do material da endoprótese.",
      D: "Infecção da prótese no primeiro minuto.",
      E: "Migração coronariana."
    },
    resposta: "B",
    comentario: "Endoleak tipo II decorre de fluxo retrógrado por ramos colaterais; pode ser observado se o saco aneurismático não cresce.",
    frase_ouro: "Endoleak tipo II é colateral teimosa; trate conforme o saco responde."
  },
  {
    id: "yao-010-005",
    fonte: "Yao",
    capitulo: "Aneurisma de aorta abdominal",
    tema: "AAA roto",
    dificuldade: "alta",
    pergunta: "Em suspeita de AAA roto com choque, qual é a prioridade anestésico-cirúrgica?",
    alternativas: {
      A: "Ressuscitação hemorrágica e controle rápido da aorta.",
      B: "Teste ergométrico antes da incisão.",
      C: "Normalização hipertensiva completa antes do controle vascular.",
      D: "Evitar acesso venoso calibroso.",
      E: "Aguardar todos os exames em paciente instável."
    },
    resposta: "A",
    comentario: "No AAA roto, a prioridade é controle cirúrgico/endovascular da hemorragia e ressuscitação balanceada, sem atrasar por exames desnecessários.",
    frase_ouro: "AAA roto não espera exame bonito; espera sangue e controle da aorta."
  },
  {
    id: "yao-011-003",
    fonte: "Yao",
    capitulo: "Hipertensão",
    tema: "Crise hipertensiva",
    dificuldade: "média",
    pergunta: "Em dissecção aguda de aorta com hipertensão e taquicardia, qual sequência farmacológica é mais adequada?",
    alternativas: {
      A: "Vasodilatador arterial puro antes de controlar frequência.",
      B: "Beta-bloqueio para reduzir frequência/dP/dt, seguido de vasodilatação se necessário.",
      C: "Hidralazina isolada em alta dose.",
      D: "Suspender analgesia para avaliar dor.",
      E: "Aumentar pressão sistólica para melhorar fluxo no falso lúmen."
    },
    resposta: "B",
    comentario: "Na dissecção, reduz-se primeiro frequência e contratilidade para diminuir dP/dt; vasodilatador isolado pode gerar taquicardia reflexa.",
    frase_ouro: "Na dissecção, o beta-bloqueador vem antes do vasodilatador."
  },
  {
    id: "yao-011-004",
    fonte: "Yao",
    capitulo: "Hipertensão",
    tema: "Hidralazina",
    dificuldade: "média",
    pergunta: "Por que a hidralazina é pouco atraente quando se exige controle fino e imediato da pressão arterial?",
    alternativas: {
      A: "Porque tem início e duração menos previsíveis, podendo causar taquicardia reflexa.",
      B: "Porque é antagonista beta-1 ultracurto.",
      C: "Porque não causa vasodilatação arterial.",
      D: "Porque é sempre contraindicada em gestantes.",
      E: "Porque reduz catecolaminas tumorais diretamente."
    },
    resposta: "A",
    comentario: "A hidralazina tem ação menos titulável, duração prolongada e pode provocar taquicardia reflexa, sendo ruim para controle fino.",
    frase_ouro: "Hidralazina é ruim quando você precisa de botão de volume fino."
  },
  {
    id: "yao-011-005",
    fonte: "Yao",
    capitulo: "Hipertensão",
    tema: "Feocromocitoma",
    dificuldade: "média",
    pergunta: "Após ligadura da veia adrenal em ressecção de feocromocitoma, qual complicação hemodinâmica é esperada?",
    alternativas: {
      A: "Hipertensão progressiva inevitável.",
      B: "Hipotensão por queda abrupta de catecolaminas, alfa-bloqueio residual e hipovolemia relativa.",
      C: "Aumento obrigatório de resistência vascular sistêmica.",
      D: "Bradicardia por hiperpotassemia sempre.",
      E: "Hipertensão pulmonar por embolia gasosa obrigatória."
    },
    resposta: "B",
    comentario: "Com a remoção da fonte catecolaminérgica, predomina vasodilatação, alfa-bloqueio residual e hipovolemia relativa, podendo causar hipotensão profunda.",
    frase_ouro: "Feocromocitoma tem duas metades: catecolamina demais antes, catecolamina de menos depois."
  },
  {
    id: "yao-012-004",
    fonte: "Yao",
    capitulo: "Tamponamento cardíaco",
    tema: "Pulso paradoxal",
    dificuldade: "média",
    pergunta: "O pulso paradoxal no tamponamento corresponde classicamente a:",
    alternativas: {
      A: "Aumento da pressão sistólica durante inspiração.",
      B: "Queda exagerada da pressão arterial sistólica durante inspiração.",
      C: "Ausência de variação respiratória da pressão.",
      D: "Aumento isolado da pressão venosa pulmonar.",
      E: "Queda da frequência cardíaca na inspiração."
    },
    resposta: "B",
    comentario: "No tamponamento, a inspiração aumenta enchimento do ventrículo direito, desloca o septo e reduz enchimento do ventrículo esquerdo, causando queda sistólica exagerada.",
    frase_ouro: "Pulso paradoxal é a competição dos ventrículos dentro de um pericárdio apertado."
  },
  {
    id: "yao-012-005",
    fonte: "Yao",
    capitulo: "Tamponamento cardíaco",
    tema: "Indução anestésica",
    dificuldade: "alta",
    pergunta: "Em paciente com tamponamento cardíaco significativo, qual princípio deve guiar a indução anestésica?",
    alternativas: {
      A: "Usar grandes doses de vasodilatadores antes da incisão.",
      B: "Evitar redução abrupta de tônus simpático, manter pré-carga e preparar descompressão imediata.",
      C: "Induzir bradicardia para melhorar enchimento.",
      D: "Aplicar PEEP elevada em todos os casos.",
      E: "Administrar diurético antes da indução."
    },
    resposta: "B",
    comentario: "O paciente com tamponamento depende de frequência, pré-carga e tônus simpático. Indução profunda e pressão positiva podem precipitar colapso.",
    frase_ouro: "Tamponamento não gosta de dormir, deitar, vasodilatar nem ventilar sob pressão."
  },
  {
    id: "yao-013-002",
    fonte: "Yao",
    capitulo: "Hipertensão pulmonar",
    tema: "Ventrículo direito",
    dificuldade: "alta",
    pergunta: "Na falência aguda de ventrículo direito por hipertensão pulmonar, qual conduta é mais adequada?",
    alternativas: {
      A: "Aumentar hipóxia permissiva.",
      B: "Corrigir hipóxia, hipercapnia e acidose, manter pressão sistêmica e considerar vasodilatador pulmonar seletivo.",
      C: "Reduzir pressão arterial sistêmica ao mínimo.",
      D: "Administrar beta-bloqueador em alta dose como primeira medida.",
      E: "Evitar qualquer suporte inotrópico."
    },
    resposta: "B",
    comentario: "O tratamento inclui reduzir resistência vascular pulmonar, preservar perfusão coronariana do VD, otimizar oxigenação/ventilação e usar inotrópicos/vasodilatadores pulmonares quando necessário.",
    frase_ouro: "Para salvar o VD, abra o pulmão e sustente a pressão sistêmica."
  },
  {
    id: "yao-013-003",
    fonte: "Yao",
    capitulo: "Hipertensão pulmonar",
    tema: "Óxido nítrico",
    dificuldade: "média",
    pergunta: "Qual é uma vantagem do óxido nítrico inalatório em crise de hipertensão pulmonar?",
    alternativas: {
      A: "Vasodilatação pulmonar relativamente seletiva com menor hipotensão sistêmica.",
      B: "Aumento obrigatório da resistência vascular pulmonar.",
      C: "Bloqueio neuromuscular prolongado.",
      D: "Correção direta de anemia.",
      E: "Substituição da ventilação mecânica."
    },
    resposta: "A",
    comentario: "O óxido nítrico inalatório atua predominantemente em áreas ventiladas do pulmão, reduzindo resistência vascular pulmonar com menor efeito sistêmico.",
    frase_ouro: "Vasodilatador pulmonar inalado trata o pulmão sem derrubar tanto o resto."
  },
  {
    id: "yao-014-002",
    fonte: "Yao",
    capitulo: "Transplante cardíaco",
    tema: "Fisiologia do transplantado",
    dificuldade: "média",
    pergunta: "No coração transplantado denervado, como ocorre aumento de frequência cardíaca durante estresse?",
    alternativas: {
      A: "Principalmente por reflexo vagal imediato.",
      B: "Por ação de catecolaminas circulantes, com resposta mais lenta.",
      C: "Por estimulação direta do nervo vago intacto.",
      D: "Por atropina endógena.",
      E: "Não há qualquer aumento de frequência possível."
    },
    resposta: "B",
    comentario: "Como há denervação autonômica, a resposta cronotrópica depende principalmente de catecolaminas circulantes, sendo mais lenta que no coração inervado.",
    frase_ouro: "O coração transplantado responde, mas sem telefonema direto do sistema nervoso."
  },
  {
    id: "yao-014-003",
    fonte: "Yao",
    capitulo: "Transplante cardíaco",
    tema: "Rejeição",
    dificuldade: "média",
    pergunta: "Em paciente transplantado cardíaco, qual condição deve ser considerada diante de disfunção ventricular nova?",
    alternativas: {
      A: "Rejeição do enxerto.",
      B: "Cura definitiva de todas as doenças cardíacas.",
      C: "Impossibilidade de infecção.",
      D: "Resposta vagal exagerada.",
      E: "Ausência de risco renal."
    },
    resposta: "A",
    comentario: "Disfunção ventricular nova em transplantado pode estar relacionada a rejeição, vasculopatia do enxerto, infecção ou toxicidade medicamentosa.",
    frase_ouro: "No transplantado, ventrículo novo que falha merece pensar em rejeição."
  },
  {
    id: "yao-015-002",
    fonte: "Yao",
    capitulo: "Cardiopatias congênitas",
    tema: "Tetralogia de Fallot",
    dificuldade: "alta",
    pergunta: "Durante crise hipercianótica em Tetralogia de Fallot, qual medida tende a melhorar a saturação?",
    alternativas: {
      A: "Reduzir resistência vascular sistêmica.",
      B: "Aumentar resistência vascular sistêmica e reduzir infundíbulo/espasmo com medidas adequadas.",
      C: "Induzir hipovolemia.",
      D: "Permitir acidose e choro.",
      E: "Aumentar resistência vascular pulmonar."
    },
    resposta: "B",
    comentario: "Aumentar a resistência vascular sistêmica reduz shunt direita-esquerda. Também se corrige hipoxemia, acidose, hipovolemia e estímulo simpático.",
    frase_ouro: "Na crise hipercianótica, aumentar RVS ajuda o sangue a escolher o pulmão."
  },
  {
    id: "yao-015-003",
    fonte: "Yao",
    capitulo: "Cardiopatias congênitas",
    tema: "Shunt esquerda-direita",
    dificuldade: "média",
    pergunta: "Em shunt esquerda-direita importante, qual consequência crônica pode ocorrer?",
    alternativas: {
      A: "Redução progressiva do fluxo pulmonar.",
      B: "Hiperfluxo pulmonar, hipertensão pulmonar e sobrecarga de câmaras.",
      C: "Cianose obrigatória desde o nascimento em todos os casos.",
      D: "Ausência de repercussão cardíaca.",
      E: "Diminuição da pressão no leito pulmonar."
    },
    resposta: "B",
    comentario: "Shunts esquerda-direita aumentam fluxo pulmonar e podem causar sobrecarga de câmaras, hipertensão pulmonar e, tardiamente, inversão do shunt.",
    frase_ouro: "Shunt esquerda-direita demais transforma pulmão em via de excesso."
  },
  {
    id: "yao-016-002",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Cesárea",
    dificuldade: "média",
    pergunta: "Após raquianestesia para cesárea, hipotensão materna deve ser tratada prontamente porque:",
    alternativas: {
      A: "Pode reduzir perfusão uteroplacentária e causar náusea, vômito e sofrimento fetal.",
      B: "Sempre melhora oxigenação fetal.",
      C: "Aumenta resistência vascular uterina de forma benéfica.",
      D: "Impede bloqueio alto.",
      E: "É desejável manter pressão baixa durante toda cesárea."
    },
    resposta: "A",
    comentario: "Hipotensão após bloqueio neuraxial reduz perfusão uteroplacentária e pode causar sintomas maternos e repercussão fetal.",
    frase_ouro: "Na cesárea, pressão materna é fluxo placentário."
  },
  {
    id: "yao-016-003",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Pré-eclâmpsia",
    dificuldade: "média",
    pergunta: "Na pré-eclâmpsia grave, qual preocupação anestésica é central?",
    alternativas: {
      A: "Hipotensão obrigatória por vasodilatação extrema.",
      B: "Hipertensão grave, risco neurológico, disfunção orgânica e manejo cuidadoso de fluidos.",
      C: "Ausência de risco de via aérea.",
      D: "Impossibilidade de coagulopatia.",
      E: "Contraindicação absoluta de anestesia neuraxial em todas as pacientes."
    },
    resposta: "B",
    comentario: "Pré-eclâmpsia grave envolve risco de hipertensão severa, eclâmpsia, edema pulmonar, disfunção renal/hepática, plaquetopenia e via aérea difícil.",
    frase_ouro: "Pré-eclâmpsia é doença endotelial; anestesia precisa respeitar cérebro, pulmão e coagulação."
  },
  {
    id: "yao-017-001",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Fisiologia neonatal",
    dificuldade: "média",
    pergunta: "Por que neonatos têm menor tolerância à apneia durante indução anestésica?",
    alternativas: {
      A: "Menor consumo de oxigênio por kg.",
      B: "Maior reserva funcional residual proporcional.",
      C: "Maior consumo de oxigênio e menor reserva pulmonar.",
      D: "Ausência de risco de dessaturação.",
      E: "Hemoglobina sempre normaliza a reserva de oxigênio."
    },
    resposta: "C",
    comentario: "Neonatos consomem mais oxigênio por kg e têm menor reserva funcional residual, dessaturando mais rapidamente durante apneia.",
    frase_ouro: "No neonato, a apneia tem pavio curto."
  },
  {
    id: "yao-017-002",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Bradicardia",
    dificuldade: "média",
    pergunta: "Em lactentes, bradicardia durante anestesia frequentemente deve ser tratada considerando principalmente:",
    alternativas: {
      A: "Hipóxia como causa comum e potencialmente grave.",
      B: "Hipertensão arterial essencial.",
      C: "Hipertermia maligna obrigatória.",
      D: "Excesso de glicose.",
      E: "Resposta normal sem importância."
    },
    resposta: "A",
    comentario: "Em lactentes, bradicardia pode ser sinal de hipóxia e queda de débito, exigindo oxigenação, ventilação e tratamento rápido.",
    frase_ouro: "Na criança pequena, bradicardia é hipóxia até prova em contrário."
  },
  {
    id: "yao-018-001",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "Pressão intracraniana",
    dificuldade: "média",
    pergunta: "Em paciente com hipertensão intracraniana, qual conduta ventilatória tende a reduzir temporariamente a pressão intracraniana?",
    alternativas: {
      A: "Hipercapnia permissiva intensa.",
      B: "Hipoventilação prolongada.",
      C: "Hiperventilação moderada e temporária, reduzindo PaCO2.",
      D: "Abolir oxigênio suplementar.",
      E: "Aumentar PEEP sem avaliar hemodinâmica."
    },
    resposta: "C",
    comentario: "Redução moderada da PaCO2 causa vasoconstrição cerebral e pode reduzir volume sanguíneo cerebral temporariamente; uso prolongado/excessivo pode causar isquemia.",
    frase_ouro: "Hiperventilação compra tempo no crânio, não cura a causa."
  },
  {
    id: "yao-018-002",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "Perfusão cerebral",
    dificuldade: "média",
    pergunta: "Qual relação descreve a pressão de perfusão cerebral?",
    alternativas: {
      A: "Pressão intracraniana menos pressão arterial média.",
      B: "Pressão arterial média menos pressão intracraniana.",
      C: "Frequência cardíaca vezes pressão venosa central.",
      D: "Pressão arterial sistólica menos saturação venosa.",
      E: "Débito cardíaco dividido por PaCO2."
    },
    resposta: "B",
    comentario: "A pressão de perfusão cerebral é estimada pela pressão arterial média menos a pressão intracraniana.",
    frase_ouro: "Cérebro perfunde quando pressão arterial vence pressão dentro do crânio."
  },
  {
    id: "yao-019-001",
    fonte: "Yao",
    capitulo: "Cirurgia torácica",
    tema: "Ventilação monopulmonar",
    dificuldade: "média",
    pergunta: "Durante ventilação monopulmonar, qual fator pode piorar hipoxemia?",
    alternativas: {
      A: "Colapso adequado do pulmão não ventilado com boa vasoconstrição hipóxica.",
      B: "Deslocamento do tubo de duplo lúmen ou ventilação inadequada do pulmão dependente.",
      C: "FiO2 adequada no pulmão ventilado.",
      D: "Correção de hipotensão grave.",
      E: "Recrutamento cuidadoso do pulmão ventilado."
    },
    resposta: "B",
    comentario: "Malposição do dispositivo de isolamento pulmonar ou ventilação inadequada do pulmão dependente aumenta shunt e hipoxemia.",
    frase_ouro: "Na ventilação monopulmonar, hipoxemia pede primeiro checar posição e pulmão ventilado."
  },
  {
    id: "yao-019-002",
    fonte: "Yao",
    capitulo: "Cirurgia torácica",
    tema: "Vasoconstrição hipóxica pulmonar",
    dificuldade: "média",
    pergunta: "Qual é a função da vasoconstrição hipóxica pulmonar durante ventilação monopulmonar?",
    alternativas: {
      A: "Aumentar fluxo para o pulmão não ventilado.",
      B: "Redirecionar sangue de áreas hipóxicas para áreas ventiladas, reduzindo shunt.",
      C: "Impedir completamente toda hipoxemia.",
      D: "Produzir broncodilatação seletiva.",
      E: "Aumentar pressão intracraniana."
    },
    resposta: "B",
    comentario: "A vasoconstrição hipóxica pulmonar reduz fluxo para regiões não ventiladas, ajudando a limitar shunt intrapulmonar.",
    frase_ouro: "O pulmão tenta mandar sangue para onde há ar."
  },
  {
    id: "yao-020-001",
    fonte: "Yao",
    capitulo: "Hepatobiliar",
    tema: "Doença hepática",
    dificuldade: "média",
    pergunta: "Em paciente com doença hepática avançada, qual alteração é relevante para anestesia?",
    alternativas: {
      A: "Coagulopatia, hipoalbuminemia, ascite e alteração do metabolismo de fármacos.",
      B: "Ausência de risco de sangramento.",
      C: "Aumento previsível da albumina.",
      D: "Metabolismo hepático sempre acelerado.",
      E: "Proteção completa contra encefalopatia."
    },
    resposta: "A",
    comentario: "Doença hepática avançada pode cursar com coagulopatia, hipoalbuminemia, ascite, encefalopatia, alteração farmacocinética e instabilidade hemodinâmica.",
    frase_ouro: "Fígado doente muda coagulação, volume, cérebro e destino dos fármacos."
  },
  {
    id: "yao-020-002",
    fonte: "Yao",
    capitulo: "Hepatobiliar",
    tema: "Hipertensão portal",
    dificuldade: "média",
    pergunta: "Qual complicação está associada à hipertensão portal em paciente cirrótico?",
    alternativas: {
      A: "Varizes esofágicas e risco de sangramento digestivo.",
      B: "Aumento obrigatório da resistência vascular sistêmica.",
      C: "Ausência de ascite.",
      D: "Eliminação do risco de encefalopatia.",
      E: "Correção automática de plaquetas."
    },
    resposta: "A",
    comentario: "Hipertensão portal pode causar varizes, esplenomegalia, ascite e sangramento digestivo significativo.",
    frase_ouro: "Hipertensão portal transforma veias frágeis em rota de pressão."
  },
  {
    id: "yao-021-001",
    fonte: "Yao",
    capitulo: "Endócrino",
    tema: "Diabetes",
    dificuldade: "média",
    pergunta: "No paciente diabético em jejum para cirurgia, qual risco deve ser considerado no manejo perioperatório?",
    alternativas: {
      A: "Hipoglicemia, hiperglicemia e gastroparesia com risco de aspiração.",
      B: "Ausência de alteração autonômica.",
      C: "Impossibilidade de infecção.",
      D: "Eliminação de risco renal.",
      E: "Não há necessidade de monitorar glicose."
    },
    resposta: "A",
    comentario: "Diabetes pode associar-se a hipoglicemia por jejum/insulina, hiperglicemia por estresse, gastroparesia, disautonomia e doença renal.",
    frase_ouro: "Diabetes no perioperatório é glicose, estômago, nervo e rim."
  },
  {
    id: "yao-021-002",
    fonte: "Yao",
    capitulo: "Endócrino",
    tema: "Insuficiência adrenal",
    dificuldade: "média",
    pergunta: "Paciente em uso crônico de corticoide pode precisar de suplementação perioperatória porque:",
    alternativas: {
      A: "Pode haver supressão do eixo hipotálamo-hipófise-adrenal e incapacidade de responder ao estresse cirúrgico.",
      B: "Todo corticoide causa hipertensão maligna intraoperatória.",
      C: "O cortisol não participa da resposta ao estresse.",
      D: "A cirurgia reduz necessidade de glicocorticoide.",
      E: "Corticoide crônico elimina risco de hipotensão."
    },
    resposta: "A",
    comentario: "Uso crônico de corticoide pode suprimir a produção endógena de cortisol, exigindo cobertura conforme porte cirúrgico e risco clínico.",
    frase_ouro: "Quem usa corticoide crônico pode não conseguir fabricar estresse quando precisa."
  },
  {
    id: "yao-022-001",
    fonte: "Yao",
    capitulo: "Renal",
    tema: "Doença renal crônica",
    dificuldade: "média",
    pergunta: "Em paciente com doença renal crônica, qual cuidado anestésico é apropriado?",
    alternativas: {
      A: "Evitar hipotensão prolongada, nefrotóxicos e ajustar fármacos de eliminação renal.",
      B: "Ignorar potássio pré-operatório.",
      C: "Usar anti-inflamatório não esteroidal sem restrição.",
      D: "Manter hipovolemia para proteger rins.",
      E: "Evitar qualquer monitorização de diurese."
    },
    resposta: "A",
    comentario: "Doença renal crônica aumenta risco de lesão renal aguda, hipercalemia e acúmulo de fármacos; perfusão e dose devem ser cuidadas.",
    frase_ouro: "Rim crônico não gosta de hipotensão, nefrotóxico nem dose no automático."
  },
  {
    id: "yao-022-002",
    fonte: "Yao",
    capitulo: "Renal",
    tema: "Hipercalemia",
    dificuldade: "média",
    pergunta: "Em hipercalemia com alterações eletrocardiográficas, qual é a primeira medida para estabilizar membrana miocárdica?",
    alternativas: {
      A: "Furosemida isolada.",
      B: "Cálcio intravenoso.",
      C: "Bicarbonato como única terapia definitiva.",
      D: "Suspender monitorização.",
      E: "Administrar potássio."
    },
    resposta: "B",
    comentario: "O cálcio intravenoso antagoniza efeitos da hipercalemia na membrana cardíaca, reduzindo risco de arritmias, enquanto outras medidas deslocam ou removem potássio.",
    frase_ouro: "Na hipercalemia com ECG alterado, cálcio compra segurança elétrica."
  },
  {
    id: "yao-023-001",
    fonte: "Yao",
    capitulo: "Trauma",
    tema: "Choque hemorrágico",
    dificuldade: "média",
    pergunta: "No choque hemorrágico grave, qual tríade piora coagulação e sobrevida?",
    alternativas: {
      A: "Hipotermia, acidose e coagulopatia.",
      B: "Normotermia, analgesia e oxigenação.",
      C: "Hiperglicemia leve, normocapnia e analgesia.",
      D: "Hipertensão, bradicardia e alcalose.",
      E: "Hipocalemia, hiperventilação e sedação."
    },
    resposta: "A",
    comentario: "Hipotermia, acidose e coagulopatia formam tríade letal no choque hemorrágico, exigindo controle de sangramento e ressuscitação hemostática.",
    frase_ouro: "No sangramento maciço, frio, ácido e coagulopata é trio que mata."
  },
  {
    id: "yao-023-002",
    fonte: "Yao",
    capitulo: "Trauma",
    tema: "Transfusão maciça",
    dificuldade: "média",
    pergunta: "Durante transfusão maciça, qual distúrbio eletrolítico deve ser monitorado e corrigido por efeito do citrato?",
    alternativas: {
      A: "Hipercalcemia.",
      B: "Hipocalcemia.",
      C: "Hipernatremia obrigatória.",
      D: "Hipofosfatemia isolada.",
      E: "Hipermagnesemia inevitável."
    },
    resposta: "B",
    comentario: "O citrato presente em hemocomponentes pode quelar cálcio, causando hipocalcemia e piorando contratilidade/coagulação.",
    frase_ouro: "Na transfusão maciça, cálcio baixo derruba pressão e coagulação."
  },
  {
    id: "yao-024-001",
    fonte: "Yao",
    capitulo: "Obesidade",
    tema: "Fisiologia respiratória",
    dificuldade: "média",
    pergunta: "Em paciente obeso, qual alteração aumenta risco de dessaturação durante indução?",
    alternativas: {
      A: "Aumento da capacidade residual funcional.",
      B: "Redução da capacidade residual funcional e maior consumo de oxigênio.",
      C: "Ausência de atelectasia.",
      D: "Menor risco de via aérea difícil.",
      E: "Redução do consumo de oxigênio."
    },
    resposta: "B",
    comentario: "Obesidade reduz reserva pulmonar e aumenta consumo de oxigênio, encurtando tempo seguro de apneia.",
    frase_ouro: "Na obesidade, a reserva de oxigênio acaba antes do otimismo."
  },
  {
    id: "yao-024-002",
    fonte: "Yao",
    capitulo: "Obesidade",
    tema: "Apneia obstrutiva do sono",
    dificuldade: "média",
    pergunta: "Em paciente com apneia obstrutiva do sono, qual cuidado pós-operatório é apropriado?",
    alternativas: {
      A: "Opioide em altas doses sem monitorização.",
      B: "Monitorização respiratória, analgesia multimodal e considerar uso de CPAP se habitual.",
      C: "Alta imediata após sedação profunda.",
      D: "Evitar oxigênio sempre.",
      E: "Ignorar dessaturações."
    },
    resposta: "B",
    comentario: "Apneia obstrutiva do sono aumenta risco de obstrução, hipoxemia e sensibilidade a opioides; monitorização e analgesia poupadora de opioide são importantes.",
    frase_ouro: "AOS no pós-operatório transforma opioide em teste respiratório."
  },
  {
    id: "yao-025-001",
    fonte: "Yao",
    capitulo: "Temperatura",
    tema: "Hipertermia maligna",
    dificuldade: "média",
    pergunta: "Qual é o tratamento específico da hipertermia maligna?",
    alternativas: {
      A: "Dantrolene.",
      B: "Atropina.",
      C: "Protamina.",
      D: "Furosemida isolada.",
      E: "Naloxona."
    },
    resposta: "A",
    comentario: "Dantrolene é o tratamento específico da hipertermia maligna, associado à suspensão dos gatilhos e suporte intensivo.",
    frase_ouro: "Na hipertermia maligna, dantrolene é a droga que fecha a torneira do cálcio."
  },
  {
    id: "yao-025-002",
    fonte: "Yao",
    capitulo: "Temperatura",
    tema: "Hipotermia perioperatória",
    dificuldade: "fácil",
    pergunta: "Qual efeito adverso está associado à hipotermia perioperatória?",
    alternativas: {
      A: "Melhora obrigatória da coagulação.",
      B: "Maior sangramento, tremor, desconforto e atraso na recuperação.",
      C: "Redução de infecção de ferida em todos os casos.",
      D: "Eliminação de arritmias.",
      E: "Aumento previsível do metabolismo."
    },
    resposta: "B",
    comentario: "Hipotermia pode piorar coagulação, aumentar sangramento, causar tremor, desconforto e prolongar recuperação anestésica.",
    frase_ouro: "Paciente frio sangra, treme e acorda devagar."
  },
  {
    id: "yao-026-001",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Agentes inalatórios",
    dificuldade: "média",
    pergunta: "Qual característica dos anestésicos inalatórios favorece indução e despertar mais rápidos?",
    alternativas: {
      A: "Alta solubilidade sangue-gás.",
      B: "Baixa solubilidade sangue-gás.",
      C: "Alta ligação irreversível ao receptor nicotínico.",
      D: "Metabolismo renal predominante.",
      E: "Ausência de eliminação pulmonar."
    },
    resposta: "B",
    comentario: "Quanto menor a solubilidade sangue-gás, mais rapidamente a pressão alveolar se aproxima da pressão inspirada, favorecendo indução e despertar mais rápidos.",
    frase_ouro: "Anestésico pouco solúvel entra e sai rápido: o sangue não o sequestra."
  },
  {
    id: "yao-026-002",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "CAM",
    dificuldade: "média",
    pergunta: "A concentração alveolar mínima, ou CAM, representa classicamente:",
    alternativas: {
      A: "A concentração que bloqueia resposta motora à incisão em 50% dos pacientes.",
      B: "A dose necessária para produzir amnésia em 100% dos pacientes.",
      C: "A concentração plasmática máxima tolerada sem hipotensão.",
      D: "A quantidade de anestésico metabolizada pelo fígado por hora.",
      E: "A concentração que impede náusea pós-operatória."
    },
    resposta: "A",
    comentario: "A CAM é uma medida de potência dos anestésicos inalatórios e corresponde à concentração que impede movimento à incisão em 50% dos pacientes.",
    frase_ouro: "CAM mede imobilidade, não profundidade perfeita para tudo."
  },
  {
    id: "yao-026-003",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Propofol",
    dificuldade: "fácil",
    pergunta: "Qual efeito hemodinâmico é esperado após bolus de propofol em paciente suscetível?",
    alternativas: {
      A: "Aumento intenso da resistência vascular sistêmica.",
      B: "Hipertensão pulmonar aguda obrigatória.",
      C: "Vasodilatação, redução de pré-carga/pós-carga e possível hipotensão.",
      D: "Broncoconstrição inevitável.",
      E: "Aumento sustentado da pressão arterial média."
    },
    resposta: "C",
    comentario: "Propofol pode causar vasodilatação, redução da resistência vascular sistêmica e depressão miocárdica discreta, levando à hipotensão.",
    frase_ouro: "Propofol é elegante para dormir, mas pode tirar o chão vascular."
  },
  {
    id: "yao-026-004",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Etomidato",
    dificuldade: "média",
    pergunta: "Qual é uma razão para considerar etomidato na indução de pacientes com reserva cardiovascular limitada?",
    alternativas: {
      A: "Produz vasodilatação mais intensa que propofol.",
      B: "Tende a preservar melhor a estabilidade hemodinâmica.",
      C: "É potente analgésico isolado.",
      D: "Elimina risco de mioclonia.",
      E: "Não tem qualquer efeito endócrino."
    },
    resposta: "B",
    comentario: "Etomidato costuma causar menor depressão cardiovascular que propofol, sendo útil em pacientes com instabilidade ou reserva cardíaca limitada.",
    frase_ouro: "Etomidato não é mágico, mas costuma mexer menos na hemodinâmica."
  },
  {
    id: "yao-026-005",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Cetamina",
    dificuldade: "média",
    pergunta: "Qual efeito torna a cetamina útil em alguns pacientes hipovolêmicos, mas potencialmente problemática em coronariopatas ou hipertensos?",
    alternativas: {
      A: "Bloqueio alfa irreversível.",
      B: "Supressão simpática completa.",
      C: "Estimulação simpática com aumento de frequência cardíaca e pressão arterial.",
      D: "Ausência de qualquer efeito cardiovascular.",
      E: "Antagonismo direto da heparina."
    },
    resposta: "C",
    comentario: "A cetamina frequentemente aumenta tônus simpático, frequência cardíaca e pressão arterial, o que pode ajudar em alguns contextos, mas aumentar consumo miocárdico.",
    frase_ouro: "Cetamina pode sustentar pressão, mas cobra em catecolamina."
  },
  {
    id: "yao-026-006",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Opioides",
    dificuldade: "média",
    pergunta: "Qual efeito adverso é central no uso perioperatório de opioides, especialmente em pacientes com apneia do sono ou DPOC?",
    alternativas: {
      A: "Hiperventilação obrigatória.",
      B: "Depressão respiratória.",
      C: "Aumento da depuração renal.",
      D: "Bloqueio neuromuscular profundo.",
      E: "Hipertensão intracraniana inevitável."
    },
    resposta: "B",
    comentario: "Opioides podem causar depressão ventilatória, hipercapnia e obstrução respiratória, especialmente em pacientes vulneráveis.",
    frase_ouro: "Opioide trata dor, mas pode cobrar ventilação."
  },
  {
    id: "yao-026-007",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Remifentanil",
    dificuldade: "média",
    pergunta: "Qual característica torna o remifentanil altamente titulável durante anestesia?",
    alternativas: {
      A: "Metabolismo por esterases plasmáticas e teciduais, com duração ultracurta.",
      B: "Eliminação renal exclusiva e lenta.",
      C: "Ligação irreversível ao receptor opioide.",
      D: "Ausência completa de depressão respiratória.",
      E: "Meia-vida prolongada por acúmulo adiposo."
    },
    resposta: "A",
    comentario: "Remifentanil é metabolizado rapidamente por esterases inespecíficas, permitindo ajuste fino e recuperação rápida após interrupção.",
    frase_ouro: "Remifentanil é opioide de controle fino: liga e desliga rápido."
  },
  {
    id: "yao-027-001",
    fonte: "Yao",
    capitulo: "Bloqueadores neuromusculares",
    tema: "Succinilcolina",
    dificuldade: "média",
    pergunta: "Qual situação é contraindicação clássica ao uso de succinilcolina pelo risco de hipercalemia grave?",
    alternativas: {
      A: "Jejum adequado.",
      B: "Miopia leve.",
      C: "Grande queimado após fase inicial ou doença neuromuscular desnervante.",
      D: "Hipertensão controlada.",
      E: "Rinite alérgica."
    },
    resposta: "C",
    comentario: "Queimaduras extensas após upregulation de receptores extrajuncionais e doenças desnervantes aumentam risco de hipercalemia grave com succinilcolina.",
    frase_ouro: "Succinilcolina em desnervação pode transformar receptor extra em potássio extra."
  },
  {
    id: "yao-027-002",
    fonte: "Yao",
    capitulo: "Bloqueadores neuromusculares",
    tema: "Rocurônio",
    dificuldade: "fácil",
    pergunta: "Qual droga pode reverter bloqueio neuromuscular profundo por rocurônio de forma específica?",
    alternativas: {
      A: "Protamina.",
      B: "Sugamadex.",
      C: "Dantrolene.",
      D: "Naloxona.",
      E: "Flumazenil."
    },
    resposta: "B",
    comentario: "Sugamadex encapsula rocurônio e vecurônio, reduzindo sua disponibilidade na junção neuromuscular.",
    frase_ouro: "Sugamadex não estimula músculo: ele sequestra rocurônio."
  },
  {
    id: "yao-027-003",
    fonte: "Yao",
    capitulo: "Bloqueadores neuromusculares",
    tema: "Miastenia gravis",
    dificuldade: "alta",
    pergunta: "Em miastenia gravis, qual afirmação sobre bloqueadores neuromusculares é mais adequada?",
    alternativas: {
      A: "Há resistência universal a bloqueadores não despolarizantes.",
      B: "Há sensibilidade aumentada a bloqueadores não despolarizantes.",
      C: "Succinilcolina é sempre proibida e não sofre variação de resposta.",
      D: "Não há risco de ventilação prolongada.",
      E: "Monitorização neuromuscular é desnecessária."
    },
    resposta: "B",
    comentario: "Pacientes com miastenia gravis costumam ser sensíveis a bloqueadores neuromusculares não despolarizantes e podem ter ventilação prolongada.",
    frase_ouro: "Na miastenia, pouco bloqueador pode ser muito bloqueio."
  },
  {
    id: "yao-027-004",
    fonte: "Yao",
    capitulo: "Bloqueadores neuromusculares",
    tema: "TOF",
    dificuldade: "média",
    pergunta: "Qual é o objetivo da monitorização com TOF no contexto de bloqueio neuromuscular?",
    alternativas: {
      A: "Medir profundidade hipnótica cortical.",
      B: "Avaliar grau de bloqueio neuromuscular e recuperação antes da extubação.",
      C: "Estimar pressão intracraniana.",
      D: "Medir débito cardíaco contínuo.",
      E: "Diagnosticar pneumotórax."
    },
    resposta: "B",
    comentario: "O TOF ajuda a guiar doses e recuperação do bloqueio neuromuscular, reduzindo risco de curarização residual.",
    frase_ouro: "TOF é o velocímetro do bloqueio: sem ele, você dirige no escuro."
  },
  {
    id: "yao-028-001",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Raquianestesia",
    dificuldade: "média",
    pergunta: "A hipotensão após raquianestesia ocorre principalmente por:",
    alternativas: {
      A: "Bloqueio simpático com vasodilatação venosa e arterial.",
      B: "Aumento súbito de catecolaminas.",
      C: "Broncoconstrição severa obrigatória.",
      D: "Aumento da resistência vascular sistêmica.",
      E: "Hipervolemia imediata."
    },
    resposta: "A",
    comentario: "A raquianestesia bloqueia fibras simpáticas, causando vasodilatação, redução de retorno venoso e queda da resistência vascular sistêmica.",
    frase_ouro: "Neuraxial alto derruba pressão porque desliga simpático."
  },
  {
    id: "yao-028-002",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Toxicidade sistêmica por anestésico local",
    dificuldade: "alta",
    pergunta: "Qual tratamento específico deve estar disponível para toxicidade sistêmica grave por anestésico local?",
    alternativas: {
      A: "Protamina.",
      B: "Emulsão lipídica intravenosa.",
      C: "Dantrolene.",
      D: "Vitamina K.",
      E: "Flumazenil."
    },
    resposta: "B",
    comentario: "A emulsão lipídica intravenosa é tratamento específico para toxicidade sistêmica por anestésico local, além de suporte avançado.",
    frase_ouro: "Na toxicidade por anestésico local, lipídio é antídoto e suporte é ponte."
  },
  {
    id: "yao-028-003",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Bloqueio peridural",
    dificuldade: "média",
    pergunta: "Qual vantagem do bloqueio peridural em relação à raquianestesia de dose única?",
    alternativas: {
      A: "Impossibilidade de hipotensão.",
      B: "Permite titulação incremental e analgesia contínua.",
      C: "Nunca causa bloqueio motor.",
      D: "Dispensa avaliação de anticoagulação.",
      E: "Não pode ser usado para analgesia pós-operatória."
    },
    resposta: "B",
    comentario: "A peridural permite administração fracionada e manutenção por cateter, favorecendo titulação e analgesia prolongada.",
    frase_ouro: "Peridural é neuraxial com botão de volume."
  },
  {
    id: "yao-028-004",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Anticoagulação",
    dificuldade: "alta",
    pergunta: "Antes de realizar bloqueio neuraxial em paciente anticoagulado, qual princípio é essencial?",
    alternativas: {
      A: "Ignorar horário da última dose se a punção for única.",
      B: "Respeitar intervalos seguros conforme droga, dose, função renal e risco de sangramento.",
      C: "Realizar punção mesmo com coagulopatia grave.",
      D: "Retirar cateter peridural durante anticoagulação plena sem avaliar risco.",
      E: "Usar apenas agulha menor para eliminar risco de hematoma."
    },
    resposta: "B",
    comentario: "Bloqueios neuraxiais em pacientes anticoagulados exigem respeito a intervalos e avaliação de coagulação para reduzir risco de hematoma neuraxial.",
    frase_ouro: "Neuroeixo e anticoagulação só combinam com relógio, protocolo e respeito."
  },
  {
    id: "yao-029-001",
    fonte: "Yao",
    capitulo: "Respiratório",
    tema: "DPOC",
    dificuldade: "média",
    pergunta: "Durante ventilação mecânica em paciente com DPOC, qual ajuste ajuda a reduzir hiperinsuflação dinâmica?",
    alternativas: {
      A: "Aumentar muito a frequência respiratória sem tempo expiratório.",
      B: "Permitir tempo expiratório adequado e evitar volume/minuto excessivo.",
      C: "Eliminar completamente a expiração.",
      D: "Usar PEEP extrema em todos os casos.",
      E: "Aumentar pressão de platô sem limite."
    },
    resposta: "B",
    comentario: "Pacientes com DPOC precisam de tempo expiratório suficiente para evitar aprisionamento aéreo e auto-PEEP.",
    frase_ouro: "No DPOC, dar tempo para sair o ar é tão importante quanto colocar ar."
  },
  {
    id: "yao-029-002",
    fonte: "Yao",
    capitulo: "Respiratório",
    tema: "Asma",
    dificuldade: "média",
    pergunta: "Durante broncoespasmo intraoperatório, qual conduta é adequada?",
    alternativas: {
      A: "Aprofundar anestesia, administrar broncodilatador e avaliar causas como intubação seletiva ou anafilaxia.",
      B: "Reduzir oxigênio imediatamente.",
      C: "Aumentar estímulo cirúrgico.",
      D: "Diminuir tempo expiratório.",
      E: "Administrar beta-bloqueador como primeira linha."
    },
    resposta: "A",
    comentario: "Broncoespasmo exige aumento de oxigênio, aprofundamento anestésico, broncodilatadores e busca de causas associadas.",
    frase_ouro: "Broncoespasmo não é só chiado: é ventilação difícil até prova em contrário."
  },
  {
    id: "yao-029-003",
    fonte: "Yao",
    capitulo: "Respiratório",
    tema: "SDRA",
    dificuldade: "média",
    pergunta: "Qual estratégia ventilatória é central na síndrome do desconforto respiratório agudo?",
    alternativas: {
      A: "Volumes correntes altos para normalizar completamente CO2.",
      B: "Ventilação protetora com baixo volume corrente e limitação de pressões.",
      C: "Ausência de PEEP em todos os pacientes.",
      D: "Hipóxia permissiva sem limite.",
      E: "Desconexão frequente do ventilador."
    },
    resposta: "B",
    comentario: "A ventilação protetora com baixo volume corrente e limitação de pressão reduz lesão pulmonar induzida pelo ventilador.",
    frase_ouro: "Na SDRA, ventilar demais também machuca."
  },
  {
    id: "yao-029-004",
    fonte: "Yao",
    capitulo: "Respiratório",
    tema: "Embolia pulmonar",
    dificuldade: "alta",
    pergunta: "Em embolia pulmonar maciça, qual padrão hemodinâmico é esperado?",
    alternativas: {
      A: "Redução da pós-carga do ventrículo direito.",
      B: "Aumento agudo da resistência vascular pulmonar com sobrecarga de ventrículo direito.",
      C: "Melhora imediata do débito cardíaco.",
      D: "Redução da pressão de artéria pulmonar.",
      E: "Ausência de hipoxemia."
    },
    resposta: "B",
    comentario: "A embolia pulmonar maciça aumenta a resistência vascular pulmonar, causando dilatação/falência de ventrículo direito e baixo débito.",
    frase_ouro: "Na embolia maciça, o VD encontra uma parede no pulmão."
  },
  {
    id: "yao-030-001",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "TCE",
    dificuldade: "média",
    pergunta: "No traumatismo cranioencefálico grave, qual objetivo anestésico é apropriado?",
    alternativas: {
      A: "Evitar hipotensão e hipoxemia, mantendo perfusão cerebral adequada.",
      B: "Permitir hipoxemia para reduzir edema.",
      C: "Induzir hipotensão profunda rotineiramente.",
      D: "Aumentar PaCO2 sem limite.",
      E: "Evitar completamente analgesia."
    },
    resposta: "A",
    comentario: "Hipotensão e hipoxemia pioram lesão cerebral secundária. A anestesia deve preservar oxigenação e pressão de perfusão cerebral.",
    frase_ouro: "No TCE, segunda agressão é a que a anestesia precisa impedir."
  },
  {
    id: "yao-030-002",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "Tumor cerebral",
    dificuldade: "média",
    pergunta: "Em paciente com massa intracraniana e hipertensão intracraniana, qual escolha anestésica é geralmente desejável?",
    alternativas: {
      A: "Evitar grandes aumentos de pressão intracraniana e manter estabilidade hemodinâmica.",
      B: "Induzir hipercapnia severa.",
      C: "Usar doses altas de vasodilatadores sem monitorização.",
      D: "Evitar qualquer controle de via aérea.",
      E: "Manter tosse intensa na intubação."
    },
    resposta: "A",
    comentario: "Evita-se tosse, hipertensão, hipercapnia e hipóxia, mantendo pressão de perfusão cerebral adequada.",
    frase_ouro: "No crânio apertado, tosse e CO2 ocupam espaço."
  },
  {
    id: "yao-030-003",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "Aneurisma cerebral",
    dificuldade: "alta",
    pergunta: "Durante clipagem de aneurisma cerebral não roto, qual princípio hemodinâmico é adequado antes do controle vascular?",
    alternativas: {
      A: "Evitar hipertensão brusca que aumente risco de ruptura.",
      B: "Manter pressão sistólica extremamente alta sem limite.",
      C: "Induzir tosse vigorosa antes da abertura dural.",
      D: "Evitar monitorização arterial.",
      E: "Manter hipercapnia grave."
    },
    resposta: "A",
    comentario: "Antes do controle do aneurisma, hipertensão súbita pode aumentar risco de ruptura. Também se evita hipotensão que comprometa perfusão cerebral.",
    frase_ouro: "Antes do clip, pressão demais ameaça ruptura; pressão de menos ameaça cérebro."
  },
  {
    id: "yao-031-001",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Hemorragia pós-parto",
    dificuldade: "média",
    pergunta: "Qual é causa comum de hemorragia pós-parto imediata?",
    alternativas: {
      A: "Atonia uterina.",
      B: "Hiperventilação materna leve.",
      C: "Anestesia local em pele.",
      D: "Baixa pressão de cuff.",
      E: "Uso de oxigênio suplementar."
    },
    resposta: "A",
    comentario: "Atonia uterina é uma das causas mais frequentes de hemorragia pós-parto e exige uterotônicos, massagem e controle cirúrgico quando necessário.",
    frase_ouro: "Útero que não contrai vira torneira."
  },
  {
    id: "yao-031-002",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Toxicidade por magnésio",
    dificuldade: "média",
    pergunta: "Em gestante recebendo sulfato de magnésio, qual sinal sugere toxicidade?",
    alternativas: {
      A: "Hiperreflexia progressiva.",
      B: "Perda de reflexos, depressão respiratória e fraqueza.",
      C: "Aumento obrigatório de contrações uterinas.",
      D: "Hipertensão severa por efeito direto.",
      E: "Broncoespasmo alérgico inevitável."
    },
    resposta: "B",
    comentario: "Toxicidade por magnésio pode causar perda de reflexos, depressão respiratória, fraqueza muscular e bloqueio neuromuscular aumentado.",
    frase_ouro: "Magnésio protege do eclampsia, mas em excesso apaga reflexo e respiração."
  },
  {
    id: "yao-031-003",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Via aérea obstétrica",
    dificuldade: "média",
    pergunta: "Por que a gestante tem risco aumentado de via aérea difícil e aspiração?",
    alternativas: {
      A: "Edema de via aérea, menor reserva respiratória e maior risco de refluxo/estômago cheio.",
      B: "Aumento importante da capacidade residual funcional.",
      C: "Ausência de alterações anatômicas.",
      D: "Esvaziamento gástrico sempre acelerado em trabalho de parto.",
      E: "Menor consumo de oxigênio."
    },
    resposta: "A",
    comentario: "Gestação associa edema de via aérea, redução de reserva pulmonar, aumento de consumo de oxigênio e maior risco de aspiração.",
    frase_ouro: "Na gestante, via aérea e estômago exigem respeito dobrado."
  },
  {
    id: "yao-032-001",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Laringoespasmo",
    dificuldade: "média",
    pergunta: "Em laringoespasmo pós-extubação em criança, qual conduta inicial é adequada?",
    alternativas: {
      A: "Estimular mais a via aérea com aspiração profunda repetida.",
      B: "Oxigênio 100%, pressão positiva contínua, remover estímulo e aprofundar anestesia se necessário.",
      C: "Aguardar cianose prolongada antes de agir.",
      D: "Administrar diurético como primeira linha.",
      E: "Extubar novamente."
    },
    resposta: "B",
    comentario: "Laringoespasmo exige remoção do estímulo, oxigênio, pressão positiva, aprofundamento anestésico e, se persistente, bloqueador neuromuscular.",
    frase_ouro: "Laringoespasmo se trata abrindo caminho para oxigênio, não esperando ficar roxo."
  },
  {
    id: "yao-032-002",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Reposição volêmica",
    dificuldade: "média",
    pergunta: "Em criança anestesiada, qual sinal pode sugerir hipovolemia significativa?",
    alternativas: {
      A: "Taquicardia persistente, enchimento capilar lento e queda de pressão em fase tardia.",
      B: "Hipertensão isolada com bradicardia sempre.",
      C: "Aumento de diurese com pele quente.",
      D: "Saturação sempre acima de 100%.",
      E: "Ausência de qualquer alteração até parada cardíaca."
    },
    resposta: "A",
    comentario: "Crianças compensam perda volêmica com taquicardia e vasoconstrição; hipotensão pode ser achado tardio.",
    frase_ouro: "Na criança, pressão cai tarde; taquicardia avisa antes."
  },
  {
    id: "yao-032-003",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Termorregulação",
    dificuldade: "fácil",
    pergunta: "Por que crianças pequenas têm maior risco de hipotermia perioperatória?",
    alternativas: {
      A: "Maior relação superfície corporal/peso e menor reserva térmica.",
      B: "Menor perda de calor por evaporação.",
      C: "Ausência de exposição cirúrgica.",
      D: "Metabolismo basal zero.",
      E: "Capacidade plena de tremor desde o nascimento."
    },
    resposta: "A",
    comentario: "Crianças pequenas perdem calor rapidamente pela maior relação superfície/peso e menor reserva térmica.",
    frase_ouro: "Criança pequena perde calor grande."
  },
  {
    id: "yao-033-001",
    fonte: "Yao",
    capitulo: "Geriatria",
    tema: "Farmacologia no idoso",
    dificuldade: "média",
    pergunta: "No paciente idoso, qual princípio farmacológico é geralmente adequado?",
    alternativas: {
      A: "Doses sempre maiores por resistência universal.",
      B: "Titular doses cuidadosamente, pois há maior sensibilidade e menor reserva fisiológica.",
      C: "Ignorar função renal.",
      D: "Evitar monitorização hemodinâmica.",
      E: "Assumir ausência de doença cardiovascular."
    },
    resposta: "B",
    comentario: "Idosos costumam ter menor reserva fisiológica, alterações farmacocinéticas/farmacodinâmicas e maior risco de hipotensão e delirium.",
    frase_ouro: "No idoso, dose pequena pode ter efeito grande."
  },
  {
    id: "yao-033-002",
    fonte: "Yao",
    capitulo: "Geriatria",
    tema: "Delirium",
    dificuldade: "média",
    pergunta: "Qual fator aumenta risco de delirium pós-operatório em idosos?",
    alternativas: {
      A: "Dor mal controlada, hipoxemia, infecção, distúrbios metabólicos e fármacos sedativos.",
      B: "Orientação adequada e sono preservado.",
      C: "Correção de hipoxemia.",
      D: "Controle de dor multimodal.",
      E: "Mobilização precoce."
    },
    resposta: "A",
    comentario: "Delirium é multifatorial e pode ser precipitado por dor, hipóxia, infecção, distúrbios hidroeletrolíticos, privação de sono e sedativos.",
    frase_ouro: "Delirium no idoso raramente tem uma causa só; é síndrome de soma."
  },
  {
    id: "yao-034-001",
    fonte: "Yao",
    capitulo: "Dor aguda",
    tema: "Analgesia multimodal",
    dificuldade: "fácil",
    pergunta: "Qual é o objetivo da analgesia multimodal?",
    alternativas: {
      A: "Usar apenas opioide em doses máximas.",
      B: "Combinar mecanismos analgésicos para melhorar controle da dor e reduzir efeitos adversos.",
      C: "Evitar qualquer bloqueio regional.",
      D: "Impedir mobilização precoce.",
      E: "Produzir sedação profunda como objetivo principal."
    },
    resposta: "B",
    comentario: "Analgesia multimodal usa diferentes classes e técnicas para melhorar analgesia e reduzir dose/efeitos adversos de cada intervenção.",
    frase_ouro: "Dor boa de tratar é dor atacada por mais de um caminho."
  },
  {
    id: "yao-034-002",
    fonte: "Yao",
    capitulo: "Dor aguda",
    tema: "Opioides",
    dificuldade: "média",
    pergunta: "Qual efeito adverso comum de opioides pode atrasar alta e recuperação pós-operatória?",
    alternativas: {
      A: "Náusea, vômito, sedação, íleo e depressão respiratória.",
      B: "Aumento da motilidade intestinal.",
      C: "Broncodilatação obrigatória.",
      D: "Hiperventilação sustentada.",
      E: "Aumento de reflexos protetores."
    },
    resposta: "A",
    comentario: "Opioides podem causar náusea, vômito, prurido, sedação, íleo, retenção urinária e depressão respiratória.",
    frase_ouro: "Opioide demais troca dor por efeitos colaterais."
  },
  {
    id: "yao-035-001",
    fonte: "Yao",
    capitulo: "Náuseas e vômitos",
    tema: "PONV",
    dificuldade: "média",
    pergunta: "Qual fator aumenta risco de náuseas e vômitos pós-operatórios?",
    alternativas: {
      A: "Sexo feminino, história prévia de PONV/cinetose, não tabagismo e uso de opioides.",
      B: "Anestesia local sem sedação em todos os pacientes.",
      C: "Ausência de opioides e cirurgia curta.",
      D: "Jejum adequado isoladamente.",
      E: "Tabagismo ativo como fator de alto risco clássico."
    },
    resposta: "A",
    comentario: "Fatores clássicos incluem sexo feminino, história de PONV ou cinetose, não tabagismo e opioides no pós-operatório.",
    frase_ouro: "PONV gosta de perfil, anestésico e opioide."
  },
  {
    id: "yao-035-002",
    fonte: "Yao",
    capitulo: "Náuseas e vômitos",
    tema: "Profilaxia",
    dificuldade: "média",
    pergunta: "Em paciente com alto risco de náuseas e vômitos pós-operatórios, qual estratégia é adequada?",
    alternativas: {
      A: "Não fazer profilaxia e tratar apenas após vômitos repetidos.",
      B: "Usar profilaxia multimodal com antieméticos de mecanismos diferentes e reduzir fatores de risco quando possível.",
      C: "Aumentar opioide como antiemético.",
      D: "Evitar hidratação sempre.",
      E: "Usar apenas um fármaco em dose subterapêutica."
    },
    resposta: "B",
    comentario: "Profilaxia multimodal é indicada em alto risco, combinando fármacos e reduzindo fatores eméticos como opioides e anestésicos voláteis quando possível.",
    frase_ouro: "PONV de alto risco pede profilaxia em camadas."
  },
  {
    id: "yao-036-001",
    fonte: "Yao",
    capitulo: "Cuidados críticos",
    tema: "Sepse",
    dificuldade: "média",
    pergunta: "Em paciente séptico, qual alteração hemodinâmica é comum na fase vasodilatada?",
    alternativas: {
      A: "Resistência vascular sistêmica baixa e necessidade de vasopressor para manter perfusão.",
      B: "Vasoconstrição arterial extrema em todos os casos.",
      C: "Ausência de alteração microcirculatória.",
      D: "Débito cardíaco sempre zero.",
      E: "Hipertensão intracraniana como manifestação obrigatória."
    },
    resposta: "A",
    comentario: "Sepse pode causar vasodilatação, má distribuição de fluxo e hipotensão, exigindo fluidos e vasopressores conforme resposta.",
    frase_ouro: "Na sepse, pressão baixa muitas vezes é vaso aberto demais."
  },
  {
    id: "yao-036-002",
    fonte: "Yao",
    capitulo: "Cuidados críticos",
    tema: "Noradrenalina",
    dificuldade: "média",
    pergunta: "Qual é o papel típico da noradrenalina no choque distributivo?",
    alternativas: {
      A: "Reduzir resistência vascular sistêmica.",
      B: "Aumentar tônus vascular e pressão arterial média.",
      C: "Produzir bloqueio neuromuscular.",
      D: "Reverter heparina.",
      E: "Tratar hipertermia maligna especificamente."
    },
    resposta: "B",
    comentario: "Noradrenalina é vasopressor de primeira linha em muitos choques distributivos, aumentando tônus vascular e pressão de perfusão.",
    frase_ouro: "Noradrenalina fecha o vaso para devolver pressão perfusora."
  },
  {
    id: "yao-036-003",
    fonte: "Yao",
    capitulo: "Cuidados críticos",
    tema: "Lactato",
    dificuldade: "média",
    pergunta: "Lactato elevado em paciente crítico sugere principalmente:",
    alternativas: {
      A: "Possível desequilíbrio entre oferta e demanda de oxigênio, hipoperfusão ou estresse metabólico.",
      B: "Função mitocondrial sempre normal.",
      C: "Ausência de gravidade.",
      D: "Hipervolemia obrigatória.",
      E: "Correção automática de choque."
    },
    resposta: "A",
    comentario: "Lactato pode elevar por hipoperfusão, hipóxia tecidual, catecolaminas, disfunção mitocondrial e metabolismo acelerado.",
    frase_ouro: "Lactato alto é alarme metabólico; não é diagnóstico único."
  },
  {
    id: "yao-037-001",
    fonte: "Yao",
    capitulo: "Hematologia",
    tema: "Anemia",
    dificuldade: "média",
    pergunta: "Qual fator deve influenciar decisão transfusional além do valor isolado de hemoglobina?",
    alternativas: {
      A: "Sinais de isquemia, sangramento ativo, reserva cardiopulmonar e oxigenação.",
      B: "Cor da parede da sala.",
      C: "Altura do anestesista.",
      D: "Tipo de monitor de temperatura.",
      E: "Marca do laringoscópio."
    },
    resposta: "A",
    comentario: "A decisão transfusional deve considerar contexto clínico, sangramento, isquemia, reserva cardíaca/pulmonar e oferta de oxigênio.",
    frase_ouro: "Transfusão não trata número; trata oferta de oxigênio no paciente real."
  },
  {
    id: "yao-037-002",
    fonte: "Yao",
    capitulo: "Hematologia",
    tema: "Coagulopatia",
    dificuldade: "média",
    pergunta: "Em sangramento difuso com fibrinogênio baixo, qual hemoderivado ou concentrado pode ser indicado?",
    alternativas: {
      A: "Crioprecipitado ou concentrado de fibrinogênio.",
      B: "Concentrado de hemácias isolado sempre.",
      C: "Naloxona.",
      D: "Atropina.",
      E: "Sugamadex."
    },
    resposta: "A",
    comentario: "Fibrinogênio baixo prejudica formação de coágulo; pode ser reposto com crioprecipitado ou concentrado de fibrinogênio conforme disponibilidade.",
    frase_ouro: "Sem fibrinogênio, o coágulo não ganha estrutura."
  },
  {
    id: "yao-038-001",
    fonte: "Yao",
    capitulo: "Anafilaxia",
    tema: "Reconhecimento",
    dificuldade: "média",
    pergunta: "Durante anestesia geral, qual combinação sugere anafilaxia?",
    alternativas: {
      A: "Hipotensão, broncoespasmo, rash/edema e dificuldade ventilatória após exposição a agente desencadeante.",
      B: "Hipertensão isolada sem outros sinais.",
      C: "Bradicardia fisiológica durante sono.",
      D: "Diurese aumentada isolada.",
      E: "Miose por opioide sem instabilidade."
    },
    resposta: "A",
    comentario: "Anafilaxia perioperatória pode manifestar-se com colapso cardiovascular, broncoespasmo, alterações cutâneas e edema, embora sinais cutâneos possam estar ocultos.",
    frase_ouro: "Anafilaxia anestésica pode aparecer primeiro como pressão que some e pulmão que fecha."
  },
  {
    id: "yao-038-002",
    fonte: "Yao",
    capitulo: "Anafilaxia",
    tema: "Tratamento",
    dificuldade: "média",
    pergunta: "Qual fármaco é central no tratamento da anafilaxia grave perioperatória?",
    alternativas: {
      A: "Adrenalina.",
      B: "Furosemida.",
      C: "Protamina em todos os casos.",
      D: "Dantrolene.",
      E: "Flumazenil."
    },
    resposta: "A",
    comentario: "Adrenalina trata vasodilatação, broncoespasmo e edema na anafilaxia grave, junto com oxigênio, fluidos e suporte.",
    frase_ouro: "Anafilaxia grave pede adrenalina cedo, não timidez."
  },
  {
    id: "yao-039-001",
    fonte: "Yao",
    capitulo: "Ambulatorial",
    tema: "Alta segura",
    dificuldade: "fácil",
    pergunta: "Qual critério é importante antes da alta após anestesia ambulatorial?",
    alternativas: {
      A: "Estabilidade hemodinâmica, controle de dor/náusea e recuperação adequada da consciência e mobilidade.",
      B: "Sonolência profunda persistente.",
      C: "Sangramento ativo sem avaliação.",
      D: "Hipoxemia em ar ambiente sem plano.",
      E: "Ausência de acompanhante quando necessário."
    },
    resposta: "A",
    comentario: "Alta ambulatorial exige recuperação adequada, estabilidade, dor e náuseas controladas, além de orientações e suporte após saída.",
    frase_ouro: "Alta segura é fisiologia estável, não pressa de liberar leito."
  },
  {
    id: "yao-039-002",
    fonte: "Yao",
    capitulo: "Ambulatorial",
    tema: "Seleção de pacientes",
    dificuldade: "média",
    pergunta: "Qual paciente exige cautela especial para cirurgia ambulatorial?",
    alternativas: {
      A: "Paciente com comorbidade descompensada ou risco elevado de complicação pós-operatória.",
      B: "Paciente hígido para procedimento curto.",
      C: "Paciente com acompanhante e boa recuperação esperada.",
      D: "Paciente com dor controlável por via oral.",
      E: "Paciente sem risco respiratório."
    },
    resposta: "A",
    comentario: "Comorbidades descompensadas, risco respiratório/cardiovascular e necessidade de monitorização prolongada podem contraindicar ambiente ambulatorial.",
    frase_ouro: "Ambulatorial bom é aquele em que a alta já é segura antes da incisão."
  },
  {
    id: "yao-040-001",
    fonte: "Yao",
    capitulo: "Queimaduras",
    tema: "Via aérea",
    dificuldade: "média",
    pergunta: "Em paciente queimado com suspeita de lesão inalatória, qual preocupação é prioritária?",
    alternativas: {
      A: "Edema progressivo de via aérea e necessidade precoce de controle da via aérea.",
      B: "Ausência de risco respiratório se saturação inicial for normal.",
      C: "Contraindicação absoluta de oxigênio.",
      D: "Extubação imediata obrigatória.",
      E: "Hipotermia impossível."
    },
    resposta: "A",
    comentario: "Lesão inalatória pode evoluir com edema progressivo, tornando intubação tardia mais difícil ou impossível.",
    frase_ouro: "Na queimadura de via aérea, esperar edema é perder janela."
  },
  {
    id: "yao-040-002",
    fonte: "Yao",
    capitulo: "Queimaduras",
    tema: "Succinilcolina",
    dificuldade: "alta",
    pergunta: "Após queimadura extensa, por que a succinilcolina passa a ser perigosa após o período inicial?",
    alternativas: {
      A: "Por risco de hipercalemia devido à proliferação de receptores acetilcolínicos extrajuncionais.",
      B: "Por causar hipocalcemia obrigatória.",
      C: "Por bloquear receptores alfa.",
      D: "Por não produzir fasciculações.",
      E: "Por reverter analgesia."
    },
    resposta: "A",
    comentario: "Após queimaduras extensas, upregulation de receptores extrajuncionais aumenta liberação de potássio com succinilcolina.",
    frase_ouro: "Queimadura extensa transforma succinilcolina em risco de potássio."
  },
  {
    id: "yao-041-001",
    fonte: "Yao",
    capitulo: "Cirurgia laparoscópica",
    tema: "Pneumoperitônio",
    dificuldade: "média",
    pergunta: "Qual efeito fisiológico pode ocorrer com pneumoperitônio por CO2?",
    alternativas: {
      A: "Aumento de CO2 absorvido, elevação de pressão intra-abdominal e alterações hemodinâmicas.",
      B: "Ausência de efeito ventilatório.",
      C: "Redução obrigatória da pressão intra-abdominal.",
      D: "Diminuição de PaCO2 sem ajuste ventilatório.",
      E: "Eliminação de risco de embolia gasosa."
    },
    resposta: "A",
    comentario: "O pneumoperitônio pode aumentar PaCO2, reduzir retorno venoso em alguns contextos, elevar resistência vascular sistêmica e modificar ventilação.",
    frase_ouro: "Pneumoperitônio é gás, pressão e CO2 entrando na conta."
  },
  {
    id: "yao-041-002",
    fonte: "Yao",
    capitulo: "Cirurgia laparoscópica",
    tema: "Embolia gasosa",
    dificuldade: "alta",
    pergunta: "Durante laparoscopia, queda abrupta de EtCO2, hipotensão e sopro em roda de moinho sugerem:",
    alternativas: {
      A: "Embolia gasosa venosa.",
      B: "Hipoglicemia leve.",
      C: "Bloqueio neuromuscular residual.",
      D: "Hipertensão essencial.",
      E: "Retenção urinária."
    },
    resposta: "A",
    comentario: "Embolia gasosa venosa pode causar queda abrupta do EtCO2 por redução de débito pulmonar, hipotensão e colapso cardiovascular.",
    frase_ouro: "EtCO2 que despenca de repente pode ser débito que sumiu."
  },
  {
    id: "yao-042-001",
    fonte: "Yao",
    capitulo: "Urologia",
    tema: "Síndrome pós-RTU",
    dificuldade: "média",
    pergunta: "Na síndrome pós-ressecção transuretral da próstata, qual distúrbio pode ocorrer por absorção de solução hipotônica?",
    alternativas: {
      A: "Hipernatremia grave.",
      B: "Hiponatremia e sintomas neurológicos.",
      C: "Hipercalcemia isolada.",
      D: "Hiperglicemia obrigatória.",
      E: "Hipertermia maligna."
    },
    resposta: "B",
    comentario: "Absorção de solução hipotônica pode causar hiponatremia dilucional, confusão, convulsões e instabilidade hemodinâmica.",
    frase_ouro: "Na RTU, irrigação absorvida pode virar sódio baixo e cérebro irritado."
  },
  {
    id: "yao-042-002",
    fonte: "Yao",
    capitulo: "Urologia",
    tema: "Litotomia",
    dificuldade: "média",
    pergunta: "Qual complicação deve ser considerada em cirurgias prolongadas em posição de litotomia?",
    alternativas: {
      A: "Lesão nervosa periférica, síndrome compartimental e alterações hemodinâmicas ao reposicionar.",
      B: "Ausência de risco neurológico.",
      C: "Proteção completa contra trombose.",
      D: "Eliminação de compressão de membros.",
      E: "Hiperventilação obrigatória."
    },
    resposta: "A",
    comentario: "Litotomia prolongada pode causar compressões nervosas, lesão muscular, síndrome compartimental e mudanças de retorno venoso ao descer as pernas.",
    frase_ouro: "Posição cirúrgica também é intervenção anestésica."
  },
  {
    id: "yao-043-001",
    fonte: "Yao",
    capitulo: "Ortopedia",
    tema: "Cimento ósseo",
    dificuldade: "alta",
    pergunta: "Durante artroplastia cimentada, hipotensão, hipóxia e aumento de pressão pulmonar após cimentação sugerem:",
    alternativas: {
      A: "Síndrome de implantação do cimento ósseo.",
      B: "Hipertermia maligna obrigatória.",
      C: "Toxicidade por anestésico local.",
      D: "Hipoglicemia pura.",
      E: "Pneumotórax espontâneo bilateral inevitável."
    },
    resposta: "A",
    comentario: "A síndrome de implantação do cimento ósseo pode causar hipóxia, hipotensão, hipertensão pulmonar, disfunção de VD e colapso.",
    frase_ouro: "Cimento em osso pode virar embolia e VD em apuros."
  },
  {
    id: "yao-043-002",
    fonte: "Yao",
    capitulo: "Ortopedia",
    tema: "Embolia gordurosa",
    dificuldade: "média",
    pergunta: "Após fratura de ossos longos, hipoxemia, alteração neurológica e petéquias sugerem:",
    alternativas: {
      A: "Síndrome da embolia gordurosa.",
      B: "Crise tireotóxica obrigatória.",
      C: "Hipercalcemia anestésica.",
      D: "Síndrome pós-RTU.",
      E: "Reação ao sugamadex isolada."
    },
    resposta: "A",
    comentario: "Embolia gordurosa pode ocorrer após fraturas de ossos longos, com hipoxemia, alterações neurológicas e rash petequial.",
    frase_ouro: "Fratura longa pode jogar gordura no pulmão e confundir o cérebro."
  },
  {
    id: "yao-044-001",
    fonte: "Yao",
    capitulo: "Otorrinolaringologia",
    tema: "Cirurgia de via aérea compartilhada",
    dificuldade: "média",
    pergunta: "Em cirurgia de via aérea compartilhada, qual princípio é essencial?",
    alternativas: {
      A: "Comunicação contínua com cirurgião sobre acesso à via aérea, ventilação e plano de emergência.",
      B: "Dispensar plano de via aérea alternativa.",
      C: "Evitar monitorização de oxigenação.",
      D: "Assumir que sangramento nunca ocorre.",
      E: "Retirar o tubo sem combinar com a equipe."
    },
    resposta: "A",
    comentario: "Cirurgias de via aérea compartilhada exigem planejamento conjunto, estratégia de ventilação, acesso emergencial e comunicação contínua.",
    frase_ouro: "Via aérea compartilhada exige ego pequeno e plano grande."
  },
  {
    id: "yao-044-002",
    fonte: "Yao",
    capitulo: "Otorrinolaringologia",
    tema: "Laser de via aérea",
    dificuldade: "alta",
    pergunta: "Em cirurgia com laser de via aérea, qual medida reduz risco de incêndio?",
    alternativas: {
      A: "Reduzir FiO2 ao menor valor seguro, evitar óxido nitroso e usar tubo adequado/protegido.",
      B: "Usar FiO2 100% sempre com óxido nitroso.",
      C: "Aumentar vazamento de oxigênio ao redor do tubo.",
      D: "Ignorar comunicação com o cirurgião.",
      E: "Usar tubo comum desprotegido obrigatoriamente."
    },
    resposta: "A",
    comentario: "Laser em via aérea exige redução de oxidantes, tubo apropriado e comunicação para evitar incêndio de via aérea.",
    frase_ouro: "Laser, oxigênio e tubo comum formam triângulo que ninguém quer acender."
  },
  {
    id: "yao-045-001",
    fonte: "Yao",
    capitulo: "Oftalmologia",
    tema: "Reflexo óculo-cardíaco",
    dificuldade: "média",
    pergunta: "Tração de músculos extraoculares causa bradicardia súbita. Qual reflexo explica esse achado?",
    alternativas: {
      A: "Reflexo óculo-cardíaco.",
      B: "Reflexo de Bezold-Jarisch obrigatório.",
      C: "Reflexo de Bainbridge.",
      D: "Reflexo de tosse.",
      E: "Reflexo barorreceptor aórtico isolado."
    },
    resposta: "A",
    comentario: "O reflexo óculo-cardíaco é mediado por aferência trigeminal e eferência vagal, podendo causar bradicardia com tração ocular.",
    frase_ouro: "No olho, puxou e bradicardizou: pense no vago pelo trigêmeo."
  },
  {
    id: "yao-045-002",
    fonte: "Yao",
    capitulo: "Oftalmologia",
    tema: "Pressão intraocular",
    dificuldade: "média",
    pergunta: "Qual fator pode aumentar pressão intraocular durante anestesia?",
    alternativas: {
      A: "Tosse, laringoscopia intensa e hipercapnia.",
      B: "Plano anestésico adequado e relaxamento.",
      C: "Evitar estímulo de via aérea.",
      D: "Normocapnia.",
      E: "Controle suave da emergência."
    },
    resposta: "A",
    comentario: "Tosse, náusea, vômito, laringoscopia, hipercapnia e aumento de pressão venosa podem elevar pressão intraocular.",
    frase_ouro: "Olho aberto não gosta de tosse, pressão e CO2."
  },
  {
    id: "yao-046-001",
    fonte: "Yao",
    capitulo: "Cirurgia plástica",
    tema: "Lipoaspiração",
    dificuldade: "média",
    pergunta: "Em lipoaspiração de grande volume, qual preocupação anestésica é relevante?",
    alternativas: {
      A: "Deslocamento de fluidos, toxicidade por lidocaína, hipotermia e tromboembolismo.",
      B: "Ausência de perda térmica.",
      C: "Impossibilidade de absorção de anestésico local.",
      D: "Risco zero de embolia.",
      E: "Contraindicação absoluta de monitorização."
    },
    resposta: "A",
    comentario: "Lipoaspiração extensa envolve infiltração tumescente, absorção de lidocaína, perda de calor, alterações volêmicas e risco tromboembólico.",
    frase_ouro: "Lipo grande é cirurgia de fluido, temperatura e anestésico local."
  },
  {
    id: "yao-046-002",
    fonte: "Yao",
    capitulo: "Cirurgia plástica",
    tema: "Toxicidade por lidocaína",
    dificuldade: "média",
    pergunta: "Qual manifestação pode ocorrer na toxicidade sistêmica por lidocaína?",
    alternativas: {
      A: "Sintomas neurológicos como zumbido, gosto metálico, convulsões e, em casos graves, colapso cardiovascular.",
      B: "Hipertrofia muscular imediata.",
      C: "Coagulação intravascular obrigatória.",
      D: "Hipoglicemia isolada.",
      E: "Bloqueio alfa irreversível."
    },
    resposta: "A",
    comentario: "Toxicidade por anestésico local pode causar sintomas neurológicos precoces e toxicidade cardiovascular grave.",
    frase_ouro: "Anestésico local no sangue demais começa no cérebro e pode terminar no coração."
  },
  {
    id: "yao-047-001",
    fonte: "Yao",
    capitulo: "Doença coronariana",
    tema: "Isquemia durante indução",
    dificuldade: "alta",
    pergunta: "Homem de 72 anos, doença triarterial conhecida, vai para laparotomia urgente por obstrução intestinal. Após indução com queda da pressão arterial para 78/42 mmHg e FC 118 bpm, surge infradesnivelamento de ST em DII e V5. Saturação 97%, hemoglobina 11 g/dL. Qual é a conduta fisiologicamente mais adequada?",
    alternativas: {
      A: "Aumentar a pressão arterial diastólica, reduzir taquicardia, otimizar profundidade anestésica e corrigir fatores que reduzam oferta de oxigênio.",
      B: "Aguardar espontaneamente, pois a saturação normal exclui isquemia.",
      C: "Administrar vasodilatador arterial puro para reduzir ainda mais a pressão.",
      D: "Reduzir a fração inspirada de oxigênio para evitar vasoconstrição coronariana.",
      E: "Induzir taquicardia para aumentar o débito cardíaco."
    },
    resposta: "A",
    comentario: "O quadro sugere isquemia por desequilíbrio oferta/consumo. Taquicardia aumenta consumo e reduz tempo diastólico; hipotensão diastólica reduz perfusão coronariana. A conduta é restaurar pressão perfusora, controlar frequência, otimizar anestesia, oxigenação e hemoglobina.",
    frase_ouro: "No coronariopata, ST baixo durante hipotensão e taquicardia é pedido de socorro da oferta de oxigênio."
  },
  {
    id: "yao-047-002",
    fonte: "Yao",
    capitulo: "Doença coronariana",
    tema: "Pós-CEC",
    dificuldade: "alta",
    pergunta: "Paciente após revascularização miocárdica sai da circulação extracorpórea com PAM 48 mmHg, PVC 14 mmHg, SvO2 58%, lactato subindo e ecocardiografia mostrando hipocinesia global de VE. Qual interpretação é mais provável?",
    alternativas: {
      A: "Vasoplegia isolada com débito cardíaco alto.",
      B: "Baixo débito por disfunção ventricular esquerda após CEC, exigindo otimização de pré-carga, inotropismo e exclusão de isquemia mecânica/coronária.",
      C: "Hipervolemia pura com função ventricular normal.",
      D: "Anafilaxia obrigatória à protamina, independentemente do momento.",
      E: "Erro de oximetria, pois lactato não se altera em baixo débito."
    },
    resposta: "B",
    comentario: "SvO2 baixa, lactato subindo e hipocinesia global sugerem oferta sistêmica inadequada por baixo débito. Após CEC, causas incluem stunning miocárdico, isquemia, proteção miocárdica inadequada, distúrbios eletrolíticos e alterações mecânicas.",
    frase_ouro: "Depois da CEC, pressão baixa com SvO2 baixa pede pensar em bomba, não só em vaso."
  },
  {
    id: "yao-047-003",
    fonte: "Yao",
    capitulo: "Doença valvar",
    tema: "Estenose aórtica",
    dificuldade: "alta",
    pergunta: "Mulher de 81 anos, estenose aórtica grave sintomática, é submetida a correção de fratura de fêmur. Após raquianestesia inadvertidamente extensa, PA cai para 70/35 mmHg e FC 52 bpm. Qual mecanismo explica a gravidade do quadro?",
    alternativas: {
      A: "A estenose aórtica melhora com redução intensa da pós-carga.",
      B: "A bradicardia sempre aumenta o débito cardíaco nesses pacientes.",
      C: "A queda de resistência vascular sistêmica e da pressão diastólica reduz perfusão coronariana em ventrículo hipertrofiado e dependente de pré-carga.",
      D: "O bloqueio simpático aumenta a pressão arterial diastólica.",
      E: "A valva estreita protege contra hipotensão."
    },
    resposta: "C",
    comentario: "Na estenose aórtica grave, o VE hipertrofiado depende de pré-carga, ritmo adequado e pressão diastólica para perfusão coronariana. Vasodilatação abrupta e bradicardia podem causar colapso hemodinâmico.",
    frase_ouro: "Estenose aórtica grave não tolera vasodilatação brusca: a coronária depende da diástole."
  },
  {
    id: "yao-047-004",
    fonte: "Yao",
    capitulo: "Doença valvar",
    tema: "Insuficiência mitral aguda",
    dificuldade: "alta",
    pergunta: "Paciente pós-infarto evolui com edema agudo de pulmão, hipotensão e novo sopro sistólico. Eco sugere insuficiência mitral aguda por disfunção de músculo papilar. Qual meta anestésica é mais adequada até correção definitiva?",
    alternativas: {
      A: "Aumentar resistência vascular sistêmica ao máximo para reduzir regurgitação.",
      B: "Induzir bradicardia profunda para aumentar enchimento.",
      C: "Evitar qualquer suporte inotrópico.",
      D: "Reduzir pós-carga quando possível, sustentar perfusão sistêmica e tratar congestão/baixo débito.",
      E: "Manter hipovolemia severa como estratégia primária."
    },
    resposta: "D",
    comentario: "Na insuficiência mitral aguda, o átrio esquerdo não tem complacência adaptada, causando congestão pulmonar e baixo débito. Redução de pós-carga favorece fluxo anterógrado, mas é preciso sustentar pressão e perfusão.",
    frase_ouro: "Na insuficiência mitral aguda, o pulmão paga rápido pelo refluxo que o átrio não consegue acomodar."
  },
  {
    id: "yao-047-005",
    fonte: "Yao",
    capitulo: "Marca-passos e CDI",
    tema: "Interferência eletromagnética",
    dificuldade: "alta",
    pergunta: "Paciente com CRT-D, dependente de pacing, será submetido a colectomia aberta com cautério monopolar. O cirurgião pergunta se basta colocar magneto. Qual resposta é mais correta?",
    alternativas: {
      A: "Sim, porque magneto sempre muda qualquer CRT-D para modo DOO.",
      B: "Sim, porque magneto corrige falha de captura ventricular.",
      C: "Não, porque magneto em CRT-D geralmente suspende terapias antitaquicardia, mas pode não tornar o pacing assíncrono; se dependente, idealmente deve haver reprogramação.",
      D: "Não há risco de interferência em cirurgia abdominal.",
      E: "Deve-se desligar definitivamente o dispositivo e operar sem monitorização."
    },
    resposta: "C",
    comentario: "Em dispositivos com desfibrilador, magneto geralmente suspende terapias antitaquicardia, mas não garante pacing assíncrono. Paciente dependente exige plano para evitar inibição por EMI e desfibrilação externa disponível.",
    frase_ouro: "Magneto no CDI cala o choque; não necessariamente protege o pacing."
  },
  {
    id: "yao-047-006",
    fonte: "Yao",
    capitulo: "Aneurisma toracoabdominal",
    tema: "Proteção medular",
    dificuldade: "alta",
    pergunta: "Durante correção aberta de aneurisma toracoabdominal tipo extenso, após clampeamento prolongado, há perda dos potenciais evocados motores dos membros inferiores. A PAM proximal é 72 mmHg, hemoglobina 8 g/dL, pressão do líquor 18 mmHg. Qual conjunto de medidas é mais adequado?",
    alternativas: {
      A: "Reduzir PAM para diminuir sangramento e manter líquor elevado.",
      B: "Aumentar anestésico volátil e administrar bloqueador neuromuscular para melhorar MEP.",
      C: "Ignorar a alteração se a saturação periférica estiver normal.",
      D: "Aumentar pressão de perfusão medular com maior PAM, reduzir pressão do líquor, otimizar hemoglobina/oxigenação e comunicar o cirurgião.",
      E: "Fazer diurético para reduzir retorno venoso."
    },
    resposta: "D",
    comentario: "A queda de MEP sugere isquemia medular. A pressão de perfusão medular depende da PAM efetiva menos a pressão do LCR. Deve-se subir PAM, drenar LCR conforme protocolo, corrigir anemia/hipoxemia e revisar fluxo distal/reimplante.",
    frase_ouro: "MEP caiu: suba pressão, drene líquor e entregue oxigênio à medula."
  },
  {
    id: "yao-047-007",
    fonte: "Yao",
    capitulo: "Aneurisma de aorta abdominal",
    tema: "Desclampeamento",
    dificuldade: "alta",
    pergunta: "Homem de 76 anos, DRC e IAM prévio, está em correção aberta de AAA infrarrenal. Após desclampeamento, PA cai para 60/35 mmHg, EtCO2 cai, lactato sobe e cálcio ionizado está baixo após transfusão. Qual abordagem é mais apropriada?",
    alternativas: {
      A: "Administrar apenas vasodilatador, pois a queda de pressão significa hipertensão oculta.",
      B: "Tratar como reperfusão/vasodilatação e hipovolemia relativa: volume/hemoderivados conforme perda, vasopressor, correção de cálcio, acidose e sangramento.",
      C: "Ignorar cálcio, pois citrato não interfere na hemodinâmica.",
      D: "Induzir taquicardia extrema como única estratégia.",
      E: "Suspender oxigênio para reduzir radicais livres."
    },
    resposta: "B",
    comentario: "O desclampeamento pode causar queda de RVS, retorno de metabólitos ácidos, hipovolemia relativa e sangramento. Transfusão maciça pode gerar hipocalcemia por citrato, piorando contratilidade e coagulação.",
    frase_ouro: "No desclamp, o território isquêmico devolve volume, ácido e problema."
  },
  {
    id: "yao-047-008",
    fonte: "Yao",
    capitulo: "Hipertensão",
    tema: "Feocromocitoma",
    dificuldade: "alta",
    pergunta: "Paciente com feocromocitoma em adrenalectomia laparoscópica faz PA 260/140 mmHg e FC 135 durante manipulação tumoral. Minutos depois, após ligadura da veia adrenal, PA cai para 58/32 mmHg. Qual sequência explica melhor esses eventos?",
    alternativas: {
      A: "Antes da ligadura há liberação de catecolaminas; após a ligadura há queda abrupta de catecolaminas, alfa-bloqueio residual e hipovolemia relativa.",
      B: "Antes da ligadura há falência vagal; depois há hipertensão mascarada.",
      C: "Antes há hipoglicemia; depois há excesso de aldosterona.",
      D: "Antes há broncoespasmo; depois há laringoespasmo.",
      E: "Os eventos são incompatíveis com feocromocitoma."
    },
    resposta: "A",
    comentario: "A manipulação tumoral libera catecolaminas, gerando vasoconstrição, hipertensão e taquicardia. Após remover a fonte, predominam vasodilatação, alfa-bloqueio residual e hipovolemia relativa.",
    frase_ouro: "Feocromocitoma é anestesia em duas metades: catecolamina demais antes, catecolamina de menos depois."
  },
  {
    id: "yao-047-009",
    fonte: "Yao",
    capitulo: "Tamponamento cardíaco",
    tema: "Pós-operatório cardíaco",
    dificuldade: "alta",
    pergunta: "Paciente 4 dias após CABG e troca valvar mitral apresenta dispneia, oligúria, pele fria, FC 120, PA 110/65, PVC 24 mmHg, PAOP 13 mmHg e débito cardíaco 2,5 L/min. Qual diagnóstico deve ser fortemente considerado?",
    alternativas: {
      A: "Hipovolemia pura por jejum.",
      B: "Vasoplegia isolada com alto débito.",
      C: "Tamponamento regional por coágulo comprimindo câmaras direitas.",
      D: "Recuperação normal pós-operatória.",
      E: "Hipoglicemia como causa principal dos dados hemodinâmicos."
    },
    resposta: "C",
    comentario: "No pós-operatório cardíaco, coágulos podem causar tamponamento regional, especialmente comprimindo átrio/ventrículo direitos. PVC muito elevada, PAOP menos elevada e baixo débito são sugestivos.",
    frase_ouro: "No pós-cardíaco, coágulo localizado pode tamponar sem fazer o clássico perfeito."
  },
  {
    id: "yao-047-010",
    fonte: "Yao",
    capitulo: "Tamponamento cardíaco",
    tema: "Indução anestésica",
    dificuldade: "alta",
    pergunta: "Paciente com tamponamento significativo será levado à reexploração. Está sentado, ansioso, taquicárdico e dependente de catecolaminas endógenas. Qual estratégia de indução é mais segura?",
    alternativas: {
      A: "Sedação profunda na UTI antes de equipe cirúrgica pronta.",
      B: "Bloqueio beta para reduzir FC antes da drenagem.",
      C: "Diurético e vasodilatador antes do transporte.",
      D: "Indução titulada com manutenção de pré-carga e tônus simpático, drogas vasoativas prontas e cirurgião preparado para descompressão imediata.",
      E: "PEEP alta obrigatória antes da indução."
    },
    resposta: "D",
    comentario: "No tamponamento, o paciente depende de pré-carga, frequência e tônus simpático. Sedação profunda, vasodilatação e pressão positiva podem precipitar colapso. A descompressão precisa estar imediatamente disponível.",
    frase_ouro: "Tamponamento não perdoa indução bonita sem cirurgião pronto."
  },
  {
    id: "yao-048-001",
    fonte: "Yao",
    capitulo: "Hipertensão pulmonar",
    tema: "Falência de VD",
    dificuldade: "alta",
    pergunta: "Paciente com hipertensão pulmonar grave durante laparotomia desenvolve hipotensão, aumento de PVC, queda de EtCO2 e dilatação aguda de VD no eco. PaCO2 58 mmHg, pH 7,21, SpO2 88%. Qual conduta inicial é mais apropriada?",
    alternativas: {
      A: "Reduzir oxigênio para evitar vasoconstrição pulmonar.",
      B: "Aumentar hipercapnia permissiva.",
      C: "Corrigir hipóxia, hipercapnia e acidose, sustentar pressão sistêmica, otimizar VD e considerar vasodilatador pulmonar seletivo.",
      D: "Fazer beta-bloqueador em bolus como primeira medida.",
      E: "Reduzir PAM para diminuir trabalho cardíaco."
    },
    resposta: "C",
    comentario: "Hipóxia, hipercapnia e acidose aumentam RVP e podem precipitar falência de VD. É necessário reduzir RVP, manter perfusão coronariana do VD e usar suporte vasoativo/inotrópico conforme necessidade.",
    frase_ouro: "VD em crise precisa de pulmão aberto, pressão sistêmica e menos resistência pulmonar."
  },
  {
    id: "yao-048-002",
    fonte: "Yao",
    capitulo: "Transplante cardíaco",
    tema: "Fisiologia do transplantado",
    dificuldade: "alta",
    pergunta: "Paciente transplantado cardíaco apresenta bradicardia sintomática após anestesia. A equipe sugere atropina. Qual consideração é correta?",
    alternativas: {
      A: "Atropina sempre corrige prontamente porque o vago está hiperativo.",
      B: "Atropina pode não funcionar de forma confiável no coração denervado; pode ser necessário usar drogas cronotrópicas diretas ou pacing.",
      C: "Beta-bloqueador é primeira linha para bradicardia.",
      D: "A denervação impede qualquer resposta a catecolaminas circulantes.",
      E: "Bradicardia no transplantado nunca tem repercussão."
    },
    resposta: "B",
    comentario: "O coração transplantado é denervado, então drogas dependentes de bloqueio vagal, como atropina, podem ter pouca resposta. Agonistas diretos ou pacing podem ser necessários.",
    frase_ouro: "No transplantado, atropina pode tocar uma campainha sem fio ligado."
  },
  {
    id: "yao-048-003",
    fonte: "Yao",
    capitulo: "Cardiopatias congênitas",
    tema: "Tetralogia de Fallot",
    dificuldade: "alta",
    pergunta: "Criança com Tetralogia de Fallot não corrigida chora na indução, dessatura para 62%, fica taquicárdica e cianótica. Qual combinação de medidas é fisiologicamente coerente?",
    alternativas: {
      A: "Reduzir RVS com vasodilatador e manter choro.",
      B: "Aumentar RVP com hipercapnia e acidose.",
      C: "Aprofundar anestesia, administrar oxigênio, corrigir acidose/hipovolemia, aumentar RVS com vasopressor e considerar beta-bloqueio para espasmo infundibular.",
      D: "Suspender oxigênio para evitar fechamento do canal arterial.",
      E: "Induzir hipotensão para reduzir trabalho cardíaco."
    },
    resposta: "C",
    comentario: "Na crise hipercianótica, há aumento de shunt direita-esquerda. Aumentar RVS reduz shunt sistêmico, enquanto oxigênio, correção de acidose e redução de estímulo simpático ajudam a restaurar fluxo pulmonar.",
    frase_ouro: "Na crise hipercianótica, aumente RVS e convença o sangue a ir ao pulmão."
  },
  {
    id: "yao-048-004",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Pré-eclâmpsia grave",
    dificuldade: "alta",
    pergunta: "Gestante com pré-eclâmpsia grave chega para cesárea urgente. PA 180/115, cefaleia intensa, plaquetas 78.000, edema importante e epigastralgia. Qual raciocínio anestésico é mais adequado?",
    alternativas: {
      A: "Realizar neuraxial sem avaliar coagulação, pois pré-eclâmpsia sempre protege contra sangramento.",
      B: "Ignorar PA, pois hipertensão materna melhora fluxo uteroplacentário.",
      C: "Planejar controle pressórico, prevenção de eclâmpsia, avaliar plaquetas/coagulação para neuraxial e preparar via aérea difícil se anestesia geral for necessária.",
      D: "Administrar grandes volumes para todos os casos, independentemente de edema pulmonar.",
      E: "Evitar sulfato de magnésio por ser sempre contraindicado."
    },
    resposta: "C",
    comentario: "Pré-eclâmpsia grave exige controle pressórico, magnésio quando indicado, avaliação de plaquetas/coagulação, cuidado com fluidos e planejamento de via aérea, pois edema pode dificultar intubação.",
    frase_ouro: "Pré-eclâmpsia grave é cérebro, coagulação, pulmão e via aérea no mesmo caso."
  },
  {
    id: "yao-048-005",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Laringoespasmo",
    dificuldade: "alta",
    pergunta: "Criança de 4 anos, após amigdalectomia, apresenta esforço inspiratório sem fluxo, dessaturação rápida e ausência de capnografia efetiva após extubação. Qual conduta sequencial é adequada?",
    alternativas: {
      A: "Aguardar fadiga para confirmar diagnóstico.",
      B: "Aplicar oxigênio 100%, pressão positiva contínua, remover estímulo, aprofundar anestesia e usar bloqueador neuromuscular se persistente.",
      C: "Fazer diurético e observar.",
      D: "Administrar beta-bloqueador para reduzir consumo de oxigênio.",
      E: "Reduzir FiO2 para evitar absorção de atelectasia."
    },
    resposta: "B",
    comentario: "Laringoespasmo é emergência de oxigenação. A sequência inclui remover estímulo, oxigênio, pressão positiva, aprofundamento e, se necessário, succinilcolina ou outro relaxante com ventilação/intubação.",
    frase_ouro: "Laringoespasmo pediátrico não espera: oxigênio e abertura de via aérea vêm primeiro."
  },
  {
    id: "yao-048-006",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "TCE grave",
    dificuldade: "alta",
    pergunta: "Paciente vítima de TCE grave chega para craniotomia. PA 85/50, SpO2 89%, pupila anisocórica e sinais de hipertensão intracraniana. Qual conduta anestésica inicial protege melhor contra lesão secundária?",
    alternativas: {
      A: "Priorizar oxigenação, corrigir hipotensão, evitar hipercapnia importante e manter pressão de perfusão cerebral.",
      B: "Induzir hipotensão profunda para reduzir sangramento.",
      C: "Permitir hipoxemia para reduzir radicais livres.",
      D: "Administrar vasodilatador cerebral antes de proteger via aérea.",
      E: "Evitar monitorização arterial em todos os casos."
    },
    resposta: "A",
    comentario: "Hipotensão e hipoxemia são importantes causas de lesão cerebral secundária. A prioridade é oxigenação, ventilação, pressão arterial adequada e controle de PIC conforme necessidade.",
    frase_ouro: "No TCE, hipotensão e hipóxia são a segunda pancada."
  },
  {
    id: "yao-048-007",
    fonte: "Yao",
    capitulo: "Cirurgia torácica",
    tema: "Ventilação monopulmonar",
    dificuldade: "alta",
    pergunta: "Durante lobectomia em ventilação monopulmonar, a SpO2 cai para 82%. A pressão de vias aéreas aumentou e a ausculta sugere ventilação inadequada. Qual primeira linha de raciocínio é mais correta?",
    alternativas: {
      A: "Assumir que é inevitável e não intervir.",
      B: "Checar posição do tubo de duplo lúmen/bloqueador, ventilação do pulmão dependente, secreções e causas reversíveis antes de medidas avançadas.",
      C: "Reduzir FiO2 para 21%.",
      D: "Desconectar o ventilador por vários minutos.",
      E: "Administrar protamina."
    },
    resposta: "B",
    comentario: "Hipoxemia na ventilação monopulmonar exige verificar posicionamento do dispositivo, ventilação do pulmão dependente, secreções, broncoespasmo, hemodinâmica e aplicação de PEEP/CPAP se indicado.",
    frase_ouro: "Na OLV, antes de culpar a fisiologia, confira se o tubo está onde deveria."
  },
  {
    id: "yao-048-008",
    fonte: "Yao",
    capitulo: "Hepatobiliar",
    tema: "Cirrótico para cirurgia",
    dificuldade: "alta",
    pergunta: "Paciente cirrótico com ascite volumosa, INR elevado, plaquetas 58.000 e encefalopatia leve será submetido a laparotomia. Qual preocupação anestésica é mais apropriada?",
    alternativas: {
      A: "Coagulopatia, sangramento, aspiração, alteração de metabolismo de fármacos, instabilidade hemodinâmica e risco de piora neurológica.",
      B: "Função hepática normal desde que creatinina seja normal.",
      C: "Ausência de risco de hipoglicemia.",
      D: "Necessidade obrigatória de anti-inflamatório não esteroidal.",
      E: "Contraindicação absoluta de qualquer anestesia."
    },
    resposta: "A",
    comentario: "Doença hepática avançada altera coagulação, volume, metabolismo, glicose, função renal e sistema nervoso central. Ascite aumenta risco respiratório e aspiração.",
    frase_ouro: "Cirrótico grave traz para a sala coagulação frágil, volume difícil e fármaco imprevisível."
  },
  {
    id: "yao-048-009",
    fonte: "Yao",
    capitulo: "Endócrino",
    tema: "Crise tireotóxica",
    dificuldade: "alta",
    pergunta: "Paciente com hipertireoidismo não controlado evolui no intraoperatório com hipertermia, taquicardia extrema, hipertensão, agitação e arritmia. Qual diagnóstico e conduta são mais coerentes?",
    alternativas: {
      A: "Crise tireotóxica; suporte, controle adrenérgico, antitireoidianos, iodo após antitireoidiano, corticoide e tratamento de hipertermia.",
      B: "Hipotireoidismo; administrar apenas levotiroxina em bolus.",
      C: "Toxicidade por anestésico local; tratar apenas com lipídio.",
      D: "Bloqueio neuromuscular residual; administrar sugamadex e ignorar temperatura.",
      E: "Hipoglicemia simples; administrar glicose e encerrar avaliação."
    },
    resposta: "A",
    comentario: "Crise tireotóxica é emergência hipermetabólica com instabilidade cardiovascular e hipertermia. O tratamento é multimodal e inclui controle simpático e redução de produção/liberação hormonal.",
    frase_ouro: "Crise tireotóxica é metabolismo em incêndio com coração pagando a conta."
  },
  {
    id: "yao-048-010",
    fonte: "Yao",
    capitulo: "Renal",
    tema: "Hipercalemia perioperatória",
    dificuldade: "alta",
    pergunta: "Paciente renal crônico chega para cirurgia urgente com K 6,8 mEq/L e ECG com ondas T apiculadas e alargamento de QRS. Qual sequência inicial é mais segura?",
    alternativas: {
      A: "Cálcio intravenoso para estabilizar membrana, seguido de medidas para deslocar potássio para o intracelular e remover potássio do corpo.",
      B: "Administrar potássio para estabilizar gradiente.",
      C: "Fazer apenas furosemida e iniciar indução imediatamente.",
      D: "Ignorar o ECG se o paciente estiver acordado.",
      E: "Administrar succinilcolina como tratamento da hipercalemia."
    },
    resposta: "A",
    comentario: "Com ECG alterado, cálcio IV é prioridade para estabilizar o miocárdio. Depois entram insulina/glicose, beta-agonista, bicarbonato quando indicado e remoção por diálise/resinas/diurese conforme contexto.",
    frase_ouro: "Hipercalemia com QRS largo: primeiro proteja o coração, depois tire o potássio."
  },
  {
    id: "yao-049-001",
    fonte: "Yao",
    capitulo: "Trauma",
    tema: "Choque hemorrágico",
    dificuldade: "alta",
    pergunta: "Vítima de trauma chega hipotensa, fria, confusa, com FAST positivo e suspeita de hemorragia abdominal. Antes do controle cirúrgico, qual estratégia é mais adequada?",
    alternativas: {
      A: "Ressuscitação hemostática, aquecimento, cálcio, acesso calibroso e controle rápido do sangramento.",
      B: "Cristaloide ilimitado até normalizar completamente a pressão.",
      C: "Aguardar todos os exames laboratoriais antes de acionar cirurgia.",
      D: "Hipotermia terapêutica profunda não monitorizada.",
      E: "Evitar transfusão apesar de choque."
    },
    resposta: "A",
    comentario: "Choque hemorrágico exige controle de fonte, transfusão balanceada, correção de hipotermia, acidose, hipocalcemia e coagulopatia, evitando excesso de cristaloide.",
    frase_ouro: "No trauma sangrando, o tratamento definitivo é fechar a torneira."
  },
  {
    id: "yao-049-002",
    fonte: "Yao",
    capitulo: "Obesidade",
    tema: "Indução anestésica",
    dificuldade: "alta",
    pergunta: "Paciente obeso mórbido, apneia obstrutiva do sono e refluxo será submetido a colecistectomia. Qual estratégia reduz risco de dessaturação e aspiração na indução?",
    alternativas: {
      A: "Evitar pré-oxigenação para reduzir atelectasia.",
      B: "Posicionamento em rampa, pré-oxigenação adequada, plano de via aérea, considerar sequência rápida conforme risco e equipe preparada.",
      C: "Induzir em decúbito horizontal obrigatório sem material alternativo.",
      D: "Administrar opioide em dose alta antes de monitorizar.",
      E: "Usar sedação profunda sem controle de via aérea em todos os casos."
    },
    resposta: "B",
    comentario: "Obesidade reduz reserva respiratória e aumenta risco de via aérea difícil/aspiração. Rampa, pré-oxigenação e estratégia de via aérea são essenciais.",
    frase_ouro: "No obeso, posição e oxigênio antes da indução compram tempo precioso."
  },
  {
    id: "yao-049-003",
    fonte: "Yao",
    capitulo: "Hipertermia maligna",
    tema: "Crise intraoperatória",
    dificuldade: "alta",
    pergunta: "Durante anestesia com sevoflurano e succinilcolina, paciente apresenta aumento rápido de EtCO2, rigidez, taquicardia, acidose e hipertermia tardia. Qual conduta é mais adequada?",
    alternativas: {
      A: "Suspender gatilhos, administrar dantrolene, hiperventilar com oxigênio 100%, resfriar e tratar acidose/hipercalemia.",
      B: "Aumentar sevoflurano para aprofundar anestesia.",
      C: "Administrar succinilcolina adicional.",
      D: "Tratar apenas com antitérmico comum.",
      E: "Aguardar confirmação laboratorial antes de agir."
    },
    resposta: "A",
    comentario: "Hipertermia maligna é emergência. Suspende-se agentes desencadeantes, administra-se dantrolene e faz-se suporte agressivo para hipercapnia, acidose, hipertermia, hipercalemia e rabdomiólise.",
    frase_ouro: "Na hipertermia maligna, EtCO2 sobe antes da temperatura avisar."
  },
  {
    id: "yao-049-004",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Toxicidade sistêmica por anestésico local",
    dificuldade: "alta",
    pergunta: "Durante bloqueio interescalênico, paciente refere gosto metálico, zumbido, evolui com convulsão e depois taquiarritmia. Qual diagnóstico e conduta são mais adequados?",
    alternativas: {
      A: "Toxicidade sistêmica por anestésico local; interromper injeção, suporte de via aérea/convulsão e iniciar emulsão lipídica conforme protocolo.",
      B: "Hipoglicemia isolada; administrar apenas glicose.",
      C: "Reação vagal simples; observar sem monitorização.",
      D: "Hipertermia maligna; administrar dantrolene como única medida.",
      E: "Bloqueio neuromuscular residual; administrar sugamadex."
    },
    resposta: "A",
    comentario: "Sinais neurológicos seguidos de toxicidade cardiovascular após anestésico local sugerem LAST. Tratamento inclui suporte avançado e emulsão lipídica.",
    frase_ouro: "LAST começa no cérebro e pode terminar no coração; lipídio precisa estar perto."
  },
  {
    id: "yao-049-005",
    fonte: "Yao",
    capitulo: "Anafilaxia",
    tema: "Colapso após indução",
    dificuldade: "alta",
    pergunta: "Logo após rocurônio, paciente apresenta hipotensão profunda, broncoespasmo, dificuldade ventilatória e rash discreto sob campos. Qual é a conduta inicial mais adequada?",
    alternativas: {
      A: "Aguardar porque rash discreto exclui anafilaxia.",
      B: "Tratar como anafilaxia: adrenalina, oxigênio 100%, fluidos, suspender agente suspeito e suporte avançado.",
      C: "Administrar beta-bloqueador para broncoespasmo.",
      D: "Fazer diurético e reduzir FiO2.",
      E: "Prosseguir sem avisar equipe cirúrgica."
    },
    resposta: "B",
    comentario: "Anafilaxia perioperatória pode manifestar-se principalmente por colapso cardiovascular e broncoespasmo; sinais cutâneos podem ser ocultos. Adrenalina é central.",
    frase_ouro: "Anafilaxia grave não espera urticária bonita para receber adrenalina."
  },
  {
    id: "yao-049-006",
    fonte: "Yao",
    capitulo: "Cirurgia laparoscópica",
    tema: "Embolia gasosa",
    dificuldade: "alta",
    pergunta: "Durante insuflação laparoscópica, ocorre queda abrupta de EtCO2 de 35 para 12 mmHg, hipotensão severa e dessaturação. Qual hipótese e conduta inicial são mais adequadas?",
    alternativas: {
      A: "Hipoglicemia; administrar glicose e manter insuflação.",
      B: "Embolia gasosa venosa; interromper insuflação, desinsuflar, oxigênio 100%, suporte hemodinâmico e posicionamento/aspiração por CVC se disponível.",
      C: "Plano anestésico superficial; aumentar apenas opioide.",
      D: "Curarização residual; administrar sugamadex.",
      E: "Retenção urinária; sondar e observar."
    },
    resposta: "B",
    comentario: "Queda abrupta de EtCO2 com colapso durante insuflação sugere embolia gasosa. Deve-se interromper fonte de gás, oxigenar, suportar circulação e considerar aspiração se cateter adequado.",
    frase_ouro: "EtCO2 despencou na insuflação: pense em gás onde não devia."
  },
  {
    id: "yao-049-007",
    fonte: "Yao",
    capitulo: "Ortopedia",
    tema: "Síndrome do cimento ósseo",
    dificuldade: "alta",
    pergunta: "Idoso com fratura de quadril, hipertensão pulmonar leve e reserva cardíaca limitada faz hipotensão, hipoxemia e aumento de pressão pulmonar após cimentação da prótese. Qual fisiologia é mais provável?",
    alternativas: {
      A: "Síndrome de implantação do cimento ósseo com embolização/vasoconstrição pulmonar e sobrecarga de VD.",
      B: "Efeito analgésico esperado.",
      C: "Hipervolemia benigna sem risco.",
      D: "Bloqueio espinhal tardio sempre.",
      E: "Intoxicação por glicose."
    },
    resposta: "A",
    comentario: "A síndrome do cimento ósseo pode causar embolização medular/gordurosa, aumento de resistência pulmonar, hipóxia, hipotensão e falência de VD.",
    frase_ouro: "Cimento pode transformar um quadril em crise de ventrículo direito."
  },
  {
    id: "yao-049-008",
    fonte: "Yao",
    capitulo: "Urologia",
    tema: "Síndrome pós-RTU",
    dificuldade: "alta",
    pergunta: "Durante RTU de próstata prolongada, paciente sob raquianestesia evolui com confusão, hipertensão, bradicardia, náuseas e sódio 118 mEq/L. Qual diagnóstico e conduta são mais prováveis?",
    alternativas: {
      A: "Síndrome pós-RTU por absorção de irrigação hipotônica; interromper procedimento, tratar hiponatremia conforme gravidade e dar suporte.",
      B: "Hipernatremia por desidratação.",
      C: "Anafilaxia a látex como única hipótese.",
      D: "Hipertermia maligna desencadeada por raquianestesia.",
      E: "Toxicidade por sugamadex."
    },
    resposta: "A",
    comentario: "Absorção de irrigação hipotônica pode causar hiponatremia dilucional e sintomas neurológicos/cardiovasculares, especialmente em procedimentos prolongados.",
    frase_ouro: "Na RTU prolongada, irrigação absorvida pode afogar o sódio."
  },
  {
    id: "yao-049-009",
    fonte: "Yao",
    capitulo: "Oftalmologia",
    tema: "Reflexo óculo-cardíaco",
    dificuldade: "média",
    pergunta: "Durante correção de estrabismo em criança, tração muscular causa FC cair de 110 para 45 bpm. Qual conduta inicial é adequada?",
    alternativas: {
      A: "Solicitar interrupção da tração, garantir oxigenação/profundidade e tratar bradicardia se persistente.",
      B: "Aumentar imediatamente a tração.",
      C: "Ignorar porque nunca causa repercussão.",
      D: "Administrar nitroprussiato.",
      E: "Reduzir oxigênio."
    },
    resposta: "A",
    comentario: "O reflexo óculo-cardíaco é vagal. A primeira medida é parar estímulo, otimizar oxigenação e profundidade; anticolinérgico pode ser necessário.",
    frase_ouro: "No reflexo óculo-cardíaco, soltar o olho muitas vezes solta o vago."
  },
  {
    id: "yao-049-010",
    fonte: "Yao",
    capitulo: "Cirurgia de via aérea",
    tema: "Incêndio de via aérea",
    dificuldade: "alta",
    pergunta: "Durante cirurgia laríngea com laser, ocorre fogo na via aérea. Qual sequência inicial é mais correta?",
    alternativas: {
      A: "Manter laser ligado e aumentar FiO2.",
      B: "Interromper ventilação e gases, remover tubo em chamas, apagar fogo, ventilar com oxigênio/ar após controle e broncoscopar para avaliar lesão.",
      C: "Administrar apenas broncodilatador e continuar cirurgia.",
      D: "Ignorar se saturação ainda estiver boa.",
      E: "Injetar anestésico local no cuff."
    },
    resposta: "B",
    comentario: "Incêndio de via aérea exige parada imediata de gases e laser, remoção do material em chamas, extinção do fogo, reestabelecimento seguro da ventilação e avaliação de lesão.",
    frase_ouro: "Fogo em via aérea: pare oxidante, tire combustível e só depois volte a ventilar."
  },
  {
    id: "yao-050-001",
    fonte: "Yao",
    capitulo: "Transplante hepático",
    tema: "Síndrome pós-reperfusão",
    dificuldade: "alta",
    pergunta: "Paciente cirrótico Child-Pugh C está em transplante hepático. Logo após reperfusão do enxerto, apresenta queda abrupta da PAM, bradicardia, aumento de potássio, acidose e redução do débito cardíaco. Qual interpretação é mais adequada?",
    alternativas: {
      A: "Síndrome pós-reperfusão, relacionada ao retorno de metabólitos, potássio, mediadores inflamatórios e alterações hemodinâmicas após reperfusão do enxerto.",
      B: "Reação normal sem repercussão, que nunca exige tratamento.",
      C: "Hipertermia maligna obrigatória por reperfusão hepática.",
      D: "Toxicidade por anestésico local.",
      E: "Reflexo óculo-cardíaco."
    },
    resposta: "A",
    comentario: "A síndrome pós-reperfusão pode ocorrer após liberação do fluxo para o enxerto hepático, com hipotensão, bradicardia, hipercalemia, acidose e instabilidade cardiovascular.",
    frase_ouro: "Na reperfusão hepática, o enxerto devolve para a circulação tudo que ficou represado."
  },
  {
    id: "yao-050-002",
    fonte: "Yao",
    capitulo: "Transplante hepático",
    tema: "Coagulopatia",
    dificuldade: "alta",
    pergunta: "Durante transplante hepático, paciente apresenta sangramento difuso, fibrinogênio baixo no ROTEM e plaquetopenia. Qual conduta é mais coerente?",
    alternativas: {
      A: "Administrar apenas cristaloide até normalizar pressão.",
      B: "Repor componentes guiados por mecanismo, incluindo fibrinogênio/crioprecipitado e plaquetas conforme testes e sangramento.",
      C: "Evitar aquecimento para melhorar coagulação.",
      D: "Administrar protamina obrigatoriamente mesmo sem heparina.",
      E: "Ignorar cálcio ionizado durante transfusão."
    },
    resposta: "B",
    comentario: "No transplante hepático, a coagulopatia é dinâmica e multifatorial. Testes viscoelásticos ajudam a direcionar fibrinogênio, plaquetas, plasma e antifibrinolítico quando indicado.",
    frase_ouro: "No transplante hepático, sangramento se trata com fisiologia do coágulo, não com hemoderivado no escuro."
  },
  {
    id: "yao-050-003",
    fonte: "Yao",
    capitulo: "Transplante hepático",
    tema: "Fase anepática",
    dificuldade: "alta",
    pergunta: "Durante a fase anepática do transplante hepático, qual alteração metabólica deve ser antecipada?",
    alternativas: {
      A: "Metabolismo hepático normal de lactato e citrato.",
      B: "Maior risco de acidose, hipocalcemia por citrato e alteração da depuração de fármacos/metabólitos.",
      C: "Eliminação completa do risco de sangramento.",
      D: "Hipernatremia obrigatória por excesso de aldosterona.",
      E: "Impossibilidade de hipoglicemia."
    },
    resposta: "B",
    comentario: "Na fase anepática, há ausência temporária de função hepática, comprometendo metabolismo de lactato, citrato e fármacos, além de contribuir para distúrbios ácido-base e eletrolíticos.",
    frase_ouro: "Sem fígado no circuito, citrato, lactato e fármacos ficam sem alfândega."
  },
  {
    id: "yao-051-001",
    fonte: "Yao",
    capitulo: "Transplante renal",
    tema: "Reperfusão do enxerto",
    dificuldade: "alta",
    pergunta: "Paciente renal crônico em transplante renal recebe o enxerto. Antes da reperfusão, qual meta anestésica é desejável para favorecer perfusão inicial do rim transplantado?",
    alternativas: {
      A: "Hipotensão permissiva prolongada.",
      B: "Manter volemia e pressão arterial adequadas, evitando hipoperfusão do enxerto.",
      C: "Usar diurético como substituto de pressão perfusora.",
      D: "Manter hipovolemia para evitar edema renal.",
      E: "Reduzir oxigenação para diminuir radicais livres."
    },
    resposta: "B",
    comentario: "O enxerto renal depende de pressão de perfusão e volemia adequadas na reperfusão. Hipotensão prolongada pode comprometer função inicial do enxerto.",
    frase_ouro: "Rim transplantado chega pedindo fluxo, não hipotensão."
  },
  {
    id: "yao-051-002",
    fonte: "Yao",
    capitulo: "Transplante renal",
    tema: "Hipercalemia",
    dificuldade: "média",
    pergunta: "Paciente em diálise crônica chega para transplante renal com potássio elevado. Qual droga deve ser evitada se houver risco de hipercalemia relevante?",
    alternativas: {
      A: "Succinilcolina.",
      B: "Propofol titulado.",
      C: "Fentanil.",
      D: "Cisatracúrio.",
      E: "Sevoflurano."
    },
    resposta: "A",
    comentario: "A succinilcolina pode elevar potássio sérico. Em paciente renal crônico com hipercalemia significativa, seu uso pode ser perigoso.",
    frase_ouro: "Em renal crônico hipercalêmico, succinilcolina pode ser fósforo no barril de potássio."
  },
  {
    id: "yao-051-003",
    fonte: "Yao",
    capitulo: "Transplante renal",
    tema: "Fármacos",
    dificuldade: "média",
    pergunta: "Em paciente com insuficiência renal terminal, qual bloqueador neuromuscular tem vantagem por metabolismo predominantemente por degradação de Hofmann e esterases plasmáticas?",
    alternativas: {
      A: "Pancurônio.",
      B: "Cisatracúrio.",
      C: "Vecurônio em dose alta repetida.",
      D: "Succinilcolina em infusão contínua.",
      E: "Doxacúrio."
    },
    resposta: "B",
    comentario: "Cisatracúrio sofre degradação de Hofmann e tem menor dependência renal, sendo útil em pacientes com insuficiência renal.",
    frase_ouro: "No rim ruim, cisatracúrio evita depender da saída renal."
  },
  {
    id: "yao-052-001",
    fonte: "Yao",
    capitulo: "Cirurgia endócrina",
    tema: "Tireoidectomia",
    dificuldade: "alta",
    pergunta: "Após tireoidectomia total, paciente evolui na sala de recuperação com estridor, agitação e aumento de volume cervical. Qual conduta é mais adequada?",
    alternativas: {
      A: "Observar por 2 horas, pois hematoma cervical nunca comprime via aérea.",
      B: "Suspeitar de hematoma cervical compressivo, chamar cirurgião e preparar abertura da ferida/controle urgente da via aérea.",
      C: "Administrar diurético e liberar alta.",
      D: "Fazer apenas antiemético.",
      E: "Administrar beta-bloqueador como primeira medida."
    },
    resposta: "B",
    comentario: "Hematoma cervical pós-tireoidectomia pode comprimir rapidamente a via aérea. A ferida pode precisar ser aberta emergencialmente enquanto se prepara controle definitivo da via aérea.",
    frase_ouro: "Hematoma cervical não espera tomografia; espera tesoura e via aérea pronta."
  },
  {
    id: "yao-052-002",
    fonte: "Yao",
    capitulo: "Cirurgia endócrina",
    tema: "Lesão de nervo laríngeo recorrente",
    dificuldade: "média",
    pergunta: "Após tireoidectomia, rouquidão persistente sugere lesão de qual estrutura?",
    alternativas: {
      A: "Nervo frênico bilateral sempre.",
      B: "Nervo laríngeo recorrente.",
      C: "Nervo radial.",
      D: "Nervo femoral.",
      E: "Nervo óptico."
    },
    resposta: "B",
    comentario: "O nervo laríngeo recorrente inerva a maioria dos músculos intrínsecos da laringe. Sua lesão pode causar rouquidão e, se bilateral, obstrução de via aérea.",
    frase_ouro: "Depois da tireoide, voz rouca lembra nervo recorrente."
  },
  {
    id: "yao-052-003",
    fonte: "Yao",
    capitulo: "Cirurgia endócrina",
    tema: "Hipocalcemia pós-tireoidectomia",
    dificuldade: "média",
    pergunta: "Paciente apresenta parestesias, câimbras e sinal de Chvostek após tireoidectomia total. Qual distúrbio deve ser suspeitado?",
    alternativas: {
      A: "Hipercalemia.",
      B: "Hipocalcemia por hipoparatireoidismo pós-operatório.",
      C: "Hipernatremia.",
      D: "Hiperglicemia por insulina.",
      E: "Acidose respiratória isolada."
    },
    resposta: "B",
    comentario: "Manipulação ou lesão das paratireoides pode causar hipocalcemia após tireoidectomia, com parestesias, tetania, câimbras e sinais neuromusculares.",
    frase_ouro: "Depois da tireoide, formigamento pode ser paratireoide pedindo cálcio."
  },
  {
    id: "yao-053-001",
    fonte: "Yao",
    capitulo: "Neurocirurgia",
    tema: "Craniotomia sentada",
    dificuldade: "alta",
    pergunta: "Durante craniotomia em posição sentada, ocorre queda abrupta de EtCO2, hipotensão e sopro cardíaco sugestivo. Qual complicação deve ser considerada?",
    alternativas: {
      A: "Embolia aérea venosa.",
      B: "Hipoglicemia simples.",
      C: "Síndrome pós-RTU.",
      D: "Bloqueio neuromuscular residual.",
      E: "Hiperaldosteronismo primário."
    },
    resposta: "A",
    comentario: "Posição sentada em neurocirurgia aumenta risco de entrada de ar venoso. Queda de EtCO2 e instabilidade podem indicar embolia aérea venosa.",
    frase_ouro: "Na posição sentada, veia acima do coração pode aspirar ar."
  },
  {
    id: "yao-053-002",
    fonte: "Yao",
    capitulo: "Neurocirurgia",
    tema: "Embolia aérea venosa",
    dificuldade: "alta",
    pergunta: "Na suspeita de embolia aérea venosa durante neurocirurgia, qual conduta inicial é apropriada?",
    alternativas: {
      A: "Avisar cirurgião para inundar campo/interromper entrada de ar, administrar oxigênio 100%, suporte hemodinâmico e aspirar ar por cateter venoso central se posicionado.",
      B: "Aumentar óxido nitroso.",
      C: "Reduzir FiO2 para 21%.",
      D: "Manter campo seco e elevado.",
      E: "Administrar diurético como tratamento principal."
    },
    resposta: "A",
    comentario: "O tratamento inclui impedir nova entrada de ar, oxigênio 100%, suporte cardiovascular, posicionamento conforme contexto e aspiração por cateter se possível.",
    frase_ouro: "Embolia aérea: feche a entrada, dê oxigênio e sustente o débito."
  },
  {
    id: "yao-053-003",
    fonte: "Yao",
    capitulo: "Neurocirurgia",
    tema: "Potenciais evocados",
    dificuldade: "alta",
    pergunta: "Durante cirurgia de coluna com monitorização de potenciais evocados motores, qual técnica anestésica tende a preservar melhor o sinal?",
    alternativas: {
      A: "Alta concentração de halogenado e bloqueio neuromuscular profundo contínuo.",
      B: "Técnica intravenosa titulada, evitando bloqueio neuromuscular significativo após intubação.",
      C: "Ausência de qualquer anestesia.",
      D: "Uso obrigatório de succinilcolina em infusão.",
      E: "Hipotensão profunda mantida."
    },
    resposta: "B",
    comentario: "MEP é sensível a agentes inalatórios e bloqueio neuromuscular. Técnica intravenosa e mínimo relaxante após intubação ajudam a preservar monitorização.",
    frase_ouro: "MEP precisa de músculo respondendo e anestesia que não apague o sinal."
  },
  {
    id: "yao-054-001",
    fonte: "Yao",
    capitulo: "Cirurgia vascular periférica",
    tema: "Isquemia de membro",
    dificuldade: "média",
    pergunta: "Após revascularização de membro inferior, paciente apresenta dor intensa, parestesia, palidez, ausência de pulso e déficit motor. Qual diagnóstico deve ser considerado urgentemente?",
    alternativas: {
      A: "Isquemia aguda de membro ou falha/trombose do enxerto.",
      B: "Náusea pós-operatória simples.",
      C: "Hipoglicemia leve.",
      D: "Síndrome pós-RTU.",
      E: "Bloqueio residual isolado."
    },
    resposta: "A",
    comentario: "Dor, palidez, parestesia, paralisia e ausência de pulso sugerem isquemia aguda, exigindo avaliação vascular imediata.",
    frase_ouro: "Depois de revascularizar, pulso sumido é urgência, não detalhe."
  },
  {
    id: "yao-054-002",
    fonte: "Yao",
    capitulo: "Cirurgia vascular periférica",
    tema: "Reperfusão",
    dificuldade: "alta",
    pergunta: "Após reperfusão de membro isquêmico por horas, qual alteração metabólica pode ocorrer?",
    alternativas: {
      A: "Hipercalemia, acidose, mioglobinúria e instabilidade hemodinâmica.",
      B: "Hipocalemia obrigatória e alcalose intensa.",
      C: "Redução de lactato por ausência de metabolismo anaeróbio.",
      D: "Impossibilidade de lesão renal.",
      E: "Correção automática de choque."
    },
    resposta: "A",
    comentario: "Reperfusão de tecido isquêmico pode liberar potássio, ácido, mioglobina e mediadores inflamatórios, com risco de arritmia, acidose, hipotensão e lesão renal.",
    frase_ouro: "Reperfusão salva membro, mas devolve potássio, ácido e mioglobina."
  },
  {
    id: "yao-055-001",
    fonte: "Yao",
    capitulo: "Cirurgia carotídea",
    tema: "Endarterectomia",
    dificuldade: "alta",
    pergunta: "Durante endarterectomia de carótida sob anestesia geral, após clampeamento carotídeo ocorre queda de amplitude em monitorização neurológica. Qual conduta é mais coerente?",
    alternativas: {
      A: "Reduzir pressão arterial para diminuir fluxo cerebral.",
      B: "Aumentar pressão arterial, otimizar oxigenação/hemoglobina e discutir shunt com cirurgião.",
      C: "Administrar diurético imediatamente.",
      D: "Ignorar, pois clamp carotídeo nunca reduz perfusão.",
      E: "Induzir hipocapnia extrema por tempo prolongado."
    },
    resposta: "B",
    comentario: "Alteração neurológica durante clampeamento sugere hipoperfusão cerebral. Aumentar pressão perfusora, otimizar oferta de oxigênio e considerar shunt são medidas adequadas.",
    frase_ouro: "Clamp carotídeo que muda monitor pede mais fluxo ou caminho alternativo."
  },
  {
    id: "yao-055-002",
    fonte: "Yao",
    capitulo: "Cirurgia carotídea",
    tema: "Pressão arterial pós-operatória",
    dificuldade: "média",
    pergunta: "Após endarterectomia de carótida, por que hipertensão deve ser tratada com cuidado?",
    alternativas: {
      A: "Pode aumentar risco de sangramento cervical e síndrome de hiperperfusão cerebral.",
      B: "Sempre melhora cicatrização sem risco.",
      C: "Impede hematoma.",
      D: "É obrigatória para todos os pacientes por 48 horas.",
      E: "Não tem relação com complicações neurológicas."
    },
    resposta: "A",
    comentario: "Hipertensão após endarterectomia pode contribuir para hematoma cervical, sangramento e hiperperfusão cerebral, especialmente em pacientes com autorregulação alterada.",
    frase_ouro: "Depois da carótida, pressão demais pode sangrar o pescoço e inundar o cérebro."
  },
  {
    id: "yao-056-001",
    fonte: "Yao",
    capitulo: "Cirurgia cardíaca",
    tema: "NIRS cerebral",
    dificuldade: "alta",
    pergunta: "Durante cirurgia cardíaca, NIRS cerebral cai bilateralmente após início da CEC. Qual conduta é mais adequada?",
    alternativas: {
      A: "Ignorar, pois NIRS não se altera com perfusão.",
      B: "Avaliar fluxo de bomba, pressão arterial, hemoglobina, oxigenação, PaCO2, posição de cânulas e profundidade anestésica.",
      C: "Reduzir FiO2 imediatamente.",
      D: "Diminuir fluxo de bomba como primeira medida.",
      E: "Administrar protamina antes da saída da CEC."
    },
    resposta: "B",
    comentario: "Queda bilateral de NIRS pode refletir redução global de oferta cerebral por fluxo, pressão, anemia, hipoxemia, hipocapnia ou problemas de perfusão.",
    frase_ouro: "NIRS baixo é oferta cerebral pedindo auditoria: fluxo, pressão, sangue, oxigênio e CO2."
  },
  {
    id: "yao-056-002",
    fonte: "Yao",
    capitulo: "Cirurgia cardíaca",
    tema: "Fluxo de CEC",
    dificuldade: "alta",
    pergunta: "Durante CEC, paciente apresenta SvO2 baixa, lactato subindo e pressão arterial limítrofe. Qual interpretação é mais provável?",
    alternativas: {
      A: "Oferta sistêmica de oxigênio inadequada em relação ao consumo, exigindo avaliação de fluxo de bomba, hemoglobina, oxigenação e perfusão.",
      B: "Perfusão tecidual necessariamente ótima.",
      C: "Erro impossível se a bomba estiver ligada.",
      D: "Necessidade de reduzir fluxo de bomba.",
      E: "Excesso de oxigênio tecidual."
    },
    resposta: "A",
    comentario: "SvO2 baixa e lactato crescente durante CEC sugerem entrega de oxigênio inadequada. Deve-se avaliar fluxo, pressão, hemoglobina, saturação, temperatura e consumo.",
    frase_ouro: "Na CEC, fluxo adequado é aquele que entrega oxigênio, não apenas o que aparece no visor."
  },
  {
    id: "yao-057-001",
    fonte: "Yao",
    capitulo: "Cirurgia robótica",
    tema: "Trendelenburg extremo",
    dificuldade: "média",
    pergunta: "Em prostatectomia robótica com Trendelenburg acentuado e pneumoperitônio prolongado, qual preocupação anestésica é relevante?",
    alternativas: {
      A: "Edema de face/via aérea, aumento de pressão intraocular, alterações ventilatórias e acesso limitado ao paciente.",
      B: "Melhora obrigatória da complacência pulmonar.",
      C: "Ausência de risco de hipercapnia.",
      D: "Facilidade de acesso à via aérea durante todo o caso.",
      E: "Eliminação da necessidade de monitorização."
    },
    resposta: "A",
    comentario: "Trendelenburg extremo e pneumoperitônio podem reduzir complacência, aumentar pressão venosa/ocular, causar edema de via aérea e dificultar acesso ao paciente.",
    frase_ouro: "Na robótica, depois que o robô acopla, a prevenção vale mais que o improviso."
  },
  {
    id: "yao-057-002",
    fonte: "Yao",
    capitulo: "Cirurgia robótica",
    tema: "Extubação",
    dificuldade: "alta",
    pergunta: "Após cirurgia robótica prolongada em Trendelenburg extremo, paciente apresenta edema facial importante. Qual preocupação deve orientar a extubação?",
    alternativas: {
      A: "Possível edema de via aérea; avaliar segurança de extubação e considerar teste de vazamento/estratégia de reintubação.",
      B: "Edema facial garante via aérea fácil.",
      C: "Extubação obrigatória sem avaliação.",
      D: "Reduzir oxigênio para testar reserva.",
      E: "Administrar beta-bloqueador para reduzir edema."
    },
    resposta: "A",
    comentario: "Trendelenburg prolongado pode causar edema de via aérea. Extubação deve ser planejada considerando risco de obstrução e dificuldade de reintubação.",
    frase_ouro: "Edema de face depois da robótica pode ser só a ponta visível da via aérea."
  },
  {
    id: "yao-058-001",
    fonte: "Yao",
    capitulo: "Cirurgia bariátrica",
    tema: "Aspiração e via aérea",
    dificuldade: "alta",
    pergunta: "Paciente com obesidade mórbida, refluxo e apneia do sono vai para bypass gástrico. Qual plano de indução é mais apropriado?",
    alternativas: {
      A: "Rampa, pré-oxigenação prolongada, plano de via aérea difícil, considerar sequência rápida e limitar opioides quando possível.",
      B: "Sedação profunda sem acesso à via aérea.",
      C: "Decúbito horizontal obrigatório sem pré-oxigenação.",
      D: "Evitar capnografia.",
      E: "Usar opioide em dose alta como única estratégia."
    },
    resposta: "A",
    comentario: "Obesidade mórbida aumenta risco de dessaturação rápida, aspiração e via aérea difícil. Rampa, pré-oxigenação e plano de resgate são essenciais.",
    frase_ouro: "Na bariátrica, a indução começa antes do hipnótico: começa na posição."
  },
  {
    id: "yao-058-002",
    fonte: "Yao",
    capitulo: "Cirurgia bariátrica",
    tema: "Ventilação",
    dificuldade: "média",
    pergunta: "Durante cirurgia bariátrica laparoscópica, qual ajuste pode melhorar oxigenação e mecânica respiratória?",
    alternativas: {
      A: "PEEP e recrutamento cuidadosamente titulados, evitando pressões excessivas.",
      B: "Desconectar ventilador durante pneumoperitônio.",
      C: "Evitar monitorar pressão de platô.",
      D: "Manter volume corrente extremamente alto sem limite.",
      E: "Reduzir FiO2 para 21% durante indução."
    },
    resposta: "A",
    comentario: "Pacientes obesos têm atelectasia e complacência reduzida. PEEP e recrutamento podem ajudar, desde que balanceados com hemodinâmica e pressões.",
    frase_ouro: "Na obesidade, pulmão precisa de abertura — mas pressão demais também cobra."
  },
  {
    id: "yao-059-001",
    fonte: "Yao",
    capitulo: "Doença neuromuscular",
    tema: "Distrofias musculares",
    dificuldade: "alta",
    pergunta: "Criança com distrofia muscular não diagnosticada recebe succinilcolina e evolui com hipercalemia grave, arritmia e rabdomiólise. Qual mecanismo é mais provável?",
    alternativas: {
      A: "Resposta hipercalêmica exagerada por doença muscular com instabilidade de membrana.",
      B: "Reação esperada e benigna.",
      C: "Hipocalcemia por citrato.",
      D: "Toxicidade por opioide.",
      E: "Reflexo óculo-cardíaco."
    },
    resposta: "A",
    comentario: "Em algumas doenças musculares, succinilcolina pode precipitar hipercalemia grave, rabdomiólise e parada cardíaca.",
    frase_ouro: "Doença muscular e succinilcolina podem transformar fasciculação em potássio fatal."
  },
  {
    id: "yao-059-002",
    fonte: "Yao",
    capitulo: "Doença neuromuscular",
    tema: "Esclerose lateral amiotrófica",
    dificuldade: "alta",
    pergunta: "Paciente com ELA avançada será submetido a gastrostomia. Qual preocupação anestésica é central?",
    alternativas: {
      A: "Fraqueza respiratória, sensibilidade a sedativos e bloqueadores, risco de aspiração e ventilação pós-operatória.",
      B: "Ausência de risco respiratório.",
      C: "Necessidade obrigatória de succinilcolina.",
      D: "Melhora da tosse após opioide.",
      E: "Impossibilidade de retenção de CO2."
    },
    resposta: "A",
    comentario: "ELA pode comprometer musculatura respiratória e bulbar, aumentando risco de aspiração, hipoventilação e necessidade de suporte ventilatório.",
    frase_ouro: "Na ELA, a anestesia deve respeitar músculo respiratório e proteção de via aérea."
  },
  {
    id: "yao-060-001",
    fonte: "Yao",
    capitulo: "Psiquiatria e anestesia",
    tema: "Lítio",
    dificuldade: "média",
    pergunta: "Paciente em uso crônico de lítio será operado. Qual consideração anestésica é relevante?",
    alternativas: {
      A: "Lítio pode prolongar bloqueio neuromuscular e sua toxicidade aumenta com alteração renal/desidratação.",
      B: "Lítio reverte rocurônio.",
      C: "Lítio elimina necessidade de monitorização renal.",
      D: "Lítio é antídoto de anestésico local.",
      E: "Lítio impede hipotensão."
    },
    resposta: "A",
    comentario: "Lítio pode interagir com bloqueadores neuromusculares e tem margem terapêutica estreita, sendo afetado por função renal, volume e eletrólitos.",
    frase_ouro: "Lítio no perioperatório pede olho no rim, no volume e no bloqueio."
  },
  {
    id: "yao-060-002",
    fonte: "Yao",
    capitulo: "Psiquiatria e anestesia",
    tema: "IMAO",
    dificuldade: "alta",
    pergunta: "Paciente em uso de inibidor da monoamina oxidase necessita anestesia. Qual fármaco/situação exige cautela por risco de resposta hipertensiva ou serotoninérgica?",
    alternativas: {
      A: "Simpaticomiméticos indiretos e combinações serotoninérgicas.",
      B: "Oxigênio.",
      C: "Soro fisiológico em dose pequena.",
      D: "Monitorização padrão.",
      E: "Capnografia."
    },
    resposta: "A",
    comentario: "IMAO pode interagir com simpaticomiméticos indiretos e fármacos serotoninérgicos, causando instabilidade hemodinâmica ou síndrome serotoninérgica.",
    frase_ouro: "IMAO não gosta de catecolamina indireta nem serotonina em excesso."
  },
  {
    id: "yao-061-001",
    fonte: "Yao",
    capitulo: "Dependência química",
    tema: "Cocaína",
    dificuldade: "alta",
    pergunta: "Paciente usuário recente de cocaína chega para cirurgia eletiva com PA 190/110, FC 130 e dor torácica. Qual conduta é mais adequada?",
    alternativas: {
      A: "Prosseguir normalmente, pois cocaína reduz risco cardiovascular.",
      B: "Adiar cirurgia eletiva e tratar síndrome simpaticomimética/isquemia conforme necessidade.",
      C: "Administrar beta-bloqueador não seletivo isolado como primeira medida obrigatória.",
      D: "Induzir anestesia sem monitorização.",
      E: "Reduzir oxigênio para evitar vasoespasmo."
    },
    resposta: "B",
    comentario: "Uso recente de cocaína com hipertensão, taquicardia e dor torácica sugere alto risco de isquemia, arritmia e instabilidade. Cirurgia eletiva deve ser adiada.",
    frase_ouro: "Cocaína recente e dor torácica não combinam com cirurgia eletiva."
  },
  {
    id: "yao-061-002",
    fonte: "Yao",
    capitulo: "Dependência química",
    tema: "Álcool",
    dificuldade: "média",
    pergunta: "Paciente etilista pesado no pós-operatório apresenta tremores, agitação, hipertensão, taquicardia e alucinações. Qual diagnóstico deve ser considerado?",
    alternativas: {
      A: "Abstinência alcoólica ou delirium tremens.",
      B: "Bloqueio neuromuscular residual isolado.",
      C: "Síndrome pós-RTU obrigatória.",
      D: "Hipertermia maligna apenas se normotérmico.",
      E: "Hipocalcemia por tireoidectomia."
    },
    resposta: "A",
    comentario: "Abstinência alcoólica pode causar hiperatividade autonômica, tremores, agitação, convulsões e delirium tremens no perioperatório.",
    frase_ouro: "Etilista pesado pode trazer abstinência para a recuperação anestésica."
  },
  {
    id: "yao-062-001",
    fonte: "Yao",
    capitulo: "Cirurgia de emergência",
    tema: "Estômago cheio",
    dificuldade: "alta",
    pergunta: "Paciente com abdome agudo obstrutivo, vômitos fecaloides e distensão importante necessita laparotomia. Qual estratégia de via aérea é mais apropriada?",
    alternativas: {
      A: "Tratar como estômago cheio, com aspiração por sonda se apropriado, pré-oxigenação e indução de sequência rápida planejada.",
      B: "Sedação profunda sem proteção da via aérea.",
      C: "Evitar intubação porque o risco de aspiração desaparece com opioide.",
      D: "Ventilação sob máscara prolongada obrigatória com alta pressão.",
      E: "Liberar dieta antes da cirurgia."
    },
    resposta: "A",
    comentario: "Obstrução intestinal e vômitos aumentam muito risco de aspiração. Estratégia de via aérea deve minimizar tempo desprotegido e considerar descompressão gástrica.",
    frase_ouro: "Obstrução intestinal é estômago cheio até prova em contrário — e geralmente há prova demais."
  },
  {
    id: "yao-062-002",
    fonte: "Yao",
    capitulo: "Cirurgia de emergência",
    tema: "Sepse abdominal",
    dificuldade: "alta",
    pergunta: "Paciente com peritonite séptica chega hipotenso, taquicárdico, lactato 5 mmol/L e oligúrico. Qual plano anestésico é mais adequado?",
    alternativas: {
      A: "Indução titulada com preparo para colapso, acesso calibroso, antibiótico/controle de foco, vasopressores e ressuscitação guiada por perfusão.",
      B: "Indução com dose plena fixa de propofol sem vasopressor disponível.",
      C: "Evitar monitorização invasiva independentemente da gravidade.",
      D: "Aguardar normalização completa do lactato antes de operar o foco.",
      E: "Restringir oxigênio para reduzir radicais livres."
    },
    resposta: "A",
    comentario: "Sepse abdominal combina vasodilatação, hipovolemia relativa, disfunção miocárdica possível e necessidade de controle de foco. A indução deve ser titulada e preparada.",
    frase_ouro: "Na sepse, anestesia sem vasopressor pronto é salto sem rede."
  },
  {
    id: "yao-063-001",
    fonte: "Yao",
    capitulo: "Recuperação pós-anestésica",
    tema: "Hipoventilação",
    dificuldade: "média",
    pergunta: "Paciente na recuperação apresenta sonolência, FR 6 irpm, miose e hipercapnia após opioide. Qual conduta é adequada?",
    alternativas: {
      A: "Estimular, ventilar/oxigenar e titular naloxona se depressão respiratória clinicamente relevante.",
      B: "Administrar mais opioide.",
      C: "Reduzir oxigênio.",
      D: "Dar protamina.",
      E: "Ignorar se pressão estiver normal."
    },
    resposta: "A",
    comentario: "Depressão respiratória por opioide exige suporte ventilatório e reversão titulada com naloxona quando necessário, evitando dor/rebote intenso.",
    frase_ouro: "Naloxona se titula para respirar, não para punir a analgesia."
  },
  {
    id: "yao-063-002",
    fonte: "Yao",
    capitulo: "Recuperação pós-anestésica",
    tema: "Curarização residual",
    dificuldade: "média",
    pergunta: "Paciente extubado apresenta fraqueza, hipoventilação, dificuldade de manter via aérea e TOF ratio baixo. Qual diagnóstico é provável?",
    alternativas: {
      A: "Curarização residual.",
      B: "Hipertensão essencial.",
      C: "Síndrome tireotóxica.",
      D: "Hipercalemia tratada.",
      E: "Analgesia perfeita."
    },
    resposta: "A",
    comentario: "Bloqueio neuromuscular residual pode causar fraqueza respiratória, obstrução, aspiração e hipoventilação no pós-operatório.",
    frase_ouro: "Extubação segura precisa de músculo acordado, não só olho aberto."
  },
  {
    id: "yao-064-001",
    fonte: "Yao",
    capitulo: "Monitorização",
    tema: "Capnografia",
    dificuldade: "média",
    pergunta: "Após intubação, ausência persistente de onda de capnografia deve levar à suspeita imediata de:",
    alternativas: {
      A: "Intubação esofágica, desconexão, parada circulatória ou ausência de ventilação efetiva.",
      B: "Analgesia adequada.",
      C: "Hipertensão essencial.",
      D: "Bloqueio simpático isolado.",
      E: "Temperatura normal."
    },
    resposta: "A",
    comentario: "Capnografia é fundamental para confirmar ventilação traqueal e detectar problemas como intubação esofágica, desconexão e baixo débito extremo.",
    frase_ouro: "Sem capnograma depois do tubo, a via aérea ainda não está provada."
  },
  {
    id: "yao-064-002",
    fonte: "Yao",
    capitulo: "Monitorização",
    tema: "Pressão arterial invasiva",
    dificuldade: "média",
    pergunta: "Qual é uma indicação comum para pressão arterial invasiva?",
    alternativas: {
      A: "Cirurgia de grande porte com instabilidade esperada ou necessidade de gasometrias seriadas.",
      B: "Procedimento mínimo em paciente hígido sempre.",
      C: "Ausência de pulso periférico por esmalte.",
      D: "Monitorar temperatura exclusivamente.",
      E: "Substituir capnografia."
    },
    resposta: "A",
    comentario: "Linha arterial permite monitorização contínua da pressão e coleta de gasometrias, sendo útil em cirurgias maiores ou pacientes instáveis.",
    frase_ouro: "Quando pressão muda rápido, manguito chega atrasado."
  },
  {
    id: "yao-065-001",
    fonte: "Yao",
    capitulo: "Equilíbrio ácido-base",
    tema: "Acidose metabólica",
    dificuldade: "alta",
    pergunta: "Paciente em choque hemorrágico apresenta pH 7,12, lactato 8 mmol/L e hipotensão persistente. Qual é o tratamento fundamental da acidose?",
    alternativas: {
      A: "Restaurar perfusão e oxigenação tecidual por controle de sangramento e ressuscitação adequada.",
      B: "Administrar bicarbonato como única medida definitiva.",
      C: "Reduzir fluxo sanguíneo para diminuir lactato.",
      D: "Evitar transfusão.",
      E: "Induzir hipoxemia."
    },
    resposta: "A",
    comentario: "Acidose láctica por choque é tratada principalmente corrigindo hipoperfusão. Bicarbonato pode ser considerado em situações selecionadas, mas não substitui perfusão.",
    frase_ouro: "Acidose de choque se corrige fechando sangramento e devolvendo fluxo."
  },
  {
    id: "yao-065-002",
    fonte: "Yao",
    capitulo: "Equilíbrio ácido-base",
    tema: "Alcalose respiratória",
    dificuldade: "média",
    pergunta: "Hiperventilação excessiva em paciente neurocrítico pode ser deletéria porque:",
    alternativas: {
      A: "Reduz PaCO2, causa vasoconstrição cerebral e pode reduzir fluxo cerebral excessivamente.",
      B: "Aumenta obrigatoriamente fluxo cerebral.",
      C: "Não altera vasos cerebrais.",
      D: "Causa hipercapnia.",
      E: "Aumenta pressão intracraniana por vasodilatação."
    },
    resposta: "A",
    comentario: "Hipocapnia causa vasoconstrição cerebral. Pode reduzir PIC temporariamente, mas hiperventilação excessiva/prolongada pode causar isquemia.",
    frase_ouro: "CO2 baixo esvazia sangue do cérebro; útil por minutos, perigoso em excesso."
  },
  {
    id: "yao-066-001",
    fonte: "Yao",
    capitulo: "Eletrólitos",
    tema: "Hiponatremia",
    dificuldade: "alta",
    pergunta: "Paciente apresenta Na 116 mEq/L, confusão e convulsão no pós-operatório. Qual princípio de correção é adequado?",
    alternativas: {
      A: "Corrigir sintoma grave com solução hipertônica cuidadosamente, evitando correção rápida excessiva.",
      B: "Dar água livre em grande volume.",
      C: "Corrigir todo sódio para 145 em uma hora.",
      D: "Ignorar convulsão se pressão estiver normal.",
      E: "Administrar potássio como único tratamento."
    },
    resposta: "A",
    comentario: "Hiponatremia sintomática grave exige tratamento urgente com solução hipertônica, mas a correção excessivamente rápida aumenta risco de desmielinização osmótica.",
    frase_ouro: "Na hiponatremia grave, corrija o cérebro sem machucar a ponte."
  },
  {
    id: "yao-066-002",
    fonte: "Yao",
    capitulo: "Eletrólitos",
    tema: "Hipocalcemia",
    dificuldade: "média",
    pergunta: "Durante transfusão maciça, paciente desenvolve hipotensão, QT prolongado e cálcio ionizado baixo. Qual conduta é apropriada?",
    alternativas: {
      A: "Repor cálcio intravenoso conforme monitorização.",
      B: "Administrar succinilcolina.",
      C: "Suspender transfusão sempre, mesmo em choque.",
      D: "Administrar naloxona.",
      E: "Fazer hiperventilação como única medida."
    },
    resposta: "A",
    comentario: "Hipocalcemia por citrato pode piorar contratilidade, pressão arterial e coagulação. Deve ser monitorada e corrigida durante transfusão maciça.",
    frase_ouro: "Cálcio baixo na transfusão derruba coração e coágulo."
  },
  {
    id: "yao-067-001",
    fonte: "Yao",
    capitulo: "Oxigenação",
    tema: "Meta de saturação",
    dificuldade: "média",
    pergunta: "Paciente com DPOC grave e retenção crônica de CO2 está no pós-operatório. Qual raciocínio sobre oxigenoterapia é adequado?",
    alternativas: {
      A: "Oxigênio deve ser titulado para corrigir hipoxemia evitando hiperóxia excessiva e monitorando CO2.",
      B: "Oxigênio é absolutamente contraindicado.",
      C: "Saturação de 70% é sempre aceitável.",
      D: "CO2 nunca muda com oxigênio.",
      E: "Ventilação não invasiva nunca tem papel."
    },
    resposta: "A",
    comentario: "Em retentores crônicos, oxigênio deve tratar hipoxemia, mas com vigilância de hipercapnia. Ventilação não invasiva pode ser útil se houver exacerbação/hipoventilação.",
    frase_ouro: "No DPOC retentor, oxigênio é remédio: dose certa e monitorização."
  },
  {
    id: "yao-067-002",
    fonte: "Yao",
    capitulo: "Oxigenação",
    tema: "Shunt",
    dificuldade: "média",
    pergunta: "Hipoxemia por shunt intrapulmonar importante responde pouco ao aumento de FiO2 porque:",
    alternativas: {
      A: "Parte do sangue passa por áreas não ventiladas e não entra em contato efetivo com gás alveolar.",
      B: "O sangue arterial não contém hemoglobina.",
      C: "A FiO2 sempre piora shunt.",
      D: "O shunt aumenta a ventilação alveolar.",
      E: "Oxigênio não difunde no pulmão normal."
    },
    resposta: "A",
    comentario: "No shunt, sangue venoso atravessa unidades não ventiladas, misturando-se ao sangue oxigenado. Por isso, aumentar FiO2 tem efeito limitado.",
    frase_ouro: "Shunt é sangue que foge do ar."
  },
  {
    id: "yao-068-001",
    fonte: "Yao",
    capitulo: "Cirurgia torácica",
    tema: "Pneumonectomia",
    dificuldade: "alta",
    pergunta: "Após pneumonectomia, qual estratégia volêmica é apropriada para reduzir risco de edema pulmonar no pulmão remanescente?",
    alternativas: {
      A: "Evitar sobrecarga volêmica, mantendo perfusão adequada com estratégia restritiva guiada por hemodinâmica.",
      B: "Administrar cristaloide ilimitado para preencher o espaço vazio.",
      C: "Induzir hipertensão pulmonar.",
      D: "Evitar oxigenação.",
      E: "Manter balanço extremamente positivo obrigatoriamente."
    },
    resposta: "A",
    comentario: "Após pneumonectomia, sobrecarga hídrica pode contribuir para edema do pulmão remanescente. Deve-se equilibrar perfusão e restrição de excesso.",
    frase_ouro: "Depois da pneumonectomia, um pulmão só não merece carregar água por dois."
  },
  {
    id: "yao-068-002",
    fonte: "Yao",
    capitulo: "Cirurgia torácica",
    tema: "Fístula broncopleural",
    dificuldade: "alta",
    pergunta: "Paciente com suspeita de fístula broncopleural apresenta grande vazamento aéreo e ventilação ineficaz. Qual princípio ventilatório é adequado?",
    alternativas: {
      A: "Reduzir pressões de via aérea quando possível, isolar pulmão se indicado e evitar ventilação que aumente vazamento.",
      B: "Aumentar pressão inspiratória sem limite.",
      C: "Usar PEEP extrema como única medida.",
      D: "Ignorar capnografia.",
      E: "Evitar comunicação com cirurgião."
    },
    resposta: "A",
    comentario: "Fístula broncopleural pode piorar com altas pressões. Isolamento pulmonar e ventilação de baixa pressão podem ser necessários.",
    frase_ouro: "Na fístula broncopleural, pressão demais ventila o dreno, não o paciente."
  },
  {
    id: "yao-069-001",
    fonte: "Yao",
    capitulo: "Cirurgia de coluna",
    tema: "Perda visual pós-operatória",
    dificuldade: "alta",
    pergunta: "Em cirurgia de coluna prolongada em prona, qual fator está associado a risco de perda visual pós-operatória?",
    alternativas: {
      A: "Duração prolongada, sangramento, anemia, hipotensão, edema e pressão direta sobre os olhos.",
      B: "Proteção adequada dos olhos.",
      C: "Tempo cirúrgico curto.",
      D: "Hemoglobina normal e pressão estável.",
      E: "Cabeça neutra sem compressão ocular."
    },
    resposta: "A",
    comentario: "Cirurgias longas em prona podem associar-se a neuropatia óptica isquêmica ou oclusão vascular, especialmente com anemia, hipotensão, edema e compressão ocular.",
    frase_ouro: "Em prona longa, olho protegido é monitor invisível obrigatório."
  },
  {
    id: "yao-069-002",
    fonte: "Yao",
    capitulo: "Cirurgia de coluna",
    tema: "Prona",
    dificuldade: "média",
    pergunta: "Após posicionar paciente em prona, qual checagem é essencial?",
    alternativas: {
      A: "Via aérea segura, ausência de compressão ocular, abdome livre e pontos de pressão protegidos.",
      B: "Retirar todos os monitores.",
      C: "Comprimir abdome para reduzir sangramento sempre.",
      D: "Flexionar pescoço ao máximo.",
      E: "Desconectar ventilador para facilitar campo."
    },
    resposta: "A",
    comentario: "Posição prona exige checagem de via aérea, olhos, abdome livre, pressão em nervos/pele e ventilação/hemodinâmica.",
    frase_ouro: "Depois de virar para prona, confira tudo que ficou longe da sua mão."
  },
  {
    id: "yao-070-001",
    fonte: "Yao",
    capitulo: "Cirurgia maxilofacial",
    tema: "Trauma de face",
    dificuldade: "alta",
    pergunta: "Paciente com trauma facial grave, sangramento oral, fratura mandibular e dificuldade de abrir a boca precisa de cirurgia urgente. Qual preocupação domina o plano anestésico?",
    alternativas: {
      A: "Via aérea difícil com risco de sangramento, aspiração e perda de acesso após indução.",
      B: "Ausência de risco de aspiração.",
      C: "Facilidade garantida de ventilação sob máscara.",
      D: "Dispensa de plano cirúrgico de via aérea.",
      E: "Sedação profunda sem monitorização."
    },
    resposta: "A",
    comentario: "Trauma facial pode dificultar ventilação, laringoscopia, aspiração de sangue e acesso cirúrgico. O plano deve preservar segurança da via aérea.",
    frase_ouro: "Trauma de face é via aérea difícil com sangue tentando atrapalhar."
  },
  {
    id: "yao-070-002",
    fonte: "Yao",
    capitulo: "Cirurgia maxilofacial",
    tema: "Fixação mandibular",
    dificuldade: "média",
    pergunta: "Após cirurgia com bloqueio maxilomandibular, qual cuidado é importante no pós-operatório?",
    alternativas: {
      A: "Disponibilidade de ferramenta para liberar fixação em emergência e controle rigoroso de náuseas/vômitos.",
      B: "Evitar qualquer aspiração de secreções.",
      C: "Induzir vômitos para testar fixação.",
      D: "Dispensar orientação à equipe.",
      E: "Administrar dieta sólida imediatamente."
    },
    resposta: "A",
    comentario: "Com mandíbula bloqueada, vômito ou obstrução podem ser perigosos. Deve haver cortador/ferramenta disponível e equipe orientada.",
    frase_ouro: "Mandíbula bloqueada exige plano para vômito e via aérea, não só fio bonito."
  },
  {
    id: "yao-071-001",
    fonte: "Yao",
    capitulo: "Anestesia fora do centro cirúrgico",
    tema: "RM",
    dificuldade: "média",
    pergunta: "Em anestesia para ressonância magnética, qual preocupação é essencial?",
    alternativas: {
      A: "Compatibilidade de equipamentos com RM, acesso limitado ao paciente e plano de emergência fora da sala.",
      B: "Uso de qualquer cilindro metálico comum ao lado do aparelho.",
      C: "Ausência de necessidade de monitorização.",
      D: "Facilidade de acesso imediato à via aérea durante todo o exame.",
      E: "Impossibilidade de hipóxia."
    },
    resposta: "A",
    comentario: "Ressonância exige equipamentos compatíveis, monitorização apropriada e planejamento, pois o acesso ao paciente é limitado e o ambiente tem risco magnético.",
    frase_ouro: "Na RM, o ímã também é parte da anestesia."
  },
  {
    id: "yao-071-002",
    fonte: "Yao",
    capitulo: "Anestesia fora do centro cirúrgico",
    tema: "Endoscopia",
    dificuldade: "média",
    pergunta: "Durante sedação para endoscopia alta, qual complicação deve ser antecipada?",
    alternativas: {
      A: "Obstrução de via aérea, hipoventilação, aspiração e dificuldade de acesso à boca compartilhada.",
      B: "Impossibilidade de dessaturação.",
      C: "Ausência de estímulo vagal.",
      D: "Garantia de estômago vazio em todos os pacientes.",
      E: "Dispensa de capnografia em sedação profunda."
    },
    resposta: "A",
    comentario: "Endoscopia alta compartilha via aérea e pode causar obstrução, hipoventilação, aspiração e necessidade de intervenção rápida.",
    frase_ouro: "Sedação para endoscopia é via aérea compartilhada com pouco espaço para orgulho."
  },
  {
    id: "yao-072-001",
    fonte: "Yao",
    capitulo: "Cirurgia ambulatorial",
    tema: "Apneia do sono",
    dificuldade: "alta",
    pergunta: "Paciente com apneia obstrutiva do sono grave, uso domiciliar de CPAP e necessidade prevista de opioide alto será submetido a procedimento ambulatorial. Qual raciocínio é mais seguro?",
    alternativas: {
      A: "Avaliar se o ambiente ambulatorial é apropriado, planejar analgesia poupadora de opioide e monitorização pós-operatória adequada.",
      B: "Alta imediata obrigatória após qualquer sedação.",
      C: "Suspender CPAP para reduzir risco.",
      D: "Usar opioide alto sem monitorização.",
      E: "Ignorar histórico de apneia."
    },
    resposta: "A",
    comentario: "AOS grave aumenta risco de obstrução e depressão respiratória, especialmente com opioides. Seleção do local e plano pós-operatório são fundamentais.",
    frase_ouro: "AOS grave não termina na extubação; ela começa a cobrar no pós-operatório."
  },
  {
    id: "yao-072-002",
    fonte: "Yao",
    capitulo: "Cirurgia ambulatorial",
    tema: "Dor pós-operatória",
    dificuldade: "média",
    pergunta: "Qual fator pode impedir alta segura após cirurgia ambulatorial?",
    alternativas: {
      A: "Dor intensa não controlada, náuseas persistentes ou instabilidade hemodinâmica.",
      B: "Orientação adequada ao paciente.",
      C: "Dor leve controlada com analgésico oral.",
      D: "Saturação estável em ar ambiente.",
      E: "Marcha compatível com o procedimento."
    },
    resposta: "A",
    comentario: "Alta ambulatorial requer controle de sintomas, estabilidade e segurança funcional. Dor e náusea refratárias aumentam risco após saída.",
    frase_ouro: "Alta ambulatorial segura não é pressa: é estabilidade com plano."
  },
  {
    id: "yao-073-001",
    fonte: "Yao",
    capitulo: "Dor crônica",
    tema: "Paciente usuário crônico de opioide",
    dificuldade: "alta",
    pergunta: "Paciente em uso crônico de opioide será submetido a artrodese lombar. Qual plano analgésico é mais adequado?",
    alternativas: {
      A: "Assumir que precisará de menos analgesia por já usar opioide.",
      B: "Planejar analgesia multimodal, manter necessidades basais e antecipar tolerância/hiperalgesia.",
      C: "Suspender todos os opioides abruptamente no dia da cirurgia.",
      D: "Evitar qualquer técnica regional.",
      E: "Usar apenas dipirona independentemente do porte."
    },
    resposta: "B",
    comentario: "Usuários crônicos de opioide podem ter tolerância e hiperalgesia, exigindo plano multimodal, prevenção de abstinência e expectativas realistas.",
    frase_ouro: "Opioide crônico não simplifica analgesia; ele aumenta a engenharia do plano."
  },
  {
    id: "yao-073-002",
    fonte: "Yao",
    capitulo: "Dor crônica",
    tema: "Hiperalgesia induzida por opioide",
    dificuldade: "média",
    pergunta: "Hiperalgesia induzida por opioide é melhor descrita como:",
    alternativas: {
      A: "Aumento paradoxal da sensibilidade dolorosa associado ao uso de opioides.",
      B: "Analgesia perfeita por dose baixa.",
      C: "Bloqueio motor por opioide.",
      D: "Alergia obrigatória a morfina.",
      E: "Ausência de dor crônica."
    },
    resposta: "A",
    comentario: "Hiperalgesia induzida por opioide ocorre quando a exposição a opioides se associa a maior sensibilidade à dor, diferente de tolerância simples.",
    frase_ouro: "Às vezes mais opioide não trata dor: alimenta sensibilidade."
  },
  {
    id: "yao-074-001",
    fonte: "Yao",
    capitulo: "Cuidados paliativos",
    tema: "Objetivos de cuidado",
    dificuldade: "média",
    pergunta: "Paciente terminal com obstrução intestinal maligna necessita procedimento paliativo. Qual princípio deve orientar a anestesia?",
    alternativas: {
      A: "Alinhar técnica e agressividade do cuidado aos objetivos do paciente, alívio de sintomas e proporcionalidade.",
      B: "Ignorar prognóstico e preferências.",
      C: "Garantir UTI prolongada em todos os casos.",
      D: "Evitar analgesia por risco teórico.",
      E: "Prometer cura cirúrgica."
    },
    resposta: "A",
    comentario: "Em cuidados paliativos, a anestesia deve respeitar objetivos, conforto, autonomia, risco proporcional e comunicação clara.",
    frase_ouro: "Anestesia paliativa mede sucesso por conforto e coerência, não por heroísmo."
  },
  {
    id: "yao-074-002",
    fonte: "Yao",
    capitulo: "Cuidados paliativos",
    tema: "Ordem de não reanimar",
    dificuldade: "alta",
    pergunta: "Paciente com ordem de não reanimar será submetido a procedimento paliativo sob anestesia. Qual conduta ética é adequada?",
    alternativas: {
      A: "Suspender automaticamente a ordem sem discutir.",
      B: "Revisar a ordem com paciente/família/equipe, definindo quais intervenções são aceitáveis no contexto anestésico.",
      C: "Cancelar toda anestesia obrigatoriamente.",
      D: "Ignorar a documentação.",
      E: "Realizar reanimação completa sempre, independentemente da vontade expressa."
    },
    resposta: "B",
    comentario: "Ordens de limitação terapêutica devem ser revisadas no perioperatório, pois algumas intervenções anestésicas podem se confundir com reanimação. É preciso decisão compartilhada.",
    frase_ouro: "DNR no centro cirúrgico não se apaga nem se aplica no automático: conversa-se."
  },
  {
    id: "yao-075-001",
    fonte: "Yao",
    capitulo: "Cirurgia cardíaca",
    tema: "Falência de ventrículo direito",
    dificuldade: "alta",
    pergunta: "Após troca valvar mitral, paciente sai da CEC com PAM 55 mmHg, PVC 22 mmHg, PAP elevada, VE hiperdinâmico e VD dilatado com contratilidade reduzida ao ETE. Qual conduta é mais apropriada?",
    alternativas: {
      A: "Tratar como falência de VD: reduzir RVP, manter pressão sistêmica, otimizar pré-carga sem excesso e considerar inotrópico/vasodilatador pulmonar.",
      B: "Administrar diurético agressivo imediatamente, independentemente da pressão.",
      C: "Reduzir FiO2 e permitir hipercapnia.",
      D: "Aumentar PEEP sem avaliar hemodinâmica.",
      E: "Beta-bloqueio em bolus como primeira medida."
    },
    resposta: "A",
    comentario: "O quadro sugere falência de VD: PVC alta, PAP elevada, VD dilatado e VE relativamente preservado. Devem ser corrigidos hipóxia, hipercapnia e acidose, mantendo pressão sistêmica para perfusão coronariana do VD.",
    frase_ouro: "VD falhando precisa de pulmão mais fácil, pressão sistêmica e inotropismo certo."
  },
  {
    id: "yao-075-002",
    fonte: "Yao",
    capitulo: "Cirurgia cardíaca",
    tema: "Vasoplegia pós-CEC",
    dificuldade: "alta",
    pergunta: "Após CEC prolongada, paciente apresenta PAM 45 mmHg, índice cardíaco alto, SVR muito baixa, SvO2 elevada e lactato discretamente aumentado. Eco mostra boa função biventricular. Qual diagnóstico e tratamento são mais prováveis?",
    alternativas: {
      A: "Falência de VE; tratar apenas com dobutamina.",
      B: "Vasoplegia pós-CEC; tratar com vasopressores como noradrenalina e considerar vasopressina/azul de metileno conforme refratariedade.",
      C: "Tamponamento clássico; administrar diurético.",
      D: "Hipovolemia pura; evitar vasopressores sempre.",
      E: "Broncoespasmo; tratar apenas com salbutamol."
    },
    resposta: "B",
    comentario: "Débito alto, SVR baixa e boa função ventricular sugerem vasoplegia. Após CEC, inflamação e vasodilatação podem exigir vasopressores e terapias adjuvantes.",
    frase_ouro: "Na vasoplegia pós-CEC, a bomba funciona; o vaso é que abriu demais."
  },
  {
    id: "yao-075-003",
    fonte: "Yao",
    capitulo: "Cirurgia cardíaca",
    tema: "Ar intracardíaco",
    dificuldade: "alta",
    pergunta: "Após retirada do clampeamento aórtico em cirurgia valvar, o ETE mostra ar no ventrículo esquerdo e raiz da aorta. O paciente apresenta alterações de ST transitórias. Qual conduta é mais adequada?",
    alternativas: {
      A: "Ignorar, pois ar intracardíaco nunca causa embolia coronariana.",
      B: "Administrar protamina imediatamente antes de qualquer manobra.",
      C: "Realizar manobras de desaeração, ajustar posição, ventilar adequadamente, manter pressão perfusora e só prosseguir quando o ar for minimizado.",
      D: "Reduzir FiO2 para diminuir bolhas.",
      E: "Induzir hipovolemia para aspirar ar."
    },
    resposta: "C",
    comentario: "Ar intracardíaco pode embolizar para coronárias e cérebro. O ETE guia manobras de desaeração antes da separação definitiva da CEC.",
    frase_ouro: "Depois de abrir coração esquerdo, ar visto no eco é embolia procurando destino."
  },
  {
    id: "yao-075-004",
    fonte: "Yao",
    capitulo: "Cirurgia cardíaca",
    tema: "Dissecção de aorta",
    dificuldade: "alta",
    pergunta: "Paciente com dissecção aguda de aorta tipo A chega hipertenso, com dor intensa e FC 118 bpm. Antes da indução, qual prioridade fisiológica é correta?",
    alternativas: {
      A: "Administrar vasodilatador arterial puro sem controle da FC.",
      B: "Aumentar pressão sistólica para melhorar perfusão do falso lúmen.",
      C: "Evitar analgesia para não mascarar sintomas.",
      D: "Controlar dor, reduzir FC/contratilidade e depois reduzir pressão se necessário.",
      E: "Induzir hipercapnia para vasodilatar."
    },
    resposta: "D",
    comentario: "Na dissecção, o objetivo é reduzir estresse de parede e dP/dt. Beta-bloqueio ou controle cronotrópico vem antes de vasodilatadores puros, que poderiam causar taquicardia reflexa.",
    frase_ouro: "Na dissecção, primeiro diminua a pancada do coração; depois ajuste a pressão."
  },
  {
    id: "yao-075-005",
    fonte: "Yao",
    capitulo: "Cirurgia cardíaca",
    tema: "Proteção miocárdica",
    dificuldade: "média",
    pergunta: "Durante cirurgia cardíaca com parada cardioplégica prolongada, o paciente apresenta dificuldade de recuperação contrátil ao reperfundir. Qual fator pode contribuir para disfunção miocárdica pós-isquêmica?",
    alternativas: {
      A: "Proteção miocárdica adequada e ausência de isquemia.",
      B: "Normotermia rigorosa e perfusão perfeita.",
      C: "Tempo curto de clampeamento sem comorbidades.",
      D: "Ausência de distúrbios eletrolíticos.",
      E: "Isquemia/reperfusão, proteção inadequada, distúrbios eletrolíticos ou doença coronariana residual."
    },
    resposta: "E",
    comentario: "Disfunção pós-CEC pode resultar de stunning miocárdico, proteção miocárdica insuficiente, isquemia residual, ar coronariano e distúrbios metabólicos.",
    frase_ouro: "Miocárdio reperfundido pode estar vivo, mas atordoado."
  },
  {
    id: "yao-076-001",
    fonte: "Yao",
    capitulo: "Farmacologia cardiovascular",
    tema: "Dobutamina",
    dificuldade: "média",
    pergunta: "Paciente pós-CEC tem baixo débito, pressão limítrofe, eco com hipocinesia de VE e resistência vascular sistêmica não muito baixa. Qual droga tem perfil inotrópico beta-1 útil nesse contexto?",
    alternativas: {
      A: "Dobutamina.",
      B: "Nitroprussiato isolado.",
      C: "Furosemida como primeira linha.",
      D: "Dantrolene.",
      E: "Protamina."
    },
    resposta: "A",
    comentario: "Dobutamina é agonista beta predominantemente inotrópico, útil em baixo débito por disfunção ventricular, embora possa causar taquicardia e vasodilatação.",
    frase_ouro: "Dobutamina ajuda a bomba, mas vigie frequência e pressão."
  },
  {
    id: "yao-076-002",
    fonte: "Yao",
    capitulo: "Farmacologia cardiovascular",
    tema: "Milrinona",
    dificuldade: "alta",
    pergunta: "Paciente com falência de VD e hipertensão pulmonar após cirurgia cardíaca recebe milrinona. Qual efeito esperado justifica seu uso, mas também exige cautela?",
    alternativas: {
      A: "Bloqueio alfa irreversível e hipertensão intensa.",
      B: "Inodilatação: melhora contratilidade e reduz resistência vascular pulmonar/sistêmica, podendo causar hipotensão.",
      C: "Reversão direta da heparina.",
      D: "Antagonismo de opioides.",
      E: "Bloqueio neuromuscular profundo."
    },
    resposta: "B",
    comentario: "Milrinona é inibidor da fosfodiesterase III, com efeito inotrópico e vasodilatador, inclusive pulmonar. Pode ser útil no VD, mas pode causar hipotensão sistêmica.",
    frase_ouro: "Milrinona ajuda o VD abrindo o pulmão, mas pode abrir demais o sistêmico."
  },
  {
    id: "yao-076-003",
    fonte: "Yao",
    capitulo: "Farmacologia cardiovascular",
    tema: "Noradrenalina",
    dificuldade: "média",
    pergunta: "Paciente séptico em laparotomia apresenta PAM 48 mmHg após fluidos iniciais, extremidades quentes, lactato elevado e eco sem falência ventricular importante. Qual fármaco é frequentemente primeira escolha para restaurar pressão perfusora?",
    alternativas: {
      A: "Nitroglicerina.",
      B: "Esmolol.",
      C: "Noradrenalina.",
      D: "Sugamadex.",
      E: "Naloxona."
    },
    resposta: "C",
    comentario: "Noradrenalina aumenta tônus vascular e pressão arterial média em choque distributivo, sendo vasopressor de primeira linha em muitos contextos sépticos.",
    frase_ouro: "Choque distributivo precisa fechar vaso o suficiente para perfundir órgão."
  },
  {
    id: "yao-076-004",
    fonte: "Yao",
    capitulo: "Farmacologia cardiovascular",
    tema: "Vasopressina",
    dificuldade: "alta",
    pergunta: "Paciente em uso de IECA chega para cirurgia de urgência e apresenta hipotensão profunda após indução, pouco responsiva a fenilefrina e noradrenalina em doses crescentes. Qual droga pode ser especialmente útil?",
    alternativas: {
      A: "Nitroprussiato.",
      B: "Hidralazina.",
      C: "Esmolol.",
      D: "Vasopressina.",
      E: "Furosemida."
    },
    resposta: "D",
    comentario: "Bloqueio do sistema renina-angiotensina pode favorecer vasoplegia refratária a catecolaminas. Vasopressina atua por via diferente e pode restaurar tônus vascular.",
    frase_ouro: "Quando IECA tira uma via de defesa vascular, vasopressina pode abrir outra."
  },
  {
    id: "yao-076-005",
    fonte: "Yao",
    capitulo: "Farmacologia cardiovascular",
    tema: "Nitroglicerina",
    dificuldade: "média",
    pergunta: "Paciente coronariopata em cirurgia vascular apresenta hipertensão moderada, dor torácica e congestão pulmonar. Qual vasodilatador tem perfil particularmente útil por reduzir pré-carga e favorecer isquemia/congestão?",
    alternativas: {
      A: "Fenilefrina.",
      B: "Protamina.",
      C: "Atropina.",
      D: "Dantrolene.",
      E: "Nitroglicerina."
    },
    resposta: "E",
    comentario: "Nitroglicerina reduz pré-carga e pode melhorar isquemia miocárdica/congestão. Não é o vasodilatador arterial mais potente para reduzir RVS isoladamente.",
    frase_ouro: "Nitroglicerina é droga de coronária e congestão, não martelo universal da pressão."
  },
  {
    id: "yao-077-001",
    fonte: "Yao",
    capitulo: "Ventilação mecânica",
    tema: "Auto-PEEP",
    dificuldade: "alta",
    pergunta: "Paciente com DPOC em ventilação mecânica fica hipotenso, com pressão de pico elevada e expiração incompleta no ventilador. Ao desconectar brevemente, a pressão melhora. Qual mecanismo é mais provável?",
    alternativas: {
      A: "Auto-PEEP com hiperinsuflação dinâmica reduzindo retorno venoso.",
      B: "Hipovolemia por jejum como única explicação.",
      C: "Hipertermia maligna.",
      D: "Síndrome pós-RTU.",
      E: "Reflexo óculo-cardíaco."
    },
    resposta: "A",
    comentario: "Tempo expiratório insuficiente em DPOC pode causar aprisionamento aéreo, auto-PEEP, aumento de pressão intratorácica e queda do retorno venoso.",
    frase_ouro: "No DPOC ventilado, ar que entra e não sai vira vasopressor ao contrário."
  },
  {
    id: "yao-077-002",
    fonte: "Yao",
    capitulo: "Ventilação mecânica",
    tema: "Pressão de platô",
    dificuldade: "média",
    pergunta: "Durante ventilação controlada, pressão de pico está alta, mas pressão de platô está normal. Qual interpretação é mais provável?",
    alternativas: {
      A: "Complacência pulmonar gravemente reduzida.",
      B: "Aumento de resistência de vias aéreas, como broncoespasmo, secreção ou tubo dobrado.",
      C: "Hipovolemia pura.",
      D: "Falência renal aguda.",
      E: "Hipocalcemia."
    },
    resposta: "B",
    comentario: "Pico alto com platô normal sugere aumento de resistência ao fluxo. Pico e platô altos sugerem problema de complacência ou pressão alveolar elevada.",
    frase_ouro: "Pico alto com platô normal aponta para cano estreito, não pulmão duro."
  },
  {
    id: "yao-077-003",
    fonte: "Yao",
    capitulo: "Ventilação mecânica",
    tema: "PEEP",
    dificuldade: "alta",
    pergunta: "Paciente com SDRA moderada melhora oxigenação após aumento de PEEP, mas passa a ter hipotensão e queda de débito. Qual explicação é plausível?",
    alternativas: {
      A: "PEEP não altera hemodinâmica.",
      B: "PEEP sempre aumenta retorno venoso.",
      C: "PEEP elevada pode aumentar pressão intratorácica, reduzir retorno venoso e sobrecarregar VD.",
      D: "PEEP corrige hipovolemia.",
      E: "PEEP reduz pressão alveolar."
    },
    resposta: "C",
    comentario: "PEEP pode recrutar alvéolos e melhorar oxigenação, mas pressões excessivas aumentam pressão intratorácica, reduzem retorno venoso e podem elevar pós-carga do VD.",
    frase_ouro: "PEEP abre pulmão, mas pode fechar retorno venoso se exagerar."
  },
  {
    id: "yao-077-004",
    fonte: "Yao",
    capitulo: "Ventilação mecânica",
    tema: "Capnografia",
    dificuldade: "média",
    pergunta: "Durante anestesia geral, EtCO2 aumenta progressivamente de 35 para 65 mmHg com ventilação minuto constante e absorvedor de CO2 vencido. Qual causa deve ser considerada?",
    alternativas: {
      A: "Hiperventilação.",
      B: "Hipotermia profunda.",
      C: "Ausência de produção de CO2.",
      D: "Reinalação de CO2 por falha no circuito/absorvedor.",
      E: "Curarização residual impossível."
    },
    resposta: "D",
    comentario: "Aumento progressivo de EtCO2 pode decorrer de hipoventilação, aumento de produção de CO2 ou reinalação por falha do circuito/absorvedor.",
    frase_ouro: "Capnografia alta progressiva também pode ser circuito respirando de volta."
  },
  {
    id: "yao-077-005",
    fonte: "Yao",
    capitulo: "Ventilação mecânica",
    tema: "Hipercapnia permissiva",
    dificuldade: "alta",
    pergunta: "Em paciente com SDRA, aceita-se hipercapnia permissiva moderada. Em qual situação ela exige maior cautela?",
    alternativas: {
      A: "Cirurgia de pele em paciente jovem hígido.",
      B: "Paciente sem doença neurológica.",
      C: "Paciente normotenso e normovolêmico.",
      D: "Ausência de hipertensão pulmonar.",
      E: "Hipertensão intracraniana ou hipertensão pulmonar grave."
    },
    resposta: "E",
    comentario: "Hipercapnia pode aumentar fluxo cerebral/pressão intracraniana e elevar resistência vascular pulmonar, sendo problemática em HIC e hipertensão pulmonar grave.",
    frase_ouro: "CO2 tolerado no pulmão pode ser intolerável no crânio ou no VD."
  },
  {
    id: "yao-078-001",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "Craniotomia acordada",
    dificuldade: "alta",
    pergunta: "Paciente fará craniotomia acordada para tumor próximo à área de linguagem. Qual princípio anestésico é mais importante?",
    alternativas: {
      A: "Permitir cooperação e avaliação neurológica, mantendo conforto, via aérea segura e estabilidade hemodinâmica.",
      B: "Usar bloqueio neuromuscular profundo durante toda a fase de mapeamento.",
      C: "Manter sedação profunda sem possibilidade de despertar.",
      D: "Evitar comunicação com neurocirurgião.",
      E: "Induzir hipercapnia intensa."
    },
    resposta: "A",
    comentario: "Craniotomia acordada exige equilíbrio entre analgesia/sedação, cooperação, proteção de via aérea e estabilidade para mapeamento funcional.",
    frase_ouro: "Craniotomia acordada é anestesia suficiente para confortar, não para apagar função."
  },
  {
    id: "yao-078-002",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "Convulsão intraoperatória",
    dificuldade: "alta",
    pergunta: "Durante mapeamento cortical em craniotomia acordada, o paciente apresenta crise convulsiva focal. Qual conduta inicial é adequada?",
    alternativas: {
      A: "Administrar succinilcolina imediatamente como única medida.",
      B: "Interromper estímulo, irrigar córtex com solução fria e tratar com benzodiazepínico/anticonvulsivante se persistente.",
      C: "Aumentar estimulação cortical.",
      D: "Reduzir oxigênio.",
      E: "Fazer diurético."
    },
    resposta: "B",
    comentario: "Convulsões durante mapeamento geralmente são tratadas interrompendo estímulo e irrigando córtex com solução fria; fármacos são usados se a crise persistir ou generalizar.",
    frase_ouro: "No mapeamento cortical, crise focal pede parar estímulo antes de afundar sedação."
  },
  {
    id: "yao-078-003",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "Aneurisma roto",
    dificuldade: "alta",
    pergunta: "Paciente com hemorragia subaracnoidea por aneurisma roto será submetido a clipagem. Antes do clampeamento temporário, qual objetivo é adequado?",
    alternativas: {
      A: "Hipertensão extrema para aumentar risco de reruptura.",
      B: "Hipotensão profunda sem avaliar perfusão cerebral.",
      C: "Evitar aumentos bruscos de pressão, manter perfusão cerebral e preparar manejo de ruptura intraoperatória.",
      D: "Permitir tosse na laringoscopia.",
      E: "Reduzir oxigênio."
    },
    resposta: "C",
    comentario: "Aneurisma roto exige equilíbrio: evitar hipertensão que favoreça reruptura e evitar hipotensão que comprometa cérebro vulnerável.",
    frase_ouro: "No aneurisma roto, pressão demais rompe; pressão de menos isquemia."
  },
  {
    id: "yao-078-004",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "Diabetes insipidus",
    dificuldade: "média",
    pergunta: "Após cirurgia hipofisária, paciente apresenta diurese muito elevada, hipernatremia e urina diluída. Qual diagnóstico deve ser considerado?",
    alternativas: {
      A: "Síndrome pós-RTU.",
      B: "Hipoglicemia por insulina.",
      C: "Insuficiência renal anúrica.",
      D: "Diabetes insipidus central.",
      E: "Hiperaldosteronismo primário."
    },
    resposta: "D",
    comentario: "Manipulação hipofisária pode causar deficiência de ADH, levando a poliúria, urina diluída, hipernatremia e risco de desidratação.",
    frase_ouro: "Depois da hipófise, muita urina clara pode ser ADH que sumiu."
  },
  {
    id: "yao-078-005",
    fonte: "Yao",
    capitulo: "Neuroanestesia",
    tema: "SIADH",
    dificuldade: "média",
    pergunta: "Após neurocirurgia, paciente evolui com hiponatremia, osmolaridade plasmática baixa e urina inapropriadamente concentrada. Qual diagnóstico é compatível?",
    alternativas: {
      A: "Hipertermia maligna.",
      B: "Hipercalemia por succinilcolina.",
      C: "Broncoespasmo.",
      D: "Embolia gasosa.",
      E: "Síndrome da secreção inapropriada de ADH."
    },
    resposta: "E",
    comentario: "SIADH causa retenção de água livre com hiponatremia e urina relativamente concentrada, podendo ocorrer em doenças ou cirurgias neurológicas.",
    frase_ouro: "SIADH é água demais segurada por ADH na hora errada."
  },
  {
    id: "yao-079-001",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Embolia por líquido amniótico",
    dificuldade: "alta",
    pergunta: "Durante cesárea, puérpera apresenta dispneia súbita, hipóxia, hipotensão, convulsão e depois sangramento difuso com coagulopatia. Qual diagnóstico deve ser considerado?",
    alternativas: {
      A: "Embolia por líquido amniótico.",
      B: "Hipoglicemia simples.",
      C: "Bloqueio neuromuscular residual.",
      D: "Síndrome pós-RTU.",
      E: "Toxicidade por lidocaína infiltrativa leve."
    },
    resposta: "A",
    comentario: "Embolia por líquido amniótico pode causar colapso cardiovascular, hipóxia, convulsões e coagulopatia grave. O tratamento é suporte intensivo.",
    frase_ouro: "Embolia amniótica é colapso obstétrico com pulmão, coração e coagulação no mesmo incêndio."
  },
  {
    id: "yao-079-002",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Placenta acreta",
    dificuldade: "alta",
    pergunta: "Gestante com placenta prévia e suspeita de acretismo placentário será submetida a cesárea-histerectomia. Qual plano anestésico é mais apropriado?",
    alternativas: {
      A: "Procedimento ambulatorial sem reserva de sangue.",
      B: "Planejar hemorragia maciça: acessos calibrosos, sangue disponível, monitorização adequada, equipe multidisciplinar e estratégia anestésica individualizada.",
      C: "Evitar comunicação com banco de sangue.",
      D: "Usar apenas sedação leve sem plano de conversão.",
      E: "Dispensar uterotônicos e cirurgia."
    },
    resposta: "B",
    comentario: "Acretismo placentário pode causar hemorragia maciça. O preparo inclui equipe experiente, sangue, acesso vascular, monitorização e planejamento cirúrgico-anestésico.",
    frase_ouro: "Placenta acreta não é cesárea comum: é planejamento para sangramento grande."
  },
  {
    id: "yao-079-003",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Anestesia geral em cesárea",
    dificuldade: "média",
    pergunta: "Em cesárea sob anestesia geral, qual preocupação materna é especialmente relevante na indução?",
    alternativas: {
      A: "Ausência de risco de aspiração.",
      B: "Dessaturação lenta por maior reserva pulmonar.",
      C: "Via aérea difícil, aspiração e dessaturação rápida.",
      D: "Impossibilidade de hipertensão na laringoscopia.",
      E: "Proteção completa contra refluxo."
    },
    resposta: "C",
    comentario: "Gestantes têm edema de via aérea, maior risco de aspiração, menor reserva funcional residual e maior consumo de oxigênio, dessaturando rapidamente.",
    frase_ouro: "Na cesárea geral, via aérea e estômago disputam sua atenção."
  },
  {
    id: "yao-079-004",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Bloqueio alto",
    dificuldade: "alta",
    pergunta: "Após anestesia raquidiana para cesárea, paciente apresenta dispneia, dificuldade para falar, hipotensão grave, bradicardia e fraqueza de membros superiores. Qual diagnóstico é provável?",
    alternativas: {
      A: "Broncoespasmo alérgico isolado.",
      B: "Hipoglicemia.",
      C: "Crise tireotóxica.",
      D: "Bloqueio neuraxial alto ou total.",
      E: "Síndrome pós-RTU."
    },
    resposta: "D",
    comentario: "Bloqueio alto pode comprometer musculatura respiratória, simpático cardioacelerador e consciência em casos extremos. Requer suporte ventilatório e hemodinâmico.",
    frase_ouro: "Bloqueio alto não é só anestesia subindo: é ventilação e simpático descendo."
  },
  {
    id: "yao-079-005",
    fonte: "Yao",
    capitulo: "Obstetrícia",
    tema: "Toxicidade do magnésio",
    dificuldade: "média",
    pergunta: "Gestante com eclâmpsia em sulfato de magnésio apresenta arreflexia, sonolência, FR 8 irpm e fraqueza. Qual tratamento antagonista deve estar disponível?",
    alternativas: {
      A: "Protamina.",
      B: "Sugamadex.",
      C: "Dantrolene.",
      D: "Naloxona.",
      E: "Cálcio intravenoso."
    },
    resposta: "E",
    comentario: "Toxicidade por magnésio pode causar depressão respiratória e fraqueza. Cálcio intravenoso antagoniza seus efeitos, além de suporte ventilatório.",
    frase_ouro: "Magnésio em excesso apaga reflexo; cálcio ajuda a acender de novo."
  },
  {
    id: "yao-080-001",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Cardiopatia congênita",
    dificuldade: "alta",
    pergunta: "Lactente com shunt direita-esquerda piora a saturação após indução com queda importante da RVS. Qual medida tende a melhorar a oxigenação?",
    alternativas: {
      A: "Restaurar resistência vascular sistêmica e corrigir hipóxia, acidose e hipovolemia.",
      B: "Aprofundar vasodilatação sistêmica.",
      C: "Reduzir FiO2.",
      D: "Aumentar RVP com hipercapnia.",
      E: "Induzir hipotensão permissiva."
    },
    resposta: "A",
    comentario: "Em shunt direita-esquerda, queda de RVS favorece passagem de sangue venoso para circulação sistêmica. Aumentar RVS pode reduzir shunt e melhorar saturação.",
    frase_ouro: "No shunt direita-esquerda, RVS baixa abre atalho para a cianose."
  },
  {
    id: "yao-080-002",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Prematuridade",
    dificuldade: "média",
    pergunta: "Prematuro submetido a cirurgia inguinal tem risco aumentado de qual complicação pós-operatória?",
    alternativas: {
      A: "Hipertensão essencial.",
      B: "Apneia pós-anestésica.",
      C: "Hipertermia maligna obrigatória.",
      D: "Síndrome pós-RTU.",
      E: "Edema pulmonar por altitude."
    },
    resposta: "B",
    comentario: "Prematuros, especialmente com baixa idade pós-conceptual, têm risco de apneia e bradicardia no pós-operatório, exigindo monitorização.",
    frase_ouro: "Prematuro pode esquecer de respirar depois que a anestesia termina."
  },
  {
    id: "yao-080-003",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Hipertermia em criança",
    dificuldade: "alta",
    pergunta: "Criança em anestesia inalatória apresenta EtCO2 subindo rapidamente, rigidez, taquicardia e acidose. A temperatura ainda está normal. Qual diagnóstico não deve ser descartado?",
    alternativas: {
      A: "Hipoglicemia simples.",
      B: "Síndrome pós-RTU.",
      C: "Hipertermia maligna.",
      D: "Bloqueio neuraxial alto.",
      E: "Reflexo óculo-cardíaco."
    },
    resposta: "C",
    comentario: "Na hipertermia maligna, aumento de CO2, rigidez e acidose podem preceder hipertermia. O tratamento não deve esperar temperatura subir.",
    frase_ouro: "Na hipertermia maligna, o capnógrafo costuma gritar antes do termômetro."
  },
  {
    id: "yao-080-004",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Reposição sanguínea",
    dificuldade: "média",
    pergunta: "Em criança pequena com sangramento cirúrgico, por que perdas aparentemente pequenas em mL podem ser significativas?",
    alternativas: {
      A: "Porque crianças não têm volemia.",
      B: "Porque hemoglobina não importa em pediatria.",
      C: "Porque pressão arterial cai sempre no primeiro minuto.",
      D: "Porque a volemia absoluta é pequena, então a porcentagem perdida pode ser alta.",
      E: "Porque crianças não compensam hipovolemia."
    },
    resposta: "D",
    comentario: "A volemia de crianças é proporcional ao peso, mas o volume absoluto é pequeno. Pequenas perdas em mL podem representar grande fração da volemia.",
    frase_ouro: "Em pediatria, mL pequeno pode ser porcentagem grande."
  },
  {
    id: "yao-080-005",
    fonte: "Yao",
    capitulo: "Pediatria",
    tema: "Extubação",
    dificuldade: "alta",
    pergunta: "Criança após cirurgia de vias aéreas superiores apresenta edema, sangramento residual e história de laringoespasmo prévio. Qual plano de extubação é mais seguro?",
    alternativas: {
      A: "Extubar sem material de reintubação disponível.",
      B: "Reduzir oxigênio antes da extubação.",
      C: "Ignorar sangramento residual.",
      D: "Extubar em local sem equipe.",
      E: "Planejar extubação com via aérea limpa, profundidade adequada, material de resgate e equipe pronta."
    },
    resposta: "E",
    comentario: "Extubação pediátrica de risco deve ser planejada com sucção, oxigênio, material de reintubação e equipe preparada para laringoespasmo/obstrução.",
    frase_ouro: "Extubação difícil também é manejo de via aérea difícil."
  },
  {
    id: "yao-081-001",
    fonte: "Yao",
    capitulo: "Geriatria",
    tema: "Estenose aórtica oculta",
    dificuldade: "alta",
    pergunta: "Idoso de 86 anos, queda com fratura de quadril, sopro sistólico rude, síncope prévia e ECG com hipertrofia ventricular esquerda. Antes de anestesia neuraxial, qual preocupação é mais importante?",
    alternativas: {
      A: "Possível estenose aórtica grave e risco de colapso com bloqueio simpático abrupto.",
      B: "Alergia obrigatória a anestésico local.",
      C: "Ausência de risco cardiovascular por cirurgia ortopédica.",
      D: "Indicação de hipotensão profunda.",
      E: "Dispensa de monitorização."
    },
    resposta: "A",
    comentario: "Síncope, sopro sistólico rude e HVE sugerem estenose aórtica significativa. Bloqueio simpático abrupto pode causar hipotensão grave.",
    frase_ouro: "No idoso com sopro e síncope, antes da raqui pense na valva."
  },
  {
    id: "yao-081-002",
    fonte: "Yao",
    capitulo: "Geriatria",
    tema: "Fragilidade",
    dificuldade: "média",
    pergunta: "Paciente idoso frágil será submetido a colectomia. Qual fator deve pesar no planejamento anestésico e pós-operatório?",
    alternativas: {
      A: "Fragilidade não altera risco.",
      B: "Baixa reserva fisiológica, risco de delirium, perda funcional e complicações.",
      C: "Necessidade de doses sempre maiores.",
      D: "Impossibilidade de hipotensão.",
      E: "Ausência de interação medicamentosa."
    },
    resposta: "B",
    comentario: "Fragilidade aumenta vulnerabilidade a complicações, delirium, perda funcional e necessidade de suporte pós-operatório.",
    frase_ouro: "Fragilidade é reserva fisiológica baixa, não idade no RG."
  },
  {
    id: "yao-081-003",
    fonte: "Yao",
    capitulo: "Geriatria",
    tema: "Hipotensão pós-indução",
    dificuldade: "alta",
    pergunta: "Idoso hipertenso crônico em uso de diurético e BRA apresenta PA 65/35 após indução com dose usual de propofol. Qual explicação é mais provável?",
    alternativas: {
      A: "Propofol nunca causa hipotensão.",
      B: "Hipertenso crônico não sofre com vasodilatação.",
      C: "Redução de reserva autonômica, hipovolemia relativa e bloqueio do SRAA favorecendo vasoplegia pós-indução.",
      D: "Reação fisiológica sem risco.",
      E: "Indicação de vasodilatador."
    },
    resposta: "C",
    comentario: "Idosos hipertensos podem ter complacência reduzida, autorregulação deslocada, hipovolemia por diuréticos e vasoplegia por BRA/IECA.",
    frase_ouro: "No idoso hipertenso, dose comum pode virar hipotensão incomum."
  },
  {
    id: "yao-081-004",
    fonte: "Yao",
    capitulo: "Geriatria",
    tema: "Delirium",
    dificuldade: "média",
    pergunta: "No pós-operatório de idoso, qual medida ajuda a reduzir risco de delirium?",
    alternativas: {
      A: "Privação de sono e contenção física sem indicação.",
      B: "Benzodiazepínico em todos os pacientes.",
      C: "Hipoxemia tolerada.",
      D: "Controle de dor, correção de distúrbios, reorientação, sono e mobilização precoce.",
      E: "Ignorar uso de óculos/aparelho auditivo."
    },
    resposta: "D",
    comentario: "Prevenção de delirium envolve analgesia adequada, sono, reorientação, mobilização, evitar fármacos de risco e corrigir hipóxia/infecção/metabólico.",
    frase_ouro: "Delirium se previne cuidando do cérebro e do ambiente."
  },
  {
    id: "yao-081-005",
    fonte: "Yao",
    capitulo: "Geriatria",
    tema: "Polifarmácia",
    dificuldade: "média",
    pergunta: "Paciente idoso usa anticoagulante, benzodiazepínico, beta-bloqueador e hipoglicemiante. Qual princípio é adequado na avaliação pré-operatória?",
    alternativas: {
      A: "Ignorar medicações se a cirurgia for curta.",
      B: "Suspender tudo sem critério.",
      C: "Aumentar todas as doses no dia da cirurgia.",
      D: "Usar apenas a pressão arterial como avaliação.",
      E: "Revisar interações, risco de sangramento, hipoglicemia, abstinência e efeitos hemodinâmicos."
    },
    resposta: "E",
    comentario: "Polifarmácia aumenta risco de interações, sangramento, delirium, hipoglicemia e instabilidade. Medicações devem ser avaliadas individualmente.",
    frase_ouro: "No idoso, a lista de remédios é parte do monitor."
  },
  {
    id: "yao-082-001",
    fonte: "Yao",
    capitulo: "Dor aguda",
    tema: "Epidural torácica",
    dificuldade: "alta",
    pergunta: "Paciente submetido a laparotomia alta com DPOC importante tem peridural torácica planejada. Qual benefício é esperado, se não houver contraindicação?",
    alternativas: {
      A: "Melhor analgesia, menor resposta simpática e facilitação de tosse/ventilação pós-operatória.",
      B: "Eliminação completa de hipotensão.",
      C: "Dispensa de avaliação de anticoagulação.",
      D: "Bloqueio motor obrigatório de membros inferiores.",
      E: "Impossibilidade de falha do cateter."
    },
    resposta: "A",
    comentario: "Peridural torácica pode melhorar analgesia e função respiratória após laparotomia, mas exige avaliação de coagulação, anticoagulação e hemodinâmica.",
    frase_ouro: "Dor abdominal alta mal tratada vira atelectasia com pós-graduação."
  },
  {
    id: "yao-082-002",
    fonte: "Yao",
    capitulo: "Dor aguda",
    tema: "Bloqueio de parede abdominal",
    dificuldade: "média",
    pergunta: "Após cirurgia abdominal, bloqueios de parede como TAP podem ser úteis principalmente para:",
    alternativas: {
      A: "Tratar dor visceral profunda isoladamente.",
      B: "Reduzir componente somático da dor incisional e poupar opioides.",
      C: "Substituir hemostasia cirúrgica.",
      D: "Corrigir hipercalemia.",
      E: "Reverter anestesia geral."
    },
    resposta: "B",
    comentario: "Bloqueios de parede abdominal atuam no componente somático/incisional, reduzindo necessidade de opioides, mas não cobrem plenamente dor visceral.",
    frase_ouro: "Bloqueio de parede ajuda incisão; víscera ainda pode reclamar."
  },
  {
    id: "yao-082-003",
    fonte: "Yao",
    capitulo: "Dor aguda",
    tema: "Cetamina analgésica",
    dificuldade: "média",
    pergunta: "Em paciente tolerante a opioides, baixa dose de cetamina pode ser considerada porque:",
    alternativas: {
      A: "É antagonista puro de receptor opioide.",
      B: "Reverte bloqueio neuromuscular.",
      C: "Modula receptores NMDA e pode reduzir sensibilização central/consumo de opioide.",
      D: "Não tem qualquer efeito psicomimético.",
      E: "Elimina necessidade de monitorização."
    },
    resposta: "C",
    comentario: "A cetamina em dose subanestésica antagoniza NMDA e pode ser útil em dor intensa, tolerância a opioides e hiperalgesia.",
    frase_ouro: "Na dor difícil, NMDA também entra na conta."
  },
  {
    id: "yao-082-004",
    fonte: "Yao",
    capitulo: "Dor aguda",
    tema: "AINEs",
    dificuldade: "média",
    pergunta: "Em paciente idoso com DRC, sangramento cirúrgico e risco cardiovascular, qual cuidado é correto sobre anti-inflamatórios não esteroidais?",
    alternativas: {
      A: "Usar sempre em dose máxima sem avaliação.",
      B: "Ignorar função renal se dor for intensa.",
      C: "Associar dois AINEs para poupar opioide.",
      D: "Avaliar risco renal, sangramento e cardiovascular antes de usar.",
      E: "AINEs corrigem coagulopatia."
    },
    resposta: "D",
    comentario: "AINEs podem piorar função renal, sangramento e risco cardiovascular em pacientes suscetíveis. O uso deve ser individualizado.",
    frase_ouro: "AINE é bom analgésico, mas rim e plaqueta também votam."
  },
  {
    id: "yao-082-005",
    fonte: "Yao",
    capitulo: "Dor aguda",
    tema: "PCA",
    dificuldade: "média",
    pergunta: "Na analgesia controlada pelo paciente com opioide, qual medida aumenta segurança?",
    alternativas: {
      A: "Permitir que familiares apertem o botão enquanto o paciente dorme.",
      B: "Retirar monitorização de sedação e ventilação.",
      C: "Evitar limites de dose.",
      D: "Usar infusão basal alta em todo paciente naïve.",
      E: "Educar o paciente, usar limites programados e monitorar sedação/respiração."
    },
    resposta: "E",
    comentario: "PCA exige educação, programação segura, limites de dose e monitorização de sedação e ventilação, especialmente em pacientes de risco.",
    frase_ouro: "PCA é controle pelo paciente acordado, não botão para a família."
  },
  {
    id: "yao-083-001",
    fonte: "Yao",
    capitulo: "Náuseas e vômitos",
    tema: "Resgate antiemético",
    dificuldade: "média",
    pergunta: "Paciente recebeu ondansetrona profilática e apresenta vômitos persistentes na recuperação. Qual estratégia de resgate é mais racional?",
    alternativas: {
      A: "Usar antiemético de classe/mecanismo diferente e investigar causas reversíveis.",
      B: "Repetir indefinidamente a mesma dose sem avaliar intervalo.",
      C: "Administrar opioide em bolus para tratar náusea.",
      D: "Suspender oxigênio.",
      E: "Ignorar hidratação e dor."
    },
    resposta: "A",
    comentario: "Falha de profilaxia com uma classe favorece resgate com outro mecanismo, além de corrigir dor, hipotensão, hipovolemia e opioide excessivo.",
    frase_ouro: "PONV que rompe profilaxia pede outro mecanismo, não teimosia."
  },
  {
    id: "yao-083-002",
    fonte: "Yao",
    capitulo: "Náuseas e vômitos",
    tema: "Anestesia venosa total",
    dificuldade: "média",
    pergunta: "Em paciente de alto risco para PONV, qual técnica pode reduzir risco em comparação ao uso de anestésicos voláteis?",
    alternativas: {
      A: "Aumentar óxido nitroso.",
      B: "Anestesia venosa total com propofol, quando apropriada.",
      C: "Usar opioide em dose máxima.",
      D: "Evitar antieméticos.",
      E: "Manter hidratação inadequada."
    },
    resposta: "B",
    comentario: "Propofol em TIVA reduz incidência de PONV em muitos pacientes de risco, especialmente quando combinado a profilaxia multimodal.",
    frase_ouro: "Para PONV alto risco, propofol pode ser antiemético disfarçado de anestesia."
  },
  {
    id: "yao-083-003",
    fonte: "Yao",
    capitulo: "Náuseas e vômitos",
    tema: "Fatores de risco",
    dificuldade: "média",
    pergunta: "Mulher jovem, não tabagista, história de cinetose e previsão de opioide pós-operatório apresenta qual perfil para PONV?",
    alternativas: {
      A: "Baixo risco, sem necessidade de profilaxia.",
      B: "Risco inexistente se o procedimento for curto.",
      C: "Alto risco, favorecendo profilaxia multimodal.",
      D: "Risco apenas se houver raquianestesia.",
      E: "Risco reduzido pelo não tabagismo."
    },
    resposta: "C",
    comentario: "Sexo feminino, não tabagismo, história de PONV/cinetose e uso de opioides são fatores clássicos de risco, justificando profilaxia multimodal.",
    frase_ouro: "PONV tem perfil: se juntou fator demais, previna antes."
  },
  {
    id: "yao-083-004",
    fonte: "Yao",
    capitulo: "Náuseas e vômitos",
    tema: "Aspiração",
    dificuldade: "alta",
    pergunta: "Paciente vomita na recuperação, apresenta dessaturação, tosse intensa e crepitações. Qual complicação deve ser considerada?",
    alternativas: {
      A: "Bloqueio neuromuscular sempre.",
      B: "Hipoglicemia obrigatória.",
      C: "Hipertensão essencial.",
      D: "Aspiração pulmonar ou pneumonite aspirativa.",
      E: "Síndrome pós-RTU."
    },
    resposta: "D",
    comentario: "Vômito com sintomas respiratórios e hipoxemia pode indicar aspiração. Conduta inclui oxigenação, suporte ventilatório, avaliação clínica e tratamento conforme gravidade.",
    frase_ouro: "Vômito com dessaturação deixa de ser PONV e vira via aérea/pulmão."
  },
  {
    id: "yao-083-005",
    fonte: "Yao",
    capitulo: "Náuseas e vômitos",
    tema: "Dexametasona",
    dificuldade: "fácil",
    pergunta: "No contexto de profilaxia de PONV, a dexametasona costuma ser administrada:",
    alternativas: {
      A: "Apenas após vômitos por 24 horas.",
      B: "Somente por via inalatória.",
      C: "Como substituta de oxigênio.",
      D: "Para reverter bloqueio neuromuscular.",
      E: "No intraoperatório, frequentemente no início, como parte de profilaxia multimodal."
    },
    resposta: "E",
    comentario: "Dexametasona é antiemético profilático usado no intraoperatório, frequentemente associado a antagonistas 5-HT3 ou outras classes.",
    frase_ouro: "Dexametasona para PONV funciona melhor como prevenção do que como arrependimento tardio."
  },
  {
    id: "yao-084-001",
    fonte: "Yao",
    capitulo: "Cuidados críticos",
    tema: "Choque cardiogênico",
    dificuldade: "alta",
    pergunta: "Paciente pós-IAM evolui com hipotensão, extremidades frias, lactato alto, estertores pulmonares e eco com FE muito reduzida. Qual padrão de choque é mais provável?",
    alternativas: {
      A: "Choque cardiogênico por falência de bomba.",
      B: "Choque distributivo puro com extremidades quentes.",
      C: "Choque anafilático isolado.",
      D: "Choque neurogênico com bradicardia obrigatória.",
      E: "Hipovolemia leve sem repercussão."
    },
    resposta: "A",
    comentario: "Hipoperfusão com congestão pulmonar e fração de ejeção reduzida sugere choque cardiogênico. Tratamento inclui suporte inotrópico, vasopressor, revascularização e suporte mecânico conforme caso.",
    frase_ouro: "Choque cardiogênico é bomba fraca com órgão pedindo fluxo."
  },
  {
    id: "yao-084-002",
    fonte: "Yao",
    capitulo: "Cuidados críticos",
    tema: "Choque obstrutivo",
    dificuldade: "alta",
    pergunta: "Paciente no intraoperatório apresenta hipotensão súbita, PVC elevada, EtCO2 baixo, VD dilatado no eco e hipoxemia. Qual grupo de diagnósticos deve ser considerado?",
    alternativas: {
      A: "Hipoglicemia e dor.",
      B: "Embolia pulmonar maciça, tamponamento ou pneumotórax hipertensivo.",
      C: "Hipertensão essencial e ansiedade.",
      D: "Bloqueio neuromuscular residual.",
      E: "Síndrome pós-RTU."
    },
    resposta: "B",
    comentario: "Hipotensão com PVC elevada, VD dilatado e EtCO2 baixo sugere choque obstrutivo, especialmente embolia pulmonar, tamponamento ou pneumotórax hipertensivo.",
    frase_ouro: "Choque com VD cheio e débito baixo pede procurar obstrução."
  },
  {
    id: "yao-084-003",
    fonte: "Yao",
    capitulo: "Cuidados críticos",
    tema: "SvO2",
    dificuldade: "alta",
    pergunta: "Paciente em choque apresenta SvO2 de 48%, lactato 6 mmol/L e hemoglobina 7 g/dL. Qual interpretação é mais coerente?",
    alternativas: {
      A: "Extração de oxigênio baixa por excesso de oferta.",
      B: "Perfusão tecidual perfeita.",
      C: "Oferta de oxigênio inadequada em relação ao consumo, podendo envolver baixo débito, anemia ou hipoxemia.",
      D: "Erro inevitável sem valor clínico.",
      E: "Indicação de reduzir hemoglobina."
    },
    resposta: "C",
    comentario: "SvO2 baixa sugere maior extração por oferta insuficiente ou consumo aumentado. Anemia, baixo débito e hipoxemia reduzem entrega de oxigênio.",
    frase_ouro: "SvO2 baixa é tecido extraindo tudo porque a entrega não basta."
  },
  {
    id: "yao-084-004",
    fonte: "Yao",
    capitulo: "Cuidados críticos",
    tema: "Delta PCO2",
    dificuldade: "alta",
    pergunta: "Paciente em choque séptico apresenta SvO2 72%, lactato 3,5 e diferença venoarterial de CO2 elevada. Qual interpretação pode ser feita?",
    alternativas: {
      A: "A diferença venoarterial de CO2 nunca informa fluxo.",
      B: "SvO2 normal exclui hipoperfusão.",
      C: "Lactato elevado sempre é erro laboratorial.",
      D: "Delta PCO2 elevado pode sugerir fluxo sanguíneo inadequado para remover CO2 tecidual.",
      E: "Indica hiperóxia obrigatória."
    },
    resposta: "D",
    comentario: "Delta PCO2 elevado pode refletir baixo fluxo ou má perfusão regional, mesmo quando SvO2 não está baixa, e deve ser interpretado com o contexto clínico.",
    frase_ouro: "Delta CO2 alto lembra que oxigênio não é o único gás que denuncia fluxo ruim."
  },
  {
    id: "yao-084-005",
    fonte: "Yao",
    capitulo: "Cuidados críticos",
    tema: "Vasopressor e perfusão",
    dificuldade: "média",
    pergunta: "Em choque séptico, aumentar noradrenalina elevou PAM de 55 para 70 mmHg, mas lactato segue subindo e extremidades continuam frias. Qual raciocínio é correto?",
    alternativas: {
      A: "PAM normalizada sempre garante perfusão microcirculatória perfeita.",
      B: "Deve-se reduzir oxigênio para baixar lactato.",
      C: "Vasopressor elimina necessidade de avaliar volume/débito.",
      D: "Lactato não tem relação com perfusão.",
      E: "É preciso reavaliar perfusão global e regional, débito, volume, hemoglobina, foco e resposta ao tratamento."
    },
    resposta: "E",
    comentario: "PAM é necessária, mas não suficiente. Perfusão depende de débito, volume, microcirculação, hemoglobina, oxigenação e controle do foco.",
    frase_ouro: "Pressão boa não garante célula feliz."
  },
  {
    id: "yao-085-001",
    fonte: "Yao",
    capitulo: "Hematologia",
    tema: "TEG/ROTEM",
    dificuldade: "alta",
    pergunta: "Paciente em cirurgia hepática sangra difusamente. ROTEM sugere baixa firmeza do coágulo no teste de fibrinogênio. Qual intervenção é mais direcionada?",
    alternativas: {
      A: "Crioprecipitado ou concentrado de fibrinogênio.",
      B: "Naloxona.",
      C: "Atropina.",
      D: "Sugamadex.",
      E: "Dantrolene."
    },
    resposta: "A",
    comentario: "Baixa contribuição do fibrinogênio para firmeza do coágulo sugere necessidade de reposição de fibrinogênio, guiada por sangramento e testes.",
    frase_ouro: "ROTEM bom não manda tudo: manda o que falta."
  },
  {
    id: "yao-085-002",
    fonte: "Yao",
    capitulo: "Hematologia",
    tema: "Heparina residual",
    dificuldade: "média",
    pergunta: "Após cirurgia cardíaca, paciente sangra difusamente e ACT permanece prolongado após dose insuficiente de protamina. Qual hipótese é provável?",
    alternativas: {
      A: "Hipocalcemia isolada como única causa.",
      B: "Heparina residual contribuindo para sangramento.",
      C: "Ausência de coagulopatia.",
      D: "Hiperglicemia.",
      E: "Bloqueio neuromuscular residual."
    },
    resposta: "B",
    comentario: "ACT prolongado após CEC pode indicar heparina residual, embora sangramento pós-cardíaco frequentemente seja multifatorial.",
    frase_ouro: "Depois da CEC, sangramento pode ter bisturi, plaqueta, fibrina e heparina no mesmo palco."
  },
  {
    id: "yao-085-003",
    fonte: "Yao",
    capitulo: "Hematologia",
    tema: "Plaquetas",
    dificuldade: "média",
    pergunta: "Paciente pós-CEC apresenta sangramento difuso, plaquetas 48.000 e fibrinogênio adequado. Qual reposição pode ser indicada?",
    alternativas: {
      A: "Dantrolene.",
      B: "Naloxona.",
      C: "Concentrado de plaquetas.",
      D: "Vasodilatador arterial.",
      E: "Diurético."
    },
    resposta: "C",
    comentario: "Plaquetopenia ou disfunção plaquetária pós-CEC pode contribuir para sangramento. Reposição deve ser guiada por sangramento e exames.",
    frase_ouro: "Fibrina sem plaqueta não constrói tampão que preste."
  },
  {
    id: "yao-085-004",
    fonte: "Yao",
    capitulo: "Hematologia",
    tema: "Antifibrinolítico",
    dificuldade: "média",
    pergunta: "Durante cirurgia com sangramento importante, testes sugerem hiperfibrinólise. Qual fármaco pode ser considerado?",
    alternativas: {
      A: "Sugamadex.",
      B: "Protamina se não houve heparina.",
      C: "Furosemida.",
      D: "Ácido tranexâmico.",
      E: "Atropina."
    },
    resposta: "D",
    comentario: "Ácido tranexâmico inibe fibrinólise e pode ser útil quando há hiperfibrinólise ou em protocolos de redução de sangramento.",
    frase_ouro: "Se o coágulo nasce e dissolve rápido, pense em frear fibrinólise."
  },
  {
    id: "yao-085-005",
    fonte: "Yao",
    capitulo: "Hematologia",
    tema: "Anticoagulante oral",
    dificuldade: "alta",
    pergunta: "Paciente em anticoagulante oral chega com sangramento intracraniano e necessidade de cirurgia emergencial. Qual princípio é correto?",
    alternativas: {
      A: "Aguardar eliminação espontânea por dias em todos os casos.",
      B: "Ignorar horário da última dose.",
      C: "Fazer neuraxial apesar de anticoagulação plena.",
      D: "Administrar anti-inflamatório para reverter anticoagulação.",
      E: "Identificar o anticoagulante, tempo da última dose, função renal e usar reversão específica ou hemostática conforme disponibilidade."
    },
    resposta: "E",
    comentario: "Reversão depende do anticoagulante, urgência, função renal e gravidade. Pode envolver antídotos específicos, complexo protrombínico, plasma ou medidas de suporte.",
    frase_ouro: "Anticoagulado sangrando exige nome da droga, relógio e plano de reversão."
  },
  {
    id: "yao-086-001",
    fonte: "Yao",
    capitulo: "Anafilaxia",
    tema: "Diagnóstico diferencial",
    dificuldade: "alta",
    pergunta: "Após indução, paciente tem hipotensão e broncoespasmo. Não há rash visível porque está coberto por campos. Qual raciocínio é correto?",
    alternativas: {
      A: "Anafilaxia continua possível, mesmo sem sinais cutâneos evidentes.",
      B: "Ausência de rash exclui anafilaxia.",
      C: "Broncoespasmo nunca ocorre em anafilaxia.",
      D: "Adrenalina é proibida em choque anafilático.",
      E: "O caso deve ser tratado apenas com diurético."
    },
    resposta: "A",
    comentario: "Sinais cutâneos podem estar ocultos ou ausentes. Colapso cardiovascular e broncoespasmo após exposição a gatilho são compatíveis com anafilaxia.",
    frase_ouro: "Na anestesia, anafilaxia pode estar debaixo do campo cirúrgico."
  },
  {
    id: "yao-086-002",
    fonte: "Yao",
    capitulo: "Anafilaxia",
    tema: "Tripase",
    dificuldade: "média",
    pergunta: "Após suspeita de anafilaxia perioperatória, qual exame pode ajudar na confirmação posterior do evento?",
    alternativas: {
      A: "Urocultura imediata.",
      B: "Dosagem seriada de triptase sérica em tempo apropriado.",
      C: "Radiografia de tornozelo.",
      D: "Teste ergométrico intraoperatório.",
      E: "Dosagem de amilase salivar."
    },
    resposta: "B",
    comentario: "Triptase sérica pode ajudar a confirmar ativação mastocitária se colhida em janela temporal adequada, complementando investigação alérgica posterior.",
    frase_ouro: "Na anafilaxia, trate primeiro; investigue com triptase depois."
  },
  {
    id: "yao-086-003",
    fonte: "Yao",
    capitulo: "Anafilaxia",
    tema: "Adrenalina",
    dificuldade: "alta",
    pergunta: "Durante anafilaxia grave com colapso cardiovascular, por que adrenalina é droga central?",
    alternativas: {
      A: "Porque reverte bloqueio neuromuscular.",
      B: "Porque antagoniza heparina.",
      C: "Porque causa vasoconstrição, broncodilatação e suporte inotrópico/cronotrópico.",
      D: "Porque é antiemético puro.",
      E: "Porque reduz cálcio sérico."
    },
    resposta: "C",
    comentario: "Adrenalina trata vasodilatação e edema por alfa, broncoespasmo por beta-2 e suporte cardíaco por beta-1.",
    frase_ouro: "Anafilaxia grave precisa de adrenalina porque o problema é vaso aberto, pulmão fechado e coração sofrendo."
  },
  {
    id: "yao-086-004",
    fonte: "Yao",
    capitulo: "Anafilaxia",
    tema: "Refratariedade",
    dificuldade: "alta",
    pergunta: "Paciente em beta-bloqueador apresenta anafilaxia com hipotensão e broncoespasmo pouco responsivos a adrenalina. Qual adjuvante pode ser considerado?",
    alternativas: {
      A: "Nitroprussiato.",
      B: "Furosemida.",
      C: "Dantrolene.",
      D: "Glucagon.",
      E: "Flumazenil."
    },
    resposta: "D",
    comentario: "Glucagon pode ajudar em anafilaxia refratária em pacientes beta-bloqueados por aumentar AMPc por via independente do receptor beta.",
    frase_ouro: "Beta-bloqueado em anafilaxia pode precisar de caminho fora do receptor beta."
  },
  {
    id: "yao-086-005",
    fonte: "Yao",
    capitulo: "Anafilaxia",
    tema: "Látex",
    dificuldade: "média",
    pergunta: "Paciente com múltiplas cirurgias prévias e alergia conhecida a látex será operado. Qual medida preventiva é adequada?",
    alternativas: {
      A: "Ignorar alergia se procedimento for curto.",
      B: "Usar luvas de látex e tratar se houver reação.",
      C: "Administrar protamina profilática.",
      D: "Evitar monitorização.",
      E: "Ambiente e materiais livres de látex, com comunicação clara à equipe."
    },
    resposta: "E",
    comentario: "A prevenção de reação ao látex exige remoção de fontes de exposição e comunicação com toda a equipe.",
    frase_ouro: "Alergia a látex se previne antes da sala tocar no paciente."
  },
  {
    id: "yao-087-001",
    fonte: "Yao",
    capitulo: "Cirurgia laparoscópica",
    tema: "Pneumoperitônio e retorno venoso",
    dificuldade: "alta",
    pergunta: "Paciente hipovolêmico em laparoscopia apresenta queda de pressão após insuflação de CO2. Qual mecanismo pode contribuir?",
    alternativas: {
      A: "Aumento da pressão intra-abdominal reduzindo retorno venoso.",
      B: "Redução da pressão intra-abdominal.",
      C: "Melhora obrigatória do débito cardíaco.",
      D: "Aumento da complacência pulmonar.",
      E: "Redução de PaCO2."
    },
    resposta: "A",
    comentario: "O pneumoperitônio aumenta pressão intra-abdominal, podendo reduzir retorno venoso, principalmente em hipovolemia ou pressões elevadas.",
    frase_ouro: "Pneumoperitônio em hipovolêmico espreme a veia cava que já vinha vazia."
  },
  {
    id: "yao-087-002",
    fonte: "Yao",
    capitulo: "Cirurgia laparoscópica",
    tema: "Posição em Trendelenburg",
    dificuldade: "média",
    pergunta: "Durante laparoscopia pélvica em Trendelenburg, qual alteração respiratória pode ocorrer?",
    alternativas: {
      A: "Aumento importante da complacência pulmonar.",
      B: "Redução da complacência e aumento de pressões ventilatórias.",
      C: "Eliminação de atelectasias em todos os casos.",
      D: "Ausência de alteração diafragmática.",
      E: "Redução obrigatória de PaCO2."
    },
    resposta: "B",
    comentario: "Trendelenburg e pneumoperitônio deslocam o diafragma cranialmente, reduzem complacência e podem elevar pressões de via aérea.",
    frase_ouro: "Trendelenburg empurra o abdome contra o pulmão."
  },
  {
    id: "yao-087-003",
    fonte: "Yao",
    capitulo: "Cirurgia laparoscópica",
    tema: "Hipercapnia",
    dificuldade: "média",
    pergunta: "Durante laparoscopia prolongada, EtCO2 sobe apesar de ventilação aparentemente estável. Qual causa deve ser considerada?",
    alternativas: {
      A: "Absorção sistêmica de CO2 do pneumoperitônio.",
      B: "Ausência de produção de CO2.",
      C: "Hipotermia profunda como única causa.",
      D: "Hiperventilação acidental.",
      E: "Reversão completa do metabolismo."
    },
    resposta: "A",
    comentario: "CO2 usado no pneumoperitônio pode ser absorvido, aumentando carga ventilatória e exigindo ajuste da ventilação minuto.",
    frase_ouro: "Na laparoscopia, CO2 não fica só na barriga."
  },
  {
    id: "yao-087-004",
    fonte: "Yao",
    capitulo: "Cirurgia laparoscópica",
    tema: "Pneumotórax por CO2",
    dificuldade: "alta",
    pergunta: "Durante laparoscopia, paciente apresenta aumento súbito de pressão de vias aéreas, hipoxemia e redução de murmúrio vesicular unilateral. Qual complicação deve ser considerada?",
    alternativas: {
      A: "Síndrome pós-RTU.",
      B: "Hipoglicemia.",
      C: "Hematoma cervical.",
      D: "Pneumotórax ou capnotórax.",
      E: "Reflexo óculo-cardíaco."
    },
    resposta: "D",
    comentario: "Pneumotórax/capnotórax pode ocorrer por passagem de CO2 para tórax, causando hipoxemia, pressão de via aérea alta e instabilidade.",
    frase_ouro: "Na laparoscopia, CO2 pode encontrar caminho para o tórax."
  },
  {
    id: "yao-087-005",
    fonte: "Yao",
    capitulo: "Cirurgia laparoscópica",
    tema: "Dor no ombro pós-laparoscopia",
    dificuldade: "fácil",
    pergunta: "Dor referida no ombro após laparoscopia está relacionada principalmente a irritação de qual estrutura?",
    alternativas: {
      A: "Nervo radial.",
      B: "Plexo lombar.",
      C: "Nervo facial.",
      D: "Nervo óptico.",
      E: "Diafragma/nervo frênico."
    },
    resposta: "E",
    comentario: "CO2 residual e irritação diafragmática podem causar dor referida no ombro via nervo frênico.",
    frase_ouro: "Depois da laparoscopia, ombro pode ser diafragma reclamando."
  },
  {
    id: "yao-088-001",
    fonte: "Yao",
    capitulo: "Urologia",
    tema: "Feocromocitoma vesical",
    dificuldade: "alta",
    pergunta: "Durante ressecção de tumor vesical, paciente apresenta crises hipertensivas durante manipulação e história de palpitações ao urinar. Qual diagnóstico raro deve ser considerado?",
    alternativas: {
      A: "Feocromocitoma/paraganglioma vesical.",
      B: "Síndrome pós-RTU obrigatória.",
      C: "Bloqueio neuromuscular residual.",
      D: "Hipoglicemia simples.",
      E: "Reflexo óculo-cardíaco."
    },
    resposta: "A",
    comentario: "Paraganglioma vesical pode liberar catecolaminas durante micção ou manipulação, causando crises hipertensivas.",
    frase_ouro: "Hipertensão ao manipular bexiga pode ser catecolamina escondida."
  },
  {
    id: "yao-088-002",
    fonte: "Yao",
    capitulo: "Urologia",
    tema: "Insuflação renal percutânea",
    dificuldade: "média",
    pergunta: "Durante nefrolitotripsia percutânea, paciente em prona apresenta sangramento importante e hipotensão. Qual conduta é correta?",
    alternativas: {
      A: "Ignorar por ser procedimento endoscópico.",
      B: "Reconhecer possível sangramento renal significativo, comunicar cirurgião, repor volume/hemoderivados e monitorar hemodinâmica.",
      C: "Administrar apenas antiemético.",
      D: "Reduzir oxigênio.",
      E: "Retirar todos os acessos."
    },
    resposta: "B",
    comentario: "Procedimentos percutâneos renais podem causar sangramento importante. Posição prona dificulta acesso, exigindo preparo e comunicação.",
    frase_ouro: "Endoscópico não significa sem sangramento."
  },
  {
    id: "yao-088-003",
    fonte: "Yao",
    capitulo: "Urologia",
    tema: "Cistectomia radical",
    dificuldade: "alta",
    pergunta: "Paciente idoso será submetido a cistectomia radical prolongada. Qual preocupação anestésica é relevante?",
    alternativas: {
      A: "Ausência de perda sanguínea.",
      B: "Procedimento sempre ambulatorial.",
      C: "Grande perda de fluidos/sangue, hipotermia, dor, distúrbios eletrolíticos e necessidade de cuidado pós-operatório.",
      D: "Não há risco tromboembólico.",
      E: "Não há manipulação abdominal."
    },
    resposta: "C",
    comentario: "Cistectomia radical é cirurgia de grande porte, com risco de sangramento, mudanças volêmicas, hipotermia, dor e complicações pós-operatórias.",
    frase_ouro: "Cistectomia radical é maratona de volume, sangue, temperatura e dor."
  },
  {
    id: "yao-088-004",
    fonte: "Yao",
    capitulo: "Urologia",
    tema: "Postura e nervos",
    dificuldade: "média",
    pergunta: "Paciente em litotomia alta prolongada acorda com dor e fraqueza em território fibular. Qual mecanismo é provável?",
    alternativas: {
      A: "Reflexo óculo-cardíaco.",
      B: "Síndrome pós-reperfusão hepática.",
      C: "Hipoglicemia.",
      D: "Compressão/estiramento de nervo periférico por posicionamento.",
      E: "Toxicidade por protamina."
    },
    resposta: "D",
    comentario: "Litotomia pode lesar nervos periféricos por compressão ou estiramento, especialmente fibular comum, femoral, obturatório e ciático.",
    frase_ouro: "Posição mal cuidada vira neuropatia bem lembrada."
  },
  {
    id: "yao-088-005",
    fonte: "Yao",
    capitulo: "Urologia",
    tema: "Irrigação",
    dificuldade: "média",
    pergunta: "Em procedimento urológico com irrigação abundante, qual sinal pode sugerir absorção excessiva de fluido?",
    alternativas: {
      A: "Normotermia estável sem sintomas.",
      B: "Ausência de alteração neurológica.",
      C: "Redução de peso intraoperatória.",
      D: "Melhora súbita e sustentada da diurese apenas.",
      E: "Confusão, náuseas, hipertensão/bradicardia ou hiponatremia conforme solução."
    },
    resposta: "E",
    comentario: "Absorção de irrigação pode causar sobrecarga volêmica e, se solução hipotônica, hiponatremia com sintomas neurológicos e cardiovasculares.",
    frase_ouro: "Irrigação que some do campo pode aparecer no sódio."
  },
  {
    id: "yao-089-001",
    fonte: "Yao",
    capitulo: "Ortopedia",
    tema: "Torniquete",
    dificuldade: "média",
    pergunta: "Após insuflação prolongada de torniquete em membro inferior, qual alteração pode ocorrer ao desinsuflar?",
    alternativas: {
      A: "Retorno de metabólitos ácidos, potássio e queda transitória de pressão.",
      B: "Aumento obrigatório e sustentado da pressão arterial.",
      C: "Redução de lactato no sangue sistêmico.",
      D: "Eliminação de dor pós-operatória.",
      E: "Impossibilidade de embolia."
    },
    resposta: "A",
    comentario: "Desinsuflação do torniquete libera metabólitos acumulados, podendo causar acidose transitória, hipercalemia discreta e hipotensão.",
    frase_ouro: "Torniquete guarda metabolismo; ao soltar, ele devolve a conta."
  },
  {
    id: "yao-089-002",
    fonte: "Yao",
    capitulo: "Ortopedia",
    tema: "Fratura de quadril",
    dificuldade: "alta",
    pergunta: "Idoso com fratura de quadril, anemia, DPOC e estenose aórtica moderada precisa de cirurgia. Qual abordagem anestésica é mais adequada?",
    alternativas: {
      A: "Escolher técnica sem avaliar comorbidades.",
      B: "Individualizar técnica, otimizar dor, volume, hemoglobina, monitorização e evitar hipotensão/hipoxemia.",
      C: "Adiar indefinidamente toda fratura de quadril.",
      D: "Induzir hipotensão profunda.",
      E: "Evitar analgesia para manter consciência."
    },
    resposta: "B",
    comentario: "Fratura de quadril em idoso exige equilíbrio entre urgência, comorbidades, analgesia, hemodinâmica, oxigenação e risco de delirium.",
    frase_ouro: "No quadril do idoso, a anestesia começa tratando dor e respeitando reserva."
  },
  {
    id: "yao-089-003",
    fonte: "Yao",
    capitulo: "Ortopedia",
    tema: "Síndrome compartimental",
    dificuldade: "alta",
    pergunta: "Após revascularização e fixação de fratura de perna, paciente relata dor desproporcional, parestesias e dor à extensão passiva. Qual diagnóstico deve ser considerado?",
    alternativas: {
      A: "Náusea pós-operatória.",
      B: "Bloqueio neuromuscular residual.",
      C: "Síndrome compartimental.",
      D: "Hipoglicemia.",
      E: "Hipocalcemia por tireoidectomia."
    },
    resposta: "C",
    comentario: "Dor desproporcional, dor à extensão passiva, parestesias e déficit progressivo sugerem síndrome compartimental, uma emergência cirúrgica.",
    frase_ouro: "Dor desproporcional em membro fechado é compartimento até prova em contrário."
  },
  {
    id: "yao-089-004",
    fonte: "Yao",
    capitulo: "Ortopedia",
    tema: "Prótese total",
    dificuldade: "média",
    pergunta: "Na artroplastia total de quadril, qual evento pode ocorrer durante luxação/fresagem/cimentação do canal femoral?",
    alternativas: {
      A: "Ausência de embolização.",
      B: "Hipoglicemia obrigatória.",
      C: "Síndrome pós-RTU.",
      D: "Embolização gordurosa/medular com repercussão pulmonar e hemodinâmica.",
      E: "Reflexo óculo-cardíaco."
    },
    resposta: "D",
    comentario: "Manipulação do canal femoral pode liberar material medular/gorduroso, especialmente em próteses cimentadas, causando hipóxia e instabilidade.",
    frase_ouro: "Canal femoral pressurizado pode mandar problema para o pulmão."
  },
  {
    id: "yao-089-005",
    fonte: "Yao",
    capitulo: "Ortopedia",
    tema: "Anticoagulação pós-operatória",
    dificuldade: "média",
    pergunta: "Paciente com cateter peridural após artroplastia receberá anticoagulação profilática. Qual princípio é correto?",
    alternativas: {
      A: "Retirar cateter a qualquer momento, sem considerar anticoagulante.",
      B: "Anticoagulação não altera risco neuraxial.",
      C: "Manter cateter indefinidamente.",
      D: "Usar dose terapêutica sem protocolo.",
      E: "Planejar administração e retirada do cateter respeitando intervalos seguros."
    },
    resposta: "E",
    comentario: "Cateter neuraxial e anticoagulação exigem respeito a intervalos de administração e retirada para reduzir risco de hematoma epidural.",
    frase_ouro: "Cateter peridural com anticoagulante exige calendário, não improviso."
  },
  {
    id: "yao-090-001",
    fonte: "Yao",
    capitulo: "Otorrinolaringologia",
    tema: "Amigdalectomia",
    dificuldade: "alta",
    pergunta: "Criança retorna ao centro cirúrgico por sangramento pós-amigdalectomia, pálida, taquicárdica e com vômitos de sangue. Qual plano de indução é mais seguro?",
    alternativas: {
      A: "Tratar como estômago cheio com sangue deglutido, preparar aspiração, acesso, reposição e indução rápida com via aérea planejada.",
      B: "Sedação profunda sem proteção de via aérea.",
      C: "Indução inalatória lenta obrigatória sem acesso.",
      D: "Evitar aspirador para não estimular.",
      E: "Assumir volemia normal se pressão estiver preservada."
    },
    resposta: "A",
    comentario: "Sangramento pós-amigdalectomia envolve hipovolemia potencial e estômago cheio de sangue. A via aérea deve ser protegida com preparo para aspiração.",
    frase_ouro: "Sangramento de amígdala é via aérea com sangue e estômago cheio."
  },
  {
    id: "yao-090-002",
    fonte: "Yao",
    capitulo: "Otorrinolaringologia",
    tema: "Epiglotite",
    dificuldade: "alta",
    pergunta: "Criança com suspeita de epiglotite está sentada, babando, febril e estridorosa. Qual princípio é mais adequado?",
    alternativas: {
      A: "Deitar à força para examinar orofaringe.",
      B: "Evitar agitação, manter posição de conforto e controlar via aérea em ambiente com equipe cirúrgica pronta.",
      C: "Sedação profunda imediata sem material.",
      D: "Enviar sozinha para radiografia.",
      E: "Tentar múltiplas punções venosas antes de oxigênio."
    },
    resposta: "B",
    comentario: "Epiglotite pode obstruir subitamente. Deve-se evitar agitação e manipulação desnecessária, preparando controle de via aérea com equipe experiente.",
    frase_ouro: "Na epiglotite, mexer demais pode fechar a última fresta."
  },
  {
    id: "yao-090-003",
    fonte: "Yao",
    capitulo: "Otorrinolaringologia",
    tema: "Corpo estranho de via aérea",
    dificuldade: "alta",
    pergunta: "Criança com corpo estranho brônquico parcial será submetida a broncoscopia rígida. Qual preocupação anestésica é central?",
    alternativas: {
      A: "Ausência de risco de obstrução.",
      B: "Ventilação sempre fácil.",
      C: "Via aérea compartilhada, risco de deslocar corpo estranho e necessidade de comunicação contínua com broncoscopista.",
      D: "Evitar oxigênio.",
      E: "Usar bloqueio neuromuscular sempre antes de confirmar plano."
    },
    resposta: "C",
    comentario: "Corpo estranho exige manejo conjunto da via aérea, com risco de obstrução total, hipoxemia e necessidade de ventilação através do broncoscópio.",
    frase_ouro: "Corpo estranho é via aérea compartilhada com uma rolha móvel."
  },
  {
    id: "yao-090-004",
    fonte: "Yao",
    capitulo: "Otorrinolaringologia",
    tema: "Traqueostomia",
    dificuldade: "média",
    pergunta: "Durante traqueostomia em paciente com via aérea crítica, qual comunicação é essencial?",
    alternativas: {
      A: "Retirar tubo sem avisar.",
      B: "Desligar capnografia.",
      C: "Evitar plano de emergência.",
      D: "Coordenar posição do tubo, ventilação, entrada na traqueia e plano se perda de via aérea.",
      E: "Manter cuff sempre furado."
    },
    resposta: "D",
    comentario: "Traqueostomia com via aérea crítica exige comunicação precisa entre anestesia e cirurgia para evitar perda de ventilação durante abertura traqueal.",
    frase_ouro: "Na traqueostomia difícil, silêncio entre anestesia e cirurgia é inimigo da via aérea."
  },
  {
    id: "yao-090-005",
    fonte: "Yao",
    capitulo: "Otorrinolaringologia",
    tema: "Obstrução tumoral de via aérea",
    dificuldade: "alta",
    pergunta: "Paciente com tumor laríngeo quase obstrutivo, estridor em repouso e piora ao deitar será operado. Qual estratégia é mais segura?",
    alternativas: {
      A: "Indução rápida com bloqueio neuromuscular antes de avaliar via aérea.",
      B: "Sedação profunda na enfermaria.",
      C: "Deitar obrigatoriamente para reduzir estridor.",
      D: "Tentar intubação repetida sem plano cirúrgico.",
      E: "Planejar manutenção de ventilação espontânea e acesso cirúrgico imediato, com equipe experiente."
    },
    resposta: "E",
    comentario: "Em obstrução fixa crítica, indução e relaxamento podem causar perda completa da via aérea. Deve-se planejar técnica mantendo ventilação espontânea e acesso cirúrgico.",
    frase_ouro: "Tumor laríngeo crítico não perdoa indução sem saída cirúrgica."
  },
  {
    id: "yao-091-001",
    fonte: "Yao",
    capitulo: "Oftalmologia",
    tema: "Globo aberto",
    dificuldade: "alta",
    pergunta: "Paciente com trauma ocular penetrante precisa de cirurgia. Qual objetivo anestésico é mais importante na indução e emergência?",
    alternativas: {
      A: "Evitar aumento de pressão intraocular por tosse, vômito, laringoscopia intensa ou hipertensão.",
      B: "Estimular tosse para expulsar conteúdo ocular.",
      C: "Induzir vômito para esvaziar estômago.",
      D: "Manter plano superficial durante intubação.",
      E: "Ignorar analgesia."
    },
    resposta: "A",
    comentario: "Em globo aberto, aumentos de pressão intraocular podem piorar extrusão de conteúdo ocular. Intubação e emergência devem ser suaves.",
    frase_ouro: "Globo aberto não gosta de tosse, vômito nem pressão."
  },
  {
    id: "yao-091-002",
    fonte: "Yao",
    capitulo: "Oftalmologia",
    tema: "Náuseas pós-operatórias",
    dificuldade: "média",
    pergunta: "Após cirurgia ocular, por que a prevenção de náuseas e vômitos é especialmente importante?",
    alternativas: {
      A: "Porque vômito reduz pressão intraocular.",
      B: "Porque vômito pode aumentar pressão venosa/intraocular e ameaçar o resultado cirúrgico.",
      C: "Porque antiemético é sempre contraindicado.",
      D: "Porque náusea elimina dor.",
      E: "Porque oxigênio causa PONV obrigatório."
    },
    resposta: "B",
    comentario: "Vômitos aumentam pressão venosa e intraocular, podendo prejudicar feridas oculares e aumentar risco em cirurgias delicadas.",
    frase_ouro: "Depois de cirurgia ocular, vômito é pressão onde não deve."
  },
  {
    id: "yao-091-003",
    fonte: "Yao",
    capitulo: "Oftalmologia",
    tema: "Bloqueio retrobulbar",
    dificuldade: "alta",
    pergunta: "Após bloqueio retrobulbar, paciente apresenta alteração de consciência, apneia e instabilidade. Qual complicação deve ser considerada?",
    alternativas: {
      A: "Hipoglicemia por insulina.",
      B: "Síndrome pós-RTU.",
      C: "Injeção intratecal/subaracnoidea ou disseminação central do anestésico local.",
      D: "Hipertermia maligna por bloqueio ocular.",
      E: "Reflexo óculo-cardíaco isolado sem gravidade."
    },
    resposta: "C",
    comentario: "Bloqueios orbitários podem raramente disseminar anestésico local para sistema nervoso central, causando depressão respiratória, alteração mental e instabilidade.",
    frase_ouro: "Bloqueio ocular pequeno pode ter complicação central grande."
  },
  {
    id: "yao-091-004",
    fonte: "Yao",
    capitulo: "Oftalmologia",
    tema: "Reflexo óculo-cardíaco",
    dificuldade: "média",
    pergunta: "Qual fármaco pode ser usado se bradicardia por reflexo óculo-cardíaco persistir apesar de interromper a tração?",
    alternativas: {
      A: "Protamina.",
      B: "Dantrolene.",
      C: "Nitroprussiato.",
      D: "Atropina ou outro anticolinérgico.",
      E: "Furosemida."
    },
    resposta: "D",
    comentario: "Se a bradicardia vagal persistir ou for grave, anticolinérgicos como atropina podem ser utilizados, além de interromper o estímulo.",
    frase_ouro: "No reflexo óculo-cardíaco, primeiro solta; se o vago insistir, atropina."
  },
  {
    id: "yao-091-005",
    fonte: "Yao",
    capitulo: "Oftalmologia",
    tema: "Pressão intraocular",
    dificuldade: "média",
    pergunta: "Qual medida ajuda a evitar aumento de pressão intraocular na extubação?",
    alternativas: {
      A: "Extubar com tosse vigorosa.",
      B: "Permitir hipertensão e vômitos.",
      C: "Plano superficial e aspiração traumática.",
      D: "Hipercapnia intensa.",
      E: "Emergência suave com controle de tosse, dor, náusea e pressão arterial."
    },
    resposta: "E",
    comentario: "Tosse, vômito, dor e hipertensão elevam pressão intraocular. Extubação deve ser planejada para minimizar esses estímulos.",
    frase_ouro: "Extubação ocular boa é aquela que o olho nem percebe."
  },
  {
    id: "yao-092-001",
    fonte: "Yao",
    capitulo: "Emergências anestésicas",
    tema: "Parada em atividade elétrica sem pulso",
    dificuldade: "alta",
    pergunta: "Durante laparotomia por abdome agudo, paciente séptico evolui subitamente com ausência de pulso, ritmo organizado no monitor, EtCO2 muito baixo e hipotensão prévia importante. Qual raciocínio inicial é mais adequado?",
    alternativas: {
      A: "Tratar como atividade elétrica sem pulso, iniciar RCP de alta qualidade, adrenalina e procurar causas reversíveis como hipovolemia, hipóxia, acidose, hipercalemia, tamponamento, pneumotórax e tromboembolismo.",
      B: "Aguardar porque ritmo organizado exclui parada cardíaca.",
      C: "Administrar apenas antiemético.",
      D: "Reduzir oxigênio para evitar hiperóxia.",
      E: "Fazer extubação imediata."
    },
    resposta: "A",
    comentario: "Atividade elétrica sem pulso é ritmo organizado sem pulso efetivo. O tratamento exige RCP imediata, adrenalina e busca ativa das causas reversíveis.",
    frase_ouro: "Ritmo bonito sem pulso é parada até prova em contrário."
  },
  {
    id: "yao-092-002",
    fonte: "Yao",
    capitulo: "Emergências anestésicas",
    tema: "Hipotensão pós-indução",
    dificuldade: "alta",
    pergunta: "Paciente idoso, séptico, em uso de losartana, chega para laparotomia. Após indução titulada, apresenta PA 55/30 mmHg, pele quente, eco sem hipovolemia importante e resposta ruim a fenilefrina. Qual hipótese e conduta fazem mais sentido?",
    alternativas: {
      A: "Hipertensão paradoxal; tratar com nitroprussiato.",
      B: "Vasoplegia pós-indução potencializada por sepse e bloqueio do sistema renina-angiotensina; usar noradrenalina e considerar vasopressina se refratário.",
      C: "Broncoespasmo como única causa.",
      D: "Hipertermia maligna obrigatória.",
      E: "Síndrome pós-RTU."
    },
    resposta: "B",
    comentario: "Sepse e uso de IECA/BRA podem favorecer vasodilatação importante e hipotensão refratária a catecolaminas. Vasopressina pode ser útil quando há vasoplegia resistente.",
    frase_ouro: "Sepse com BRA pode transformar a indução em prova de vasoplegia."
  },
  {
    id: "yao-092-003",
    fonte: "Yao",
    capitulo: "Emergências anestésicas",
    tema: "Hipoxemia após intubação",
    dificuldade: "alta",
    pergunta: "Após intubação orotraqueal, paciente apresenta saturação 78%, capnografia presente, murmúrio vesicular apenas à direita e pressão de via aérea elevada. Qual é a causa mais provável?",
    alternativas: {
      A: "Intubação esofágica confirmada.",
      B: "Hipoglicemia.",
      C: "Intubação seletiva direita ou obstrução/alteração ventilatória unilateral.",
      D: "Analgesia adequada.",
      E: "Hipotermia leve."
    },
    resposta: "C",
    comentario: "Capnografia presente confirma ventilação com CO2 exalado, mas murmúrio unilateral e pressão elevada sugerem intubação seletiva, obstrução ou pneumotórax. A posição do tubo deve ser checada imediatamente.",
    frase_ouro: "Capnograma confirma ventilação; ausculta mostra para qual pulmão."
  },
  {
    id: "yao-092-004",
    fonte: "Yao",
    capitulo: "Emergências anestésicas",
    tema: "Pneumotórax hipertensivo",
    dificuldade: "alta",
    pergunta: "Paciente politraumatizado sob ventilação mecânica desenvolve hipotensão súbita, dessaturação, aumento de pressão de vias aéreas, desvio traqueal e murmúrio abolido à esquerda. Qual conduta é mais adequada?",
    alternativas: {
      A: "Aguardar radiografia antes de qualquer intervenção.",
      B: "Administrar beta-bloqueador.",
      C: "Reduzir FiO2.",
      D: "Descompressão imediata do pneumotórax hipertensivo, seguida de drenagem torácica definitiva.",
      E: "Administrar diurético."
    },
    resposta: "D",
    comentario: "Pneumotórax hipertensivo em paciente instável é diagnóstico clínico e deve ser tratado imediatamente, sem aguardar imagem.",
    frase_ouro: "Pneumotórax hipertensivo não espera raio-X; espera agulha ou dreno."
  },
  {
    id: "yao-092-005",
    fonte: "Yao",
    capitulo: "Emergências anestésicas",
    tema: "Broncoespasmo",
    dificuldade: "alta",
    pergunta: "Logo após intubação, paciente asmático apresenta sibilos difusos, pressão de pico elevada, platô pouco alterado e capnograma com subida lenta em 'barbatana'. Qual conduta é adequada?",
    alternativas: {
      A: "Reduzir oxigênio para 21%.",
      B: "Administrar protamina.",
      C: "Extubar imediatamente sem avaliar.",
      D: "Fazer diurético.",
      E: "Aprofundar anestesia, administrar broncodilatador, aumentar tempo expiratório e excluir causas como intubação seletiva, tubo dobrado ou anafilaxia."
    },
    resposta: "E",
    comentario: "Broncoespasmo aumenta resistência de vias aéreas, elevando pico e gerando capnograma típico. Tratamento inclui oxigênio, broncodilatador, anestesia adequada e ajuste ventilatório.",
    frase_ouro: "Broncoespasmo é cano estreito: trate o brônquio e dê tempo para expirar."
  },
  {
    id: "yao-093-001",
    fonte: "Yao",
    capitulo: "Via aérea difícil",
    tema: "Não intuba, não oxigena",
    dificuldade: "alta",
    pergunta: "Após indução em paciente com via aérea difícil não prevista, múltiplas tentativas de intubação falham, ventilação sob máscara é impossível e saturação cai rapidamente. Qual é a prioridade?",
    alternativas: {
      A: "Reconhecer cenário não intuba/não oxigena e realizar acesso cirúrgico/front-of-neck airway emergencial conforme protocolo.",
      B: "Continuar tentando laringoscopia indefinidamente.",
      C: "Administrar mais sedativo e esperar.",
      D: "Reduzir FiO2 para evitar atelectasia.",
      E: "Aguardar parada cardíaca para agir."
    },
    resposta: "A",
    comentario: "No cenário não intuba/não oxigena, a prioridade é restabelecer oxigenação por acesso emergencial à via aérea, evitando tentativas repetidas e traumáticas.",
    frase_ouro: "Na via aérea perdida, oxigênio vem antes do orgulho da intubação."
  },
  {
    id: "yao-093-002",
    fonte: "Yao",
    capitulo: "Via aérea difícil",
    tema: "Extubação de risco",
    dificuldade: "alta",
    pergunta: "Paciente com edema de via aérea após cirurgia cervical extensa, intubação difícil inicial e sangramento local será extubado. Qual estratégia é mais segura?",
    alternativas: {
      A: "Extubação imediata sem plano, pois a cirurgia terminou.",
      B: "Planejar extubação de via aérea difícil, considerar troca por guia/trocador, equipe e material de reintubação prontos e possibilidade de manter intubado.",
      C: "Retirar tubo e sedar profundamente.",
      D: "Desligar monitorização para reduzir ansiedade.",
      E: "Extubar em local sem cirurgião disponível."
    },
    resposta: "B",
    comentario: "Extubação de risco deve ser planejada como parte do manejo da via aérea difícil. Pode ser mais seguro postergar extubação ou usar estratégias que facilitem reintubação.",
    frase_ouro: "Extubar via aérea difícil sem plano é transformar final de caso em começo de desastre."
  },
  {
    id: "yao-093-003",
    fonte: "Yao",
    capitulo: "Via aérea difícil",
    tema: "Intubação acordada",
    dificuldade: "alta",
    pergunta: "Paciente com tumor de base de língua, estridor leve, abertura oral limitada e piora respiratória ao deitar precisa de biópsia. Qual técnica é mais coerente?",
    alternativas: {
      A: "Indução rápida com bloqueio neuromuscular profundo antes de avaliar ventilação.",
      B: "Sedação profunda em decúbito dorsal sem plano cirúrgico.",
      C: "Intubação acordada ou técnica que preserve ventilação espontânea, com equipe cirúrgica pronta para via aérea emergencial.",
      D: "Máscara laríngea como única estratégia obrigatória.",
      E: "Evitar oxigênio."
    },
    resposta: "C",
    comentario: "Massa obstrutiva de via aérea pode colapsar após indução. Preservar ventilação espontânea e preparar resgate cirúrgico é mais seguro.",
    frase_ouro: "Tumor de via aérea pede plano antes do sono."
  },
  {
    id: "yao-093-004",
    fonte: "Yao",
    capitulo: "Via aérea difícil",
    tema: "Aspiração pulmonar",
    dificuldade: "alta",
    pergunta: "Durante indução de paciente com obstrução intestinal, ocorre regurgitação volumosa de conteúdo gástrico. Qual conduta inicial é apropriada?",
    alternativas: {
      A: "Colocar em Trendelenburg extremo sempre e extubar.",
      B: "Ignorar se a saturação estiver normal no primeiro minuto.",
      C: "Administrar antiemético e prosseguir sem aspiração.",
      D: "Aspirar orofaringe/traqueia conforme necessidade, proteger via aérea, oxigenar, ventilar e avaliar repercussão pulmonar.",
      E: "Reduzir FiO2."
    },
    resposta: "D",
    comentario: "Aspiração exige controle de via aérea, aspiração, oxigenação e suporte ventilatório. A evolução depende do volume, conteúdo e resposta clínica.",
    frase_ouro: "Aspiração na indução muda o caso: primeiro via aérea e oxigênio, depois o resto."
  },
  {
    id: "yao-093-005",
    fonte: "Yao",
    capitulo: "Via aérea difícil",
    tema: "Máscara laríngea",
    dificuldade: "média",
    pergunta: "Em qual cenário a máscara laríngea deve ser usada com maior cautela como via aérea principal?",
    alternativas: {
      A: "Paciente em jejum, cirurgia periférica curta.",
      B: "Paciente hígido, sem refluxo.",
      C: "Procedimento ambulatorial curto.",
      D: "Paciente sem risco de aspiração.",
      E: "Paciente com estômago cheio, obstrução intestinal ou alto risco de aspiração."
    },
    resposta: "E",
    comentario: "Máscara laríngea não protege a via aérea contra aspiração como um tubo com cuff traqueal. Em estômago cheio, seu uso como via aérea principal é arriscado.",
    frase_ouro: "Máscara laríngea ventila bem, mas não faz milagre contra estômago cheio."
  },
  {
    id: "yao-094-001",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Benzodiazepínicos",
    dificuldade: "média",
    pergunta: "Paciente idoso recebe midazolam para sedação e evolui com sonolência prolongada e hipoventilação leve. Qual consideração é correta?",
    alternativas: {
      A: "Idosos podem ter maior sensibilidade e recuperação prolongada com benzodiazepínicos; titulação cuidadosa é necessária.",
      B: "Benzodiazepínicos nunca deprimem ventilação.",
      C: "Midazolam não causa sedação.",
      D: "Flumazenil é proibido em qualquer circunstância.",
      E: "Idade não altera resposta farmacodinâmica."
    },
    resposta: "A",
    comentario: "Idosos têm maior sensibilidade a sedativos e menor reserva respiratória/cognitiva. Benzodiazepínicos devem ser titulados com cautela.",
    frase_ouro: "No idoso, sedativo pequeno pode virar sono grande."
  },
  {
    id: "yao-094-002",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Dexmedetomidina",
    dificuldade: "alta",
    pergunta: "Paciente em sedação com dexmedetomidina apresenta bradicardia importante e hipotensão. Qual mecanismo é compatível?",
    alternativas: {
      A: "Liberação maciça de catecolamina.",
      B: "Agonismo alfa-2 reduzindo descarga simpática e frequência cardíaca.",
      C: "Bloqueio neuromuscular despolarizante.",
      D: "Reversão de opioide.",
      E: "Antagonismo muscarínico."
    },
    resposta: "B",
    comentario: "Dexmedetomidina reduz tônus simpático por agonismo alfa-2, podendo causar sedação, bradicardia e hipotensão.",
    frase_ouro: "Dexmedetomidina seda reduzindo simpático; às vezes reduz até demais."
  },
  {
    id: "yao-094-003",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Óxido nitroso",
    dificuldade: "média",
    pergunta: "Em qual situação o óxido nitroso deve ser evitado por expandir espaços gasosos fechados?",
    alternativas: {
      A: "Cirurgia de pele pequena.",
      B: "Paciente sem cavidades gasosas.",
      C: "Pneumotórax não drenado ou bolha intracraniana/pneumoencéfalo.",
      D: "Uso de máscara facial simples.",
      E: "Jejum adequado."
    },
    resposta: "C",
    comentario: "Óxido nitroso difunde para cavidades gasosas fechadas mais rapidamente que o nitrogênio sai, podendo expandir pneumotórax, pneumoencéfalo ou bolhas.",
    frase_ouro: "Óxido nitroso entra em bolha e faz a bolha virar problema."
  },
  {
    id: "yao-094-004",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Halogenados",
    dificuldade: "média",
    pergunta: "Paciente com pressão intracraniana elevada recebe altas concentrações de anestésico volátil. Qual efeito deve ser lembrado?",
    alternativas: {
      A: "Voláteis nunca afetam fluxo cerebral.",
      B: "Voláteis reduzem sempre a pressão intracraniana em qualquer dose.",
      C: "Voláteis eliminam necessidade de controlar PaCO2.",
      D: "Em doses maiores, vasodilatação cerebral pode aumentar volume sanguíneo cerebral e PIC.",
      E: "Voláteis são antagonistas de succinilcolina."
    },
    resposta: "D",
    comentario: "Anestésicos voláteis reduzem metabolismo cerebral, mas também podem causar vasodilatação cerebral dose-dependente, elevando PIC em pacientes suscetíveis.",
    frase_ouro: "No crânio apertado, volátil demais pode ocupar espaço por vasodilatação."
  },
  {
    id: "yao-094-005",
    fonte: "Yao",
    capitulo: "Farmacologia",
    tema: "Opioide e rigidez torácica",
    dificuldade: "alta",
    pergunta: "Após bolus rápido de opioide potente, paciente apresenta dificuldade ventilatória, parede torácica rígida e ventilação manual difícil. Qual conduta é adequada?",
    alternativas: {
      A: "Administrar diurético.",
      B: "Reduzir oxigênio.",
      C: "Aguardar sem ventilar.",
      D: "Fazer protamina.",
      E: "Reconhecer rigidez induzida por opioide, ventilar com suporte, considerar bloqueador neuromuscular e antagonismo se necessário."
    },
    resposta: "E",
    comentario: "Opioides potentes em bolus rápido podem causar rigidez muscular torácica, dificultando ventilação. Tratamento inclui suporte ventilatório, relaxante e, em alguns casos, naloxona.",
    frase_ouro: "Opioide rápido demais pode fechar a mecânica antes de abrir a analgesia."
  },
  {
    id: "yao-095-001",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Raquianestesia total",
    dificuldade: "alta",
    pergunta: "Após injeção acidental de grande dose de anestésico local no espaço subaracnoideo, paciente apresenta hipotensão, bradicardia, apneia e perda de consciência. Qual é a prioridade?",
    alternativas: {
      A: "Suporte ventilatório e hemodinâmico imediato até regressão do bloqueio.",
      B: "Alta para observação domiciliar.",
      C: "Administrar apenas antiemético.",
      D: "Aguardar sem oxigênio.",
      E: "Fazer diurético."
    },
    resposta: "A",
    comentario: "Raquianestesia total pode causar bloqueio simpático profundo, apneia e inconsciência. O tratamento é suporte de via aérea, ventilação, vasopressores e fluidos conforme necessário.",
    frase_ouro: "Raqui total se trata sustentando vida até o bloqueio descer."
  },
  {
    id: "yao-095-002",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Bloqueio interescalênico",
    dificuldade: "média",
    pergunta: "Paciente com DPOC grave será submetido a cirurgia de ombro. Qual efeito do bloqueio interescalênico exige cautela?",
    alternativas: {
      A: "Aumento garantido da função diafragmática.",
      B: "Paresia do nervo frênico e redução da função diafragmática ipsilateral.",
      C: "Bloqueio obrigatório dos dois nervos frênicos.",
      D: "Aumento da capacidade vital em todos os pacientes.",
      E: "Ausência de efeito respiratório."
    },
    resposta: "B",
    comentario: "Bloqueio interescalênico frequentemente bloqueia o nervo frênico ipsilateral, podendo ser mal tolerado em pacientes com reserva pulmonar limitada.",
    frase_ouro: "Interescalênico bom para ombro pode ser caro para diafragma."
  },
  {
    id: "yao-095-003",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Bloqueio femoral",
    dificuldade: "média",
    pergunta: "Após bloqueio femoral para analgesia, qual orientação pós-operatória é importante?",
    alternativas: {
      A: "Deambular sem auxílio imediatamente.",
      B: "Ignorar fraqueza do quadríceps.",
      C: "Prevenir quedas devido à fraqueza do quadríceps.",
      D: "Suspender toda fisioterapia permanentemente.",
      E: "Evitar avaliação motora."
    },
    resposta: "C",
    comentario: "Bloqueio femoral pode enfraquecer quadríceps, aumentando risco de queda. Mobilização deve ser assistida até recuperação.",
    frase_ouro: "Analgesia femoral pode tirar dor e joelho firme ao mesmo tempo."
  },
  {
    id: "yao-095-004",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Bloqueio de nervo periférico e anticoagulação",
    dificuldade: "alta",
    pergunta: "Paciente anticoagulado precisa de bloqueio profundo de plexo lombar. Qual princípio é correto?",
    alternativas: {
      A: "Bloqueios profundos não sangram.",
      B: "Anticoagulação nunca importa fora do neuroeixo.",
      C: "Usar agulha fina elimina risco.",
      D: "Considerar risco de sangramento em local não compressível e respeitar recomendações semelhantes às neuraxiais quando aplicável.",
      E: "Realizar sempre sem ultrassom."
    },
    resposta: "D",
    comentario: "Bloqueios profundos em áreas não compressíveis podem causar sangramento grave. Anticoagulação deve ser avaliada cuidadosamente.",
    frase_ouro: "Bloqueio profundo anticoagulado pode sangrar onde ninguém comprime."
  },
  {
    id: "yao-095-005",
    fonte: "Yao",
    capitulo: "Anestesia regional",
    tema: "Adjuvantes",
    dificuldade: "média",
    pergunta: "Ao adicionar adjuvantes a bloqueios periféricos, qual raciocínio é adequado?",
    alternativas: {
      A: "Todos os adjuvantes são isentos de efeito sistêmico.",
      B: "Adjuvantes eliminam risco de toxicidade por anestésico local.",
      C: "Adjuvantes substituem dose segura.",
      D: "Não há necessidade de consentimento.",
      E: "Avaliar benefício analgésico, duração, efeitos adversos e evidência de segurança."
    },
    resposta: "E",
    comentario: "Adjuvantes podem prolongar analgesia, mas têm efeitos sistêmicos e risco de neurotoxicidade ou eventos adversos conforme fármaco/dose.",
    frase_ouro: "Adjuvante não é tempero livre: dose, efeito e segurança contam."
  },
  {
    id: "yao-096-001",
    fonte: "Yao",
    capitulo: "Medicina perioperatória",
    tema: "Anticoagulante e cirurgia urgente",
    dificuldade: "alta",
    pergunta: "Paciente em apixabana tomou última dose há 4 horas e apresenta abdome agudo hemorrágico com necessidade cirúrgica imediata. Qual conduta é mais apropriada?",
    alternativas: {
      A: "Avaliar gravidade, função renal, tempo da última dose e considerar reversão/hemostasia específica ou inespecífica conforme disponibilidade, sem atrasar controle cirúrgico da fonte.",
      B: "Aguardar sempre 7 dias antes de operar.",
      C: "Realizar raquianestesia imediatamente.",
      D: "Administrar heparina para reverter apixabana.",
      E: "Ignorar anticoagulante."
    },
    resposta: "A",
    comentario: "Em cirurgia urgente com DOAC recente, deve-se equilibrar reversão, suporte transfusional e controle da fonte de sangramento. Neuroeixo geralmente é contraindicado nesse contexto.",
    frase_ouro: "DOAC recente em sangramento urgente pede relógio, rim, antídoto e bisturi no tempo certo."
  },
  {
    id: "yao-096-002",
    fonte: "Yao",
    capitulo: "Medicina perioperatória",
    tema: "Stent coronário",
    dificuldade: "alta",
    pergunta: "Paciente com stent coronário recente necessita cirurgia eletiva. Qual preocupação é central ao suspender antiagregantes?",
    alternativas: {
      A: "Redução do risco de trombose de stent.",
      B: "Trombose de stent e infarto perioperatório, devendo-se balancear risco de sangramento e risco isquêmico com equipe assistente.",
      C: "Eliminação completa do risco cardíaco.",
      D: "Antiagregantes não interferem em nada.",
      E: "Suspensão sempre segura no primeiro mês."
    },
    resposta: "B",
    comentario: "Interrupção precoce de antiagregação após stent aumenta risco de trombose de stent. Decisão deve integrar cardiologia, cirurgia e anestesia.",
    frase_ouro: "Stent recente não gosta de antiagregante suspenso no automático."
  },
  {
    id: "yao-096-003",
    fonte: "Yao",
    capitulo: "Medicina perioperatória",
    tema: "Risco pulmonar",
    dificuldade: "média",
    pergunta: "Qual fator aumenta risco de complicação pulmonar pós-operatória?",
    alternativas: {
      A: "Cirurgia curta periférica em paciente hígido.",
      B: "Boa capacidade funcional.",
      C: "DPOC, tabagismo, cirurgia toracoabdominal alta, idade avançada e dor mal controlada.",
      D: "Mobilização precoce.",
      E: "Analgesia eficaz."
    },
    resposta: "C",
    comentario: "Complicações pulmonares são favorecidas por doença pulmonar, tabagismo, cirurgia próxima ao diafragma, dor, idade e imobilidade.",
    frase_ouro: "Pulmão pós-operatório sofre com incisão alta, dor e reserva baixa."
  },
  {
    id: "yao-096-004",
    fonte: "Yao",
    capitulo: "Medicina perioperatória",
    tema: "Capacidade funcional",
    dificuldade: "média",
    pergunta: "Paciente não consegue subir um lance de escadas sem dispneia importante. Em cirurgia eletiva de grande porte, isso sugere:",
    alternativas: {
      A: "Excelente reserva cardiopulmonar.",
      B: "Risco pulmonar inexistente.",
      C: "Ausência de necessidade de avaliação adicional.",
      D: "Baixa capacidade funcional, associada a maior risco perioperatório.",
      E: "Contraindicação absoluta de qualquer anestesia."
    },
    resposta: "D",
    comentario: "Baixa capacidade funcional é marcador de maior risco cardiovascular e pulmonar, podendo justificar investigação ou otimização conforme cirurgia.",
    frase_ouro: "Escada que o paciente não sobe pode prever problema que a cirurgia revela."
  },
  {
    id: "yao-096-005",
    fonte: "Yao",
    capitulo: "Medicina perioperatória",
    tema: "Anemia pré-operatória",
    dificuldade: "média",
    pergunta: "Paciente com câncer de cólon e Hb 7,8 g/dL fará colectomia eletiva em 3 semanas. Qual conduta perioperatória é mais adequada?",
    alternativas: {
      A: "Ignorar anemia até a indução.",
      B: "Transfundir todos os pacientes automaticamente sem avaliação.",
      C: "Cancelar definitivamente a cirurgia.",
      D: "Evitar investigação.",
      E: "Investigar e otimizar anemia antes da cirurgia quando possível, considerando ferro, causa e estratégia transfusional."
    },
    resposta: "E",
    comentario: "Anemia pré-operatória aumenta risco de transfusão e complicações. Quando há tempo, deve ser investigada e tratada conforme causa.",
    frase_ouro: "Anemia eletiva é oportunidade de otimização, não surpresa no centro cirúrgico."
  },
  {
    id: "yao-097-001",
    fonte: "Yao",
    capitulo: "Ambiente remoto",
    tema: "Radiologia intervencionista",
    dificuldade: "alta",
    pergunta: "Paciente instável será anestesiado em radiologia intervencionista para embolização. Qual princípio de segurança é essencial?",
    alternativas: {
      A: "Levar o padrão de segurança do centro cirúrgico: monitorização, via aérea, drogas, bombas, acesso ao paciente e plano de emergência.",
      B: "Aceitar ausência de oxigênio porque não é centro cirúrgico.",
      C: "Dispensar capnografia em anestesia geral.",
      D: "Evitar checar equipamentos.",
      E: "Não planejar transporte."
    },
    resposta: "A",
    comentario: "Anestesia fora do centro cirúrgico exige os mesmos padrões de monitorização e resgate, com atenção extra ao acesso limitado e logística.",
    frase_ouro: "Fora do centro cirúrgico, o risco não diminui; o suporte costuma diminuir."
  },
  {
    id: "yao-097-002",
    fonte: "Yao",
    capitulo: "Ambiente remoto",
    tema: "Tomografia",
    dificuldade: "média",
    pergunta: "Durante anestesia em tomografia, qual problema logístico deve ser antecipado?",
    alternativas: {
      A: "Acesso ilimitado à cabeça do paciente durante aquisição.",
      B: "Acesso físico limitado ao paciente durante o exame, exigindo linhas longas, monitorização visível e plano para emergências.",
      C: "Ausência de radiação.",
      D: "Impossibilidade de desconexão.",
      E: "Não há necessidade de ventilador."
    },
    resposta: "B",
    comentario: "Na tomografia, o paciente pode ficar distante ou dentro do gantry, dificultando acesso imediato. Equipamentos e cabos precisam ser planejados.",
    frase_ouro: "Na tomografia, pense no que você fará quando o paciente estiver longe da sua mão."
  },
  {
    id: "yao-097-003",
    fonte: "Yao",
    capitulo: "Ambiente remoto",
    tema: "Sedação",
    dificuldade: "média",
    pergunta: "Durante sedação fora do centro cirúrgico, capnografia é especialmente útil porque:",
    alternativas: {
      A: "Substitui oxigênio.",
      B: "Mede glicemia.",
      C: "Detecta hipoventilação e apneia antes da queda tardia da saturação.",
      D: "Reverte opioide.",
      E: "Impede aspiração."
    },
    resposta: "C",
    comentario: "Oxigênio suplementar pode mascarar hipoventilação por algum tempo. Capnografia permite detecção precoce de apneia ou ventilação inadequada.",
    frase_ouro: "Na sedação, saturação pode demorar a contar que o paciente parou de ventilar."
  },
  {
    id: "yao-097-004",
    fonte: "Yao",
    capitulo: "Ambiente remoto",
    tema: "Transporte intra-hospitalar",
    dificuldade: "alta",
    pergunta: "Paciente intubado em noradrenalina será transportado para exame. Qual preparo é adequado?",
    alternativas: {
      A: "Levar apenas o prontuário.",
      B: "Desconectar monitor para facilitar deslocamento.",
      C: "Suspender vasopressor durante trajeto.",
      D: "Garantir oxigênio, ventilação, bombas, drogas de emergência, monitorização e equipe capaz de intervir no trajeto.",
      E: "Transportar sem acesso venoso."
    },
    resposta: "D",
    comentario: "Transporte de paciente crítico é momento de risco. Deve-se antecipar falhas de oxigênio, bateria, drogas, via aérea e hemodinâmica.",
    frase_ouro: "Transporte de crítico é anestesia em movimento."
  },
{
  "id": "yao-hard-001",
  "fonte": "Yao",
  "capitulo": "Doença coronariana",
  "tema": "Isquemia e indução",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Homem de 68 anos, angina estável CCS III, estenose importante de DA proximal e CD, em metoprolol. Vai para colectomia oncológica. Após indução, PA cai de 148/82 para 82/46 mmHg, FC sobe de 72 para 104 bpm, EtCO2 estável, SpO2 98%, Hb 10,2 g/dL. O monitor mostra infradesnivelamento de ST em V5. Qual intervenção inicial melhor corrige a fisiologia que precipitou a isquemia?",
  "alternativas": {
    "A": "Restaurar pressão diastólica com vasopressor titulável, aprofundar analgesia se houver estímulo e reduzir taquicardia sem provocar hipotensão adicional.",
    "B": "Administrar nitroglicerina em bolus até reduzir a pressão sistólica para abaixo de 90 mmHg, pois toda isquemia coronariana melhora com vasodilatação.",
    "C": "Aumentar volume corrente e hiperventilar para PaCO2 menor que 25 mmHg, pois hipocapnia aumenta oferta coronariana.",
    "D": "Suspender beta-bloqueio crônico no perioperatório para permitir maior débito cardíaco por taquicardia compensatória.",
    "E": "Tratar primariamente com transfusão imediata, pois Hb 10,2 g/dL é a causa isolada mais provável da isquemia."
  },
  "resposta": "A",
  "comentario": "O evento combina dois agressores clássicos ao balanço oferta/consumo: queda de pressão diastólica, que reduz perfusão coronariana, e taquicardia, que aumenta consumo e encurta a diástole. Nitroglicerina pode ter papel quando hipertensão/congestão predominam, mas aqui pode agravar a hipotensão. A transfusão não é a primeira correção com Hb 10,2 g/dL se a causa imediata é hemodinâmica.",
  "frase_ouro": "Na coronariopatia, a isquemia intraoperatória raramente é apenas ‘falta de oxigênio no monitor’; costuma ser queda de oferta diastólica somada a aumento de consumo por taquicardia, hipertensão, dor ou contratilidade excessiva."
},
{
  "id": "yao-hard-002",
  "fonte": "Yao",
  "capitulo": "Doença valvar",
  "tema": "Estenose aórtica e anestesia",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Mulher de 79 anos com estenose aórtica grave, área valvar 0,7 cm², gradiente médio 48 mmHg, síncope recente e FE preservada precisa de laparotomia urgente. Após indução titulada, PA 74/38 mmHg e FC 58 bpm. Qual raciocínio é mais correto?",
  "alternativas": {
    "A": "A prioridade é restaurar pressão arterial, especialmente componente diastólico, preservar pré-carga e evitar bradicardia/taquicardia extremas, pois o VE hipertrofiado depende de perfusão coronariana diastólica.",
    "B": "A redução da pós-carga é desejável porque sempre facilita ejeção através da valva estenótica, então a conduta principal é vasodilatação arterial.",
    "C": "A taquicardia de 130-150 bpm deve ser induzida para compensar o volume sistólico fixo.",
    "D": "A hipotensão é geralmente bem tolerada se a saturação estiver normal, pois a obstrução valvar protege o miocárdio.",
    "E": "A melhor medida inicial é diurese agressiva para reduzir completamente a pré-carga."
  },
  "resposta": "A",
  "comentario": "Na estenose aórtica grave, o débito é limitado pela obstrução fixa e o VE hipertrofiado tem alta demanda de oxigênio. A pressão diastólica é crucial para perfusão coronariana. Vasodilatação abrupta e hipovolemia reduzem perfusão; taquicardia encurta diástole; bradicardia reduz débito. Fenilefrina/noradrenalina titulada, volume criterioso e ritmo adequado costumam ser mais fisiológicos que vasodilatação.",
  "frase_ouro": "Estenose aórtica grave é uma lesão em que ‘baixar a pós-carga’ pode virar queda de perfusão coronariana; o objetivo é manter o coração cheio, perfundido e em ritmo útil."
},
{
  "id": "yao-hard-003",
  "fonte": "Yao",
  "capitulo": "Doença valvar",
  "tema": "Insuficiência mitral e pós-correção",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com insuficiência mitral crônica grave, FE pré-operatória 62%, ventrículo esquerdo dilatado e hipertensão pulmonar moderada é submetido a plastia mitral. Após a correção, o ETE mostra pouca regurgitação residual, mas FE aparente cai e há necessidade de inotrópico. Qual explicação é mais adequada?",
  "alternativas": {
    "A": "A plastia mitral obrigatoriamente causa estenose mitral crítica, e essa é sempre a única explicação para queda de função.",
    "B": "A FE pré-operatória na IM crônica pode superestimar função contrátil porque parte da ejeção ocorria para o átrio esquerdo de baixa pressão; após correção, aumenta a pós-carga efetiva do VE.",
    "C": "A correção da IM reduz a pós-carga efetiva e por isso nunca deveria reduzir desempenho ventricular.",
    "D": "A queda de FE exclui sucesso da plastia e obriga troca valvar imediata em todo caso.",
    "E": "O VD não influencia a separação da CEC em cirurgia mitral, mesmo com hipertensão pulmonar."
  },
  "resposta": "B",
  "comentario": "Na insuficiência mitral crônica, a fração de ejeção pode parecer preservada porque o VE ejeta para dois caminhos: aorta e átrio esquerdo. O átrio esquerdo é uma via de baixa impedância. Depois da correção, a rota regurgitante desaparece e a pós-carga efetiva aumenta. Além disso, hipertensão pulmonar e disfunção de VD podem dificultar saída de CEC.",
  "frase_ouro": "Na IM crônica, a FE pode mentir por excesso de rota de fuga; após corrigir a valva, o VE precisa provar que consegue ejetar para a aorta."
},
{
  "id": "yao-hard-004",
  "fonte": "Yao",
  "capitulo": "Circulação extracorpórea",
  "tema": "Separação de CEC",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Ao tentar sair da CEC após troca de valva aórtica, o paciente apresenta PAM baixa, pressão de átrio direito 18 mmHg, pressão de átrio esquerdo 10 mmHg, PAP elevada, ETE com VD dilatado e septo deslocado para esquerda; VE pequeno e hiperdinâmico. O que mais provavelmente melhora a fisiologia?",
  "alternativas": {
    "A": "Usar vasodilatador pulmonar/inotrópico para VD, corrigir hipóxia/acidose/hipercapnia e sustentar pressão sistêmica para perfusão do VD.",
    "B": "Reduzir FiO2 e aceitar hipercapnia para evitar vasoconstrição sistêmica.",
    "C": "Aumentar rapidamente volume até elevar pressão de átrio direito para 30 mmHg, pois todo VD dilatado é hipovolemia.",
    "D": "Beta-bloqueio em bolus para reduzir contratilidade do VD e diminuir sua demanda.",
    "E": "Retirar suporte da CEC imediatamente, pois VE hiperdinâmico exclui problema hemodinâmico."
  },
  "resposta": "A",
  "comentario": "A combinação de pressão direita alta, PAP elevada, VD dilatado e VE pequeno por deslocamento septal sugere falência de VD com interdependência ventricular. Mais volume pode piorar dilatação e septo. O tratamento busca reduzir resistência vascular pulmonar, melhorar contratilidade do VD e manter pressão sistêmica, pois o VD perfunde em um ambiente de alta pressão e demanda.",
  "frase_ouro": "Quando o VD dilata, ele rouba espaço do VE; salvar o débito muitas vezes exige tratar o pulmão e o VD, não encher sem critério."
},
{
  "id": "yao-hard-005",
  "fonte": "Yao",
  "capitulo": "Cirurgia cardíaca",
  "tema": "Vasoplegia pós-CEC",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Após CEC prolongada em cirurgia combinada, paciente apresenta índice cardíaco 3,8 L/min/m², PAM 46 mmHg, SVR muito baixa, SvO2 78%, lactato 2,8 e ETE com boa função biventricular. Noradrenalina em dose crescente tem resposta parcial. Qual alternativa representa melhor o diagnóstico e uma estratégia coerente?",
  "alternativas": {
    "A": "Baixo débito por falência de VE; a conduta é reduzir vasopressor e usar apenas nitroglicerina.",
    "B": "Tamponamento regional; o índice cardíaco alto e câmaras bem avaliadas no ETE tornam essa a hipótese principal.",
    "C": "Hipovolemia pura; SvO2 elevada confirma extração aumentada por baixo volume.",
    "D": "Broncoespasmo; a estratégia hemodinâmica não importa se a função biventricular está boa.",
    "E": "Vasoplegia pós-CEC; além de noradrenalina, pode ser necessário usar agentes não catecolaminérgicos como vasopressina, conforme refratariedade e contexto."
  },
  "resposta": "E",
  "comentario": "O padrão é distributivo: débito adequado/alto, SvO2 alta e SVR baixa. Após CEC, resposta inflamatória e vasodilatação podem produzir vasoplegia profunda. Noradrenalina é usual, mas vasopressina pode ser útil quando há refratariedade relativa às catecolaminas. Tamponamento e falência ventricular teriam achados diferentes no ETE e no perfil de débito.",
  "frase_ouro": "Vasoplegia pós-CEC é o choque em que a bomba trabalha, mas o continente vascular desaparece."
},
{
  "id": "yao-hard-006",
  "fonte": "Yao",
  "capitulo": "Embolia pulmonar",
  "tema": "Diagnóstico intraoperatório",
  "area": "Respiratório / Torácica",
  "dificuldade": "muito difícil",
  "pergunta": "Durante artroplastia de quadril cimentada, paciente de 82 anos apresenta queda abrupta de EtCO2 de 34 para 16 mmHg, SpO2 86%, hipotensão e aumento de pressão pulmonar estimada no ETE com VD dilatado. Ausculta sem sibilos. Qual diagnóstico fisiológico é prioritário?",
  "alternativas": {
    "A": "Hipoventilação por opioide, pois EtCO2 baixo indica retenção de CO2.",
    "B": "Embolização pulmonar por material medular/cimento ou TEP, causando aumento súbito de RVP e falência de VD.",
    "C": "Intubação esofágica, pois a presença de capnografia baixa confirma esôfago.",
    "D": "Hipertermia maligna, pois toda queda de EtCO2 representa aumento de metabolismo.",
    "E": "Síndrome pós-RTU, típica da cimentação ortopédica."
  },
  "resposta": "B",
  "comentario": "Queda abrupta de EtCO2 com hipotensão sugere queda de fluxo sanguíneo pulmonar/baixo débito, não hipoventilação. Em artroplastia cimentada, embolização medular e síndrome de implantação do cimento ósseo podem elevar RVP, dilatar VD e reduzir débito pulmonar. TEP maciço entra no diferencial, mas o gatilho temporal favorece o evento da cimentação.",
  "frase_ouro": "EtCO2 que despenca durante colapso hemodinâmico costuma falar de fluxo pulmonar que sumiu, não de ventilação que piorou isoladamente."
},
{
  "id": "yao-hard-007",
  "fonte": "Yao",
  "capitulo": "Hipertensão pulmonar",
  "tema": "Ventilação e VD",
  "area": "Respiratório / Torácica",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com hipertensão pulmonar grave em histerectomia começa com PA 82/48, PVC 21, SpO2 90%, PaCO2 61 mmHg, pH 7,20 e ETE com VD dilatado. Qual ajuste ventilatório/hemodinâmico é mais coerente?",
  "alternativas": {
    "A": "Aceitar hipercapnia grave para proteger pulmão, pois CO2 não altera RVP.",
    "B": "Reduzir FiO2 para limitar absorção de atelectasia.",
    "C": "Corrigir hipoxemia, hipercapnia e acidose, evitar pressões excessivas, manter pressão sistêmica e considerar vasodilatador pulmonar/inotrópico.",
    "D": "Administrar beta-bloqueador em bolus para reduzir trabalho do VD durante hipotensão.",
    "E": "Fazer diurese agressiva até PVC menor que 5 mmHg antes de tratar a pressão sistêmica."
  },
  "resposta": "C",
  "comentario": "Hipóxia, hipercapnia e acidose aumentam resistência vascular pulmonar e podem precipitar falência de VD. Ventilação deve corrigir gases sem hiperinsuflação excessiva. A pressão sistêmica precisa sustentar perfusão coronariana do VD. Inotrópicos e vasodilatadores pulmonares seletivos podem ser necessários. Diurese pode ter lugar em congestão, mas no colapso agudo não é primeira resposta indiscriminada.",
  "frase_ouro": "No VD hipertenso, o pulmão é a pós-carga: oxigênio, CO2 e pH são drogas hemodinâmicas."
},
{
  "id": "yao-hard-008",
  "fonte": "Yao",
  "capitulo": "Ventilação monopulmonar",
  "tema": "Hipoxemia em OLV",
  "area": "Respiratório / Torácica",
  "dificuldade": "muito difícil",
  "pergunta": "Durante esofagectomia em OLV com tubo de duplo lúmen esquerdo, SpO2 cai para 84%. Pressão de pico aumentou, capnografia mantém formato, ausculta sugere ventilação reduzida no pulmão dependente. O cirurgião pede para apenas aumentar FiO2 e seguir. Qual resposta é mais apropriada?",
  "alternativas": {
    "A": "Aumentar FiO2 é suficiente; malposição do tubo não deve ser checada durante OLV.",
    "B": "Aplicar CPAP alto no pulmão operado sem avisar o cirurgião, pois isso nunca atrapalha campo.",
    "C": "Desligar ventilação por alguns minutos para melhorar colapso cirúrgico.",
    "D": "Reduzir FiO2 para estimular vasoconstrição hipóxica pulmonar.",
    "E": "Checar posição do tubo com broncoscopia, aspirar secreções, otimizar ventilação do pulmão dependente e só então adicionar PEEP/CPAP conforme necessidade e campo."
  },
  "resposta": "E",
  "comentario": "Hipoxemia em OLV exige abordagem sistemática. FiO2 deve ser aumentada, mas é crucial excluir malposição do tubo, obstrução por secreção ou ventilação inadequada do pulmão dependente. PEEP no pulmão ventilado e CPAP no não ventilado podem ajudar, mas devem ser individualizados e coordenados com o campo cirúrgico.",
  "frase_ouro": "Na OLV, a primeira pergunta não é ‘qual PEEP?’, mas ‘estamos ventilando o pulmão certo do jeito certo?’"
},
{
  "id": "yao-hard-009",
  "fonte": "Yao",
  "capitulo": "Pneumonectomia",
  "tema": "Pós-operatório respiratório",
  "area": "Respiratório / Torácica",
  "dificuldade": "muito difícil",
  "pergunta": "Após pneumonectomia direita, paciente chega à UTI com hipoxemia progressiva, balanço muito positivo, pressão de via aérea elevada e infiltrado no pulmão remanescente. Qual conduta preventiva teria sido mais adequada no intraoperatório?",
  "alternativas": {
    "A": "Cristaloide liberal para preencher o hemitórax operado e prevenir desvio mediastinal.",
    "B": "Evitar qualquer vasopressor, mesmo com hipotensão, priorizando volume sempre.",
    "C": "Ventilação protetora apenas antes da ressecção; após pneumonectomia volumes altos são preferíveis.",
    "D": "Manter FiO2 baixa para prevenir toxicidade, mesmo com hipoxemia.",
    "E": "Estratégia restritiva/individualizada de fluidos, proteção ventilatória e suporte vasoativo quando necessário para evitar sobrecarga do pulmão único."
  },
  "resposta": "E",
  "comentario": "Após pneumonectomia, o pulmão remanescente é vulnerável a edema e lesão ventilatória. Fluido excessivo, pressões ventilatórias elevadas e inflamação contribuem para insuficiência respiratória. A estratégia busca perfusão adequada sem sobrecarga, usando vasopressores quando apropriado e ventilação protetora.",
  "frase_ouro": "Depois de pneumonectomia, existe um só pulmão para pagar a conta de todo excesso de água e pressão."
},
{
  "id": "yao-hard-010",
  "fonte": "Yao",
  "capitulo": "Asma e broncoespasmo",
  "tema": "Diagnóstico diferencial",
  "area": "Respiratório / Torácica",
  "dificuldade": "muito difícil",
  "pergunta": "Logo após cefazolina e rocurônio, paciente apresenta pressão de pico alta, sibilos difusos, PA 62/35, taquicardia e capnograma em rampa. Não há rash visível sob campos. Qual é a melhor interpretação?",
  "alternativas": {
    "A": "Broncoespasmo isolado por asma é certo; a hipotensão deve ser ignorada.",
    "B": "Tubo dobrado é a única possibilidade se pressão de pico subiu.",
    "C": "O conjunto sugere anafilaxia com broncoespasmo até prova em contrário, exigindo adrenalina, oxigênio, fluidos e suspensão do gatilho suspeito.",
    "D": "A ausência de rash exclui anafilaxia intraoperatória.",
    "E": "Deve-se administrar beta-bloqueador para tratar taquicardia antes de adrenalina."
  },
  "resposta": "C",
  "comentario": "Broncoespasmo com hipotensão profunda após exposição a fármacos típicos deve ser tratado como anafilaxia, mesmo sem rash visível. Tubo dobrado, intubação seletiva e asma entram no diferencial, mas choque distributivo/broncoespasmo associado é altamente suspeito. Adrenalina é central.",
  "frase_ouro": "Na anestesia, a anafilaxia pode vestir máscara de broncoespasmo; a pressão que desaparece entrega o diagnóstico."
},
{
  "id": "yao-hard-011",
  "fonte": "Yao",
  "capitulo": "Neuroanestesia",
  "tema": "TCE e perfusão cerebral",
  "area": "Neuroanestesia",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com TCE grave, pupila direita midriática, PA 88/50, SpO2 91%, PaCO2 55 mmHg será levado à craniotomia. Qual combinação de metas antes da incisão é mais adequada?",
  "alternativas": {
    "A": "Hipotensão permissiva para reduzir sangramento intracraniano e hipercapnia para aumentar fluxo cerebral.",
    "B": "Corrigir hipóxia e hipotensão, controlar PaCO2 para evitar vasodilatação cerebral excessiva e manter pressão de perfusão cerebral adequada.",
    "C": "Administrar vasodilatador cerebral e reduzir PAM para menos de 50 mmHg.",
    "D": "Evitar intubação se Glasgow baixo para não aumentar PIC.",
    "E": "Priorizar apenas manitol, pois pressão arterial e oxigenação não influenciam lesão secundária."
  },
  "resposta": "B",
  "comentario": "Hipotensão, hipoxemia e hipercapnia agravam lesão secundária. O objetivo é oxigenação, ventilação controlada, pressão arterial suficiente para perfusão cerebral e medidas de controle de PIC quando indicadas. Hiperventilação intensa pode ser ponte em herniação, mas não substitui perfusão e oxigenação.",
  "frase_ouro": "No TCE, o anestesista não reverte a pancada inicial; ele impede a segunda pancada: hipóxia, hipotensão e CO2 fora de controle."
},
{
  "id": "yao-hard-012",
  "fonte": "Yao",
  "capitulo": "Neuroanestesia",
  "tema": "Aneurisma cerebral roto",
  "area": "Neuroanestesia",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com HSA por aneurisma de comunicante anterior será submetido a clipagem. Durante laringoscopia, PA sobe para 210/110. Antes do controle proximal, qual é o risco principal e o melhor princípio?",
  "alternativas": {
    "A": "Hipertensão é desejável porque todo aumento de pressão reduz risco de vasoespasmo sem desvantagens.",
    "B": "O risco é apenas sangramento de pele; o aneurisma não sofre influência hemodinâmica.",
    "C": "A prioridade é manter hipertensão extrema até clipagem definitiva.",
    "D": "Induzir hipotensão profunda prolongada é sempre melhor que controlar estímulo.",
    "E": "Hipertensão brusca pode favorecer reruptura; deve-se atenuar resposta à laringoscopia preservando perfusão cerebral."
  },
  "resposta": "E",
  "comentario": "Antes de clipar, hipertensão súbita pode aumentar tensão transmural e risco de ruptura. Ao mesmo tempo, hipotensão excessiva compromete cérebro vulnerável. A estratégia é suavizar laringoscopia e estímulos, manter anestesia adequada e controlar pressão dentro de alvo seguro.",
  "frase_ouro": "No aneurisma roto, a pressão precisa andar em corda bamba: alta demais rompe, baixa demais isquemia."
},
{
  "id": "yao-hard-013",
  "fonte": "Yao",
  "capitulo": "Neuroanestesia",
  "tema": "Craniotomia acordada",
  "area": "Neuroanestesia",
  "dificuldade": "muito difícil",
  "pergunta": "Durante mapeamento de linguagem em craniotomia acordada, o paciente fica sonolento, hipoventila, PaCO2 sobe e o cérebro começa a protruir no campo. A analgesia do escalpo parece adequada. Qual ajuste é mais coerente?",
  "alternativas": {
    "A": "Aumentar sedação para reduzir agitação, mesmo que PaCO2 suba mais.",
    "B": "Administrar bloqueador neuromuscular para melhorar mapeamento de linguagem.",
    "C": "Reduzir sedação, apoiar ventilação/oxigenação, corrigir hipercapnia e preservar cooperação para mapeamento.",
    "D": "Manter hipercapnia, pois sempre reduz volume cerebral.",
    "E": "Converter imediatamente para anestesia geral em todos os casos sem avaliar reversibilidade."
  },
  "resposta": "C",
  "comentario": "Hipercapnia causa vasodilatação cerebral e pode aumentar volume intracraniano, piorando condições cirúrgicas. Em craniotomia acordada, sedação excessiva prejudica ventilação e cooperação. Deve-se ajustar sedação, manter analgesia adequada e suporte ventilatório, convertendo para geral se segurança exigir.",
  "frase_ouro": "Na craniotomia acordada, sedar demais pode transformar conforto em CO2, e CO2 em cérebro apertado."
},
{
  "id": "yao-hard-014",
  "fonte": "Yao",
  "capitulo": "Cirurgia de coluna",
  "tema": "Potenciais evocados",
  "area": "Neuroanestesia",
  "dificuldade": "muito difícil",
  "pergunta": "Em correção de escoliose com MEP/SSEP, após correção da deformidade há queda bilateral dos MEP, SSEP preservado, PAM 58 mmHg, Hb 8,1 g/dL e dose recente de rocurônio. Qual é a resposta mais adequada?",
  "alternativas": {
    "A": "Ignorar, pois SSEP normal exclui sofrimento motor.",
    "B": "Reduzir PAM para diminuir sangramento e repetir traçado depois.",
    "C": "Aumentar anestésico volátil para melhorar amplitude dos MEP.",
    "D": "Elevar PAM, corrigir fatores de oferta, checar bloqueio neuromuscular/anestesia e avisar cirurgião para considerar desfazer manobra ou investigar compressão vascular/medular.",
    "E": "Administrar succinilcolina para melhorar sinal motor."
  },
  "resposta": "D",
  "comentario": "MEP é sensível a perfusão medular, anestesia e bloqueio neuromuscular. Queda bilateral pode ser sistêmica: hipotensão, anemia, anestesia ou relaxante. Também pode refletir agressão cirúrgica. SSEP preservado não exclui comprometimento motor. Conduta deve ser rápida e coordenada.",
  "frase_ouro": "MEP que cai durante coluna é alarme de via motora; primeiro corrija fisiologia, depois discuta a correção cirúrgica."
},
{
  "id": "yao-hard-015",
  "fonte": "Yao",
  "capitulo": "Neurocirurgia",
  "tema": "Embolia aérea venosa",
  "area": "Neuroanestesia",
  "dificuldade": "muito difícil",
  "pergunta": "Em craniotomia sentada, há queda súbita de EtCO2, hipotensão e aumento de pressão de artéria pulmonar. O campo mostra seio venoso aberto acima do nível do coração. Qual alternativa é a mais adequada?",
  "alternativas": {
    "A": "Aumentar óxido nitroso para reduzir volume de ar intravascular.",
    "B": "Manter campo seco e continuar, pois queda de EtCO2 indica hipoventilação simples.",
    "C": "Administrar diurético para reduzir PVC como tratamento principal.",
    "D": "Extubar para reduzir pressão intratorácica.",
    "E": "Avisar cirurgião para inundar/ocluir entrada de ar, administrar O2 100%, suportar hemodinâmica e aspirar por CVC se posicionado."
  },
  "resposta": "E",
  "comentario": "A posição sentada favorece entrada de ar em veias não colabadas. Queda de EtCO2 reflete redução de fluxo pulmonar/débito. Tratamento: interromper entrada de ar, O2 100%, suporte circulatório, manobras de posicionamento conforme protocolo e aspiração se houver cateter adequado.",
  "frase_ouro": "Embolia aérea venosa se trata fechando a porta de entrada e sustentando o coração enquanto o ar deixa de atrapalhar o fluxo."
},
{
  "id": "yao-hard-016",
  "fonte": "Yao",
  "capitulo": "Obstetrícia",
  "tema": "Pré-eclâmpsia grave",
  "area": "Obstetrícia",
  "dificuldade": "muito difícil",
  "pergunta": "Gestante 34 semanas, pré-eclâmpsia grave, cefaleia, PA 178/112, plaquetas 82.000 e proteinúria importante precisa de cesárea. Está em sulfato de magnésio. Qual plano é mais adequado?",
  "alternativas": {
    "A": "Avaliar tendência plaquetária/coagulação, controlar PA, manter magnésio, preparar via aérea difícil e individualizar neuraxial versus geral conforme risco hemorrágico e urgência.",
    "B": "Fazer raquianestesia obrigatoriamente porque plaquetas acima de 50.000 sempre tornam o neuroeixo isento de risco.",
    "C": "Suspender magnésio para evitar qualquer interação anestésica, mesmo com risco de eclâmpsia.",
    "D": "Induzir anestesia geral sem plano de via aérea, pois gestantes têm menor risco de aspiração.",
    "E": "Administrar grandes volumes empiricamente para tratar pré-eclâmpsia, independentemente de edema pulmonar."
  },
  "resposta": "A",
  "comentario": "Pré-eclâmpsia grave exige controle de pressão, prevenção/tratamento de convulsão com magnésio, cautela com fluidos, avaliação de plaquetas/coagulopatia e planejamento de via aérea. A decisão neuraxial depende de contagem, tendência, função plaquetária presumida, urgência e risco/benefício.",
  "frase_ouro": "Pré-eclâmpsia é doença endotelial: cérebro, pulmão, rim, fígado, coagulação e via aérea participam do plano."
},
{
  "id": "yao-hard-017",
  "fonte": "Yao",
  "capitulo": "Obstetrícia",
  "tema": "Embolia por líquido amniótico",
  "area": "Obstetrícia",
  "dificuldade": "muito difícil",
  "pergunta": "Durante cesárea por sofrimento fetal, logo após extração fetal, paciente apresenta hipóxia súbita, hipotensão profunda, crise convulsiva e, minutos depois, sangramento difuso com fibrinogênio muito baixo. Qual diagnóstico integra melhor todos os achados?",
  "alternativas": {
    "A": "Bloqueio neuraxial alto isolado, pois coagulopatia grave é manifestação típica e tardia da raqui.",
    "B": "Embolia por líquido amniótico com colapso cardiopulmonar e coagulopatia de consumo.",
    "C": "Toxicidade por magnésio, que causa fibrinogênio baixo e sangramento uterino difuso como regra.",
    "D": "Hipoglicemia, pois explica hipóxia e coagulopatia.",
    "E": "Broncoespasmo alérgico leve, pois convulsão e coagulopatia são esperadas."
  },
  "resposta": "B",
  "comentario": "A embolia por líquido amniótico é síndrome catastrófica com hipóxia, hipotensão, disfunção de VD/VE, convulsões e coagulopatia grave. O tratamento é suporte agressivo: oxigenação, circulação, controle hemorrágico e reposição guiada por hemostasia.",
  "frase_ouro": "Embolia amniótica é um colapso obstétrico de duas ondas: primeiro cardiopulmonar, depois hemostática."
},
{
  "id": "yao-hard-018",
  "fonte": "Yao",
  "capitulo": "Obstetrícia",
  "tema": "Analgesia de parto e cesárea",
  "area": "Obstetrícia",
  "dificuldade": "muito difícil",
  "pergunta": "Parturiente com peridural de parto funcionante vai para cesárea urgente por sofrimento fetal. Após dose de reforço, desenvolve bloqueio sensitivo alto, dificuldade para falar, hipotensão e bradicardia. Qual diagnóstico e conduta são mais adequados?",
  "alternativas": {
    "A": "Falha de bloqueio; repetir dose peridural alta imediatamente.",
    "B": "Toxicidade sistêmica por anestésico local é impossível com peridural.",
    "C": "Bloqueio neuraxial alto; suporte de via aérea/ventilação, deslocamento uterino, vasopressores e preparo para intubação se necessário.",
    "D": "Anafilaxia obrigatória; tratar apenas com anti-histamínico.",
    "E": "Eclâmpsia; administrar magnésio como única intervenção."
  },
  "resposta": "C",
  "comentario": "Reforço peridural pode causar bloqueio alto, especialmente se dose intratecal/subdural inadvertida ou dispersão extensa. Hipotensão e bradicardia refletem bloqueio simpático alto; dispneia/fala difícil sugerem comprometimento respiratório. Suporte imediato é prioridade.",
  "frase_ouro": "Bloqueio neuraxial alto na obstetrícia não é só anestesia eficaz demais; é simpático e ventilação indo embora juntos."
},
{
  "id": "yao-hard-019",
  "fonte": "Yao",
  "capitulo": "Obstetrícia",
  "tema": "Hemorragia pós-parto",
  "area": "Obstetrícia",
  "dificuldade": "muito difícil",
  "pergunta": "Após cesárea por placenta prévia, puérpera apresenta sangramento intenso, útero flácido, fibrinogênio 130 mg/dL, plaquetas 90.000 e hipotensão. Qual abordagem é mais apropriada?",
  "alternativas": {
    "A": "Tratar apenas com cristaloide até normalizar PA e aguardar contração espontânea.",
    "B": "Administrar beta-bloqueador para reduzir sangramento uterino.",
    "C": "Evitar uterotônicos se há hipotensão, pois todos pioram sangramento.",
    "D": "Combinar tratamento da atonia com uterotônicos/procedimentos e ressuscitação hemostática, incluindo fibrinogênio/plaquetas conforme sangramento e testes.",
    "E": "Usar diurético para concentrar fatores de coagulação."
  },
  "resposta": "D",
  "comentario": "Hemorragia obstétrica grave é simultaneamente problema uterino, cirúrgico e hemostático. Atonia exige uterotônicos e manobras; fibrinogênio baixo é marcador precoce de gravidade e pode precisar reposição. Ressuscitação balanceada evita tríade de hipotermia, acidose e coagulopatia.",
  "frase_ouro": "Na hemorragia obstétrica, útero sem tônus e coágulo sem fibrinogênio sangram em parceria."
},
{
  "id": "yao-hard-020",
  "fonte": "Yao",
  "capitulo": "Obstetrícia",
  "tema": "Toxicidade do magnésio",
  "area": "Obstetrícia",
  "dificuldade": "muito difícil",
  "pergunta": "Gestante com eclâmpsia em infusão de sulfato de magnésio evolui com arreflexia, sonolência, FR 7 irpm e fraqueza. Está em uso concomitante de rocurônio no intraoperatório. Qual consideração é mais correta?",
  "alternativas": {
    "A": "Magnésio reduz risco de depressão respiratória e antagoniza bloqueadores neuromusculares.",
    "B": "O quadro exclui toxicidade por magnésio porque há bloqueador neuromuscular.",
    "C": "Naloxona é antídoto específico do magnésio.",
    "D": "Apenas observar, pois arreflexia é objetivo terapêutico obrigatório.",
    "E": "Suspeitar toxicidade/potencialização neuromuscular; oferecer suporte ventilatório e cálcio intravenoso se clinicamente indicado."
  },
  "resposta": "E",
  "comentario": "Magnésio reduz liberação de acetilcolina e pode potencializar bloqueio neuromuscular, além de causar arreflexia e depressão respiratória quando tóxico. O tratamento envolve interromper magnésio, suporte ventilatório e cálcio IV nos casos relevantes.",
  "frase_ouro": "Magnésio protege contra eclâmpsia, mas em excesso silencia reflexo, músculo e respiração."
},
{
  "id": "yao-hard-021",
  "fonte": "Yao",
  "capitulo": "Pediatria",
  "tema": "Cardiopatia congênita",
  "area": "Pediatria",
  "dificuldade": "muito difícil",
  "pergunta": "Lactente com Tetralogia de Fallot não corrigida, em jejum prolongado, chora na sala e dessatura para 58% após punção venosa. PA cai após pequena dose de propofol. Qual conduta tem maior chance de reverter a fisiologia da crise?",
  "alternativas": {
    "A": "Oxigênio, aumento de RVS com vasopressor, volume se hipovolêmico, tratar acidose e reduzir estímulo simpático/espasmo infundibular.",
    "B": "Vasodilatador sistêmico para reduzir RVS e favorecer fluxo pulmonar.",
    "C": "Hiperventilação até alcalose extrema isoladamente, ignorando PA.",
    "D": "Diurético para reduzir pré-carga e shunt direita-esquerda.",
    "E": "Manter choro para aumentar pressão intratorácica e melhorar saturação."
  },
  "resposta": "A",
  "comentario": "Crise hipercianótica envolve aumento do shunt direita-esquerda por obstrução dinâmica/RVP relativamente alta e/ou queda de RVS. Aumentar RVS favorece fluxo pulmonar, enquanto oxigênio, volume, correção de acidose e redução de catecolaminas ajudam a quebrar o ciclo.",
  "frase_ouro": "Na crise hipercianótica, aumentar RVS é empurrar o sangue de volta para o pulmão."
},
{
  "id": "yao-hard-022",
  "fonte": "Yao",
  "capitulo": "Pediatria",
  "tema": "Laringoespasmo",
  "area": "Pediatria",
  "dificuldade": "muito difícil",
  "pergunta": "Criança após adenoidectomia, ainda em plano superficial, apresenta esforço inspiratório sem fluxo, retrações, ausência de capnografia e SpO2 caindo. Após pressão positiva e aprofundamento, não há melhora. Qual próximo passo é mais apropriado?",
  "alternativas": {
    "A": "Aguardar fadiga respiratória para confirmar laringoespasmo.",
    "B": "Administrar relaxante em dose apropriada e ventilar/intubar se necessário, mantendo oxigênio e sucção disponíveis.",
    "C": "Reduzir FiO2 para estimular respiração espontânea.",
    "D": "Fazer diurético para reduzir edema de glote.",
    "E": "Administrar beta-bloqueador para reduzir consumo de oxigênio."
  },
  "resposta": "B",
  "comentario": "Laringoespasmo refratário com dessaturação precisa de quebra rápida do espasmo. Oxigênio, CPAP, remoção de estímulo e aprofundamento são iniciais; se falham, relaxante e controle da via aérea são necessários. Atrasar piora hipóxia e bradicardia.",
  "frase_ouro": "Laringoespasmo pediátrico é emergência de oxigênio; se não abriu com medidas iniciais, relaxe e ventile."
},
{
  "id": "yao-hard-023",
  "fonte": "Yao",
  "capitulo": "Pediatria",
  "tema": "Prematuridade e apneia",
  "area": "Pediatria",
  "dificuldade": "muito difícil",
  "pergunta": "Prematuro com idade pós-conceptual baixa será submetido à herniorrafia inguinal. Procedimento corre bem com anestesia geral curta. Qual preocupação pós-operatória é mais relevante?",
  "alternativas": {
    "A": "Alta imediata sem monitorização se acordar chorando.",
    "B": "Hipertensão essencial tardia.",
    "C": "Apneia e bradicardia pós-anestésicas, justificando monitorização conforme idade e fatores de risco.",
    "D": "Síndrome pós-RTU pela herniorrafia.",
    "E": "Ausência de risco respiratório se não recebeu opioide."
  },
  "resposta": "C",
  "comentario": "Prematuros têm controle respiratório imaturo e maior risco de apneia pós-operatória, especialmente com anemia, história de apneia e menor idade pós-conceptual. O risco não desaparece apenas por cirurgia curta ou despertar inicial bom.",
  "frase_ouro": "Prematuro pode parecer recuperado e ainda assim esquecer de respirar no pós-operatório."
},
{
  "id": "yao-hard-024",
  "fonte": "Yao",
  "capitulo": "Pediatria",
  "tema": "Reposição volêmica",
  "area": "Pediatria",
  "dificuldade": "muito difícil",
  "pergunta": "Criança de 10 kg perde 150 mL de sangue em cirurgia. PA ainda normal, mas FC sobe, perfusão periférica piora e EtCO2 cai discretamente. Qual interpretação é mais adequada?",
  "alternativas": {
    "A": "Perda irrelevante, pois 150 mL é pouco em qualquer paciente.",
    "B": "Hipervolemia, pois taquicardia é sempre sinal de excesso de volume.",
    "C": "PA normal exclui choque em criança.",
    "D": "Perda representa fração significativa da volemia; criança pode manter PA até fases tardias, então sinais compensatórios importam.",
    "E": "Deve-se esperar hipotensão antes de repor volume ou sangue."
  },
  "resposta": "D",
  "comentario": "Em pediatria, pequenos volumes absolutos podem representar grande porcentagem da volemia. Crianças compensam com taquicardia e vasoconstrição, mantendo pressão até perda avançada. A avaliação deve considerar peso, sinais de perfusão e contexto cirúrgico.",
  "frase_ouro": "Em criança, mL pequeno pode ser choque grande; a pressão cai tarde demais para ser o primeiro alarme."
},
{
  "id": "yao-hard-025",
  "fonte": "Yao",
  "capitulo": "Pediatria",
  "tema": "Via aérea e IVAS",
  "area": "Pediatria",
  "dificuldade": "muito difícil",
  "pergunta": "Criança de 3 anos com tosse produtiva, febre ontem e sibilos leves chega para cirurgia eletiva de estrabismo. Pais relatam secreção nasal purulenta e piora noturna. Qual conduta é mais prudente?",
  "alternativas": {
    "A": "Prosseguir sempre, pois IVAS nunca altera risco anestésico.",
    "B": "Induzir com irritação máxima de via aérea para testar broncoespasmo.",
    "C": "Usar intubação obrigatória mesmo se o procedimento permitir alternativa menos irritante.",
    "D": "Ignorar febre se saturação for normal.",
    "E": "Considerar adiar cirurgia eletiva, pois sintomas ativos baixos/febre/sibilos aumentam risco respiratório perioperatório."
  },
  "resposta": "E",
  "comentario": "Infecção respiratória ativa com febre, tosse produtiva e sibilos aumenta risco de laringoespasmo, broncoespasmo, dessaturação e complicações. A decisão depende de urgência, gravidade, tipo de cirurgia e necessidade de manipulação de via aérea.",
  "frase_ouro": "IVAS leve pode ser manejável; IVAS com febre, secreção e sibilo transforma eletivo em aposta respiratória."
},
{
  "id": "yao-hard-026",
  "fonte": "Yao",
  "capitulo": "Anestesia regional",
  "tema": "LAST",
  "area": "Regional / Dor",
  "dificuldade": "muito difícil",
  "pergunta": "Durante bloqueio do plexo braquial guiado por ultrassom, após injeção fracionada de ropivacaína, paciente refere zumbido, gosto metálico e agitação; em seguida convulsiona e apresenta QRS largo. Qual sequência é mais adequada?",
  "alternativas": {
    "A": "Interromper injeção, pedir ajuda, garantir via aérea/oxigenação, controlar convulsão com pequenas doses de benzodiazepínico e iniciar emulsão lipídica conforme protocolo.",
    "B": "Administrar mais anestésico local para completar bloqueio e reduzir dor.",
    "C": "Tratar apenas com flumazenil, pois benzodiazepínico é causa provável.",
    "D": "Aguardar metabolização espontânea sem suporte ventilatório.",
    "E": "Administrar protamina para reverter ropivacaína."
  },
  "resposta": "A",
  "comentario": "O quadro é toxicidade sistêmica por anestésico local. Tratamento: interromper injeção, suporte de via aérea e circulação, evitar grandes doses de propofol se instável, tratar convulsões e iniciar terapia lipídica. Arritmias podem ser refratárias e exigem adaptações do ACLS.",
  "frase_ouro": "LAST é uma emergência em dois órgãos: começa no cérebro e pode terminar no coração; lipídio e suporte precisam estar prontos."
},
{
  "id": "yao-hard-027",
  "fonte": "Yao",
  "capitulo": "Anestesia regional",
  "tema": "Neuroeixo e anticoagulação",
  "area": "Regional / Dor",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente em enoxaparina profilática recebe cateter peridural para laparotomia. No pós-operatório, a equipe quer iniciar anticoagulação e retirar o cateter no mesmo horário por praticidade. Qual princípio é correto?",
  "alternativas": {
    "A": "Retirada de cateter nunca sangra, portanto horário não importa.",
    "B": "A retirada do cateter também é momento de risco; deve respeitar intervalos seguros em relação à anticoagulação e função renal.",
    "C": "Basta usar agulha fina para eliminar hematoma epidural.",
    "D": "Anticoagulação profilática não tem relação com neuroeixo.",
    "E": "Déficit neurológico após retirada deve ser observado por 48 horas antes de investigar."
  },
  "resposta": "B",
  "comentario": "Hematoma neuraxial pode ocorrer na punção ou retirada do cateter. Intervalos dependem da droga, dose, função renal e risco do paciente. Déficit neurológico novo é emergência diagnóstica e cirúrgica potencial.",
  "frase_ouro": "Cateter peridural e anticoagulante exigem relógio; a retirada é tão neuraxial quanto a punção."
},
{
  "id": "yao-hard-028",
  "fonte": "Yao",
  "capitulo": "Bloqueadores neuromusculares",
  "tema": "Miastenia gravis",
  "area": "Farmacologia",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com miastenia gravis controlada fará timectomia. Após pequena dose de rocurônio, TOF cai profundamente e recuperação é lenta. Qual interpretação é correta?",
  "alternativas": {
    "A": "Miastênicos são sempre resistentes a bloqueadores não despolarizantes, então a dose foi insuficiente.",
    "B": "TOF não tem valor em doença neuromuscular.",
    "C": "Miastenia geralmente aumenta sensibilidade a bloqueadores não despolarizantes, exigindo doses reduzidas, monitorização quantitativa e plano de ventilação pós-operatória.",
    "D": "Succinilcolina em infusão contínua é sempre a opção mais segura.",
    "E": "A ausência de sintomas bulbares elimina risco respiratório pós-operatório."
  },
  "resposta": "C",
  "comentario": "Na miastenia, a redução de receptores funcionais torna o paciente sensível a bloqueadores não despolarizantes. Resposta à succinilcolina pode ser imprevisível. O risco de ventilação pós-operatória depende de força respiratória, bulbar, duração da doença e cirurgia.",
  "frase_ouro": "Na miastenia, pouca droga pode virar muito bloqueio; monitor quantitativo deixa de ser luxo e vira segurança."
},
{
  "id": "yao-hard-029",
  "fonte": "Yao",
  "capitulo": "Farmacologia",
  "tema": "Opioides e rigidez",
  "area": "Farmacologia",
  "dificuldade": "muito difícil",
  "pergunta": "Após bolus rápido de remifentanil/fentanil em indução de paciente sem relaxante, há ventilação manual difícil, tórax rígido, capnografia mínima e saturação caindo. Laringoscopia ainda não foi iniciada. Qual conduta é mais coerente?",
  "alternativas": {
    "A": "Tratar como broncoespasmo puro e administrar apenas salbutamol.",
    "B": "Aguardar porque opioide sempre melhora complacência torácica.",
    "C": "Administrar nitroprussiato para relaxar musculatura torácica.",
    "D": "Reconhecer rigidez torácica induzida por opioide; ventilar com suporte, administrar bloqueador neuromuscular e considerar antagonismo se necessário.",
    "E": "Reduzir FiO2 para estimular drive respiratório."
  },
  "resposta": "D",
  "comentario": "Bolus rápido de opioides potentes pode causar rigidez muscular, inclusive torácica e glótica, dificultando ventilação. Bloqueador neuromuscular geralmente resolve rapidamente; naloxona pode ser considerada se necessário, mas pode reverter analgesia e gerar resposta simpática.",
  "frase_ouro": "Opioide rápido demais pode travar a caixa torácica antes de proteger a via aérea."
},
{
  "id": "yao-hard-030",
  "fonte": "Yao",
  "capitulo": "Farmacologia",
  "tema": "Inalatórios e metabolismo",
  "area": "Farmacologia",
  "dificuldade": "muito difícil",
  "pergunta": "Durante anestesia com desflurano em paciente coronariopata, ocorre aumento abrupto de concentração expirada, seguido de FC e PA elevadas. Qual explicação é mais adequada?",
  "alternativas": {
    "A": "Desflurano não tem efeito simpático em nenhuma circunstância.",
    "B": "A resposta indica obrigatoriamente anafilaxia ao desflurano.",
    "C": "Aumento rápido de desflurano pode estimular simpático, gerando taquicardia/hipertensão, indesejável em coronariopata.",
    "D": "A conduta ideal é reduzir analgesia para permitir taquicardia compensatória.",
    "E": "Esse efeito prova que a CAM caiu para zero."
  },
  "resposta": "C",
  "comentario": "Desflurano é pouco solúvel e permite ajustes rápidos, mas aumentos abruptos podem ativar simpático, com taquicardia e hipertensão. Em coronariopatas, isso pode aumentar consumo de O2. A alternativa correta não é evitar sempre desflurano, mas evitar variações bruscas e garantir analgesia.",
  "frase_ouro": "Desflurano é rápido no dial e às vezes rápido demais no simpático."
},
{
  "id": "yao-hard-031",
  "fonte": "Yao",
  "capitulo": "Doença renal crônica",
  "tema": "Hipercalemia e indução",
  "area": "Renal / Endócrino / Metabólico",
  "dificuldade": "muito difícil",
  "pergunta": "Homem de 61 anos, DRC estágio 5 em hemodiálise, chega para laparotomia urgente por abdome agudo. Última diálise há 3 dias. K 6,7 mEq/L, pH 7,28, ECG com ondas T apiculadas e QRS discretamente alargado. Qual conduta é mais apropriada antes da indução, se houver tempo mínimo para intervenção?",
  "alternativas": {
    "A": "Administrar cálcio intravenoso para estabilizar membrana miocárdica, iniciar medidas de deslocamento intracelular do potássio e planejar remoção definitiva conforme urgência.",
    "B": "Fazer succinilcolina para sequência rápida, pois reduz rapidamente o potássio sérico.",
    "C": "Aguardar a indução, pois alterações eletrocardiográficas só importam se houver parada cardíaca.",
    "D": "Administrar furosemida isolada como tratamento definitivo, independentemente de anúria.",
    "E": "Corrigir apenas a acidose com hiperventilação, pois cálcio é contraindicado na hipercalemia."
  },
  "resposta": "A",
  "comentario": "Hipercalemia com alteração eletrocardiográfica é emergência elétrica. O cálcio não reduz o potássio, mas estabiliza a membrana miocárdica e reduz risco de arritmia. Em seguida, insulina com glicose, beta-agonista e bicarbonato em situações selecionadas deslocam potássio para o intracelular. A remoção definitiva depende de diálise, diurese ou resinas conforme contexto.",
  "frase_ouro": "Na hipercalemia com ECG alterado, primeiro salve o coração; depois tire o potássio."
},
{
  "id": "yao-hard-032",
  "fonte": "Yao",
  "capitulo": "Doença renal crônica",
  "tema": "Escolha de fármacos",
  "area": "Renal / Endócrino / Metabólico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente renal crônico dialítico será submetido a cirurgia abdominal. O plano inclui bloqueio neuromuscular por tempo prolongado, com necessidade de recuperação previsível. Qual escolha é mais coerente?",
  "alternativas": {
    "A": "Pancurônio em doses repetidas, pois sua eliminação renal facilita recuperação rápida na DRC.",
    "B": "Cisatracúrio, por menor dependência de eliminação renal e metabolismo por degradação de Hofmann/esterases.",
    "C": "Succinilcolina em infusão contínua, pois não altera potássio em renais crônicos.",
    "D": "Evitar monitorização neuromuscular, porque DRC não altera resposta farmacológica.",
    "E": "Vecurônio em bolus repetidos sem ajuste, pois metabólitos ativos não têm relevância clínica."
  },
  "resposta": "B",
  "comentario": "Na DRC, fármacos e metabólitos com eliminação renal podem acumular. Cisatracúrio é vantajoso por degradação de Hofmann e menor dependência de função renal. Ainda assim, a resposta deve ser guiada por monitorização neuromuscular, temperatura e estado ácido-base.",
  "frase_ouro": "No rim que não depura, escolha bloqueador que saiba sair por outra porta."
},
{
  "id": "yao-hard-033",
  "fonte": "Yao",
  "capitulo": "Endocrinologia",
  "tema": "Insuficiência adrenal",
  "area": "Renal / Endócrino / Metabólico",
  "dificuldade": "muito difícil",
  "pergunta": "Mulher de 54 anos usa prednisona cronicamente por doença autoimune e será submetida a colectomia. No intraoperatório apresenta hipotensão refratária a doses moderadas de vasopressor, hiponatremia leve e hipoglicemia. Qual raciocínio é mais adequado?",
  "alternativas": {
    "A": "Corticoide crônico exclui insuficiência adrenal perioperatória.",
    "B": "A melhor conduta é suspender todo glicocorticoide para evitar infecção.",
    "C": "Supressão do eixo hipotálamo-hipófise-adrenal pode limitar resposta ao estresse; hidrocortisona deve ser considerada junto com suporte hemodinâmico.",
    "D": "Hipotensão por insuficiência adrenal sempre cursa com hipercalemia grave em todos os pacientes.",
    "E": "A reposição de corticoide substitui necessidade de tratar sangramento, sepse ou anestesia excessiva."
  },
  "resposta": "C",
  "comentario": "Uso crônico de corticoide pode suprimir o eixo adrenal. Em cirurgia de maior porte, a incapacidade de aumentar cortisol pode contribuir para hipotensão, hipoglicemia e distúrbios eletrolíticos. A reposição não dispensa investigação de causas comuns de choque, mas deve ser lembrada em hipotensão refratária.",
  "frase_ouro": "Quem vive de corticoide pode não produzir cortisol quando a cirurgia cobra estresse."
},
{
  "id": "yao-hard-034",
  "fonte": "Yao",
  "capitulo": "Endocrinologia",
  "tema": "Crise tireotóxica",
  "area": "Renal / Endócrino / Metabólico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com hipertireoidismo mal controlado faz cirurgia de urgência. No intraoperatório evolui com hipertermia, taquicardia 170 bpm, FA, hipertensão inicial seguida de hipotensão e acidose. Qual alternativa diferencia melhor crise tireotóxica de hipertermia maligna e orienta conduta?",
  "alternativas": {
    "A": "Crise tireotóxica sempre cursa com rigidez muscular intensa e aumento abrupto de EtCO2 como primeiro sinal.",
    "B": "Hipertermia maligna é excluída se o paciente recebeu anestésico inalatório.",
    "C": "Crise tireotóxica não causa instabilidade cardiovascular relevante.",
    "D": "História de tireotoxicose, FA/hipermetabolismo e ausência de rigidez/hipercapnia desproporcional favorecem crise tireotóxica; tratar com suporte, beta-bloqueio cuidadoso, antitireoidianos, iodo após bloqueio da síntese e corticoide.",
    "E": "O tratamento específico de crise tireotóxica é dantrolene isolado."
  },
  "resposta": "D",
  "comentario": "Crise tireotóxica e hipertermia maligna podem compartilhar hipertermia, taquicardia e acidose. Rigidez, hipercapnia rápida e exposição a gatilhos favorecem hipertermia maligna. Na tireotoxicose, o tratamento inclui controle adrenérgico, redução da síntese/liberação hormonal e suporte. Em caso de dúvida real, tratar simultaneamente ameaças fatais pode ser necessário.",
  "frase_ouro": "Hipertermia no centro cirúrgico não tem diagnóstico único; EtCO2, rigidez, história tireoidiana e gatilhos contam a história."
},
{
  "id": "yao-hard-035",
  "fonte": "Yao",
  "capitulo": "Feocromocitoma",
  "tema": "Preparo e intraoperatório",
  "area": "Renal / Endócrino / Metabólico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com feocromocitoma recebeu doxazosina por 14 dias. PA sentada 124/72, em pé 96/58, FC 118 bpm, mucosas secas. No intraoperatório, após ligadura da veia adrenal, evolui com PA 58/30. Qual explicação e conduta são mais adequadas?",
  "alternativas": {
    "A": "Hipotensão após ligadura é inesperada e exclui feocromocitoma.",
    "B": "A principal conduta é beta-bloqueio em bolus para reduzir frequência.",
    "C": "A hipotensão decorre apenas de plano anestésico superficial.",
    "D": "Deve-se administrar nitroprussiato, pois a hipotensão é efeito paradoxal de hipertensão oculta.",
    "E": "Após retirada da fonte catecolaminérgica, alfa-bloqueio residual e hipovolemia relativa podem causar vasodilatação profunda; tratar com volume criterioso, vasopressores e glicemia/eletrólitos."
  },
  "resposta": "E",
  "comentario": "No feocromocitoma, a fase pré-ligadura é dominada por catecolaminas; a fase pós-ligadura pode ser de vasodilatação e hipovolemia relativa. O preparo com alfa-bloqueio expande leito vascular e pode causar ortostatismo. Depois da remoção tumoral, vasopressor e volume são frequentemente necessários.",
  "frase_ouro": "Feocromocitoma é uma anestesia em dois atos: antes, catecolamina demais; depois, catecolamina de menos para um vaso já bloqueado."
},
{
  "id": "yao-hard-036",
  "fonte": "Yao",
  "capitulo": "Hemostasia",
  "tema": "Sangramento pós-CEC",
  "area": "Hematologia / Coagulação",
  "dificuldade": "muito difícil",
  "pergunta": "Após cirurgia cardíaca com CEC prolongada, há sangramento difuso. ACT está discretamente prolongado, plaquetas 72.000, fibrinogênio 145 mg/dL, cálcio ionizado baixo e ROTEM sugere coágulo fraco com componente fibrinogênio baixo. Qual abordagem é mais racional?",
  "alternativas": {
    "A": "Tratar apenas com concentrado de hemácias, pois melhora todos os componentes da coagulação.",
    "B": "Repor de forma guiada: corrigir cálcio/temperatura/acidose, avaliar heparina residual, repor fibrinogênio e plaquetas conforme sangramento e testes.",
    "C": "Administrar protamina em dose ilimitada até parar sangramento.",
    "D": "Evitar hemoderivados até o paciente ficar hipotenso.",
    "E": "Usar diurético para concentrar fatores de coagulação."
  },
  "resposta": "B",
  "comentario": "Sangramento pós-CEC é multifatorial: heparina residual, disfunção/queda plaquetária, fibrinogênio baixo, hipotermia, hipocalcemia e acidose. Testes viscoelásticos ajudam a direcionar a reposição. Protamina em excesso também pode prejudicar coagulação.",
  "frase_ouro": "No sangramento pós-CEC, o coágulo falha por peças diferentes; ROTEM/TEG servem para descobrir qual peça está faltando."
},
{
  "id": "yao-hard-037",
  "fonte": "Yao",
  "capitulo": "Transfusão maciça",
  "tema": "Hipocalcemia e coagulopatia",
  "area": "Hematologia / Coagulação",
  "dificuldade": "muito difícil",
  "pergunta": "Durante hepatectomia com transfusão maciça, paciente apresenta hipotensão, QT prolongado, sangramento difuso e cálcio ionizado 0,78 mmol/L. Qual alternativa é mais correta?",
  "alternativas": {
    "A": "Hipocalcemia por citrato é irrelevante para contratilidade e coagulação.",
    "B": "A correção deve ser feita apenas com hiperventilação.",
    "C": "Repor cálcio intravenoso é parte do suporte hemodinâmico e hemostático, junto com controle de sangramento, temperatura, pH e reposição balanceada.",
    "D": "A transfusão deve ser interrompida definitivamente mesmo em choque hemorrágico.",
    "E": "Hipocalcemia indica hiperparatireoidismo agudo."
  },
  "resposta": "C",
  "comentario": "O citrato dos hemocomponentes quelata cálcio. Hipocalcemia reduz contratilidade miocárdica, favorece hipotensão e prejudica coagulação. Em transfusão maciça, cálcio ionizado deve ser monitorado e corrigido.",
  "frase_ouro": "Na transfusão maciça, cálcio é hemodinâmica e hemostasia no mesmo eletrólito."
},
{
  "id": "yao-hard-038",
  "fonte": "Yao",
  "capitulo": "Anticoagulantes",
  "tema": "DOAC e urgência cirúrgica",
  "area": "Hematologia / Coagulação",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente em rivaroxabana tomou a última dose há 5 horas, tem DRC moderada e precisa de cirurgia emergencial por sangramento intra-abdominal. Qual conduta é mais adequada?",
  "alternativas": {
    "A": "Realizar raquianestesia, pois DOAC não interfere em neuroeixo.",
    "B": "Aguardar obrigatoriamente 7 dias, mesmo em choque hemorrágico.",
    "C": "Usar vitamina K como reversor específico da rivaroxabana.",
    "D": "Considerar tempo da última dose, função renal, gravidade do sangramento, reversão específica ou complexo protrombínico conforme disponibilidade, sem atrasar controle da fonte.",
    "E": "Administrar heparina para neutralizar rivaroxabana."
  },
  "resposta": "D",
  "comentario": "DOAC recente em sangramento grave exige raciocínio por droga, tempo, função renal e urgência. Reversores específicos podem não estar disponíveis; complexo protrombínico pode ser considerado em sangramento ameaçador. O controle cirúrgico da fonte continua central.",
  "frase_ouro": "Anticoagulante direto em cirurgia urgente exige três perguntas antes do pânico: qual droga, que horas tomou, como está o rim?"
},
{
  "id": "yao-hard-039",
  "fonte": "Yao",
  "capitulo": "Anemia perioperatória",
  "tema": "Transfusão e oferta de oxigênio",
  "area": "Hematologia / Coagulação",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente coronariopata, em cirurgia vascular, apresenta Hb 7,4 g/dL, lactato 3,2, ST infradesnivelado, SvO2 baixa e sangramento controlado. Qual raciocínio transfusional é mais adequado?",
  "alternativas": {
    "A": "Hb abaixo de 10 g/dL obriga transfusão em todos os pacientes, independentemente de contexto.",
    "B": "Hb 7,4 g/dL nunca deve ser transfundida se o sangramento parou.",
    "C": "Saturação periférica normal exclui limitação de oferta de oxigênio.",
    "D": "Cristaloide corrige conteúdo arterial de oxigênio de forma equivalente à hemácia.",
    "E": "A decisão deve integrar Hb, sinais de isquemia, reserva cardiopulmonar, SvO2/lactato e contexto de sangramento."
  },
  "resposta": "E",
  "comentario": "Transfusão não deve ser decidida apenas por número fixo. Em coronariopata com sinais de isquemia e baixa oferta sistêmica, a hemoglobina passa a ser componente relevante da entrega de oxigênio. Cristaloide pode restaurar volume, mas dilui e não carrega oxigênio.",
  "frase_ouro": "Transfusão não trata hemoglobina; trata oferta de oxigênio em um paciente com fisiologia real."
},
{
  "id": "yao-hard-040",
  "fonte": "Yao",
  "capitulo": "Hemostasia",
  "tema": "Hiperfibrinólise",
  "area": "Hematologia / Coagulação",
  "dificuldade": "muito difícil",
  "pergunta": "Durante transplante hepático, após reperfusão, há sangramento difuso. ROTEM mostra lise importante do coágulo após formação inicial adequada. Qual conduta é mais direcionada?",
  "alternativas": {
    "A": "Ácido tranexâmico, se não houver contraindicação e o contexto confirmar hiperfibrinólise clinicamente relevante.",
    "B": "Apenas concentrado de hemácias, pois fibrinólise não altera sangramento.",
    "C": "Naloxona, pois reverte degradação do coágulo.",
    "D": "Atropina, pois aumenta estabilidade da fibrina.",
    "E": "Suspender toda reposição hemostática e aguardar."
  },
  "resposta": "A",
  "comentario": "Hiperfibrinólise é quebra acelerada do coágulo. Em transplante hepático e grandes sangramentos, testes viscoelásticos podem identificá-la e orientar antifibrinolítico. O uso deve considerar risco trombótico e o conjunto clínico.",
  "frase_ouro": "Se o coágulo nasce e desaparece, não basta construir mais; às vezes é preciso impedir que ele seja dissolvido."
},
{
  "id": "yao-hard-041",
  "fonte": "Yao",
  "capitulo": "Trauma",
  "tema": "Choque hemorrágico",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Homem vítima de colisão chega com FAST positivo, PA 72/40, FC 136, extremidades frias, lactato 7 e suspeita de hemorragia abdominal. Qual abordagem é mais adequada?",
  "alternativas": {
    "A": "Cristaloide em grande volume até normalizar completamente a PA antes de acionar cirurgia.",
    "B": "Controle rápido da fonte, protocolo de transfusão maciça, aquecimento, cálcio, correção de acidose/coagulopatia e pressão permissiva enquanto não houver contraindicação específica.",
    "C": "Diurético para evitar edema antes da laparotomia.",
    "D": "Aguardar tomografia se o paciente está instável, pois imagem sempre precede controle de fonte.",
    "E": "Evitar hemocomponentes até Hb ficar abaixo de 5 g/dL."
  },
  "resposta": "B",
  "comentario": "Choque hemorrágico traumático requer controle da fonte e ressuscitação hemostática. Cristaloide excessivo dilui coagulação e pode piorar sangramento. A pressão permissiva pode ser considerada até controle hemorrágico, exceto em cenários como TCE grave, em que perfusão cerebral muda a meta.",
  "frase_ouro": "No trauma sangrando, o soro compra tempo ruim; sangue e controle da fonte compram sobrevivência."
},
{
  "id": "yao-hard-042",
  "fonte": "Yao",
  "capitulo": "Sepse",
  "tema": "Indução anestésica",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com peritonite fecal, noradrenalina baixa, lactato 5,8 e ecocardiografia com VE hiperdinâmico vai para laparotomia. Qual risco é mais importante na indução e como mitigá-lo?",
  "alternativas": {
    "A": "O principal risco é hipertensão por excesso de catecolamina; induzir com dose plena de propofol sem vasopressor.",
    "B": "Colapso por perda de tônus simpático/vasoplegia; preparar vasopressor, volume responsivo, dose titulada de hipnótico e controle rápido da fonte.",
    "C": "Broncoespasmo obrigatório; evitar capnografia.",
    "D": "Hipertensão intracraniana; hiperventilar todos para PaCO2 menor que 20 mmHg.",
    "E": "Ausência de risco, pois VE hiperdinâmico exclui choque."
  },
  "resposta": "B",
  "comentario": "Sepse abdominal frequentemente combina vasodilatação, hipovolemia relativa e dependência de catecolaminas endógenas/exógenas. Indução reduz tônus simpático e pode causar colapso. Preparar vasopressor e titular drogas é mais importante que manter um plano fixo.",
  "frase_ouro": "Na sepse, a indução pode ser o momento em que o simpático para de segurar o paciente."
},
{
  "id": "yao-hard-043",
  "fonte": "Yao",
  "capitulo": "Choque",
  "tema": "Delta PCO2 e SvO2",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente em choque séptico após ressuscitação inicial apresenta PAM 70 com noradrenalina, SvO2 74%, lactato 4,0 e diferença venoarterial de CO2 elevada. Qual interpretação é mais adequada?",
  "alternativas": {
    "A": "SvO2 normal exclui hipoperfusão.",
    "B": "Delta PCO2 elevado pode sugerir fluxo sanguíneo inadequado para remover CO2 tecidual, mesmo com SvO2 aparentemente aceitável.",
    "C": "Lactato elevado é sempre causado apenas por hipoxemia arterial.",
    "D": "A conduta obrigatória é reduzir débito cardíaco.",
    "E": "A diferença de CO2 não tem relação com perfusão."
  },
  "resposta": "B",
  "comentario": "SvO2 pode ser normal/alta na sepse por alteração de extração, shunt microcirculatório ou oferta global aparentemente suficiente. Delta PCO2 elevado sugere baixo fluxo relativo ou má remoção de CO2, devendo levar à reavaliação de débito, volume, microcirculação e controle do foco.",
  "frase_ouro": "SvO2 normal não absolve a perfusão; CO2 venoso alto pode denunciar fluxo que não lava o tecido."
},
{
  "id": "yao-hard-044",
  "fonte": "Yao",
  "capitulo": "Anafilaxia",
  "tema": "Refratariedade",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente em uso de carvedilol apresenta anafilaxia após antibiótico: broncoespasmo, PA 50/30 e pouca resposta a adrenalina em bolus repetidos. Qual adjuvante pode ser útil pela via independente do receptor beta?",
  "alternativas": {
    "A": "Nitroprussiato.",
    "B": "Furosemida.",
    "C": "Protamina.",
    "D": "Glucagon.",
    "E": "Flumazenil."
  },
  "resposta": "D",
  "comentario": "Beta-bloqueio pode tornar anafilaxia mais grave e menos responsiva à adrenalina. Glucagon aumenta AMPc por receptor próprio, independente de beta-adrenérgico. Isso não substitui adrenalina, volume, oxigênio e suporte avançado, mas pode ajudar na refratariedade.",
  "frase_ouro": "Na anafilaxia do beta-bloqueado, às vezes é preciso contornar o receptor beta para recuperar o AMPc."
},
{
  "id": "yao-hard-045",
  "fonte": "Yao",
  "capitulo": "Hipertermia maligna",
  "tema": "Diagnóstico precoce",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Criança recebe sevoflurano e succinilcolina. Minutos depois, EtCO2 sobe rapidamente apesar de aumento da ventilação, há rigidez, taquicardia e acidose mista. Temperatura ainda 37,8 °C. Qual conduta é correta?",
  "alternativas": {
    "A": "Aguardar temperatura acima de 40 °C para tratar.",
    "B": "Aumentar sevoflurano para aprofundar anestesia.",
    "C": "Administrar succinilcolina adicional para tratar rigidez.",
    "D": "Tratar apenas com antitérmico comum.",
    "E": "Suspeitar de hipertermia maligna, suspender gatilhos, administrar dantrolene e tratar hipercapnia, acidose, hipercalemia e hipertermia."
  },
  "resposta": "E",
  "comentario": "A hipertermia é frequentemente tardia. Aumento inexplicado de CO2, rigidez, taquicardia e acidose após gatilhos são sinais precoces. O tratamento não espera confirmação laboratorial nem temperatura extrema.",
  "frase_ouro": "Na hipertermia maligna, o capnógrafo costuma gritar antes do termômetro."
},
{
  "id": "yao-hard-046",
  "fonte": "Yao",
  "capitulo": "Transplante hepático",
  "tema": "Síndrome pós-reperfusão",
  "area": "Gastro / Hepato / Transplantes",
  "dificuldade": "muito difícil",
  "pergunta": "Na reperfusão do enxerto hepático, paciente apresenta bradicardia, queda de PAM, aumento de PAP, K 6,2, acidose e redução de contratilidade. Qual combinação de preparo e tratamento é mais adequada?",
  "alternativas": {
    "A": "Antecipar reperfusão com correção de cálcio/potássio/pH quando possível, comunicar equipe, suportar circulação com vasopressor/inotrópico e tratar hipercalemia/acidose.",
    "B": "Evitar cálcio porque sempre piora vasoplegia.",
    "C": "Administrar beta-bloqueador em bolus como primeira medida.",
    "D": "Reduzir FiO2 para diminuir radicais livres.",
    "E": "Ignorar, pois reperfusão hepática não causa instabilidade."
  },
  "resposta": "A",
  "comentario": "A síndrome pós-reperfusão envolve retorno de sangue frio, acidótico, rico em potássio e mediadores, podendo causar vasodilatação, depressão miocárdica, arritmia e hipertensão pulmonar. Preparação metabólica e comunicação antes da reperfusão são essenciais.",
  "frase_ouro": "Na reperfusão hepática, o enxerto devolve ao coração o que ficou guardado no frio: potássio, ácido e mediadores."
},
{
  "id": "yao-hard-047",
  "fonte": "Yao",
  "capitulo": "Transplante hepático",
  "tema": "Fase anepática",
  "area": "Gastro / Hepato / Transplantes",
  "dificuldade": "muito difícil",
  "pergunta": "Durante a fase anepática do transplante hepático, o paciente recebe grande volume de plasma e hemácias. Evolui com cálcio ionizado baixo, lactato em ascensão e necessidade crescente de vasopressor. Qual explicação é mais adequada?",
  "alternativas": {
    "A": "O fígado ausente aumenta depuração de citrato e lactato.",
    "B": "Sem função hepática temporária, há menor metabolismo de citrato/lactato; hipocalcemia por citrato e acidose podem piorar hemodinâmica e coagulação.",
    "C": "A fase anepática protege contra distúrbios ácido-base.",
    "D": "Hipocalcemia melhora contratilidade.",
    "E": "Transfusão maciça não altera cálcio."
  },
  "resposta": "B",
  "comentario": "Na fase anepática, o metabolismo hepático de lactato e citrato fica muito reduzido. Transfusão maciça aumenta carga de citrato, causando hipocalcemia, que prejudica coagulação e contratilidade. Lactato pode subir por metabolismo reduzido e perfusão inadequada.",
  "frase_ouro": "Sem fígado no circuito, citrato e lactato passam pela alfândega sem fiscal."
},
{
  "id": "yao-hard-048",
  "fonte": "Yao",
  "capitulo": "Cirrose",
  "tema": "Coagulação e risco anestésico",
  "area": "Gastro / Hepato / Transplantes",
  "dificuldade": "muito difícil",
  "pergunta": "Cirrótico Child C com INR 2,1, plaquetas 54.000, ascite tensa e encefalopatia leve será submetido a cirurgia abdominal urgente. Qual raciocínio é mais correto?",
  "alternativas": {
    "A": "INR elevado em cirrose mede perfeitamente risco hemorrágico e deve ser corrigido com plasma até normalizar em todos os casos.",
    "B": "Cirróticos são sempre anticoagulados e nunca trombosam.",
    "C": "A hemostasia é reequilibrada e frágil; risco de sangramento e trombose coexistem, e reposição deve ser guiada por sangramento, procedimento e testes quando disponíveis.",
    "D": "Ascite não influencia ventilação nem risco de aspiração.",
    "E": "Encefalopatia não altera escolha de sedativos."
  },
  "resposta": "C",
  "comentario": "Na cirrose, há redução de fatores pró e anticoagulantes, plaquetopenia, alterações de fibrinogênio e fibrinólise. INR isolado não prediz todo o risco. A anestesia deve considerar volume, aspiração, encefalopatia, metabolismo de fármacos, função renal e hemostasia dinâmica.",
  "frase_ouro": "Cirrótico não é simplesmente ‘anticoagulado’; é hemostaticamente instável para os dois lados."
},
{
  "id": "yao-hard-049",
  "fonte": "Yao",
  "capitulo": "Abdome agudo",
  "tema": "Obstrução intestinal",
  "area": "Gastro / Hepato / Transplantes",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com obstrução intestinal alta, vômitos repetidos, alcalose metabólica hipoclorêmica e hipocalemia precisa de laparotomia. Qual conjunto de preocupações é mais apropriado?",
  "alternativas": {
    "A": "Baixo risco de aspiração, pois vômitos esvaziam completamente o estômago.",
    "B": "Evitar sonda gástrica em todos os casos, pois sempre aumenta aspiração.",
    "C": "Induzir anestesia inalatória lenta sem proteção de via aérea.",
    "D": "Considerar estômago cheio, descompressão quando possível, correção hidroeletrolítica e sequência rápida individualizada.",
    "E": "Hipocalemia é protetora contra arritmias."
  },
  "resposta": "D",
  "comentario": "Obstrução intestinal aumenta volume gástrico e risco de aspiração. Vômitos causam hipovolemia, alcalose, hipocloremia e hipocalemia. O plano deve integrar ressuscitação, descompressão e proteção da via aérea.",
  "frase_ouro": "Obstrução intestinal é estômago cheio, vaso vazio e eletrólito bagunçado."
},
{
  "id": "yao-hard-050",
  "fonte": "Yao",
  "capitulo": "Transplante renal",
  "tema": "Perfusão do enxerto",
  "area": "Gastro / Hepato / Transplantes",
  "dificuldade": "muito difícil",
  "pergunta": "Durante transplante renal, antes da reperfusão do enxerto, paciente está hipotenso por vasodilatação anestésica. Qual meta é mais coerente?",
  "alternativas": {
    "A": "Manter hipovolemia para evitar edema do enxerto.",
    "B": "Usar diurético como substituto de pressão de perfusão.",
    "C": "Permitir PAM muito baixa, pois rim transplantado não depende de fluxo inicial.",
    "D": "Evitar qualquer vasopressor mesmo se hipotenso.",
    "E": "Garantir pressão de perfusão e volemia adequadas, usando vasopressor/volume conforme fisiologia, para favorecer função inicial do enxerto."
  },
  "resposta": "E",
  "comentario": "O rim transplantado precisa de fluxo na reperfusão. Hipotensão prolongada pode prejudicar função inicial. O objetivo não é hiper-hidratação cega, mas perfusão adequada com volume e vasopressor conforme necessidade.",
  "frase_ouro": "Rim novo chega pedindo fluxo; nem hipovolemia elegante nem hipotensão bonita protegem enxerto."
},
{
  "id": "yao-hard-051",
  "fonte": "Yao",
  "capitulo": "Via aérea difícil",
  "tema": "Não intuba, não oxigena",
  "area": "Via aérea",
  "dificuldade": "muito difícil",
  "pergunta": "Após indução em paciente obeso com apneia do sono, há falha de intubação por laringoscopia e videolaringoscopia. Máscara facial e dispositivo supraglótico não ventilam adequadamente, SpO2 62% e caindo. Qual conduta é correta?",
  "alternativas": {
    "A": "Declarar cenário não intuba/não oxigena e partir para acesso frontal de pescoço emergencial, enquanto mantém tentativa de oxigenação.",
    "B": "Realizar mais cinco tentativas de laringoscopia direta antes de mudar plano.",
    "C": "Aguardar retorno espontâneo da ventilação sem oxigenação.",
    "D": "Administrar mais hipnótico para melhorar saturação.",
    "E": "Reduzir FiO2 para evitar absorção de atelectasia."
  },
  "resposta": "A",
  "comentario": "No cenário não intuba/não oxigena, a prioridade é oxigenação. Tentativas repetidas traumatizam, atrasam acesso cirúrgico e pioram edema/sangramento. Deve-se seguir algoritmo de emergência e fazer acesso frontal de pescoço.",
  "frase_ouro": "Quando não intuba e não oxigena, insistência vira hipóxia; o pescoço passa a ser a via aérea."
},
{
  "id": "yao-hard-052",
  "fonte": "Yao",
  "capitulo": "Via aérea difícil",
  "tema": "Tumor obstrutivo",
  "area": "Via aérea",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com tumor supraglótico, estridor em repouso, piora em decúbito dorsal e abertura oral limitada precisa de biópsia. Qual plano tem maior margem de segurança?",
  "alternativas": {
    "A": "Indução rápida com rocurônio antes de confirmar ventilação.",
    "B": "Manter ventilação espontânea, considerar intubação acordada/técnica endoscópica e ter equipe cirúrgica pronta para via aérea invasiva.",
    "C": "Sedação profunda na sala de preparo para reduzir ansiedade.",
    "D": "Máscara laríngea como plano único definitivo.",
    "E": "Evitar oxigênio para não ressecar mucosa."
  },
  "resposta": "B",
  "comentario": "Obstrução crítica pode colapsar após perda de tônus. A estratégia deve preservar ventilação espontânea até garantir via aérea, com plano cirúrgico imediato. Sedação profunda sem controle pode ser desastrosa.",
  "frase_ouro": "Tumor que estridula acordado pode fechar calado depois da indução."
},
{
  "id": "yao-hard-053",
  "fonte": "Yao",
  "capitulo": "Via aérea obstétrica",
  "tema": "Falha de intubação na cesárea",
  "area": "Via aérea",
  "dificuldade": "muito difícil",
  "pergunta": "Gestante em cesárea categoria 1 sob anestesia geral: falha de intubação, ventilação com máscara possível, SpO2 97%, cirurgia ainda não iniciou. Qual decisão é mais apropriada?",
  "alternativas": {
    "A": "Fazer tentativas repetidas de intubação até sucesso, sem considerar acordar.",
    "B": "Prosseguir obrigatoriamente com máscara facial durante toda cesárea.",
    "C": "Seguir algoritmo de falha de intubação obstétrica: manter oxigenação, chamar ajuda, considerar dispositivo supraglótico e decidir acordar versus prosseguir conforme urgência materno-fetal e ventilação.",
    "D": "Retirar oxigênio para avaliar drive respiratório.",
    "E": "Administrar diurético para reduzir edema de via aérea."
  },
  "resposta": "C",
  "comentario": "Falha de intubação obstétrica exige priorizar oxigenação. Se ventilação é possível, há tempo para decisão estruturada. A urgência fetal pesa, mas segurança materna é central. Dispositivo supraglótico pode permitir prosseguir se apropriado; acordar pode ser mais seguro em alguns cenários.",
  "frase_ouro": "Na falha de intubação obstétrica, mãe oxigenada é o primeiro tratamento fetal."
},
{
  "id": "yao-hard-054",
  "fonte": "Yao",
  "capitulo": "Extubação",
  "tema": "Extubação de risco",
  "area": "Via aérea",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente pós-cirurgia cervical anterior extensa, intubação inicial difícil, edema de língua e sangramento de loja cirúrgica. Qual estratégia de extubação é mais segura?",
  "alternativas": {
    "A": "Extubar profundamente para evitar tosse, sem material de reintubação.",
    "B": "Extubar imediatamente porque a cirurgia acabou.",
    "C": "Trocar o tubo por máscara laríngea e mandar para enfermaria.",
    "D": "Considerar manter intubado ou extubar com estratégia de via aérea difícil, equipe pronta, avaliação de vazamento/edema e possibilidade de guia de troca.",
    "E": "Dar naloxona para reduzir edema."
  },
  "resposta": "D",
  "comentario": "Extubação é etapa crítica da via aérea difícil. Edema cervical, sangramento e reintubação difícil favorecem extubação planejada ou adiada. Guia de troca pode manter acesso temporário. Local, equipe e material são parte da técnica.",
  "frase_ouro": "Via aérea difícil não termina quando o tubo entra; termina quando o paciente respira sem ele."
},
{
  "id": "yao-hard-055",
  "fonte": "Yao",
  "capitulo": "Aspiração",
  "tema": "Indução em estômago cheio",
  "area": "Via aérea",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com abdome agudo obstrutivo regurgita grande volume durante indução. Após intubação, SpO2 cai para 88%, há secreção fecaloide na orofaringe e crepitações. Qual conduta é mais adequada?",
  "alternativas": {
    "A": "Extubar imediatamente para permitir tosse.",
    "B": "Ignorar se a pressão arterial estiver normal.",
    "C": "Administrar antiemético e prosseguir sem aspiração traqueal ou suporte.",
    "D": "Reduzir FiO2 para evitar toxicidade pulmonar.",
    "E": "Aspirar via aérea/orofaringe, garantir oxigenação e ventilação, ajustar PEEP conforme necessidade, avaliar broncoscopia se obstrução importante e seguir suporte clínico."
  },
  "resposta": "E",
  "comentario": "Aspiração é evento respiratório potencialmente grave. A prioridade é remover material acessível, proteger via aérea, oxigenar e ventilar. Antibiótico e broncoscopia dependem do contexto, tipo de material e evolução clínica.",
  "frase_ouro": "Na aspiração, primeiro tire o que atrapalha a ventilação; depois discuta a pneumonite."
},
{
  "id": "yao-hard-056",
  "fonte": "Manica / SBA",
  "capitulo": "Sociedade Brasileira de Anestesiologia",
  "tema": "Estrutura associativa",
  "area": "SBA / Organização",
  "dificuldade": "muito difícil",
  "pergunta": "Sobre a natureza institucional da SBA, qual alternativa descreve melhor sua estrutura e finalidade?",
  "alternativas": {
    "A": "É uma sociedade civil sem fins econômicos, organizada como federação de regionais, voltada ao desenvolvimento científico, educação, normas de treinamento, qualidade e segurança da anestesiologia.",
    "B": "É uma empresa com distribuição de lucro aos dirigentes e atuação limitada à organização de eventos comerciais.",
    "C": "É um órgão governamental federal responsável por registrar médicos e fiscalizar diretamente todos os hospitais.",
    "D": "É uma cooperativa de remuneração médica, sem papel educacional ou científico.",
    "E": "É uma sociedade restrita ao Rio de Janeiro, sem representação regional."
  },
  "resposta": "A",
  "comentario": "A SBA é descrita como associação civil sem fins econômicos e com estrutura federativa por regionais. Seus objetivos incluem desenvolvimento científico, educação, pesquisa, apoio técnico, formação de especialistas e promoção da segurança/qualidade em anestesiologia. A questão exige distinguir sociedade científica de órgão fiscalizador estatal ou entidade comercial.",
  "frase_ouro": "A SBA não é apenas uma entidade de eventos: sua lógica institucional é educação, representação científica, formação e segurança do paciente anestesiado."
},
{
  "id": "yao-hard-057",
  "fonte": "Manica / SBA",
  "capitulo": "Sociedade Brasileira de Anestesiologia",
  "tema": "Categorias de membros",
  "area": "SBA / Organização",
  "dificuldade": "muito difícil",
  "pergunta": "Um médico em especialização em anestesiologia em CET reconhecido pela SBA, ainda sem TEA, enquadra-se melhor em qual categoria associativa clássica descrita pela SBA?",
  "alternativas": {
    "A": "Membro ativo.",
    "B": "Membro aspirante.",
    "C": "Membro remido.",
    "D": "Membro honorário.",
    "E": "Membro benemérito."
  },
  "resposta": "B",
  "comentario": "A categoria de aspirantes corresponde aos médicos em especialização nos Centros de Ensino e Treinamento reconhecidos pela SBA. Membro ativo é associado portador do TEA. Remido relaciona-se à idade e tempo/categoria prévia; honorário e benemérito dependem de reconhecimento por notoriedade ou serviços prestados.",
  "frase_ouro": "No vocabulário associativo da SBA, o residente do CET é aspirante; o portador do TEA é ativo."
},
{
  "id": "yao-hard-058",
  "fonte": "Manica / SBA",
  "capitulo": "Sociedade Brasileira de Anestesiologia",
  "tema": "Assembleia geral e representantes",
  "area": "SBA / Organização",
  "dificuldade": "muito difícil",
  "pergunta": "Em relação aos órgãos deliberativos da SBA, qual alternativa é mais adequada?",
  "alternativas": {
    "A": "A Assembleia Geral é reunião exclusiva de membros honorários estrangeiros.",
    "B": "A Assembleia de Representantes não delibera assuntos importantes e tem função apenas social.",
    "C": "A Assembleia Geral reúne membros ativos quites, pode deliberar temas estatutários e eleitorais; a Assembleia de Representantes é composta por representantes das regionais, diretoria e conselho superior, com papel deliberativo relevante.",
    "D": "O Conselho Fiscal substitui a Assembleia Geral em todas as decisões eleitorais.",
    "E": "A Diretoria não executa resoluções assembleares."
  },
  "resposta": "C",
  "comentario": "A Assembleia Geral e a Assembleia de Representantes têm papéis institucionais diferentes. A AG envolve membros ativos quites e delibera temas amplos, incluindo eleições e estatuto. A AR é descrita como fórum tradicional e importante, com representantes das regionais, conselho superior e diretoria.",
  "frase_ouro": "Na SBA, representação regional e assembleia de membros ativos são mecanismos distintos de vida democrática institucional."
},
{
  "id": "yao-hard-059",
  "fonte": "Manica / SBA",
  "capitulo": "Sociedade Brasileira de Anestesiologia",
  "tema": "Conselhos e diretoria",
  "area": "SBA / Organização",
  "dificuldade": "muito difícil",
  "pergunta": "Qual alternativa diferencia corretamente Conselho Superior, Conselho Fiscal e Diretoria da SBA?",
  "alternativas": {
    "A": "O Conselho Superior é exclusivamente financeiro; o Conselho Fiscal define programa científico; a Diretoria apenas homologa decisões externas.",
    "B": "O Conselho Fiscal é composto por todos os ex-presidentes e preside a Assembleia de Representantes.",
    "C": "A Diretoria não precisa cumprir estatuto nem executar resoluções assembleares.",
    "D": "O Conselho Superior tem caráter consultivo e avalia contas/relatórios; o Conselho Fiscal fiscaliza a administração financeira; a Diretoria executa resoluções e conduz a gestão conforme estatuto.",
    "E": "Todos esses órgãos têm exatamente a mesma função, mudando apenas o nome."
  },
  "resposta": "D",
  "comentario": "O Conselho Superior é consultivo e participa da avaliação de contas/relatório do Conselho Fiscal. O Conselho Fiscal verifica a administração financeira. A Diretoria executa resoluções das assembleias, cumpre estatuto e conduz a administração. A questão explora funções que parecem parecidas, mas são institucionalmente distintas.",
  "frase_ouro": "Boa governança associativa separa consulta, fiscalização financeira e execução administrativa."
},
{
  "id": "yao-hard-060",
  "fonte": "Manica / SBA",
  "capitulo": "Sociedade Brasileira de Anestesiologia",
  "tema": "Educação e títulos",
  "area": "SBA / Organização",
  "dificuldade": "muito difícil",
  "pergunta": "Sobre a atuação educacional e certificadora da SBA, qual alternativa é mais completa?",
  "alternativas": {
    "A": "A SBA atua apenas em defesa profissional, sem participação em formação, títulos ou publicações.",
    "B": "A SBA confere títulos e certificações ligados à especialidade, mantém atividade científica e educacional, publica periódicos e participa da formação por meio de CETs e programas educacionais.",
    "C": "A SBA substitui o CFM em todas as funções legais de registro profissional.",
    "D": "O TEA e o TSA são títulos sem relação com a trajetória educacional da sociedade.",
    "E": "O CBA não tem relação institucional com a SBA."
  },
  "resposta": "B",
  "comentario": "A SBA tem forte eixo educacional: formação em CETs, educação continuada, eventos científicos, publicações e títulos como TEA e TSA. Isso não significa substituir órgãos legais como CFM ou CNRM, mas atuar como sociedade científica e formadora da especialidade.",
  "frase_ouro": "A força da SBA está em unir sociedade científica, formação, certificação, produção educacional e cultura de segurança."
},
{
  "id": "yao-hard-061",
  "fonte": "Yao",
  "capitulo": "Obesidade e cirurgia bariátrica",
  "tema": "Indução e ventilação",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com IMC 52 kg/m², apneia obstrutiva do sono grave, refluxo e circunferência cervical aumentada será submetido a bypass gástrico. Após deitar em decúbito dorsal, dessatura para 92% mesmo acordado. Qual plano de indução é mais adequado?",
  "alternativas": {
    "A": "Posicionamento em rampa, pré-oxigenação otimizada, plano de via aérea difícil, considerar sequência rápida conforme risco de aspiração e ventilação protetora após intubação.",
    "B": "Indução em decúbito horizontal, pois a rampa piora visualização glótica em obesos.",
    "C": "Evitar PEEP durante pré-oxigenação e ventilação, pois sempre reduz oxigenação no obeso.",
    "D": "Sedação profunda sem controle da via aérea, pois apneia do sono protege contra aspiração.",
    "E": "Usar opioide em alta dose antes da pré-oxigenação para reduzir consumo de oxigênio."
  },
  "resposta": "A",
  "comentario": "Na obesidade mórbida, há redução de capacidade residual funcional, maior consumo de oxigênio, risco de via aérea difícil e aspiração. A posição em rampa melhora alinhamento dos eixos e prolonga tempo seguro de apneia. PEEP e pré-oxigenação bem feitas aumentam reserva; a sequência rápida deve ser individualizada.",
  "frase_ouro": "Na obesidade, a indução começa antes da droga: começa na posição, no oxigênio e no plano de resgate."
},
{
  "id": "yao-hard-062",
  "fonte": "Yao",
  "capitulo": "Cirurgia robótica",
  "tema": "Trendelenburg extremo",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Durante prostatectomia robótica em Trendelenburg acentuado com pneumoperitônio prolongado, paciente passa a apresentar pressão de pico e platô elevadas, edema facial importante e EtCO2 ascendente. O robô está acoplado. Qual estratégia preventiva/terapêutica é mais adequada?",
  "alternativas": {
    "A": "Aumentar volume corrente sem limite para normalizar EtCO2, independentemente da pressão de platô.",
    "B": "Antecipar acesso limitado ao paciente, proteger olhos/face, ajustar ventilação para complacência reduzida, monitorar CO2 e planejar extubação considerando edema de via aérea.",
    "C": "Manter Trendelenburg indefinidamente, pois a posição reduz pressão venosa cefálica.",
    "D": "Evitar comunicação com a equipe cirúrgica sobre necessidade de pausa/desacoplamento.",
    "E": "Extubar obrigatoriamente ao fim, mesmo com ausência de vazamento e edema importante."
  },
  "resposta": "B",
  "comentario": "Trendelenburg extremo e pneumoperitônio reduzem complacência pulmonar, aumentam pressão venosa cefálica, favorecem edema facial/ocular/de via aérea e aumentam absorção de CO2. Como o acesso ao paciente fica limitado após acoplar o robô, prevenção e comunicação são fundamentais.",
  "frase_ouro": "Na cirurgia robótica, depois que o robô acopla, o improviso fica caro; prevenção é parte da anestesia."
},
{
  "id": "yao-hard-063",
  "fonte": "Yao",
  "capitulo": "Apneia obstrutiva do sono",
  "tema": "Pós-operatório e opioides",
  "area": "Respiratório / Torácica",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com AOS grave usa CPAP domiciliar e faz septoplastia sob anestesia geral. Na recuperação, recebe opioide por dor, fica sonolento, dessatura em sono e melhora quando acordado. Qual conduta é mais apropriada?",
  "alternativas": {
    "A": "Alta imediata, pois dessaturação apenas durante sono não tem relevância.",
    "B": "Administrar mais opioide para reduzir despertares e melhorar padrão respiratório.",
    "C": "Considerar monitorização prolongada, analgesia multimodal poupadora de opioide, posicionamento adequado e retomada de CPAP se indicado e seguro.",
    "D": "Suspender oxigênio e CPAP para avaliar dessaturação basal.",
    "E": "Usar benzodiazepínico para reduzir ansiedade respiratória."
  },
  "resposta": "C",
  "comentario": "AOS aumenta risco de obstrução e depressão respiratória, especialmente com opioides e sedativos. O paciente que dessatura dormindo demonstra vulnerabilidade pós-operatória. A conduta deve reduzir opioide, monitorar, posicionar, considerar CPAP e só dar alta com segurança.",
  "frase_ouro": "Na AOS, a extubação não encerra o risco; o sono pós-operatório com opioide é outro teste de via aérea."
},
{
  "id": "yao-hard-064",
  "fonte": "Yao",
  "capitulo": "Geriatria",
  "tema": "Delirium pós-operatório",
  "area": "Geriatria",
  "dificuldade": "muito difícil",
  "pergunta": "Idoso frágil de 87 anos, com déficit auditivo, DRC e uso crônico de benzodiazepínico, faz colectomia. No pós-operatório, apresenta agitação flutuante, inversão sono-vigília e desatenção. Qual estratégia é mais adequada?",
  "alternativas": {
    "A": "Tratar como delirium provável, buscar causas reversíveis, otimizar dor/sono/orientação, corrigir hipóxia/metabólico/infecção e evitar contenção/sedação desnecessária.",
    "B": "Considerar quadro psiquiátrico primário e ignorar causas clínicas.",
    "C": "Administrar benzodiazepínico em altas doses como primeira linha universal.",
    "D": "Suspender óculos/aparelho auditivo para reduzir estímulos.",
    "E": "Manter privação de sono para reduzir agitação noturna."
  },
  "resposta": "A",
  "comentario": "Delirium é síndrome de início agudo e curso flutuante, comum no idoso frágil. Dor, hipóxia, infecção, distúrbios metabólicos, retenção urinária, privação sensorial e fármacos podem precipitar. Benzodiazepínicos podem piorar, exceto em situações específicas como abstinência.",
  "frase_ouro": "Delirium no idoso quase nunca é ‘agitação simples’; é o cérebro denunciando soma de agressões."
},
{
  "id": "yao-hard-065",
  "fonte": "Yao",
  "capitulo": "Anestesia fora do centro cirúrgico",
  "tema": "Ressonância magnética",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Criança pequena precisa de anestesia geral para RM. A sala fica distante do centro cirúrgico, o acesso à cabeça será limitado e há necessidade de ventilador. Qual plano de segurança é mais adequado?",
  "alternativas": {
    "A": "Usar qualquer bomba e cilindro disponíveis, pois equipamentos comuns são seguros na sala de RM se estiverem longe do paciente.",
    "B": "Dispensar capnografia porque o exame é diagnóstico e curto.",
    "C": "Entrar na sala com objetos ferromagnéticos apenas se estiverem no bolso do anestesista.",
    "D": "Garantir equipamentos compatíveis com RM, monitorização adequada, linhas longas, plano de acesso à via aérea e contingência para emergência fora da sala.",
    "E": "Evitar checagem prévia para não atrasar o exame."
  },
  "resposta": "D",
  "comentario": "RM impõe riscos específicos: campo magnético, acesso restrito, distância física, ruído, necessidade de equipamentos compatíveis e dificuldade de intervenção rápida. O padrão de segurança anestésica deve ser mantido, com planejamento antes de entrar na sala.",
  "frase_ouro": "Na RM, o ímã é um membro invisível da equipe: se você esquecer dele, ele assume o caso."
},
{
  "id": "yao-hard-066",
  "fonte": "Yao",
  "capitulo": "Endoscopia",
  "tema": "Sedação profunda e aspiração",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente obeso, diabético com gastroparesia, será submetido a endoscopia alta terapêutica prolongada. Durante sedação profunda, apresenta regurgitação e dessaturação. Qual planejamento poderia ter reduzido esse risco?",
  "alternativas": {
    "A": "Reconhecer alto risco de aspiração e procedimento prolongado, considerando proteção da via aérea com intubação, jejum adequado, sucção e plano de resgate.",
    "B": "Aumentar sedação para abolir reflexos protetores, pois isso reduz aspiração.",
    "C": "Evitar capnografia e oxigênio para detectar hipoventilação mais cedo.",
    "D": "Assumir que todo diabético tem esvaziamento gástrico normal se respeitou jejum formal.",
    "E": "Realizar sedação em posição supina obrigatória, sem aspiração disponível."
  },
  "resposta": "A",
  "comentario": "Sedação profunda para endoscopia alta compartilha a via aérea com o endoscopista. Obesidade, gastroparesia, procedimento terapêutico prolongado e refluxo aumentam risco de aspiração. Em alguns casos, anestesia geral com tubo é mais segura que sedação profunda sem proteção.",
  "frase_ouro": "Sedação profunda não é anestesia menor quando o endoscópio ocupa a mesma via aérea que você precisará salvar."
},
{
  "id": "yao-hard-067",
  "fonte": "Yao",
  "capitulo": "Oftalmologia",
  "tema": "Globo aberto",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com trauma ocular penetrante e estômago cheio precisa de reparo de globo aberto. Qual objetivo anestésico é mais adequado?",
  "alternativas": {
    "A": "Permitir tosse na laringoscopia para confirmar reflexos protetores.",
    "B": "Evitar aumento de pressão intraocular e aspiração, com indução suave, proteção de via aérea e controle de náusea/vômito e resposta hemodinâmica.",
    "C": "Usar vômito provocado para esvaziar o estômago antes da indução.",
    "D": "Manter plano superficial para evitar hipotensão, mesmo com tosse intensa.",
    "E": "Evitar antieméticos porque mascaram ruptura ocular."
  },
  "resposta": "B",
  "comentario": "Globo aberto exige evitar aumento de pressão intraocular por tosse, vômito, hipertensão e pressão venosa. Ao mesmo tempo, estômago cheio exige proteção de via aérea. A escolha de drogas deve balancear risco ocular, aspiração e hemodinâmica.",
  "frase_ouro": "No globo aberto, cada tosse é pressão dentro do olho; cada regurgitação é ameaça ao pulmão."
},
{
  "id": "yao-hard-068",
  "fonte": "Yao",
  "capitulo": "Oftalmologia",
  "tema": "Reflexo óculo-cardíaco",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Durante correção de estrabismo em criança, a tração do músculo reto medial reduz FC de 105 para 38 bpm, com PA caindo. Após parar a tração, a FC melhora parcialmente. Qual conduta é mais adequada?",
  "alternativas": {
    "A": "Pedir para o cirurgião aumentar a tração para dessensibilizar o reflexo.",
    "B": "Ignorar, pois reflexo óculo-cardíaco nunca causa instabilidade.",
    "C": "Interromper estímulo, garantir oxigenação/profundidade anestésica e usar anticolinérgico se bradicardia persistente ou grave.",
    "D": "Administrar nitroprussiato para tratar bradicardia vagal.",
    "E": "Reduzir FiO2 para estimular resposta simpática."
  },
  "resposta": "C",
  "comentario": "O reflexo óculo-cardíaco envolve aferência trigeminal e eferência vagal. A primeira medida é interromper tração e corrigir hipóxia/anestesia superficial. Se bradicardia for importante ou recorrente, atropina/glicopirrolato podem ser usados.",
  "frase_ouro": "No olho, o trigêmeo puxa e o vago responde; soltar o músculo pode ser mais rápido que qualquer ampola."
},
{
  "id": "yao-hard-069",
  "fonte": "Yao",
  "capitulo": "Cirurgia de via aérea",
  "tema": "Incêndio de via aérea",
  "area": "Via aérea",
  "dificuldade": "muito difícil",
  "pergunta": "Durante ressecção laríngea com laser, ocorre chama no tubo traqueal. Qual sequência é mais correta?",
  "alternativas": {
    "A": "Aumentar FiO2 para apagar fogo por diluição.",
    "B": "Manter ventilação para resfriar o tubo.",
    "C": "Administrar broncodilatador e aguardar.",
    "D": "Parar gases e laser, remover tubo em chamas, apagar fogo com solução adequada, reestabelecer ventilação segura e broncoscopar para avaliar lesão.",
    "E": "Insuflar mais o cuff para isolar a chama."
  },
  "resposta": "D",
  "comentario": "Incêndio de via aérea exige interrupção imediata do oxidante e da fonte de ignição, retirada do material queimando e reestabelecimento seguro da ventilação. Após o controle, deve-se avaliar lesão térmica e fragmentos por broncoscopia.",
  "frase_ouro": "Fogo em via aérea tem três inimigos imediatos: oxidante, combustível e atraso."
},
{
  "id": "yao-hard-070",
  "fonte": "Yao",
  "capitulo": "Otorrinolaringologia",
  "tema": "Sangramento pós-amigdalectomia",
  "area": "Via aérea",
  "dificuldade": "muito difícil",
  "pergunta": "Criança retorna ao centro cirúrgico 8 horas após amigdalectomia, pálida, taquicárdica, com hematêmese e coágulos em orofaringe. PA ainda preservada. Qual plano é mais adequado?",
  "alternativas": {
    "A": "Indução inalatória lenta sem acesso venoso, pois criança com PA normal não perdeu sangue.",
    "B": "Tratar como hipovolemia potencial e estômago cheio de sangue, preparar sucção eficiente, acesso, reposição e intubação planejada por equipe experiente.",
    "C": "Evitar aspirador para não estimular laringoespasmo.",
    "D": "Usar máscara laríngea como via aérea definitiva, pois protege contra sangue.",
    "E": "Dar alta após antiemético se não houver sangramento ativo no momento."
  },
  "resposta": "B",
  "comentario": "Sangramento pós-amigdalectomia é via aérea difícil por sangue/coágulos e risco de hipovolemia subestimada. Crianças mantêm PA até fases tardias. O estômago contém sangue, aumentando risco de aspiração. Sucção, acesso e plano de intubação são essenciais.",
  "frase_ouro": "No sangramento pós-amigdalectomia, o problema está na via aérea, no estômago e na volemia ao mesmo tempo."
},
{
  "id": "yao-hard-071",
  "fonte": "Yao",
  "capitulo": "Urologia",
  "tema": "Síndrome pós-RTU",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Durante RTU de próstata sob raquianestesia, após 90 minutos, paciente apresenta inquietação, náuseas, visão turva, hipertensão seguida de bradicardia e sódio 118 mEq/L. Qual diagnóstico e conduta são mais adequados?",
  "alternativas": {
    "A": "Síndrome pós-RTU por absorção de irrigação hipotônica; interromper procedimento, suporte, dosar eletrólitos e tratar hiponatremia sintomática cuidadosamente.",
    "B": "Bloqueio motor esperado da raquianestesia; prosseguir sem exames.",
    "C": "Hipertermia maligna desencadeada pela raquianestesia.",
    "D": "Hipernatremia aguda por desidratação.",
    "E": "Reflexo óculo-cardíaco urológico."
  },
  "resposta": "A",
  "comentario": "Absorção de solução hipotônica durante RTU pode causar hiponatremia dilucional e sintomas neurológicos/cardiovasculares. Raquianestesia pode permitir diagnóstico precoce por sintomas do paciente acordado. Tratamento depende da gravidade e deve evitar correção rápida excessiva.",
  "frase_ouro": "Na RTU prolongada, irrigação que desaparece do campo pode reaparecer como sódio perigosamente baixo."
},
{
  "id": "yao-hard-072",
  "fonte": "Yao",
  "capitulo": "Laparoscopia",
  "tema": "Embolia gasosa",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "No início da laparoscopia, durante insuflação, ocorre queda abrupta de EtCO2, hipotensão severa, dessaturação e sopro em roda de moinho suspeito. Qual é a conduta inicial?",
  "alternativas": {
    "A": "Aumentar pressão de insuflação para tamponar vasos.",
    "B": "Administrar diurético para reduzir PVC.",
    "C": "Suspender insuflação/desinsuflar, O2 100%, suporte hemodinâmico, posicionamento adequado e aspirar gás por CVC se disponível.",
    "D": "Reduzir FiO2 para diminuir volume das bolhas.",
    "E": "Prosseguir porque CO2 é altamente solúvel e nunca causa colapso."
  },
  "resposta": "C",
  "comentario": "Embolia gasosa venosa durante laparoscopia reduz fluxo pulmonar e débito, causando queda de EtCO2 e instabilidade. A prioridade é interromper a entrada de gás, oxigenar, sustentar circulação e considerar aspiração se cateter estiver posicionado.",
  "frase_ouro": "EtCO2 que despenca na insuflação é gás roubando o caminho do sangue no pulmão."
},
{
  "id": "yao-hard-073",
  "fonte": "Yao",
  "capitulo": "Laparoscopia",
  "tema": "Capnotórax",
  "area": "Respiratório / Torácica",
  "dificuldade": "muito difícil",
  "pergunta": "Durante fundoplicatura laparoscópica, paciente apresenta aumento súbito de pressão de via aérea, hipoxemia, hipercapnia e redução de murmúrio à esquerda. Hemodinâmica estável. Qual raciocínio é mais adequado?",
  "alternativas": {
    "A": "Capnotórax/pneumotórax por CO2 deve ser considerado; reduzir pressão de insuflação, comunicar cirurgião, ajustar ventilação e drenar se houver instabilidade ou persistência importante.",
    "B": "Hipoglicemia explica todos os achados.",
    "C": "Ausculta unilateral sempre significa intubação esofágica.",
    "D": "A melhor conduta é aumentar pressão de insuflação.",
    "E": "CO2 no tórax nunca altera ventilação."
  },
  "resposta": "A",
  "comentario": "CO2 pode passar para o tórax durante laparoscopia alta. Como é mais solúvel que ar, alguns capnotórax estáveis podem melhorar com redução da insuflação e suporte ventilatório; instabilidade exige descompressão.",
  "frase_ouro": "Na laparoscopia alta, o CO2 pode trocar abdome por tórax; a clínica decide se observa, reduz pressão ou drena."
},
{
  "id": "yao-hard-074",
  "fonte": "Yao",
  "capitulo": "Ortopedia",
  "tema": "Síndrome de implantação do cimento",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Idoso com fratura de quadril e hipertensão pulmonar leve apresenta hipoxemia, hipotensão e aumento de pressão pulmonar logo após cimentação femoral. ETE mostra VD dilatado. Qual manejo é mais coerente?",
  "alternativas": {
    "A": "Tratar como evento embolígeno com aumento de RVP/falência de VD: O2, suporte pressórico, otimizar VD, comunicar cirurgião e evitar piorar RVP.",
    "B": "Administrar nitroprussiato em bolus para reduzir pressão sistêmica.",
    "C": "Reduzir FiO2 porque oxigênio aumenta embolização.",
    "D": "Ignorar se o cimento já foi implantado.",
    "E": "Usar beta-bloqueador como primeira linha em todo caso."
  },
  "resposta": "A",
  "comentario": "A síndrome do cimento pode envolver embolização medular/gordurosa, liberação de mediadores, hipóxia, hipotensão e aumento de RVP. Pacientes com reserva cardiopulmonar baixa e hipertensão pulmonar são vulneráveis à falência de VD.",
  "frase_ouro": "Cimento no fêmur pode virar pós-carga no ventrículo direito."
},
{
  "id": "yao-hard-075",
  "fonte": "Yao",
  "capitulo": "Ortopedia",
  "tema": "Torniquete",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Após 2 horas de torniquete em membro inferior, ocorre liberação. Minutos depois, há queda transitória de PA, aumento de EtCO2 e acidose metabólica discreta. Qual mecanismo explica melhor?",
  "alternativas": {
    "A": "Liberação de metabólitos, CO2, lactato e potássio do membro isquêmico para a circulação sistêmica.",
    "B": "Anafilaxia obrigatória ao ar do torniquete.",
    "C": "Hipertermia maligna sempre causada por desinsuflação.",
    "D": "Síndrome pós-RTU ortopédica.",
    "E": "A desinsuflação elimina completamente dor e resposta metabólica."
  },
  "resposta": "A",
  "comentario": "O torniquete cria um compartimento isquêmico. Na liberação, metabólitos ácidos, CO2 e potássio entram na circulação, podendo causar alterações hemodinâmicas e ácido-base. O efeito depende do tempo, massa muscular e reserva do paciente.",
  "frase_ouro": "Torniquete guarda metabolismo no membro; quando solta, ele apresenta a conta ao corpo inteiro."
},
{
  "id": "yao-hard-076",
  "fonte": "Yao",
  "capitulo": "Queimaduras",
  "tema": "Via aérea e succinilcolina",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com queimadura extensa há 12 dias precisa de desbridamento. Tem cicatrizes cervicais, abertura oral limitada e potássio 4,8 mEq/L. Qual plano é mais adequado?",
  "alternativas": {
    "A": "Succinilcolina é ideal após a primeira semana de queimadura porque reduz potássio.",
    "B": "A via aérea não merece atenção se saturação estiver normal.",
    "C": "Evitar succinilcolina pelo risco de hipercalemia por receptores extrajuncionais e planejar via aérea difícil por cicatriz/contratura.",
    "D": "Usar máscara laríngea como única via aérea em todo queimado cervical.",
    "E": "Induzir profundamente sem material de via aérea difícil."
  },
  "resposta": "C",
  "comentario": "Após queimaduras extensas, há upregulation de receptores acetilcolínicos extrajuncionais, aumentando risco de hipercalemia com succinilcolina. Queimaduras de face/pescoço e contraturas tornam via aérea difícil. O plano deve integrar droga e anatomia.",
  "frase_ouro": "Queimadura tardia muda o músculo e muda a via aérea; succinilcolina e otimismo viram perigos."
},
{
  "id": "yao-hard-077",
  "fonte": "Yao",
  "capitulo": "Hipertermia maligna",
  "tema": "Preparação da máquina",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com história familiar forte de hipertermia maligna fará cirurgia eletiva. Qual preparo anestésico é mais apropriado?",
  "alternativas": {
    "A": "Usar sevoflurano em baixa dose, pois apenas doses altas desencadeiam crise.",
    "B": "Evitar agentes gatilho, preparar máquina livre de voláteis conforme protocolo, garantir dantrolene disponível e usar técnica não desencadeante.",
    "C": "Usar succinilcolina apenas se a intubação for difícil.",
    "D": "Não avisar equipe para evitar ansiedade.",
    "E": "Dantrolene só precisa estar disponível após confirmação genética."
  },
  "resposta": "B",
  "comentario": "Pacientes suscetíveis devem evitar voláteis halogenados e succinilcolina. A máquina precisa ser preparada para reduzir contaminação por voláteis, e dantrolene deve estar disponível. A ausência de teste genético não elimina risco se a história é sugestiva.",
  "frase_ouro": "Em hipertermia maligna, prevenção é anestesia sem gatilho e sala pronta para tratar o improvável."
},
{
  "id": "yao-hard-078",
  "fonte": "Yao",
  "capitulo": "Anafilaxia perioperatória",
  "tema": "Investigação posterior",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Após anafilaxia grave intraoperatória suspeita por bloqueador neuromuscular, o paciente estabiliza. Qual medida ajuda na confirmação posterior e prevenção futura?",
  "alternativas": {
    "A": "Não registrar nada, pois a droga suspeita será lembrada pelo paciente.",
    "B": "Colher triptase em janela adequada, documentar todos os agentes administrados e encaminhar para investigação alergológica posterior.",
    "C": "Informar apenas que o paciente teve broncoespasmo, sem hipótese de anafilaxia.",
    "D": "Liberar uso futuro de todos os bloqueadores sem teste.",
    "E": "Administrar anti-histamínico por 24 horas e considerar investigação encerrada."
  },
  "resposta": "B",
  "comentario": "A investigação de anafilaxia perioperatória depende de documentação precisa de exposições, sequência temporal, tratamento e coleta de triptase quando possível. Testes posteriores ajudam a identificar agente e alternativas seguras.",
  "frase_ouro": "Anafilaxia tratada sem documentação vira risco repetido no próximo anestésico."
},
{
  "id": "yao-hard-079",
  "fonte": "Yao",
  "capitulo": "Dor crônica",
  "tema": "Tolerância e hiperalgesia",
  "area": "Regional / Dor",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente usa altas doses de opioide crônico por dor lombar e fará artrodese. No pós-operatório, relata dor intensa apesar de doses elevadas, com alodinia difusa. Qual plano é mais coerente?",
  "alternativas": {
    "A": "Suspender abruptamente todos os opioides para restaurar sensibilidade.",
    "B": "Usar apenas opioide em escalada ilimitada, pois toda dor em usuário crônico é subdose.",
    "C": "Planejar analgesia multimodal, manter equivalente basal para evitar abstinência, considerar cetamina/regional quando possível e reconhecer tolerância/hiperalgesia.",
    "D": "Evitar comunicação pré-operatória sobre expectativas de dor.",
    "E": "Usar benzodiazepínico como analgésico principal."
  },
  "resposta": "C",
  "comentario": "Usuários crônicos têm tolerância, risco de abstinência e possível hiperalgesia induzida por opioide. O plano deve ser multimodal, com adjuvantes, técnicas regionais quando viáveis, manutenção de basal e metas realistas.",
  "frase_ouro": "No usuário crônico de opioide, mais opioide pode tratar abstinência, tolerância ou piorar hiperalgesia; o plano precisa de mais de uma ferramenta."
},
{
  "id": "yao-hard-080",
  "fonte": "Yao",
  "capitulo": "Analgesia regional",
  "tema": "Peridural torácica",
  "area": "Regional / Dor",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com DPOC moderado fará laparotomia alta. Peridural torácica é planejada para analgesia. No pós-operatório, PA cai após bolus peridural, mas dor melhora e ventilação fica mais eficaz. Qual interpretação é correta?",
  "alternativas": {
    "A": "Peridural torácica nunca causa hipotensão porque bloqueia apenas fibras sensitivas.",
    "B": "A hipotensão prova que o cateter está intratecal em todos os casos.",
    "C": "A analgesia peridural pode melhorar mecânica respiratória ao permitir tosse e respiração profunda, mas bloqueio simpático pode causar vasodilatação e exigir titulação/vasopressor/volume criterioso.",
    "D": "Dor intensa é preferível à hipotensão leve em todo paciente com DPOC.",
    "E": "A solução é suspender toda analgesia regional e usar apenas opioide alto."
  },
  "resposta": "C",
  "comentario": "Peridural torácica pode reduzir complicações respiratórias por melhor analgesia, mas o bloqueio simpático pode causar hipotensão. A conduta é titulação, monitorização e suporte hemodinâmico, não abandono automático.",
  "frase_ouro": "Peridural boa abre o tórax pela analgesia, mas pode abrir o vaso pelo simpático."
},
{
  "id": "yao-hard-081",
  "fonte": "Yao",
  "capitulo": "Aneurisma de aorta abdominal",
  "tema": "Clampeamento e desclampeamento",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Durante correção aberta de AAA infrarrenal, após clampeamento aórtico, PA proximal sobe, ST de V5 deprime e pressão de enchimento aumenta. No desclampeamento, PA cai e EtCO2 reduz. Qual explicação é mais correta?",
  "alternativas": {
    "A": "Clampeamento reduz pós-carga e desclampeamento aumenta RVS.",
    "B": "Clamp aumenta pós-carga e demanda miocárdica; desclamp reduz RVS, devolve metabólitos e pode revelar hipovolemia.",
    "C": "As alterações são incompatíveis com fisiologia de aorta.",
    "D": "Desclampeamento nunca causa hipotensão se o paciente recebeu cristaloide.",
    "E": "A queda de EtCO2 no desclamp sempre indica hiperventilação."
  },
  "resposta": "B",
  "comentario": "O clamp aumenta impedância à ejeção e pressão proximal, podendo precipitar isquemia. O desclamp reperfunde território isquêmico, reduz RVS, libera metabólitos e pode diminuir retorno efetivo/pressão se houver hipovolemia ou vasodilatação.",
  "frase_ouro": "No AAA aberto, o clamp pesa no coração; o desclamp tira o chão vascular."
},
{
  "id": "yao-hard-082",
  "fonte": "Yao",
  "capitulo": "Aneurisma toracoabdominal",
  "tema": "Proteção medular",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Durante correção toracoabdominal extensa, MEP de membros inferiores caem. PAM 68 mmHg, pressão liquórica 17 mmHg, Hb 8,0 g/dL, SpO2 96%. Qual conjunto de medidas é mais coerente?",
  "alternativas": {
    "A": "Reduzir PAM para diminuir sangramento e aguardar retorno espontâneo.",
    "B": "Aumentar pressão de perfusão medular elevando PAM, reduzir pressão liquórica se possível, otimizar Hb/oxigenação e comunicar cirurgião para revisar fluxo distal/intercostais.",
    "C": "Administrar bloqueador neuromuscular para melhorar MEP.",
    "D": "Aumentar volátil para elevar amplitude do sinal.",
    "E": "Ignorar se SSEP estiver preservado."
  },
  "resposta": "B",
  "comentario": "Perfusão medular depende da diferença entre pressão arterial e pressão do LCR/venosa. Queda de MEP exige corrigir determinantes de oferta e revisar causas cirúrgicas. Anestésicos e bloqueadores também interferem, mas a prioridade é tratar isquemia potencial.",
  "frase_ouro": "Medula perfunde pelo gradiente: pressão arterial para entrar, líquor baixo para deixar entrar."
},
{
  "id": "yao-hard-083",
  "fonte": "Yao",
  "capitulo": "Endarterectomia de carótida",
  "tema": "Clampeamento carotídeo",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Durante endarterectomia de carótida sob anestesia geral, após clampeamento, EEG fica lento ipsilateralmente. PA está 105/55, Hb 9,5. Qual intervenção é mais coerente?",
  "alternativas": {
    "A": "Reduzir PA para evitar hiperperfusão.",
    "B": "Administrar diurético para reduzir pressão intracraniana.",
    "C": "Aumentar pressão arterial, otimizar oxigenação/hemoglobina e discutir shunt com cirurgião.",
    "D": "Aprofundar anestesia volátil até suprimir EEG completamente.",
    "E": "Ignorar porque alterações de EEG não se relacionam a perfusão."
  },
  "resposta": "C",
  "comentario": "Alteração de EEG após clampeamento sugere hipoperfusão cerebral. Aumentar pressão de perfusão, corrigir oferta de oxigênio e considerar shunt são medidas apropriadas. Após desclampeamento, hipertensão excessiva deve ser evitada por risco de hiperperfusão/hematoma.",
  "frase_ouro": "Clamp carotídeo que muda EEG está pedindo mais fluxo ou uma ponte."
},
{
  "id": "yao-hard-084",
  "fonte": "Yao",
  "capitulo": "Dispositivos de assistência ventricular",
  "tema": "LVAD",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com LVAD de fluxo contínuo será submetido a colecistectomia. PA não invasiva é difícil de obter, pulso periférico é pouco palpável e há risco de sangramento por anticoagulação. Qual princípio anestésico é correto?",
  "alternativas": {
    "A": "LVAD elimina dependência de pré-carga e função do VD.",
    "B": "Hipertensão severa melhora fluxo do dispositivo por reduzir pós-carga.",
    "C": "Monitorar perfusão com métodos adequados, manter pré-carga, evitar aumento excessivo de pós-carga, preservar VD e manejar anticoagulação/risco hemorrágico.",
    "D": "Desligar o LVAD durante indução para evitar interferência.",
    "E": "Assumir que ausência de pulso significa parada cardíaca."
  },
  "resposta": "C",
  "comentario": "LVAD de fluxo contínuo depende de enchimento adequado e pós-carga controlada. O VD precisa entregar sangue ao LVAD. Pressão pode exigir Doppler ou arterial invasiva. Anticoagulação e infecção também são pontos críticos.",
  "frase_ouro": "LVAD ajuda o VE, mas não substitui fisiologia: precisa de volume certo, VD funcionando e pós-carga tolerável."
},
{
  "id": "yao-hard-085",
  "fonte": "Yao",
  "capitulo": "Balão intra-aórtico",
  "tema": "Indicações e contraindicações",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente em choque cardiogênico pós-IAM tem insuficiência aórtica importante e doença arterial periférica grave. A equipe cogita balão intra-aórtico. Qual consideração é mais correta?",
  "alternativas": {
    "A": "Insuficiência aórtica importante é contraindicação relevante, pois insuflação diastólica pode aumentar regurgitação para o VE.",
    "B": "Balão intra-aórtico corrige insuficiência aórtica por aumentar pressão diastólica.",
    "C": "Doença vascular periférica nunca influencia passagem do balão.",
    "D": "O balão aumenta pós-carga sistólica por desinsuflar na diástole.",
    "E": "O balão substitui revascularização em todos os IAM."
  },
  "resposta": "A",
  "comentario": "O IABP infla na diástole para aumentar perfusão coronariana e desinfla antes da sístole para reduzir pós-carga. Em insuficiência aórtica significativa, a insuflação diastólica pode piorar refluxo. Acesso vascular também importa.",
  "frase_ouro": "Balão intra-aórtico ajuda a diástole coronariana, mas na insuficiência aórtica essa diástole pode vazar para o VE."
},
{
  "id": "yao-hard-086",
  "fonte": "Yao",
  "capitulo": "Marca-passos e CDI",
  "tema": "Magneto e EMI",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente dependente de marca-passo com CRT-D fará cirurgia abdominal com cautério monopolar acima do umbigo. Qual plano é mais correto?",
  "alternativas": {
    "A": "Aplicar magneto e assumir que pacing assíncrono está garantido em todo CRT-D.",
    "B": "Não tomar medida alguma, pois cautério abdominal nunca gera EMI.",
    "C": "Suspender terapias antitaquicardia e programar pacing assíncrono se dependente, com desfibrilação externa e monitorização de pulso mecânico disponíveis.",
    "D": "Desligar definitivamente o dispositivo até revisão ambulatorial.",
    "E": "Usar placa de cautério sobre o gerador para encurtar circuito."
  },
  "resposta": "C",
  "comentario": "Em CDI/CRT-D, magneto geralmente suspende terapias de choque, mas pode não alterar modo de pacing. Paciente dependente precisa prevenção de inibição por EMI, idealmente com reprogramação. Pás externas e monitorização efetiva são essenciais.",
  "frase_ouro": "Magneto no desfibrilador costuma calar o choque; não conte com ele para proteger o pacing."
},
{
  "id": "yao-hard-087",
  "fonte": "Yao",
  "capitulo": "TAVI/TAVR",
  "tema": "Complicações agudas",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Durante TAVI transfemoral, logo após liberação da prótese, paciente apresenta hipotensão, alargamento de QRS e bloqueio AV total. ETE não mostra tamponamento. Qual conduta é mais coerente?",
  "alternativas": {
    "A": "Bloqueio AV é irrelevante após TAVI e deve ser observado sem suporte.",
    "B": "Administrar beta-bloqueador para reduzir escape ventricular.",
    "C": "Preparar pacing temporário/definitivo conforme persistência, suporte hemodinâmico e excluir complicações como regurgitação paravalvar importante ou obstrução coronária.",
    "D": "Reduzir pressão arterial para melhorar condução AV.",
    "E": "Suspender monitorização elétrica após liberação."
  },
  "resposta": "C",
  "comentario": "TAVI pode causar distúrbios de condução por proximidade anatômica do sistema His-Purkinje. Bloqueio AV total com hipotensão exige pacing. Outras complicações agudas como tamponamento, regurgitação, obstrução coronária e sangramento vascular devem ser avaliadas.",
  "frase_ouro": "Após TAVI, condução elétrica pode ser a primeira estrutura a reclamar da nova valva."
},
{
  "id": "yao-hard-088",
  "fonte": "Yao",
  "capitulo": "Insuficiência aórtica",
  "tema": "Metas hemodinâmicas",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com insuficiência aórtica crônica grave e VE dilatado apresenta bradicardia de 45 bpm e hipertensão sistólica durante indução. Qual ajuste tende a melhorar regurgitação?",
  "alternativas": {
    "A": "Aumentar ainda mais a pós-carga e prolongar diástole com beta-bloqueador.",
    "B": "Manter bradicardia, pois diástole longa reduz refluxo.",
    "C": "Reduzir pós-carga excessiva e evitar bradicardia, mantendo frequência moderada e contratilidade adequada.",
    "D": "Usar fenilefrina em bolus repetido até hipertensão severa.",
    "E": "Induzir bloqueio AV completo para reduzir consumo."
  },
  "resposta": "C",
  "comentario": "Na IAo, refluxo ocorre na diástole; bradicardia prolonga tempo regurgitante. Pós-carga elevada aumenta volume regurgitante e dificulta fluxo anterógrado. Frequência moderadamente mais alta e menor pós-carga favorecem ejeção para frente.",
  "frase_ouro": "Na insuficiência aórtica, diástole longa é convite para a valva vazar mais."
},
{
  "id": "yao-hard-089",
  "fonte": "Yao",
  "capitulo": "Estenose mitral",
  "tema": "Fibrilação atrial",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Mulher com estenose mitral importante, hipertensão pulmonar e átrio esquerdo dilatado desenvolve FA com FC 150 no intraoperatório. PA cai e pressão pulmonar sobe. Qual raciocínio é correto?",
  "alternativas": {
    "A": "Taquicardia melhora estenose mitral por reduzir tempo de exposição ao gradiente.",
    "B": "Perda de contração atrial e encurtamento diastólico aumentam pressão atrial esquerda e congestão; controle de frequência/ritmo e manutenção de perfusão são prioritários.",
    "C": "Vasodilatação sistêmica profunda é sempre a primeira medida.",
    "D": "A hipertensão pulmonar não influencia risco de VD.",
    "E": "Diurese agressiva em choque é sempre a primeira intervenção."
  },
  "resposta": "B",
  "comentario": "Na estenose mitral, o enchimento do VE depende do tempo diastólico e do gradiente através da valva. FA rápida aumenta pressão atrial esquerda, congestão pulmonar e RVP, podendo precipitar falência de VD. Controle da frequência ou cardioversão depende da estabilidade.",
  "frase_ouro": "Na estenose mitral, FA rápida fecha ainda mais uma porta que já era estreita."
},
{
  "id": "yao-hard-090",
  "fonte": "Yao",
  "capitulo": "Cardiopatias congênitas",
  "tema": "Shunt esquerda-direita e hipertensão pulmonar",
  "area": "Pediatria",
  "dificuldade": "muito difícil",
  "pergunta": "Adolescente com comunicação interventricular grande não corrigida e suspeita de hipertensão pulmonar fixa será anestesiado para procedimento não cardíaco. Qual preocupação é mais importante?",
  "alternativas": {
    "A": "Reduzir RVS agressivamente para aumentar shunt esquerda-direita.",
    "B": "Ignorar saturação, pois shunt esquerda-direita nunca muda direção.",
    "C": "Evitar aumentos de RVP por hipóxia, hipercapnia e acidose; avaliar possibilidade de fisiologia de Eisenmenger e risco de shunt direita-esquerda.",
    "D": "Induzir hipovolemia para reduzir fluxo pulmonar.",
    "E": "Usar bolhas de ar em equipo sem preocupação, pois não há risco sistêmico."
  },
  "resposta": "C",
  "comentario": "Shunts esquerda-direita crônicos podem evoluir para hipertensão pulmonar e inversão de shunt. Nessa fisiologia, queda de RVS ou aumento de RVP piora dessaturação. Ar venoso pode embolizar sistemicamente se houver shunt direita-esquerda.",
  "frase_ouro": "Quando o pulmão hipertenso vence o sistêmico, o shunt muda de lado e a anestesia muda de risco."
},
{
  "id": "yao-hard-091",
  "fonte": "Yao",
  "capitulo": "Diabetes mellitus",
  "tema": "Gastroparesia e disautonomia",
  "area": "Renal / Endócrino / Metabólico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente diabético de longa data, com neuropatia autonômica, nefropatia e sintomas de plenitude pós-prandial fará cirurgia eletiva. Apesar de jejum adequado, qual risco deve ser considerado?",
  "alternativas": {
    "A": "Menor risco de aspiração por esvaziamento gástrico acelerado.",
    "B": "Gastroparesia com estômago funcionalmente cheio, instabilidade hemodinâmica por disautonomia e risco de hipoglicemia/hiperglicemia perioperatória.",
    "C": "Ausência de risco renal se creatinina estiver apenas moderadamente elevada.",
    "D": "Impossibilidade de isquemia silenciosa.",
    "E": "Contraindicação absoluta de qualquer anestesia regional."
  },
  "resposta": "B",
  "comentario": "Diabetes avançado pode causar gastroparesia, disautonomia, doença renal, isquemia silenciosa e maior risco infeccioso. Jejum formal não garante estômago vazio se esvaziamento gástrico é lento. O plano deve considerar aspiração e instabilidade.",
  "frase_ouro": "No diabético autonômico, o jejum pode estar no relógio, mas não no estômago."
},
{
  "id": "yao-hard-092",
  "fonte": "Yao",
  "capitulo": "Eletrólitos",
  "tema": "Hiponatremia sintomática",
  "area": "Renal / Endócrino / Metabólico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente no pós-operatório neurocirúrgico apresenta convulsão, Na 116 mEq/L, osmolaridade baixa e início provável nas últimas 24 horas. Qual princípio é mais adequado?",
  "alternativas": {
    "A": "Corrigir lentamente apenas com restrição hídrica, mesmo com convulsão ativa.",
    "B": "Aumentar sódio para 145 mEq/L em 2 horas para normalizar rapidamente.",
    "C": "Usar solução hipertônica para controlar sintomas graves, com metas de correção segura e monitorização frequente para evitar desmielinização.",
    "D": "Administrar água livre para reduzir osmolaridade.",
    "E": "Ignorar sódio se a convulsão cessar espontaneamente."
  },
  "resposta": "C",
  "comentario": "Hiponatremia sintomática grave exige correção urgente parcial com solução hipertônica para reduzir edema cerebral e convulsão. A correção total rápida é perigosa. A meta é aliviar sintomas e respeitar limites de aumento do sódio.",
  "frase_ouro": "Na hiponatremia grave, trate o cérebro agora sem destruir a ponte depois."
},
{
  "id": "yao-hard-093",
  "fonte": "Yao",
  "capitulo": "Equilíbrio ácido-base",
  "tema": "Acidose láctica",
  "area": "Renal / Endócrino / Metabólico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente em choque hemorrágico tem pH 7,09, lactato 9, BE -14 e sangramento ativo. A equipe pergunta se bicarbonato resolve a instabilidade. Qual resposta é mais correta?",
  "alternativas": {
    "A": "Bicarbonato é tratamento definitivo da acidose de choque e dispensa controle hemorrágico.",
    "B": "A prioridade é restaurar perfusão e controlar sangramento; bicarbonato pode ser considerado em situações selecionadas, mas não substitui fluxo e hemostasia.",
    "C": "Hiperventilação isolada remove lactato.",
    "D": "Acidose melhora coagulação, então não deve ser corrigida.",
    "E": "Lactato alto sempre significa convulsão, não choque."
  },
  "resposta": "B",
  "comentario": "A acidose láctica do choque é consequência de hipoperfusão e metabolismo anaeróbio. O tratamento principal é controle da fonte, restauração de volume/hemoglobina/perfusão e aquecimento. Bicarbonato pode ter papel em acidemia extrema, mas não corrige a causa.",
  "frase_ouro": "Acidose de choque se trata devolvendo fluxo; bicarbonato sem perfusão é maquiagem em gasometria."
},
{
  "id": "yao-hard-094",
  "fonte": "Yao",
  "capitulo": "Temperatura",
  "tema": "Hipotermia e coagulação",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Durante trauma laparotômico, paciente chega a 34 °C, pH 7,18, sangramento difuso e necessidade de transfusão. Qual relação é mais correta?",
  "alternativas": {
    "A": "Hipotermia melhora função plaquetária e deve ser mantida.",
    "B": "Acidose e hipotermia reduzem eficiência da coagulação e compõem ciclo letal com coagulopatia; aquecimento ativo é parte da ressuscitação.",
    "C": "Temperatura não influencia sangramento.",
    "D": "A melhor conduta é administrar cristaloide frio para reduzir metabolismo.",
    "E": "Coagulopatia só depende do INR."
  },
  "resposta": "B",
  "comentario": "Hipotermia, acidose e coagulopatia alimentam a tríade letal do trauma. Hipotermia reduz função plaquetária e atividade enzimática da coagulação. Aquecimento de paciente, fluidos e ambiente é terapêutico.",
  "frase_ouro": "No sangramento maciço, frio e ácido são anticoagulantes sem prescrição."
},
{
  "id": "yao-hard-095",
  "fonte": "Yao",
  "capitulo": "Pós-operatório",
  "tema": "Curarização residual",
  "area": "Farmacologia",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente extubado após rocurônio apresenta obstrução de via aérea, hipoventilação, incapacidade de manter elevação da cabeça e TOF ratio quantitativo 0,72. Qual interpretação e conduta são adequadas?",
  "alternativas": {
    "A": "TOF 0,72 é recuperação completa e exclui fraqueza.",
    "B": "Curarização residual provável; oferecer suporte ventilatório/oxigenação e reverter adequadamente conforme bloqueador e profundidade.",
    "C": "Administrar opioide para reduzir esforço respiratório.",
    "D": "Ignorar se o paciente abre os olhos.",
    "E": "Dar alta da recuperação, pois fraqueza muscular não causa hipoxemia."
  },
  "resposta": "B",
  "comentario": "TOF ratio abaixo de 0,9 está associado a fraqueza, obstrução, hipoventilação e aspiração. A recuperação clínica isolada é pouco confiável. Reversão e monitorização quantitativa reduzem risco.",
  "frase_ouro": "Acordado não é sinônimo de descurarizado; músculo precisa de número, não de palpite."
},
{
  "id": "yao-hard-096",
  "fonte": "Yao",
  "capitulo": "PONV",
  "tema": "Profilaxia de alto risco",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Mulher jovem, não tabagista, história de cinetose intensa, cirurgia laparoscópica e previsão de opioide pós-operatório. Qual plano reduz melhor PONV?",
  "alternativas": {
    "A": "Profilaxia multimodal com antieméticos de mecanismos diferentes, redução de opioides, considerar TIVA com propofol e hidratação adequada.",
    "B": "Ondansetrona isolada após vômitos repetidos, sem profilaxia.",
    "C": "Aumentar opioide para reduzir náusea por sedação.",
    "D": "Usar óxido nitroso para profilaxia antiemética.",
    "E": "Evitar antieméticos porque mascaram complicações."
  },
  "resposta": "A",
  "comentario": "A paciente tem múltiplos fatores de risco. A profilaxia deve ser proporcional ao risco, combinando classes e reduzindo fatores emetogênicos como opioides, voláteis/óxido nitroso quando possível. Propofol reduz PONV em muitos cenários.",
  "frase_ouro": "PONV de alto risco não se combate com uma ampola solitária; precisa de estratégia em camadas."
},
{
  "id": "yao-hard-097",
  "fonte": "Yao",
  "capitulo": "Cirurgia ambulatorial",
  "tema": "Critérios de alta",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente após cirurgia ambulatorial está acordado, mas com dor 8/10, vômitos persistentes e dessaturação ao dormir após opioide. Qual decisão é mais adequada?",
  "alternativas": {
    "A": "Alta, pois acordar é critério único.",
    "B": "Alta se houver acompanhante, independentemente de sintomas.",
    "C": "Manter observação/tratamento até controle de dor, PONV e segurança respiratória, considerando internação se risco persistir.",
    "D": "Administrar benzodiazepínico e liberar.",
    "E": "Suspender oxigênio e mandar para casa."
  },
  "resposta": "C",
  "comentario": "Alta ambulatorial requer estabilidade, dor e náusea controladas, oxigenação segura, mobilidade compatível e suporte domiciliar. Sintomas persistentes e dessaturação indicam risco pós-alta.",
  "frase_ouro": "Alta ambulatorial não é o paciente abrir os olhos; é sair com fisiologia e sintomas controlados."
},
{
  "id": "yao-hard-098",
  "fonte": "Yao",
  "capitulo": "Ética e cuidados paliativos",
  "tema": "Limitação terapêutica",
  "area": "Ambulatorial / Remoto / Especialidades",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com ordem de não reanimar fará procedimento paliativo para controle de dor. A equipe cirúrgica pergunta se a ordem fica automaticamente suspensa durante anestesia. Qual resposta é mais adequada?",
  "alternativas": {
    "A": "Sim, toda DNR é automaticamente suspensa em centro cirúrgico.",
    "B": "Não, nenhuma intervenção anestésica pode ser feita se houver DNR.",
    "C": "A ordem deve ser revisada previamente com paciente/representante e equipe, definindo quais intervenções são compatíveis com os objetivos de cuidado no contexto anestésico.",
    "D": "A decisão cabe apenas ao anestesista, sem discussão.",
    "E": "A DNR só se aplica na enfermaria, nunca no hospital."
  },
  "resposta": "C",
  "comentario": "No perioperatório, algumas intervenções rotineiras se assemelham a reanimação. A abordagem ética é reconsideração obrigatória e individualizada, alinhando limites terapêuticos aos objetivos do paciente.",
  "frase_ouro": "DNR no centro cirúrgico não se apaga no automático; se traduz para o contexto anestésico com conversa."
},
{
  "id": "yao-hard-099",
  "fonte": "Yao",
  "capitulo": "Medicina perioperatória",
  "tema": "Stent coronário e antiagregação",
  "area": "Cardiovascular",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente com stent farmacológico implantado há 3 semanas precisa de cirurgia eletiva de hérnia. Está em dupla antiagregação. Qual raciocínio é mais adequado?",
  "alternativas": {
    "A": "Suspender dupla antiagregação sem discussão, pois sangramento sempre é mais grave que trombose de stent.",
    "B": "Prosseguir obrigatoriamente em qualquer cirurgia, mantendo tudo, sem avaliar sangramento.",
    "C": "Adiar cirurgia eletiva se possível, pois interrupção precoce de antiagregação aumenta risco de trombose de stent; decisão deve envolver cardiologia/cirurgia/anestesia.",
    "D": "Trocar antiagregantes por vitamina K.",
    "E": "Considerar que stent recente não altera risco perioperatório."
  },
  "resposta": "C",
  "comentario": "Stent recente, especialmente farmacológico, tem risco de trombose se antiagregação for interrompida precocemente. Em cirurgia eletiva, adiar costuma ser mais seguro. Se cirurgia for urgente, deve-se balancear risco de sangramento e isquemia em equipe.",
  "frase_ouro": "Stent recente não gosta de pressa cirúrgica nem de antiagregante suspenso por reflexo."
},
{
  "id": "yao-hard-100",
  "fonte": "Yao",
  "capitulo": "Monitorização hemodinâmica",
  "tema": "Interpretação integrada",
  "area": "Emergências / Crítico",
  "dificuldade": "muito difícil",
  "pergunta": "Paciente em laparotomia por sepse abdominal apresenta PAM 68 com noradrenalina, FC 118, lactato 4,2, SvO2 72%, delta PCO2 9 mmHg, diurese baixa e eco com VE hiperdinâmico e VCI muito variável. Qual interpretação é mais útil?",
  "alternativas": {
    "A": "SvO2 72% prova perfusão adequada e encerra ressuscitação.",
    "B": "Delta PCO2 elevado e sinais dinâmicos sugerem fluxo/perfusão inadequados apesar de PAM aceitável; reavaliar responsividade a volume, débito, foco e microcirculação.",
    "C": "Noradrenalina impede uso de qualquer volume.",
    "D": "Lactato em sepse nunca se relaciona a perfusão.",
    "E": "VE hiperdinâmico exclui hipovolemia relativa."
  },
  "resposta": "B",
  "comentario": "Na sepse, uma PAM aceitável não garante perfusão. SvO2 pode ser normal por extração alterada. Delta PCO2 alto sugere fluxo insuficiente para remover CO2. VCI variável e VE hiperdinâmico podem indicar responsividade a volume, mas a decisão deve ser integrada ao risco de sobrecarga e ao controle de foco.",
  "frase_ouro": "Monitor nenhum governa sozinho: lactato, SvO2, delta CO2, eco e diurese contam partes diferentes da mesma perfusão."
},
{
  id: "yao-elite-101",
  fonte: "Yao",
  capitulo: "Via aérea difícil",
  tema: "Extubação de risco",
  area: "Via aérea",
  dificuldade: "muito difícil",
  pergunta: "Paciente de 63 anos, obeso, submetido a tireoidectomia total por bócio volumoso mergulhante. A intubação inicial foi difícil, com videolaringoscópio e bougie. Ao final, há edema de língua, pequeno sangramento cervical e ausência de vazamento ao redor do tubo após desinsuflar o cuff. Qual é a melhor conduta?",
  alternativas: {
    A: "Extubar em plano profundo para evitar tosse e hipertensão.",
    B: "Extubar imediatamente, pois o procedimento terminou e a saturação está normal.",
    C: "Manter intubado ou realizar extubação planejada de via aérea difícil, com equipe, material de reintubação e eventual guia de troca disponíveis.",
    D: "Trocar o tubo por máscara laríngea e encaminhar à enfermaria.",
    E: "Administrar diurético e extubar após 10 minutos."
  },
  resposta: "C",
  comentario: "A extubação é uma fase crítica do manejo da via aérea difícil. Este paciente tem múltiplos fatores de risco: intubação difícil prévia, cirurgia cervical, edema, sangramento e ausência de cuff leak. A saturação normal enquanto intubado não garante segurança após a retirada do tubo. A conduta mais segura é planejar a extubação como procedimento de risco ou postergá-la.",
  frase_ouro: "Via aérea difícil não termina quando o tubo entra; termina quando o paciente respira seguro sem ele."
},
{
  id: "yao-elite-102",
  fonte: "Yao",
  capitulo: "Anestesia obstétrica",
  tema: "Falha de intubação",
  area: "Obstetrícia",
  dificuldade: "muito difícil",
  pergunta: "Gestante de 38 semanas, cesárea de urgência por sofrimento fetal. Após indução em sequência rápida, a intubação falha em duas tentativas. A ventilação com máscara é possível, SpO2 98%, mas há edema importante de via aérea. Qual é a conduta mais adequada?",
  alternativas: {
    A: "Realizar novas tentativas de laringoscopia direta até obter sucesso.",
    B: "Priorizar oxigenação, chamar ajuda, considerar dispositivo supraglótico e decidir entre acordar a paciente ou prosseguir conforme urgência e segurança da ventilação.",
    C: "Realizar cricotireoidostomia imediatamente, mesmo com ventilação adequada.",
    D: "Prosseguir com a cirurgia sob ventilação com máscara facial sem plano alternativo.",
    E: "Administrar mais bloqueador neuromuscular para facilitar intubação."
  },
  resposta: "B",
  comentario: "Na falha de intubação obstétrica, a prioridade absoluta é manter oxigenação materna. Se a ventilação é possível, há tempo para seguir algoritmo estruturado: chamar ajuda, limitar tentativas, usar dispositivo supraglótico e decidir se é mais seguro acordar ou prosseguir. A urgência fetal importa, mas a segurança materna domina a decisão.",
  frase_ouro: "Na obstetrícia, oxigenar a mãe é o primeiro tratamento fetal."
},
{
  id: "yao-elite-103",
  fonte: "Yao",
  capitulo: "Anestesia regional",
  tema: "Toxicidade sistêmica por anestésico local",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Durante bloqueio de plexo braquial, paciente recebe ropivacaína fracionada. Após alguns minutos, refere gosto metálico, zumbido, agitação e evolui com convulsão. Em seguida, apresenta QRS alargado e hipotensão. Qual é a melhor sequência terapêutica?",
  alternativas: {
    A: "Administrar propofol em dose alta, evitar emulsão lipídica e aguardar recuperação.",
    B: "Tratar como reação vasovagal, elevar membros inferiores e observar.",
    C: "Administrar flumazenil e naloxona.",
    D: "Interromper injeção, garantir oxigenação/ventilação, controlar convulsão, iniciar emulsão lipídica e suporte cardiovascular adaptado.",
    E: "Administrar mais anestésico local para completar bloqueio e reduzir estímulo doloroso."
  },
  resposta: "D",
  comentario: "O quadro é típico de toxicidade sistêmica por anestésico local. A manifestação pode iniciar com sintomas neurológicos e progredir para toxicidade cardiovascular grave. O tratamento envolve interromper a injeção, pedir ajuda, oxigenar, evitar acidose/hipercapnia, tratar convulsões e iniciar emulsão lipídica precocemente.",
  frase_ouro: "LAST começa no cérebro, mas mata pelo coração; oxigênio e lipídio precisam chegar cedo."
},
{
  id: "yao-elite-104",
  fonte: "Yao",
  capitulo: "Neuroanestesia",
  tema: "Hipertensão intracraniana",
  area: "Neuroanestesia",
  dificuldade: "muito difícil",
  pergunta: "Paciente com tumor cerebral volumoso, edema perilesional e sinais de hipertensão intracraniana será submetido a craniotomia. Durante a indução, ocorre tosse intensa, hipertensão e queda de saturação. Qual princípio anestésico foi mais comprometido?",
  alternativas: {
    A: "Evitar estímulos que aumentem pressão intracraniana, mantendo oxigenação, ventilação e estabilidade hemodinâmica.",
    B: "Permitir hipercapnia para aumentar perfusão cerebral.",
    C: "Manter plano anestésico superficial para preservar exame neurológico.",
    D: "Reduzir pressão arterial média para menos de 50 mmHg.",
    E: "Evitar opioides em qualquer dose."
  },
  resposta: "A",
  comentario: "Tosse, hipertensão, hipoxemia e hipercapnia aumentam volume sanguíneo cerebral e podem elevar a pressão intracraniana. A indução em neuroanestesia deve ser suave, evitando resposta simpática, hipoxemia e hipercapnia, mas sem causar hipotensão que reduza pressão de perfusão cerebral.",
  frase_ouro: "No crânio apertado, tosse, CO2 e hipertensão ocupam espaço que o cérebro não tem."
},
{
  id: "yao-elite-105",
  fonte: "Yao",
  capitulo: "Cirurgia de coluna",
  tema: "Perda visual pós-operatória",
  area: "Neuroanestesia",
  dificuldade: "muito difícil",
  pergunta: "Paciente submetido a artrodese lombar extensa em prona, 9 horas de cirurgia, sangramento importante, reposição volêmica elevada e anemia intraoperatória. No pós-operatório, refere perda visual indolor. Qual fator é mais associado a essa complicação?",
  alternativas: {
    A: "Uso de capnografia.",
    B: "Ausência de bloqueio neuromuscular.",
    C: "Jejum pré-operatório.",
    D: "Hipotensão, anemia, edema, tempo prolongado em prona e possível aumento de pressão venosa/ocular.",
    E: "Uso de antiemético profilático."
  },
  resposta: "D",
  comentario: "Perda visual pós-operatória em cirurgia de coluna prolongada em prona é rara, mas devastadora. A neuropatia óptica isquêmica é associada a tempo prolongado, grande perda sanguínea, anemia, hipotensão, edema facial/orbitário e alterações de pressão venosa. Compressão ocular direta também deve ser evitada.",
  frase_ouro: "Em prona prolongada, olho protegido e perfusão preservada são monitorizações silenciosas."
},
{
  id: "yao-elite-106",
  fonte: "Yao",
  capitulo: "Farmacologia",
  tema: "Sugamadex",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  pergunta: "Paciente obeso, submetido a cirurgia laparoscópica, recebeu rocurônio em doses repetidas. Ao final, TOF count é 1. A equipe quer extubar após neostigmina. Qual alternativa é mais adequada?",
  alternativas: {
    A: "Neostigmina é ideal para qualquer profundidade de bloqueio, inclusive TOF count 0 ou 1.",
    B: "Aguardar ou usar reversão apropriada para bloqueio profundo, como sugamadex em dose adequada, monitorando recuperação quantitativa antes da extubação.",
    C: "Extubar se o paciente abrir os olhos, independentemente do TOF.",
    D: "Administrar naloxona para reverter rocurônio.",
    E: "Evitar reversão, pois obesidade protege contra curarização residual."
  },
  resposta: "B",
  comentario: "Neostigmina é limitada em bloqueios profundos. Sugamadex pode reverter rocurônio de forma mais previsível, desde que usado em dose adequada à profundidade do bloqueio. A decisão deve ser guiada por monitorização neuromuscular quantitativa, pois sinais clínicos são insuficientes para excluir curarização residual.",
  frase_ouro: "Reversão neuromuscular não é ritual de fim de cirurgia; é tratamento guiado pela profundidade do bloqueio."
},
{
  id: "yao-elite-107",
  fonte: "Yao",
  capitulo: "Obesidade",
  tema: "Ventilação e indução",
  area: "Respiratório / Torácica",
  dificuldade: "muito difícil",
  pergunta: "Paciente IMC 55 kg/m², apneia obstrutiva do sono e refluxo será submetido a cirurgia bariátrica. Mesmo acordado em decúbito dorsal, dessatura para 93%. Qual medida aumenta de forma mais consistente o tempo seguro de apneia na indução?",
  alternativas: {
    A: "Induzir rapidamente em decúbito dorsal horizontal.",
    B: "Evitar PEEP na pré-oxigenação.",
    C: "Posicionamento em rampa, pré-oxigenação otimizada e eventual uso de PEEP/pressão positiva antes da indução.",
    D: "Administrar opioide em bolus antes da pré-oxigenação.",
    E: "Reduzir FiO2 para evitar atelectasia de absorção."
  },
  resposta: "C",
  comentario: "Na obesidade, a capacidade residual funcional é reduzida e o consumo de oxigênio é aumentado, levando à dessaturação rápida. A posição em rampa melhora mecânica respiratória e visualização da glote. Pré-oxigenação eficaz, com pressão positiva quando apropriado, aumenta reserva de oxigênio.",
  frase_ouro: "No obeso, posição e pré-oxigenação compram o tempo que a fisiologia não oferece."
},
{
  id: "yao-elite-108",
  fonte: "Yao",
  capitulo: "Anestesia pediátrica",
  tema: "Prematuridade",
  area: "Pediatria",
  dificuldade: "muito difícil",
  pergunta: "Prematuro com idade pós-conceptual baixa será submetido a herniorrafia inguinal. O procedimento é curto, sem intercorrências, e a criança acorda bem. Qual preocupação ainda permanece no pós-operatório?",
  alternativas: {
    A: "Hipertermia maligna obrigatória.",
    B: "Síndrome pós-RTU.",
    C: "Ausência de risco se a criança chorou ao final.",
    D: "Hipertensão pulmonar sempre irreversível.",
    E: "Apneia e bradicardia pós-anestésicas, justificando monitorização conforme idade e fatores de risco."
  },
  resposta: "E",
  comentario: "Prematuros têm controle ventilatório imaturo e maior risco de apneia pós-operatória, especialmente com menor idade pós-conceptual, anemia, história de apneia ou doença pulmonar. A boa recuperação imediata não elimina risco tardio nas primeiras horas.",
  frase_ouro: "Prematuro pode acordar bem e ainda esquecer de respirar depois."
},
{
  id: "yao-elite-109",
  fonte: "Yao",
  capitulo: "Endocrinologia",
  tema: "Feocromocitoma",
  area: "Renal / Endócrino / Metabólico",
  dificuldade: "muito difícil",
  pergunta: "Paciente com feocromocitoma adequadamente alfa-bloqueado chega para adrenalectomia. Durante manipulação tumoral, PA 240/130 e FC 132. Após ligadura da veia adrenal, PA cai para 58/32. Qual explicação integra melhor os dois momentos?",
  alternativas: {
    A: "Liberação catecolaminérgica durante manipulação e, após ligadura, queda abrupta de catecolaminas associada a alfa-bloqueio residual e hipovolemia relativa.",
    B: "Erro de monitorização, pois feocromocitoma não cursa com hipotensão.",
    C: "Hipoglicemia durante manipulação e hiperglicemia após ligadura.",
    D: "Bloqueio neuromuscular residual durante manipulação tumoral.",
    E: "Reflexo vagal puro, sem participação catecolaminérgica."
  },
  resposta: "A",
  comentario: "A anestesia do feocromocitoma tem fases distintas. Antes da ligadura, manipulação tumoral libera catecolaminas, causando hipertensão e taquiarritmias. Após a retirada da fonte, o paciente pode ficar vasodilatado e hipovolêmico em relação ao leito vascular expandido pelo alfa-bloqueio.",
  frase_ouro: "Feocromocitoma é excesso de catecolamina até não ser mais; depois o vaso bloqueado cobra volume e vasopressor."
},
{
  id: "yao-elite-110",
  fonte: "Yao",
  capitulo: "Anestesia para trauma",
  tema: "Choque hemorrágico",
  area: "Emergências / Crítico",
  dificuldade: "muito difícil",
  pergunta: "Vítima de trauma abdominal penetrante chega hipotensa, confusa, extremidades frias, FAST positivo. A equipe sugere normalizar a PA com cristaloide antes de levar ao centro cirúrgico. Qual é a melhor resposta?",
  alternativas: {
    A: "Cristaloide deve ser usado em grande volume até normalizar PA, independentemente do sangramento.",
    B: "O tratamento prioritário é controle da fonte hemorrágica e ressuscitação hemostática, evitando diluição, hipotermia, acidose e coagulopatia.",
    C: "A tomografia é obrigatória antes da laparotomia, mesmo em instabilidade.",
    D: "Hemocomponentes só devem ser administrados após Hb menor que 5 g/dL.",
    E: "Hipotensão não altera desfecho em trauma."
  },
  resposta: "B",
  comentario: "Choque hemorrágico traumático exige controle rápido da fonte e ressuscitação hemostática. Cristaloide excessivo dilui fatores de coagulação, reduz temperatura e pode piorar sangramento. A estratégia deve incluir hemoderivados, aquecimento, cálcio e correção da coagulopatia.",
  frase_ouro: "No trauma sangrando, o tratamento definitivo não está no soro; está em fechar a torneira."
},
{
  id: "yao-elite-111",
  fonte: "Yao",
  capitulo: "Anestesia fora do centro cirúrgico",
  tema: "Ressonância magnética",
  area: "Ambulatorial / Remoto / Especialidades",
  dificuldade: "muito difícil",
  pergunta: "Criança precisa de anestesia geral para ressonância magnética. A sala é distante, o acesso ao paciente será limitado durante o exame e há necessidade de ventilação controlada. Qual planejamento é mais adequado?",
  alternativas: {
    A: "Usar equipamentos comuns desde que fiquem próximos ao anestesista.",
    B: "Dispensar capnografia porque o exame é diagnóstico.",
    C: "Garantir equipamentos compatíveis com RM, monitorização adequada, linhas longas, plano de emergência e estratégia de acesso rápido à via aérea.",
    D: "Evitar checagem prévia para reduzir tempo de sala.",
    E: "Manter objetos ferromagnéticos no bolso, desde que fora do campo visual."
  },
  resposta: "C",
  comentario: "Anestesia em RM exige equipamentos compatíveis com campo magnético, monitorização efetiva e planejamento logístico. O acesso ao paciente pode ser limitado durante o exame, tornando essencial prever desconexões, perda de via aérea, queda de saturação e necessidade de retirada rápida da sala.",
  frase_ouro: "Na RM, o ímã é um risco anestésico permanente; planejamento vale mais que improviso."
},
{
  id: "yao-elite-112",
  fonte: "Yao",
  capitulo: "Hipertermia maligna",
  tema: "Diagnóstico precoce",
  area: "Emergências / Crítico",
  dificuldade: "muito difícil",
  pergunta: "Durante anestesia com sevoflurano, paciente jovem apresenta aumento rápido do EtCO2 apesar de ventilação aumentada, rigidez muscular, taquicardia e acidose. A temperatura ainda é 37,9 °C. Qual é a conduta correta?",
  alternativas: {
    A: "Aguardar temperatura maior que 40 °C antes de tratar.",
    B: "Suspender agentes desencadeantes, administrar dantrolene, hiperventilar com O2 100% e tratar acidose/hipercalemia/hipertermia.",
    C: "Administrar succinilcolina para tratar rigidez.",
    D: "Aumentar sevoflurano para aprofundar anestesia.",
    E: "Tratar apenas com dipirona."
  },
  resposta: "B",
  comentario: "Na hipertermia maligna, o aumento de temperatura pode ser tardio. Hipercapnia inexplicada, rigidez e acidose após exposição a agentes gatilho devem levar ao tratamento imediato. Atrasar dantrolene até hipertermia franca aumenta mortalidade.",
  frase_ouro: "Na hipertermia maligna, o capnógrafo costuma avisar antes do termômetro."
},
{
  id: "yao-elite-113",
  fonte: "Yao",
  capitulo: "Insuficiência hepática",
  tema: "Coagulação na cirrose",
  area: "Gastro / Hepato / Transplantes",
  dificuldade: "muito difícil",
  pergunta: "Cirrótico Child C com INR 2,2, plaquetas 58.000, ascite volumosa e encefalopatia leve será submetido a laparotomia urgente. Qual é a interpretação mais adequada da coagulação?",
  alternativas: {
    A: "INR elevado prediz perfeitamente sangramento e deve ser normalizado antes de qualquer cirurgia.",
    B: "Cirrótico está sempre anticoagulado e não faz trombose.",
    C: "A hemostasia é reequilibrada, porém frágil; sangramento e trombose podem coexistir, e reposição deve ser guiada por contexto, sangramento e testes quando disponíveis.",
    D: "Plaquetopenia não tem relevância se o INR está elevado.",
    E: "Plasma fresco corrige completamente a hemostasia do cirrótico."
  },
  resposta: "C",
  comentario: "A cirrose reduz fatores pró-coagulantes e anticoagulantes, altera plaquetas, fibrinogênio e fibrinólise. O INR isolado não representa toda a hemostasia. A reposição indiscriminada pode aumentar volume, pressão portal e complicações sem necessariamente reduzir sangramento.",
  frase_ouro: "Cirrótico não é simplesmente anticoagulado; é hemostaticamente instável."
},
{
  id: "yao-elite-114",
  fonte: "Yao",
  capitulo: "Transfusão maciça",
  tema: "Hipocalcemia",
  area: "Hematologia / Coagulação",
  dificuldade: "muito difícil",
  pergunta: "Durante cirurgia hepática com transfusão maciça, paciente apresenta hipotensão, QT prolongado, sangramento difuso e cálcio ionizado baixo. Qual é a melhor interpretação?",
  alternativas: {
    A: "Hipocalcemia por citrato é irrelevante para coagulação.",
    B: "O cálcio deve ser evitado porque aumenta sangramento.",
    C: "A hipocalcemia melhora contratilidade ao reduzir consumo miocárdico.",
    D: "O citrato dos hemocomponentes pode causar hipocalcemia, piorando contratilidade e coagulação; cálcio deve ser monitorado e reposto.",
    E: "A única causa possível é hipoparatireoidismo."
  },
  resposta: "D",
  comentario: "O citrato presente em hemocomponentes quelata cálcio. Na transfusão maciça, a capacidade metabólica de depuração do citrato pode ser ultrapassada, especialmente em hipotermia, choque e disfunção hepática. Hipocalcemia prejudica coagulação e contratilidade miocárdica.",
  frase_ouro: "Na transfusão maciça, cálcio é hemostasia e hemodinâmica no mesmo eletrólito."
},
{
  id: "yao-elite-115",
  fonte: "Yao",
  capitulo: "Bloqueadores neuromusculares",
  tema: "Miastenia gravis",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  pergunta: "Paciente com miastenia gravis será submetida a timectomia. Recebe pequena dose de rocurônio e evolui com bloqueio profundo prolongado. Qual alternativa é mais correta?",
  alternativas: {
    A: "Miastênicos costumam ser sensíveis a bloqueadores não despolarizantes, exigindo doses reduzidas e monitorização quantitativa.",
    B: "Miastenia torna o paciente resistente ao rocurônio.",
    C: "TOF não tem valor em doença neuromuscular.",
    D: "Succinilcolina em infusão contínua é sempre a melhor escolha.",
    E: "Ausência de sintomas bulbares elimina risco respiratório pós-operatório."
  },
  resposta: "A",
  comentario: "Na miastenia gravis há redução de receptores nicotínicos funcionais, tornando o paciente mais sensível a bloqueadores não despolarizantes. A resposta à succinilcolina pode ser imprevisível. A decisão de extubação deve considerar força respiratória, doença bulbar, duração da cirurgia e monitorização.",
  frase_ouro: "Na miastenia, pouca dose pode virar muito bloqueio."
},
{
  id: "yao-elite-116",
  fonte: "Yao",
  capitulo: "Anestesia obstétrica",
  tema: "Embolia por líquido amniótico",
  area: "Obstetrícia",
  dificuldade: "muito difícil",
  pergunta: "Durante cesárea, logo após extração fetal, paciente apresenta hipóxia súbita, hipotensão profunda, crise convulsiva e, em seguida, sangramento difuso com fibrinogênio muito baixo. Qual diagnóstico melhor integra o quadro?",
  alternativas: {
    A: "Bloqueio neuraxial alto isolado.",
    B: "Toxicidade por magnésio.",
    C: "Hipoglicemia.",
    D: "Anafilaxia leve.",
    E: "Embolia por líquido amniótico com colapso cardiopulmonar e coagulopatia."
  },
  resposta: "E",
  comentario: "A embolia por líquido amniótico é uma síndrome catastrófica caracterizada por hipóxia, colapso cardiovascular, alteração neurológica e coagulopatia grave. O tratamento é suporte intensivo: oxigenação, circulação, reposição hemostática e controle obstétrico do sangramento.",
  frase_ouro: "Embolia amniótica é pulmão, coração e coagulação falhando quase ao mesmo tempo."
},
{
  id: "yao-elite-117",
  fonte: "Yao",
  capitulo: "Medicina perioperatória",
  tema: "Diabetes e gastroparesia",
  area: "Renal / Endócrino / Metabólico",
  dificuldade: "muito difícil",
  pergunta: "Paciente diabético de longa data, com neuropatia autonômica, nefropatia e sintomas de plenitude gástrica, será submetido a cirurgia eletiva. Apesar de jejum adequado, qual risco deve ser considerado?",
  alternativas: {
    A: "Estômago funcionalmente cheio por gastroparesia, além de instabilidade hemodinâmica por disautonomia.",
    B: "Menor risco de aspiração por esvaziamento gástrico acelerado.",
    C: "Impossibilidade de isquemia silenciosa.",
    D: "Contraindicação absoluta de anestesia regional.",
    E: "Hipoglicemia impossível se estiver em jejum."
  },
  resposta: "A",
  comentario: "Diabetes avançado pode cursar com gastroparesia, disautonomia, nefropatia e isquemia silenciosa. O jejum formal pode não garantir esvaziamento gástrico. A disautonomia também pode causar respostas hemodinâmicas imprevisíveis durante indução e bloqueios.",
  frase_ouro: "No diabético autonômico, o jejum pode estar no relógio, mas não no estômago."
},
{
  id: "yao-elite-118",
  fonte: "Yao",
  capitulo: "Dor crônica",
  tema: "Usuário crônico de opioide",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Paciente em uso crônico de altas doses de opioide por dor lombar será submetido a artrodese. No pós-operatório, apresenta dor intensa, alodinia e pouca resposta a doses crescentes de morfina. Qual plano é mais adequado?",
  alternativas: {
    A: "Suspender abruptamente opioides para reverter tolerância.",
    B: "Usar apenas opioide em escalada ilimitada.",
    C: "Administrar benzodiazepínico como analgésico principal.",
    D: "Planejar analgesia multimodal, manter equivalente basal, considerar cetamina/regional e reconhecer tolerância ou hiperalgesia induzida por opioide.",
    E: "Evitar qualquer adjuvante analgésico."
  },
  resposta: "D",
  comentario: "Usuários crônicos de opioide podem ter tolerância, dependência física e hiperalgesia. O manejo deve evitar abstinência, mas não depender apenas de escalada opioide. Cetamina, analgesia regional, alfa-2 agonistas, paracetamol, AINEs quando seguros e estratégias multimodais são importantes.",
  frase_ouro: "No usuário crônico, mais opioide nem sempre significa mais analgesia."
},
{
  id: "yao-elite-119",
  fonte: "Yao",
  capitulo: "Ventilação mecânica",
  tema: "Auto-PEEP",
  area: "Respiratório / Torácica",
  dificuldade: "muito difícil",
  pergunta: "Paciente com DPOC grave sob anestesia geral apresenta hipotensão, aumento de pressão de pico, expiração incompleta no capnograma e melhora transitória da pressão arterial após desconexão breve do ventilador. Qual é a explicação mais provável?",
  alternativas: {
    A: "Hipovolemia pura, sem relação com ventilação.",
    B: "Hipertermia maligna.",
    C: "Auto-PEEP por hiperinsuflação dinâmica, reduzindo retorno venoso.",
    D: "Síndrome pós-RTU.",
    E: "Reação transfusional."
  },
  resposta: "C",
  comentario: "Em DPOC, tempo expiratório insuficiente leva a aprisionamento aéreo, aumento da pressão intratorácica e redução do retorno venoso. O tratamento envolve reduzir frequência respiratória, aumentar tempo expiratório, tratar broncoespasmo e ajustar ventilação.",
  frase_ouro: "No DPOC ventilado, ar que entra e não sai vira obstáculo ao retorno venoso."
},
{
  id: "yao-elite-120",
  fonte: "Yao",
  capitulo: "Transplante hepático",
  tema: "Reperfusão",
  area: "Gastro / Hepato / Transplantes",
  dificuldade: "muito difícil",
  pergunta: "Durante transplante hepático, logo após reperfusão do enxerto, paciente apresenta bradicardia, hipotensão, aumento de potássio, acidose e piora da contratilidade. Qual é a melhor conduta?",
  alternativas: {
    A: "Administrar beta-bloqueador e aguardar adaptação.",
    B: "Reduzir FiO2 para evitar radicais livres.",
    C: "Suspender toda reposição volêmica.",
    D: "Ignorar, pois reperfusão hepática não causa instabilidade.",
    E: "Tratar síndrome pós-reperfusão com suporte hemodinâmico, correção de hipercalemia, acidose e cálcio, além de comunicação com a equipe."
  },
  resposta: "E",
  comentario: "A reperfusão hepática pode liberar sangue frio, ácido, rico em potássio e mediadores inflamatórios. O resultado pode ser bradicardia, vasodilatação, depressão miocárdica, arritmias e hipotensão. Antecipação e comunicação antes da reperfusão são essenciais.",
  frase_ouro: "Na reperfusão hepática, o enxerto devolve ao coração potássio, ácido e instabilidade."
},
{
  id: "yao-elite-121",
  fonte: "Yao",
  capitulo: "Emergências anestésicas",
  tema: "Anafilaxia",
  area: "Emergências / Crítico",
  dificuldade: "muito difícil",
  pergunta: "Logo após rocurônio e antibiótico, paciente apresenta hipotensão profunda, broncoespasmo, aumento de pressão de via aérea e rash discreto em área visível. Está em uso crônico de beta-bloqueador e responde pouco à adrenalina inicial. Qual adjuvante pode ser considerado?",
  alternativas: {
    A: "Glucagon, por via independente do receptor beta-adrenérgico.",
    B: "Nitroprussiato.",
    C: "Furosemida.",
    D: "Protamina.",
    E: "Flumazenil."
  },
  resposta: "A",
  comentario: "A adrenalina é a droga central na anafilaxia. Em pacientes beta-bloqueados, a resposta pode ser reduzida e a anafilaxia mais grave. O glucagon pode aumentar AMPc por receptor próprio, independente do receptor beta, sendo adjuvante em casos refratários.",
  frase_ouro: "Na anafilaxia do beta-bloqueado, às vezes é preciso contornar o receptor beta."
},
{
  id: "yao-elite-122",
  fonte: "Yao",
  capitulo: "Pós-operatório",
  tema: "Curarização residual",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  pergunta: "Paciente extubado após cirurgia abdominal apresenta hipoventilação, dificuldade de manter via aérea, voz fraca e TOF ratio quantitativo de 0,74. Qual conduta é mais adequada?",
  alternativas: {
    A: "Considerar recuperação completa, pois o paciente abriu os olhos.",
    B: "Administrar opioide para reduzir esforço respiratório.",
    C: "Reconhecer curarização residual, oferecer suporte ventilatório e reverter bloqueio conforme droga e profundidade, buscando TOF ratio adequado.",
    D: "Dar alta da recuperação com oxigênio nasal.",
    E: "Administrar diurético."
  },
  resposta: "C",
  comentario: "TOF ratio menor que 0,9 está associado a fraqueza faríngea, hipoventilação, obstrução, aspiração e complicações pulmonares. Sinais clínicos são pouco sensíveis. A monitorização quantitativa é essencial para extubação segura.",
  frase_ouro: "Acordar não é o mesmo que recuperar força; TOF baixo ainda é anestesia no músculo."
},
{
  id: "yao-elite-123",
  fonte: "Yao",
  capitulo: "Anestesia para cirurgia laparoscópica",
  tema: "Embolia gasosa",
  area: "Emergências / Crítico",
  dificuldade: "muito difícil",
  pergunta: "Durante insuflação inicial para laparoscopia, ocorre queda abrupta do EtCO2, hipotensão, dessaturação e sopro sugestivo. Qual é a melhor conduta inicial?",
  alternativas: {
    A: "Aumentar pressão de insuflação para tamponar vasos.",
    B: "Suspender insuflação/desinsuflar, administrar O2 100%, suportar hemodinâmica e considerar aspiração por CVC se disponível.",
    C: "Reduzir FiO2 para diminuir tamanho das bolhas.",
    D: "Prosseguir, pois CO2 é solúvel e nunca causa colapso.",
    E: "Administrar beta-bloqueador."
  },
  resposta: "B",
  comentario: "Queda abrupta de EtCO2 associada a colapso na insuflação sugere embolia gasosa. A conduta é interromper a entrada de gás, desinsuflar, oxigenar, sustentar circulação e aspirar se houver cateter posicionado adequadamente.",
  frase_ouro: "EtCO2 que despenca na insuflação pode ser gás ocupando o caminho do sangue."
},
{
  id: "yao-elite-124",
  fonte: "Yao",
  capitulo: "Anestesia pediátrica",
  tema: "IVAS e broncoespasmo",
  area: "Pediatria",
  dificuldade: "muito difícil",
  pergunta: "Criança de 4 anos com tosse produtiva, febre nas últimas 24 horas, sibilos leves e secreção purulenta chega para cirurgia eletiva. Qual conduta é mais prudente?",
  alternativas: {
    A: "Prosseguir sempre, pois IVAS não altera risco anestésico.",
    B: "Induzir com desflurano para testar reatividade brônquica.",
    C: "Adiar cirurgia eletiva, pois sintomas ativos baixos, febre e sibilos aumentam risco respiratório perioperatório.",
    D: "Usar intubação obrigatória para reduzir risco de laringoespasmo.",
    E: "Evitar oxigênio para não ressecar secreções."
  },
  resposta: "C",
  comentario: "Infecção de via aérea superior recente pode aumentar reatividade de via aérea, mas sintomas leves isolados nem sempre exigem adiamento. Febre, tosse produtiva, sibilos, secreção purulenta e cirurgia eletiva favorecem adiamento para reduzir risco de laringoespasmo, broncoespasmo e dessaturação.",
  frase_ouro: "IVAS leve pode ser tolerável; IVAS com febre, secreção e sibilo vira risco anestésico real."
},
{
  id: "yao-elite-125",
  fonte: "Yao",
  capitulo: "Robótica",
  tema: "Trendelenburg extremo",
  area: "Ambulatorial / Remoto / Especialidades",
  dificuldade: "muito difícil",
  pergunta: "Durante cirurgia robótica pélvica prolongada em Trendelenburg extremo, paciente apresenta edema facial importante, pressão de vias aéreas elevada e ausência de cuff leak ao final. Qual conduta é mais segura?",
  alternativas: {
    A: "Extubar obrigatoriamente porque o procedimento terminou.",
    B: "Reduzir oxigênio e observar.",
    C: "Administrar naloxona para reverter edema de via aérea.",
    D: "Considerar risco de edema de via aérea, avaliar extubação cuidadosamente e manter intubado se houver dúvida de segurança.",
    E: "Extubar em plano profundo para evitar tosse."
  },
  resposta: "D",
  comentario: "Trendelenburg extremo e pneumoperitônio prolongado aumentam pressão venosa cefálica e podem causar edema facial, lingual e laríngeo. A ausência de cuff leak sugere risco de obstrução após extubação. Extubação deve ser planejada, e manter intubado pode ser mais seguro.",
  frase_ouro: "Na robótica pélvica, edema facial pode ser só a parte visível do edema de via aérea."
},
{
  id: "yao-elite-126",
  fonte: "Yao",
  capitulo: "Hipertensão pulmonar",
  tema: "Falência de VD",
  area: "Respiratório / Torácica",
  dificuldade: "muito difícil",
  pergunta: "Paciente com hipertensão pulmonar grave durante laparotomia apresenta hipotensão, PVC elevada, EtCO2 em queda, SpO2 88%, PaCO2 60 mmHg e eco com VD dilatado. Qual intervenção é mais coerente?",
  alternativas: {
    A: "Permitir hipercapnia grave para proteger ventilação pulmonar.",
    B: "Reduzir FiO2 para evitar vasoconstrição pulmonar.",
    C: "Administrar beta-bloqueador em bolus.",
    D: "Corrigir hipóxia, hipercapnia e acidose, manter pressão sistêmica, otimizar VD e considerar vasodilatador pulmonar seletivo.",
    E: "Reduzir PAM para diminuir trabalho cardíaco."
  },
  resposta: "D",
  comentario: "Hipóxia, hipercapnia e acidose aumentam resistência vascular pulmonar, piorando pós-carga do VD. A falência de VD reduz débito e perfusão pulmonar, diminuindo EtCO2. O tratamento busca reduzir RVP e manter pressão sistêmica para perfusão coronariana do VD.",
  frase_ouro: "No VD em crise, oxigênio, CO2 e pH são drogas hemodinâmicas."
},
{
  id: "yao-elite-127",
  fonte: "Yao",
  capitulo: "Anestesia ambulatorial",
  tema: "Alta segura",
  area: "Ambulatorial / Remoto / Especialidades",
  dificuldade: "muito difícil",
  pergunta: "Paciente após cirurgia ambulatorial está acordado, porém com dor 8/10, vômitos persistentes e dessaturação durante sono após opioide. Qual decisão é mais adequada?",
  alternativas: {
    A: "Dar alta se houver acompanhante.",
    B: "Administrar benzodiazepínico e liberar.",
    C: "Suspender oxigênio para testar reserva.",
    D: "Alta, pois acordar é o principal critério.",
    E: "Manter observação e tratamento até controle de dor, PONV e segurança respiratória, considerando internação se persistirem riscos."
  },
  resposta: "E",
  comentario: "Alta ambulatorial exige estabilidade hemodinâmica, respiratória, controle de dor, náuseas e capacidade funcional mínima. Dor intensa, vômitos persistentes e dessaturação pós-opioide indicam risco significativo após alta.",
  frase_ouro: "Alta ambulatorial segura é fisiologia estável, não apenas olho aberto."
},
{
  id: "yao-elite-128",
  fonte: "Yao",
  capitulo: "Bloqueios periféricos",
  tema: "Interescalênico e função diafragmática",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Paciente com DPOC grave e pneumonectomia prévia esquerda será submetido a cirurgia de ombro direito. A equipe propõe bloqueio interescalênico direito com volume habitual. Qual preocupação é mais relevante?",
  alternativas: {
    A: "Bloqueio interescalênico não tem efeito respiratório.",
    B: "O principal risco é bloqueio bilateral obrigatório do nervo facial.",
    C: "Paresia frênica ipsilateral pode reduzir função diafragmática e ser mal tolerada em paciente com reserva pulmonar mínima.",
    D: "O bloqueio melhora sempre a capacidade vital.",
    E: "A presença de DPOC contraindica toda anestesia regional."
  },
  resposta: "C",
  comentario: "O bloqueio interescalênico frequentemente causa paresia do nervo frênico ipsilateral. Em pacientes com reserva respiratória limitada, pneumonectomia contralateral ou DPOC grave, essa redução pode ser clinicamente significativa. Técnicas alternativas devem ser consideradas.",
  frase_ouro: "Interescalênico excelente para ombro pode ser caro para o diafragma."
},
{
  id: "yao-elite-129",
  fonte: "Yao",
  capitulo: "Emergências perioperatórias",
  tema: "Pneumotórax hipertensivo",
  area: "Emergências / Crítico",
  dificuldade: "muito difícil",
  pergunta: "Paciente politraumatizado sob ventilação mecânica desenvolve hipotensão súbita, dessaturação, aumento de pressão de via aérea e murmúrio abolido à direita. A traqueia parece desviada. Qual conduta é mais adequada?",
  alternativas: {
    A: "Aguardar radiografia antes de intervir.",
    B: "Administrar diurético.",
    C: "Reduzir FiO2.",
    D: "Descompressão imediata do pneumotórax hipertensivo, seguida de drenagem definitiva.",
    E: "Aumentar PEEP para recrutar o hemitórax acometido."
  },
  resposta: "D",
  comentario: "Pneumotórax hipertensivo em paciente instável é diagnóstico clínico. A pressão intratorácica elevada reduz retorno venoso e causa choque obstrutivo. A imagem não deve atrasar descompressão.",
  frase_ouro: "Pneumotórax hipertensivo não espera radiografia; espera agulha ou dreno."
},
{
  id: "yao-elite-130",
  fonte: "Yao",
  capitulo: "Cuidados paliativos",
  tema: "Ordem de não reanimar",
  area: "Ambulatorial / Remoto / Especialidades",
  dificuldade: "muito difícil",
  pergunta: "Paciente com doença terminal e ordem de não reanimar será submetido a procedimento paliativo para controle de dor. A equipe pergunta se a ordem deve ser automaticamente suspensa na anestesia. Qual resposta é mais adequada?",
  alternativas: {
    A: "Sim, toda ordem de não reanimar é suspensa automaticamente no centro cirúrgico.",
    B: "Não, o paciente não pode receber nenhuma intervenção anestésica.",
    C: "A decisão cabe apenas ao cirurgião.",
    D: "A ordem deve ser revisada com paciente ou representante, definindo quais intervenções são compatíveis com os objetivos de cuidado durante a anestesia.",
    E: "A ordem só vale fora do hospital."
  },
  resposta: "D",
  comentario: "No centro cirúrgico, intervenções rotineiras da anestesia podem se parecer com reanimação. A abordagem ética recomendada é revisar a ordem previamente, esclarecendo quais medidas são aceitáveis, quais não são e quais se alinham aos objetivos do paciente.",
  frase_ouro: "DNR no centro cirúrgico não se apaga no automático; traduz-se para o contexto anestésico."
},
{
  id: "tsa-elite-001",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Raquianestesia",
  tema: "Bradicardia e PCR",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Homem jovem, ASA I, submetido à artroscopia de joelho sob raquianestesia, evolui 20 minutos após o bloqueio com náusea, sudorese, sensação de mal-estar, bradicardia progressiva e hipotensão discreta. O nível sensitivo estava em T8. Qual mecanismo melhor explica o risco de deterioração rápida?",
  alternativas: {
    A: "Reflexo vagal por redução abrupta do retorno venoso, podendo evoluir para bradicardia extrema e assistolia.",
    B: "Toxicidade sistêmica por anestésico local, obrigatoriamente precedida por convulsão.",
    C: "Hipóxia por bloqueio frênico bilateral.",
    D: "Bloqueio motor lombar isolado com repercussão cardiovascular mínima."
  },
  resposta: "A",
  comentario: "Após raquianestesia, a simpatectomia pode reduzir retorno venoso. Em pacientes jovens e vagotônicos, reflexos como Bezold-Jarisch podem gerar bradicardia intensa antes de hipotensão dramática. Náusea, sudorese e mal-estar podem ser sinais precoces.",
  frase_ouro: "Na raqui, bradicardia não é detalhe: pode ser o primeiro aviso de colapso circulatório."
},
{
  id: "tsa-elite-002",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Cirurgia de coluna",
  tema: "Perda visual pós-operatória",
  area: "Neuroanestesia",
  dificuldade: "muito difícil",
  pergunta: "Paciente submetido à artrodese toracolombar em prona por 10 horas, com perda sanguínea importante, grande reposição volêmica, edema facial e anemia no pós-operatório, refere perda visual bilateral indolor. Qual fator é mais associado à neuropatia óptica isquêmica nesse contexto?",
  alternativas: {
    A: "Sexo feminino isoladamente.",
    B: "Tempo cirúrgico prolongado associado a anemia, hipotensão e congestão venosa.",
    C: "Uso de antiemético no intraoperatório.",
    D: "Ventilação com FiO2 elevada."
  },
  resposta: "B",
  comentario: "A neuropatia óptica isquêmica pós-operatória é rara, mas associada a cirurgias longas em prona, anemia, hipotensão, edema facial/orbitário e aumento da pressão venosa. A prevenção passa por posicionamento, proteção ocular e manutenção de perfusão adequada.",
  frase_ouro: "Em prona prolongada, o olho sofre com pouca oferta e muita congestão."
},
{
  id: "tsa-elite-003",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Obstetrícia",
  tema: "Transferência placentária",
  area: "Obstetrícia",
  dificuldade: "muito difícil",
  pergunta: "Em cesariana sob anestesia geral, qual fármaco tende a apresentar menor transferência placentária clinicamente relevante, considerando ionização, polaridade e baixa lipossolubilidade relativa?",
  alternativas: {
    A: "Fentanil.",
    B: "Propofol.",
    C: "Cisatracúrio.",
    D: "Tiopental."
  },
  resposta: "C",
  comentario: "Bloqueadores neuromusculares são compostos ionizados e pouco lipossolúveis, atravessando pouco a placenta. Já hipnóticos e opioides são mais lipossolúveis e podem atingir o feto, especialmente em maiores doses ou intervalo indução-nascimento prolongado.",
  frase_ouro: "Droga ionizada e pouco lipossolúvel cruza mal a placenta."
},
{
  id: "tsa-elite-004",
  fonte: "TSA 2016 - inspirado",
  capitulo: "DPOC",
  tema: "Espirometria no enfisema",
  area: "Respiratório / Torácica",
  dificuldade: "muito difícil",
  pergunta: "Paciente com enfisema grave apresenta dispneia crônica, tórax em barril e hiperinsuflação. Qual padrão espirométrico é esperado?",
  alternativas: {
    A: "VEF1 reduzido, relação VEF1/CVF reduzida e aumento da capacidade residual funcional.",
    B: "VEF1 normal, relação VEF1/CVF elevada e CRF reduzida.",
    C: "VEF1 reduzido, relação VEF1/CVF elevada e CRF normal.",
    D: "VEF1 normal, relação VEF1/CVF normal e CRF reduzida."
  },
  resposta: "A",
  comentario: "O enfisema é doença obstrutiva. Há redução do VEF1, queda da relação VEF1/CVF e aprisionamento aéreo, com aumento da CRF e do volume residual. A hiperinsuflação também reduz eficiência mecânica ventilatória.",
  frase_ouro: "Enfisema é obstrução com ar preso: VEF1 cai, VEF1/CVF cai e CRF sobe."
},
{
  id: "tsa-elite-005",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Obstetrícia",
  tema: "Ruptura uterina",
  area: "Obstetrícia",
  dificuldade: "muito difícil",
  pergunta: "Gestante multípara em trabalho de parto prolongado domiciliar chega com dor abdominal intensa, choque hemorrágico, palidez e ausência de batimento cardíaco fetal audível. Qual diagnóstico deve ser priorizado?",
  alternativas: {
    A: "Ruptura uterina.",
    B: "Placenta prévia não sangrante.",
    C: "Hiperêmese gravídica.",
    D: "Pré-eclâmpsia leve."
  },
  resposta: "A",
  comentario: "Dor abdominal intensa, choque, trabalho de parto prolongado e morte fetal sugerem ruptura uterina, especialmente em paciente com fatores de risco obstétricos. O quadro exige ressuscitação materna e intervenção cirúrgica imediata.",
  frase_ouro: "Choque materno com dor abdominal e sofrimento fetal extremo é ruptura uterina até prova em contrário."
},
{
  id: "tsa-elite-006",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Coagulação",
  tema: "Tromboelastografia",
  area: "Hematologia / Coagulação",
  dificuldade: "muito difícil",
  pergunta: "Durante laparotomia pediátrica, há sangramento difuso de áreas cruentas. Tromboelastografia mostra prolongamento importante do tempo de reação inicial, com ângulo e amplitude relativamente preservados. Qual distúrbio é mais provável?",
  alternativas: {
    A: "Hiperfibrinólise isolada.",
    B: "Deficiência de fatores de coagulação.",
    C: "Trombocitopenia pura.",
    D: "Excesso de fibrinogênio."
  },
  resposta: "B",
  comentario: "O tempo de reação prolongado no TEG/ROTEM sugere atraso na formação inicial do coágulo, frequentemente relacionado a deficiência de fatores ou efeito anticoagulante. Alterações de amplitude apontariam mais para plaquetas/fibrinogênio.",
  frase_ouro: "No TEG, R prolongado fala de início lento do coágulo: pense em fatores."
},
{
  id: "tsa-elite-007",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Recuperação pós-anestésica",
  tema: "Fase I",
  area: "Ambulatorial / Remoto / Especialidades",
  dificuldade: "muito difícil",
  pergunta: "Em um serviço ambulatorial, discute-se a função da recuperação pós-anestésica de Fase I. Qual objetivo define melhor essa fase?",
  alternativas: {
    A: "Garantir alimentação plena antes da alta.",
    B: "Monitorar complicações imediatas e estabilizar funções vitais no pós-operatório inicial.",
    C: "Realizar acompanhamento tardio de ferida operatória.",
    D: "Liberar todos os pacientes diretamente para casa."
  },
  resposta: "B",
  comentario: "A Fase I da recuperação pós-anestésica é focada em vigilância imediata: ventilação, oxigenação, circulação, nível de consciência, dor, náuseas, sangramento e eventos adversos precoces. Alta para fases posteriores exige estabilidade.",
  frase_ouro: "Fase I é o amortecedor entre anestesia e segurança fisiológica."
},
{
  id: "tsa-elite-008",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Bloqueios periféricos",
  tema: "Artroplastia de joelho",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Após artroplastia total de joelho com bloqueio femoral isolado, o paciente acorda com dor importante em região posterior do joelho e fossa poplítea. Qual território provavelmente não foi adequadamente coberto?",
  alternativas: {
    A: "Nervo obturador.",
    B: "Nervo femoral.",
    C: "Nervo ciático.",
    D: "Nervo cutâneo femoral lateral."
  },
  resposta: "C",
  comentario: "A região posterior do joelho recebe contribuição importante do nervo ciático, especialmente por seus ramos tibiais. Bloqueio femoral isolado cobre bem componente anterior, mas pode falhar na dor posterior.",
  frase_ouro: "Joelho operado dói na frente e atrás; femoral sozinho não cobre tudo."
},
{
  id: "tsa-elite-009",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Medicina perioperatória",
  tema: "Medicações pré-operatórias",
  area: "Medicina Perioperatória",
  dificuldade: "muito difícil",
  pergunta: "Paciente diabético tipo 1, hipertenso, coronariopata com stent farmacológico antigo e em uso de beta-bloqueador, AAS, estatina e insulina NPH fará cirurgia eletiva pela manhã. Qual orientação é mais adequada?",
  alternativas: {
    A: "Suspender beta-bloqueador na véspera.",
    B: "Suspender estatina por risco de rabdomiólise.",
    C: "Reduzir a dose matinal de NPH, mantendo estratégia para evitar hipoglicemia e cetose.",
    D: "Suspender toda insulina no dia da cirurgia."
  },
  resposta: "C",
  comentario: "No diabético tipo 1, suspender completamente insulina aumenta risco de cetose. A NPH matinal costuma ser reduzida, com monitorização glicêmica e ajuste conforme jejum/cirurgia. Beta-bloqueador e estatina geralmente são mantidos.",
  frase_ouro: "Diabético tipo 1 em jejum ainda precisa de insulina basal."
},
{
  id: "tsa-elite-010",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Farmacologia cardiovascular",
  tema: "Amiodarona",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  pergunta: "Paciente com taquiarritmia ventricular estável será tratado com amiodarona intravenosa. Qual condição representa contraindicação importante ao uso sem suporte de marcapasso?",
  alternativas: {
    A: "Hipotireoidismo antigo controlado.",
    B: "Bloqueio atrioventricular avançado.",
    C: "História de náusea com opioide.",
    D: "Uso prévio de estatina."
  },
  resposta: "B",
  comentario: "A amiodarona pode deprimir condução nodal e agravar bradicardia ou bloqueios de condução. Bloqueio AV avançado sem suporte de marcapasso é contraindicação relevante. Alterações tireoidianas importam no uso crônico, mas não são o ponto mais agudo aqui.",
  frase_ouro: "Amiodarona trata arritmia, mas pode piorar condução já doente."
},
{
  id: "tsa-elite-011",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Monitorização da profundidade anestésica",
  tema: "BIS",
  area: "Monitorização",
  dificuldade: "muito difícil",
  pergunta: "Durante anestesia geral, o BIS permanece em torno de 60. Qual interpretação é mais correta?",
  alternativas: {
    A: "Garante imobilidade à incisão.",
    B: "Equivale a 60% de chance de estar acordado.",
    C: "Relaciona-se a baixa probabilidade de lembrança explícita intraoperatória em anestesia adequada.",
    D: "Substitui analgesia e bloqueio neuromuscular."
  },
  resposta: "C",
  comentario: "O BIS é índice processado do EEG associado à hipnose. Valores entre 40 e 60 são usualmente compatíveis com baixa probabilidade de consciência explícita. Ele não mede analgesia, resposta autonômica nem bloqueio motor.",
  frase_ouro: "BIS mede hipnose processada; não mede dor nem movimento."
},
{
  id: "tsa-elite-012",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Isquemia miocárdica",
  tema: "Pressão diastólica aórtica",
  area: "Cardiovascular",
  dificuldade: "muito difícil",
  pergunta: "Paciente coronariopata sob anestesia geral e peridural apresenta PA 78/40 mmHg, FC 70 bpm e supradesnivelamento de ST. Não há hipoxemia. Qual objetivo hemodinâmico imediato melhor melhora a oferta coronariana?",
  alternativas: {
    A: "Aumentar pressão diastólica aórtica.",
    B: "Reduzir a frequência para menos de 40 bpm.",
    C: "Reduzir hematócrito com cristaloide.",
    D: "Induzir vasodilatação sistêmica profunda."
  },
  resposta: "A",
  comentario: "A perfusão coronariana do ventrículo esquerdo ocorre predominantemente na diástole. Hipotensão diastólica reduz gradiente de perfusão coronariana, especialmente em coronariopatas. Restaurar pressão diastólica é prioridade.",
  frase_ouro: "Coronária esquerda perfunde na diástole; diastólica baixa é isquemia esperando acontecer."
},
{
  id: "tsa-elite-013",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Fast-track",
  tema: "Alta direta e NVPO",
  area: "Ambulatorial / Remoto / Especialidades",
  dificuldade: "muito difícil",
  pergunta: "Um centro ambulatorial adota alta direta da sala cirúrgica para fase posterior de recuperação em pacientes selecionados. Qual complicação pode aumentar se a fase inicial de vigilância for abreviada em excesso?",
  alternativas: {
    A: "Náuseas e vômitos detectados mais tardiamente na fase seguinte.",
    B: "Redução universal da dor tardia.",
    C: "Eliminação completa de retenção urinária.",
    D: "Ausência de necessidade de critérios objetivos de alta."
  },
  resposta: "A",
  comentario: "Protocolos fast-track reduzem tempo de permanência, mas dependem de seleção adequada, anestesia de curta duração e controle de dor/NVPO. A fase I não deve ser abolida sem critérios, pois eventos iniciais podem aparecer na fase seguinte.",
  frase_ouro: "Fast-track não é pular segurança; é provar que ela já foi atingida."
},
{
  id: "tsa-elite-014",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Toxicidade por anestésico local",
  tema: "Ventilação e acidose",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Após bloqueio axilar com ropivacaína, paciente convulsiona. A convulsão é controlada e inicia-se ventilação sob máscara. Qual benefício fisiológico da ventilação adequada nesse contexto?",
  alternativas: {
    A: "Aumentar aprisionamento iônico neuronal.",
    B: "Reduzir acidose e hipercapnia, diminuindo fração ionizada intracelular e toxicidade.",
    C: "Aumentar absorção do anestésico no plexo.",
    D: "Substituir a necessidade de emulsão lipídica em toxicidade cardiovascular."
  },
  resposta: "B",
  comentario: "Acidose e hipercapnia pioram toxicidade por anestésico local, aumentando fração ionizada e ligação aos canais de sódio. Ventilação adequada ajuda a corrigir pH e reduzir gravidade da toxicidade, mas não substitui tratamento específico quando indicado.",
  frase_ouro: "Na LAST, hipóxia, hipercapnia e acidose jogam a favor do anestésico local."
},
{
  id: "tsa-elite-015",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Bloqueadores neuromusculares",
  tema: "Interações medicamentosas",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  pergunta: "Após anestesia com rocurônio e agente volátil, paciente mantém bloqueio neuromuscular mais prolongado que o esperado. Qual fator intraoperatório pode potencializar bloqueadores não despolarizantes?",
  alternativas: {
    A: "Anestésicos inalatórios voláteis.",
    B: "Oxigênio a 100%.",
    C: "Ondansetrona.",
    D: "Aquecimento ativo."
  },
  resposta: "A",
  comentario: "Anestésicos voláteis potencializam bloqueadores neuromusculares não despolarizantes, por efeitos na junção neuromuscular e na excitabilidade muscular. Hipotermia e distúrbios eletrolíticos também podem prolongar bloqueio.",
  frase_ouro: "Volátil aprofunda anestesia e também pode aprofundar bloqueio."
},
{
  id: "tsa-elite-016",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Obstetrícia",
  tema: "Cardiomiopatia periparto",
  area: "Obstetrícia",
  dificuldade: "muito difícil",
  pergunta: "Puérpera 12 horas após cesariana evolui com fadiga, hipotensão, taquicardia, extremidades frias e edemaciadas. Após bolus de fluido não melhora. PVC está elevada e débito cardíaco reduzido. Qual diagnóstico é mais provável?",
  alternativas: {
    A: "Hipovolemia pura.",
    B: "Cardiomiopatia periparto.",
    C: "Bloqueio espinhal residual.",
    D: "Ansiedade pós-operatória."
  },
  resposta: "B",
  comentario: "Hipotensão com PVC elevada, baixo débito e sinais congestivos em puérpera sugere falência cardíaca, incluindo cardiomiopatia periparto. A ausência de resposta a fluidos e a congestão afastam hipovolemia pura.",
  frase_ouro: "Na puérpera em choque, PVC alta e baixo débito apontam para bomba, não para volume."
},
{
  id: "tsa-elite-017",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Analgesia pós-operatória",
  tema: "PCA com opioide",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Paciente em PCA com morfina apresenta depressão respiratória 12 horas após laparotomia. A prescrição incluía bolus, intervalo de bloqueio, limite de 4 horas e infusão contínua basal. Qual componente mais aumenta risco de depressão respiratória tardia?",
  alternativas: {
    A: "Dose de bolus isolada.",
    B: "Infusão contínua basal.",
    C: "Intervalo de bloqueio curto apenas.",
    D: "Ausência de antiemético."
  },
  resposta: "B",
  comentario: "A infusão basal contínua de opioide aumenta risco de acúmulo e depressão respiratória, especialmente em pacientes sensíveis, idosos, com apneia do sono ou uso concomitante de sedativos. PCA sem basal é mais segura em muitos contextos.",
  frase_ouro: "Na PCA, infusão basal transforma analgesia sob demanda em opioide contínuo."
},
{
  id: "tsa-elite-018",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Dexmedetomidina",
  tema: "Hipertensão inicial",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  pergunta: "Durante sedação com dose de ataque elevada de dexmedetomidina, paciente apresenta hipertensão arterial associada a bradicardia. Qual mecanismo explica melhor esse fenômeno inicial?",
  alternativas: {
    A: "Bloqueio muscarínico cardíaco.",
    B: "Agonismo alfa-2 pós-sináptico periférico com vasoconstrição inicial.",
    C: "Antagonismo beta-1.",
    D: "Liberação maciça de histamina."
  },
  resposta: "B",
  comentario: "Doses de ataque rápidas ou altas de dexmedetomidina podem ativar receptores alfa-2 periféricos pós-sinápticos, gerando vasoconstrição e hipertensão inicial, associada a bradicardia reflexa. Depois predomina efeito simpaticolítico central.",
  frase_ouro: "Dexmedetomidina pode começar apertando vaso antes de desligar simpático."
},
{
  id: "tsa-elite-019",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Proteção renal",
  tema: "Isquemia-reperfusão renal",
  area: "Renal / Endócrino / Metabólico",
  dificuldade: "muito difícil",
  pergunta: "Após clampeamento suprarrenal prolongado de aorta, paciente apresenta oligúria e urina escura no intraoperatório. Qual medida tem racional fisiológico relacionado à redução de edema celular e fluxo tubular em lesão isquêmica?",
  alternativas: {
    A: "Manitol.",
    B: "Dose renal de dopamina.",
    C: "Restrição absoluta de volume.",
    D: "Furosemida para inibir prostaglandinas renais."
  },
  resposta: "A",
  comentario: "O manitol pode atuar como osmótico, reduzindo edema celular e promovendo fluxo tubular, embora a proteção renal farmacológica seja limitada e contexto-dependente. A medida principal continua sendo perfusão renal adequada e correção de fatores hemodinâmicos.",
  frase_ouro: "No rim isquêmico, perfusão manda; manitol é adjuvante, não milagre."
},
{
  id: "tsa-elite-020",
  fonte: "TSA 2016 - inspirado",
  capitulo: "Cardiopatias congênitas",
  tema: "Tetralogia de Fallot",
  area: "Pediatria",
  dificuldade: "muito difícil",
  pergunta: "Lactente com Tetralogia de Fallot será induzido com sevoflurano. A indução inalatória é mais lenta que o esperado. Qual fisiologia explica melhor esse achado?",
  alternativas: {
    A: "Relação Qp/Qs menor que 1, reduzindo captação pulmonar do anestésico.",
    B: "Aumento do fluxo pulmonar efetivo.",
    C: "Ausência de shunt intracardíaco.",
    D: "Aumento da ventilação alveolar relativa ao fluxo pulmonar."
  },
  resposta: "A",
  comentario: "Na Tetralogia de Fallot, há redução do fluxo pulmonar e shunt direita-esquerda. Para anestésicos inalatórios, menor fluxo pulmonar efetivo reduz a captação e torna a indução mais lenta. Com agentes venosos, o shunt pode acelerar chegada ao cérebro.",
  frase_ouro: "Na Fallot, menos sangue passando pelo pulmão significa indução inalatória mais lenta."
},
{
  id: "tsa-photo-elite-021",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Náuseas e vômitos perioperatórios",
  tema: "Mecanismo dos antieméticos",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  pergunta: "Sobre o mecanismo de ação dos fármacos utilizados para profilaxia de náuseas e vômitos perioperatórios, assinale a alternativa correta:",
  alternativas: {
    A: "A ondansetrona atua por agonismo parcial dos receptores 5-HT3 na zona gatilho quimiorreceptora.",
    B: "O droperidol exerce efeito antiemético principalmente por antagonismo dopaminérgico D2, embora seu uso exija atenção ao prolongamento do intervalo QT.",
    C: "A dexametasona tem efeito antiemético exclusivamente por antagonismo competitivo dos receptores NK1.",
    D: "A metoclopramida é mais eficaz como profilaxia isolada universal por antagonismo seletivo dos receptores muscarínicos centrais."
  },
  resposta: "B",
  comentario: "Miller e Yao descrevem a NVPO como fenômeno multifatorial, envolvendo vias serotoninérgicas, dopaminérgicas, histaminérgicas, muscarínicas e substância P/NK1. O droperidol é butirofenona com ação antiemética importante por antagonismo D2, mas pode prolongar QT. Ondansetrona é antagonista 5-HT3, não agonista. Dexametasona tem mecanismo multifatorial, não NK1 seletivo. Metoclopramida tem antagonismo D2 e efeito procinético, mas não é a melhor profilaxia isolada em alto risco.",
  frase_ouro: "NVPO difícil se previne fechando várias portas da via emética, não insistindo em uma fechadura só."
},
{
  id: "tsa-photo-elite-022",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Fisiologia ocular",
  tema: "Músculo ciliar",
  area: "Farmacologia / Oftalmologia",
  dificuldade: "muito difícil",
  pergunta: "Sobre o músculo ciliar e sua relevância farmacológica para a anestesia, é correto afirmar:",
  alternativas: {
    A: "A contração do músculo ciliar é mediada principalmente por estímulo simpático alfa-1, levando à acomodação para longe.",
    B: "O músculo ciliar é inervado por fibras parassimpáticas muscarínicas, e sua contração relaxa as zônulas, favorecendo acomodação para perto.",
    C: "O bloqueio muscarínico sistêmico provoca contração do músculo ciliar e miose intensa.",
    D: "A atividade colinérgica relaxa o músculo ciliar e aumenta a tensão zonular, reduzindo o diâmetro anteroposterior do cristalino."
  },
  resposta: "B",
  comentario: "A acomodação para perto depende da contração do músculo ciliar por estímulo parassimpático muscarínico. Essa contração relaxa as fibras zonulares, permitindo que o cristalino fique mais convexo. Antimuscarínicos, como atropina e escopolamina, podem causar cicloplegia e midríase, justificando visão turva como efeito adverso.",
  frase_ouro: "Muscarínico contrai músculo ciliar; antimuscarínico rouba a acomodação e embaça o mundo."
},
{
  id: "tsa-photo-elite-023",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Hemorragia subaracnoidea",
  tema: "Hunt-Hess e Fisher",
  area: "Neuroanestesia",
  dificuldade: "muito difícil",
  pergunta: "Mulher de 31 anos, portadora de MAV conhecida, chega confusa, sonolenta, com hemiparesia direita. TC mostra hemorragia subaracnoidea com sangue difuso espesso nas cisternas da base e pequena quantidade de sangue intraventricular. Qual interpretação é mais adequada?",
  alternativas: {
    A: "Hunt-Hess I e Fisher I, pois a presença de déficit focal não influencia a classificação clínica.",
    B: "Hunt-Hess III ou IV, conforme nível de consciência, e Fisher IV pela presença de sangue intraventricular.",
    C: "Hunt-Hess V e Fisher II, pois qualquer hemorragia por MAV equivale a coma profundo.",
    D: "Hunt-Hess II e Fisher I, pois a classificação de Fisher considera apenas hidrocefalia."
  },
  resposta: "B",
  comentario: "A classificação de Hunt-Hess é clínica e valoriza cefaleia, rigidez de nuca, déficit neurológico e nível de consciência. Sonolência/confusão com déficit focal sugere grau III ou IV dependendo da profundidade do rebaixamento. Fisher avalia sangue na TC e risco de vasoespasmo; sangue intraventricular ou intracerebral coloca o paciente no grupo IV na classificação clássica.",
  frase_ouro: "Hunt-Hess olha o paciente; Fisher olha o sangue na tomografia."
},
{
  id: "tsa-photo-elite-024",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Fisiologia fetal",
  tema: "Curva de dissociação da hemoglobina",
  area: "Obstetrícia / Fisiologia",
  dificuldade: "muito difícil",
  pergunta: "Em relação à curva de dissociação da oxi-hemoglobina fetal, assinale a alternativa correta:",
  alternativas: {
    A: "A hemoglobina fetal apresenta desvio da curva para a direita, facilitando liberação placentária de oxigênio para a mãe.",
    B: "A hemoglobina fetal tem menor afinidade pelo oxigênio por se ligar mais intensamente ao 2,3-DPG.",
    C: "A hemoglobina fetal apresenta desvio para a esquerda, devido à menor interação com 2,3-DPG, favorecendo captação de oxigênio na placenta.",
    D: "A curva fetal é idêntica à adulta, sendo a transferência placentária determinada apenas pelo débito cardíaco fetal."
  },
  resposta: "C",
  comentario: "A hemoglobina fetal tem maior afinidade pelo oxigênio que a adulta, com curva desviada para a esquerda. Isso ocorre por menor ligação ao 2,3-DPG, facilitando captação de oxigênio em ambiente placentário de menor PO2. Esse conceito é central na fisiologia fetal descrita em Miller e Yao.",
  frase_ouro: "Hb fetal segura oxigênio com mais afinidade para vencer a baixa PO2 da placenta."
},
{
  id: "tsa-photo-elite-025",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Sepse e disfunção orgânica",
  tema: "SOFA",
  area: "Emergências / Crítico",
  dificuldade: "muito difícil",
  pergunta: "A avaliação de disfunção orgânica pelo SOFA inclui variáveis respiratória, cardiovascular, hepática, coagulação, renal e neurológica. Qual alternativa contém um critério que pertence ao SOFA?",
  alternativas: {
    A: "Frequência respiratória maior ou igual a 22 irpm.",
    B: "Diurese menor que 500 mL/dia.",
    C: "Proteína C reativa maior que 100 mg/L.",
    D: "Pressão intracraniana maior que 20 mmHg."
  },
  resposta: "B",
  comentario: "O SOFA avalia PaO2/FiO2, plaquetas, bilirrubina, pressão/vasopressor, escala de Glasgow, creatinina e diurese. FR ≥ 22 faz parte do qSOFA, não do SOFA completo. PIC e PCR não são componentes do escore. O componente renal do SOFA inclui creatinina e diurese.",
  frase_ouro: "SOFA mede órgão falhando; qSOFA é triagem rápida à beira-leito."
},
{
  id: "tsa-photo-elite-026",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Ultrassom pulmonar",
  tema: "Linhas B e síndrome intersticial",
  area: "POCUS / Respiratório",
  dificuldade: "muito difícil",
  pergunta: "No pós-operatório imediato, paciente evolui com hipoxemia. USG pulmonar mostra múltiplos artefatos verticais hiperecogênicos, originados da linha pleural, que alcançam o fim da tela e apagam as linhas A, bilateralmente. Esse achado é mais compatível com:",
  alternativas: {
    A: "Pneumotórax hipertensivo.",
    B: "Síndrome intersticial pulmonar.",
    C: "Pulmão normalmente aerado.",
    D: "Intubação seletiva direita."
  },
  resposta: "B",
  comentario: "Linhas B múltiplas representam artefatos verticais associados a espessamento intersticial ou aumento de água pulmonar extravascular. Podem aparecer em edema pulmonar cardiogênico, SDRA, pneumonia intersticial e contusão, conforme distribuição e contexto. Pneumotórax tende a cursar com ausência de lung sliding, ausência de linhas B e possível lung point.",
  frase_ouro: "Linha B é o pulmão perdendo ar para líquido ou interstício."
},
{
  id: "tsa-photo-elite-027",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Bloqueios periféricos",
  tema: "Bloqueio axilar e osteótomos do antebraço",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Paciente com fratura diafisária do rádio será submetido à osteossíntese sob bloqueio de plexo braquial por via axilar. Para anestesia adequada do rádio e cobertura cirúrgica do antebraço lateral, qual nervo é especialmente relevante além dos ramos terminais frequentemente visualizados ao redor da artéria axilar?",
  alternativas: {
    A: "Nervo musculocutâneo, que pode estar fora da bainha neurovascular axilar.",
    B: "Nervo frênico, por inervar o periósteo radial proximal.",
    C: "Nervo obturador, por contribuir para a face lateral do antebraço.",
    D: "Nervo laríngeo recorrente, por conter fibras simpáticas periosteais."
  },
  resposta: "A",
  comentario: "No bloqueio axilar, os nervos mediano, ulnar e radial costumam estar próximos da artéria axilar. O musculocutâneo frequentemente já saiu para o plano entre bíceps e coracobraquial, devendo ser bloqueado separadamente. Ele contribui para sensibilidade lateral do antebraço via nervo cutâneo lateral do antebraço.",
  frase_ouro: "No axilar, esquecer o musculocutâneo é deixar o antebraço lateral acordado."
},
{
  id: "tsa-photo-elite-028",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Anestesia regional guiada por ultrassom",
  tema: "Neuroestimulação e segurança",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Durante bloqueio de plexo lombar guiado por USG e neuroestimulador a 0,5 mA, há resposta motora compatível, mas a ponta da agulha não é visualizada com segurança. Qual conduta é mais apropriada?",
  alternativas: {
    A: "Injetar 5 mL de anestésico local para abrir o plano e identificar a ponta.",
    B: "Avançar até desaparecer a resposta motora, pois ausência de resposta confirma segurança.",
    C: "Recuar, otimizar imagem e só injetar quando a ponta da agulha estiver claramente identificada em local seguro.",
    D: "Reduzir a corrente para 0,1 mA e injetar se a resposta persistir."
  },
  resposta: "C",
  comentario: "Yao e Miller enfatizam que ultrassom aumenta segurança quando a ponta da agulha e a dispersão do anestésico são visualizadas. Neuroestimulação é auxiliar, não substitui visualização. Injetar para localizar a ponta pode causar injeção intraneural, intravascular ou em plano perigoso, principalmente em bloqueios profundos.",
  frase_ouro: "Se você não vê a ponta da agulha, você não sabe onde está injetando."
},
{
  id: "tsa-photo-elite-029",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Anestesia obstétrica",
  tema: "Tromboembolismo pulmonar no puerpério",
  area: "Obstetrícia",
  dificuldade: "muito difícil",
  pergunta: "Puérpera no primeiro dia após cesariana apresenta dispneia súbita, taquicardia, hipotensão, hipoxemia e ECG com sinais de sobrecarga direita. Qual alteração fisiológica da gestação favorece esse quadro?",
  alternativas: {
    A: "Redução da proteína S livre e aumento global de fatores pró-coagulantes.",
    B: "Aumento da fibrinólise e redução de fibrinogênio.",
    C: "Redução do volume plasmático e hemoconcentração fisiológica intensa.",
    D: "Redução da compressão venosa ilíaco-cava pelo útero gravídico."
  },
  resposta: "A",
  comentario: "Gestação e puerpério são estados de hipercoagulabilidade, com aumento de fatores pró-coagulantes, elevação do fibrinogênio, redução funcional de proteína S e redução da fibrinólise. Somam-se estase venosa e lesão endotelial, compondo a tríade de Virchow e aumentando risco de TEP.",
  frase_ouro: "No puerpério, a coagulação ainda está em modo proteção contra sangramento — e isso cobra risco trombótico."
},
{
  id: "tsa-photo-elite-030",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Anatomia de via aérea",
  tema: "Pregas vocais e aspiração",
  area: "Via aérea",
  dificuldade: "muito difícil",
  pergunta: "Em imagem endoscópica da laringe, uma estrutura localizada superiormente às pregas vocais verdadeiras é apontada. Sobre as pregas vestibulares/falsas cordas vocais, é correto afirmar:",
  alternativas: {
    A: "São as principais responsáveis pela fonação fina e controle do tom vocal.",
    B: "Localizam-se inferiormente às pregas vocais verdadeiras e delimitam a entrada da traqueia.",
    C: "Participam da proteção laríngea durante deglutição, mas não substituem o fechamento glótico verdadeiro.",
    D: "São estruturas cartilaginosas rígidas sem mucosa associada."
  },
  resposta: "C",
  comentario: "As pregas vestibulares ficam superiores às pregas vocais verdadeiras e ajudam na proteção laríngea, especialmente em fechamento supraglótico. A fonação fina depende principalmente das pregas vocais verdadeiras. Em anestesia, reconhecer anatomia glótica e supraglótica é essencial para intubação, broncoscopia e avaliação de aspiração.",
  frase_ouro: "Falsa corda ajuda a proteger; corda verdadeira fala e fecha a porta principal."
},
{
  id: "tsa-photo-elite-031",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Anestesia torácica",
  tema: "GOLD e risco pulmonar",
  area: "Respiratório / Torácica",
  dificuldade: "muito difícil",
  pergunta: "Paciente tabagista de 84 anos com DPOC será submetido à lobectomia. Espirometria: VEF1 82% do previsto e VEF1/CVF pós-broncodilatador de 0,80. Relata duas internações por exacerbação no último ano. Pela lógica da classificação GOLD atual, qual aspecto pesa mais para agrupamento sintomático/risco do que o VEF1 isolado?",
  alternativas: {
    A: "Apenas VEF1, pois exacerbações não entram na classificação clínica.",
    B: "História de exacerbações e carga sintomática, além da obstrução ao fluxo aéreo.",
    C: "Somente idade acima de 80 anos.",
    D: "Relação VEF1/CVF normal exclui risco perioperatório pulmonar."
  },
  resposta: "B",
  comentario: "A classificação GOLD moderna separa gravidade espirométrica de agrupamento clínico baseado em sintomas e exacerbações. Em avaliação perioperatória torácica, Miller destaca que VEF1 isolado não basta; DLCO, ppoFEV1, ppoDLCO, exercício, exacerbações e reserva funcional são relevantes.",
  frase_ouro: "No DPOC cirúrgico, VEF1 conta parte da história; exacerbação conta prognóstico."
},
{
  id: "tsa-photo-elite-032",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Oncologia e anestesia",
  tema: "Toxicidade da quimioterapia",
  area: "Medicina Perioperatória",
  dificuldade: "muito difícil",
  pergunta: "Paciente oncológico tratado com cisplatina será submetido a cirurgia abdominal. Qual efeito adverso é classicamente associado à cisplatina e deve ser lembrado na avaliação perioperatória?",
  alternativas: {
    A: "Fibrose pulmonar intersticial dose-dependente como toxicidade predominante.",
    B: "Cistite hemorrágica por metabólito urinário acroleína.",
    C: "Nefrotoxicidade e neuropatia periférica.",
    D: "Cardiomiopatia dilatada irreversível como efeito dose-limitante clássico."
  },
  resposta: "C",
  comentario: "Cisplatina é associada a nefrotoxicidade, ototoxicidade, neuropatia periférica, náuseas intensas e distúrbios eletrolíticos, como hipomagnesemia. Cistite hemorrágica é mais típica de ciclofosfamida/ifosfamida. Fibrose pulmonar lembra bleomicina. Cardiomiopatia dose-dependente é clássica das antraciclinas.",
  frase_ouro: "Cisplatina cobra rim, nervo, ouvido e eletrólitos; bleomicina cobra pulmão, antraciclina cobra coração."
},
{
  id: "tsa-photo-elite-033",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Neurofisiologia intraoperatória",
  tema: "Schwannoma vestibular",
  area: "Neuroanestesia",
  dificuldade: "muito difícil",
  pergunta: "Paciente de 27 anos será submetida à ressecção de schwannoma vestibular, com intenção de preservar audição e função do nervo facial. Qual combinação de monitorização é mais apropriada?",
  alternativas: {
    A: "Potencial evocado auditivo de tronco cerebral e eletromiografia facial.",
    B: "Potencial evocado visual e BIS.",
    C: "Potencial evocado somatossensorial de membros inferiores e TOF.",
    D: "NIRS cerebral bilateral e capnografia volumétrica."
  },
  resposta: "A",
  comentario: "Schwannoma vestibular envolve o VIII par craniano e se relaciona anatomicamente ao VII par. A preservação auditiva usa potencial evocado auditivo de tronco cerebral; a preservação facial exige EMG facial. Bloqueio neuromuscular deve ser evitado ou minimizado quando EMG é necessária.",
  frase_ouro: "No schwannoma vestibular, o anestésico precisa dormir o paciente sem calar o nervo facial."
},
{
  id: "tsa-photo-elite-034",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Farmacocinética",
  tema: "Taxa de extração hepática",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  pergunta: "Sobre a farmacocinética dos anestésicos venosos metabolizados no fígado, assinale a alternativa correta:",
  alternativas: {
    A: "Quanto maior a taxa de extração hepática, maior a dependência da depuração em relação ao fluxo sanguíneo hepático.",
    B: "Fármacos de alta extração têm depuração limitada principalmente pela saturação enzimática em concentrações clínicas.",
    C: "Fármacos de baixa extração são os mais dependentes do débito cardíaco para depuração.",
    D: "Redistribuição e depuração são sinônimos na recuperação após bolus único."
  },
  resposta: "A",
  comentario: "Fármacos de alta extração hepática têm depuração fluxo-dependente: se chega menos sangue ao fígado, menos fármaco é depurado. Fármacos de baixa extração são mais dependentes da capacidade metabólica intrínseca e da fração livre. A recuperação após bolus único frequentemente decorre de redistribuição, não de eliminação.",
  frase_ouro: "Alta extração: quem manda na depuração é o fluxo que entrega a droga ao fígado."
},
{
  id: "tsa-photo-elite-035",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Monitorização cerebral",
  tema: "EEG e idade",
  area: "Monitorização",
  dificuldade: "muito difícil",
  pergunta: "Sobre alterações do EEG relacionadas à idade e interpretação de monitores de profundidade anestésica, assinale a alternativa correta:",
  alternativas: {
    A: "O EEG do lactente tem assinatura espectral idêntica ao adulto quando ajustado pela CAM do halogenado.",
    B: "No idoso, há tendência a menor potência eletroencefalográfica e maior vulnerabilidade a supressão com anestésicos.",
    C: "Em crianças menores de 3 meses, predominam ritmos alfa frontais robustos semelhantes aos adultos anestesiados.",
    D: "Índices processados são igualmente validados em neonatos, lactentes, adultos e idosos."
  },
  resposta: "B",
  comentario: "O EEG varia com maturação e envelhecimento. Lactentes pequenos não apresentam padrão adulto; monitores processados foram desenvolvidos sobretudo em adultos e têm limitações pediátricas. Idosos tendem a apresentar menor potência e maior sensibilidade cerebral a anestésicos, com risco de supressão e delirium.",
  frase_ouro: "EEG não envelhece em linha reta: lactente e idoso exigem régua própria."
},
{
  id: "tsa-photo-elite-036",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Swan-Ganz e hemodinâmica",
  tema: "Transplante hepático",
  area: "Gastro / Hepato / Transplantes",
  dificuldade: "muito difícil",
  pergunta: "Em transplante hepático, cateter de artéria pulmonar mostra PVC 10 mmHg, POAP 12 mmHg, PAP 25/12 mmHg, índice cardíaco elevado e SvO2 88%. Qual interpretação é mais coerente no cirrótico avançado?",
  alternativas: {
    A: "Baixo débito oculto com extração periférica extremamente aumentada.",
    B: "Estado hiperdinâmico com baixa extração sistêmica de oxigênio, comum na cirrose avançada.",
    C: "Choque cardiogênico com congestão pulmonar obrigatória.",
    D: "Hipovolemia grave, pois SvO2 elevada sempre indica baixo retorno venoso."
  },
  resposta: "B",
  comentario: "Cirróticos avançados frequentemente apresentam circulação hiperdinâmica: alto débito cardíaco, baixa resistência vascular sistêmica e SvO2 elevada por baixa extração relativa e shunts. Isso não significa obrigatoriamente perfusão microcirculatória normal. O contexto hemodinâmico deve ser interpretado de forma integrada.",
  frase_ouro: "Na cirrose, SvO2 alta pode ser excesso de fluxo mal distribuído, não garantia de perfusão perfeita."
},
{
  id: "tsa-photo-elite-037",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Ventilação monopulmonar",
  tema: "CPAP no pulmão não ventilado",
  area: "Respiratório / Torácica",
  dificuldade: "muito difícil",
  pergunta: "Durante segmentectomia por videotoracoscopia em ventilação monopulmonar, ocorre dessaturação persistente apesar de FiO2 100%, tubo bem posicionado e estabilidade hemodinâmica. Decide-se aplicar CPAP no pulmão não ventilado. Qual cuidado é mais apropriado?",
  alternativas: {
    A: "Aplicar CPAP elevado, acima de 15 cmH2O, para abolir completamente o shunt, independentemente do campo.",
    B: "Aplicar CPAP baixo com oxigênio no pulmão não ventilado, avaliando melhora da SpO2 e impacto no campo cirúrgico.",
    C: "Aplicar CPAP no pulmão ventilado e desconectar o pulmão não ventilado.",
    D: "Evitar broncoscopia, pois tubo bem posicionado inicialmente não se desloca durante toracoscopia."
  },
  resposta: "B",
  comentario: "CPAP no pulmão não ventilado pode reduzir shunt e melhorar oxigenação, mas pressões altas atrapalham o campo cirúrgico. Antes disso, deve-se confirmar posição do tubo, otimizar ventilação do pulmão dependente e ajustar PEEP. A estratégia é sempre balancear oxigenação e exposição cirúrgica.",
  frase_ouro: "CPAP no pulmão operado é remédio para shunt, mas dose alta vira inimigo do cirurgião."
},
{
  id: "tsa-photo-elite-038",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Diabetes mellitus",
  tema: "Mecanismos dos antidiabéticos",
  area: "Renal / Endócrino / Metabólico",
  dificuldade: "muito difícil",
  pergunta: "Qual alternativa associa corretamente uma medicação para diabetes mellitus ao seu mecanismo principal?",
  alternativas: {
    A: "Acarbose — inibição da alfa-glicosidase intestinal, reduzindo absorção de carboidratos complexos.",
    B: "Metformina — estimulação direta da secreção pancreática de insulina por fechamento de canais KATP.",
    C: "Sulfonilureias — aumento da excreção urinária de glicose por inibição de SGLT2.",
    D: "Inibidores de DPP-4 — antagonismo direto do receptor de insulina no tecido adiposo."
  },
  resposta: "A",
  comentario: "Acarbose inibe alfa-glicosidases intestinais, retardando digestão/absorção de carboidratos. Metformina reduz produção hepática de glicose e melhora sensibilidade à insulina; sulfonilureias fecham canais KATP na célula beta; inibidores SGLT2 aumentam glicosúria; inibidores DPP-4 aumentam efeito incretínico.",
  frase_ouro: "No diabetes, saber a droga é pouco; a prova quer o ponto do metabolismo onde ela aperta."
},
{
  id: "tsa-photo-elite-039",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Obesidade e consciência intraoperatória",
  tema: "Propofol e redistribuição",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  pergunta: "Paciente com obesidade mórbida recebe dose única de propofol para indução, calculada de forma inadequada, e apresenta sinais de consciência durante período de manipulação de via aérea difícil. Qual fator farmacocinético contribui para esse risco?",
  alternativas: {
    A: "Baixa lipossolubilidade do propofol, impedindo distribuição tecidual.",
    B: "Rápida redistribuição do propofol a partir do compartimento central para tecidos periféricos, podendo reduzir concentração cerebral após bolus isolado.",
    C: "Ausência de ligação do propofol a proteínas plasmáticas.",
    D: "Metabolismo exclusivamente renal do propofol, acelerado na obesidade."
  },
  resposta: "B",
  comentario: "Propofol é altamente lipossolúvel e redistribui rapidamente. Em via aérea difícil, se houver intervalo prolongado entre indução e manutenção anestésica adequada, a concentração cerebral pode cair. Em obesos, dose, massa corporal usada no cálculo, débito cardíaco e distribuição devem ser considerados para evitar sub ou superdosagem.",
  frase_ouro: "Bolus de propofol não compra tempo infinito; via aérea difícil pode durar mais que a hipnose."
},
{
  id: "tsa-photo-elite-040",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Fitoterápicos",
  tema: "Interações perioperatórias",
  area: "Medicina Perioperatória",
  dificuldade: "muito difícil",
  pergunta: "Qual fitoterápico é classicamente associado a efeito sedativo/ansiolítico, potencialização de depressores do SNC e possível interferência com metabolismo hepático, sendo relevante na avaliação pré-anestésica?",
  alternativas: {
    A: "Ephedra.",
    B: "Valeriana.",
    C: "Echinacea.",
    D: "Ginkgo biloba."
  },
  resposta: "B",
  comentario: "Valeriana possui efeito sedativo e pode potencializar depressores do SNC, além de sintomas de abstinência com suspensão abrupta em uso crônico. Ephedra tem ação simpatomimética; ginkgo associa-se a sangramento por efeito plaquetário; echinacea pode ter implicações imunológicas/hepáticas.",
  frase_ouro: "Fitoterápico também é fármaco; no perioperatório, chá não é sinônimo de inofensivo."
},
{
  id: "tsa-photo-elite-041",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Trauma cranioencefálico pediátrico",
  tema: "PIC e PPC",
  area: "Neuroanestesia / Pediatria",
  dificuldade: "muito difícil",
  pergunta: "Criança de 4 anos, previamente hígida, vítima de TCE, apresenta Glasgow 8, respiração espontânea e sinais vitais estáveis. Sobre manejo de PIC e pressão de perfusão cerebral nessa faixa etária, assinale a alternativa correta:",
  alternativas: {
    A: "Hipotensão deve ser evitada agressivamente, pois reduz PPC e piora lesão secundária.",
    B: "Cetamina é absolutamente contraindicada em qualquer TCE por aumentar inevitavelmente PIC.",
    C: "Hiperventilação profilática intensa deve ser mantida por 24 horas em todo TCE moderado.",
    D: "PPC não tem relevância em crianças, pois a autorregulação cerebral é sempre preservada."
  },
  resposta: "A",
  comentario: "Miller e Yao enfatizam prevenção de lesão cerebral secundária: evitar hipotensão, hipóxia, hipercapnia importante, hipoglicemia/hiperglicemia extrema e hipertermia. Cetamina não é mais considerada absolutamente proibida quando ventilação e hemodinâmica são controladas. Hiperventilação intensa pode causar isquemia cerebral e deve ser reservada para herniação iminente.",
  frase_ouro: "No TCE pediátrico, a primeira neuroproteção é não deixar cair pressão nem oxigênio."
},
{
  id: "tsa-photo-elite-042",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Anestesia tumescente",
  tema: "Dose de lidocaína e absorção tardia",
  area: "Farmacologia / Regional",
  dificuldade: "muito difícil",
  pergunta: "Mulher de 70 kg realiza lipoaspiração com solução tumescente contendo lidocaína e epinefrina. Recebe 1.500 mL de solução com concentração total de 400 mg de lidocaína por 500 mL. Permanece assintomática na primeira hora de recuperação. Qual afirmação é mais correta?",
  alternativas: {
    A: "A ausência de sintomas na primeira hora exclui toxicidade sistêmica por lidocaína.",
    B: "A dose total recebida foi 1.200 mg, e a toxicidade pode ser tardia pela absorção lenta do tecido subcutâneo.",
    C: "Epinefrina acelera absorção sistêmica da lidocaína, antecipando sempre o pico para os primeiros 5 minutos.",
    D: "Lidocaína tumescente não entra na circulação sistêmica em quantidade relevante."
  },
  resposta: "B",
  comentario: "A solução contém 400 mg/500 mL; em 1.500 mL, a dose total é 1.200 mg. Na anestesia tumescente, a absorção da lidocaína é retardada pelo grande volume subcutâneo e pela epinefrina, com picos tardios. Portanto, observação curta não exclui toxicidade, especialmente com doses altas.",
  frase_ouro: "Na tumescente, a lidocaína pode cobrar a conta horas depois da sala parecer tranquila."
},
{
  id: "tsa-photo-elite-043",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Anestesia regional pediátrica",
  tema: "Bloqueio caudal e dose",
  area: "Pediatria / Regional",
  dificuldade: "muito difícil",
  pergunta: "Em criança submetida à correção de hérnia inguinal, planeja-se bloqueio caudal com anestésico local de longa duração. Qual princípio é mais adequado para reduzir risco de toxicidade sistêmica?",
  alternativas: {
    A: "Calcular dose total em mg/kg, aspirar, injetar fracionadamente e manter vigilância clínica.",
    B: "Usar sempre o mesmo volume do adulto, pois o espaço caudal dilui o anestésico.",
    C: "Ignorar epinefrina teste, pois injeção intravascular caudal é impossível.",
    D: "Associar múltiplos anestésicos locais em dose máxima de cada um isoladamente."
  },
  resposta: "A",
  comentario: "Em pediatria, dose máxima em mg/kg é crítica. Bloqueios caudais podem ter absorção sistêmica relevante. A injeção deve ser fracionada, com aspiração frequente e monitorização. Quando se combinam anestésicos locais, as toxicidades são aditivas; não se deve usar dose máxima de cada um.",
  frase_ouro: "Em criança, volume faz bloqueio; mg/kg faz segurança."
},
{
  id: "tsa-photo-elite-044",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Metabolismo e anestesia",
  tema: "Hipertermia maligna e diagnóstico diferencial",
  area: "Emergências / Crítico",
  dificuldade: "muito difícil",
  pergunta: "Durante anestesia com sevoflurano, paciente apresenta aumento progressivo do EtCO2, taquicardia, rigidez de masseter após succinilcolina e acidose. Temperatura central é 37,8 ºC. Qual interpretação é mais adequada?",
  alternativas: {
    A: "Hipertermia maligna só deve ser considerada após temperatura maior que 40 ºC.",
    B: "O aumento precoce e inexplicado do EtCO2 pode ser sinal inicial de hipertermia maligna, mesmo antes de hipertermia importante.",
    C: "Rigidez de masseter exclui hipertermia maligna se a temperatura estiver normal.",
    D: "A conduta inicial deve ser aprofundar sevoflurano para reduzir metabolismo muscular."
  },
  resposta: "B",
  comentario: "Hipertermia pode ser sinal tardio. EtCO2 elevado apesar de ventilação, rigidez, taquicardia, acidose e hipercalemia após exposição a halogenado/succinilcolina são sinais de alerta. O tratamento inclui suspender gatilhos, dantrolene, O2 100%, hiperventilação e correção de complicações.",
  frase_ouro: "Na hipertermia maligna, o capnógrafo costuma avisar antes do termômetro."
},
{
  id: "tsa-photo-elite-045",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Eletrofisiologia cardíaca",
  tema: "Marca-passo e eletrocautério",
  area: "Cardiovascular / Monitorização",
  dificuldade: "muito difícil",
  pergunta: "Paciente dependente de marca-passo será submetido a colectomia com cautério monopolar. Após indução, apresenta assistolia por inibição do comando do dispositivo. Qual mecanismo é mais provável?",
  alternativas: {
    A: "Interferência eletromagnética interpretada como atividade cardíaca pelo marca-passo, inibindo estímulo.",
    B: "Bloqueio permanente dos canais de sódio pelo etomidato.",
    C: "Supressão adrenal aguda impedindo condução atrioventricular.",
    D: "Aumento da sensibilidade miocárdica ao estímulo elétrico por fentanil."
  },
  resposta: "A",
  comentario: "Interferência eletromagnética por cautério pode ser interpretada pelo dispositivo como atividade cardíaca, levando à inibição de marca-passo em pacientes dependentes. Planejamento envolve avaliação do dispositivo, modo assíncrono quando indicado, desfibrilação externa disponível e posicionamento adequado da placa.",
  frase_ouro: "No dependente de marca-passo, cautério pode enganar o aparelho e silenciar o estímulo."
},
{
  id: "tsa-photo-elite-046",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Ventilação mecânica",
  tema: "Auto-PEEP e curva fluxo-tempo",
  area: "Respiratório / Torácica",
  dificuldade: "muito difícil",
  pergunta: "Paciente sob anestesia geral apresenta aumento progressivo da pressão de pico, hipotensão e curva fluxo-tempo mostrando que o fluxo expiratório não retorna a zero antes do próximo ciclo. Qual ajuste ventilatório é mais apropriado?",
  alternativas: {
    A: "Aumentar frequência respiratória para eliminar CO2 mais rapidamente.",
    B: "Aumentar tempo expiratório, reduzindo frequência respiratória e/ou relação I:E.",
    C: "Aumentar volume corrente para vencer a resistência expiratória.",
    D: "Reduzir totalmente FiO2 para diminuir aprisionamento aéreo."
  },
  resposta: "B",
  comentario: "Fluxo expiratório que não retorna a zero indica esvaziamento incompleto e auto-PEEP, comum em broncoespasmo/DPOC. Isso aumenta pressão intratorácica, reduz retorno venoso e causa hipotensão. O tratamento ventilatório é aumentar tempo expiratório, reduzir frequência, tratar broncoespasmo e evitar hiperinsuflação.",
  frase_ouro: "Se o fluxo expiratório não zerou, o próximo volume entra em um pulmão que ainda não esvaziou."
},
{
  id: "tsa-photo-elite-047",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Neuroanestesia",
  tema: "Monitorização para cirurgia de coluna",
  area: "Neuroanestesia",
  dificuldade: "muito difícil",
  pergunta: "Durante correção de escoliose, queda abrupta de potenciais evocados motores ocorre após manobra cirúrgica. PAM está 58 mmHg, Hb 8 g/dL, temperatura 35 ºC e anestesia inalatória foi aumentada recentemente. Qual conduta inicial é mais apropriada?",
  alternativas: {
    A: "Ignorar se os potenciais somatossensoriais ainda estiverem preservados.",
    B: "Aumentar bloqueador neuromuscular para melhorar qualidade dos potenciais motores.",
    C: "Corrigir fatores fisiológicos e anestésicos: aumentar PAM, otimizar Hb/oxigenação/temperatura, reduzir interferência anestésica e avisar o cirurgião.",
    D: "Reduzir PAM para diminuir sangramento medular."
  },
  resposta: "C",
  comentario: "MEP é sensível a isquemia medular, anestésicos, hipotensão, anemia, hipotermia e bloqueio neuromuscular. Queda de sinal exige resposta rápida e coordenada: otimizar perfusão medular e oferta de O2, revisar anestesia e solicitar reversão/pausa de manobra cirúrgica se necessário.",
  frase_ouro: "Potencial motor que cai é medula pedindo fluxo, oxigênio e menos interferência."
},
{
  id: "tsa-photo-elite-048",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Fisiologia respiratória",
  tema: "Shunt e relação V/Q",
  area: "Respiratório / Torácica",
  dificuldade: "muito difícil",
  pergunta: "Após extubação, paciente apresenta cianose central, esforço respiratório intenso e tórax silencioso à ausculta. Qual relação ventilação/perfusão melhor explica a hipoxemia se houver obstrução completa de vias aéreas em áreas ainda perfundidas?",
  alternativas: {
    A: "V/Q igual a infinito.",
    B: "V/Q maior que 1.",
    C: "V/Q aproximadamente zero.",
    D: "V/Q igual a 1."
  },
  resposta: "C",
  comentario: "Quando uma unidade pulmonar é perfundida, mas não ventilada, a relação V/Q tende a zero, caracterizando shunt. Em espaço morto, ocorre o oposto: ventilação sem perfusão, com V/Q tendendo ao infinito. Obstrução grave de via aérea com perfusão mantida gera shunt e hipoxemia importante.",
  frase_ouro: "Perfusão sem ventilação é shunt: V/Q caminha para zero."
},
{
  id: "tsa-photo-elite-049",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Dor crônica",
  tema: "Síndrome dolorosa complexa regional",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Mulher de 36 anos apresenta síndrome dolorosa complexa regional em mão esquerda, com dor intensa, alteração vasomotora e alodinia, refratária a tratamento medicamentoso inicial. Como parte de abordagem multimodal, qual bloqueio é mais coerente com a fisiopatologia simpaticamente mantida?",
  alternativas: {
    A: "Bloqueio do gânglio estrelado.",
    B: "Bloqueio do plexo cervical profundo.",
    C: "Bloqueio do nervo femoral.",
    D: "Injeção epidural lombar com corticoide."
  },
  resposta: "A",
  comentario: "A síndrome dolorosa complexa regional de membro superior pode ter componente simpaticamente mantido. O bloqueio do gânglio estrelado bloqueia a cadeia simpática cervicotorácica, podendo ser usado como parte de tratamento multimodal. A resposta ajuda inclusive na caracterização do componente simpático.",
  frase_ouro: "Dor regional complexa na mão com componente simpático aponta para o estrelado, não para o plexo cervical profundo."
},
{
  id: "tsa-photo-elite-050",
  fonte: "TSA difícil - inspirado / Miller-Yao",
  capitulo: "Cefaleia pós-punção dural",
  tema: "Prevenção",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  pergunta: "Qual medida está associada à redução do risco de cefaleia pós-punção dural em raquianestesia?",
  alternativas: {
    A: "Uso preferencial de agulha cortante tipo Quincke de maior calibre.",
    B: "Inserção de agulha cortante com o bisel paralelo ao eixo longitudinal das fibras durais.",
    C: "Manutenção obrigatória de decúbito dorsal por 24 horas após punção.",
    D: "Cafeína profilática rotineira antes da punção."
  },
  resposta: "B",
  comentario: "Agulhas menores e não cortantes reduzem CPPD. Quando se usa agulha cortante, orientar o bisel paralelo às fibras durais longitudinais reduz lesão transversal e vazamento liquórico. Repouso supino prolongado e cafeína profilática não são medidas preventivas consistentes.",
  frase_ouro: "Na punção dural, tamanho e desenho da agulha importam mais que repouso no leito."
}
,
{
  id: "tsa-ultra-001",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Avaliação funcional pré-ressecção pulmonar",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Homem de 68 anos, tabagista ativo, DPOC moderado e coronariopatia estável, será submetido à lobectomia superior direita por adenocarcinoma. Espirometria: VEF1 1,75 L, 58% do previsto; DLCO 46% do previsto. Cintilografia perfusional mostra que o pulmão direito contribui com 44% da perfusão total e o lobo a ser ressecado corresponde a aproximadamente 17% da perfusão total. Teste cardiopulmonar: VO2 pico 11 mL/kg/min. Considerando a estratificação de risco para ressecção pulmonar, a interpretação mais adequada é:",
  alternativas: {
    A: "O VEF1 absoluto acima de 1,5 L torna a lobectomia aceitável sem necessidade de integração com DLCO ou teste de exercício.",
    B: "O VO2 pico de 11 mL/kg/min sugere risco intermediário/alto, devendo pesar fortemente na decisão, mesmo com VEF1 aparentemente aceitável.",
    C: "A DLCO reduzida é irrelevante em lobectomia, pois prediz risco apenas em pneumonectomia.",
    D: "A cintilografia perfusional só é útil quando a ressecção planejada é pneumonectomia esquerda.",
    E: "O risco é baixo porque o lobo ressecado contribui com menos de 20% da perfusão total."
  },
  resposta: "B",
  comentario: "A prova difícil não pergunta apenas se o VEF1 'passa'. Em cirurgia torácica moderna, VEF1, DLCO, valores previstos pós-operatórios e capacidade funcional precisam ser integrados. DLCO baixa pode predizer complicações mesmo quando o VEF1 parece razoável. VO2 pico em torno de 10 a 15 mL/kg/min coloca o paciente em faixa de risco relevante; abaixo de 10 mL/kg/min o risco costuma ser proibitivo ou muito alto. A pegadinha é aceitar o VEF1 absoluto isoladamente e ignorar DLCO/VO2.",
  frase_ouro: "Na ressecção pulmonar, VEF1 sozinho é armadilha: DLCO e VO2 pico frequentemente dizem quem realmente vai tolerar perder parênquima."
},
{
  id: "tsa-ultra-002",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Escolha do dispositivo de isolamento pulmonar",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Paciente de 59 anos, com tumor endobrônquico obstruindo parcialmente o brônquio principal esquerdo a 1,5 cm da carina, será submetido à pneumonectomia esquerda. A equipe solicita isolamento pulmonar confiável, com mínima manipulação tumoral e possibilidade de broncoscopia intraoperatória. Qual conduta é mais apropriada?",
  alternativas: {
    A: "Tubo duplo lúmen esquerdo, pois o tubo esquerdo é preferido na maioria das cirurgias torácicas.",
    B: "Tubo duplo lúmen direito ou bloqueador brônquico seletivo, evitando posicionar componente brônquico no brônquio esquerdo comprometido.",
    C: "Máscara laríngea com bloqueador brônquico, pois reduz trauma de via aérea e permite pneumonectomia com campo adequado.",
    D: "Tubo simples convencional, pois a abertura pleural esquerda gera colapso pulmonar espontâneo suficiente.",
    E: "Tubo duplo lúmen esquerdo de menor calibre para ultrapassar parcialmente a lesão e manter ventilação seletiva."
  },
  resposta: "B",
  comentario: "O tubo duplo lúmen esquerdo é preferido de rotina, mas não quando o brônquio esquerdo está ocupado por tumor, distorcido, estenosado ou será o alvo da ressecção. Em pneumonectomia esquerda com lesão no brônquio principal esquerdo, deve-se evitar traumatizar ou obstruir o lado doente com o ramo brônquico do DLT esquerdo. DLT direito ou bloqueador brônquico são alternativas, escolhidas conforme anatomia, experiência e necessidade cirúrgica.",
  frase_ouro: "DLT esquerdo é o padrão; brônquio esquerdo doente é a exceção que derruba o padrão."
},
{
  id: "tsa-ultra-003",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Hipoxemia na ventilação monopulmonar",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Durante segmentectomia por VATS em decúbito lateral esquerdo, 20 minutos após iniciar ventilação monopulmonar direita, a SpO2 cai para 86% com FiO2 1,0. A pressão de platô do pulmão ventilado é 24 cmH2O, ETCO2 42 mmHg, pressão arterial estável. O tubo duplo lúmen havia sido confirmado antes do posicionamento, mas não após o decúbito lateral. Qual sequência inicial é mais adequada?",
  alternativas: {
    A: "Aplicar imediatamente CPAP de 10 cmH2O no pulmão não ventilado, pois essa é a intervenção mais eficaz e não prejudica o campo cirúrgico.",
    B: "Aumentar volume corrente para 10 mL/kg no pulmão ventilado, pois a hipoxemia decorre principalmente de hipoventilação alveolar.",
    C: "Confirmar posição do dispositivo com broncoscopia, recrutar o pulmão ventilado, ajustar PEEP individualizada e considerar CPAP baixo no pulmão não ventilado se persistir hipoxemia.",
    D: "Reduzir FiO2 para reativar vasoconstrição pulmonar hipóxica e diminuir shunt no pulmão não ventilado.",
    E: "Suspender imediatamente o anestésico inalatório, pois doses clínicas habituais abolirão a vasoconstrição pulmonar hipóxica."
  },
  resposta: "C",
  comentario: "Em hipoxemia na ventilação monopulmonar, o primeiro passo de prova é verificar causa mecânica: deslocamento de DLT/bloqueador é comum após mudança de posição. Depois entram manobras no pulmão ventilado: recrutamento, PEEP adequada, evitar atelectasia e hiperdistensão. CPAP baixo no pulmão não ventilado melhora oxigenação, mas pode atrapalhar campo cirúrgico; por isso não é automaticamente a primeira medida sem checar posição. Reduzir FiO2 é errado em dessaturação.",
  frase_ouro: "Na OLV, antes de filosofar sobre HPV, olhe o tubo com broncoscópio."
},
{
  id: "tsa-ultra-004",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Vasoconstrição pulmonar hipóxica",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Paciente em ventilação monopulmonar apresenta queda progressiva da PaO2 apesar de FiO2 1,0. O residente afirma que o sevoflurano a 0,8 CAM deve ser suspenso porque 'volátil sempre destrói a vasoconstrição pulmonar hipóxica'. Qual afirmação é mais correta?",
  alternativas: {
    A: "Todos os halogenados, mesmo em doses clínicas baixas, abolirão a HPV e devem ser substituídos por anestesia venosa total.",
    B: "A HPV é modulada por múltiplos fatores; doses clínicas usuais de voláteis podem ter efeito limitado, e a prioridade deve ser corrigir causas mecânicas, atelectasia e distribuição de ventilação/perfusão.",
    C: "A HPV piora a oxigenação durante OLV porque aumenta o fluxo para o pulmão não ventilado.",
    D: "A FiO2 elevada inibe completamente a HPV e, por isso, FiO2 1,0 é contraindicada na hipoxemia intraoperatória.",
    E: "A hipercapnia sempre melhora HPV e deve ser induzida como primeira medida para tratar hipoxemia."
  },
  resposta: "B",
  comentario: "A HPV desvia fluxo do pulmão hipóxico/não ventilado para o pulmão ventilado, reduzindo shunt. Halogenados podem inibir HPV em modelos experimentais, mas em concentrações clínicas usuais o impacto nem sempre é dominante. A conduta prática é integrada: posição do tubo, recrutamento, PEEP, débito cardíaco, pressão pulmonar, CPAP no pulmão não ventilado e comunicação com a cirurgia. O erro típico é transformar fisiologia em dogma absoluto.",
  frase_ouro: "HPV importa, mas hipoxemia em OLV costuma ser mais mecânica e distributiva do que 'culpa pura do sevo'."
},
{
  id: "tsa-ultra-005",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Massa mediastinal anterior",
  area: "Via aérea",
  dificuldade: "Muito difícil",
  pergunta: "Mulher de 24 anos com massa mediastinal anterior volumosa, ortopneia, estridor em decúbito dorsal e compressão traqueal distal de 65% na TC será submetida à biópsia. Ao deitar, apresenta piora da dispneia. Qual plano anestésico é mais seguro?",
  alternativas: {
    A: "Indução venosa em sequência rápida com rocurônio, pois o bloqueio neuromuscular reduz esforço e melhora complacência torácica.",
    B: "Indução inalatória em decúbito dorsal com ventilação sob máscara até plano profundo, seguida de intubação convencional.",
    C: "Manter ventilação espontânea, evitar perda abrupta de tônus de via aérea, planejar posição tolerada, ter broncoscopia rígida e estratégia de resgate cardiopulmonar disponíveis.",
    D: "Pré-oxigenação com CPAP e bloqueio neuromuscular profundo antes de manipular via aérea, pois o problema é apenas hipoxemia.",
    E: "Máscara laríngea como via aérea definitiva, pois a obstrução é distal e a ventilação supraglótica evita colapso traqueal."
  },
  resposta: "C",
  comentario: "Massa mediastinal com sintomas posturais e compressão importante é cenário de colapso de via aérea e/ou cardiovascular após anestesia geral, perda de tônus, PPV e bloqueio neuromuscular. A estratégia deve preservar ventilação espontânea enquanto possível, usar posição de menor sintoma, planejar broncoscopia rígida e resgate. A alternativa A é a clássica 'morte elegante': rápida, limpa e potencialmente irreversível.",
  frase_ouro: "Massa mediastinal sintomática não gosta de três coisas: supino, anestesia profunda e paralisia."
},
{
  id: "tsa-ultra-006",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Fístula broncopleural",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Paciente com fístula broncopleural direita pós-lobectomia evolui com escape aéreo importante, sepse controlada e necessidade de toracotomia para correção. Durante ventilação sob pressão positiva, há perda de volume corrente e dificuldade de ventilação. Qual estratégia anestésica tende a reduzir passagem de gás pela fístula?",
  alternativas: {
    A: "Aumentar PEEP global para manter a fístula fechada por pressão alveolar elevada.",
    B: "Isolar o pulmão acometido, ventilar preferencialmente o pulmão contralateral com menores pressões e evitar óxido nitroso.",
    C: "Usar ventilação com altos volumes correntes para compensar o vazamento através da fístula.",
    D: "Manter ventilação bilateral até abertura pleural, pois isolamento piora a relação ventilação/perfusão.",
    E: "Utilizar máscara laríngea para reduzir pressão traqueal e manter ventilação bilateral espontânea."
  },
  resposta: "B",
  comentario: "Na fístula broncopleural, quanto maior a pressão no lado acometido, maior o vazamento, pior a ventilação alveolar efetiva e maior o risco de contaminação. A lógica é isolar o lado doente, ventilar com menores pressões possíveis o pulmão saudável e evitar N2O. PEEP alta e volumes altos podem aumentar o fluxo pela fístula.",
  frase_ouro: "Fístula broncopleural é vazamento pressórico: isole o lado doente e não alimente o buraco."
},
{
  id: "tsa-ultra-007",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Pneumonectomia e manejo de fluidos",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Após pneumonectomia direita por neoplasia central, paciente chega à UTI extubado, normotenso, lactato 1,8 mmol/L e débito urinário limítrofe. O cirurgião solicita reposição vigorosa de cristaloide para 'proteger rim'. Qual resposta anestésica é mais adequada?",
  alternativas: {
    A: "Administrar cristaloide liberalmente, pois após pneumonectomia o pulmão remanescente recebe menor fluxo e está protegido de edema.",
    B: "Evitar excesso de fluido, avaliar perfusão global e considerar vasopressor/inotrópico conforme necessidade, pois edema pulmonar pós-pneumonectomia pode ser catastrófico.",
    C: "Manter balanço positivo de 30 mL/kg nas primeiras 6 horas, pois pneumonectomia reduz retorno venoso.",
    D: "Usar albumina como reposição liberal, pois coloide não contribui para edema pulmonar.",
    E: "Drenar continuamente o hemitórax operado sob sucção elevada para prevenir desvio mediastinal."
  },
  resposta: "B",
  comentario: "Após pneumonectomia, o pulmão remanescente recebe todo o débito cardíaco e é vulnerável a lesão por pressão, hiperfluxo e excesso de fluido. O manejo deve ser restritivo e guiado por perfusão, não por débito urinário isolado. Sucção pleural no espaço pós-pneumonectomia pode causar desvio mediastinal e instabilidade, devendo ser muito cautelosa e determinada pela equipe cirúrgica.",
  frase_ouro: "Depois da pneumonectomia, cada mL desnecessário pode virar edema no único pulmão que sobrou."
},
{
  id: "tsa-ultra-008",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "VATS robótica e insuflação de CO2",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Durante lobectomia robótica em ventilação monopulmonar, com insuflação intratorácica de CO2, ocorre hipotensão progressiva, aumento de pressão de via aérea, ETCO2 subindo de 38 para 58 mmHg e ecocardiografia mostrando VD dilatado com septo interventricular em D. Qual interpretação integra melhor o quadro?",
  alternativas: {
    A: "Hipovolemia isolada por perda sanguínea oculta, devendo ser tratada com cristaloide rápido antes de qualquer mudança ventilatória.",
    B: "Efeito combinado de CO2 intratorácico, aumento de pressão intratorácica, hipercapnia e elevação da resistência vascular pulmonar, com sobrecarga aguda de VD.",
    C: "Broncoespasmo puro, pois aumento de ETCO2 e pressão de via aérea são suficientes para diagnóstico.",
    D: "Embolia gasosa venosa por CO2, cuja conduta inicial é aumentar PEEP e manter insuflação para tamponamento.",
    E: "Vasodilatação por anestésico inalatório, sem relação com ventilação monopulmonar ou VD."
  },
  resposta: "B",
  comentario: "Na cirurgia torácica robótica, a insuflação de CO2 pode reduzir retorno venoso, elevar pressão intratorácica, aumentar PaCO2 e agravar PVR. Em OLV, isso pode descompensar VD, especialmente se houver hipercapnia, acidose, hipoxemia ou doença pulmonar. A leitura ecocardiográfica fecha o raciocínio: VD dilatado e septo em D indicam sobrecarga de pressão/volume do VD.",
  frase_ouro: "Na torácica robótica, CO2 não é só gás de campo: ele pode virar vasoconstritor pulmonar por hipercapnia e esmagar o VD."
},
{
  id: "tsa-ultra-009",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Mediastinoscopia cervical",
  area: "Cardiovascular",
  dificuldade: "Muito difícil",
  pergunta: "Durante mediastinoscopia cervical para biópsia paratraqueal direita, o anestesista observa súbita atenuação da curva de pressão arterial invasiva no braço direito e queda da saturação no oxímetro do mesmo lado, sem alteração importante na pressão arterial medida no braço esquerdo. Qual explicação e monitorização são mais adequadas?",
  alternativas: {
    A: "Compressão da artéria pulmonar direita; a pressão arterial esquerda é falsamente normal e deve-se tratar como choque obstrutivo.",
    B: "Compressão da artéria inominada/braquiocefálica pelo mediastinoscópio; monitorar perfusão cerebral e pressão em membro não comprometido é mais confiável.",
    C: "Dissecção aguda de aorta; a cirurgia deve prosseguir até confirmação por tomografia.",
    D: "Obstrução da veia cava superior; o oxímetro direito é o melhor marcador de débito cardíaco.",
    E: "Erro de transdutor; alteração unilateral durante mediastinoscopia não tem significado clínico."
  },
  resposta: "B",
  comentario: "Na mediastinoscopia, o mediastinoscópio pode comprimir grandes vasos, incluindo a artéria inominada, reduzindo pulso/pressão no braço direito e potencialmente fluxo carotídeo direito. Monitorização em membro contralateral e atenção à perfusão cerebral são importantes. A pegadinha é tratar como hipotensão sistêmica ou ignorar a assimetria.",
  frase_ouro: "Na mediastinoscopia, desapareceu a radial direita? Pense em compressão da inominada antes de culpar o transdutor."
},
{
  id: "tsa-ultra-010",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "CPAP no pulmão não ventilado",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Em lobectomia por VATS, paciente mantém SpO2 88% apesar de FiO2 1,0, DLT bem posicionado, recrutamento do pulmão dependente e PEEP de 6 cmH2O. O cirurgião aceita pequena insuflação do pulmão operado. Qual ajuste tende a melhorar oxigenação com menor prejuízo inicial ao campo?",
  alternativas: {
    A: "CPAP de 2 a 5 cmH2O com oxigênio no pulmão não ventilado.",
    B: "PEEP de 15 cmH2O no pulmão dependente, independentemente da complacência.",
    C: "Redução da FiO2 para 0,6 para intensificar HPV.",
    D: "Hipoventilação permissiva até PaCO2 acima de 70 mmHg.",
    E: "Aumento do volume corrente para 12 mL/kg no pulmão dependente."
  },
  resposta: "A",
  comentario: "CPAP baixo com O2 no pulmão não ventilado pode melhorar muito a PaO2 ao oxigenar unidades perfundidas, mas pode prejudicar o campo se excessivo. Quando medidas no pulmão ventilado e posição do DLT já foram corrigidas, CPAP baixo é uma opção razoável, negociada com o cirurgião. PEEP alta demais pode sobredistender o pulmão dependente e piorar fluxo/VD.",
  frase_ouro: "CPAP no pulmão operado é remédio de dose pequena: oxigena bem, mas se passar do ponto o cirurgião te excomunga."
},
{
  id: "tsa-ultra-011",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Bolhas pulmonares e óxido nitroso",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Paciente com enfisema bolhoso gigante será submetido à bullectomia por toracoscopia. Antes da abertura pleural, apresenta bolha ocupando grande parte do hemitórax direito e desvio mediastinal discreto. Qual conduta é mais apropriada?",
  alternativas: {
    A: "Usar óxido nitroso em baixa concentração, pois reduz necessidade de halogenado e não difunde para bolhas já formadas.",
    B: "Evitar óxido nitroso, limitar pressões de via aérea, considerar isolamento pulmonar e estar preparado para pneumotórax hipertensivo após ventilação positiva.",
    C: "Realizar ventilação manual vigorosa antes da intubação para recrutar o pulmão comprimido.",
    D: "Usar PEEP elevada para impedir expansão da bolha durante indução.",
    E: "Evitar intubação seletiva, pois o colapso do lado acometido aumenta risco de ruptura da bolha."
  },
  resposta: "B",
  comentario: "Bolhas gigantes podem expandir com N2O e romper com pressão positiva, causando pneumotórax hipertensivo. O objetivo é evitar aumento de volume da bolha, limitar pressão, isolar o pulmão se necessário e reconhecer rapidamente instabilidade por ruptura. PEEP alta e ventilação vigorosa aumentam risco.",
  frase_ouro: "Bolha pulmonar gigante e N2O são igual fósforo perto de álcool: até pode não pegar fogo, mas por que testar?"
},
{
  id: "tsa-ultra-012",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Ventilação protetora em OLV",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Durante OLV em paciente com pulmão dependente complacente, o ventilador mostra VT 8 mL/kg de peso predito, PEEP 5, pressão de platô 31 cmH2O e driving pressure 26 cmH2O. PaCO2 44 mmHg, SpO2 95%. Qual ajuste é mais alinhado com ventilação protetora?",
  alternativas: {
    A: "Manter VT atual porque oxigenação e PaCO2 estão adequadas.",
    B: "Reduzir VT para cerca de 4 a 6 mL/kg de peso predito, aceitar hipercapnia moderada se pH permitir e ajustar PEEP/recrutamento conforme mecânica.",
    C: "Aumentar VT para reduzir driving pressure por maior recrutamento alveolar.",
    D: "Retirar PEEP, pois toda PEEP em OLV aumenta shunt.",
    E: "Aumentar frequência respiratória e manter VT, pois a lesão pulmonar depende apenas de hipercapnia."
  },
  resposta: "B",
  comentario: "OLV concentra toda a ventilação em um pulmão; usar volumes altos aumenta risco de volutrauma e pressão de distensão elevada. Estratégia protetora usa VT menor, pressão de platô/drive controladas, PEEP individualizada e permissive hypercapnia se aceitável. O fato de SpO2 estar boa não autoriza mecânica lesiva.",
  frase_ouro: "Na OLV, oxigenação normal não absolve driving pressure criminosa."
},
{
  id: "tsa-ultra-013",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Cirurgia de traqueia",
  area: "Via aérea",
  dificuldade: "Muito difícil",
  pergunta: "Paciente com estenose traqueal subglótica de 70%, estridor leve em repouso e piora com sedação será submetido à ressecção traqueal. Qual planejamento anestésico é mais adequado?",
  alternativas: {
    A: "Indução profunda com bloqueio neuromuscular antes de garantir ventilação, pois reduz resistência dinâmica na estenose.",
    B: "Planejamento conjunto com cirurgião, manutenção de ventilação espontânea até confirmação de ventilabilidade, tubos de pequeno calibre, broncoscopia rígida/campo cirúrgico prontos e estratégia de ventilação cruzada após abertura traqueal.",
    C: "Máscara laríngea definitiva, pois ela evita passagem pelo segmento estreitado.",
    D: "Intubação nasotraqueal às cegas com tubo pequeno, pois reduz manipulação da lesão.",
    E: "Ventilação jet de alta frequência antes de avaliar localização da estenose, pois elimina risco de barotrauma."
  },
  resposta: "B",
  comentario: "Cirurgia de traqueia é uma anestesia compartilhada em que o plano de via aérea precisa estar combinado antes da indução. Estenose sintomática pode colapsar ou tornar ventilação impossível após anestesia. Ventilação espontânea, broncoscopia rígida, tubos pequenos e ventilação através do campo são opções conforme fase cirúrgica. Jet ventilation pode ser útil, mas exige avaliação cuidadosa e não é solução universal.",
  frase_ouro: "Na traqueia, quem improvisa via aérea depois da indução já começou atrasado."
},
{
  id: "tsa-ultra-014",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Analgesia torácica e anticoagulação",
  area: "Regional / Dor",
  dificuldade: "Muito difícil",
  pergunta: "Homem de 72 anos em uso de clopidogrel suspenso há 48 horas será submetido à toracotomia aberta por lobectomia. A equipe quer analgesia regional robusta e possibilidade de anticoagulação pós-operatória precoce. Qual alternativa é mais defensável?",
  alternativas: {
    A: "Peridural torácica imediatamente antes da cirurgia, pois a toracotomia justifica ignorar o intervalo do antiagregante.",
    B: "Bloqueio paravertebral ou plano fascial conforme risco/benefício e protocolo institucional, evitando técnica neuraxial se intervalo do clopidogrel for inadequado.",
    C: "Raquianestesia com morfina isolada, pois o risco de hematoma é menor que na peridural.",
    D: "Cateter peridural pós-operatório após reiniciar clopidogrel, pois o sangramento já estará controlado.",
    E: "Intrapleural contínuo como técnica de escolha, pois não sofre influência de anticoagulação."
  },
  resposta: "B",
  comentario: "A prova quer ponderação: analgesia torácica é fundamental, mas neuraxial em paciente com antiagregação inadequadamente suspensa pode ser perigosa. Paravertebral e bloqueios de plano fascial podem oferecer boa analgesia com perfil de risco diferente, embora também exijam cautela. Não se deve banalizar peridural torácica com clopidogrel recente.",
  frase_ouro: "Toracotomia dói muito, mas hematoma neuraxial dói na alma."
},
{
  id: "tsa-ultra-015",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Hemoptise maciça",
  area: "Via aérea",
  dificuldade: "Muito difícil",
  pergunta: "Paciente com bronquiectasias à esquerda chega ao centro cirúrgico com hemoptise maciça, hipoxemia e necessidade de controle de via aérea. A broncoscopia sugere sangramento do pulmão esquerdo. Qual objetivo inicial é prioritário?",
  alternativas: {
    A: "Intubar seletivamente o brônquio esquerdo para tamponar o sangramento e ventilar o pulmão fonte.",
    B: "Proteger o pulmão direito da contaminação, posicionar sangramento para baixo se possível, aspirar e isolar o pulmão esquerdo com dispositivo adequado.",
    C: "Evitar intubação até angiografia, pois pressão positiva sempre aumenta sangramento.",
    D: "Usar máscara laríngea para facilitar broncoscopia e evitar trauma traqueal.",
    E: "Administrar heparina para prevenir trombose por sangue retido na árvore brônquica."
  },
  resposta: "B",
  comentario: "Na hemoptise maciça, o paciente morre frequentemente por asfixia e inundação do pulmão saudável, não por perda sanguínea isolada. O objetivo é proteger o pulmão não sangrante, aspirar, isolar o lado doente e manter oxigenação. Colocar o lado sangrante para baixo ajuda a limitar contaminação por gravidade.",
  frase_ouro: "Hemoptise maciça é antes uma emergência de oxigenação do que de hemoglobina."
},
{
  id: "tsa-ultra-016",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Toracoscopia em DPOC e auto-PEEP",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Durante OLV em paciente com DPOC grave, há hipotensão, aumento de pressão de pico, curva fluxo-tempo sem retornar a zero antes do próximo ciclo e ETCO2 progressivamente elevado. A ausculta não sugere intubação seletiva inadequada. Qual intervenção é mais coerente?",
  alternativas: {
    A: "Aumentar frequência respiratória para corrigir hipercapnia rapidamente.",
    B: "Reduzir tempo expiratório para melhorar ventilação minuto.",
    C: "Reduzir frequência, aceitar hipercapnia moderada, aumentar tempo expiratório e avaliar PEEP externa cuidadosamente abaixo da auto-PEEP.",
    D: "Aumentar volume corrente, pois DPOC exige maior pressão para vencer resistência.",
    E: "Administrar vasodilatador pulmonar sistêmico como primeira medida."
  },
  resposta: "C",
  comentario: "A curva fluxo-tempo que não retorna a zero indica aprisionamento aéreo/auto-PEEP. Em DPOC durante OLV, aumentar FR pode piorar hiperinsuflação dinâmica, reduzir retorno venoso e causar hipotensão. O tratamento é dar tempo para expirar, reduzir ventilação minuto se tolerável, broncodilatar e ajustar PEEP externa com cautela.",
  frase_ouro: "No DPOC em OLV, ETCO2 alto tenta te seduzir a aumentar frequência; a auto-PEEP agradece e derruba a pressão."
},
{
  id: "tsa-ultra-017",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Transplante pulmonar e clampeamento da artéria pulmonar",
  area: "Cardiovascular",
  dificuldade: "Muito difícil",
  pergunta: "Durante transplante pulmonar unilateral em paciente com hipertensão pulmonar, após clampeamento da artéria pulmonar do lado a ser transplantado, ocorre elevação abrupta da PAP, queda da pressão sistêmica, aumento importante da PVC e TEE mostra VD dilatado e hipocinético. Qual conduta é mais apropriada?",
  alternativas: {
    A: "Aumentar PEEP para reduzir fluxo pulmonar e proteger o enxerto.",
    B: "Reduzir fatores que elevam PVR, otimizar oxigenação/ventilação, considerar vasodilatador pulmonar inalatório, suporte inotrópico/vasopressor e discutir suporte circulatório se refratário.",
    C: "Administrar nitroprussiato sistêmico como primeira linha, pois reduz PVR sem comprometer perfusão coronariana do VD.",
    D: "Induzir hipercapnia permissiva intensa para melhorar débito cardíaco.",
    E: "Reposição volêmica liberal até normalizar PVC, pois o VD falha apenas por hipovolemia."
  },
  resposta: "B",
  comentario: "Clampeamento de artéria pulmonar aumenta a carga sobre a circulação pulmonar remanescente e pode precipitar falência de VD. A conduta é reduzir PVR: evitar hipóxia, hipercapnia, acidose, pressões altas; usar iNO/prostaciclinas inaladas quando indicadas; sustentar pressão sistêmica e contratilidade do VD. Volume em excesso piora septo e perfusão do VE.",
  frase_ouro: "VD em transplante pulmonar não quer volume heróico; quer PVR baixa e pressão sistêmica suficiente."
},
{
  id: "tsa-ultra-018",
  fonte: "Yao / Barash / Prova TSA",
  capitulo: "Cirurgia torácica",
  tema: "Extubação após cirurgia torácica",
  area: "Respiratório / Torácica",
  dificuldade: "Muito difícil",
  pergunta: "Paciente submetido à lobectomia inferior esquerda apresenta ao final: normotermia, hemostasia adequada, troca gasosa aceitável em ventilação bilateral, bloqueio neuromuscular revertido, analgesia paravertebral funcionando, mas secreção espessa e tosse inefetiva. Qual decisão é mais apropriada?",
  alternativas: {
    A: "Extubar obrigatoriamente, pois lobectomia é cirurgia de extubação precoce.",
    B: "Manter intubação se tosse e depuração de secreção forem inadequadas, pois capacidade de tossir e eliminar secreções é determinante para segurança respiratória.",
    C: "Extubar e evitar fisioterapia respiratória nas primeiras 24 horas para não causar dor.",
    D: "Administrar opioide em bolus alto antes da extubação para suprimir tosse e proteger sutura brônquica.",
    E: "Extubar se a SpO2 estiver acima de 94%, independentemente da força de tosse."
  },
  resposta: "B",
  comentario: "Extubação precoce é desejável, mas não obrigatória. Após ressecção pulmonar, tosse eficaz, controle de dor, reversão neuromuscular e manejo de secreções são críticos. Se o paciente não consegue tossir, a extubação pode gerar atelectasia, retenção de secreção e insuficiência respiratória.",
  frase_ouro: "Na torácica, extubar não é só oxigenar: é tossir, limpar e ventilar sem destruir a analgesia."
},
{
  id: "tsa-ultra-019",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Tetralogia de Fallot e crise hipercianótica",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "Lactente de 8 meses, 7 kg, com tetralogia de Fallot não corrigida, chora intensamente na indução inalatória para cirurgia não cardíaca. Evolui com SpO2 de 78% para 48%, taquicardia, sopro sistólico menos audível e pressão arterial reduzida. Qual conduta inicial é mais fisiologicamente correta?",
  alternativas: {
    A: "Reduzir SVR com nitroprussiato para aumentar fluxo sistêmico e diminuir shunt direita-esquerda.",
    B: "Aumentar SVR com fenilefrina, tratar hipovolemia, aprofundar anestesia/analgesia, considerar betabloqueio para espasmo infundibular e corrigir hipóxia/acidemia.",
    C: "Administrar diurético para reduzir pressão de VD e melhorar fluxo pulmonar.",
    D: "Hiperventilar agressivamente até PaCO2 menor que 25 mmHg como medida isolada suficiente.",
    E: "Aumentar concentração de sevoflurano rapidamente, pois queda de SVR melhora saturação na tetralogia."
  },
  resposta: "B",
  comentario: "Crise hipercianótica em TOF decorre de aumento do shunt direita-esquerda por piora da obstrução dinâmica da via de saída do VD, queda de SVR ou aumento de PVR. O sopro pode diminuir porque há menos fluxo pelo trato de saída pulmonar. Aumentar SVR reduz o gradiente para shunt D-E; volume, analgesia, beta-bloqueio e correção de hipóxia/acidemia completam a fisiologia.",
  frase_ouro: "Na crise de Fallot, fenilefrina não é 'pressão por pressão': é remédio anti-shunt."
},
{
  id: "tsa-ultra-020",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Shunts e velocidade de indução",
  area: "Farmacologia",
  dificuldade: "Muito difícil",
  pergunta: "Criança com cardiopatia congênita cianótica por shunt direita-esquerda significativo será anestesiada. Em relação à indução anestésica, qual associação está correta?",
  alternativas: {
    A: "Shunt direita-esquerda acelera indução inalatória e retarda indução venosa.",
    B: "Shunt direita-esquerda retarda indução inalatória e pode acelerar efeito de fármacos venosos que chegam à circulação sistêmica sem passar pelo pulmão.",
    C: "Shunt esquerda-direita sempre impede indução venosa por diluição pulmonar.",
    D: "Shunts intracardíacos não alteram farmacocinética de indução porque o débito cardíaco total é preservado.",
    E: "Em shunt direita-esquerda, aumentar ventilação alveolar sempre normaliza a velocidade de indução inalatória."
  },
  resposta: "B",
  comentario: "No shunt direita-esquerda, parte do sangue evita o pulmão; assim, a captação de anestésico inalatório para o sangue arterial é retardada. Já fármacos IV podem atingir cérebro mais rapidamente e com menor diluição pulmonar. Em shunt esquerda-direita, o efeito é menos dramático e depende do tamanho do shunt e débito pulmonar.",
  frase_ouro: "Shunt D-E atrasa gás e apressa veia: o pulmão deixa de ser o primeiro filtro."
},
{
  id: "tsa-ultra-021",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Fisiologia de ventrículo único",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "Neonato com síndrome do coração esquerdo hipoplásico em circulação paralela, mantido com prostaglandina E1, será submetido a procedimento urgente. Saturação 82%, lactato 2,1 mmol/L, boa perfusão. Durante ventilação, o residente sugere FiO2 1,0 e hiperventilação para 'normalizar a saturação'. Qual é o maior risco dessa estratégia?",
  alternativas: {
    A: "Aumentar PVR, reduzir fluxo pulmonar e causar hipoxemia grave.",
    B: "Diminuir PVR excessivamente, aumentar Qp/Qs, roubar fluxo sistêmico e piorar perfusão tecidual apesar de saturação maior.",
    C: "Fechar imediatamente o canal arterial por alcalose respiratória.",
    D: "Aumentar SVR e reduzir fluxo cerebral.",
    E: "Transformar a circulação paralela em circulação em série."
  },
  resposta: "B",
  comentario: "Em ventrículo único/circulação paralela, saturação 'bonita' pode ser sinal de fluxo pulmonar excessivo e roubo sistêmico. Oxigênio e hipocapnia reduzem PVR, aumentam Qp e podem reduzir perfusão sistêmica, elevando lactato. O alvo não é SpO2 normal; é equilíbrio Qp/Qs, perfusão e oxigenação aceitável.",
  frase_ouro: "No ventrículo único, saturação 100% pode ser má notícia com maquiagem."
},
{
  id: "tsa-ultra-022",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Circulação de Fontan",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "Adulto jovem com circulação de Fontan extracardíaco será submetido à videolaparoscopia. Após pneumoperitônio e Trendelenburg, apresenta queda de pressão arterial, aumento de PVC, redução de ETCO2 e piora da saturação. Qual princípio explica melhor a descompensação?",
  alternativas: {
    A: "A circulação de Fontan depende de bomba ventricular direita subpulmonar, que falha com aumento de pós-carga sistêmica.",
    B: "O fluxo pulmonar no Fontan é passivo e depende de baixa PVR, gradiente venoso adequado, ritmo sinusal e retorno venoso; pressão intratorácica/abdominal elevada e PEEP podem reduzir fluxo pulmonar.",
    C: "Fontan tolera bem pneumoperitônio porque o retorno venoso aumentado melhora a pré-carga pulmonar.",
    D: "Hipercapnia reduz PVR e aumenta fluxo pulmonar no Fontan.",
    E: "O principal problema é queda de SVR, que sempre aumenta fluxo pulmonar."
  },
  resposta: "B",
  comentario: "No Fontan não existe VD impulsionando sangue para o pulmão. Fluxo pulmonar depende de pressão venosa sistêmica, baixa PVR, ausência de obstruções, ritmo adequado e pressões intratorácicas baixas. Pneumoperitônio, hipercapnia, acidose, PEEP e altas pressões podem reduzir fluxo pulmonar e débito sistêmico.",
  frase_ouro: "Fontan é circulação por gradiente; se você aumenta pressão no caminho, o sangue simplesmente não passa."
},
{
  id: "tsa-ultra-023",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Eisenmenger",
  area: "Cardiovascular",
  dificuldade: "Muito difícil",
  pergunta: "Mulher de 32 anos com comunicação interventricular ampla e síndrome de Eisenmenger será submetida a drenagem de abscesso sob anestesia. Saturação basal 84%, hematócrito 62%, pressão pulmonar sistêmica. Qual conduta é mais adequada?",
  alternativas: {
    A: "Reduzir SVR com bloqueio neuraxial alto para diminuir trabalho ventricular direito.",
    B: "Manter SVR, evitar aumento de PVR, prevenir embolia aérea, corrigir hipovolemia com cautela e tratar hipotensão prontamente com vasopressor apropriado.",
    C: "Hiperventilar intensamente e manter FiO2 baixa para evitar absorção de atelectasia.",
    D: "Realizar flebotomia pré-operatória de rotina para reduzir hematócrito abaixo de 45%.",
    E: "Usar nitroprussiato como vasopressor pulmonar seletivo."
  },
  resposta: "B",
  comentario: "Eisenmenger combina hipertensão pulmonar fixa e shunt D-E. Queda de SVR aumenta shunt D-E e piora hipoxemia; aumento de PVR também piora fluxo pulmonar. Deve-se evitar hipóxia, hipercapnia, acidose, hipotermia, dor e embolia aérea. Flebotomia só é considerada em hiperviscosidade sintomática e com reposição, não de rotina.",
  frase_ouro: "No Eisenmenger, cair SVR é abrir a porta do shunt direita-esquerda."
},
{
  id: "tsa-ultra-024",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Blalock-Taussig modificado",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "Criança com atresia pulmonar e shunt de Blalock-Taussig modificado à direita será anestesiada para cirurgia abdominal. Na admissão, pulso radial direito é fraco e SpO2 no membro superior direito é 72%, enquanto no membro superior esquerdo é 82%. Qual interpretação é mais correta?",
  alternativas: {
    A: "O shunt está necessariamente trombosado e a cirurgia deve ser cancelada imediatamente.",
    B: "A artéria subclávia ipsilateral ao shunt pode ter pulso e pressão reduzidos; monitorar pressão e oximetria em membro adequado é essencial para não interpretar erroneamente perfusão sistêmica.",
    C: "O membro direito é sempre o melhor local para pressão não invasiva, por estar próximo ao shunt.",
    D: "Diferença de saturação entre braços indica coarctação crítica até prova em contrário.",
    E: "A aferição de pressão em qualquer membro é equivalente nesses pacientes."
  },
  resposta: "B",
  comentario: "Após shunt BT/BT modificado, o braço ipsilateral pode ter pulso e pressão reduzidos pela anatomia da subclávia e do shunt. Isso pode dificultar monitorização e gerar falsa impressão de hipotensão ou dessaturação. Avaliar previamente pulsos e escolher local confiável para pressão/oximetria é ponto clássico do Yao.",
  frase_ouro: "No BT shunt, o braço do shunt pode mentir para o anestesista."
},
{
  id: "tsa-ultra-025",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Prostaglandina E1",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "Neonato com transposição das grandes artérias chega para septostomia atrial em uso de prostaglandina E1. Durante preparo, apresenta apneia, hipotensão leve e febre. Qual interpretação é mais adequada?",
  alternativas: {
    A: "São efeitos esperados da PGE1; deve-se estar preparado para suporte ventilatório e hemodinâmico, sem suspender inadvertidamente a droga se a circulação for ducto-dependente.",
    B: "Apneia exclui efeito da PGE1 e indica sepse obrigatória.",
    C: "A PGE1 deve ser suspensa imediatamente porque o canal arterial piora mistura em TGA.",
    D: "A PGE1 fecha o ducto por dessensibilização de receptor e deve ser substituída por indometacina.",
    E: "A presença de febre contraindica qualquer procedimento cardíaco paliativo."
  },
  resposta: "A",
  comentario: "PGE1 mantém patência ductal em cardiopatias ducto-dependentes, mas pode causar apneia, hipotensão, febre e flushing. O erro grave é suspender a droga em circulação dependente do canal. Em TGA, manter ducto e melhorar mistura são vitais enquanto se planeja septostomia/correção.",
  frase_ouro: "PGE1 dá apneia; suspender sem pensar pode dar algo pior: colapso ducto-dependente."
},
{
  id: "tsa-ultra-026",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Crise de hipertensão pulmonar",
  area: "Cardiovascular",
  dificuldade: "Muito difícil",
  pergunta: "Após correção de CIV com CEC, criança de 10 meses evolui na UTI cirúrgica com queda abrupta da saturação, hipotensão, aumento de PVC, bradicardia relativa e TEE mostrando VD dilatado. Gasometria: pH 7,18, PaCO2 62 mmHg. Qual intervenção inicial é mais adequada?",
  alternativas: {
    A: "Reduzir FiO2 para estimular respiração espontânea e evitar toxicidade pulmonar.",
    B: "Corrigir hipoxemia, hipercapnia e acidose, aprofundar sedação/analgesia, iniciar vasodilatador pulmonar inalatório e sustentar pressão sistêmica.",
    C: "Administrar nitroprussiato sistêmico em bolus para reduzir rapidamente pressão pulmonar.",
    D: "Suspender ventilação mecânica, pois pressão positiva é sempre a causa de crise pulmonar hipertensiva.",
    E: "Reposição volêmica agressiva até reduzir PVC."
  },
  resposta: "B",
  comentario: "Crise de hipertensão pulmonar é círculo vicioso: hipóxia, hipercapnia, acidose e estímulo simpático elevam PVR, falem VD e pioram débito. O tratamento é remover gatilhos, oxigenar, ventilar, alcalinizar se necessário, analgesiar/sedar, usar iNO ou vasodilatador pulmonar seletivo e manter pressão sistêmica para perfusão coronariana do VD.",
  frase_ouro: "Na crise de hipertensão pulmonar, trate PVR e proteja a coronária do VD."
},
{
  id: "tsa-ultra-027",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Cianose crônica e coagulação",
  area: "Hematologia / Coagulação",
  dificuldade: "Muito difícil",
  pergunta: "Adolescente com cardiopatia congênita cianótica, SpO2 basal 78%, hematócrito 68%, plaquetas 105.000/mm³ e história de epistaxes será submetido à correção paliativa. Qual afirmação é mais adequada?",
  alternativas: {
    A: "O hematócrito elevado protege contra sangramento por aumentar viscosidade e concentração de fatores.",
    B: "Cardiopatia cianótica pode cursar com trombocitopenia, disfunção plaquetária, alterações de coagulação e risco simultâneo de sangramento e trombose.",
    C: "A flebotomia profilática é obrigatória em todos com hematócrito acima de 60%.",
    D: "O uso de antifibrinolítico é contraindicado porque esses pacientes nunca apresentam fibrinólise.",
    E: "A hiperviscosidade elimina necessidade de reposição volêmica."
  },
  resposta: "B",
  comentario: "Cianose crônica causa eritrocitose secundária, mas também pode haver plaquetopenia, disfunção plaquetária, deficiência relativa de fatores e anormalidades endoteliais. O risco é paradoxal: sangra e trombosa. Flebotomia não é rotina; deve ser reservada a hiperviscosidade sintomática, com reposição isovolêmica.",
  frase_ouro: "Na cardiopatia cianótica, hematócrito alto não significa coagulação forte."
},
{
  id: "tsa-ultra-028",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Síndrome de deleção 22q11",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "Criança com tetralogia de Fallot e atresia pulmonar será submetida a correção. Há fácies dismórfica, infecções de repetição, palato anômalo e cálcio total reduzido. Qual associação deve ser lembrada?",
  alternativas: {
    A: "Síndrome de Williams; hipercalcemia, estenose supravalvar aórtica e baixa incidência de dificuldade de via aérea.",
    B: "Deleção 22q11; hipocalcemia, imunodeficiência, anomalias conotruncais e possível dificuldade de via aérea/alimentação.",
    C: "Síndrome de Down; hipercoagulabilidade isolada e ausência de hipertensão pulmonar.",
    D: "Síndrome de Marfan; atresia pulmonar, micrognatia e hipocalcemia neonatal.",
    E: "Neurofibromatose; hipocalcemia por hipoparatireoidismo e truncus arteriosus obrigatório."
  },
  resposta: "B",
  comentario: "TOF com atresia pulmonar e anomalias conotruncais deve lembrar deleção 22q11, que pode cursar com hipocalcemia por hipoparatireoidismo, imunodeficiência, anomalias de palato, alterações de via aérea e problemas alimentares. É detalhe de prova porque muda planejamento: cálcio, sangue irradiado/filtrado conforme protocolo, via aérea e infecção.",
  frase_ouro: "Conotruncal + hipocalcemia + infecção recorrente: pense 22q11 antes da banca pensar por você."
},
{
  id: "tsa-ultra-029",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Transposição das grandes artérias",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "Neonato com transposição das grandes artérias apresenta SpO2 62% apesar de FiO2 1,0, acidose metabólica progressiva e ecocardiograma mostrando forame oval restritivo. Qual intervenção corrige melhor a fisiopatologia imediata?",
  alternativas: {
    A: "Aumentar FiO2 e hiperventilar até saturação normal.",
    B: "Melhorar mistura entre circulações paralelas, especialmente com septostomia atrial se comunicação interatrial restritiva, mantendo PGE1 enquanto indicado.",
    C: "Reduzir SVR com nitroprussiato para aumentar fluxo pulmonar.",
    D: "Administrar diurético agressivo para reduzir congestão pulmonar.",
    E: "Fechar ducto arterial com indometacina para evitar roubo sistêmico."
  },
  resposta: "B",
  comentario: "Na TGA, as circulações sistêmica e pulmonar estão em paralelo. Oxigênio não resolve se não houver mistura adequada. Forame oval restritivo gera hipóxia profunda e acidose; septostomia atrial pode ser salvadora. PGE1 ajuda a manter ducto e mistura, mas pode não bastar se a comunicação atrial for inadequada.",
  frase_ouro: "Na TGA, o problema não é falta de oxigênio no ventilador; é falta de mistura no coração."
},
{
  id: "tsa-ultra-030",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Anestesia venosa em criança cardiopata",
  area: "Farmacologia",
  dificuldade: "Muito difícil",
  pergunta: "Criança de 2 anos com cardiopatia congênita complexa, baixa reserva ventricular e shunt residual será induzida para cateterismo. Qual escolha farmacológica é mais apropriada como princípio geral?",
  alternativas: {
    A: "Propofol em bolus alto é sempre ideal porque reduz PVR e melhora todos os shunts.",
    B: "A escolha deve evitar quedas abruptas de SVR, depressão miocárdica e alterações extremas de PVR; etomidato, cetamina titulada ou técnica opioide podem ser consideradas conforme lesão e objetivo hemodinâmico.",
    C: "Halotano é preferido ao sevoflurano por menor depressão miocárdica em crianças.",
    D: "Todos os cardiopatas congênitos se beneficiam de reduzir SVR na indução.",
    E: "A técnica anestésica não altera shunt se a saturação basal for conhecida."
  },
  resposta: "B",
  comentario: "Não há indutor universal em cardiopatia congênita. O erro é aplicar regra única. Propofol pode causar vasodilatação e depressão, problemático em lesões dependentes de SVR. Cetamina pode preservar SVR, mas deve ser contextualizada; etomidato preserva hemodinâmica, mas tem outras considerações. O alvo é manter equilíbrio entre SVR/PVR, débito, contratilidade e oxigenação.",
  frase_ouro: "Na cardiopatia congênita, o melhor indutor é o que respeita o shunt daquele paciente."
},
{
  id: "tsa-ultra-031",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Norwood e Qp/Qs",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "No pós-operatório imediato de Norwood com shunt Sano, lactente apresenta SpO2 92%, extremidades frias, lactato subindo de 2 para 6 mmol/L e pressão arterial limítrofe. Qual interpretação é mais provável?",
  alternativas: {
    A: "A saturação alta exclui baixo débito sistêmico.",
    B: "Pode haver hiperfluxo pulmonar relativo com roubo sistêmico; a avaliação deve focar oferta sistêmica de oxigênio, lactato, perfusão e equilíbrio Qp/Qs, não apenas SpO2.",
    C: "A conduta inicial obrigatória é aumentar FiO2 e hiperventilar para SpO2 100%.",
    D: "A saturação desejável nessa fisiologia é sempre acima de 95%.",
    E: "O shunt Sano impede qualquer desequilíbrio entre fluxo pulmonar e sistêmico."
  },
  resposta: "B",
  comentario: "Após Norwood, saturação alta pode refletir fluxo pulmonar excessivo à custa do sistêmico. Lactato crescente e perfusão ruim são mais importantes que a SpO2 isolada. O manejo busca equilíbrio Qp/Qs, evitando queda excessiva de PVR e mantendo perfusão sistêmica.",
  frase_ouro: "No Norwood, SpO2 alta com lactato subindo é o paciente dizendo: meu pulmão está roubando meu corpo."
},
{
  id: "tsa-ultra-032",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Endocardite e bolhas em acesso venoso",
  area: "Cardiovascular",
  dificuldade: "Muito difícil",
  pergunta: "Paciente com cardiopatia congênita cianótica e shunt direita-esquerda residual será submetido a procedimento ortopédico. Qual cuidado aparentemente simples tem maior relevância fisiopatológica?",
  alternativas: {
    A: "Evitar filtros de ar nos equipos, pois aumentam resistência à infusão.",
    B: "Eliminar bolhas de sistemas venosos e considerar filtros, pois embolia aérea venosa pode atravessar shunt e causar embolia arterial paradoxal.",
    C: "Manter cabeceira elevada obrigatoriamente para reduzir retorno venoso e shunt.",
    D: "Usar óxido nitroso para reduzir volume de bolhas intravasculares.",
    E: "Preferir punção venosa em membro superior direito para reduzir risco de embolia cerebral."
  },
  resposta: "B",
  comentario: "Em shunt direita-esquerda, pequenas bolhas venosas podem passar para circulação sistêmica e causar embolia cerebral/coronária. Cuidado meticuloso com equipos, seringas e conexões é obrigatório. Essa é uma questão cruel porque parece detalhe operacional, mas é fisiologia pura.",
  frase_ouro: "No shunt D-E, bolha venosa vira problema arterial."
},
{
  id: "tsa-ultra-033",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Canal arterial e anestesia",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "Neonato com coarctação crítica pré-ductal depende de canal arterial para perfusão sistêmica distal. Durante anestesia, ocorre piora de perfusão de membros inferiores, acidose e queda de pressão pós-ductal. Qual conduta é mais coerente?",
  alternativas: {
    A: "Administrar indometacina para reduzir roubo pulmonar.",
    B: "Garantir ou reiniciar PGE1, corrigir acidose/hipóxia, manter débito e avaliar perfusão pré e pós-ductal.",
    C: "Hiperventilar até PaCO2 20 mmHg para fechar canal e aumentar pressão proximal.",
    D: "Reduzir SVR distal com nitroprussiato para melhorar gradiente transcoarctação.",
    E: "Evitar suporte ventilatório porque PGE1 só funciona em respiração espontânea."
  },
  resposta: "B",
  comentario: "Na coarctação crítica, a circulação sistêmica distal pode depender de fluxo ductal. Fechamento ou constrição do canal leva a choque de membros inferiores, acidose e injúria renal/mesentérica. PGE1, correção de fatores que aumentam consumo e monitorização pré/pós-ductal são essenciais.",
  frase_ouro: "Em lesão ducto-dependente, canal arterial é circulação, não detalhe anatômico."
},
{
  id: "tsa-ultra-034",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Comunicação interatrial e embolia paradoxal",
  area: "Cardiovascular",
  dificuldade: "Muito difícil",
  pergunta: "Adulto com CIA grande, hipertensão pulmonar leve e fibrilação atrial será submetido à colecistectomia laparoscópica. Durante insuflação, há queda de ETCO2, dessaturação transitória e instabilidade. Qual evento deve entrar no diferencial com especial atenção pela cardiopatia?",
  alternativas: {
    A: "Embolia gasosa venosa com possibilidade de embolia paradoxal se houver inversão transitória de gradiente interatrial.",
    B: "Fechamento agudo da CIA por pneumoperitônio.",
    C: "Hipoxemia por absorção de CO2, sem risco sistêmico.",
    D: "Tamponamento cardíaco por aumento de PVR isoladamente.",
    E: "Crise tireotóxica por absorção peritoneal de CO2."
  },
  resposta: "A",
  comentario: "Em laparoscopia, embolia gasosa é rara, mas queda abrupta de ETCO2 e instabilidade sugerem redução de fluxo pulmonar/debito ou embolia. Em defeitos intracardíacos, especialmente com pressões direitas eleváveis, há risco de passagem paradoxal para circulação arterial.",
  frase_ouro: "Defeito septal transforma embolia venosa em ameaça cerebral."
},
{
  id: "tsa-ultra-035",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Síndrome de Down e hipertensão pulmonar",
  area: "Pediatria",
  dificuldade: "Muito difícil",
  pergunta: "Criança com síndrome de Down, canal atrioventricular parcialmente corrigido e hipertensão pulmonar residual será submetida à amigdalectomia. Qual conjunto de preocupações é mais adequado?",
  alternativas: {
    A: "Baixo risco de via aérea, ausência de hipertensão pulmonar e maior tolerância à hipóxia.",
    B: "Via aérea potencialmente difícil/obstrutiva, instabilidade atlantoaxial quando suspeita clínica, hipertensão pulmonar residual e risco de aumento de PVR por hipóxia, hipercapnia, dor e laringoespasmo.",
    C: "Contraindicação absoluta à anestesia geral.",
    D: "Preferência obrigatória por succinilcolina devido à resistência aos bloqueadores não despolarizantes.",
    E: "Hiperventilação e FiO2 baixa para prevenir atelectasia como objetivos principais."
  },
  resposta: "B",
  comentario: "Síndrome de Down associa via aérea superior problemática, apneia/obstrução, hipotonia, cardiopatia congênita e hipertensão pulmonar. Em cirurgia de via aérea, hipóxia, hipercapnia, dor e laringoespasmo podem precipitar crise pulmonar hipertensiva. A alternativa correta integra via aérea e coração, como faria a banca.",
  frase_ouro: "Na criança Down cardiopata, a via aérea pode ser o gatilho da crise pulmonar."
},
{
  id: "tsa-ultra-036",
  fonte: "Yao / Miller / Prova TSA",
  capitulo: "Cardiopatia congênita",
  tema: "Baixo débito pós-CEC pediátrica",
  area: "Cardiovascular",
  dificuldade: "Muito difícil",
  pergunta: "Após correção de cardiopatia congênita com CEC, lactente apresenta baixo débito: extremidades frias, lactato crescente, ecocardiografia com disfunção biventricular leve a moderada e pressão arterial baixa. Qual afirmação sobre milrinona é mais correta?",
  alternativas: {
    A: "Aumenta contratilidade e reduz resistência vascular pulmonar/sistêmica por inibição da fosfodiesterase III, podendo ajudar, mas pode piorar hipotensão e exigir vasopressor associado.",
    B: "É vasoconstritor pulmonar seletivo, ideal quando a pressão sistêmica está baixa.",
    C: "Tem efeito apenas cronotrópico, sem ação lusitrópica ou vascular.",
    D: "É contraindicada em qualquer hipertensão pulmonar.",
    E: "Substitui sempre adrenalina quando há hipotensão grave."
  },
  resposta: "A",
  comentario: "Milrinona é inodilatador: aumenta AMPc por inibição da PDE III, melhora inotropismo/lusitropismo e reduz PVR/SVR. Em pós-CEC pediátrica pode ser útil em baixo débito e hipertensão pulmonar, mas sua vasodilatação pode agravar hipotensão, exigindo noradrenalina/vasopressina/adrenalina conforme fisiologia.",
  frase_ouro: "Milrinona ajuda o coração e abre vaso; quando a pressão já está baixa, ela precisa de escolta."
},
{
  id: "tsa-ultra-037",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Ressuscitação hemostática",
  area: "Emergências / Crítico",
  dificuldade: "Muito difícil",
  pergunta: "Homem de 29 anos, ferimento por arma branca abdominal, PA 70/40, FC 148, pele fria, FAST positivo. Chega ao centro cirúrgico com dois acessos 16G e recebeu 2 L de cristaloide no pré-hospitalar. Qual estratégia inicial é mais alinhada ao controle de dano?",
  alternativas: {
    A: "Cristaloide aquecido até normalizar PA antes da incisão.",
    B: "Ativar protocolo de transfusão maciça com hemocomponentes balanceados, limitar cristaloide, corrigir cálcio/temperatura/coagulopatia e buscar controle cirúrgico rápido da hemorragia.",
    C: "Noradrenalina em dose crescente até PAM 80 antes de transfundir.",
    D: "Aguardar exames convencionais de coagulação antes de administrar plasma ou plaquetas.",
    E: "Reposição inicial apenas com albumina, pois preserva pressão oncótica e evita coagulopatia."
  },
  resposta: "B",
  comentario: "Trauma hemorrágico grave exige ressuscitação hemostática e controle de sangramento. Cristaloide liberal dilui fatores, piora acidose/hipotermia e não transporta oxigênio. Vasopressor não substitui sangue e pode piorar perfusão se usado como muleta antes de volume/controle. A meta é componente hemostático cedo, aquecimento, cálcio, TXA quando indicado e cirurgia rápida.",
  frase_ouro: "No trauma sangrando, ressuscitação bonita sem controle de sangramento é teatro; cirurgia sem ressuscitação é roleta."
},
{
  id: "tsa-ultra-038",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "TCE e hipotensão permissiva",
  area: "Neuroanestesia",
  dificuldade: "Muito difícil",
  pergunta: "Paciente vítima de colisão moto-auto apresenta TCE grave, anisocoria, FAST positivo e choque hemorrágico. A equipe sugere hipotensão permissiva até laparotomia para reduzir sangramento. Qual nuance é correta?",
  alternativas: {
    A: "Hipotensão permissiva é ideal em todo trauma, inclusive TCE grave, desde que por menos de 30 minutos.",
    B: "No TCE grave, deve-se evitar hipotensão e hipoxemia, pois lesão secundária cerebral pode superar benefício de menor sangramento; a estratégia pressórica precisa equilibrar controle hemorrágico e perfusão cerebral.",
    C: "A pressão arterial não influencia prognóstico neurológico se a cirurgia for rápida.",
    D: "Hiperventilação profunda profilática substitui manutenção de pressão arterial.",
    E: "Cristaloide hipotônico é preferível por reduzir edema cerebral."
  },
  resposta: "B",
  comentario: "Hipotensão permissiva pode ter lugar em hemorragia sem TCE, mas TCE grave é exceção importante. Hipotensão e hipóxia são fortes causadores de lesão secundária. O alvo pressórico deve preservar perfusão cerebral enquanto se busca controle hemorrágico e ressuscitação hemostática.",
  frase_ouro: "No trauma com TCE grave, a cabeça não aceita hipotensão filosófica."
},
{
  id: "tsa-ultra-039",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Via aérea e coluna cervical",
  area: "Via aérea",
  dificuldade: "Muito difícil",
  pergunta: "Paciente politraumatizado, Glasgow 7, sangue em cavidade oral, suspeita de lesão cervical, necessita intubação emergencial. Qual conduta é mais adequada?",
  alternativas: {
    A: "Retirar colar, hiperestender pescoço e realizar laringoscopia direta clássica para primeira tentativa.",
    B: "Realizar sequência rápida com estabilização manual em linha, aspiração agressiva, plano alternativo pronto e considerar videolaringoscopia ou laringoscopia direta conforme disponibilidade/experiência.",
    C: "Aguardar radiografia cervical antes de intubar, mesmo com rebaixamento e sangue em via aérea.",
    D: "Máscara laríngea definitiva é preferível porque elimina movimento cervical.",
    E: "Evitar cricotireoidostomia em 'não intuba/não ventila' até confirmação tomográfica da coluna."
  },
  resposta: "B",
  comentario: "Trauma com Glasgow baixo e sangue na via aérea exige controle rápido. A técnica típica é RSI com estabilização manual da coluna cervical, aspiração e preparo para falha. Videolaringoscopia pode ajudar, mas sangue pode limitar visão. Em CICO, cricotireoidostomia não deve ser postergada.",
  frase_ouro: "No trauma, via aérea difícil não espera tomografia ficar pronta."
},
{
  id: "tsa-ultra-040",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Pneumotórax hipertensivo intraoperatório",
  area: "Emergências / Crítico",
  dificuldade: "Muito difícil",
  pergunta: "Após intubação de paciente com trauma torácico fechado, ocorre hipotensão súbita, SpO2 84%, aumento de pressão de via aérea, murmúrio abolido à esquerda e turgência jugular. O capnógrafo mostra queda de ETCO2. Qual conduta é correta?",
  alternativas: {
    A: "Solicitar radiografia de tórax antes de intervenção para evitar punção desnecessária.",
    B: "Tratar imediatamente como pneumotórax hipertensivo com descompressão torácica, seguida de drenagem definitiva.",
    C: "Aumentar PEEP para reexpandir o pulmão esquerdo.",
    D: "Administrar broncodilatador e aguardar resposta.",
    E: "Reduzir FiO2 para evitar absorção do pneumotórax."
  },
  resposta: "B",
  comentario: "Pneumotórax hipertensivo é diagnóstico clínico em paciente instável, especialmente após PPV. Hipotensão, aumento de pressão, ausência unilateral de murmúrio e queda de ETCO2 indicam choque obstrutivo. Não se espera imagem.",
  frase_ouro: "Pneumotórax hipertensivo instável não é diagnóstico radiológico; é diagnóstico de agulha/dedo."
},
{
  id: "tsa-ultra-041",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Hipocalcemia na transfusão maciça",
  area: "Hematologia / Coagulação",
  dificuldade: "Muito difícil",
  pergunta: "Durante laparotomia por trauma, após 8 concentrados de hemácias, 6 plasmas e 1 pool de plaquetas, paciente mantém hipotensão, QT prolongado, contratilidade reduzida ao eco e cálcio ionizado 0,78 mmol/L. Qual interpretação é mais adequada?",
  alternativas: {
    A: "Hipocalcemia por citrato é esperada na transfusão maciça e pode contribuir para hipotensão, disfunção miocárdica e coagulopatia; deve ser corrigida com cálcio ionizado guiando reposição.",
    B: "Cálcio baixo é protetor contra coagulação intravascular e não deve ser corrigido.",
    C: "Gluconato de cálcio é proibido em trauma por aumentar mortalidade.",
    D: "Hipocalcemia não altera contratilidade nem coagulação.",
    E: "O único tratamento é bicarbonato, pois acidose explica todo cálcio baixo."
  },
  resposta: "A",
  comentario: "Citrato dos hemocomponentes quelam cálcio, especialmente quando a velocidade de transfusão supera metabolismo hepático. Cálcio ionizado baixo deprime contratilidade, piora vasoplegia, prolonga QT e prejudica coagulação. Em MTP, cálcio é parte da ressuscitação, não cosmético de laboratório.",
  frase_ouro: "Transfundir sem olhar cálcio é abastecer o tanque e desligar a ignição."
},
{
  id: "tsa-ultra-042",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "TXA no trauma",
  area: "Hematologia / Coagulação",
  dificuldade: "Muito difícil",
  pergunta: "Paciente com trauma penetrante e choque hemorrágico chega 90 minutos após o evento. Há suspeita de hiperfibrinólise e sangramento ativo. Qual afirmação sobre ácido tranexâmico é mais adequada?",
  alternativas: {
    A: "Deve ser considerado precocemente em trauma hemorrágico, idealmente dentro de 3 horas, pois após janela tardia o benefício diminui e pode haver risco.",
    B: "É útil apenas se fibrinogênio estiver acima de 400 mg/dL.",
    C: "É contraindicado em qualquer trauma cranioencefálico associado.",
    D: "Substitui plasma e plaquetas no protocolo de transfusão maciça.",
    E: "Age ativando plasminogênio para remover microtrombos."
  },
  resposta: "A",
  comentario: "TXA inibe fibrinólise ao bloquear ativação/ligação do plasminogênio à fibrina. Em trauma hemorrágico, benefício é tempo-dependente, mais claro quando administrado cedo, especialmente dentro de 3 horas. Não substitui ressuscitação hemostática.",
  frase_ouro: "TXA no trauma é remédio de relógio: cedo ajuda; tarde pode atrapalhar."
},
{
  id: "tsa-ultra-043",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Tamponamento cardíaco traumático",
  area: "Cardiovascular",
  dificuldade: "Muito difícil",
  pergunta: "Homem com ferimento precordial chega consciente, PA 80/50, bulhas abafadas, turgência jugular e FAST com líquido pericárdico. Vai para toracotomia imediata. Qual manejo anestésico é mais apropriado antes da abertura do pericárdio?",
  alternativas: {
    A: "Indução profunda com propofol em bolus e ventilação positiva com PEEP alta para reduzir retorno venoso.",
    B: "Manter pré-carga, evitar vasodilatação e depressão miocárdica, preparar drogas/hemocomponentes, induzir de forma titulada e reconhecer que PPV pode precipitar colapso.",
    C: "Administrar diurético para reduzir pressão pericárdica.",
    D: "Aguardar drenagem pericárdica percutânea obrigatória antes de levar à sala.",
    E: "Hipotensão permissiva profunda é sempre ideal porque reduz sangramento cardíaco."
  },
  resposta: "B",
  comentario: "Tamponamento é estado dependente de pré-carga e tônus simpático. Indução, vasodilatação e PPV podem reduzir retorno venoso e débito, levando à parada. O objetivo é manter perfusão até controle cirúrgico, com indução titulada, equipe pronta e sangue disponível.",
  frase_ouro: "No tamponamento, a anestesia pode ser a última gota que tira o débito cardíaco."
},
{
  id: "tsa-ultra-044",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Queimadura e succinilcolina",
  area: "Farmacologia",
  dificuldade: "Muito difícil",
  pergunta: "Paciente de 40 anos, queimadura elétrica e térmica de 35% da superfície corporal há 5 dias, será submetido a desbridamento. Potássio 4,8 mEq/L, via aérea sem edema. Qual bloqueador neuromuscular deve ser evitado e por quê?",
  alternativas: {
    A: "Rocurônio, por causar hipercalemia tardia em queimados.",
    B: "Succinilcolina, por risco de hipercalemia grave após upregulation de receptores acetilcolínicos extrajuncionais.",
    C: "Cisatracúrio, por depender exclusivamente de rim e fígado.",
    D: "Vecurônio, por liberar histamina maciçamente em queimados.",
    E: "Nenhum; succinilcolina é segura em qualquer fase da queimadura se potássio basal for normal."
  },
  resposta: "B",
  comentario: "Após queimaduras extensas, trauma neuromuscular e imobilização, há proliferação de receptores acetilcolínicos extrajuncionais. Succinilcolina pode causar saída maciça de potássio e PCR. O risco aumenta após as primeiras 24-48 horas e persiste por semanas/meses. Potássio basal normal não garante segurança.",
  frase_ouro: "Em queimado tardio, succinilcolina é teste de potássio que ninguém deveria fazer."
},
{
  id: "tsa-ultra-045",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Lesão inalatória",
  area: "Via aérea",
  dificuldade: "Muito difícil",
  pergunta: "Vítima de incêndio em ambiente fechado chega falando, com rouquidão discreta, vibrissas chamuscadas, escarro carbonáceo e queimadura facial. SpO2 99% em oxímetro de pulso. Qual conduta é mais apropriada?",
  alternativas: {
    A: "Observar sem intubação, pois SpO2 normal exclui lesão inalatória e intoxicação por CO.",
    B: "Manter alto índice de suspeita, administrar oxigênio a 100%, avaliar carboxi-hemoglobina/co-oximetria e considerar intubação precoce antes de edema progressivo de via aérea.",
    C: "Evitar oxigênio alto porque piora toxicidade por monóxido de carbono.",
    D: "Aguardar estridor intenso para indicar via aérea definitiva.",
    E: "Usar succinilcolina obrigatoriamente, pois toda queimadura aguda contraindica rocurônio."
  },
  resposta: "B",
  comentario: "O oxímetro convencional não diferencia oxi-hemoglobina de carboxi-hemoglobina e pode superestimar saturação. Sinais de lesão inalatória e queimadura facial podem evoluir com edema rápido; intubação precoce é mais segura que via aérea tardia impossível. O2 100% reduz meia-vida da COHb.",
  frase_ouro: "Na fumaça, SpO2 bonita pode ser mentira com monóxido de carbono."
},
{
  id: "tsa-ultra-046",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Choque medular versus hemorrágico",
  area: "Emergências / Crítico",
  dificuldade: "Muito difícil",
  pergunta: "Paciente vítima de queda apresenta trauma raquimedular cervical alto, PA 75/40, FC 48, pele quente e seca, sem sinais externos de sangramento importante. FAST negativo. Qual interpretação é mais provável e conduta hemodinâmica inicial?",
  alternativas: {
    A: "Choque hemorrágico classe IV; bradicardia exclui choque neurogênico.",
    B: "Choque neurogênico por perda de tônus simpático; tratar com reposição cautelosa, vasopressor com ação alfa e suporte cronotrópico se necessário, sem deixar de excluir hemorragia.",
    C: "Tamponamento cardíaco; tratar com diurético e PEEP.",
    D: "Sepse medular aguda; iniciar vasodilatador.",
    E: "Anafilaxia traumática; adrenalina é obrigatória e investigação de sangramento é desnecessária."
  },
  resposta: "B",
  comentario: "Choque neurogênico típico cursa com hipotensão e bradicardia por perda simpática, pele quente e vasodilatação. Trauma sempre exige excluir hemorragia, mas o padrão difere do hemorrágico, em que taquicardia e pele fria são mais esperadas. Vasopressor alfa e suporte cronotrópico podem ser necessários.",
  frase_ouro: "No trauma, hipotensão com bradicardia cervical é simpático desligado até prova em contrário — mas sangue oculto continua no diferencial."
},
{
  id: "tsa-ultra-047",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "TEG/ROTEM no sangramento traumático",
  area: "Hematologia / Coagulação",
  dificuldade: "Muito difícil",
  pergunta: "Durante ressuscitação de trauma, ROTEM mostra tempo de coagulação prolongado, amplitude máxima reduzida e lise aumentada aos 30 minutos. Sangramento difuso persiste. Qual interpretação terapêutica é mais apropriada?",
  alternativas: {
    A: "Deficiência isolada de fibrinogênio; tratar apenas com crioprecipitado.",
    B: "Padrão misto com atraso de iniciação, baixa força de coágulo e hiperfibrinólise; considerar plasma/fatores, plaquetas/fibrinogênio conforme ensaios específicos e antifibrinolítico se dentro da janela.",
    C: "Coagulação normal; ROTEM não deve influenciar manejo.",
    D: "Excesso de plaquetas; indicar antiagregante.",
    E: "Hipercoagulabilidade por trauma; contraindica transfusão."
  },
  resposta: "B",
  comentario: "Questão difícil porque exige ler dinâmica, não decorar um número. Tempo prolongado sugere deficiência de fatores/hemodiluição; amplitude baixa sugere plaquetas e/ou fibrinogênio; lise elevada sugere hiperfibrinólise. O tratamento deve ser guiado pelo padrão global e ensaios específicos, não por uma única ampola mágica.",
  frase_ouro: "Viscoelástico não diz 'sangra muito'; ele conta em que fase o coágulo está fracassando."
},
{
  id: "tsa-ultra-048",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Trauma pélvico",
  area: "Emergências / Crítico",
  dificuldade: "Muito difícil",
  pergunta: "Homem com fratura pélvica instável, PA 65/35, lactato 7, base excess -12, sem resposta sustentada a cristaloide. Qual combinação inicial é mais adequada?",
  alternativas: {
    A: "Retirar binder pélvico para facilitar acesso femoral e aguardar tomografia contrastada.",
    B: "Binder pélvico adequado, protocolo de transfusão maciça, correção de tríade letal e encaminhamento para controle hemorrágico por cirurgia/intervenção radiológica conforme disponibilidade e padrão de sangramento.",
    C: "Reposição de 4 a 6 L de cristaloide antes de qualquer sangue.",
    D: "Noradrenalina isolada até PAM 90 e tomografia após estabilização farmacológica.",
    E: "Analgesia neuraxial precoce para reduzir catecolaminas."
  },
  resposta: "B",
  comentario: "Fratura pélvica instável pode sangrar muito. O binder reduz volume pélvico e ajuda tamponamento. A ressuscitação deve ser hemostática, aquecida e com controle definitivo por packing, fixação, angioembolização ou abordagem combinada. Cristaloide liberal e vasopressor isolado atrasam o que salva.",
  frase_ouro: "Pelve aberta sangrando quer compressão, sangue e controle; não quer soro infinito."
},
{
  id: "tsa-ultra-049",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Gestante politraumatizada",
  area: "Obstetrícia",
  dificuldade: "Muito difícil",
  pergunta: "Gestante de 32 semanas sofre trauma abdominal fechado, chega hipotensa, confusa, com dor abdominal e desacelerações fetais. Qual princípio é correto?",
  alternativas: {
    A: "A prioridade inicial é cesariana imediata antes de estabilizar a mãe, pois fetal distress sempre indica parto primeiro.",
    B: "A melhor ressuscitação fetal é ressuscitação materna: deslocamento uterino à esquerda, oxigenação, controle hemorrágico, hemocomponentes e decisão obstétrica conforme estabilidade, idade gestacional e resposta.",
    C: "Hipotensão materna é bem tolerada pelo feto por redistribuição placentária.",
    D: "Vasopressores são absolutamente contraindicados em qualquer gestante traumatizada.",
    E: "Monitorização fetal substitui FAST e avaliação materna."
  },
  resposta: "B",
  comentario: "No trauma obstétrico, salvar a mãe é salvar o feto. Hipotensão, hipóxia e acidose maternas reduzem perfusão uteroplacentária. Deslocamento uterino, oxigênio, controle de sangramento e ressuscitação adequada vêm primeiro; cesariana pode ser necessária, mas não substitui ressuscitação materna.",
  frase_ouro: "No trauma da gestante, o feto não tem UTI melhor que uma mãe perfundida."
},
{
  id: "tsa-ultra-050",
  fonte: "Barash / Yao / Prova TSA",
  capitulo: "Trauma",
  tema: "Ketamina no TCE",
  area: "Neuroanestesia",
  dificuldade: "Muito difícil",
  pergunta: "Paciente com TCE grave e choque hemorrágico precisa de intubação. O residente afirma que cetamina é absolutamente contraindicada porque sempre aumenta pressão intracraniana. Qual resposta é mais atual e adequada?",
  alternativas: {
    A: "Cetamina é absolutamente proibida em qualquer TCE, mesmo em choque, independentemente da pressão arterial.",
    B: "Cetamina pode ser considerada em TCE, especialmente quando preservar pressão arterial é importante; o essencial é evitar hipóxia, hipotensão, hipercapnia grave e estimular resposta simpática descontrolada.",
    C: "Propofol em bolus alto é sempre preferível porque reduz PIC sem risco hemodinâmico.",
    D: "Etomidato deve ser evitado porque sempre aumenta PIC mais que cetamina.",
    E: "A escolha do indutor não influencia pressão de perfusão cerebral."
  },
  resposta: "B",
  comentario: "A antiga contraindicação absoluta da cetamina no TCE foi relativizada. Em paciente hipovolêmico, preservar pressão arterial pode ser mais importante para CPP do que uma preocupação teórica isolada com PIC. Hipóxia e hipotensão são os grandes vilões. Propofol pode reduzir PIC, mas bolus em choque pode derrubar PAM e CPP.",
  frase_ouro: "No TCE chocado, o cérebro prefere uma cetamina com pressão a um propofol elegante com hipotensão."
}
  ,
{
  id: "tsa-ultra-601",
  fonte: "Miller / Barash / Yao",
  capitulo: "Farmacologia dos opioides",
  tema: "Meia-vida contexto-sensível",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente de 62 anos será submetido a uma ressecção craniofacial com duração estimada de 9 horas. A equipe deseja despertar neurológico rápido ao final para avaliação motora e pares cranianos. Durante o planejamento, discute-se analgesia intraoperatória contínua com remifentanil, sufentanil ou fentanil. Considerando farmacocinética dos opioides em infusão prolongada, qual alternativa representa a melhor interpretação?",
  alternativas: {
    A: "O fentanil é preferível ao remifentanil porque sua meia-vida de eliminação é menor que a do sufentanil, determinando recuperação mais rápida após infusões longas.",
    B: "O sufentanil sempre apresenta despertar mais lento que o fentanil, pois sua meia-vida terminal é maior e isso define diretamente o tempo de recuperação clínica.",
    C: "O remifentanil é o mais previsível para despertar rápido, pois sua depuração por esterases inespecíficas torna sua meia-vida contexto-sensível praticamente independente da duração da infusão.",
    D: "O alfentanil é sempre superior ao sufentanil em infusões longas porque tem menor meia-vida de eliminação e menor volume de distribuição.",
    E: "A escolha do opioide é irrelevante se houver suspensão 30 minutos antes do fim, pois todos os opioides sintéticos têm queda plasmática semelhante após infusão prolongada."
  },
  resposta: "C",
  comentario: "A questão tenta te empurrar para a armadilha clássica: confundir meia-vida de eliminação com meia-vida contexto-sensível. Em anestesia venosa, especialmente após infusões longas, o que importa clinicamente não é apenas a eliminação final do fármaco, mas quanto tempo a concentração efetiva leva para cair depois que a infusão é interrompida. O remifentanil é metabolizado rapidamente por esterases plasmáticas e teciduais inespecíficas, o que faz sua recuperação ser pouco dependente do tempo de infusão. Fentanil, embora familiar e potente, acumula em compartimentos periféricos; após infusões prolongadas, retorna ao plasma e prolonga a recuperação. Sufentanil pode ter comportamento mais favorável que fentanil em algumas durações de infusão por diferenças de distribuição, apesar de meia-vida terminal maior. Moral da história: quem responde só pela meia-vida terminal cai na casca de banana da farmacocinética.",
  frase_ouro: "Em infusão contínua, quem manda no despertar não é a meia-vida terminal isolada: é o contexto."
},
{
  id: "tsa-ultra-602",
  fonte: "Miller / Barash / Yao",
  capitulo: "Modelos farmacocinéticos",
  tema: "TCI e concentração-alvo",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Homem de 84 anos, 54 kg, frágil, será submetido à correção de aneurisma endovascular sob anestesia venosa total. A bomba de infusão alvo-controlada é programada para concentração no sítio efetor de propofol usando dados de idade, sexo, peso e altura. Após bolus inicial calculado pelo modelo, ocorre hipotensão importante e eletroencefalograma processado sugere anestesia excessiva. Qual interpretação é mais adequada?",
  alternativas: {
    A: "A bomba alvo-controlada mede continuamente a concentração cerebral real; portanto, hipotensão não pode ser atribuída a excesso de propofol se o alvo estava adequado.",
    B: "Modelos alvo-controlados estimam concentrações plasmáticas ou de sítio efetor com base em populações e covariáveis, mas não substituem titulação clínica individual, especialmente em idosos frágeis.",
    C: "A concentração de sítio efetor é sempre menor que a plasmática durante toda a anestesia, logo não há risco de sobredose inicial quando se escolhe alvo no efeito.",
    D: "A fragilidade modifica apenas farmacocinética renal, sem relevância para propofol, pois sua eliminação é predominantemente hepática.",
    E: "A hipotensão sugere obrigatoriamente hipovolemia, porque modelos de propofol são suficientemente precisos para excluir efeito farmacodinâmico excessivo."
  },
  resposta: "B",
  comentario: "A TCI é ferramenta elegante, mas não é clarividência farmacológica. Ela usa modelos derivados de populações e estima concentração plasmática ou no sítio efetor; não mede a concentração real no cérebro. Idosos frágeis têm menor reserva fisiológica, maior sensibilidade farmacodinâmica a hipnóticos, menor resposta barorreflexa e frequentemente menor volume central efetivo. Mesmo que o modelo inclua idade e composição corporal, existe variabilidade individual. A concentração-alvo deve ser ponto de partida, não ordem divina. No TSA Ultra, a resposta inteligente é reconhecer a utilidade da tecnologia e, ao mesmo tempo, seus limites.",
  frase_ouro: "TCI estima; o paciente confirma ou desmente."
},
{
  id: "tsa-ultra-603",
  fonte: "Miller / Barash / Yao",
  capitulo: "Farmacologia dos hipnóticos",
  tema: "Cetamina no choque",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente de 71 anos com sepse abdominal grave, lactato 6,2 mmol/L, noradrenalina em dose alta e ecocardiografia mostrando ventrículo esquerdo hipocinético será induzido para laparotomia. Um residente sugere cetamina em dose plena porque ela sempre aumenta pressão arterial. Qual alternativa é a melhor?",
  alternativas: {
    A: "A cetamina é sempre o hipnótico mais seguro no choque, pois sua ação simpaticomimética independe do estado catecolaminérgico do paciente.",
    B: "A cetamina deve ser evitada em todos os pacientes sépticos porque aumenta invariavelmente a pressão intracraniana e a resistência vascular pulmonar.",
    C: "A cetamina pode preservar pressão arterial por estímulo simpático, mas em paciente catecolamina-depletado ou com disfunção miocárdica seu efeito depressor direto pode se manifestar.",
    D: "A cetamina não tem efeito cardiovascular direto; todas as alterações hemodinâmicas são mediadas exclusivamente por liberação de adrenalina pela medula adrenal.",
    E: "A cetamina é contraindicada se o paciente usa noradrenalina, pois há interação farmacológica que bloqueia receptores alfa-adrenérgicos."
  },
  resposta: "C",
  comentario: "A cetamina é muito útil, mas não é amuleto contra hipotensão. Ela tem efeito simpatomimético indireto, aumentando tônus adrenérgico e podendo elevar frequência cardíaca, pressão arterial e débito cardíaco. Porém, o fármaco também possui efeito depressor miocárdico direto. Em pacientes criticamente doentes, sépticos, acidóticos, catecolamina-depletados ou com miocárdio já deprimido, o componente indireto pode ser insuficiente para mascarar a depressão direta. Portanto, a indução deve ser titulada, com vasopressores prontos, cálcio se indicado, correção de acidose/hipocalcemia e plano de ventilação que não destrua retorno venoso. Questão de prova boa adora transformar 'costuma aumentar pressão' em 'sempre aumenta pressão'. Aí mora o crime.",
  frase_ouro: "Cetamina ajuda no choque, mas não ressuscita fisiologia quebrada no grito."
},
{
  id: "tsa-ultra-604",
  fonte: "Miller / Barash / Yao",
  capitulo: "Farmacologia dos hipnóticos",
  tema: "Etomidato e adrenal",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Homem de 59 anos com choque séptico por pneumonia necrosante, já em noradrenalina, necessita intubação orotraqueal na emergência. O plantonista considera etomidato pela estabilidade cardiovascular. Sobre esse cenário, assinale a alternativa mais correta.",
  alternativas: {
    A: "Etomidato é ideal no choque séptico porque não interfere na resposta adrenal e preserva completamente a síntese de cortisol.",
    B: "Etomidato pode produzir estabilidade hemodinâmica relativa na indução, mas inibe enzimas da esteroidogênese adrenal, devendo ser usado com ponderação no choque séptico.",
    C: "A supressão adrenal pelo etomidato só ocorre após infusão contínua por mais de 24 horas, nunca após dose única de indução.",
    D: "Etomidato é contraindicado em qualquer paciente instável, pois causa liberação maciça de histamina e vasoplegia imediata.",
    E: "A principal limitação do etomidato na sepse é depressão respiratória prolongada por metabólitos ativos renais."
  },
  resposta: "B",
  comentario: "Etomidato é tentador no paciente instável porque costuma causar menor queda pressórica que propofol ou tiopental. Só que cobra pedágio na adrenal: inibe enzimas envolvidas na síntese de cortisol, especialmente a 11-beta-hidroxilase. A supressão pode ocorrer mesmo após dose única, embora a tradução clínica em mortalidade seja debatida. Em choque séptico grave, justamente quando o organismo depende de resposta corticosteroide ao estresse, isso importa. A resposta madura não é 'nunca use' nem 'use sempre'; é reconhecer risco, benefício, alternativas e contexto. Se usado, o paciente deve ser acompanhado quanto à necessidade de corticosteroide no choque refratário.",
  frase_ouro: "Etomidato preserva pressão na porta de entrada, mas pode cobrar na adrenal depois."
},
{
  id: "tsa-ultra-605",
  fonte: "Miller / Barash / Yao",
  capitulo: "Sedativos e agonistas alfa-2",
  tema: "Dexmedetomidina",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente de 77 anos, com bloqueio atrioventricular de primeiro grau, estenose aórtica moderada e uso crônico de betabloqueador, recebe dose de ataque de dexmedetomidina para sedação em bloqueio regional. Dez minutos depois apresenta pressão arterial de 196/92 mmHg, frequência cardíaca de 38/min e sonolência, mantendo ventilação espontânea. Qual explicação é mais adequada?",
  alternativas: {
    A: "A hipertensão inicial exclui relação com dexmedetomidina, pois agonistas alfa-2 causam apenas hipotensão por ação central.",
    B: "O quadro pode decorrer de ação periférica alfa-2B com vasoconstrição inicial, associada a bradicardia por redução simpática e aumento vagal, especialmente em paciente vulnerável.",
    C: "A dexmedetomidina causa depressão respiratória intensa antes de efeitos hemodinâmicos; a ventilação preservada afasta toxicidade.",
    D: "O fármaco é contraindicado apenas em pacientes com bloqueio atrioventricular total; bloqueios menores não alteram risco.",
    E: "A conduta correta é administrar nova dose de ataque para compensar a hipertensão reflexa e estabilizar o sistema nervoso autônomo."
  },
  resposta: "B",
  comentario: "Dexmedetomidina é sedativo bonito no papel: sedação cooperativa, pouca depressão ventilatória e analgesia discreta. Mas no mundo real ela mexe com o sistema nervoso autônomo como quem mexe em bomba de infusão no escuro. Pode haver hipertensão transitória por ativação periférica alfa-2B, especialmente com bolus rápido, seguida ou acompanhada de bradicardia e hipotensão por ação central simpaticolítica. Idoso, betabloqueio, distúrbio de condução e valvopatia aumentam risco de bradicardia clinicamente relevante. Não confunda 'pouca depressão respiratória' com 'sedação sem risco'.",
  frase_ouro: "Dexmedetomidina respira bem, mas pode frear o nó sinusal sem pedir licença."
},
{
  id: "tsa-ultra-606",
  fonte: "Miller / Barash / Yao",
  capitulo: "Anestésicos locais",
  tema: "pH, ionização e falha de bloqueio",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Mulher de 44 anos com abscesso axilar extenso será submetida à drenagem. Infiltração local com lidocaína aparentemente em dose adequada produz analgesia muito incompleta, apesar de aguardar tempo suficiente. Qual alternativa melhor explica o fenômeno?",
  alternativas: {
    A: "O tecido infectado aumenta o pH local, tornando a lidocaína mais ionizada e menos capaz de bloquear canais de sódio.",
    B: "O tecido infectado reduz o pH local, aumentando a fração ionizada do anestésico local e reduzindo a quantidade de base não ionizada que atravessa a membrana neural.",
    C: "A infecção aumenta a ligação proteica da lidocaína, impedindo sua metabolização hepática e encurtando a duração do bloqueio.",
    D: "A lidocaína só funciona em nervos mielinizados, e fibras nociceptivas de abscessos são exclusivamente amielínicas.",
    E: "A falha ocorre porque anestésicos locais bloqueiam canais de cálcio, que são inativados pelo ambiente purulento."
  },
  resposta: "B",
  comentario: "Anestésico local precisa atravessar a membrana neural na forma base não ionizada; dentro do axoplasma, a forma ionizada é a que interage melhor com o canal de sódio. Em tecido infectado, o pH baixo desloca o equilíbrio para a forma ionizada fora do nervo. Resultado: menos moléculas atravessam a membrana, e o bloqueio falha ou fica incompleto. A prova pode temperar isso com 'dose adequada' para ver se você entende que o problema não é só quantidade, mas distribuição química. Alcalinização com bicarbonato pode acelerar início em algumas situações, mas não transforma pus em ambiente ideal para anestesia local.",
  frase_ouro: "No abscesso, o anestésico local chega carregado demais para atravessar a porta."
},
{
  id: "tsa-ultra-607",
  fonte: "Miller / Barash / Yao",
  capitulo: "Toxicidade por anestésico local",
  tema: "LAST e fatores agravantes",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Gestante de 36 semanas recebe dose epidural fracionada para analgesia de parto. Após uma fração adicional, apresenta zumbido, gosto metálico, agitação, convulsão e, em seguida, taquicardia ventricular. A gasometria mostra acidose respiratória importante por hipoventilação durante a crise. Sobre a toxicidade sistêmica por anestésico local, assinale a melhor alternativa.",
  alternativas: {
    A: "A acidose reduz a toxicidade cardíaca dos anestésicos locais ao diminuir a fração livre plasmática.",
    B: "A gestação protege contra toxicidade sistêmica porque aumenta o volume de distribuição plasmático dos anestésicos locais.",
    C: "Hipóxia, hipercarbia e acidose agravam a toxicidade, e o tratamento exige ventilação adequada, controle de convulsão e emulsão lipídica em toxicidade grave.",
    D: "A prioridade é cardioversão imediata; ventilação e oxigenação são secundárias porque a toxicidade é exclusivamente elétrica.",
    E: "A emulsão lipídica é reservada apenas para toxicidade por lidocaína, não tendo papel em bupivacaína ou ropivacaína."
  },
  resposta: "C",
  comentario: "A toxicidade por anestésico local é uma emergência de neurologia, cardiologia e ventilação ao mesmo tempo. Hipóxia, hipercarbia e acidose pioram ligação do anestésico ao canal de sódio e reduzem reserva cardiovascular; por isso ventilar bem não é detalhe, é tratamento. Gestação aumenta vulnerabilidade por alterações fisiológicas, maior sensibilidade neural e cardiovascular e ingurgitamento venoso epidural, que pode aumentar risco de injeção intravascular. A emulsão lipídica deve ser acionada precocemente em toxicidade grave, especialmente com instabilidade cardiovascular. Questão boa não quer só 'lipídio'; quer saber que oxigênio e ventilação salvam o lipídio de trabalhar sozinho.",
  frase_ouro: "Na LAST, acidose é gasolina no incêndio do canal de sódio."
},
{
  id: "tsa-ultra-608",
  fonte: "Miller / Barash / Yao",
  capitulo: "Bloqueadores neuromusculares",
  tema: "Sugamadex e insuficiência renal",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente com doença renal crônica terminal em hemodiálise será submetido à cirurgia abdominal urgente. Durante o caso recebe rocurônio em doses repetidas e, ao final, apresenta bloqueio profundo com contagem pós-tetânica baixa. A equipe sugere neostigmina em dose alta para evitar uso de sugamadex por insuficiência renal. Qual conduta conceitual é mais correta?",
  alternativas: {
    A: "Neostigmina em dose alta reverte com segurança qualquer profundidade de bloqueio aminosteroidal, desde que associada à atropina.",
    B: "Sugamadex encapsula rocurônio, mas o complexo é eliminado predominantemente por via renal; em insuficiência renal grave, seu uso exige ponderação, monitorização e conhecimento do risco de exposição prolongada.",
    C: "Rocurônio é completamente metabolizado por esterases plasmáticas, portanto a insuficiência renal não altera a duração de bloqueio.",
    D: "Em bloqueio profundo, a melhor estratégia é extubar acordado e observar, porque estímulo cirúrgico residual mantém ventilação espontânea.",
    E: "A presença de insuficiência renal contraindica qualquer monitorização quantitativa, pois o trem de quatro perde validade."
  },
  resposta: "B",
  comentario: "Neostigmina tem teto: ela aumenta acetilcolina na junção neuromuscular, mas não derrota bloqueio profundo sem recuperação espontânea mínima. Sugamadex age de forma diferente, encapsulando rocurônio e vecurônio, o que o torna muito eficaz mesmo em bloqueios mais profundos. O problema no renal crônico é que o complexo sugamadex-rocurônio depende de eliminação renal, podendo permanecer por mais tempo. A questão não é decorar 'pode' ou 'não pode', e sim demonstrar pensamento: profundidade do bloqueio, risco de ventilação inadequada, monitorização quantitativa, possibilidade de manter intubado e risco-benefício do sugamadex. Extubação sem recuperação documentada é pedir para o plantão virar churrasco de receptor nicotínico.",
  frase_ouro: "Neostigmina não é retroescavadeira: não tira paciente de bloqueio profundo."
},
{
  id: "tsa-ultra-609",
  fonte: "Miller / Barash / Yao",
  capitulo: "Reversão neuromuscular",
  tema: "Neostigmina e bloqueio residual",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Ao final de colecistectomia videolaparoscópica, paciente apresenta relação do trem de quatro de 0,92 medida quantitativamente. Um colega sugere neostigmina para 'garantir' recuperação completa. Qual alternativa é mais adequada?",
  alternativas: {
    A: "Neostigmina deve ser usada sempre que houver qualquer bloqueador neuromuscular no intraoperatório, independentemente do trem de quatro.",
    B: "Neostigmina em paciente praticamente recuperado pode produzir fraqueza paradoxal por excesso colinérgico na junção neuromuscular e não deve ser usada de forma automática.",
    C: "Relação do trem de quatro acima de 0,7 exclui qualquer risco respiratório, logo a monitorização quantitativa é desnecessária.",
    D: "Neostigmina não tem efeitos muscarínicos relevantes quando usada com glicopirrolato ou atropina.",
    E: "A reversão farmacológica substitui avaliação clínica, capnografia e força ventilatória no momento da extubação."
  },
  resposta: "B",
  comentario: "A reversão deve ser proporcional ao bloqueio existente. Neostigmina é útil quando ainda há bloqueio recuperável, mas não deve ser aplicada como água benta no final do caso. Em paciente com recuperação quase completa, excesso de acetilcolina pode prejudicar transmissão neuromuscular e gerar fraqueza, além de efeitos muscarínicos. A meta moderna é monitorização quantitativa e relação do trem de quatro idealmente igual ou superior a 0,9, mas o contexto clínico permanece essencial. O erro de prova é achar que 'mais reversor' sempre significa 'mais força'. Não significa.",
  frase_ouro: "Reversor demais também pode atrapalhar; receptor não gosta de zelo histérico."
},
{
  id: "tsa-ultra-610",
  fonte: "Miller / Barash / Yao",
  capitulo: "Anestésicos inalatórios",
  tema: "MAC e modificadores",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente de 72 anos, hipotérmico, em uso de remifentanil, será mantido com sevoflurano durante laparotomia. Um residente observa que a concentração expirada está abaixo de 1 MAC adulto e conclui que o paciente está superficial. Qual alternativa interpreta melhor o conceito de MAC nesse cenário?",
  alternativas: {
    A: "MAC é concentração cerebral medida diretamente, invariável entre pacientes e independente de idade, temperatura ou fármacos associados.",
    B: "Idade avançada, hipotermia e opioides reduzem a necessidade de anestésico inalatório; portanto, uma fração expirada aparentemente baixa pode ser clinicamente adequada.",
    C: "Opioides aumentam MAC dos halogenados porque reduzem estímulo cirúrgico e exigem maior hipnose.",
    D: "Hipotermia aumenta MAC por reduzir metabolismo hepático dos anestésicos inalatórios.",
    E: "MAC se aplica apenas a óxido nitroso e não deve ser usado para halogenados modernos."
  },
  resposta: "B",
  comentario: "MAC é uma medida populacional: concentração alveolar que impede movimento em resposta a estímulo cirúrgico em 50% dos indivíduos. Ela não é medidor individual de consciência e muda com idade, temperatura, gestação e coadministração de outros fármacos. Idoso precisa de menos halogenado; hipotermia reduz MAC; opioides reduzem resposta motora e necessidade de agente inalatório para imobilidade. A fração expirada ajuda muito, mas deve ser interpretada com idade e contexto farmacológico. A pergunta é maldosa porque coloca um número bonito na tela e espera que você esqueça o paciente em volta.",
  frase_ouro: "MAC é mapa populacional, não GPS absoluto do córtex."
},
{
  id: "tsa-ultra-611",
  fonte: "Miller / Barash / Yao",
  capitulo: "Captação dos anestésicos inalatórios",
  tema: "Débito cardíaco e FA/FI",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Homem de 68 anos com choque cardiogênico, em dobutamina e noradrenalina, recebe desflurano após indução. Mesmo com ajuste baixo no vaporizador, a fração alveolar sobe rapidamente e ocorre hipotensão acentuada. Qual alternativa explica melhor o fenômeno?",
  alternativas: {
    A: "Baixo débito cardíaco aumenta a captação pulmonar do anestésico, retardando a elevação da fração alveolar.",
    B: "Baixo débito cardíaco reduz a remoção do anestésico dos alvéolos pelo sangue, fazendo a fração alveolar subir mais rapidamente em direção à inspirada.",
    C: "A velocidade de aumento da fração alveolar depende apenas da solubilidade sangue-gás, não sendo influenciada por débito cardíaco.",
    D: "A hipotensão exclui sobredose relativa de halogenado, pois anestésicos inalatórios não deprimem miocárdio em choque.",
    E: "Desflurano não sofre influência de alterações hemodinâmicas por ter baixa solubilidade."
  },
  resposta: "B",
  comentario: "Em baixo débito, menos sangue passa pelos pulmões retirando anestésico dos alvéolos. Assim, a razão fração alveolar/fração inspirada aumenta mais rápido. Isso acelera equilíbrio com o cérebro e pode causar efeito anestésico mais intenso que o esperado para o dial. Em paciente cardiogênico, pequenas mudanças na vasodilatação, contratilidade e frequência podem derrubar a hemodinâmica. Alta solubilidade torna esse efeito mais dramático, mas mesmo agentes pouco solúveis devem ser titulados com respeito em baixo débito. Aqui a fisiologia dá rasteira: menos circulação pode significar mais anestésico no alvéolo e no cérebro, não menos.",
  frase_ouro: "No baixo débito, o alvéolo enche rápido e a pressão cai mais rápido ainda."
},
{
  id: "tsa-ultra-612",
  fonte: "Miller / Barash / Yao",
  capitulo: "Óxido nitroso",
  tema: "Cavidades fechadas e difusão",
  area: "Farmacologia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente politraumatizado será submetido à laparotomia exploradora. A tomografia mostra pequeno pneumotórax não drenado e há suspeita de pneumoencéfalo discreto. Durante a indução, cogita-se óxido nitroso para reduzir consumo de halogenado. Qual alternativa é a melhor?",
  alternativas: {
    A: "Óxido nitroso é seguro em pneumotórax pequeno, pois sua baixa solubilidade impede difusão para cavidades fechadas.",
    B: "Óxido nitroso deve ser evitado, pois difunde-se para cavidades fechadas contendo ar mais rapidamente do que o nitrogênio sai, podendo expandi-las.",
    C: "Óxido nitroso reduz volume de cavidades aéreas por substituir nitrogênio por moléculas menores.",
    D: "O risco existe apenas em alças intestinais, não em pneumotórax, ouvido médio, balões ou pneumoencéfalo.",
    E: "A contraindicação depende apenas da fração inspirada; abaixo de 50%, não há expansão clinicamente relevante."
  },
  resposta: "B",
  comentario: "Óxido nitroso difunde-se para espaços fechados com ar com rapidez maior que a saída do nitrogênio. Isso pode expandir pneumotórax, pneumoencéfalo, bolhas pulmonares, alças obstruídas, ouvido médio e balões de dispositivos. Em trauma, onde diagnósticos podem estar incompletos e a fisiologia muda rápido, o benefício de reduzir halogenado raramente justifica o risco. A alternativa correta mostra entendimento de difusão, não medo irracional do gás. Em prova, quando aparecer cavidade fechada com ar, o óxido nitroso entra na lista dos convidados que devem ficar do lado de fora.",
  frase_ouro: "Óxido nitroso adora cavidade fechada; por isso o anestesista deve odiar esse encontro."
},
{
  id: "tsa-ultra-613",
  fonte: "Miller / Barash / Yao",
  capitulo: "Aparelho de anestesia",
  tema: "Crossover de gases e fail-safe",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Durante anestesia geral em sala recém-reformada, o analisador de gases mostra fração inspirada de oxigênio de 12%, apesar do fluxômetro de oxigênio indicar 3 L/min. A pressão da rede de oxigênio no aparelho está aparentemente normal e o alarme de baixa pressão de oxigênio não dispara. Qual é a explicação e conduta mais adequada?",
  alternativas: {
    A: "O sistema fail-safe garante concentração mínima de oxigênio; portanto, o analisador deve estar errado e a anestesia pode continuar.",
    B: "Pode haver crossover ou contaminação da tubulação com gás não oxigênio; deve-se abrir cilindro reserva de oxigênio, desconectar a rede e ventilar com fonte segura.",
    C: "O problema é incompatível com crossover, pois a pressão normal da rede exclui fornecimento de gás errado.",
    D: "Deve-se aumentar o fluxo de óxido nitroso para reativar o sistema proporcional de segurança.",
    E: "A válvula de flush de oxigênio corrige definitivamente qualquer problema de composição do gás da rede."
  },
  resposta: "B",
  comentario: "O fail-safe clássico responde à pressão de oxigênio, não à identidade molecular do gás. Se a tubulação de oxigênio estiver pressurizada com gás errado, o aparelho pode achar que está tudo bem. O único monitor que realmente informa a fração entregue de oxigênio é o analisador de oxigênio no circuito. A conduta é tratar como falha/contaminação de rede: abrir cilindro de oxigênio reserva, desconectar suprimento da parede, ventilar com oxigênio confiável e considerar bolsa autoinflável com fonte independente. Essa é questão de aparelho que derruba quem acredita demais na máquina e pouco no analisador.",
  frase_ouro: "Fail-safe lê pressão; quem lê oxigênio é o analisador."
},
{
  id: "tsa-ultra-614",
  fonte: "Miller / Barash / Yao",
  capitulo: "Aparelho de anestesia",
  tema: "Cilindro E de oxigênio",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Na checagem matinal, o anestesiologista percebe que o cilindro E de oxigênio do aparelho estava aberto desde o plantão anterior. A rede central funciona com pressão normal. Qual é o maior risco de manter o cilindro aberto durante operação rotineira?",
  alternativas: {
    A: "O aparelho passará a consumir exclusivamente o cilindro, esvaziando-o rapidamente mesmo com rede central normal.",
    B: "O cilindro aberto pode mascarar falha catastrófica da rede, retardando o alarme de baixa pressão até que o cilindro esteja depletado.",
    C: "A presença do cilindro aberto aumenta automaticamente a fração inspirada de oxigênio para 100%, causando atelectasia.",
    D: "O cilindro aberto desativa o vaporizador e causa consciência intraoperatória.",
    E: "O cilindro aberto impede funcionamento do fluxômetro de ar comprimido."
  },
  resposta: "B",
  comentario: "Em condições normais, a máquina tende a usar a rede central, pois sua pressão é adequada. O perigo do cilindro aberto é outro: se a rede falhar, o cilindro já aberto mantém pressão no sistema por algum tempo, mascarando a falha. O alarme de baixa pressão pode só aparecer quando o cilindro estiver quase vazio ou vazio — exatamente quando você mais precisaria dele. Por isso, cilindro reserva deve estar presente, cheio o suficiente e fechado durante uso rotineiro, pronto para ser aberto na falha da rede. É aquela coisa: reserva aberta não é reserva, é spoiler de desastre.",
  frase_ouro: "Cilindro reserva aberto é guarda-chuva furado antes da tempestade."
},
{
  id: "tsa-ultra-615",
  fonte: "Miller / Barash / Yao",
  capitulo: "Aparelho de anestesia",
  tema: "Flush de oxigênio",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Durante anestesia pediátrica em ventilador mecânico antigo, o residente aciona repetidamente o flush de oxigênio durante a fase inspiratória para corrigir dessaturação. Em seguida, a pressão de via aérea sobe abruptamente. Qual alternativa é mais correta?",
  alternativas: {
    A: "O flush de oxigênio passa obrigatoriamente pelo vaporizador, aumentando anestesia e reduzindo risco de consciência.",
    B: "O flush fornece alto fluxo diretamente ao circuito comum, podendo causar barotrauma em máquinas antigas e também diluir anestésico inalatório.",
    C: "O flush de oxigênio reduz pressão no circuito porque aspira gás expirado para o sistema antipoluição.",
    D: "O risco existe apenas em adultos, pois circuitos pediátricos têm alta complacência protetora.",
    E: "Em qualquer aparelho moderno ou antigo, o flush durante inspiração é completamente inofensivo devido aos sistemas proporcionais."
  },
  resposta: "B",
  comentario: "A válvula de flush entrega alto fluxo de oxigênio diretamente ao circuito, geralmente contornando vaporizadores. Em máquinas antigas, acioná-la durante a inspiração mecânica pode somar fluxo ao volume entregue e causar barotrauma, especialmente em crianças. Além disso, ao passar fora do vaporizador, pode reduzir concentração inspirada do anestésico, contribuindo para anestesia mais superficial se usado repetidamente. Workstations modernas têm recursos como desacoplamento de gás fresco ou limitadores de pressão, mas não é licença para apertar botão azul como videogame. Primeiro corrija causa de dessaturação; flush é ferramenta, não reflexo patelar.",
  frase_ouro: "Flush de oxigênio não é botão de pânico sem custo."
},
{
  id: "tsa-ultra-616",
  fonte: "Miller / Barash / Yao",
  capitulo: "Aparelho de anestesia",
  tema: "Vazamento de baixa pressão",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Em anestesia com sevoflurano, paciente apresenta movimento e aumento de pressão arterial apesar de vaporizador ligado em concentração adequada. O analisador mostra fração expirada muito menor que a ajustada. O teste automático do aparelho pela manhã havia sido aprovado. Qual hipótese deve ser valorizada?",
  alternativas: {
    A: "Vazamento no sistema de baixa pressão, inclusive no vaporizador ou conexões até a saída comum de gases, que pode não ser detectado por alguns testes automáticos.",
    B: "Falha do sistema de alta pressão do cilindro, pois vazamentos de baixa pressão não alteram concentração anestésica.",
    C: "Excesso de cal sodada, que absorve sevoflurano de forma completa quando nova.",
    D: "Ativação do fail-safe de oxigênio, que aumenta obrigatoriamente a entrega de halogenado.",
    E: "Ausência de sistema antipoluição, que reduz concentração expirada por aspiração traqueal."
  },
  resposta: "A",
  comentario: "A seção de baixa pressão vai dos controles de fluxo, passa pelos vaporizadores e chega à saída comum de gases. Vazamentos nessa região são traiçoeiros: podem causar entrega inadequada de agente inalatório, mistura hipóxica ou dificuldade ventilatória, e nem sempre são detectados por checagens automáticas, especialmente se o vaporizador não foi testado ligado. Quando o vaporizador está ajustado, mas a fração expirada não acompanha, não brigue com o paciente; investigue a entrega real. Analisador de agente é seu advogado contra o aparelho.",
  frase_ouro: "Vaporizador ligado não é sinônimo de anestésico entregue."
},
{
  id: "tsa-ultra-617",
  fonte: "Miller / Barash / Yao",
  capitulo: "Aparelho de anestesia",
  tema: "Absorvedor de gás carbônico exaurido",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Durante cirurgia longa em baixo fluxo, a capnografia mostra elevação progressiva da linha de base inspiratória de gás carbônico, apesar de ventilação minuto aumentada. A pressão inspiratória e o volume corrente estão preservados. Qual é a explicação mais provável?",
  alternativas: {
    A: "Absorvedor de gás carbônico exaurido ou canalizado, levando à reinalação de gás carbônico.",
    B: "Embolia pulmonar maciça, que tipicamente aumenta gás carbônico inspirado no circuito.",
    C: "Desconexão completa do circuito, que preserva capnograma com linha de base elevada.",
    D: "Hiperventilação alveolar, que aumenta gás carbônico inspirado por redução de espaço morto.",
    E: "Falha do oxímetro, que interfere diretamente na leitura de capnografia."
  },
  resposta: "A",
  comentario: "Linha de base inspiratória de gás carbônico subindo é pista forte de reinalação. As causas incluem cal sodada exaurida, canalização do absorvedor, válvula unidirecional defeituosa ou fluxo fresco muito baixo em sistema inadequado. A cor do absorvedor ajuda, mas não deve ser a única fonte de verdade; capnografia é dinâmica e mostra o problema durante o caso. A conduta é aumentar fluxo fresco, trocar absorvedor, verificar válvulas e circuito. A prova adora ver se você confunde hipercapnia por produção/ventilação com reinalação: na reinalação, o inspirado já vem contaminado.",
  frase_ouro: "Se o paciente inspira gás carbônico, o problema pode estar antes do pulmão."
},
{
  id: "tsa-ultra-618",
  fonte: "Miller / Barash / Yao",
  capitulo: "Aparelho de anestesia",
  tema: "Absorvedor dessecado e monóxido de carbono",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Na primeira anestesia de segunda-feira, após o aparelho ter ficado com fluxo de gases aberto durante o fim de semana, paciente sob desflurano apresenta coloração rósea, oxímetro persistentemente 100%, mas gasometria com co-oximetria mostra carboxi-hemoglobina muito elevada. Qual é o mecanismo mais provável?",
  alternativas: {
    A: "Formação de composto A por sevoflurano em absorvedor fresco, causando carboxi-hemoglobinemia grave.",
    B: "Produção de monóxido de carbono pela degradação de anestésicos voláteis em absorvedor de gás carbônico dessecado, especialmente com agentes como desflurano.",
    C: "Falha do oxímetro, pois carboxi-hemoglobina sempre reduz saturação periférica para valores próximos de zero.",
    D: "Reação do óxido nitroso com hemoglobina fetal, formando meta-hemoglobina.",
    E: "Absorção direta de gás carbônico pelo sangue, deslocando oxigênio da hemoglobina."
  },
  resposta: "B",
  comentario: "Absorvedores dessecados, especialmente com bases fortes, podem degradar voláteis e produzir monóxido de carbono. O cenário clássico é máquina esquecida com fluxo ligado por longo período, muitas vezes depois do fim de semana. O oxímetro de pulso convencional não diferencia adequadamente oxi-hemoglobina de carboxi-hemoglobina e pode mostrar saturação falsamente tranquilizadora. O diagnóstico exige co-oximetria. Desflurano e isoflurano são mais implicados que sevoflurano nesse fenômeno. Conduta: trocar absorvedor suspeito, usar alto fluxo de oxigênio, suspender exposição e tratar intoxicação conforme gravidade.",
  frase_ouro: "SpO2 bonita não absolve monóxido de carbono."
},
{
  id: "tsa-ultra-619",
  fonte: "Miller / Barash / Yao",
  capitulo: "Vaporizadores",
  tema: "Desflurano",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Em hospital de altitude elevada, paciente é mantido com desflurano em vaporizador específico aquecido e pressurizado. Apesar do dial em concentração usual, o plano anestésico parece mais superficial que o esperado para o mesmo percentual usado ao nível do mar. Qual alternativa explica melhor?",
  alternativas: {
    A: "Em altitude, a concentração percentual dialada corresponde a menor pressão parcial do agente; pode ser necessário ajustar o dial para manter pressão parcial anestésica equivalente.",
    B: "O vaporizador de desflurano é variável bypass convencional, portanto aumenta automaticamente a pressão parcial em altitude.",
    C: "A altitude aumenta a potência do desflurano porque reduz sua pressão de vapor saturado.",
    D: "A concentração percentual é sempre equivalente à pressão parcial, independentemente da pressão barométrica.",
    E: "O desflurano não pode ser usado em altitude porque seu ponto de ebulição cai para zero grau Celsius."
  },
  resposta: "A",
  comentario: "Efeito anestésico depende mais da pressão parcial do agente que da porcentagem isolada. Em altitude, a pressão barométrica é menor; a mesma porcentagem representa menor pressão parcial. Vaporizadores de desflurano mantêm concentração percentual de saída de forma estável, mas isso não significa mesma pressão parcial cerebral ao nível do mar. Desflurano exige vaporizador especial porque tem alta pressão de vapor e ponto de ebulição próximo à temperatura ambiente, funcionando como dispositivo aquecido e pressurizado, mais parecido com um misturador de gases do que com vaporizador variável bypass clássico.",
  frase_ouro: "Em altitude, porcentagem é número bonito; pressão parcial é o que anestesia."
},
{
  id: "tsa-ultra-620",
  fonte: "Miller / Barash / Yao",
  capitulo: "Vaporizadores e absorvedores",
  tema: "Sevoflurano e composto A",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente sem doença renal será mantido com sevoflurano em técnica de baixo fluxo por 5 horas. Um colega afirma que baixo fluxo com sevoflurano é proibido porque sempre causa lesão renal por composto A. Qual alternativa é mais adequada?",
  alternativas: {
    A: "A afirmação é correta; qualquer baixo fluxo com sevoflurano causa nefrotoxicidade humana clinicamente inevitável.",
    B: "Sevoflurano pode formar composto A ao interagir com absorvedores de gás carbônico, especialmente em baixo fluxo e certas condições, mas a relevância clínica renal em humanos nas práticas modernas é limitada.",
    C: "Composto A é formado principalmente por desflurano em absorvedor dessecado e causa carboxi-hemoglobinemia.",
    D: "O risco de composto A é eliminado aumentando a concentração de sevoflurano no circuito.",
    E: "Absorvedores frescos nunca participam de degradação de anestésicos inalatórios."
  },
  resposta: "B",
  comentario: "Sevoflurano pode degradar-se em contato com absorvedores de gás carbônico formando composto A, e a formação aumenta em condições como baixo fluxo, maior concentração de sevoflurano, temperatura elevada do absorvedor e alguns tipos de absorvedor. Porém, estudos clínicos modernos não demonstraram a catástrofe renal universal que a frase do colega sugere. É tema de prova porque exige equilíbrio: saber o mecanismo sem transformar em dogma. Monitore contexto, use absorvedor adequado, evite absorvedor ressecado e respeite recomendações do equipamento/instituição.",
  frase_ouro: "Composto A existe; pânico automático também existe, mas não ajuda."
},
{
  id: "tsa-ultra-621",
  fonte: "Miller / Barash / Yao",
  capitulo: "Sistema antipoluição",
  tema: "Scavenging ativo fechado",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Após troca do sistema antipoluição, o balão reservatório do scavenging ativo fechado permanece completamente colabado durante anestesia, e o ventilador começa a apresentar comportamento errático. Qual interpretação é mais adequada?",
  alternativas: {
    A: "O balão colabado indica funcionamento ideal, pois todo gás residual deve ser aspirado sem resistência.",
    B: "Sucção excessiva ou falha da válvula de pressão negativa pode transmitir pressão negativa indevida ao sistema, exigindo ajuste imediato.",
    C: "O sistema antipoluição não se comunica de nenhuma forma com o circuito anestésico; alterações são sempre coincidência.",
    D: "O problema se corrige aumentando a fração de óxido nitroso.",
    E: "A válvula de pressão positiva é a única necessária em sistema ativo fechado."
  },
  resposta: "B",
  comentario: "No scavenging ativo fechado, há reservatório ligado à sucção. Ele deve ficar adequadamente insuflado, nem tenso nem colabado. Se a sucção for excessiva e a válvula de pressão negativa falhar ou for insuficiente, pressão negativa pode ser transmitida ao circuito, interferindo na ventilação. Se o reservatório ficar hiperinsuflado, o problema pode ser obstrução ou sucção insuficiente, com escape de gases para sala pela válvula positiva. Sistema antipoluição parece periférico, mas quando mal ajustado pode virar vilão ventilatório silencioso.",
  frase_ouro: "Balão do scavenging também fala; colabado demais, ele está gritando sucção."
},
{
  id: "tsa-ultra-622",
  fonte: "Miller / Barash / Yao",
  capitulo: "Sistema circular",
  tema: "Válvulas unidirecionais",
  area: "Aparelhos de anestesia",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente em anestesia geral apresenta capnograma com reinalação de gás carbônico. O absorvedor é novo e adequadamente instalado. Ao ventilar manualmente um pulmão-teste, percebe-se fluxo anormal durante inspiração e expiração. Qual alternativa é a mais provável?",
  alternativas: {
    A: "Válvula unidirecional inspiratória ou expiratória presa, ausente ou incompetente, causando fluxo retrógrado e reinalação.",
    B: "Falha de vaporizador, pois vapores anestésicos elevam diretamente a linha de base do gás carbônico.",
    C: "Cilindro de oxigênio vazio, que causa reinalação isolada sem alterar fração inspirada de oxigênio.",
    D: "Ausência de filtro bacteriano, que aumenta produção metabólica de gás carbônico.",
    E: "Pressão de rede elevada, que impede abertura da válvula ajustável de pressão."
  },
  resposta: "A",
  comentario: "Sistema circular depende de válvulas unidirecionais para direcionar fluxo: uma no ramo inspiratório, outra no expiratório. Se uma delas trava aberta, trava fechada, fica ausente ou quebrada, pode ocorrer reinalação mesmo com absorvedor novo. Algumas checagens automáticas não detectam todas as obstruções ou incompetências valvares; por isso o teste de fluxo com balão ou pulmão-teste, observando movimento correto das válvulas durante inspiração e expiração, continua valioso. A prova aqui quer que você vá além da cal sodada: reinalação não é sinônimo obrigatório de absorvedor exaurido.",
  frase_ouro: "No círculo, válvula preguiçosa faz o paciente respirar passado."
},
{
  id: "tsa-ultra-623",
  fonte: "Miller / Barash / Yao",
  capitulo: "Farmacocinética",
  tema: "Tempo de decremento contexto-sensível",
  area: "Modelos farmacocinéticos",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Após infusão de propofol por 7 horas em neurocirurgia, o residente pergunta por que a recuperação não pode ser prevista pela meia-vida de eliminação do propofol. Qual resposta é mais correta?",
  alternativas: {
    A: "Porque a meia-vida de eliminação é sempre menor que o tempo de recuperação em todos os modelos multicompartmentais.",
    B: "Porque a recuperação depende da queda da concentração no sítio efetor abaixo do limiar clínico, influenciada por redistribuição, duração da infusão e depuração, não apenas eliminação terminal.",
    C: "Porque propofol não sofre redistribuição; toda recuperação depende exclusivamente de metabolismo pulmonar.",
    D: "Porque a meia-vida de eliminação só se aplica a opioides, não a hipnóticos.",
    E: "Porque após 7 horas o propofol passa a ter metabolismo renal saturável de ordem zero."
  },
  resposta: "B",
  comentario: "A meia-vida terminal descreve fase tardia de eliminação, mas o paciente acorda quando a concentração no sítio efetor cai abaixo de um limiar de efeito. Em fármacos multicompartmentais, durante a infusão há distribuição para tecidos periféricos; ao interromper, há redistribuição de volta ao plasma ao mesmo tempo em que ocorre depuração. O tempo de decremento contexto-sensível incorpora a duração da infusão como parte do problema. Propofol é relativamente favorável porque tem alta depuração e aumento modesto do tempo contexto-sensível em comparação com tiopental, mas ainda assim não é 'desliga e acorda' em todo paciente.",
  frase_ouro: "Paciente acorda do sítio efetor, não da meia-vida terminal no rodapé do livro."
},
{
  id: "tsa-ultra-624",
  fonte: "Miller / Barash / Yao",
  capitulo: "TCI",
  tema: "Alvo plasmático versus sítio efetor",
  area: "Modelos farmacocinéticos",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Em anestesia venosa total, o anestesista muda a bomba de propofol de alvo plasmático para alvo no sítio efetor mantendo o mesmo número de concentração-alvo. Observa-se bolus inicial maior e queda pressórica. Qual alternativa explica melhor?",
  alternativas: {
    A: "No modo sítio efetor, a bomba pode administrar bolus maior para acelerar o equilíbrio entre plasma e compartimento de efeito, produzindo pico plasmático inicial mais alto.",
    B: "Alvo no sítio efetor significa que a bomba mede diretamente concentração no cérebro e, por isso, nunca há overshoot plasmático.",
    C: "Alvo plasmático sempre gera bolus maior que alvo no efeito porque o plasma é o compartimento final de ação.",
    D: "Não existe diferença operacional entre os modos; qualquer variação hemodinâmica é necessariamente cirúrgica.",
    E: "O modo sítio efetor só altera opioides, não hipnóticos."
  },
  resposta: "A",
  comentario: "Entre plasma e cérebro existe atraso de equilíbrio, representado por constantes como ke0. Quando se escolhe alvo no sítio efetor, a bomba pode produzir concentração plasmática inicial maior para que o efeito cerebral alcance rapidamente o alvo programado. Isso acelera indução, mas aumenta risco de overshoot hemodinâmico, especialmente em idoso, hipovolêmico, cardiopata ou frágil. O modelo estima, não mede, concentração cerebral. A questão é sofisticada porque o mesmo número no visor pode não significar o mesmo comportamento de entrega.",
  frase_ouro: "Alvo no efeito chega mais rápido ao cérebro, às vezes passando por cima da pressão."
},
{
  id: "tsa-ultra-625",
  fonte: "Miller / Barash / Yao",
  capitulo: "Farmacocinética aplicada",
  tema: "Obesidade e propofol",
  area: "Modelos farmacocinéticos",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente com índice de massa corporal de 62 kg/m² será submetido à cirurgia bariátrica. Planeja-se anestesia venosa total com propofol e remifentanil. Sobre modelos farmacocinéticos e dose no obeso grave, assinale a alternativa mais adequada.",
  alternativas: {
    A: "Todos os bolus e infusões devem ser calculados pelo peso real, pois o aumento de tecido adiposo aumenta proporcionalmente o compartimento central.",
    B: "Todos os fármacos devem ser calculados pelo peso ideal, pois tecido adiposo nunca participa da distribuição de anestésicos lipofílicos.",
    C: "No obeso grave, a dose deve considerar propriedades do fármaco, fase da anestesia e limitações do modelo; peso real, ideal e ajustado podem ter papéis diferentes, exigindo titulação clínica.",
    D: "A TCI elimina o problema da obesidade extrema porque todos os modelos foram validados igualmente em qualquer composição corporal.",
    E: "Remifentanil deve ser calculado pelo peso real porque sua meia-vida contexto-sensível aumenta proporcionalmente à gordura corporal."
  },
  resposta: "C",
  comentario: "Obesidade extrema é um pesadelo elegante para farmacocinética. Nem peso real nem peso ideal resolvem tudo. Propofol é lipofílico, mas bolus de indução se relaciona mais com compartimento central e débito cardíaco; manutenção envolve depuração e distribuição ao longo do tempo. Remifentanil deve ser dosado com cuidado, frequentemente por peso ideal ou ajustado, porque peso real pode superdosar. Modelos TCI podem não ser validados em extremos de índice de massa corporal. A resposta de prova madura é individualizar: farmacologia, fase do ato anestésico, resposta clínica, monitorização e segurança ventilatória.",
  frase_ouro: "No obeso extremo, a balança informa; ela não prescreve sozinha."
},
{
  id: "tsa-ultra-626",
  fonte: "Miller / Barash / Yao",
  capitulo: "Modelos farmacocinéticos",
  tema: "Variabilidade dos modelos",
  area: "Modelos farmacocinéticos",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Durante anestesia venosa total em paciente jovem, a bomba alvo-controlada mostra concentração de propofol no sítio efetor de 3,0 mcg/mL, mas o paciente apresenta sinais eletroencefalográficos de anestesia profunda. Qual alternativa é correta?",
  alternativas: {
    A: "A concentração exibida pela bomba é concentração real medida no líquido cefalorraquidiano.",
    B: "A discrepância é impossível se a bomba estiver programada corretamente.",
    C: "A concentração exibida é estimativa baseada em modelo populacional; variabilidade farmacocinética e farmacodinâmica pode tornar o efeito maior ou menor que o previsto.",
    D: "O eletroencefalograma processado é sempre superior ao modelo e dispensa avaliação hemodinâmica e clínica.",
    E: "A única explicação possível é erro de lote do propofol."
  },
  resposta: "C",
  comentario: "Modelos farmacocinéticos não são sensores biológicos. Eles calculam a provável concentração a partir de dose entregue, tempo, compartimentos e covariáveis. Mas pacientes variam em composição corporal, proteína plasmática, débito cardíaco, função orgânica e sensibilidade do receptor. Além disso, outros fármacos, idade, temperatura e doença mudam farmacodinâmica. O número da bomba deve conversar com pressão, frequência, eletroencefalograma, resposta ao estímulo e objetivo cirúrgico. O erro é transformar estimativa em verdade absoluta. A bomba é boa, mas ainda não fez prova de TSA por você.",
  frase_ouro: "Modelo farmacocinético é previsão do tempo: útil, não infalível."
},
{
  id: "tsa-ultra-627",
  fonte: "Miller / Barash / Yao",
  capitulo: "Interações farmacodinâmicas",
  tema: "Propofol e opioides",
  area: "Modelos farmacocinéticos",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Em tireoidectomia com monitorização neural, decide-se evitar bloqueio neuromuscular após a intubação. O anestesista aumenta remifentanil e reduz propofol para manter pressão estável. O paciente não se move, mas eletroencefalograma sugere hipnose limítrofe. Qual alternativa é a mais correta?",
  alternativas: {
    A: "Ausência de movimento garante inconsciência, pois imobilidade e hipnose são o mesmo componente anestésico.",
    B: "Opioides reduzem resposta a estímulo e necessidade de hipnótico para imobilidade, mas não substituem de forma confiável hipnose e amnésia.",
    C: "Remifentanil em alta dose sempre produz inconsciência completa por agonismo direto em receptor GABA-A.",
    D: "Propofol pode ser suspenso se o paciente estiver recebendo opioide de meia-vida contexto-sensível curta.",
    E: "Monitorização neural impede consciência intraoperatória porque detecta movimento muscular voluntário."
  },
  resposta: "B",
  comentario: "Anestesia geral não é um único botão. Hipnose, analgesia, amnésia, imobilidade e controle autonômico se sobrepõem, mas não são idênticos. Opioides potentes como remifentanil reduzem resposta motora e autonômica ao estímulo, permitindo menor concentração de hipnótico. Porém, analgesia intensa não garante inconsciência. Em cirurgia sem bloqueio neuromuscular, ausência de movimento é menos enganosa do que com paralisia, mas ainda não é prova de hipnose adequada. O caso força o equilíbrio fino: evitar movimento para o cirurgião, preservar monitorização neural e não entregar consciência com elegância farmacológica.",
  frase_ouro: "Opioide cala o estímulo; hipnótico apaga a experiência."
},
{
  id: "tsa-ultra-628",
  fonte: "Miller / Barash / Yao",
  capitulo: "Avaliação pré-anestésica",
  tema: "RCRI",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Homem de 74 anos será submetido à colectomia aberta por neoplasia. Tem história de infarto há 5 anos, insuficiência cardíaca compensada, diabetes em uso de insulina, creatinina de 2,4 mg/dL e acidente vascular cerebral antigo sem déficit atual. Qual alternativa melhor interpreta o Revised Cardiac Risk Index nesse caso?",
  alternativas: {
    A: "O paciente tem apenas um ponto, pois eventos cardiovasculares antigos não entram no índice se estiverem compensados.",
    B: "O paciente tem múltiplos critérios: cirurgia intraperitoneal de alto risco, doença isquêmica, insuficiência cardíaca, diabetes em insulina, creatinina elevada e doença cerebrovascular.",
    C: "O índice não considera função renal, apenas sintomas cardíacos ativos.",
    D: "Diabetes só pontua se houver cetoacidose no mês anterior.",
    E: "Cirurgia abdominal aberta não pontua, pois apenas cirurgia vascular é considerada de alto risco."
  },
  resposta: "B",
  comentario: "O RCRI clássico inclui cirurgia de alto risco, doença isquêmica cardíaca, insuficiência cardíaca, doença cerebrovascular, diabetes tratado com insulina e creatinina maior que 2 mg/dL. Esse paciente coleciona critérios como quem coleciona carimbo em congresso. O ponto não é decorar uma porcentagem, mas reconhecer que ele não é candidato a avaliação superficial. Depois de estimar risco, a conduta depende de urgência, estabilidade clínica, capacidade funcional, possibilidade de mudança de manejo e otimização. Índice de risco não opera paciente; ele organiza a conversa.",
  frase_ouro: "RCRI alto não cancela cirurgia sozinho; ele impede anestesia no automático."
},
{
  id: "tsa-ultra-629",
  fonte: "Miller / Barash / Yao",
  capitulo: "Risco cardiovascular",
  tema: "Condições cardíacas ativas",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente de 69 anos comparece para artroplastia eletiva de joelho. Relata dispneia progressiva há 1 semana, ortopneia nova e edema de membros inferiores. Ao exame, crepitações bibasais e saturação de 91% em ar ambiente. Qual alternativa é mais adequada?",
  alternativas: {
    A: "Proceder com a cirurgia, pois artroplastia é cirurgia ortopédica e o risco cardíaco é sempre baixo.",
    B: "Solicitar apenas eletrocardiograma e liberar se não houver supradesnivelamento de ST.",
    C: "Tratar como possível insuficiência cardíaca descompensada, uma condição cardíaca ativa que exige avaliação e otimização antes de cirurgia eletiva.",
    D: "Realizar raquianestesia obrigatoriamente, pois bloqueio neuraxial elimina risco de edema pulmonar.",
    E: "Administrar diurético em sala e induzir assim que houver diurese."
  },
  resposta: "C",
  comentario: "Dispneia nova, ortopneia, edema e crepitações sugerem insuficiência cardíaca descompensada. Em cirurgia eletiva, condições cardíacas ativas devem ser avaliadas e tratadas antes de prosseguir. O erro é olhar só o tipo de cirurgia e ignorar que o paciente chegou instável. Raquianestesia não é purificador de risco: simpatectomia pode piorar hemodinâmica em paciente descompensado. O manejo correto é adiar eletiva, investigar causa, otimizar volume, função ventricular, isquemia/valvopatia se pertinente e só depois replanejar anestesia.",
  frase_ouro: "Cirurgia eletiva não deve disputar prioridade com insuficiência cardíaca descompensada."
},
{
  id: "tsa-ultra-630",
  fonte: "Miller / Barash / Yao",
  capitulo: "Risco cardiovascular",
  tema: "MACE, METs e teste adicional",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Mulher de 66 anos com doença coronariana estável e stent há 4 anos será submetida à colectomia eletiva. Risco estimado de evento cardíaco maior é superior a 1%. Ela sobe dois lances de escada sem sintomas, caminha diariamente e não tem angina. Qual é a melhor conduta quanto à investigação cardíaca adicional?",
  alternativas: {
    A: "Solicitar teste de estresse obrigatoriamente porque todo paciente com stent prévio tem risco elevado.",
    B: "Prosseguir sem teste adicional se a capacidade funcional for moderada ou boa e o resultado do teste não mudaria a conduta.",
    C: "Cancelar definitivamente a cirurgia porque risco estimado maior que 1% contraindica cirurgia abdominal.",
    D: "Solicitar cateterismo coronariano de rotina para reduzir risco perioperatório.",
    E: "Ignorar capacidade funcional, pois METs não têm relação com risco cardiovascular perioperatório."
  },
  resposta: "B",
  comentario: "O algoritmo moderno combina urgência, risco clínico/cirúrgico e capacidade funcional. Paciente com risco elevado, mas capacidade funcional moderada ou boa e sem sintomas instáveis, em geral pode seguir para cirurgia sem teste adicional, desde que o resultado não vá mudar manejo. Teste de estresse não é ritual de purificação pré-operatória; deve ser pedido quando pode alterar decisão: revascularizar, otimizar tratamento, mudar técnica, adiar ou discutir alternativa. Capacidade funcional continua sendo peça central, e instrumentos como DASI podem ser mais objetivos que 'acho que sobe escada'.",
  frase_ouro: "Teste pré-operatório bom é o que muda conduta; o resto é decoração cara."
},
{
  id: "tsa-ultra-631",
  fonte: "Miller / Barash / Yao",
  capitulo: "Avaliação pré-anestésica",
  tema: "DASI versus METs subjetivos",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente vascular de 73 anos, claudicante, será submetido à correção aberta de aneurisma de aorta abdominal. Quando perguntado sobre capacidade funcional, responde que 'acha que conseguiria subir escadas se a perna deixasse'. Qual alternativa é mais inteligente?",
  alternativas: {
    A: "Considerar capacidade funcional excelente, pois a limitação é periférica e não cardíaca.",
    B: "Considerar capacidade funcional impossível de estimar apenas por pergunta subjetiva; instrumentos como Duke Activity Status Index e discussão sobre testes adicionais podem ser úteis se mudarem conduta.",
    C: "Dispensar avaliação cardiovascular porque claudicação protege contra isquemia miocárdica por pré-condicionamento.",
    D: "Solicitar cateterismo para todo paciente que não consegue caminhar por doença vascular periférica.",
    E: "Usar apenas idade como critério, pois capacidade funcional não tem valor em cirurgia vascular."
  },
  resposta: "B",
  comentario: "Doença vascular periférica frequentemente impede avaliar capacidade funcional por esforço usual. O paciente pode ter miocárdio ruim, mas a perna falha antes de revelar angina ou dispneia. Nessa zona cinzenta, a pergunta solta sobre METs é frágil. O DASI organiza atividades e gera estimativa mais objetiva; ainda assim, em cirurgia vascular aberta, risco é alto e teste adicional só faz sentido se alterar manejo. A resposta correta não cai no extremo de liberar sem pensar nem cateterizar todo mundo. É a arte chata e necessária da medicina perioperatória.",
  frase_ouro: "Quando a perna limita o teste de esforço da vida real, o coração pode estar escondido."
},
{
  id: "tsa-ultra-632",
  fonte: "Miller / Barash / Yao",
  capitulo: "Avaliação pré-anestésica",
  tema: "Exames pré-operatórios",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente de 32 anos, saudável, sem medicações, será submetida à correção de hérnia umbilical eletiva de pequeno porte. A clínica cirúrgica solicita hemograma, coagulograma, eletrólitos, radiografia de tórax, eletrocardiograma e urina tipo 1 'porque é a primeira anestesia'. Qual alternativa é a melhor?",
  alternativas: {
    A: "Todos os exames são obrigatórios antes da primeira anestesia geral em qualquer idade.",
    B: "Exames pré-operatórios devem ser guiados por história, exame físico, comorbidades, medicações e porte cirúrgico, e não por rotina indiscriminada.",
    C: "Coagulograma é obrigatório para qualquer paciente que possa receber bloqueio local infiltrativo.",
    D: "Radiografia de tórax é obrigatória em toda cirurgia abdominal, mesmo em paciente jovem assintomática.",
    E: "Eletrocardiograma normal elimina necessidade de avaliação clínica pré-anestésica."
  },
  resposta: "B",
  comentario: "Avaliação pré-anestésica não é caça-níquel laboratorial. Em paciente jovem, saudável e cirurgia de baixo porte, exames rotineiros raramente mudam conduta e podem gerar falsos positivos, atrasos e custos. O que manda é a probabilidade pré-teste: doenças conhecidas, sintomas, medicamentos, sangramento esperado, risco de gravidez, técnica planejada e necessidade real de resultado para decisão. Prova de TSA gosta desse tema porque diferencia anestesista clínico de carimbador de check-list. Exame bom responde pergunta clínica; exame ruim cria uma.",
  frase_ouro: "Exame pré-operatório sem pergunta é só ruído impresso."
},
{
  id: "tsa-ultra-633",
  fonte: "Miller / Barash / Yao",
  capitulo: "Avaliação pré-anestésica",
  tema: "Medicações cardiovasculares",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Homem de 71 anos, hipertenso, coronariopata estável, em uso crônico de metoprolol, atorvastatina, losartana e ácido acetilsalicílico, será submetido à colectomia oncológica. Sobre manejo medicamentoso perioperatório, assinale a alternativa mais adequada.",
  alternativas: {
    A: "Betabloqueador crônico deve ser suspenso no dia anterior para evitar bradicardia intraoperatória.",
    B: "Estatina deve ser suspensa porque aumenta risco de rabdomiólise anestésica.",
    C: "Betabloqueador crônico geralmente deve ser mantido; inibidores do sistema renina-angiotensina podem ser associados a hipotensão intraoperatória e devem ser avaliados individualmente.",
    D: "Ácido acetilsalicílico deve ser suspenso em todos os coronariopatas, independentemente do risco trombótico e hemorrágico.",
    E: "Introduzir betabloqueador em dose alta na manhã da cirurgia reduz risco cardiovascular sem aumentar eventos adversos."
  },
  resposta: "C",
  comentario: "Betabloqueador crônico deve, em geral, ser continuado para evitar rebote adrenérgico, taquicardia e isquemia. Outra coisa é iniciar dose alta imediatamente antes da cirurgia, o que pode causar hipotensão e bradicardia. Estatinas costumam ser mantidas, especialmente em pacientes vasculares/coronariopatas. Inibidores da enzima conversora e bloqueadores do receptor de angiotensina podem aumentar hipotensão após indução; a decisão de manter ou suspender depende de indicação, controle pressórico, insuficiência cardíaca e protocolo local. AAS exige ponderação entre trombose e sangramento, especialmente em stents. Resposta ultra não é regra cega: é risco individual.",
  frase_ouro: "Medicação cardiovascular no perioperatório não é liga/desliga; é fisiologia aplicada."
},
{
  id: "tsa-ultra-634",
  fonte: "Miller / Barash / Yao",
  capitulo: "Risco cardiovascular",
  tema: "Stent coronário e antiagregação",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente com stent farmacológico recente, ainda em dupla antiagregação, agenda cirurgia estética eletiva com alto potencial de sangramento. O cirurgião pede suspensão de todos os antiagregantes por 10 dias para 'operar seco'. Qual é a melhor resposta anestésica?",
  alternativas: {
    A: "Concordar, pois sangramento cirúrgico é sempre mais grave que trombose de stent.",
    B: "Suspender apenas o ácido acetilsalicílico e manter inibidor P2Y12 em todo caso, sem discutir com cardiologia.",
    C: "Reavaliar indicação e tempo da cirurgia; em procedimento eletivo, deve-se considerar adiar até período mais seguro e discutir risco trombótico e hemorrágico com cardiologia e cirurgia.",
    D: "Manter dupla antiagregação obrigatoriamente em qualquer cirurgia, mesmo quando o sangramento ameaça vida.",
    E: "Trocar antiagregantes por heparina sempre previne trombose de stent com menor sangramento."
  },
  resposta: "C",
  comentario: "Stent recente e dupla antiagregação são terreno minado. Suspender antiagregantes cedo demais aumenta risco de trombose de stent, infarto e morte; manter tudo pode ser inaceitável em cirurgias com sangramento crítico. Em cirurgia verdadeiramente eletiva, a primeira alternativa inteligente é adiar até janela mais segura. Se cirurgia for necessária, decisão deve ser compartilhada com cardiologia, cirurgia e paciente, considerando tipo de stent, tempo desde implante, indicação do stent, risco de sangramento e possibilidade de manter ácido acetilsalicílico. Heparina não substitui adequadamente antiagregação para prevenir trombose de stent. Aqui o TSA cobra bom senso: o melhor sangramento é o da cirurgia que ainda não precisava acontecer.",
  frase_ouro: "Stent recente transforma cirurgia eletiva em reunião multidisciplinar obrigatória."
},
{
  id: "tsa-ultra-635",
  fonte: "Miller / Barash / Yao",
  capitulo: "Avaliação pré-anestésica",
  tema: "Profilaxia de endocardite",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Homem de 66 anos com prótese valvar aórtica biológica será submetido à colecistectomia videolaparoscópica eletiva, sem evidência de infecção ativa biliar. Perguntam se há indicação de antibiótico especificamente para profilaxia de endocardite infecciosa. Qual alternativa é mais adequada?",
  alternativas: {
    A: "Sim, prótese valvar exige profilaxia de endocardite para qualquer procedimento sob anestesia geral.",
    B: "Sim, todo procedimento gastrointestinal exige profilaxia de endocardite em cardiopatas.",
    C: "Não há indicação rotineira de profilaxia específica para endocardite apenas por prótese valvar em procedimento gastrointestinal não infectado; antibiótico cirúrgico segue indicação do procedimento.",
    D: "A profilaxia deve ser feita apenas com vancomicina por 7 dias.",
    E: "A decisão depende apenas do tipo de anestesia; com raquianestesia não há risco de endocardite."
  },
  resposta: "C",
  comentario: "Prótese valvar coloca o paciente em grupo de alto risco para consequências ruins se desenvolver endocardite. Porém, as recomendações modernas restringem profilaxia específica principalmente a procedimentos dentários de maior risco em grupos cardíacos selecionados. Procedimentos gastrointestinais ou geniturinários não infectados, em geral, não indicam profilaxia específica de endocardite apenas pela cardiopatia. Isso não elimina antibioticoprofilaxia cirúrgica comum da colecistectomia, que segue outra lógica: flora esperada e prevenção de infecção de sítio cirúrgico. A pegadinha é misturar 'risco alto se tiver endocardite' com 'profilaxia indicada para tudo'.",
  frase_ouro: "Alto risco de consequência não significa antibiótico para qualquer porta de entrada."
},
{
  id: "tsa-ultra-636",
  fonte: "Miller / Barash / Yao",
  capitulo: "Avaliação pré-anestésica",
  tema: "Apneia obstrutiva do sono",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Homem de 56 anos, índice de massa corporal 41 kg/m², roncos intensos, sonolência diurna, hipertensão resistente e circunferência cervical aumentada será submetido a herniorrafia ambulatorial. Não tem diagnóstico formal de apneia obstrutiva do sono. Qual alternativa é mais adequada?",
  alternativas: {
    A: "Sem polissonografia, o risco deve ser considerado igual ao da população geral.",
    B: "Deve-se usar triagem clínica, como STOP-Bang, planejar via aérea, reduzir opioides, considerar recuperação prolongada e avaliar segurança do regime ambulatorial.",
    C: "A única técnica segura é anestesia geral com extubação profunda para evitar tosse.",
    D: "Opioides de longa ação são preferíveis porque reduzem despertares e eventos obstrutivos.",
    E: "Oxigênio suplementar elimina risco de hipoventilação e dispensa monitorização."
  },
  resposta: "B",
  comentario: "A ausência de polissonografia não apaga o fenótipo. O paciente tem alta probabilidade clínica de apneia obstrutiva do sono e risco de via aérea difícil, obstrução pós-operatória e depressão respiratória por sedativos/opioides. Triagens como STOP-Bang ajudam a estratificar. O plano deve favorecer analgesia multimodal poupadora de opioide, extubação acordada, posição adequada, uso de pressão positiva se já utiliza ou se indicado, e observação compatível com risco. Em ambulatorial, a pergunta é: ele consegue manter ventilação, analgesia segura e suporte em casa? Oxigênio pode mascarar hipoventilação; não é salvo-conduto.",
  frase_ouro: "Sem polissonografia não significa sem apneia; significa sem desculpa para não suspeitar."
},
{
  id: "tsa-ultra-637",
  fonte: "Miller / Barash / Yao",
  capitulo: "Geriatria e avaliação pré-operatória",
  tema: "Fragilidade e fratura de quadril",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Mulher de 89 anos, frágil, com fratura de quadril, chega desidratada, anêmica leve, com dor intensa e delirium hipoativo. A equipe quer solicitar ecocardiograma, prova funcional pulmonar, avaliação cardiológica formal e tomografia de crânio antes de operar, embora não haja sinais focais ou instabilidade cardíaca ativa. Qual alternativa é mais adequada?",
  alternativas: {
    A: "Adiar sistematicamente a cirurgia até todos os exames estarem normais, pois idade avançada contraindica cirurgia precoce.",
    B: "Realizar avaliação focada, corrigir fatores reversíveis relevantes e evitar atrasos desnecessários, pois cirurgia precoce em fratura de quadril costuma melhorar desfechos quando não há condição ativa impeditiva.",
    C: "Operar imediatamente sem analgesia, hidratação ou revisão de anticoagulantes para não perder tempo.",
    D: "Escolher anestesia geral obrigatoriamente, pois raquianestesia causa delirium em todos os idosos.",
    E: "Tratar delirium com benzodiazepínico em dose alta antes de qualquer decisão."
  },
  resposta: "B",
  comentario: "Fratura de quadril no idoso é urgência geriátrica. Atrasar cirurgia por cascata de exames sem indicação pode aumentar complicações, dor, delirium, imobilidade, trombose, pneumonia e mortalidade. Isso não significa negligenciar preparo: corrigir hipovolemia, dor, hipoxemia, eletrólitos, anemia relevante e anticoagulação quando necessário. Delirium hipoativo frequentemente é sinal de sofrimento fisiológico e dor, não motivo automático para tomografia sem foco. A decisão é equilíbrio: otimizar o que muda desfecho, não transformar pré-operatório em museu de exames.",
  frase_ouro: "No quadril do idoso, atraso inútil também é complicação."
},
{
  id: "tsa-ultra-638",
  fonte: "Miller / Barash / Yao",
  capitulo: "Consentimento informado",
  tema: "Capacidade decisória e sedação",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente ansioso recebe midazolam na enfermaria antes da visita pré-anestésica. Ao chegar ao centro cirúrgico, está sonolento e não consegue repetir riscos ou alternativas da anestesia. A equipe pede que ele assine o consentimento anestésico naquele momento. Qual alternativa é correta?",
  alternativas: {
    A: "A assinatura é válida porque qualquer paciente que responde ao nome mantém capacidade plena.",
    B: "Sedativos e analgésicos podem comprometer capacidade de consentimento; o ideal é obter consentimento antes de medicação que prejudique compreensão, ou reavaliar capacidade e envolver representante quando apropriado.",
    C: "Consentimento anestésico nunca precisa discutir risco de morte ou complicações graves.",
    D: "Consentimento cirúrgico substitui automaticamente consentimento e discussão anestésica.",
    E: "Ansiedade invalida qualquer consentimento, mesmo antes de sedativos."
  },
  resposta: "B",
  comentario: "Consentimento informado exige capacidade, informação, compreensão e voluntariedade. Sedativos, opioides, delirium, dor intensa ou hipoxemia podem comprometer esse processo. A conversa sobre anestesia deve ocorrer antes de medicação que reduza entendimento, sempre que possível. O conteúdo inclui condição do paciente, técnica proposta, alternativas, riscos relevantes e plano de dor pós-operatória. A necessidade de formulário separado varia por instituição, mas a necessidade ética de informação não some. Fazer paciente grogue assinar papel é burocracia performática, não consentimento.",
  frase_ouro: "Consentimento assinado sem compreensão é só caligrafia sedada."
},
{
  id: "tsa-ultra-639",
  fonte: "Miller / Barash / Yao",
  capitulo: "Otimização pré-operatória",
  tema: "Anemia e patient blood management",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Paciente de 63 anos será submetida à artroplastia total de quadril eletiva em 5 semanas. Hemoglobina 9,4 g/dL, ferritina baixa, saturação de transferrina reduzida e história de sangramento menstrual intenso até menopausa tardia. O cirurgião sugere apenas reservar duas bolsas de hemácias e prosseguir. Qual alternativa é a mais adequada?",
  alternativas: {
    A: "Reservar sangue substitui investigação e tratamento da anemia pré-operatória.",
    B: "Anemia ferropriva deve ser reconhecida como fator modificável; em cirurgia eletiva com tempo disponível, deve-se investigar causa e tratar antes do procedimento quando possível.",
    C: "Transfundir duas bolsas na véspera é sempre melhor que ferro, pois normaliza hemoglobina sem risco.",
    D: "Anemia só importa se hemoglobina estiver abaixo de 7 g/dL.",
    E: "Ácido tranexâmico corrige anemia ferropriva ao aumentar eritropoiese."
  },
  resposta: "B",
  comentario: "Anemia pré-operatória não é detalhe de rodapé; associa-se a maior transfusão, complicações e pior recuperação. Em cirurgia eletiva com semanas de antecedência, há oportunidade real de otimização: confirmar deficiência de ferro, investigar causa, tratar com ferro oral ou venoso conforme urgência/tolerância, considerar eritropoetina em casos selecionados e planejar redução de sangramento. Reservar sangue prepara a resposta à perda; não corrige o terreno. Transfusão tem papel quando indicada, mas não deve substituir patient blood management. A questão mede mentalidade perioperatória, não hemoglobina decorada.",
  frase_ouro: "Bolsa reservada não trata anemia; só espera o problema sangrar."
},
{
  id: "tsa-ultra-640",
  fonte: "Miller / Barash / Yao",
  capitulo: "Critérios de risco cardiovascular",
  tema: "Estenose aórtica e cirurgia não cardíaca",
  area: "Avaliação pré-anestésica",
  dificuldade: "Muito difícil - TSA Ultra",
  pergunta: "Homem de 78 anos com sopro sistólico rude, síncope aos esforços há 2 meses e dispneia progressiva será submetido à colectomia eletiva por pólipo maligno sem obstrução. Não há ecocardiograma recente. Qual alternativa é a melhor?",
  alternativas: {
    A: "Prosseguir com raquianestesia em dose única, pois simpatectomia reduz pós-carga e beneficia estenose aórtica.",
    B: "Prosseguir sem ecocardiograma porque sopro sistólico em idoso é achado fisiológico.",
    C: "Suspeitar de estenose aórtica sintomática, condição de alto risco que deve ser avaliada com ecocardiografia e otimizada antes de cirurgia eletiva.",
    D: "Induzir anestesia geral profunda para evitar taquicardia, aceitando hipotensão desde que transitória.",
    E: "Administrar vasodilatador arterial profilático para reduzir gradiente transvalvar antes da indução."
  },
  resposta: "C",
  comentario: "Sopro sistólico rude com síncope e dispneia em idoso é estenose aórtica grave até prova em contrário. Estenose aórtica sintomática aumenta muito o risco perioperatório: o ventrículo depende de pré-carga, ritmo sinusal, tempo diastólico e pressão de perfusão coronariana. Hipotensão e taquicardia podem ser desastrosas. Em cirurgia eletiva sem urgência imediata, é necessário ecocardiograma e discussão de tratamento valvar ou estratégia alternativa antes da colectomia. Neuraxial de dose única com simpatectomia abrupta pode ser perigosa. A resposta certa protege o paciente da frase assassina: 'é só um sopro'.",
  frase_ouro: "Síncope com sopro aórtico não é achado: é aviso pré-anestésico."
}
];

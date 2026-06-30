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
  }
];

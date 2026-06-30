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
  }
];

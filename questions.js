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
  }
];

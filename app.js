const QUESTIONS = [
  {
    id: "yao-08-001",
    fonte: "Yao cap. 8",
    capitulo: "8 - CIED",
    tema: "CRT-D",
    dificuldade: "média",
    pergunta: "Paciente com CRT-D será submetido a cirurgia com eletrocautério monopolar. Qual é a principal pegadinha do uso do magneto nesse dispositivo?",
    alternativas: {
      A: "O magneto sempre desliga a função de marca-passo.",
      B: "O magneto geralmente suspende terapias antitaquicardia, mas não garante pacing assíncrono.",
      C: "O magneto aumenta a energia dos choques.",
      D: "O magneto corrige falha de captura ventricular.",
      E: "O magneto remove a necessidade de desfibrilador externo."
    },
    resposta: "B",
    comentario: "Em ICD/CDI ou CRT-D, o magneto geralmente suspende detecção/terapias antitaquicardia. Ele não necessariamente muda o pacing para modo assíncrono; em paciente dependente, pode ser necessária reprogramação.",
    frase_ouro: "Magneto em CDI é botão de 'não choque', não botão de 'pacing assíncrono'."
  },
  {
    id: "yao-08-002",
    fonte: "Yao cap. 8",
    capitulo: "8 - CIED",
    tema: "EMI",
    dificuldade: "fácil",
    pergunta: "Durante cauterização monopolar, paciente dependente de marca-passo apresenta bradicardia grave e perda de pulso arterial. Qual deve ser a primeira conduta?",
    alternativas: {
      A: "Pedir para aumentar a potência do bisturi.",
      B: "Ignorar se houver espículas no ECG.",
      C: "Parar o cautério, confirmar pulso/pressão, oxigenar e iniciar suporte/pacing externo se necessário.",
      D: "Administrar nitroprussiato.",
      E: "Extubar para reduzir estímulo simpático."
    },
    resposta: "C",
    comentario: "A interferência eletromagnética pode inibir o pacing. A prioridade é cessar a fonte de interferência, confirmar captura mecânica e tratar bradicardia/assistolia com suporte apropriado.",
    frase_ouro: "Espícula sem pulso é decoração elétrica."
  },
  {
    id: "yao-09-001",
    fonte: "Yao cap. 9",
    capitulo: "9 - TAAA",
    tema: "Proteção medular",
    dificuldade: "média",
    pergunta: "Na correção de aneurisma toracoabdominal, qual fórmula expressa melhor a lógica da perfusão medular?",
    alternativas: {
      A: "Pressão de perfusão medular = PAM - pressão do LCR.",
      B: "Pressão de perfusão medular = PVC + pressão do LCR.",
      C: "Pressão de perfusão medular = PaCO₂ - PAM.",
      D: "Pressão de perfusão medular = frequência cardíaca x hemoglobina.",
      E: "Pressão de perfusão medular independe da pressão do LCR."
    },
    resposta: "A",
    comentario: "A drenagem de LCR reduz a pressão ao redor da medula, aumentando a pressão de perfusão medular. Por isso, manter PAM adequada e pressão liquórica baixa é essencial.",
    frase_ouro: "Medula perfunde melhor quando a pressão sobe e o líquor desce."
  },
  {
    id: "yao-10-001",
    fonte: "Yao cap. 10",
    capitulo: "10 - AAA",
    tema: "Clamp aórtico",
    dificuldade: "fácil",
    pergunta: "Na correção aberta de AAA infrarrenal, qual alteração é esperada logo após o clampeamento aórtico?",
    alternativas: {
      A: "Redução abrupta da pós-carga.",
      B: "Hipotensão obrigatória.",
      C: "Aumento da pós-carga e da pressão proximal.",
      D: "Ausência de repercussão cardiovascular.",
      E: "Redução da resistência vascular sistêmica proximal."
    },
    resposta: "C",
    comentario: "O clamp infrarrenal aumenta a resistência contra a qual o VE ejeta, elevando pressão proximal e consumo miocárdico, especialmente em coronariopatas.",
    frase_ouro: "O clamp aumenta a pós-carga; o desclamp tira o chão."
  },
  {
    id: "yao-10-002",
    fonte: "Yao cap. 10",
    capitulo: "10 - AAA",
    tema: "EVAR",
    dificuldade: "média",
    pergunta: "Após EVAR, há vazamento persistente no local de vedação proximal da endoprótese. Qual tipo de endoleak é mais provável?",
    alternativas: {
      A: "Tipo II.",
      B: "Tipo IV.",
      C: "Tipo V.",
      D: "Tipo I.",
      E: "Tipo III por ruptura entre componentes."
    },
    resposta: "D",
    comentario: "Endoleak tipo I ocorre por falha de vedação proximal ou distal e geralmente exige correção. Tipo II é por fluxo retrógrado de colaterais.",
    frase_ouro: "Endoleak I e III costumam pedir correção; tipo II depende do saco."
  },
  {
    id: "yao-11-001",
    fonte: "Yao cap. 11",
    capitulo: "11 - Hipertensão",
    tema: "IECA/BRA",
    dificuldade: "média",
    pergunta: "Paciente em uso de losartana no dia da cirurgia apresenta hipotensão refratária após indução. Após volume e catecolaminas, qual droga deve ser lembrada?",
    alternativas: {
      A: "Hidralazina.",
      B: "Nitroprussiato.",
      C: "Vasopressina.",
      D: "Esmolol.",
      E: "Nitroglicerina."
    },
    resposta: "C",
    comentario: "IECA/BRA podem predispor a vasoplegia após indução. Quando a resposta a catecolaminas é ruim, vasopressina pode ser útil.",
    frase_ouro: "IECA/BRA podem transformar indução em teste de vasoplegia."
  },
  {
    id: "yao-11-002",
    fonte: "Yao cap. 11",
    capitulo: "11 - Hipertensão",
    tema: "Feocromocitoma",
    dificuldade: "fácil",
    pergunta: "No preparo do feocromocitoma, qual sequência farmacológica é correta?",
    alternativas: {
      A: "Beta-bloqueador antes do alfa-bloqueador.",
      B: "Alfa-bloqueador antes do beta-bloqueador.",
      C: "Diurético antes do alfa-bloqueador.",
      D: "Vasopressina pré-operatória obrigatória.",
      E: "Suspender todos os anti-hipertensivos."
    },
    resposta: "B",
    comentario: "O alfa-bloqueio deve vir antes do beta-bloqueio para evitar vasoconstrição alfa sem oposição. Depois, se houver taquicardia, adiciona-se beta-bloqueador.",
    frase_ouro: "No feocromocitoma: alfa antes de beta. Sempre."
  },
  {
    id: "yao-12-001",
    fonte: "Yao cap. 12",
    capitulo: "12 - Tamponamento",
    tema: "Diagnóstico",
    dificuldade: "média",
    pergunta: "Pós-operatório de cirurgia cardíaca com baixo débito, PVC 23 mmHg, PAOP 14 mmHg e pele fria. Qual diagnóstico deve ser fortemente considerado?",
    alternativas: {
      A: "Vasoplegia pura.",
      B: "Hipovolemia isolada.",
      C: "Broncoespasmo.",
      D: "Tamponamento regional/compressão direita.",
      E: "Hipertireoidismo."
    },
    resposta: "D",
    comentario: "PVC muito elevada desproporcional à PAOP, baixo débito e pós-operatório cardíaco sugerem compressão direita/regional por coágulo ou tamponamento.",
    frase_ouro: "Depois de cirurgia cardíaca, tamponamento pode ser coágulo fazendo bullying em uma câmara."
  },
  {
    id: "yao-12-002",
    fonte: "Yao cap. 12",
    capitulo: "12 - Tamponamento",
    tema: "Fisiologia",
    dificuldade: "fácil",
    pergunta: "No tamponamento cardíaco agudo, qual mecanismo reduz o débito cardíaco?",
    alternativas: {
      A: "Aumento primário da contratilidade.",
      B: "Redução da pressão intrapericárdica.",
      C: "Prejuízo ao enchimento diastólico por aumento da pressão intrapericárdica.",
      D: "Vasodilatação sistêmica isolada.",
      E: "Aumento de complacência pericárdica aguda."
    },
    resposta: "C",
    comentario: "O pericárdio pressurizado limita enchimento diastólico, reduz volume sistólico e débito. A taquicardia é compensatória.",
    frase_ouro: "Tamponamento é doença de enchimento, não de contratilidade."
  },
  {
    id: "mixed-001",
    fonte: "Revisão mista",
    capitulo: "Revisão",
    tema: "Cardiovascular",
    dificuldade: "difícil",
    pergunta: "Em dissecção aguda de aorta hipertensiva, por que o beta-bloqueador deve preceder o vasodilatador?",
    alternativas: {
      A: "Porque aumenta dP/dt e melhora perfusão da falsa luz.",
      B: "Porque reduz FC, contratilidade e dP/dt, evitando taquicardia reflexa do vasodilatador.",
      C: "Porque causa vasodilatação arterial pura sem efeito cardíaco.",
      D: "Porque substitui completamente analgesia.",
      E: "Porque aumenta pressão sistólica de forma controlada."
    },
    resposta: "B",
    comentario: "Na dissecção, reduzir apenas a pressão pode gerar taquicardia reflexa e manter alta a violência da ejeção. Beta-bloqueio reduz frequência, contratilidade e dP/dt.",
    frase_ouro: "Na dissecção, não basta baixar pressão; é preciso tirar a violência da ejeção."
  },
  {
    id: "mixed-002",
    fonte: "Revisão mista",
    capitulo: "Revisão",
    tema: "Farmacologia",
    dificuldade: "média",
    pergunta: "Qual é a ação da fentolamina usada em crise hipertensiva por feocromocitoma?",
    alternativas: {
      A: "Agonista beta-1 puro.",
      B: "Bloqueador beta irreversível.",
      C: "Bloqueador alfa-adrenérgico competitivo não seletivo.",
      D: "Agonista alfa-2 central.",
      E: "Inibidor da síntese de catecolaminas."
    },
    resposta: "C",
    comentario: "Fentolamina bloqueia receptores alfa-1 e alfa-2 de forma competitiva e reversível, causando vasodilatação, mas podendo gerar taquicardia reflexa.",
    frase_ouro: "Fentolamina tira a vasoconstrição catecolaminérgica, mas pode cobrar taquicardia."
  }
,
{
  "id": "yao-extra-001",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Perfusão coronariana",
  "dificuldade": "média",
  "pergunta": "Em paciente com doença coronariana importante, qual fator mais diretamente sustenta a perfusão coronariana do ventrículo esquerdo?",
  "alternativas": {
    "A": "Pressão diastólica aórtica adequada.",
    "B": "Pressão venosa central baixa.",
    "C": "Hipocapnia profunda.",
    "D": "Bradicardia extrema.",
    "E": "Redução intensa da hemoglobina."
  },
  "resposta": "A",
  "comentario": "A perfusão coronariana esquerda ocorre predominantemente na diástole; queda da pressão diastólica reduz oferta ao miocárdio.",
  "frase_ouro": "Coronária esquerda gosta de diástole e pressão diastólica."
},
{
  "id": "yao-extra-002",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Oferta-consumo",
  "dificuldade": "média",
  "pergunta": "Após indução em coronariopata, surgem taquicardia e hipotensão com infradesnivelamento de ST. Qual é a interpretação mais provável?",
  "alternativas": {
    "A": "Melhora do balanço oferta-consumo por queda da pós-carga.",
    "B": "Redução da oferta e aumento do consumo de oxigênio miocárdico.",
    "C": "Aumento isolado da pré-carga sem repercussão isquêmica.",
    "D": "Hipervolemia como causa única do ST.",
    "E": "Efeito esperado e benigno da intubação."
  },
  "resposta": "B",
  "comentario": "Taquicardia aumenta consumo e reduz tempo diastólico; hipotensão reduz perfusão coronariana. A combinação precipita isquemia.",
  "frase_ouro": "No coronariopata, taquicardia + hipotensão é dupla agressão."
},
{
  "id": "yao-extra-003",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Heparina/CEC",
  "dificuldade": "fácil",
  "pergunta": "Antes da circulação extracorpórea, qual é a forma correta de pensar a dose de heparina?",
  "alternativas": {
    "A": "Em mg/kg sem necessidade de teste.",
    "B": "Em ampolas fixas para qualquer peso.",
    "C": "Em unidades por kg, com confirmação por TCA/ACT adequado.",
    "D": "Apenas após sair da CEC.",
    "E": "Somente se houver sangramento cirúrgico."
  },
  "resposta": "C",
  "comentario": "A heparina para CEC é prescrita em unidades/kg e o alvo é anticoagulação comprovada por TCA/ACT.",
  "frase_ouro": "Heparina para CEC é em unidades/kg; o alvo é o ACT."
},
{
  "id": "yao-extra-004",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Antitrombina",
  "dificuldade": "média",
  "pergunta": "Paciente recebe heparina adequada antes da CEC, mas o TCA não atinge alvo. Qual deficiência deve ser lembrada?",
  "alternativas": {
    "A": "Fator VII isolado.",
    "B": "Vitamina K.",
    "C": "Fibrinogênio.",
    "D": "Antitrombina.",
    "E": "Proteína C ativada."
  },
  "resposta": "D",
  "comentario": "A heparina depende da antitrombina para inibir trombina e fator Xa. Deficiência de antitrombina causa resistência à heparina.",
  "frase_ouro": "Sem antitrombina, heparina perde força."
},
{
  "id": "yao-extra-005",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Fluxo de bomba",
  "dificuldade": "média",
  "pergunta": "Durante CEC, PAM baixa com fluxo de bomba adequado sugere principalmente qual mecanismo?",
  "alternativas": {
    "A": "Hipervolemia isolada.",
    "B": "Aumento de RVS.",
    "C": "Estenose mitral aguda.",
    "D": "Obstrução fixa da via aérea.",
    "E": "Baixa resistência vascular sistêmica/vasoplegia."
  },
  "resposta": "E",
  "comentario": "Na CEC, PAM depende de fluxo e RVS. Se o fluxo está adequado e a PAM baixa, pense em baixa RVS.",
  "frase_ouro": "Na CEC: pressão baixa com fluxo bom é vaso."
},
{
  "id": "yao-extra-006",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Baixo fluxo em CEC",
  "dificuldade": "média",
  "pergunta": "Durante CEC, PAM baixa e fluxo de bomba baixo devem levar primeiro a investigar:",
  "alternativas": {
    "A": "Drenagem venosa, cânulas, reservatório e obstruções do circuito.",
    "B": "Apenas profundidade anestésica.",
    "C": "Hipertermia maligna.",
    "D": "Reação transfusional hemolítica como causa única.",
    "E": "Bloqueio neuromuscular residual."
  },
  "resposta": "A",
  "comentario": "Fluxo baixo em CEC é problema de bomba/circuito ou drenagem até prova contrária.",
  "frase_ouro": "PAM baixa com fluxo baixo: interrogue a bomba."
},
{
  "id": "yao-extra-007",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Protamina",
  "dificuldade": "fácil",
  "pergunta": "Qual é a regra clássica de reversão da heparina com protamina ao final da CEC?",
  "alternativas": {
    "A": "1 mg de protamina para 1 unidade de heparina.",
    "B": "Aproximadamente 1 mg de protamina para 100 unidades de heparina residual.",
    "C": "10 mg de protamina por kg obrigatoriamente.",
    "D": "Protamina não reverte heparina.",
    "E": "Protamina deve ser administrada em bolus rápido."
  },
  "resposta": "B",
  "comentario": "A dose deve considerar heparina residual, e a administração deve ser lenta e monitorizada. Excesso de protamina pode ter efeito anticoagulante.",
  "frase_ouro": "Protamina demais também atrapalha a coagulação."
},
{
  "id": "yao-extra-008",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Reação à protamina",
  "dificuldade": "difícil",
  "pergunta": "Após protamina, ocorre hipotensão, aumento da pressão pulmonar e falência aguda de VD. Qual diagnóstico é mais provável?",
  "alternativas": {
    "A": "Hipocalemia isolada.",
    "B": "Broncoespasmo leve sem repercussão.",
    "C": "Reação grave à protamina com hipertensão pulmonar aguda.",
    "D": "Bloqueio neuromuscular residual.",
    "E": "Anemia dilucional como causa única."
  },
  "resposta": "C",
  "comentario": "A reação grave à protamina pode causar vasoconstrição pulmonar, aumento de RVP e falência de VD.",
  "frase_ouro": "Protamina pode derrubar o VD pela circulação pulmonar."
},
{
  "id": "yao-extra-009",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Sangramento pós-CEC",
  "dificuldade": "média",
  "pergunta": "Após CEC, sangramento difuso em múltiplos pontos sugere mais fortemente:",
  "alternativas": {
    "A": "Lesão cirúrgica única obrigatória.",
    "B": "Hipertensão arterial como única causa.",
    "C": "Broncoespasmo.",
    "D": "Coagulopatia, heparina residual, plaquetopatia ou fibrinogênio baixo.",
    "E": "Hipercapnia isolada."
  },
  "resposta": "D",
  "comentario": "Sangramento difuso sugere problema sistêmico de coagulação; TEG/ROTEM e exames convencionais ajudam a guiar reposição.",
  "frase_ouro": "Oozing difuso é coagulação pedindo mapa."
},
{
  "id": "yao-extra-010",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "IABP",
  "dificuldade": "média",
  "pergunta": "Qual é o mecanismo principal do balão intra-aórtico?",
  "alternativas": {
    "A": "Infla na sístole para aumentar pós-carga.",
    "B": "Substitui completamente o débito cardíaco.",
    "C": "Oxigena o sangue como ECMO.",
    "D": "Drena sangue do VE para a aorta como Impella.",
    "E": "Infla na diástole para melhorar perfusão coronariana e desinfla antes da sístole para reduzir pós-carga."
  },
  "resposta": "E",
  "comentario": "O IABP melhora a relação oferta-consumo, mas fornece suporte hemodinâmico limitado.",
  "frase_ouro": "IABP ajuda o VE a trabalhar; não vira outro ventrículo."
},
{
  "id": "yao-extra-011",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "NIRS",
  "dificuldade": "média",
  "pergunta": "Queda de NIRS cerebral durante CEC deve levar a qual raciocínio inicial?",
  "alternativas": {
    "A": "Redução de oferta regional de oxigênio por fluxo, pressão, Hb, oxigenação, CO₂ ou drenagem venosa.",
    "B": "É sempre artefato e deve ser ignorada.",
    "C": "Indica exclusivamente hiperglicemia.",
    "D": "Prova hipertensão intracraniana obrigatória.",
    "E": "Exclui hipoperfusão sistêmica."
  },
  "resposta": "A",
  "comentario": "NIRS é monitor de oxigenação regional; queda exige checar sensor e otimizar oferta de O2 e fluxo/perfusão.",
  "frase_ouro": "NIRS baixa é alarme de entrega regional."
},
{
  "id": "yao-extra-012",
  "fonte": "Yao cap. 5",
  "capitulo": "5 - Doença coronariana/CABG",
  "tema": "Desmame da CEC",
  "dificuldade": "difícil",
  "pergunta": "Falha de saída de CEC deve ser organizada inicialmente em quais grandes grupos?",
  "alternativas": {
    "A": "Apenas profundidade anestésica.",
    "B": "Bomba, volume, ritmo, vaso, pulmão, metabólico e problema mecânico/cirúrgico.",
    "C": "Apenas anemia.",
    "D": "Apenas reação à heparina.",
    "E": "Apenas broncoespasmo."
  },
  "resposta": "B",
  "comentario": "Falha de desmame é síndrome. ETE, ritmo, eletrólitos, volume, prótese/enxertos e função ventricular direcionam a conduta.",
  "frase_ouro": "Não trate falha de CEC como diagnóstico; trate mecanismo."
},
{
  "id": "yao-extra-013",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "IABP timing",
  "dificuldade": "média",
  "pergunta": "No IABP, a inflação ideal do balão deve ocorrer em qual momento?",
  "alternativas": {
    "A": "Antes da abertura da valva aórtica.",
    "B": "No pico da sístole ventricular.",
    "C": "Logo após o fechamento da valva aórtica, na incisura dicrótica.",
    "D": "Durante a contração isovolumétrica.",
    "E": "Somente durante assistolia."
  },
  "resposta": "C",
  "comentario": "Inflar após fechamento aórtico aumenta pressão diastólica aórtica e perfusão coronariana.",
  "frase_ouro": "IABP infla na diástole, não briga com a sístole."
},
{
  "id": "yao-extra-014",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "IABP contraindicação",
  "dificuldade": "fácil",
  "pergunta": "Qual condição é contraindicação importante ao balão intra-aórtico?",
  "alternativas": {
    "A": "Insuficiência mitral leve.",
    "B": "Hipertensão controlada.",
    "C": "Bradicardia sinusal assintomática.",
    "D": "Insuficiência aórtica moderada/grave.",
    "E": "Anemia leve."
  },
  "resposta": "D",
  "comentario": "Na insuficiência aórtica, a inflação diastólica pode aumentar refluxo para o VE.",
  "frase_ouro": "IABP em IA importante joga sangue para trás."
},
{
  "id": "yao-extra-015",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "Impella",
  "dificuldade": "média",
  "pergunta": "Qual dispositivo descarrega diretamente o ventrículo esquerdo aspirando sangue do VE e ejetando-o na aorta?",
  "alternativas": {
    "A": "IABP.",
    "B": "VV-ECMO.",
    "C": "Dreno de LCR.",
    "D": "Marca-passo VVI.",
    "E": "Impella."
  },
  "resposta": "E",
  "comentario": "Impella é bomba axial transvalvar aórtica que descarrega o VE e aumenta fluxo sistêmico.",
  "frase_ouro": "Impella tira sangue do VE; IABP só melhora as condições."
},
{
  "id": "yao-extra-016",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "LVAD",
  "dificuldade": "média",
  "pergunta": "Em paciente com LVAD, qual fator é essencial para manter fluxo adequado do dispositivo?",
  "alternativas": {
    "A": "Ventrículo direito funcional e pré-carga adequada.",
    "B": "Hipovolemia profunda.",
    "C": "RVP muito elevada.",
    "D": "Pós-carga sistêmica extrema.",
    "E": "Desconexão da bateria."
  },
  "resposta": "A",
  "comentario": "O LVAD depende de sangue chegando ao VE; falência de VD ou hipovolemia reduzem fluxo.",
  "frase_ouro": "LVAD precisa que o VD alimente o lado esquerdo."
},
{
  "id": "yao-extra-017",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "Baixo fluxo LVAD",
  "dificuldade": "média",
  "pergunta": "Baixo fluxo em LVAD deve levar a considerar todas, exceto:",
  "alternativas": {
    "A": "Hipovolemia.",
    "B": "Hipervolemia isolada sempre benéfica ao VD.",
    "C": "Falência de VD.",
    "D": "Aumento de pós-carga sistêmica.",
    "E": "Obstrução/trombose do dispositivo."
  },
  "resposta": "B",
  "comentario": "Excesso de volume pode piorar VD e congestão; baixo fluxo tem diagnóstico diferencial amplo.",
  "frase_ouro": "Baixo fluxo LVAD é volume, VD, pós-carga, trombo ou energia."
},
{
  "id": "yao-extra-018",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "VA-ECMO",
  "dificuldade": "difícil",
  "pergunta": "Qual é uma limitação fisiológica importante da VA-ECMO periférica femoral?",
  "alternativas": {
    "A": "Não fornece suporte circulatório.",
    "B": "Remove apenas CO₂ sem oxigenar.",
    "C": "Pode aumentar pós-carga do VE e causar distensão ventricular esquerda.",
    "D": "É sempre contraindicada no choque cardiogênico.",
    "E": "Não exige anticoagulação ou monitorização."
  },
  "resposta": "C",
  "comentario": "O fluxo arterial retrógrado aumenta pressão aórtica e pode dificultar abertura da valva aórtica, distendendo o VE.",
  "frase_ouro": "VA-ECMO salva fluxo, mas pode sobrecarregar o VE."
},
{
  "id": "yao-extra-019",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "VV-ECMO",
  "dificuldade": "fácil",
  "pergunta": "A VV-ECMO é mais apropriada para qual cenário?",
  "alternativas": {
    "A": "Choque cardiogênico isolado sem falência pulmonar.",
    "B": "Tamponamento cardíaco agudo.",
    "C": "Estenose aórtica grave eletiva.",
    "D": "Falência respiratória grave com função circulatória relativamente preservada.",
    "E": "Bradicardia sinusal assintomática."
  },
  "resposta": "D",
  "comentario": "VV-ECMO oxigena e remove CO2, mas não fornece suporte circulatório arterial direto.",
  "frase_ouro": "VV-ECMO é pulmão artificial; não é bomba sistêmica."
},
{
  "id": "yao-extra-020",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "Harlequin",
  "dificuldade": "difícil",
  "pergunta": "Na VA-ECMO femoral, por que monitorar saturação no membro superior direito?",
  "alternativas": {
    "A": "Porque o membro inferior sempre reflete melhor a oxigenação cerebral.",
    "B": "Para medir pressão venosa central.",
    "C": "Para estimar débito urinário.",
    "D": "Para confirmar bloqueio neuromuscular.",
    "E": "Para detectar hipoxemia diferencial em cérebro/coronárias pela síndrome de Harlequin."
  },
  "resposta": "E",
  "comentario": "Se o coração ejeta sangue mal oxigenado dos pulmões nativos para arco proximal, mão direita pode revelar hipóxia cerebral/coronária.",
  "frase_ouro": "Na VA-ECMO femoral, pé rosado não garante cérebro oxigenado."
},
{
  "id": "yao-extra-021",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "ECMO sweep",
  "dificuldade": "média",
  "pergunta": "Na ECMO, qual ajuste controla principalmente a remoção de CO₂?",
  "alternativas": {
    "A": "Fluxo de gás fresco no oxigenador, o sweep gas.",
    "B": "Dose de heparina apenas.",
    "C": "Pressão do cuff do tubo.",
    "D": "Volume do balão intra-aórtico.",
    "E": "Frequência do marca-passo."
  },
  "resposta": "A",
  "comentario": "A remoção de CO2 depende muito do sweep gas; oxigenação depende mais de fluxo sanguíneo, FiO2 do oxigenador e Hb.",
  "frase_ouro": "Na ECMO, CO₂ obedece ao sweep."
},
{
  "id": "yao-extra-022",
  "fonte": "Yao cap. 6",
  "capitulo": "6 - Suporte circulatório",
  "tema": "Weaning VA-ECMO",
  "dificuldade": "média",
  "pergunta": "Durante teste de retirada de VA-ECMO, qual conjunto sugere recuperação cardíaca mais favorável?",
  "alternativas": {
    "A": "Valva aórtica sempre fechada e VE distendido.",
    "B": "Boa pulsatilidade, eco com melhora biventricular, lactato estável e baixa necessidade vasoativa.",
    "C": "Lactato subindo e hipotensão progressiva.",
    "D": "Ausência de pressão de pulso.",
    "E": "Hipoxemia diferencial crescente."
  },
  "resposta": "B",
  "comentario": "Weaning exige avaliar função de VE/VD, perfusão, pressão de pulso e resposta a redução de fluxo.",
  "frase_ouro": "Desmame de ECMO pergunta se o coração voltou ao trabalho."
},
{
  "id": "yao-extra-023",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "EA metas",
  "dificuldade": "fácil",
  "pergunta": "Na estenose aórtica grave, qual meta hemodinâmica é mais apropriada?",
  "alternativas": {
    "A": "Reduzir agressivamente RVS.",
    "B": "Manter taquicardia acima de 120 bpm.",
    "C": "Manter ritmo sinusal, pré-carga adequada e pressão arterial/diastólica.",
    "D": "Evitar vasopressor alfa em qualquer cenário.",
    "E": "Induzir hipotensão controlada."
  },
  "resposta": "C",
  "comentario": "EA grave é lesão fixa; hipotensão, taquicardia e perda do ritmo sinusal são perigosas.",
  "frase_ouro": "EA grave exige pressão, pré-carga e átrio funcionando."
},
{
  "id": "yao-extra-024",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "IA metas",
  "dificuldade": "fácil",
  "pergunta": "Na insuficiência aórtica crônica importante, qual alvo é mais coerente?",
  "alternativas": {
    "A": "Aumentar pós-carga e reduzir FC para 45 bpm.",
    "B": "Manter hipertensão sistólica intensa.",
    "C": "Evitar qualquer vasodilatação.",
    "D": "Evitar bradicardia, manter FC 80-90 e reduzir pós-carga.",
    "E": "Bloquear completamente a contratilidade."
  },
  "resposta": "D",
  "comentario": "Na IA, regurgitação ocorre na diástole; bradicardia e pós-carga alta pioram refluxo.",
  "frase_ouro": "Na IA, diástole longa é tempo para vazar."
},
{
  "id": "yao-extra-025",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "EM metas",
  "dificuldade": "média",
  "pergunta": "Por que a taquicardia é deletéria na estenose mitral?",
  "alternativas": {
    "A": "Reduz pressão do átrio esquerdo.",
    "B": "Aumenta o tempo de enchimento mitral.",
    "C": "Diminui RVP por efeito direto.",
    "D": "Elimina risco de edema pulmonar.",
    "E": "Encurta a diástole, aumenta gradiente transmitral e eleva pressão do átrio esquerdo."
  },
  "resposta": "E",
  "comentario": "A valva mitral estenótica precisa de tempo diastólico; taquicardia precipita congestão pulmonar.",
  "frase_ouro": "EM é doença de tempo diastólico."
},
{
  "id": "yao-extra-026",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "IM metas",
  "dificuldade": "fácil",
  "pergunta": "Qual alteração tende a piorar a fração regurgitante na insuficiência mitral?",
  "alternativas": {
    "A": "Aumento da RVS/hipertensão sistêmica.",
    "B": "Vasodilatação controlada.",
    "C": "Redução de pós-carga.",
    "D": "FC levemente mais alta.",
    "E": "Melhora da contratilidade com baixa pós-carga."
  },
  "resposta": "A",
  "comentario": "Com RVS alta, o VE ejetará mais para o átrio esquerdo, caminho de menor pressão.",
  "frase_ouro": "Na IM, pós-carga alta empurra sangue para trás."
},
{
  "id": "yao-extra-027",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "EA + IM",
  "dificuldade": "média",
  "pergunta": "Em paciente com EA grave e IM moderada, qual lesão geralmente domina a estratégia anestésica?",
  "alternativas": {
    "A": "A insuficiência mitral moderada sempre domina.",
    "B": "A estenose aórtica grave.",
    "C": "A insuficiência aórtica leve domina.",
    "D": "Nenhuma lesão influencia a anestesia.",
    "E": "A meta principal é vasodilatação agressiva."
  },
  "resposta": "B",
  "comentario": "A EA grave não tolera hipotensão/vasodilatação abrupta; a IM é considerada, mas a estratégia respeita primeiro a EA.",
  "frase_ouro": "Na EA + IM, quem mata primeiro costuma mandar."
},
{
  "id": "yao-extra-028",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "Bernoulli",
  "dificuldade": "fácil",
  "pergunta": "Velocidade transaórtica máxima de 4 m/s corresponde a gradiente aproximado de:",
  "alternativas": {
    "A": "16 mmHg.",
    "B": "32 mmHg.",
    "C": "64 mmHg.",
    "D": "8 mmHg.",
    "E": "4 mmHg."
  },
  "resposta": "C",
  "comentario": "Pela Bernoulli simplificada: ΔP = 4V² = 4 × 16 = 64 mmHg.",
  "frase_ouro": "Doppler transforma velocidade em gradiente: 4V²."
},
{
  "id": "yao-extra-029",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "Eco IA",
  "dificuldade": "média",
  "pergunta": "Em IA importante durante CEC, qual preocupação é correta?",
  "alternativas": {
    "A": "IA sempre facilita cardioplegia anterógrada.",
    "B": "O VE nunca distende em IA.",
    "C": "Bradicardia profunda é desejável antes do clamp.",
    "D": "Cardioplegia anterógrada pela raiz pode ser ineficaz e distender o VE.",
    "E": "A IA elimina necessidade de venting."
  },
  "resposta": "D",
  "comentario": "Com valva aórtica incompetente, solução pode refluir para o VE; pode ser necessária cardioplegia retrógrada/direta e venting.",
  "frase_ouro": "Na IA, cardioplegia pela raiz pode virar volume no VE."
},
{
  "id": "yao-extra-030",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "Pós-plastia IM",
  "dificuldade": "difícil",
  "pergunta": "Após correção de IM crônica grave, por que pode surgir baixo débito e queda da FE?",
  "alternativas": {
    "A": "A pós-carga efetiva sempre cai após plastia.",
    "B": "A FE obrigatoriamente aumenta.",
    "C": "O VE passa a ejetar para uma câmara de menor pressão.",
    "D": "A correção elimina qualquer disfunção ventricular.",
    "E": "O VE perde a via de baixa pressão para o átrio esquerdo e enfrenta maior pós-carga efetiva."
  },
  "resposta": "E",
  "comentario": "A regurgitação mascarava disfunção; corrigir a IM força ejeção anterógrada para a aorta.",
  "frase_ouro": "Corrigir IM pode revelar o VE real."
},
{
  "id": "yao-extra-031",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "Tamponamento pós-valvar",
  "dificuldade": "média",
  "pergunta": "No pós-operatório valvar, achado que favorece tamponamento por coágulo localizado é:",
  "alternativas": {
    "A": "Compressão focal de câmara ao eco com enchimento prejudicado.",
    "B": "VE globalmente dilatado sem compressão.",
    "C": "Baixa RVS com câmaras normais.",
    "D": "Hipocalcemia isolada.",
    "E": "Broncoespasmo difuso."
  },
  "resposta": "A",
  "comentario": "Tamponamento pós-cirurgia cardíaca pode ser regional e não apresentar sinais clássicos.",
  "frase_ouro": "Pós-cardíaca: coágulo pode tamponar só uma câmara."
},
{
  "id": "yao-extra-032",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "TAVI",
  "dificuldade": "média",
  "pergunta": "Complicação conhecida de TAVI/TAVR é:",
  "alternativas": {
    "A": "Cura definitiva de toda doença mitral.",
    "B": "Bloqueio atrioventricular com possível necessidade de marca-passo.",
    "C": "Ausência de risco vascular.",
    "D": "Impossibilidade de leak paravalvar.",
    "E": "Dispensa total de monitorização."
  },
  "resposta": "B",
  "comentario": "TAVI pode causar distúrbios de condução, leak paravalvar, AVC, sangramento e complicações vasculares.",
  "frase_ouro": "TAVI troca esternotomia por condução, leak e acesso vascular."
},
{
  "id": "yao-extra-033",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "MitraClip",
  "dificuldade": "média",
  "pergunta": "Qual complicação pode ocorrer se o reparo borda-a-borda mitral reduzir excessivamente a área valvar?",
  "alternativas": {
    "A": "Insuficiência aórtica obrigatória.",
    "B": "Bloqueio de ramo direito universal.",
    "C": "Estenose mitral iatrogênica/gradiente transmitral elevado.",
    "D": "Ruptura do septo interventricular como regra.",
    "E": "Hipertensão intracraniana."
  },
  "resposta": "C",
  "comentario": "TEER/MitraClip reduz IM aproximando folhetos, mas pode criar gradiente transmitral se restringir demais a abertura.",
  "frase_ouro": "Corrigir IM demais pode criar EM."
},
{
  "id": "yao-extra-034",
  "fonte": "Yao cap. 7",
  "capitulo": "7 - Valvopatias",
  "tema": "Eco IM",
  "dificuldade": "difícil",
  "pergunta": "Na avaliação de IM por ETE, qual parâmetro é mais apropriado que simplesmente olhar gradiente transmitral?",
  "alternativas": {
    "A": "Gradiente transaórtico apenas.",
    "B": "Pressão de cuff do tubo.",
    "C": "TCA isolado.",
    "D": "Integração de jato, vena contracta, PISA/EROA, veias pulmonares e repercussão de câmaras.",
    "E": "Diurese horária."
  },
  "resposta": "D",
  "comentario": "IM deve ser quantificada de forma integrada; gradiente transmitral é mais útil para estenose ou estenose residual pós-reparo.",
  "frase_ouro": "Na IM, gradiente não é rei; jato e repercussão mandam."
},
{
  "id": "yao-extra-035",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "Código NBG",
  "dificuldade": "fácil",
  "pergunta": "No código NBG, a primeira letra indica:",
  "alternativas": {
    "A": "A resposta ao magneto.",
    "B": "O fabricante do gerador.",
    "C": "A vida da bateria.",
    "D": "A energia de choque.",
    "E": "A câmara estimulada."
  },
  "resposta": "E",
  "comentario": "A primeira letra diz onde o dispositivo estimula; a segunda, onde sente; a terceira, como responde ao sensing.",
  "frase_ouro": "Código de marca-passo começa por onde ele estimula."
},
{
  "id": "yao-extra-036",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "DDD vs DDI",
  "dificuldade": "média",
  "pergunta": "Diferença prática entre DDD e DDI:",
  "alternativas": {
    "A": "DDD rastreia atividade atrial; DDI não segue taquiarritmias atriais para estimular o ventrículo.",
    "B": "DDI sempre desfibrila e DDD nunca.",
    "C": "DDD não sente nenhuma câmara.",
    "D": "DDI é sempre assíncrono.",
    "E": "DDD é exclusivo de ICD subcutâneo."
  },
  "resposta": "A",
  "comentario": "DDD pode acompanhar o átrio até limite superior; DDI evita tracking de taquiarritmia atrial.",
  "frase_ouro": "DDD corre atrás do átrio; DDI não sai correndo."
},
{
  "id": "yao-extra-037",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "Magneto ICD",
  "dificuldade": "média",
  "pergunta": "Em um ICD/CRT-D, o magneto geralmente:",
  "alternativas": {
    "A": "Transforma sempre em DOO.",
    "B": "Suspende terapias antitaquicardia sem garantir modo de pacing assíncrono.",
    "C": "Desliga permanentemente o gerador.",
    "D": "Corrige falha de eletrodo.",
    "E": "Aumenta limiar de captura."
  },
  "resposta": "B",
  "comentario": "Em CDI/CRT-D, magneto costuma impedir choque/ATP, mas não necessariamente protege dependente contra inibição do pacing.",
  "frase_ouro": "Magneto no CDI é não choque, não pacing assíncrono."
},
{
  "id": "yao-extra-038",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "EMI",
  "dificuldade": "média",
  "pergunta": "Durante cirurgia com bisturi monopolar em paciente dependente de marca-passo, qual risco é central?",
  "alternativas": {
    "A": "Hipotermia pelo gerador.",
    "B": "Aumento obrigatório de hemoglobina.",
    "C": "Oversensing com inibição de pacing e bradicardia/assistolia.",
    "D": "Cura da arritmia pela EMI.",
    "E": "Bloqueio neuromuscular prolongado direto."
  },
  "resposta": "C",
  "comentario": "EMI pode ser interpretada como atividade elétrica cardíaca, inibindo estímulos em modo sensível.",
  "frase_ouro": "Bisturi pode fazer o marca-passo ouvir fantasma."
},
{
  "id": "yao-extra-039",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "Placa cautério",
  "dificuldade": "fácil",
  "pergunta": "Como deve ser posicionada a placa de retorno do eletrocautério em paciente com CIED?",
  "alternativas": {
    "A": "Sobre o gerador.",
    "B": "Sempre no tórax esquerdo.",
    "C": "Entre o bisturi e o gerador.",
    "D": "De modo que o trajeto da corrente fique longe do gerador e eletrodos.",
    "E": "Não deve ser usada."
  },
  "resposta": "D",
  "comentario": "A meta é reduzir corrente passando pelo dispositivo/eletrodos. Usar menor energia e rajadas curtas.",
  "frase_ouro": "Corrente do cautério deve fugir do gerador."
},
{
  "id": "yao-extra-040",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "Rate responsive",
  "dificuldade": "média",
  "pergunta": "Durante ventilação mecânica, o marca-passo aumenta gradualmente a FC estimulada sem arritmia. Qual explicação é provável?",
  "alternativas": {
    "A": "Bateria necessariamente terminal.",
    "B": "FV subclínica.",
    "C": "Desconexão completa do eletrodo.",
    "D": "Efeito de protamina.",
    "E": "Função rate-responsive interpretando ventilação/movimento/impedância como demanda."
  },
  "resposta": "E",
  "comentario": "Sensores de frequência adaptativa podem responder a movimento ou ventilação e aumentar pacing.",
  "frase_ouro": "Sensor esperto às vezes entende ventilador como exercício."
},
{
  "id": "yao-extra-041",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "S-ICD",
  "dificuldade": "média",
  "pergunta": "Limitação importante do cardiodesfibrilador implantável subcutâneo é:",
  "alternativas": {
    "A": "Não oferece pacing antibradicardia sustentado nem CRT.",
    "B": "Nunca desfibrila.",
    "C": "Exige eletrodo endocárdico no VD.",
    "D": "Sempre faz ressincronização.",
    "E": "É indicado para BAV total dependente."
  },
  "resposta": "A",
  "comentario": "S-ICD evita eletrodos transvenosos, mas não serve quando o paciente precisa de pacing ou ressincronização.",
  "frase_ouro": "S-ICD dá choque, mas não segura bradicardia."
},
{
  "id": "yao-extra-042",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "Pós-operatório",
  "dificuldade": "fácil",
  "pergunta": "Após cirurgia em que terapias de ICD foram suspensas, qual passo é obrigatório antes de liberar para ambiente não monitorizado?",
  "alternativas": {
    "A": "Manter ICD desligado por 24 h.",
    "B": "Confirmar reativação das terapias e função adequada do dispositivo.",
    "C": "Remover o gerador.",
    "D": "Administrar amiodarona obrigatória.",
    "E": "Ignorar se não houve choque."
  },
  "resposta": "B",
  "comentario": "Todo CDI suspenso precisa plano de reativação e monitorização até estar seguro.",
  "frase_ouro": "Se desligou o CDI, religar não é detalhe."
},
{
  "id": "yao-extra-043",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "TV intraop",
  "dificuldade": "média",
  "pergunta": "Se paciente com ICD desativado desenvolve TV instável intraoperatória, a conduta é:",
  "alternativas": {
    "A": "Aguardar o ICD tratar sozinho.",
    "B": "Aplicar magneto para aumentar choque interno.",
    "C": "Cardioversão/desfibrilação externa conforme ACLS, com pás longe do gerador se possível.",
    "D": "Suspender monitorização.",
    "E": "Administrar apenas fluido."
  },
  "resposta": "C",
  "comentario": "Com ICD desativado, a equipe assume o tratamento das arritmias ventriculares.",
  "frase_ouro": "Se desligou o CDI, você virou o desfibrilador."
},
{
  "id": "yao-extra-044",
  "fonte": "Yao cap. 8",
  "capitulo": "8 - CIED",
  "tema": "RM",
  "dificuldade": "difícil",
  "pergunta": "Para RM em paciente com CIED, qual afirmação é correta?",
  "alternativas": {
    "A": "MRI conditional significa sem protocolo.",
    "B": "Eletrodo abandonado nunca importa.",
    "C": "ICD ativo pode permanecer desfibrilando dentro da RM.",
    "D": "Mesmo sistema MRI conditional exige confirmação de gerador/eletrodos, programação e checagem antes/depois.",
    "E": "Não há risco de aquecimento de eletrodos."
  },
  "resposta": "D",
  "comentario": "RM exige protocolo específico; compatibilidade depende do sistema completo e condições do fabricante.",
  "frase_ouro": "MRI conditional é condição técnica, não bênção divina."
},
{
  "id": "yao-extra-045",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "Crawford",
  "dificuldade": "média",
  "pergunta": "Qual tipo de TAAA de Crawford é geralmente mais extenso e associado a maior risco de isquemia medular?",
  "alternativas": {
    "A": "Tipo IV exclusivamente infrarrenal.",
    "B": "Tipo V cervical.",
    "C": "Tipo I restrito à raiz.",
    "D": "Tipo zero.",
    "E": "Tipo II."
  },
  "resposta": "E",
  "comentario": "Crawford II estende-se amplamente da aorta torácica descendente para abaixo das renais, ameaçando colaterais medulares.",
  "frase_ouro": "Quanto mais aorta coberta, mais medula em jogo."
},
{
  "id": "yao-extra-046",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "Perfusão medular",
  "dificuldade": "fácil",
  "pergunta": "A pressão de perfusão medular é melhor representada por:",
  "alternativas": {
    "A": "PAM menos pressão do LCR.",
    "B": "PVC mais pressão do LCR.",
    "C": "PaCO₂ menos hemoglobina.",
    "D": "FC multiplicada por RVS.",
    "E": "TCA dividido por lactato."
  },
  "resposta": "A",
  "comentario": "Drenagem de LCR aumenta perfusão medular ao reduzir pressão ao redor da medula.",
  "frase_ouro": "Suba PAM, baixe líquor."
},
{
  "id": "yao-extra-047",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "Adamkiewicz",
  "dificuldade": "média",
  "pergunta": "A artéria de Adamkiewicz é importante porque:",
  "alternativas": {
    "A": "É ramo coronário direito.",
    "B": "É grande artéria radiculomedular anterior que contribui para perfusão toracolombar da medula.",
    "C": "Drena o seio coronário.",
    "D": "Irriga exclusivamente o fígado.",
    "E": "É a artéria gástrica esquerda."
  },
  "resposta": "B",
  "comentario": "Ela costuma nascer entre T8-L2, frequentemente à esquerda, e reforça a artéria espinal anterior.",
  "frase_ouro": "Adamkiewicz é a celebridade da medula toracolombar."
},
{
  "id": "yao-extra-048",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "MEP",
  "dificuldade": "média",
  "pergunta": "Queda de MEP de membros inferiores durante reparo de TAAA deve ser interpretada inicialmente como:",
  "alternativas": {
    "A": "Sinal obrigatório de hipoglicemia.",
    "B": "Artefato sempre benigno.",
    "C": "Possível isquemia medular até prova em contrário.",
    "D": "Bloqueio de ramo esquerdo.",
    "E": "Falha do oxímetro."
  },
  "resposta": "C",
  "comentario": "MEP monitora vias motoras, vulneráveis à isquemia da artéria espinal anterior.",
  "frase_ouro": "MEP caiu: pense medula primeiro."
},
{
  "id": "yao-extra-049",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "MEP conduta",
  "dificuldade": "difícil",
  "pergunta": "Diante de queda de MEP durante clampeamento aórtico, qual medida faz sentido?",
  "alternativas": {
    "A": "Reduzir PAM para diminuir sangramento.",
    "B": "Aumentar volátil e bloqueador neuromuscular.",
    "C": "Aceitar hipotensão para proteger enxerto.",
    "D": "Aumentar PAM, drenar LCR, otimizar Hb/O₂ e melhorar fluxo distal.",
    "E": "Ignorar se SSEP ainda normal."
  },
  "resposta": "D",
  "comentario": "A resposta busca aumentar perfusão medular e descartar interferência anestésica.",
  "frase_ouro": "MEP caiu: pressão, líquor, oxigênio e cirurgião."
},
{
  "id": "yao-extra-050",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "LHB",
  "dificuldade": "média",
  "pergunta": "O bypass cardíaco esquerdo no TAAA tem como objetivo:",
  "alternativas": {
    "A": "Parar o coração como CEC completa obrigatória.",
    "B": "Oxigenar sangue sem bomba.",
    "C": "Substituir drenagem de LCR.",
    "D": "Medir glicemia continuamente.",
    "E": "Manter perfusão distal e reduzir pós-carga proximal durante clampeamento."
  },
  "resposta": "E",
  "comentario": "LHB drena átrio esquerdo/veia pulmonar e retorna para aorta distal/femoral.",
  "frase_ouro": "LHB mantém sangue abaixo do clamp."
},
{
  "id": "yao-extra-051",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "Desclampeamento",
  "dificuldade": "média",
  "pergunta": "Após desclampeamento em TAAA, hipotensão e acidose podem resultar de:",
  "alternativas": {
    "A": "Retorno de metabólitos ácidos, vasodilatação, sangramento e hipovolemia relativa.",
    "B": "Aumento fixo de pós-carga proximal.",
    "C": "Fechamento da valva aórtica.",
    "D": "Hipervolemia cerebral isolada.",
    "E": "Aumento súbito do tônus alfa."
  },
  "resposta": "A",
  "comentario": "Reperfusão do território isquêmico reduz RVS e devolve ácido/potássio/lactato; sangramento pode coexistir.",
  "frase_ouro": "Desclamp devolve fluxo e a conta metabólica."
},
{
  "id": "yao-extra-052",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "Dreno LCR risco",
  "dificuldade": "média",
  "pergunta": "Complicação relevante do dreno de LCR é:",
  "alternativas": {
    "A": "Aumento obrigatório da pressão do LCR.",
    "B": "Hematoma neuraxial ou sangramento intracraniano por drenagem excessiva.",
    "C": "Proteção contra coagulopatia.",
    "D": "Cura da DPOC.",
    "E": "Eliminação do risco de paraplegia."
  },
  "resposta": "B",
  "comentario": "Dreno de LCR protege, mas exige cuidados com coagulação, volume drenado e infecção.",
  "frase_ouro": "Dreno de líquor ajuda, mas não é benigno."
},
{
  "id": "yao-extra-053",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "DPOC",
  "dificuldade": "fácil",
  "pergunta": "No TAAA aberto com DPOC, qual preocupação anestésica é especialmente importante?",
  "alternativas": {
    "A": "Hipoglicemia por insulina intratecal.",
    "B": "Bloqueio AV por LCR.",
    "C": "Ventilação monopulmonar com risco de hipoxemia, hiperinsuflação e hipercapnia.",
    "D": "Endoleak tipo II obrigatório.",
    "E": "Hipertermia maligna inevitável."
  },
  "resposta": "C",
  "comentario": "Toracotomia e ventilação monopulmonar desafiam paciente com DPOC.",
  "frase_ouro": "DPOC não gosta de pulmão único nem de pressa expiratória."
},
{
  "id": "yao-extra-054",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "Dissecção Stanford",
  "dificuldade": "fácil",
  "pergunta": "Na classificação de Stanford, dissecção tipo A é aquela que:",
  "alternativas": {
    "A": "Começa distal à subclávia e nunca envolve ascendente.",
    "B": "É restrita à aorta abdominal infrarrenal.",
    "C": "É sinônimo de aneurisma sacular.",
    "D": "Envolve a aorta ascendente, independentemente da extensão distal.",
    "E": "Só ocorre após TAVI."
  },
  "resposta": "D",
  "comentario": "Stanford A envolve ascendente e costuma exigir cirurgia urgente.",
  "frase_ouro": "Stanford A: ascendente entrou, cirurgião entra."
},
{
  "id": "yao-extra-055",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "Dissecção manejo",
  "dificuldade": "média",
  "pergunta": "Na dissecção aguda hipertensiva, por que beta-bloqueio precede vasodilatação?",
  "alternativas": {
    "A": "Para aumentar ejeção ventricular.",
    "B": "Para causar taquicardia reflexa.",
    "C": "Para elevar a pressão sistólica.",
    "D": "Porque vasodilatador é sempre proibido.",
    "E": "Para reduzir FC, contratilidade e dP/dt antes de baixar PA."
  },
  "resposta": "E",
  "comentario": "Vasodilatação isolada pode gerar taquicardia reflexa e manter alta a violência da ejeção.",
  "frase_ouro": "Primeiro tire a pancada, depois a pressão."
},
{
  "id": "yao-extra-056",
  "fonte": "Yao cap. 9",
  "capitulo": "9 - TAAA",
  "tema": "Proteção renal/visceral",
  "dificuldade": "média",
  "pergunta": "No reparo aberto de TAAA, proteção renal e visceral depende principalmente de:",
  "alternativas": {
    "A": "Perfusão distal/visceral adequada, tempo de isquemia reduzido, PAM e hemoglobina suficientes.",
    "B": "Hipotensão deliberada prolongada.",
    "C": "Anemia intensa para reduzir viscosidade.",
    "D": "Hipoxemia permissiva.",
    "E": "Suspensão de toda monitorização."
  },
  "resposta": "A",
  "comentario": "Rins e vísceras sofrem com clamp, embolização, hipotensão e sangramento; perfusão distal e tempo importam.",
  "frase_ouro": "No TAAA, órgão distal vive de fluxo, tempo e pressão."
},
{
  "id": "yao-extra-057",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "Indicação",
  "dificuldade": "fácil",
  "pergunta": "Homem com AAA infrarrenal assintomático de 6 cm geralmente deve ser considerado para:",
  "alternativas": {
    "A": "Apenas ultrassom anual indefinido.",
    "B": "Correção eletiva se risco e anatomia forem aceitáveis.",
    "C": "Anticoagulação plena como tratamento definitivo.",
    "D": "Ignorar por ser infrarrenal.",
    "E": "Cirurgia somente após ruptura."
  },
  "resposta": "B",
  "comentario": "AAA de 6 cm supera limiar clássico de correção em homens, considerando risco cirúrgico.",
  "frase_ouro": "Diâmetro decide risco; paciente decide tolerância."
},
{
  "id": "yao-extra-058",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "Clampeamento",
  "dificuldade": "fácil",
  "pergunta": "No clampeamento infrarrenal, a repercussão imediata mais típica é:",
  "alternativas": {
    "A": "Queda obrigatória da RVS.",
    "B": "Desaparecimento do risco coronariano.",
    "C": "Aumento de pós-carga e pressão proximal.",
    "D": "Aumento da perfusão distal.",
    "E": "Redução da pressão arterial proximal."
  },
  "resposta": "C",
  "comentario": "O clamp aumenta resistência à ejeção do VE e pode precipitar isquemia em coronariopatas.",
  "frase_ouro": "Clamp aumenta pós-carga."
},
{
  "id": "yao-extra-059",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "Desclampeamento",
  "dificuldade": "média",
  "pergunta": "Antes do desclampeamento aórtico, qual preparação é adequada?",
  "alternativas": {
    "A": "Aumentar vasodilatador ao máximo.",
    "B": "Suspender monitorização invasiva.",
    "C": "Induzir hipovolemia deliberada.",
    "D": "Otimizar volume, ter vasopressor pronto, corrigir cálcio/acidose importantes e avisar equipe.",
    "E": "Ignorar potássio e cálcio."
  },
  "resposta": "D",
  "comentario": "Desclampeamento pode causar hipotensão por queda de RVS, metabólitos ácidos e hipovolemia.",
  "frase_ouro": "Antes de soltar o clamp, prepare o chão."
},
{
  "id": "yao-extra-060",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "Endoleak",
  "dificuldade": "média",
  "pergunta": "Endoleak tipo II após EVAR geralmente é causado por:",
  "alternativas": {
    "A": "Falha de vedação proximal.",
    "B": "Ruptura entre componentes.",
    "C": "Porosidade obrigatória do enxerto moderno.",
    "D": "Infecção pulmonar.",
    "E": "Fluxo retrógrado por colaterais, como artérias lombares ou mesentérica inferior."
  },
  "resposta": "E",
  "comentario": "Tipo II é colateral; conduta depende de crescimento do saco e persistência.",
  "frase_ouro": "Tipo II é colateral teimosa."
},
{
  "id": "yao-extra-061",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "EVAR anestesia",
  "dificuldade": "média",
  "pergunta": "Qual vantagem potencial do EVAR em paciente DPOC/alto risco?",
  "alternativas": {
    "A": "Menor agressão fisiológica, podendo permitir anestesia regional ou local com sedação em selecionados.",
    "B": "Obrigatoriamente exige toracotomia.",
    "C": "Sempre causa mais sangramento que aberto.",
    "D": "Não depende de anatomia.",
    "E": "Elimina contraste e seguimento."
  },
  "resposta": "A",
  "comentario": "EVAR evita laparotomia e clamp aberto, mas depende de anatomia e requer vigilância.",
  "frase_ouro": "EVAR é menos invasivo, não menos vigiado."
},
{
  "id": "yao-extra-062",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "AAA roto",
  "dificuldade": "difícil",
  "pergunta": "No AAA roto com choque, qual prioridade é correta?",
  "alternativas": {
    "A": "Teste ergométrico antes da incisão.",
    "B": "Ressuscitação hemorrágica e controle cirúrgico/endovascular rápido da aorta.",
    "C": "Normalizar PA para 180 mmHg antes do controle.",
    "D": "Aguardar todos exames se instável.",
    "E": "Evitar transfusão até coagulograma completo."
  },
  "resposta": "B",
  "comentario": "Ruptura exige controle proximal e sangue; hipotensão permissiva pode ser considerada até controle, se perfusão mínima.",
  "frase_ouro": "AAA roto não espera exame bonito."
},
{
  "id": "yao-extra-063",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "Rim",
  "dificuldade": "média",
  "pergunta": "Creatinina 1,9 mg/dL em idoso com AAA significa:",
  "alternativas": {
    "A": "Função renal normal.",
    "B": "Contraindicação absoluta a qualquer intervenção.",
    "C": "Reserva renal reduzida; estimar clearance e evitar hipotensão/nefrótoxicos.",
    "D": "Risco renal inexistente se clamp infrarrenal.",
    "E": "Indicação obrigatória de diurético em bolus."
  },
  "resposta": "C",
  "comentario": "Idosos podem ter clearance muito reduzido com creatinina aparentemente moderada.",
  "frase_ouro": "Creatinina 1,9 no idoso é rim com pouca margem."
},
{
  "id": "yao-extra-064",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "Pós-op intestino",
  "dificuldade": "difícil",
  "pergunta": "Após AAA aberto, dor abdominal desproporcional, acidose e diarreia sanguinolenta sugerem:",
  "alternativas": {
    "A": "Síndrome pós-implantação benigna obrigatória.",
    "B": "Hipocalcemia isolada.",
    "C": "Pneumotórax hipertensivo como primeira hipótese.",
    "D": "Isquemia intestinal/colite isquêmica.",
    "E": "Bloqueio neuromuscular residual."
  },
  "resposta": "D",
  "comentario": "Hipoperfusão, ligadura da mesentérica inferior ou doença colateral podem causar isquemia colônica.",
  "frase_ouro": "Intestino isquêmico às vezes avisa tarde."
},
{
  "id": "yao-extra-065",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "Peridural",
  "dificuldade": "média",
  "pergunta": "Peridural torácica em AAA aberto pode ser útil, mas exige atenção especial a:",
  "alternativas": {
    "A": "Endoleak tipo I.",
    "B": "Bateria de marcapasso.",
    "C": "Pressão do LCR obrigatória.",
    "D": "Hipoglicemia pós-feo.",
    "E": "Coagulação, heparinização e risco de hematoma neuraxial."
  },
  "resposta": "E",
  "comentario": "Analgesia melhora função pulmonar, mas anticoagulação intraoperatória torna timing neuraxial crítico.",
  "frase_ouro": "Peridural ajuda pulmão, mas respeita heparina."
},
{
  "id": "yao-extra-066",
  "fonte": "Yao cap. 10",
  "capitulo": "10 - AAA",
  "tema": "Pós-op pulmão",
  "dificuldade": "fácil",
  "pergunta": "Em DPOC após AAA aberto, analgesia adequada reduz risco de:",
  "alternativas": {
    "A": "Hipoventilação, atelectasia e pneumonia por dor/incisão abdominal.",
    "B": "Endoleak tipo III.",
    "C": "Trombose de prótese valvar mitral.",
    "D": "Hipertensão intracraniana por LCR.",
    "E": "Falha de CRT-D."
  },
  "resposta": "A",
  "comentario": "Dor abdominal impede tosse e expansão; analgesia é estratégia pulmonar.",
  "frase_ouro": "Dor mal tratada vira atelectasia."
},
{
  "id": "yao-extra-067",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "Adiar cirurgia",
  "dificuldade": "média",
  "pergunta": "Em cirurgia eletiva, qual situação mais favorece adiar/otimizar antes de seguir?",
  "alternativas": {
    "A": "HAS leve controlada.",
    "B": "PA ≥180/110 persistente ou lesão aguda de órgão-alvo.",
    "C": "Uso crônico de anlodipino.",
    "D": "PA normal após repouso.",
    "E": "Hipertensão do avental branco confirmada."
  },
  "resposta": "B",
  "comentario": "Hipertensão isolada leve/moderada não cancela automaticamente, mas PA muito alta persistente ou órgão-alvo muda conduta.",
  "frase_ouro": "Cancele por risco, não por susto isolado."
},
{
  "id": "yao-extra-068",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "Medicações",
  "dificuldade": "fácil",
  "pergunta": "Qual medicação anti-hipertensiva crônica geralmente deve ser mantida no perioperatório?",
  "alternativas": {
    "A": "Clonidina sempre suspensa abruptamente.",
    "B": "Losartana obrigatoriamente mantida em toda cirurgia grande.",
    "C": "Beta-bloqueador.",
    "D": "Hidroclorotiazida sempre em jejum prolongado.",
    "E": "Metirosina para todo hipertenso."
  },
  "resposta": "C",
  "comentario": "Beta-bloqueador crônico deve ser mantido para evitar rebote, taquicardia e isquemia.",
  "frase_ouro": "Beta crônico se mantém; rebote não perdoa."
},
{
  "id": "yao-extra-069",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "IECA/BRA",
  "dificuldade": "média",
  "pergunta": "IECA/BRA tomados no dia da cirurgia podem predispor a:",
  "alternativas": {
    "A": "Crise hipertensiva por alfa sem oposição.",
    "B": "Aumento obrigatório de potássio durante laringoscopia apenas.",
    "C": "Hipertermia maligna.",
    "D": "Hipotensão/vasoplegia após indução.",
    "E": "Bloqueio neuromuscular irreversível."
  },
  "resposta": "D",
  "comentario": "Bloqueio do SRAA reduz capacidade de compensar vasodilatação anestésica; pode exigir vasopressina se refratário.",
  "frase_ouro": "IECA/BRA podem cobrar na indução."
},
{
  "id": "yao-extra-070",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "HAS despertar",
  "dificuldade": "média",
  "pergunta": "No despertar, PA 210/110 e FC 120. Antes de vasodilatador, o anestesista deve buscar:",
  "alternativas": {
    "A": "Apenas feocromocitoma.",
    "B": "Sempre ruptura de aorta.",
    "C": "Somente erro de manguito.",
    "D": "Apenas excesso de bloqueador neuromuscular.",
    "E": "Dor, hipóxia, hipercapnia, bexiga cheia, tremor e agitação."
  },
  "resposta": "E",
  "comentario": "Hipertensão no despertar frequentemente é secundária a estímulos reversíveis.",
  "frase_ouro": "Dor, CO₂ e bexiga são diagnósticos anti-hipertensivos."
},
{
  "id": "yao-extra-071",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "ISH",
  "dificuldade": "média",
  "pergunta": "Hipertensão sistólica isolada no idoso costuma refletir:",
  "alternativas": {
    "A": "Rigidez arterial com pressão de pulso aumentada.",
    "B": "Hipovolemia absoluta obrigatória.",
    "C": "Vasodilatação venosa intensa.",
    "D": "Baixo volume sistólico por tamponamento.",
    "E": "Hipercalemia grave."
  },
  "resposta": "A",
  "comentario": "Aorta rígida aumenta PAS e pressão de pulso, podendo reduzir PAD e perfusão coronariana.",
  "frase_ouro": "Aorta rígida aumenta sistólica e rouba margem diastólica."
},
{
  "id": "yao-extra-072",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "Autorregulação",
  "dificuldade": "média",
  "pergunta": "Em hipertenso crônico grave, por que evitar queda brusca de PAM?",
  "alternativas": {
    "A": "Porque hipertenso não tem risco renal.",
    "B": "Autorregulação cerebral e renal pode estar deslocada para pressões mais altas.",
    "C": "Porque hipotensão sempre aumenta fluxo cerebral.",
    "D": "Porque isso corrige HVE.",
    "E": "Porque PA baixa sempre melhora coronárias."
  },
  "resposta": "B",
  "comentario": "Pressões normais para um normotenso podem ser hipoperfusoras no hipertenso crônico.",
  "frase_ouro": "Pressão bonita para tabela pode ser baixa para o hipertenso."
},
{
  "id": "yao-extra-073",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "Feocromocitoma preparo",
  "dificuldade": "fácil",
  "pergunta": "Droga clássica de preparo pré-operatório do feocromocitoma é:",
  "alternativas": {
    "A": "Efedrina.",
    "B": "Pancurônio.",
    "C": "Fenoxibenzamina.",
    "D": "Nitroprussiato oral exclusivo.",
    "E": "Succinilcolina."
  },
  "resposta": "C",
  "comentario": "Fenoxibenzamina é alfa-bloqueador não seletivo irreversível; alternativas incluem doxazosina/prazosina/terazosina.",
  "frase_ouro": "Preparo do feo começa pelo alfa."
},
{
  "id": "yao-extra-074",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "Feo ordem",
  "dificuldade": "fácil",
  "pergunta": "No feocromocitoma, por que beta-bloqueador só após alfa-bloqueio?",
  "alternativas": {
    "A": "Para causar hipoglicemia antes da cirurgia.",
    "B": "Porque beta-bloqueador corrige volume.",
    "C": "Porque alfa-bloqueador só funciona depois do beta.",
    "D": "Para evitar vasoconstrição alfa sem oposição e crise hipertensiva.",
    "E": "Porque não há receptor alfa no vaso."
  },
  "resposta": "D",
  "comentario": "Beta antes de alfa bloqueia vasodilatação beta e deixa alfa-vasoconstrição predominar.",
  "frase_ouro": "No feo: alfa antes de beta, sem negociação."
},
{
  "id": "yao-extra-075",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "Fentolamina",
  "dificuldade": "média",
  "pergunta": "A fentolamina usada em crise catecolaminérgica é:",
  "alternativas": {
    "A": "Agonista beta-2 seletivo.",
    "B": "Bloqueador beta irreversível.",
    "C": "Inibidor da síntese de catecolaminas.",
    "D": "Agonista alfa-2 central.",
    "E": "Bloqueador alfa-adrenérgico competitivo não seletivo."
  },
  "resposta": "E",
  "comentario": "Bloqueia alfa-1 e alfa-2, reduzindo vasoconstrição, mas pode causar taquicardia.",
  "frase_ouro": "Fentolamina corta alfa rápido, mas pode acelerar o coração."
},
{
  "id": "yao-extra-076",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "Pós-feo",
  "dificuldade": "média",
  "pergunta": "Após ligadura da veia adrenal no feocromocitoma, hipotensão ocorre principalmente por:",
  "alternativas": {
    "A": "Queda abrupta de catecolaminas, alfa-bloqueio residual e hipovolemia relativa.",
    "B": "Aumento súbito de catecolaminas.",
    "C": "Hiperaldosteronismo agudo.",
    "D": "Aumento de RVS por beta-bloqueio.",
    "E": "Obstrução da via aérea como regra."
  },
  "resposta": "A",
  "comentario": "Depois da fonte tumoral, some vasoconstrição que sustentava pressão; volume e vasopressores podem ser necessários.",
  "frase_ouro": "Antes da veia: catecolamina demais; depois: catecolamina de menos."
},
{
  "id": "yao-extra-077",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "Pós-feo glicose",
  "dificuldade": "média",
  "pergunta": "Após remoção do feocromocitoma, qual alteração glicêmica pode ocorrer?",
  "alternativas": {
    "A": "Cetoacidose obrigatória.",
    "B": "Hipoglicemia.",
    "C": "Hiperglicemia permanente por falta de insulina.",
    "D": "Hiperosmolaridade por manitol.",
    "E": "Hipocalcemia isolada."
  },
  "resposta": "B",
  "comentario": "A queda de catecolaminas remove a inibição da secreção de insulina, podendo causar hipoglicemia.",
  "frase_ouro": "Sem catecolamina, a insulina pode aparecer com vontade."
},
{
  "id": "yao-extra-078",
  "fonte": "Yao cap. 11",
  "capitulo": "11 - Hipertensão",
  "tema": "Hidralazina",
  "dificuldade": "média",
  "pergunta": "Por que hidralazina é ruim em dissecção aguda de aorta?",
  "alternativas": {
    "A": "É beta-bloqueador puro.",
    "B": "Não altera pressão arterial.",
    "C": "Pode causar taquicardia reflexa e aumentar dP/dt.",
    "D": "Só atua como antiarrítmico.",
    "E": "Reduz catecolaminas tumorais."
  },
  "resposta": "C",
  "comentario": "Na dissecção, evitar drogas com início imprevisível e taquicardia reflexa; primeiro beta-bloqueio.",
  "frase_ouro": "Hidralazina chega tarde e sai tarde."
},
{
  "id": "yao-extra-079",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Fisiologia",
  "dificuldade": "fácil",
  "pergunta": "Tamponamento cardíaco reduz débito principalmente por:",
  "alternativas": {
    "A": "Aumento primário de contratilidade.",
    "B": "Vasodilatação isolada.",
    "C": "Redução da pressão pericárdica.",
    "D": "Restrição ao enchimento diastólico por aumento da pressão intrapericárdica.",
    "E": "Aumento da complacência aguda do pericárdio."
  },
  "resposta": "D",
  "comentario": "A pressão pericárdica elevada limita enchimento e reduz volume sistólico.",
  "frase_ouro": "Tamponamento é doença de enchimento."
},
{
  "id": "yao-extra-080",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Volume vs velocidade",
  "dificuldade": "fácil",
  "pergunta": "Por que pequeno volume pode causar tamponamento agudo grave?",
  "alternativas": {
    "A": "Porque sangue no pericárdio aumenta contratilidade.",
    "B": "Porque o pericárdio agudo é muito complacente.",
    "C": "Porque reduz PVC imediatamente.",
    "D": "Porque causa broncodilatação.",
    "E": "Porque a velocidade de acúmulo supera a complacência pericárdica."
  },
  "resposta": "E",
  "comentario": "Acúmulo lento permite adaptação; acúmulo rápido eleva muito a pressão intrapericárdica.",
  "frase_ouro": "No tamponamento, velocidade importa tanto quanto volume."
},
{
  "id": "yao-extra-081",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Pulso paradoxal",
  "dificuldade": "média",
  "pergunta": "Pulso paradoxal é definido classicamente como:",
  "alternativas": {
    "A": "Queda inspiratória da pressão sistólica maior que 10 mmHg.",
    "B": "Aumento da PAS na inspiração.",
    "C": "Desaparecimento obrigatório do pulso radial.",
    "D": "Variação da glicemia com respiração.",
    "E": "Redução da PVC na inspiração."
  },
  "resposta": "A",
  "comentario": "No tamponamento, inspiração aumenta retorno ao VD e reduz enchimento do VE por interdependência ventricular.",
  "frase_ouro": "Pulso paradoxal é queda sistólica exagerada na inspiração."
},
{
  "id": "yao-extra-082",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Pós-cardíaca",
  "dificuldade": "média",
  "pergunta": "No pós-operatório de cirurgia cardíaca, tamponamento frequentemente é:",
  "alternativas": {
    "A": "Sempre derrame livre circunferencial clássico.",
    "B": "Regional, por coágulo comprimindo câmaras específicas.",
    "C": "Impossível se há drenos.",
    "D": "Sempre com PAOP maior que PVC.",
    "E": "Exclusivamente pericardite viral."
  },
  "resposta": "B",
  "comentario": "Coágulos localizados podem comprimir AD/VD e gerar baixo débito sem todos sinais clássicos.",
  "frase_ouro": "Pós-cardíaca: tamponamento pode ser bullying focal."
},
{
  "id": "yao-extra-083",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Hemodinâmica",
  "dificuldade": "média",
  "pergunta": "Pós-CABG com PVC 23, PAOP 14 e débito baixo sugere:",
  "alternativas": {
    "A": "Hipovolemia pura.",
    "B": "Vasoplegia com alto débito.",
    "C": "Compressão direita/tamponamento regional.",
    "D": "Hipertireoidismo.",
    "E": "Estenose aórtica leve assintomática."
  },
  "resposta": "C",
  "comentario": "PVC elevada desproporcional à PAOP no contexto pós-cardíaco sugere obstrução ao enchimento direito.",
  "frase_ouro": "PVC alta, PAOP nem tanto: olhe o direito comprimido."
},
{
  "id": "yao-extra-084",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Indução",
  "dificuldade": "difícil",
  "pergunta": "Na indução anestésica de paciente com tamponamento significativo, qual estratégia é mais segura?",
  "alternativas": {
    "A": "Bolus grande de propofol para reduzir simpático.",
    "B": "PEEP alta obrigatória antes de drenar.",
    "C": "Bloqueio beta profundo antes de acesso cirúrgico.",
    "D": "Manter respiração/retorno venoso quando possível, evitar vasodilatação e depressão miocárdica, ter cirurgião pronto.",
    "E": "Indução hipotensiva controlada."
  },
  "resposta": "D",
  "comentario": "Tamponamento depende de catecolaminas, pré-carga e FC para manter débito; pressão positiva e anestésicos podem colapsar.",
  "frase_ouro": "No tamponamento, a indução não pode roubar compensações."
},
{
  "id": "yao-extra-085",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Tratamento definitivo",
  "dificuldade": "fácil",
  "pergunta": "Tratamento definitivo do tamponamento pós-operatório por coágulo é geralmente:",
  "alternativas": {
    "A": "Diurético isolado.",
    "B": "Beta-bloqueador.",
    "C": "Antibiótico apenas.",
    "D": "Observação sem imagem.",
    "E": "Reexploração/drenagem cirúrgica do coágulo."
  },
  "resposta": "E",
  "comentario": "Coágulo localizado no pós-operatório cardíaco frequentemente exige reabordagem; volume/vaso são ponte.",
  "frase_ouro": "Coágulo comprimindo câmara precisa sair."
},
{
  "id": "yao-extra-086",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Eco",
  "dificuldade": "média",
  "pergunta": "Achado ecocardiográfico que apoia tamponamento é:",
  "alternativas": {
    "A": "Colapso/compressão de câmaras direitas ou coleção/coágulo com enchimento prejudicado.",
    "B": "VE hiperdinâmico sem coleção em paciente normal.",
    "C": "Aorta abdominal de 3 cm.",
    "D": "Ausência de variação respiratória em todos fluxos.",
    "E": "Bexiga cheia."
  },
  "resposta": "A",
  "comentario": "O eco identifica líquido/coágulo, compressão regional, colapso diastólico e interdependência ventricular.",
  "frase_ouro": "Eco mostra o saco apertando o coração."
},
{
  "id": "yao-extra-087",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Ventilação",
  "dificuldade": "média",
  "pergunta": "Por que pressão positiva pode piorar tamponamento?",
  "alternativas": {
    "A": "Aumenta retorno venoso sempre.",
    "B": "Reduz retorno venoso e pode diminuir ainda mais enchimento.",
    "C": "Elimina pressão intrapericárdica.",
    "D": "Cura interdependência ventricular.",
    "E": "Aumenta volume sistólico obrigatoriamente."
  },
  "resposta": "B",
  "comentario": "O paciente tamponado é pré-carga dependente; ventilação positiva pode reduzir retorno venoso e precipitar colapso.",
  "frase_ouro": "Pressão positiva pode roubar o pouco enchimento que resta."
},
{
  "id": "yao-extra-088",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Taquicardia",
  "dificuldade": "fácil",
  "pergunta": "No tamponamento agudo, taquicardia geralmente representa:",
  "alternativas": {
    "A": "Causa primária do líquido pericárdico.",
    "B": "Sinal de resolução.",
    "C": "Mecanismo compensatório para manter débito.",
    "D": "Indicação de beta-bloqueio profundo imediato.",
    "E": "Ausência de choque."
  },
  "resposta": "C",
  "comentario": "Com volume sistólico baixo, o débito é mantido por aumento da FC; bradicardia é sinal ominoso.",
  "frase_ouro": "No tamponamento, taquicardia é muleta do débito."
},
{
  "id": "yao-extra-089",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Diferencial",
  "dificuldade": "média",
  "pergunta": "Qual diagnóstico pode mimetizar tamponamento com choque obstrutivo e VD sobrecarregado?",
  "alternativas": {
    "A": "Hipoglicemia simples.",
    "B": "Otite média.",
    "C": "Fratura de rádio.",
    "D": "Embolia pulmonar maciça.",
    "E": "Alergia leve a esparadrapo."
  },
  "resposta": "D",
  "comentario": "EP maciça causa falência aguda de VD, hipotensão e pressões direitas elevadas; eco ajuda diferenciar.",
  "frase_ouro": "Nem todo VD sofrendo é pericárdio; pense também em pulmão."
},
{
  "id": "yao-extra-090",
  "fonte": "Yao cap. 12",
  "capitulo": "12 - Tamponamento",
  "tema": "Após abertura",
  "dificuldade": "média",
  "pergunta": "Após drenagem/abertura do pericárdio em tamponamento, espera-se:",
  "alternativas": {
    "A": "Piora obrigatória por perda de todo retorno venoso.",
    "B": "Indicação de reduzir volume sistólico.",
    "C": "Bloqueio AV universal.",
    "D": "Necessidade de parar ventilação.",
    "E": "Melhora súbita do enchimento e aumento do débito, podendo revelar sangramento/vasoplegia."
  },
  "resposta": "E",
  "comentario": "Ao liberar compressão, câmaras enchem melhor; ainda é preciso tratar causa, sangramento e coagulopatia.",
  "frase_ouro": "Abrir o pericárdio devolve espaço ao coração."
}
];

let currentSet = [];
let currentIndex = 0;
const storageKey = "tsaHardModeProgressV1";
const state = JSON.parse(localStorage.getItem(storageKey) || '{"answers":{},"marked":{}}');

const $ = (id) => document.getElementById(id);

function save() { localStorage.setItem(storageKey, JSON.stringify(state)); }

function initFilters() {
  const chapters = [...new Set(QUESTIONS.map(q => q.capitulo))].sort();
  const tags = [...new Set(QUESTIONS.map(q => q.tema))].sort();
  chapters.forEach(c => $("chapterFilter").append(new Option(c, c)));
  tags.forEach(t => $("tagFilter").append(new Option(t, t)));
}

function updateStats() {
  $("totalQuestions").textContent = QUESTIONS.length;
  const answers = Object.values(state.answers);
  const total = answers.length;
  const correct = answers.filter(a => a.correct).length;
  $("answeredCount").textContent = total;
  $("wrongCount").textContent = total - correct;
  $("correctRate").textContent = total ? Math.round((correct / total) * 100) + "%" : "0%";
}

function buildSet() {
  const chapter = $("chapterFilter").value;
  const tag = $("tagFilter").value;
  const mode = $("modeSelect").value;
  let set = [...QUESTIONS];
  if (chapter !== "all") set = set.filter(q => q.capitulo === chapter);
  if (tag !== "all") set = set.filter(q => q.tema === tag);
  if (mode === "errors") set = set.filter(q => state.answers[q.id] && !state.answers[q.id].correct);
  if (mode === "exam10") set = shuffle(set).slice(0, 10);
  return set;
}

function shuffle(arr) { return arr.map(v => [Math.random(), v]).sort((a,b) => a[0]-b[0]).map(x => x[1]); }

function start() {
  currentSet = buildSet();
  currentIndex = 0;
  if (!currentSet.length) {
    $("emptyState").classList.remove("hidden");
    $("questionSection").classList.add("hidden");
    $("emptyState").innerHTML = "<h2>Nada por aqui</h2><p>Não há questões para esse filtro. Troque capítulo/tema ou saia do modo revisar erros.</p>";
    return;
  }
  $("emptyState").classList.add("hidden");
  $("questionSection").classList.remove("hidden");
  renderQuestion();
}

function renderQuestion() {
  const q = currentSet[currentIndex];
  $("qSource").textContent = q.fonte;
  $("qDifficulty").textContent = q.dificuldade;
  $("qProgress").textContent = `${currentIndex + 1}/${currentSet.length}`;
  $("qTitle").textContent = `${q.capitulo} · ${q.tema}`;
  $("qText").textContent = q.pergunta;
  $("options").innerHTML = "";
  $("feedback").classList.add("hidden");
  $("feedback").innerHTML = "";

  const saved = state.answers[q.id];
  Object.entries(q.alternativas).forEach(([letter, text]) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = `${letter}) ${text}`;
    btn.onclick = () => answer(letter);
    if (saved) {
      btn.disabled = true;
      if (letter === q.resposta) btn.classList.add("correct");
      if (letter === saved.choice && letter !== q.resposta) btn.classList.add("wrong");
    }
    $("options").appendChild(btn);
  });
  if (saved) showFeedback(saved.choice);
  $("prevBtn").disabled = currentIndex === 0;
  $("nextBtn").disabled = currentIndex === currentSet.length - 1;
  $("markBtn").textContent = state.marked[q.id] ? "Revisão marcada" : "Marcar revisão";
}

function answer(choice) {
  const q = currentSet[currentIndex];
  state.answers[q.id] = { choice, correct: choice === q.resposta, date: new Date().toISOString() };
  save();
  updateStats();
  renderQuestion();
}

function showFeedback(choice) {
  const q = currentSet[currentIndex];
  const correct = choice === q.resposta;
  $("feedback").classList.remove("hidden");
  $("feedback").innerHTML = `
    <strong>${correct ? "✅ Correto" : "❌ Incorreto"}. Resposta: ${q.resposta}</strong>
    <p>${q.comentario}</p>
    <p class="gold">Frase de ouro: ${q.frase_ouro}</p>
  `;
}

$("startBtn").onclick = start;
$("prevBtn").onclick = () => { currentIndex--; renderQuestion(); };
$("nextBtn").onclick = () => { currentIndex++; renderQuestion(); };
$("markBtn").onclick = () => {
  const q = currentSet[currentIndex];
  state.marked[q.id] = !state.marked[q.id];
  save();
  renderQuestion();
};
$("resetBtn").onclick = () => {
  if (confirm("Resetar todo o progresso salvo neste navegador?")) {
    localStorage.removeItem(storageKey);
    location.reload();
  }
};

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

initFilters();
updateStats();

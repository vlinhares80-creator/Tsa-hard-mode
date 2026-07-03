const FLASHCARDS = [
  {
    id: "oral-emerg-001",
    titulo: "Anafilaxia perioperatória",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Paciente masculino, 56 anos, ASA II, hipertenso controlado, submetido à colectomia videolaparoscópica. Cinco minutos após cefazolina e rocurônio, evolui com PA 45x25 mmHg, FC 135 bpm, SpO₂ 82%, aumento abrupto da pressão de vias aéreas, broncoespasmo intenso, queda do EtCO₂ e eritema discreto no tórax.",
    pergunta: "Você é o anestesiologista responsável. Qual seu diagnóstico e como conduz esse caso, passo a passo?",
    respostaIdeal: [
      "Eu reconheço imediatamente uma anafilaxia perioperatória grave, provavelmente desencadeada por bloqueador neuromuscular ou antibiótico.",
      "Chamo ajuda, comunico a equipe cirúrgica e interrompo a administração de possíveis agentes desencadeantes.",
      "Administro oxigênio a 100%, assumo ventilação manual e avalio necessidade de aprofundar ou reduzir agentes anestésicos conforme estabilidade.",
      "Inicio adrenalina intravenosa titulada conforme gravidade. Em choque profundo, não atraso adrenalina.",
      "Faço expansão volêmica vigorosa, pois a anafilaxia cursa com vasodilatação e extravasamento capilar importantes.",
      "Trato broncoespasmo com ventilação adequada, broncodilatadores e adrenalina; considero infusão contínua de vasopressor se refratário.",
      "Após estabilização, uso corticoide e anti-histamínicos como adjuvantes, não como tratamento principal.",
      "Documento todos os fármacos administrados e horários, coleto triptase e encaminho para investigação alergológica posterior."
    ],
    pontosObrigatorios: [
      "Reconhecer anafilaxia mesmo sem urticária exuberante.",
      "Adrenalina é a droga central.",
      "Oxigênio 100% e ventilação manual.",
      "Expansão volêmica agressiva.",
      "Registrar sequência temporal dos medicamentos.",
      "Coletar triptase e orientar investigação posterior."
    ],
    errosGraves: [
      "Dar apenas hidrocortisona e esperar resposta.",
      "Aguardar exames para iniciar adrenalina.",
      "Ignorar broncoespasmo como manifestação de anafilaxia.",
      "Esquecer reposição volêmica.",
      "Não documentar fármacos e horários."
    ],
    aprofundamento: [
      {
        pergunta: "Quando colher triptase?",
        resposta: "Idealmente o quanto antes após estabilização, com amostra aguda entre 30 minutos e 2 horas. Pode-se colher uma segunda entre 2 e 4 horas e uma basal após recuperação, geralmente 24 horas ou mais depois."
      },
      {
        pergunta: "Como interpretar triptase?",
        resposta: "A interpretação ideal compara a amostra aguda com a basal. A fórmula usada é: triptase aguda maior que 1,2 vezes a basal mais 2 ng/mL sugere ativação mastocitária."
      },
      {
        pergunta: "Paciente usa beta-bloqueador e responde mal à adrenalina. O que considerar?",
        resposta: "Glucagon pode ser usado como adjuvante, pois aumenta AMPc por via independente do receptor beta-adrenérgico."
      }
    ],
    fraseOuro: "Na anafilaxia, adrenalina salva vidas; corticoide apenas ajuda depois que o paciente continua vivo.",
    referencias: ["Yao", "Miller", "Barash", "SBA", "Diretrizes de anafilaxia perioperatória"]
  },

  {
    id: "oral-emerg-002",
    titulo: "PCR por reflexo vagal após raquianestesia",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Homem de 28 anos, ASA I, atleta, submetido à artroscopia de joelho sob raquianestesia. Após 20 minutos, já em decúbito dorsal, refere náusea e mal-estar. O monitor mostra FC caindo de 62 para 38 bpm, PA 85x45 mmHg e SpO₂ 98%. Em seguida, evolui com bradicardia extrema e perda de pulso.",
    pergunta: "Explique a fisiopatologia provável e descreva sua conduta imediata.",
    respostaIdeal: [
      "Eu reconheço uma bradicardia grave pós-raquianestesia com risco de parada por reflexo vagal, provavelmente associada à redução do retorno venoso e reflexo de Bezold-Jarisch.",
      "Peço ajuda imediatamente e verifico pulso, consciência, ventilação e traçado.",
      "Administro oxigênio a 100% e inicio suporte ventilatório se necessário.",
      "Trato bradicardia sintomática rapidamente com atropina e vasopressores conforme gravidade.",
      "Se houver ausência de pulso, inicio RCP de alta qualidade imediatamente.",
      "Uso adrenalina conforme protocolo de PCR e corrijo causas reversíveis.",
      "Elevo membros inferiores, trato hipovolemia relativa e considero vasopressor alfa-adrenérgico para restaurar retorno venoso e pressão arterial.",
      "Após retorno da circulação, reviso nível do bloqueio, sedação, volume, causas associadas e mantenho monitorização intensiva."
    ],
    pontosObrigatorios: [
      "Bradicardia pode preceder hipotensão profunda e PCR.",
      "Náusea e mal-estar podem ser sinais precoces.",
      "Atropina precoce se bradicardia sintomática.",
      "Adrenalina e RCP se PCR.",
      "Restaurar retorno venoso e tônus vascular."
    ],
    errosGraves: [
      "Aguardar dessaturação para agir.",
      "Tratar apenas com volume em bradicardia extrema.",
      "Desligar ou ignorar alarmes.",
      "Não iniciar RCP diante de ausência de pulso."
    ],
    aprofundamento: [
      {
        pergunta: "Por que paciente jovem pode ter bradicardia grave após raqui?",
        resposta: "Pacientes jovens, vagotônicos e com bom tônus basal podem responder à redução de pré-carga com reflexos cardioinibitórios intensos."
      },
      {
        pergunta: "A bradicardia pode ser o primeiro sinal?",
        resposta: "Sim. Em alguns casos, a bradicardia aparece antes de hipotensão extrema ou dessaturação."
      },
      {
        pergunta: "Qual é a prioridade se perder pulso?",
        resposta: "Iniciar RCP imediatamente, administrar adrenalina conforme protocolo e tratar causas reversíveis."
      }
    ],
    fraseOuro: "Na raqui, bradicardia importante não é detalhe: é pré-parada até prova em contrário.",
    referencias: ["Yao", "Miller", "Barash", "SBA"]
  },

  {
    id: "oral-emerg-003",
    titulo: "Raquianestesia total",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Mulher de 34 anos recebe dose intratecal para cesariana. Minutos depois, refere dispneia, dificuldade para falar, parestesias em membros superiores, náusea intensa e evolui com hipotensão, bradicardia e rebaixamento do nível de consciência. O bloqueio sensitivo sobe rapidamente.",
    pergunta: "Qual o diagnóstico provável e como você conduz?",
    respostaIdeal: [
      "O diagnóstico provável é raquianestesia alta ou total, com bloqueio simpático extenso, comprometimento de musculatura respiratória e possível hipoperfusão cerebral.",
      "Chamo ajuda e comunico a equipe obstétrica.",
      "Faço deslocamento uterino para a esquerda se gestante.",
      "Administro oxigênio a 100% e avalio rapidamente ventilação e consciência.",
      "Se houver insuficiência ventilatória ou rebaixamento importante, faço controle de via aérea e ventilação assistida ou intubação.",
      "Trato hipotensão imediatamente com vasopressores, geralmente fenilefrina, noradrenalina ou efedrina conforme FC e contexto.",
      "Faço reposição volêmica criteriosa, sem atrasar vasopressor.",
      "Trato bradicardia com atropina e, se evoluir para PCR, sigo protocolo de ressuscitação.",
      "Após estabilização, mantenho suporte ventilatório e hemodinâmico até regressão do bloqueio."
    ],
    pontosObrigatorios: [
      "Reconhecer subida rápida do bloqueio.",
      "Oxigênio e suporte ventilatório.",
      "Vasopressor precoce.",
      "Atropina se bradicardia.",
      "Deslocamento uterino em gestante.",
      "Preparar intubação se rebaixamento ou falência ventilatória."
    ],
    errosGraves: [
      "Aguardar o bloqueio baixar espontaneamente sem suporte.",
      "Tratar dispneia como ansiedade sem examinar ventilação.",
      "Usar apenas cristaloide em hipotensão grave.",
      "Não preparar via aérea."
    ],
    aprofundamento: [
      {
        pergunta: "Como diferenciar raqui total de LAST?",
        resposta: "Raqui total cursa com bloqueio sensitivo/motor ascendente, hipotensão e bradicardia por simpatectomia. LAST costuma ter sintomas neurológicos excitatórios iniciais, como zumbido, gosto metálico, agitação e convulsão, podendo evoluir para arritmias."
      },
      {
        pergunta: "Qual é a principal causa de hipotensão?",
        resposta: "Bloqueio simpático extenso com vasodilatação arterial e venosa, reduzindo retorno venoso e resistência vascular sistêmica."
      },
      {
        pergunta: "Precisa sempre intubar?",
        resposta: "Não sempre, mas deve intubar se houver insuficiência ventilatória, incapacidade de proteger via aérea ou rebaixamento importante."
      }
    ],
    fraseOuro: "Raqui total se trata sustentando respiração e pressão até o bloqueio devolver o controle ao paciente.",
    referencias: ["Yao", "Miller", "Barash", "SBA"]
  },

  {
    id: "oral-emerg-004",
    titulo: "Toxicidade sistêmica por anestésico local",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Paciente de 45 anos, 70 kg, será submetido a bloqueio de plexo braquial. Após injeção fracionada de ropivacaína, apresenta gosto metálico, zumbido, agitação, fala desconexa e convulsão. Pouco depois, evolui com hipotensão, QRS alargado e arritmia ventricular.",
    pergunta: "Conduza o caso como se estivesse na sala. Quais são suas prioridades?",
    respostaIdeal: [
      "Eu reconheço toxicidade sistêmica por anestésico local, com fase neurológica evoluindo para toxicidade cardiovascular.",
      "Interrompo imediatamente a injeção e peço ajuda.",
      "Garanto oxigênio a 100%, via aérea pérvia e ventilação adequada, evitando hipóxia, acidose e hipercapnia.",
      "Controlo convulsão com benzodiazepínico em dose titulada.",
      "Inicio emulsão lipídica intravenosa conforme protocolo de LAST.",
      "Faço suporte cardiovascular, com RCP se necessário, lembrando que a ressuscitação pode ser prolongada.",
      "Evito grandes doses de vasopressina, bloqueadores de canal de cálcio, beta-bloqueadores e anestésicos locais adicionais.",
      "Após estabilização, mantenho monitorização prolongada pela possibilidade de recorrência."
    ],
    pontosObrigatorios: [
      "Interromper anestésico local.",
      "Oxigênio e ventilação.",
      "Evitar acidose e hipercapnia.",
      "Benzodiazepínico para convulsão.",
      "Emulsão lipídica precoce.",
      "ACLS modificado.",
      "Monitorização prolongada."
    ],
    errosGraves: [
      "Administrar mais anestésico local.",
      "Tratar apenas a convulsão e esquecer o coração.",
      "Atrasar emulsão lipídica em instabilidade cardiovascular.",
      "Usar propofol em grande dose em paciente instável.",
      "Interromper RCP precocemente."
    ],
    aprofundamento: [
      {
        pergunta: "Por que ventilação adequada ajuda?",
        resposta: "Hipóxia, acidose e hipercapnia aumentam a toxicidade dos anestésicos locais, especialmente no miocárdio."
      },
      {
        pergunta: "Qual é o papel da emulsão lipídica?",
        resposta: "Ela atua como compartimento lipídico, reduzindo fração livre do anestésico local e pode melhorar função cardiovascular."
      },
      {
        pergunta: "Por quanto tempo monitorar?",
        resposta: "Depende da gravidade. Após manifestação cardiovascular, recomenda-se monitorização prolongada, pois pode haver recorrência."
      }
    ],
    fraseOuro: "LAST começa no cérebro, mas mata pelo coração; oxigênio e lipídio precisam chegar cedo.",
    referencias: ["Yao", "Miller", "Barash", "ASRA LAST"]
  },

  {
    id: "oral-emerg-005",
    titulo: "Incêndio em via aérea",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Durante microcirurgia de laringe com laser, paciente está intubado com tubo apropriado. O cirurgião aciona o laser e subitamente ocorre chama na via aérea, com fumaça saindo pela boca e queda da saturação.",
    pergunta: "Qual sua conduta imediata? Responda em sequência.",
    respostaIdeal: [
      "Eu reconheço incêndio de via aérea, uma emergência máxima.",
      "Interrompo imediatamente a ventilação e o fluxo de gases.",
      "Peço ao cirurgião para interromper o laser e remover a fonte de ignição.",
      "Desconecto o circuito e removo o tubo traqueal em chamas.",
      "Apago o fogo com soro ou água estéril no campo e na via aérea, conforme necessário.",
      "Após apagar, reestabeleço ventilação com oxigênio, inicialmente evitando excesso desnecessário de oxidante se ainda houver risco de chama.",
      "Reintubo ou restabeleço via aérea segura.",
      "Realizo broncoscopia para avaliar lesão térmica, fragmentos de tubo e fuligem.",
      "Solicito suporte intensivo e acompanho risco de edema, broncoespasmo e lesão inalatória."
    ],
    pontosObrigatorios: [
      "Parar gases.",
      "Parar laser.",
      "Remover tubo em chamas.",
      "Apagar fogo.",
      "Reestabelecer via aérea e ventilação.",
      "Broncoscopia após estabilização.",
      "Avaliar lesão térmica."
    ],
    errosGraves: [
      "Aumentar FiO₂ durante a chama.",
      "Continuar ventilando pelo tubo em chamas.",
      "Não retirar tubo queimado.",
      "Não avaliar a via aérea depois.",
      "Não comunicar cirurgião imediatamente."
    ],
    aprofundamento: [
      {
        pergunta: "Quais são os três elementos do fogo?",
        resposta: "Oxidante, combustível e fonte de ignição. Na via aérea: oxigênio/óxido nitroso, tubo/campo e laser/cautério."
      },
      {
        pergunta: "Como prevenir?",
        resposta: "Reduzir FiO₂ ao mínimo seguro, evitar N₂O, usar tubo apropriado para laser, cuff preenchido com solução, comunicação clara antes de disparar laser."
      },
      {
        pergunta: "O que fazer após estabilização?",
        resposta: "Broncoscopia, avaliação de lesão térmica, UTI se necessário e documentação do evento."
      }
    ],
    fraseOuro: "Fogo em via aérea se apaga cortando oxidante, removendo combustível e interrompendo ignição.",
    referencias: ["Yao", "Miller", "Barash", "ASA fire safety"]
  },

  {
    id: "oral-emerg-006",
    titulo: "Hipertermia maligna",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Homem de 19 anos, previamente hígido, recebe sevoflurano e succinilcolina para cirurgia ortopédica. Após alguns minutos, apresenta aumento rápido do EtCO₂ apesar de aumento da ventilação, taquicardia, rigidez muscular, acidose mista e potássio elevado. Temperatura ainda é 38,1 °C.",
    pergunta: "Qual diagnóstico e como você trata imediatamente?",
    respostaIdeal: [
      "Eu suspeito fortemente de hipertermia maligna. A temperatura pode ser sinal tardio; o aumento inexplicado do EtCO₂ é um sinal precoce importante.",
      "Suspendo imediatamente agentes desencadeantes: anestésicos voláteis e succinilcolina.",
      "Chamo ajuda e solicito o carrinho/protocolo de hipertermia maligna.",
      "Hiperventilo com oxigênio a 100% em alto fluxo.",
      "Administro dantrolene o mais rápido possível, repetindo conforme resposta clínica.",
      "Troco circuito e filtros ou uso sistema limpo conforme disponibilidade e urgência.",
      "Trato hipercalemia, acidose, arritmias e hipertermia ativa.",
      "Faço resfriamento ativo, monitorizo temperatura central, gasometria, eletrólitos, CK, mioglobina e função renal.",
      "Mantenho o paciente em UTI após estabilização, pelo risco de recorrência."
    ],
    pontosObrigatorios: [
      "Não esperar temperatura maior que 40 °C.",
      "Suspender gatilhos.",
      "Dantrolene imediato.",
      "O₂ 100% e hiperventilação.",
      "Tratar hipercalemia e acidose.",
      "Resfriamento ativo.",
      "UTI e vigilância de recorrência."
    ],
    errosGraves: [
      "Tratar apenas com antitérmico.",
      "Continuar sevoflurano.",
      "Usar succinilcolina novamente.",
      "Esperar confirmação laboratorial.",
      "Atrasar dantrolene."
    ],
    aprofundamento: [
      {
        pergunta: "Qual sinal costuma aparecer precocemente?",
        resposta: "Elevação inexplicada do EtCO₂ apesar de ventilação adequada."
      },
      {
        pergunta: "Por que ocorre hipercalemia?",
        resposta: "Por hiperatividade muscular, rabdomiólise e liberação de potássio intracelular."
      },
      {
        pergunta: "Qual é o tratamento específico?",
        resposta: "Dantrolene, que reduz liberação de cálcio pelo receptor de rianodina no músculo esquelético."
      }
    ],
    fraseOuro: "Na hipertermia maligna, o capnógrafo costuma gritar antes do termômetro.",
    referencias: ["Yao", "Miller", "Barash", "MHAUS"]
  },

  {
    id: "oral-emerg-007",
    titulo: "Broncoespasmo grave intraoperatório",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Paciente asmático, 42 anos, em anestesia geral para colecistectomia, logo após intubação apresenta aumento da pressão de pico, capnograma em rampa, sibilos difusos e queda da SpO₂ para 88%. PA 120x70 mmHg, sem rash cutâneo visível.",
    pergunta: "Como você conduz o broncoespasmo e quais diagnósticos diferenciais precisa excluir?",
    respostaIdeal: [
      "Eu reconheço broncoespasmo grave, mas não assumo que é apenas asma sem excluir causas mecânicas e anafilaxia.",
      "Aumento FiO₂ para 100% e ventilo manualmente para avaliar complacência.",
      "Verifico posição do tubo, intubação seletiva, obstrução, secreção, dobra do circuito, pneumotórax e aspiração.",
      "Aprofundo anestesia com agente broncodilatador quando apropriado.",
      "Administro beta-2 agonista inalatório pelo circuito e considero anticolinérgico, magnésio, cetamina ou adrenalina conforme gravidade.",
      "Ajusto ventilação com menor frequência, maior tempo expiratório e aceito hipercapnia permissiva se necessário para evitar auto-PEEP.",
      "Se houver hipotensão, rash, edema ou colapso associado, trato como anafilaxia com adrenalina e volume."
    ],
    pontosObrigatorios: [
      "O₂ 100%.",
      "Excluir causas mecânicas.",
      "Pensar em anafilaxia.",
      "Broncodilatador inalatório.",
      "Aprofundar anestesia.",
      "Aumentar tempo expiratório.",
      "Evitar hiperinsuflação dinâmica."
    ],
    errosGraves: [
      "Aumentar frequência respiratória indiscriminadamente.",
      "Ignorar anafilaxia.",
      "Não checar tubo/circuito.",
      "Não reconhecer auto-PEEP.",
      "Tratar apenas com corticoide."
    ],
    aprofundamento: [
      {
        pergunta: "Como diferenciar broncoespasmo de anafilaxia?",
        resposta: "Anafilaxia costuma associar hipotensão, taquicardia, rash/angioedema ou colapso abrupto após exposição a fármaco. Mas rash pode estar ausente ou oculto."
      },
      {
        pergunta: "Qual ajuste ventilatório é importante?",
        resposta: "Reduzir frequência, aumentar tempo expiratório e evitar empilhamento aéreo."
      },
      {
        pergunta: "Quando usar adrenalina?",
        resposta: "Se broncoespasmo for grave, refratário ou associado a choque/anafilaxia."
      }
    ],
    fraseOuro: "Broncoespasmo intraoperatório exige broncodilatar o paciente e investigar o circuito.",
    referencias: ["Yao", "Miller", "Barash"]
  },

  {
    id: "oral-emerg-008",
    titulo: "Hipercalemia após succinilcolina",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Paciente de 24 anos, acamado há semanas após trauma raquimedular, chega para desbridamento. Durante indução em sequência rápida recebe succinilcolina. Minutos depois, apresenta ondas T apiculadas, QRS alargado, bradicardia e colapso hemodinâmico.",
    pergunta: "Explique a fisiopatologia e conduza o tratamento.",
    respostaIdeal: [
      "Eu suspeito de hipercalemia grave desencadeada por succinilcolina em paciente com upregulation de receptores acetilcolínicos extrajuncionais.",
      "Chamo ajuda, administro oxigênio a 100% e avalio pulso e ritmo.",
      "Se houver PCR, inicio RCP imediatamente.",
      "Administro cálcio intravenoso para estabilizar membrana miocárdica.",
      "Inicio medidas para deslocar potássio para o intracelular: insulina com glicose, beta-agonista e bicarbonato se acidose importante.",
      "Faço suporte hemodinâmico e trato arritmias conforme contexto.",
      "Planejo remoção definitiva do potássio se necessário, com diurese, resinas ou diálise conforme caso.",
      "Registro contraindicação futura à succinilcolina nesse paciente."
    ],
    pontosObrigatorios: [
      "Reconhecer hipercalemia por succinilcolina.",
      "Cálcio primeiro se ECG alterado.",
      "Insulina com glicose.",
      "Beta-agonista.",
      "Bicarbonato se acidose relevante.",
      "RCP se PCR.",
      "Evitar succinilcolina em risco."
    ],
    errosGraves: [
      "Dar nova dose de succinilcolina.",
      "Tratar hipercalemia com furosemida isolada em colapso.",
      "Fazer insulina sem monitorar glicose.",
      "Esquecer cálcio diante de ECG alterado.",
      "Aguardar laboratório para tratar."
    ],
    aprofundamento: [
      {
        pergunta: "Quais pacientes têm maior risco?",
        resposta: "Queimados após fase inicial, desnervação, trauma medular, imobilização prolongada, doenças neuromusculares e algumas miopatias."
      },
      {
        pergunta: "O cálcio reduz o potássio?",
        resposta: "Não. Ele estabiliza a membrana miocárdica. A redução sérica exige deslocamento intracelular ou remoção do potássio."
      },
      {
        pergunta: "Qual bloqueador usar em alternativa?",
        resposta: "Rocurônio em dose de sequência rápida é alternativa comum, com possibilidade de reversão por sugamadex quando disponível."
      }
    ],
    fraseOuro: "Na hipercalemia com ECG alterado, cálcio protege o coração antes de você baixar o potássio.",
    referencias: ["Yao", "Miller", "Barash", "SBA"]
  },

  {
    id: "oral-emerg-009",
    titulo: "Embolia gasosa venosa",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Durante craniotomia em posição sentada, ocorre queda súbita do EtCO₂ de 34 para 16 mmHg, hipotensão, dessaturação e aumento da pressão pulmonar. O cirurgião relata abertura de seio venoso acima do nível do coração.",
    pergunta: "Qual é o diagnóstico provável e qual sua conduta imediata?",
    respostaIdeal: [
      "O diagnóstico provável é embolia gasosa venosa.",
      "Comunico imediatamente o cirurgião e peço para interromper a entrada de ar, inundar o campo com soro e ocluir o vaso aberto.",
      "Administro oxigênio a 100% e interrompo óxido nitroso se estiver sendo usado.",
      "Suporto a circulação com vasopressores, volume e RCP se necessário.",
      "Aspiro pelo cateter venoso central se ele estiver adequadamente posicionado.",
      "Considero mudança de posição conforme protocolo e viabilidade, evitando piorar o campo ou atrasar medidas essenciais.",
      "Monitorizo EtCO₂, pressão arterial, saturação, sinais de falência de VD e possibilidade de embolia paradoxal se houver shunt intracardíaco."
    ],
    pontosObrigatorios: [
      "Queda abrupta de EtCO₂ sugere redução de fluxo pulmonar.",
      "Avisar cirurgião.",
      "Impedir entrada de ar.",
      "O₂ 100%.",
      "Suspender N₂O.",
      "Aspirar por CVC se possível.",
      "Suporte hemodinâmico."
    ],
    errosGraves: [
      "Ignorar queda de EtCO₂.",
      "Continuar N₂O.",
      "Não comunicar cirurgião.",
      "Tratar como hipoventilação simples.",
      "Atrasar suporte circulatório."
    ],
    aprofundamento: [
      {
        pergunta: "Por que o EtCO₂ cai?",
        resposta: "Porque bolhas reduzem fluxo sanguíneo pulmonar efetivo e débito cardíaco, diminuindo entrega de CO₂ aos alvéolos."
      },
      {
        pergunta: "Qual monitor é muito sensível para detectar ar?",
        resposta: "Doppler precordial e ecocardiografia transesofágica são muito sensíveis."
      },
      {
        pergunta: "Qual risco se houver forame oval patente?",
        resposta: "Embolia paradoxal com passagem de ar para circulação arterial, podendo causar isquemia cerebral ou coronariana."
      }
    ],
    fraseOuro: "Embolia gasosa se trata fechando a porta de entrada e sustentando o fluxo enquanto o ar deixa de circular.",
    referencias: ["Yao", "Miller", "Barash"]
  },

  {
    id: "oral-emerg-010",
    titulo: "Embolia por líquido amniótico",
    area: "Emergências Anestésicas",
    dificuldade: "muito difícil",
    caso: "Durante cesariana de urgência, logo após extração fetal, a paciente apresenta hipóxia súbita, hipotensão profunda, crise convulsiva e colapso cardiovascular. Minutos depois, evolui com sangramento difuso, atonia uterina e fibrinogênio muito baixo.",
    pergunta: "Qual o diagnóstico provável e como você conduz a emergência?",
    respostaIdeal: [
      "Eu suspeito de embolia por líquido amniótico, uma síndrome de colapso cardiopulmonar materno associada a coagulopatia grave.",
      "Chamo ajuda imediatamente, incluindo obstetra, anestesia, banco de sangue, UTI e neonatologia se necessário.",
      "Garanto oxigênio a 100%, via aérea e ventilação adequada.",
      "Inicio suporte circulatório agressivo com vasopressores, inotrópicos se necessário e RCP se houver parada.",
      "Avalio e trato falência de VD e hipoxemia conforme achados hemodinâmicos.",
      "Ativo protocolo de hemorragia maciça e trato coagulopatia com reposição guiada por fibrinogênio, plaquetas, plasma, hemácias e testes viscoelásticos se disponíveis.",
      "Trato atonia uterina e mantenho comunicação estreita com obstetrícia para controle de sangramento.",
      "Após estabilização, a paciente deve seguir para UTI."
    ],
    pontosObrigatorios: [
      "Reconhecer colapso cardiopulmonar + coagulopatia.",
      "O₂ 100% e via aérea.",
      "Suporte hemodinâmico agressivo.",
      "Protocolo de transfusão maciça.",
      "Fibrinogênio é crítico.",
      "Controle uterino/cirúrgico do sangramento.",
      "Equipe multidisciplinar."
    ],
    errosGraves: [
      "Tratar apenas como bloqueio alto.",
      "Esquecer coagulopatia.",
      "Atrasar banco de sangue.",
      "Não repor fibrinogênio em sangramento grave com fibrinogênio baixo.",
      "Subestimar falência cardiopulmonar."
    ],
    aprofundamento: [
      {
        pergunta: "Qual é a sequência clássica?",
        resposta: "Colapso respiratório/cardiovascular abrupto, alteração neurológica e depois coagulopatia/hemorragia grave."
      },
      {
        pergunta: "Qual hemoderivado/fator costuma ser crítico precocemente?",
        resposta: "Fibrinogênio. Níveis baixos em hemorragia obstétrica grave associam-se a pior sangramento."
      },
      {
        pergunta: "Há tratamento específico curativo?",
        resposta: "Não há antídoto específico. O tratamento é suporte agressivo cardiopulmonar e hemostático."
      }
    ],
    fraseOuro: "Embolia amniótica é uma emergência de pulmão, coração e coagulação ao mesmo tempo.",
    referencias: ["Yao", "Miller", "Barash", "SBA", "Obstetric anesthesia emergencies"]
  }
];

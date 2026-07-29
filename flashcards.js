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
  ,
{
  id: "oral-mixed-011",
  titulo: "Hipoxemia em ventilação monopulmonar",
  area: "Respiratório / Torácica",
  dificuldade: "muito difícil",
  caso: "Homem de 68 anos, DPOC moderado, será submetido à segmentectomia pulmonar por videotoracoscopia. Após 15 minutos de ventilação monopulmonar, com FiO₂ 100%, tubo de duplo lúmen bem posicionado por broncoscopia, SpO₂ cai para 84%. Hemodinâmica estável. O cirurgião solicita que não se reexpanda o pulmão operado.",
  pergunta: "Você é o anestesiologista. Como organiza sua conduta para corrigir a hipoxemia mantendo a ventilação monopulmonar?",
  respostaIdeal: [
    "Eu reconheço hipoxemia durante ventilação monopulmonar, inicialmente assumindo aumento de shunt pelo pulmão não ventilado.",
    "Confirmo imediatamente posição do tubo de duplo lúmen com broncoscopia, porque mal posicionamento é uma das causas mais frequentes e corrigíveis.",
    "Aumento FiO₂ para 100%, se ainda não estiver, e avalio complacência, pressões de via aérea, secreções, atelectasia e broncoespasmo no pulmão ventilado.",
    "Otimizo ventilação do pulmão dependente com volume corrente protetor, PEEP individualizada e evitando hiperinsuflação, pois PEEP excessiva pode desviar fluxo para o pulmão não ventilado.",
    "Se persistir hipoxemia, considero CPAP com O₂ no pulmão não ventilado, em baixa pressão, negociando com o cirurgião.",
    "Se não houver melhora ou se a hipoxemia for grave, solicito pausa cirúrgica e ventilação bipulmonar temporária.",
    "Evito fatores que inibem vasoconstrição pulmonar hipóxica, como hipóxia sistêmica, hipocapnia ou hipercapnia extremas, hipotermia, acidose e sobrecarga hídrica importante.",
    "Mantenho comunicação constante com a equipe, porque a prioridade final é oxigenação segura."
  ],
  pontosObrigatorios: [
    "Confirmar posição do tubo com broncoscopia.",
    "FiO₂ 100%.",
    "Otimizar pulmão ventilado.",
    "PEEP individualizada, sem hiperinsuflar.",
    "Considerar CPAP no pulmão não ventilado.",
    "Ventilação bipulmonar temporária se hipoxemia grave.",
    "Preservar vasoconstrição pulmonar hipóxica."
  ],
  errosGraves: [
    "Aplicar CPAP sem confirmar posição do tubo.",
    "Aumentar PEEP indiscriminadamente no pulmão ventilado.",
    "Ignorar broncoespasmo, secreção ou atelectasia.",
    "Manter hipoxemia grave para não atrapalhar o campo.",
    "Esquecer que hiperinsuflação do pulmão ventilado pode piorar shunt."
  ],
  aprofundamento: [
    {
      pergunta: "Qual é o principal mecanismo de hipoxemia na ventilação monopulmonar?",
      resposta: "Shunt intrapulmonar pelo pulmão não ventilado, parcialmente limitado pela vasoconstrição pulmonar hipóxica."
    },
    {
      pergunta: "Por que PEEP excessiva no pulmão ventilado pode piorar a oxigenação?",
      resposta: "Porque pode aumentar a resistência vascular no pulmão dependente e desviar fluxo para o pulmão não ventilado, aumentando shunt."
    },
    {
      pergunta: "Qual medida preserva a vasoconstrição pulmonar hipóxica?",
      resposta: "Evitar hipoxemia sistêmica, acidose importante, extremos de PaCO₂, hipotermia e sobrecarga hídrica."
    }
  ],
  fraseOuro: "Na ventilação monopulmonar, oxigenar é equilibrar shunt, PEEP e campo cirúrgico sem esquecer de olhar o tubo.",
  referencias: ["Yao", "Miller", "Barash"]
},

{
  id: "oral-mixed-012",
  titulo: "Gestante com tromboembolismo pulmonar no pós-parto",
  area: "Obstetrícia",
  dificuldade: "muito difícil",
  caso: "Gestante de 40 semanas foi submetida à cesariana sem intercorrências. No primeiro dia pós-operatório, apresenta dispneia súbita, taquipneia, hipotensão, dessaturação e dor torácica. ECG mostra taquicardia sinusal com sinais sugestivos de sobrecarga direita. Não há sangramento ativo.",
  pergunta: "Qual diagnóstico deve ser priorizado e quais alterações fisiológicas da gestação favorecem esse quadro?",
  respostaIdeal: [
    "Eu priorizo o diagnóstico de tromboembolismo pulmonar, especialmente pela combinação de dispneia súbita, hipoxemia, hipotensão e sinais de sobrecarga de ventrículo direito no pós-parto.",
    "A gestação e o puerpério são estados de hipercoagulabilidade fisiológica, com aumento de fatores pró-coagulantes, redução de anticoagulantes naturais e redução da fibrinólise.",
    "Além disso, há estase venosa por compressão venosa pélvica e cava, somada à lesão endotelial relacionada ao parto ou à cirurgia.",
    "O quadro deve ser abordado como emergência: oxigênio, suporte hemodinâmico, avaliação do ventrículo direito, gasometria, imagem quando possível e anticoagulação se não houver contraindicação.",
    "Se houver instabilidade grave, deve-se discutir trombólise, embolectomia ou suporte avançado conforme risco hemorrágico e disponibilidade.",
    "No pós-cesariana, a decisão exige equilíbrio entre risco de sangramento e risco de morte por TEP maciço."
  ],
  pontosObrigatorios: [
    "Reconhecer TEP como hipótese principal.",
    "Gestação e puerpério são hipercoaguláveis.",
    "Estase venosa e lesão endotelial completam a tríade de Virchow.",
    "Avaliar ventrículo direito.",
    "Anticoagular se não houver contraindicação.",
    "TEP maciço instável pode exigir terapia de reperfusão."
  ],
  errosGraves: [
    "Tratar como ansiedade puerperal.",
    "Afastar TEP por ter ocorrido cesárea sem intercorrências.",
    "Ignorar hipotensão como sinal de gravidade.",
    "Esquecer risco hemorrágico pós-operatório ao anticoagular.",
    "Não chamar obstetrícia, UTI e equipe de imagem/vascular quando grave."
  ],
  aprofundamento: [
    {
      pergunta: "Qual alteração hemodinâmica sugere TEP maciço?",
      resposta: "Hipotensão associada a disfunção ou dilatação de ventrículo direito, com hipoxemia e queda de débito."
    },
    {
      pergunta: "Qual alteração fisiológica da gestação reduz proteína anticoagulante natural?",
      resposta: "Há redução funcional da proteína S, contribuindo para estado pró-trombótico."
    },
    {
      pergunta: "Por que o pós-parto é especialmente crítico?",
      resposta: "Porque combina hipercoagulabilidade persistente, imobilidade relativa, lesão vascular e, muitas vezes, cirurgia recente."
    }
  ],
  fraseOuro: "No puerpério, dispneia súbita com hipotensão é TEP até que o ventrículo direito prove o contrário.",
  referencias: ["Yao", "Miller", "Barash", "Anestesia obstétrica"]
},

{
  id: "oral-mixed-013",
  titulo: "Síndrome pós-reperfusão no transplante hepático",
  area: "Gastro / Hepato / Transplantes",
  dificuldade: "muito difícil",
  caso: "Homem de 56 anos, cirrótico, em transplante hepático. Durante a fase anepática, recebe transfusão significativa e apresenta acidose leve, cálcio ionizado limítrofe e potássio 4,9 mEq/L. Logo após reperfusão do enxerto, evolui com bradicardia, hipotensão profunda, aumento do potássio, queda da contratilidade e elevação abrupta da pressão pulmonar.",
  pergunta: "Explique o mecanismo da síndrome pós-reperfusão e conduza o caso.",
  respostaIdeal: [
    "Eu reconheço síndrome pós-reperfusão hepática, caracterizada por instabilidade hemodinâmica logo após liberação do fluxo para o enxerto.",
    "A reperfusão devolve à circulação sangue frio, ácido, rico em potássio, citrato, mediadores inflamatórios e substâncias vasoativas acumuladas no enxerto.",
    "Isso pode causar vasodilatação, depressão miocárdica, bradicardia, arritmias, hipercalemia, acidose e aumento da resistência vascular pulmonar.",
    "Antes da reperfusão, antecipo o problema corrigindo cálcio, acidose, hipercalemia, temperatura e volemia, além de comunicar a equipe.",
    "Durante a crise, administro oxigênio 100%, suporte vasopressor e inotrópico conforme perfil hemodinâmico, cálcio intravenoso, tratamento da hipercalemia e correção de acidose relevante.",
    "Se houver falência de VD ou hipertensão pulmonar aguda, considero reduzir resistência vascular pulmonar e manter pressão sistêmica para perfusão coronariana do VD.",
    "Após estabilização, sigo monitorizando coagulação, eletrólitos, temperatura, lactato e função do enxerto."
  ],
  pontosObrigatorios: [
    "Reconhecer relação temporal com reperfusão.",
    "Hipercalemia, acidose, hipotermia e citrato são gatilhos importantes.",
    "Cálcio ionizado deve ser monitorado e corrigido.",
    "Suporte vasopressor/inotrópico conforme necessidade.",
    "Tratar hipercalemia imediatamente.",
    "Pensar em falência de VD se PAP sobe e débito cai."
  ],
  errosGraves: [
    "Atribuir tudo a plano anestésico superficial.",
    "Aguardar estabilização espontânea em choque profundo.",
    "Esquecer cálcio durante transfusão/reperfusão.",
    "Não avisar a equipe antes da reperfusão.",
    "Tratar bradicardia sem corrigir hipercalemia."
  ],
  aprofundamento: [
    {
      pergunta: "Por que o cálcio é tão importante no transplante hepático?",
      resposta: "Porque citrato dos hemocomponentes e menor metabolismo hepático podem causar hipocalcemia, piorando contratilidade e coagulação."
    },
    {
      pergunta: "Qual eletrólito pode matar no momento da reperfusão?",
      resposta: "Potássio. Hipercalemia pode causar bradicardia, bloqueios, QRS largo e parada cardíaca."
    },
    {
      pergunta: "Qual ventrículo pode falhar se houver aumento abrupto da pressão pulmonar?",
      resposta: "O ventrículo direito, que é sensível a aumentos agudos de pós-carga pulmonar."
    }
  ],
  fraseOuro: "Na reperfusão hepática, o enxerto devolve ao coração frio, ácido, potássio e instabilidade.",
  referencias: ["Yao", "Miller", "Barash", "Transplante hepático"]
},

{
  id: "oral-mixed-014",
  titulo: "Osmolaridade e composição de soluções",
  area: "Renal / Endócrino / Metabólico",
  dificuldade: "muito difícil",
  caso: "Durante discussão em sala, é apresentada uma solução hipotética composta por: glicose 18 g/L, NaCl 120 mmol/L, KCl 10 mmol/L, CaCl₂ 5 mmol/L e sulfato de magnésio 4 mmol/L. O residente calcula apenas sódio e glicose e subestima a osmolaridade.",
  pergunta: "Como você calcula a osmolaridade aproximada dessa solução e quais cuidados conceituais deve ter?",
  respostaIdeal: [
    "Eu começo lembrando que osmolaridade depende do número de partículas osmoticamente ativas em solução.",
    "A glicose não se dissocia. Como seu peso molecular é aproximadamente 180 g/mol, 18 g/L correspondem a 0,1 mol/L, ou 100 mOsm/L.",
    "O NaCl se dissocia em duas partículas principais: Na⁺ e Cl⁻. Portanto, 120 mmol/L contribuem com aproximadamente 240 mOsm/L.",
    "O KCl também se dissocia em duas partículas: 10 mmol/L contribuem com cerca de 20 mOsm/L.",
    "O CaCl₂ se dissocia em três partículas: Ca²⁺ e dois Cl⁻. Portanto, 5 mmol/L contribuem com aproximadamente 15 mOsm/L.",
    "O sulfato de magnésio, em aproximação ideal, se dissocia em Mg²⁺ e SO₄²⁻, contribuindo com cerca de 8 mOsm/L.",
    "Somando: 100 + 240 + 20 + 15 + 8 = aproximadamente 383 mOsm/L.",
    "Na prática clínica, há desvios por coeficiente osmótico, mas para prova costuma-se usar dissociação ideal."
  ],
  pontosObrigatorios: [
    "Glicose 18 g/L = 100 mmol/L.",
    "Glicose não dissocia.",
    "NaCl e KCl contam como duas partículas.",
    "CaCl₂ conta como três partículas.",
    "MgSO₄ conta aproximadamente como duas partículas.",
    "Resultado aproximado: 383 mOsm/L."
  ],
  errosGraves: [
    "Somar apenas os mmol sem multiplicar pela dissociação.",
    "Tratar glicose como se dissociasse.",
    "Esquecer cloro no CaCl₂.",
    "Confundir osmolaridade com tonicidade efetiva.",
    "Usar fórmula do sódio plasmático sem olhar composição da solução."
  ],
  aprofundamento: [
    {
      pergunta: "Osmolaridade e tonicidade são a mesma coisa?",
      resposta: "Não. Osmolaridade considera todas as partículas em solução; tonicidade considera partículas efetivas que não atravessam livremente a membrana e geram movimento de água."
    },
    {
      pergunta: "Por que glicose pode não se comportar como osmole efetivo depois de metabolizada?",
      resposta: "Porque a glicose entra nas células e é metabolizada, de modo que sua contribuição para tonicidade pode ser transitória, dependendo do contexto."
    },
    {
      pergunta: "Qual pegadinha comum em prova?",
      resposta: "Esquecer que sais se dissociam e, portanto, contribuem com mais partículas do que sua concentração em mmol/L."
    }
  ],
  fraseOuro: "Osmolaridade não soma moléculas; soma partículas.",
  referencias: ["Yao", "Miller", "Fisiologia renal e soluções intravenosas"]
},

{
  id: "oral-mixed-015",
  titulo: "EEG processado em lactentes",
  area: "Monitorização",
  dificuldade: "muito difícil",
  caso: "Você anestesia uma criança de 3 meses com sevoflurano. Além da concentração alveolar mínima, decide usar EEG processado para acompanhar profundidade anestésica. O monitor mostra padrão diferente daquele esperado em adultos, e o residente interpreta o índice como se fosse adulto.",
  pergunta: "Quais particularidades do EEG pediátrico devem ser lembradas e qual o risco de interpretar o monitor como adulto?",
  respostaIdeal: [
    "Eu começo lembrando que o EEG muda muito com a idade, especialmente nos primeiros meses de vida.",
    "Em lactentes pequenos, há menor maturação cortical, menor organização de ritmos e padrão espectral diferente do adulto.",
    "Os algoritmos de EEG processado foram, em grande parte, desenvolvidos e validados em adultos; portanto, podem ter desempenho limitado em crianças pequenas.",
    "A presença, ausência ou distribuição de ondas alfa, delta e padrões de burst-suppression não deve ser interpretada com a mesma régua usada no adulto.",
    "A concentração alveolar de anestésico, sinais clínicos, hemodinâmica, contexto cirúrgico e conhecimento do desenvolvimento neurofisiológico precisam ser integrados.",
    "O risco de interpretar como adulto é superestimar ou subestimar profundidade anestésica, levando a anestesia excessiva ou insuficiente.",
    "Em prova, o ponto central é reconhecer que idade altera a assinatura eletroencefalográfica e reduz a confiabilidade universal dos índices processados."
  ],
  pontosObrigatorios: [
    "EEG depende da maturação cerebral.",
    "Lactentes não têm padrão igual ao adulto.",
    "Índices processados têm limitações em crianças pequenas.",
    "Não interpretar alfa/delta como no adulto.",
    "Integrar MAC, clínica e hemodinâmica.",
    "Evitar decisão baseada em número isolado."
  ],
  errosGraves: [
    "Usar BIS/SedLine em lactente como se fosse adulto.",
    "Achar que mesmo número significa mesma profundidade em todas as idades.",
    "Ignorar concentração expirada de anestésico.",
    "Tratar qualquer burst-suppression como normal.",
    "Não reconhecer imaturidade cortical."
  ],
  aprofundamento: [
    {
      pergunta: "Por que o EEG muda com a idade?",
      resposta: "Porque maturação sináptica, mielinização, conectividade cortical e organização tálamo-cortical evoluem progressivamente."
    },
    {
      pergunta: "O índice processado deve ser abandonado?",
      resposta: "Não necessariamente, mas deve ser interpretado com cautela e sempre integrado ao contexto clínico."
    },
    {
      pergunta: "Qual é a armadilha da prova?",
      resposta: "Aplicar padrões de EEG adulto a lactentes, especialmente em relação a alfa, delta e burst-suppression."
    }
  ],
  fraseOuro: "No lactente, o EEG não é um adulto pequeno: é outro cérebro, com outra assinatura elétrica.",
  referencias: ["Yao", "Miller", "Monitorização da profundidade anestésica"]
},

{
  id: "oral-mixed-016",
  titulo: "Farmacocinética dos anestésicos venosos",
  area: "Farmacologia",
  dificuldade: "muito difícil",
  caso: "Durante discussão sobre anestesia venosa, um residente afirma que fármacos com alta taxa de extração hepática têm depuração limitada principalmente pela saturação enzimática. Outro afirma que, para esses fármacos, o fluxo sanguíneo hepático é o principal determinante da depuração.",
  pergunta: "Qual raciocínio farmacocinético está correto e como isso se aplica aos anestésicos venosos?",
  respostaIdeal: [
    "Eu explicaria que fármacos com alta taxa de extração hepática têm depuração muito dependente do fluxo sanguíneo hepático.",
    "Quando a extração se aproxima de 1, o fígado remove grande fração do fármaco que chega a ele; portanto, a quantidade depurada por unidade de tempo depende principalmente de quanto sangue entrega fármaco ao fígado.",
    "Nesses casos, redução de débito cardíaco ou fluxo hepático pode reduzir depuração e prolongar efeito.",
    "Já fármacos com baixa taxa de extração são mais dependentes de capacidade enzimática e fração livre, sofrendo mais influência de ligação proteica e função metabólica intrínseca.",
    "Em anestesia, isso ajuda a entender por que choque, baixo débito, envelhecimento e hipoperfusão hepática podem alterar duração de fármacos venosos.",
    "A pegadinha é confundir alta extração com metabolismo saturável; na verdade, para alta extração, o limitante costuma ser fluxo."
  ],
  pontosObrigatorios: [
    "Alta extração: depuração limitada por fluxo.",
    "Baixa extração: depende mais de capacidade enzimática/fração livre.",
    "Débito cardíaco influencia fármacos de alta extração.",
    "Choque pode prolongar efeito de anestésicos venosos.",
    "Não confundir extração alta com saturação enzimática."
  ],
  errosGraves: [
    "Dizer que alta extração é limitada por saturação enzimática.",
    "Ignorar fluxo hepático.",
    "Achar que meia-vida isolada prevê recuperação clínica.",
    "Não considerar contexto hemodinâmico.",
    "Confundir redistribuição com depuração."
  ],
  aprofundamento: [
    {
      pergunta: "Propofol tem depuração dependente de quê?",
      resposta: "Propofol tem alta depuração e importante dependência de fluxo, além de metabolismo extra-hepático relevante."
    },
    {
      pergunta: "O que acontece em baixo débito?",
      resposta: "Menor entrega aos órgãos de depuração e maior concentração inicial no compartimento central, podendo intensificar e prolongar efeitos."
    },
    {
      pergunta: "Qual conceito explica despertar após bolus único de tiopental ou propofol?",
      resposta: "Redistribuição, não eliminação completa."
    }
  ],
  fraseOuro: "Fármaco de alta extração não pergunta tanto se o fígado sabe metabolizar; pergunta se o sangue chega lá.",
  referencias: ["Yao", "Miller", "Farmacocinética"]
},

{
  id: "oral-mixed-017",
  titulo: "Bloqueio regional guiado por USG e neuroestimulador",
  area: "Regional / Dor",
  dificuldade: "muito difícil",
  caso: "Paciente de 52 anos será submetido a bloqueio de plexo lombar guiado por ultrassonografia e neuroestimulador. A visualização da agulha é difícil. O neuroestimulador está configurado em 0,5 mA. Em determinado momento, há contração compatível com estímulo motor, mas a ponta da agulha não é claramente identificada.",
  pergunta: "Qual é a conduta mais segura e qual raciocínio deve orientar a decisão?",
  respostaIdeal: [
    "Eu não injetaria anestésico local sem visualização adequada da ponta da agulha ou sem certeza de posicionamento seguro.",
    "A resposta ao neuroestimulador é uma informação auxiliar, mas não substitui visualização da ponta, especialmente em bloqueios profundos e próximos a estruturas críticas.",
    "Se a imagem está ruim, devo reposicionar transdutor, ajustar profundidade, ganho, ângulo de insonação e tentar melhorar alinhamento da agulha.",
    "Também posso recuar a agulha para uma área visível e reiniciar a progressão sob visão contínua.",
    "Aspiração negativa não garante segurança, e injeção teste às cegas pode resultar em injeção intraneural, intravascular ou em plano inadequado.",
    "A presença de resposta motora com corrente muito baixa pode inclusive sugerir proximidade excessiva ou contato neural, devendo aumentar cautela.",
    "A segurança vem da combinação: visualização, pressão de injeção adequada, ausência de dor/parestesia intensa, aspiração e resposta clínica."
  ],
  pontosObrigatorios: [
    "Não injetar sem saber onde está a ponta.",
    "Neuroestimulador é auxiliar, não substituto da imagem.",
    "Melhorar imagem antes de avançar.",
    "Recuar e realinhar se necessário.",
    "Corrente muito baixa pode sugerir proximidade neural.",
    "Aspirar negativo não exclui injeção intravascular."
  ],
  errosGraves: [
    "Injetar 5 mL para tentar localizar a ponta.",
    "Confiar apenas no neuroestimulador.",
    "Avançar agulha fora do plano sem visualização.",
    "Ignorar dor ou parestesia intensa.",
    "Assumir que ausência de resposta significa segurança."
  ],
  aprofundamento: [
    {
      pergunta: "Qual é o risco de injetar para localizar a ponta?",
      resposta: "Pode haver injeção intraneural, intravascular ou em plano perigoso antes de se confirmar posição."
    },
    {
      pergunta: "Resposta a 0,2 mA é tranquilizadora?",
      resposta: "Não. Resposta com corrente muito baixa pode indicar proximidade excessiva ou contato com nervo."
    },
    {
      pergunta: "Quais ferramentas aumentam segurança?",
      resposta: "Visualização contínua da ponta, injeção fracionada, baixa pressão de injeção, aspiração frequente e monitorização clínica."
    }
  ],
  fraseOuro: "Em bloqueio guiado por ultrassom, se você não vê a ponta, você não sabe onde está injetando.",
  referencias: ["Yao", "Miller", "Regional anesthesia", "ASRA"]
},

{
  id: "oral-mixed-018",
  titulo: "POCUS pulmonar no perioperatório",
  area: "POCUS / Respiratório",
  dificuldade: "muito difícil",
  caso: "Paciente no pós-operatório imediato de laparotomia apresenta dispneia e dessaturação. Ao ultrassom pulmonar, você observa múltiplas linhas verticais hiperecogênicas partindo da linha pleural, alcançando o final da tela e apagando linhas A, bilateralmente.",
  pergunta: "O que essa imagem sugere e como você integra esse achado ao diagnóstico diferencial?",
  respostaIdeal: [
    "O achado descrito é compatível com linhas B múltiplas, sugerindo aumento de conteúdo intersticial/alveolar de água ou síndrome intersticial.",
    "No contexto perioperatório, isso pode ocorrer por edema pulmonar cardiogênico, sobrecarga volêmica, lesão pulmonar, SDRA inicial ou outras causas de espessamento intersticial.",
    "A distribuição é fundamental: linhas B difusas e bilaterais favorecem edema/interstício difuso; achados focais podem sugerir pneumonia, contusão ou atelectasia periférica.",
    "Eu integraria com exame cardíaco à beira-leito, VCI, pressão arterial, balanço hídrico, gasometria, ausculta, BNP se pertinente e resposta a tratamento.",
    "Se houver instabilidade, usaria o POCUS para diferenciar edema cardiogênico, pneumotórax, atelectasia, derrame pleural e disfunção ventricular.",
    "A conduta depende da causa: diurético/vasodilatador se edema cardiogênico, suporte ventilatório/PEEP se SDRA, drenagem se derrame significativo e tratamento da causa base."
  ],
  pontosObrigatorios: [
    "Linhas B indicam síndrome intersticial.",
    "Linhas B múltiplas bilaterais sugerem edema/interstício difuso.",
    "Distribuição focal versus difusa importa.",
    "Integrar com eco cardíaco e contexto.",
    "Diferenciar de pneumotórax e atelectasia.",
    "POCUS não substitui raciocínio clínico."
  ],
  errosGraves: [
    "Chamar toda linha B de edema cardiogênico.",
    "Ignorar distribuição dos achados.",
    "Não procurar pneumotórax em dessaturação súbita.",
    "Tratar com diurético sem avaliar volemia e coração.",
    "Interpretar imagem isolada sem contexto clínico."
  ],
  aprofundamento: [
    {
      pergunta: "O que são linhas A?",
      resposta: "Artefatos horizontais repetidos, paralelos à linha pleural, associados a pulmão aerado."
    },
    {
      pergunta: "O que diferencia pneumotórax no USG?",
      resposta: "Ausência de lung sliding, ausência de linhas B e, se presente, lung point."
    },
    {
      pergunta: "Linhas B podem ocorrer em SDRA?",
      resposta: "Sim. Na SDRA podem aparecer linhas B, frequentemente com distribuição heterogênea e alterações pleurais/subpleurais."
    }
  ],
  fraseOuro: "Linha B não é diagnóstico; é o pulmão dizendo que perdeu ar para líquido ou interstício.",
  referencias: ["Yao", "Miller", "POCUS perioperatório", "BLUE protocol"]
},

{
  id: "oral-mixed-019",
  titulo: "Neuroanestesia para schwannoma vestibular",
  area: "Neuroanestesia",
  dificuldade: "muito difícil",
  caso: "Paciente de 27 anos será submetida à ressecção de schwannoma vestibular de 2 cm. A equipe cirúrgica deseja preservar audição e função do nervo facial. O neurofisiologista solicita planejamento anestésico adequado para monitorização intraoperatória.",
  pergunta: "Qual monitorização é mais relevante e quais cuidados anestésicos você deve tomar para não prejudicar os sinais?",
  respostaIdeal: [
    "Para schwannoma vestibular com objetivo de preservar audição e nervo facial, a monitorização relevante inclui potencial evocado auditivo de tronco cerebral e eletromiografia do nervo facial.",
    "O potencial evocado auditivo ajuda a acompanhar integridade da via auditiva durante manipulação do VIII par e tronco.",
    "A eletromiografia facial permite detectar irritação ou lesão do VII par durante dissecção.",
    "Do ponto de vista anestésico, devo evitar ou minimizar bloqueadores neuromusculares após intubação se a EMG facial for essencial.",
    "Também devo manter anestesia estável, evitando grandes variações de halogenado, hipotermia, hipotensão e alterações fisiológicas que prejudiquem potenciais evocados.",
    "TIVA com propofol/remifentanil frequentemente é preferida quando há monitorização neurofisiológica, especialmente se potenciais motores também forem usados.",
    "Comunicação com neurofisiologia e cirurgia é indispensável antes de bolus de anestésicos, vasopressores ou relaxantes."
  ],
  pontosObrigatorios: [
    "Potencial evocado auditivo para via auditiva.",
    "EMG facial para nervo facial.",
    "Evitar bloqueador neuromuscular se EMG necessária.",
    "Manter anestesia estável.",
    "Evitar hipotermia e hipotensão.",
    "Comunicação com neurofisiologia."
  ],
  errosGraves: [
    "Usar bloqueio neuromuscular profundo contínuo sem avisar.",
    "Escolher potencial visual como principal monitor.",
    "Ignorar temperatura e pressão arterial.",
    "Fazer bolus anestésicos sem comunicar queda de sinal.",
    "Não alinhar plano anestésico antes da incisão."
  ],
  aprofundamento: [
    {
      pergunta: "Qual nervo craniano está relacionado ao schwannoma vestibular?",
      resposta: "O VIII par craniano, especialmente a porção vestibular."
    },
    {
      pergunta: "Por que EMG facial não combina com bloqueio neuromuscular?",
      resposta: "Porque o bloqueador reduz ou abole resposta muscular, prejudicando detecção de irritação ou lesão do nervo facial."
    },
    {
      pergunta: "Voláteis interferem em potenciais evocados?",
      resposta: "Sim, especialmente em maiores concentrações; por isso TIVA é frequentemente preferida para monitorização neurofisiológica complexa."
    }
  ],
  fraseOuro: "Em neurocirurgia com monitorização, anestesia boa é a que mantém o paciente anestesiado e o sinal acordado.",
  referencias: ["Yao", "Miller", "Neuroanestesia", "Monitorização neurofisiológica"]
},

{
  id: "oral-mixed-020",
  titulo: "Náuseas e vômitos perioperatórios: mecanismo dos antieméticos",
  area: "Ambulatorial / Farmacologia",
  dificuldade: "muito difícil",
  caso: "Paciente jovem, mulher, não tabagista, com história de cinetose, será submetida à laparoscopia ginecológica com opioide previsto no pós-operatório. O residente prescreve apenas metoclopramida e afirma que todos os antieméticos atuam por mecanismo semelhante.",
  pergunta: "Como você estratifica o risco e explica a escolha racional de antieméticos por mecanismos diferentes?",
  respostaIdeal: [
    "Eu reconheço paciente de alto risco para náuseas e vômitos perioperatórios: sexo feminino, não tabagista, história de cinetose/NVPO e uso de opioide.",
    "A profilaxia deve ser multimodal, combinando fármacos de mecanismos diferentes e reduzindo fatores emetogênicos.",
    "Ondansetrona é antagonista 5-HT3, atuando em vias serotoninérgicas periféricas e centrais.",
    "Dexametasona tem mecanismo antiemético multifatorial e é útil como profilaxia, especialmente no início do procedimento.",
    "Droperidol ou haloperidol atuam principalmente por antagonismo dopaminérgico D2, com atenção a QT e sedação.",
    "Aprepitanto/fosaprepitanto antagonizam receptor NK1, especialmente útil em pacientes de alto risco ou vômitos tardios.",
    "Escopolamina transdérmica tem ação antimuscarínica e pode ser útil, mas causa boca seca, sonolência e visão turva.",
    "Além de fármacos, considero TIVA com propofol, evitar óxido nitroso/voláteis quando possível, hidratação adequada e analgesia poupadora de opioide."
  ],
  pontosObrigatorios: [
    "Usar escore de risco, como Apfel.",
    "Mulher, não tabagista, cinetose/NVPO e opioide aumentam risco.",
    "Profilaxia multimodal em alto risco.",
    "Combinar mecanismos diferentes.",
    "Reduzir opioides e fatores emetogênicos.",
    "Conhecer receptores: 5-HT3, D2, NK1, muscarínico."
  ],
  errosGraves: [
    "Usar apenas metoclopramida em paciente de alto risco.",
    "Achar que todos antieméticos têm mesmo mecanismo.",
    "Esquecer redução de opioides.",
    "Ignorar QT com butirofenonas.",
    "Tratar só depois de vômitos repetidos em paciente claramente de alto risco."
  ],
  aprofundamento: [
    {
      pergunta: "Quais são os quatro fatores clássicos do escore de Apfel?",
      resposta: "Sexo feminino, não tabagismo, história de NVPO/cinetose e uso de opioide pós-operatório."
    },
    {
      pergunta: "Qual receptor o aprepitanto bloqueia?",
      resposta: "Receptor NK1, relacionado à substância P."
    },
    {
      pergunta: "Qual estratégia anestésica reduz NVPO?",
      resposta: "TIVA com propofol, analgesia multimodal poupadora de opioide, evitar óxido nitroso e reduzir voláteis quando possível."
    }
  ],
  fraseOuro: "NVPO de alto risco não se trata com uma droga solitária; trata-se fechando várias portas da via emética.",
  referencias: ["Yao", "Miller", "Barash", "Consensos de NVPO"]
}
  ,
{
  id: "oral-ultra-021",
  titulo: "Hipoxemia na ventilação monopulmonar",
  area: "Cirurgia torácica",
  dificuldade: "Muito difícil",
  caso: "Homem de 71 anos, tabagista, com doença pulmonar obstrutiva crônica moderada, está em decúbito lateral direito para lobectomia superior esquerda por videotoracoscopia. Após 25 minutos de ventilação de apenas um pulmão, a saturação periférica de oxigênio cai de 96% para 84%, apesar de oxigênio inspirado a 100%. A pressão arterial está preservada. O tubo de duplo lúmen foi confirmado antes do posicionamento, mas não depois.",
  pergunta: "A banca pergunta: como você conduz essa hipoxemia de forma organizada e qual é a fisiopatologia principal?",
  respostaIdeal: [
    "Eu trataria como uma hipoxemia durante ventilação de apenas um pulmão, cuja causa mais provável é aumento de desvio de sangue pelo pulmão não ventilado, associado ou não a mau posicionamento do tubo, atelectasia do pulmão ventilado, pressão expiratória inadequada ou alteração hemodinâmica.",
    "Minha primeira medida seria chamar atenção da equipe, confirmar ventilação, oxigênio inspirado a 100%, pressão de vias aéreas, capnografia, hemodinâmica e ausculta. Em seguida, eu confirmaria a posição do tubo com broncoscopia, porque o deslocamento após o decúbito lateral é causa frequente e corrigível.",
    "Se o tubo estiver adequado, faço recrutamento do pulmão ventilado, ajusto pressão expiratória positiva de forma individualizada, evito volume corrente excessivo e pressão de distensão elevada. Se persistir hipoxemia, posso aplicar pressão positiva contínua baixa com oxigênio no pulmão não ventilado, se o cirurgião aceitar.",
    "Também devo excluir broncoespasmo, secreção, pneumotórax, sangramento, queda do débito cardíaco e embolia pulmonar. Se houver dessaturação grave refratária, a prioridade é ventilar os dois pulmões temporariamente, mesmo que atrapalhe o campo cirúrgico."
  ],
  pontosObrigatorios: [
    "Confirmar posição do tubo com broncoscopia.",
    "Oxigênio inspirado a 100% durante a crise.",
    "Recrutar o pulmão ventilado e ajustar pressão expiratória positiva.",
    "Considerar pressão positiva contínua baixa no pulmão não ventilado.",
    "Ventilar os dois pulmões se hipoxemia grave e refratária.",
    "Explicar desvio de sangue pelo pulmão não ventilado e vasoconstrição pulmonar hipóxica."
  ],
  errosGraves: [
    "Aumentar volume corrente de forma agressiva sem olhar pressão de distensão.",
    "Reduzir oxigênio inspirado durante a dessaturação para tentar estimular vasoconstrição pulmonar hipóxica.",
    "Aplicar pressão positiva alta no pulmão cirúrgico sem avisar a equipe.",
    "Não checar a posição do tubo após mudança de decúbito.",
    "Aceitar saturação crítica para preservar campo cirúrgico."
  ],
  aprofundamento: [
    {
      pergunta: "Por que a oxigenação piora na ventilação de apenas um pulmão?",
      resposta: "Porque o pulmão não ventilado continua recebendo parte do fluxo sanguíneo. Esse sangue passa sem ser oxigenado e mistura-se ao sangue oxigenado do pulmão ventilado. A vasoconstrição pulmonar hipóxica reduz esse fluxo, mas não o elimina."
    },
    {
      pergunta: "O anestésico inalatório precisa ser suspenso obrigatoriamente?",
      resposta: "Não obrigatoriamente. Em concentrações clínicas usuais, o efeito sobre a vasoconstrição pulmonar hipóxica costuma ser menos importante do que fatores mecânicos, posicionamento do tubo, atelectasia e pressão de vias aéreas."
    }
  ],
  fraseOuro: "Na ventilação monopulmonar, antes de culpar a fisiologia, olhe o tubo com broncoscópio."
},
{
  id: "oral-ultra-022",
  titulo: "Massa mediastinal anterior sintomática",
  area: "Cirurgia torácica",
  dificuldade: "Muito difícil",
  caso: "Mulher de 23 anos com massa mediastinal anterior volumosa será submetida à biópsia. Refere ortopneia, tosse ao deitar e sensação de desmaio em decúbito dorsal. A tomografia mostra compressão importante da traqueia distal e do brônquio principal direito. A cirurgiã solicita anestesia geral rápida porque o procedimento é curto.",
  pergunta: "A banca pergunta: qual é seu plano anestésico e por que esse caso é perigoso?",
  respostaIdeal: [
    "Esse é um caso de alto risco para colapso de via aérea e colapso cardiovascular após sedação, anestesia geral, ventilação com pressão positiva e bloqueio neuromuscular.",
    "Eu não aceitaria uma indução convencional rápida sem plano de resgate. Avaliaria a posição em que a paciente respira melhor, manteria ventilação espontânea sempre que possível, evitaria perda abrupta do tônus da via aérea e faria o procedimento com a menor profundidade anestésica compatível com segurança.",
    "O plano deve ser discutido previamente com cirurgia, broncoscopia rígida disponível, equipe preparada para mudar posição rapidamente, acesso venoso adequado e possibilidade de resgate cardiopulmonar em casos extremos.",
    "Se a paciente não tolera deitar, eu conduziria na posição tolerada. Se houver obstrução crítica, a biópsia sob anestesia local ou sedação muito leve pode ser mais segura que anestesia geral. A decisão não é pela duração do procedimento, mas pelo risco de colapso."
  ],
  pontosObrigatorios: [
    "Reconhecer alto risco por sintomas posturais.",
    "Evitar indução convencional com paralisia sem plano de resgate.",
    "Preservar ventilação espontânea quando possível.",
    "Planejar posição de segurança.",
    "Ter broncoscopia rígida e equipe cirúrgica pronta.",
    "Considerar anestesia local ou sedação mínima para biópsia."
  ],
  errosGraves: [
    "Fazer bloqueio neuromuscular antes de demonstrar ventilabilidade.",
    "Induzir em decúbito dorsal apesar de ortopneia importante.",
    "Achar que máscara laríngea resolve compressão traqueal distal.",
    "Não avisar a equipe sobre risco de colapso súbito.",
    "Tratar o caso como via aérea difícil comum."
  ],
  aprofundamento: [
    {
      pergunta: "Por que a ventilação com pressão positiva pode piorar?",
      resposta: "Porque reduz retorno venoso, altera gradientes de pressão intratorácica e pode agravar compressão dinâmica de vias aéreas e grandes vasos."
    },
    {
      pergunta: "Qual achado clínico mais assusta?",
      resposta: "Sintoma postural. Se o paciente piora ao deitar, a anestesia pode reproduzir ou ampliar esse colapso de forma abrupta."
    }
  ],
  fraseOuro: "Na massa mediastinal sintomática, o anestesista não induz primeiro para pensar depois."
},
{
  id: "oral-ultra-023",
  titulo: "Bariátrica em superobeso com apneia do sono",
  area: "Obesidade",
  dificuldade: "Muito difícil",
  caso: "Homem de 42 anos, índice de massa corporal 58 kg/m², síndrome da apneia obstrutiva do sono, hipertensão pulmonar leve e refluxo gastroesofágico será submetido à gastrectomia vertical por videolaparoscopia. Ele dessatura rapidamente ao deitar e tem circunferência cervical aumentada.",
  pergunta: "A banca pergunta: como você planeja a indução, ventilação, analgesia e extubação?",
  respostaIdeal: [
    "Eu considero esse paciente de alto risco para ventilação difícil, intubação difícil, aspiração, dessaturação rápida, atelectasia e depressão respiratória pós-operatória por opioides.",
    "Na indução, faria posicionamento em rampa, pré-oxigenação prolongada, idealmente com pressão positiva, preparo de via aérea difícil, aspiração disponível, sequência rápida modificada conforme avaliação e confirmação rigorosa da ventilação e intubação.",
    "A ventilação deve usar volume corrente baseado no peso ideal, pressão expiratória positiva individualizada, manobras de recrutamento quando hemodinamicamente toleradas e atenção ao pneumoperitônio, que piora complacência e aumenta pressão de vias aéreas.",
    "A analgesia deve poupar opioides: dipirona, anti-inflamatório se não contraindicado, cetamina em baixa dose, dexmedetomidina ou clonidina conforme o caso, infiltração local ou bloqueios de parede abdominal. A extubação deve ocorrer acordado, com bloqueio neuromuscular completamente revertido, em posição semissentada e com pressão positiva pós-operatória quando indicada."
  ],
  pontosObrigatorios: [
    "Posição em rampa.",
    "Pré-oxigenação com pressão positiva.",
    "Plano de via aérea difícil.",
    "Ventilar pelo peso ideal, não pelo peso total.",
    "Analgesia poupadora de opioides.",
    "Extubação acordada, semissentada e com reversão completa do bloqueio neuromuscular."
  ],
  errosGraves: [
    "Induzir em decúbito dorsal plano.",
    "Usar volume corrente calculado pelo peso real.",
    "Extubar sonolento e em posição supina.",
    "Usar opioide em excesso sem vigilância respiratória.",
    "Ignorar risco de aspiração."
  ],
  aprofundamento: [
    {
      pergunta: "Por que o obeso dessatura tão rápido?",
      resposta: "Porque tem menor reserva de oxigênio, menor capacidade residual funcional, maior consumo de oxigênio e fechamento precoce de pequenas vias aéreas."
    },
    {
      pergunta: "Como titular anestésico local em bloqueios no obeso?",
      resposta: "Deve-se evitar cálculo pelo peso total. A dose deve ser prudente, muitas vezes baseada em peso ideal ou peso ajustado, com ultrassom e injeção fracionada."
    }
  ],
  fraseOuro: "No superobeso, a via aérea começa antes do laringoscópio: começa no posicionamento."
},
{
  id: "oral-ultra-024",
  titulo: "Idoso frágil com delírio pós-operatório",
  area: "Geriatria",
  dificuldade: "Muito difícil",
  caso: "Mulher de 87 anos, frágil, com perda de peso, déficit auditivo, uso crônico de benzodiazepínico e história de confusão após internação, será submetida à correção de fratura de quadril. Chega desidratada, com dor intensa e hemoglobina de 9 g/dL.",
  pergunta: "A banca pergunta: como reduzir risco anestésico e risco de delírio pós-operatório?",
  respostaIdeal: [
    "Eu vejo esse caso como uma emergência geriátrica tempo-dependente, mas não como autorização para anestesia descuidada. O objetivo é otimizar o que é reversível sem atrasar desnecessariamente a cirurgia.",
    "Eu trataria dor precocemente, preferencialmente com bloqueio regional analgésico, corrigiria desidratação com cautela, avaliaria anemia no contexto de reserva cardíaca, evitaria hipotensão, hipóxia, hipoglicemia, hiperglicemia, retenção urinária e privação sensorial.",
    "Usaria doses menores de anestésicos por alterações farmacocinéticas e farmacodinâmicas do envelhecimento, evitaria benzodiazepínicos adicionais, anticolinérgicos desnecessários e profundidade anestésica excessiva. Monitorização de profundidade pode ajudar a evitar anestesia excessiva em alguns contextos.",
    "No pós-operatório, reforçaria orientação, presença familiar quando possível, óculos e aparelho auditivo, sono adequado, mobilização precoce, analgesia multimodal e prevenção de infecção e constipação."
  ],
  pontosObrigatorios: [
    "Reconhecer fragilidade como fator de risco.",
    "Controlar dor precocemente.",
    "Evitar benzodiazepínicos e anticolinérgicos desnecessários.",
    "Evitar hipotensão e profundidade anestésica excessiva.",
    "Usar doses menores e tituladas.",
    "Medidas não farmacológicas contra delírio."
  ],
  errosGraves: [
    "Sedação pesada para facilitar transporte e punção.",
    "Atribuir confusão pós-operatória apenas à idade.",
    "Ignorar dor como gatilho de delírio.",
    "Corrigir tudo com grandes volumes sem avaliar reserva cardíaca.",
    "Não reverter bloqueio neuromuscular adequadamente."
  ],
  aprofundamento: [
    {
      pergunta: "Raquianestesia elimina risco de delírio?",
      resposta: "Não. A técnica pode ter vantagens, mas delírio depende de dor, inflamação, hipotensão, fármacos, sono, infecção, cognição prévia e ambiente."
    },
    {
      pergunta: "Qual é o maior erro farmacológico nesse caso?",
      resposta: "Tratar o idoso frágil como adulto jovem pequeno. A sensibilidade cerebral e cardiovascular é maior."
    }
  ],
  fraseOuro: "No idoso frágil, anestesia boa é a que passa despercebida pelo cérebro e pela pressão arterial."
},
{
  id: "oral-ultra-025",
  titulo: "Usuário de cocaína com urgência cirúrgica",
  area: "Paciente drogadito",
  dificuldade: "Muito difícil",
  caso: "Homem de 31 anos, usuário de cocaína, chega para drenagem de abscesso cervical profundo. Relata uso há 5 horas. Está agitado, sudoreico, pressão arterial 182 por 108 mmHg, frequência cardíaca 136 por minuto e dor torácica mal caracterizada. A cirurgia é urgente por risco de progressão para via aérea difícil.",
  pergunta: "A banca pergunta: você anestesia agora? Como controla o risco cardiovascular e de via aérea?",
  respostaIdeal: [
    "Eu não trataria esse caso como eletivo. Há urgência por infecção cervical e risco de via aérea, mas também há intoxicação simpaticomimética com risco de isquemia miocárdica, arritmia, hipertensão grave e hipertermia.",
    "Chamaria ajuda, avaliaria via aérea com plano de intubação acordada se houver sinais de distorção cervical, prepararia acesso cirúrgico de emergência e faria monitorização invasiva conforme gravidade.",
    "Para controle simpático, eu priorizaria benzodiazepínico titulado, analgesia, controle de estímulo, correção de hipertermia e vasodilatadores de ação titulável se hipertensão persistente. Evitaria betabloqueio puro isolado na intoxicação aguda por cocaína, pelo risco teórico de predomínio alfa-adrenérgico.",
    "Se dor torácica ou alterações no eletrocardiograma forem relevantes, eu trataria como síndrome coronariana até prova em contrário, mas sem perder a janela de controle de via aérea se ela estiver ameaçada."
  ],
  pontosObrigatorios: [
    "Diferenciar cirurgia eletiva de urgência.",
    "Reconhecer intoxicação simpaticomimética.",
    "Benzodiazepínico como medida central para agitação e hiperatividade simpática.",
    "Evitar betabloqueador puro isolado em intoxicação aguda.",
    "Planejar via aérea difícil por abscesso cervical.",
    "Tratar dor torácica como possível isquemia."
  ],
  errosGraves: [
    "Cancelar automaticamente sem avaliar risco de via aérea.",
    "Fazer indução rápida sem plano cirúrgico de via aérea.",
    "Usar betabloqueador puro como única primeira medida.",
    "Ignorar hipertermia e acidose.",
    "Confundir agitação por cocaína com falta de cooperação simples."
  ],
  aprofundamento: [
    {
      pergunta: "Por que a cocaína preocupa tanto na anestesia?",
      resposta: "Porque aumenta catecolaminas, causa taquicardia, vasoconstrição coronariana, hipertensão, arritmias, hipertermia e pode reduzir reserva cardiovascular."
    },
    {
      pergunta: "Qual seria a postura em cirurgia eletiva?",
      resposta: "Em cirurgia eletiva, intoxicação aguda deve levar a adiamento e encaminhamento para avaliação e cuidado clínico."
    }
  ],
  fraseOuro: "No usuário de cocaína, a pergunta não é só quando foi o uso; é se o simpático ainda está gritando."
},
{
  id: "oral-ultra-026",
  titulo: "Anestesia venosa total e risco de consciência",
  area: "Anestesia geral venosa",
  dificuldade: "Muito difícil",
  caso: "Mulher de 36 anos, obesa, será submetida a tireoidectomia com monitorização de nervo laríngeo recorrente. O cirurgião pede anestesia venosa total, sem bloqueador neuromuscular após a intubação. Durante o procedimento, a bomba de propofol apresenta oclusão intermitente, mas a pressão arterial e a frequência cardíaca permanecem estáveis.",
  pergunta: "A banca pergunta: quais são os riscos específicos da anestesia venosa total e como você previne consciência intraoperatória?",
  respostaIdeal: [
    "Na anestesia venosa total, não existe analisador de concentração expirada como nos anestésicos inalatórios. Portanto, falha de bomba, perda de acesso venoso, infiltração, erro de programação ou oclusão podem causar hipnose insuficiente sem aviso claro.",
    "Eu prevenia com acesso venoso confiável e visível, bomba checada, linhas dedicadas, programação por peso adequado, seringas identificadas, alarmes ativos, vigilância contínua da linha e monitorização clínica. Em casos selecionados, uso monitor de profundidade anestésica como ferramenta adicional, não como substituto de vigilância.",
    "Em paciente obeso, é essencial entender que propofol não deve ser simplesmente calculado pelo peso total para todos os momentos; indução, manutenção e redistribuição exigem titulação e bom senso farmacocinético.",
    "Se suspeito falha de infusão, trato imediatamente: confirmo acesso, faço bolus hipnótico se necessário, restabeleço infusão, comunico equipe e documento o evento. Hemodinâmica estável não exclui consciência."
  ],
  pontosObrigatorios: [
    "Reconhecer ausência de concentração expirada como limitação.",
    "Checar bomba, acesso venoso e linha de infusão.",
    "Não confiar apenas em pressão arterial e frequência cardíaca.",
    "Considerar monitor de profundidade como auxiliar.",
    "Titrar dose no obeso com critério.",
    "Tratar falha de infusão imediatamente."
  ],
  errosGraves: [
    "Achar que ausência de hipertensão exclui consciência.",
    "Deixar acesso venoso escondido sob campos sem inspeção possível.",
    "Misturar muitas drogas na mesma linha sem controle.",
    "Ignorar alarmes da bomba.",
    "Usar bloqueador neuromuscular para mascarar resposta sem garantir hipnose."
  ],
  aprofundamento: [
    {
      pergunta: "Por que anestesia venosa total pode ter maior risco operacional?",
      resposta: "Porque depende integralmente de entrega venosa contínua. Uma interrupção mecânica pode não ser percebida rapidamente se a vigilância da linha for ruim."
    },
    {
      pergunta: "O monitor de profundidade resolve o problema?",
      resposta: "Ajuda, mas não resolve sozinho. Artefatos, drogas, tempo de resposta e limitações individuais exigem interpretação clínica."
    }
  ],
  fraseOuro: "Na anestesia venosa total, a linha venosa é o vaporizador; se ela falha, a anestesia evapora."
},
{
  id: "oral-ultra-027",
  titulo: "Anestésico inalatório em baixo débito cardíaco",
  area: "Anestésicos inalatórios",
  dificuldade: "Muito difícil",
  caso: "Homem de 68 anos, insuficiência cardíaca com fração de ejeção reduzida, será submetido à laparotomia. Após indução cuidadosa, inicia-se sevoflurano. Apesar de baixa concentração ajustada no vaporizador, a fração alveolar sobe rapidamente e o paciente apresenta hipotensão.",
  pergunta: "A banca pergunta: como débito cardíaco altera a velocidade de indução inalatória e quais implicações práticas isso tem?",
  respostaIdeal: [
    "Quando o débito cardíaco está reduzido, há menor captação do anestésico pelo sangue que passa nos pulmões. Isso faz a concentração alveolar subir mais rapidamente em direção à concentração inspirada, acelerando o efeito cerebral.",
    "No paciente com baixa reserva cardíaca, isso aumenta risco de sobredosagem relativa, hipotensão, depressão miocárdica e vasodilatação. Portanto, eu aumentaria anestésico inalatório de forma lenta e titulada, usando analgesia e hipnose equilibradas, monitorização estreita e suporte vasoativo se necessário.",
    "Também devo lembrar que anestésicos mais solúveis no sangue tendem a ter indução e eliminação mais lentas. Alterações de ventilação, relação ventilação-perfusão, concentração inspirada e débito cardíaco mudam a velocidade de entrada e saída do anestésico.",
    "Nesse caso, a hipotensão pode ser por anestésico, hipovolemia, vasodilatação, isquemia ou piora ventricular; eu avaliaria a causa e trataria sem simplesmente desligar tudo ou aprofundar mais."
  ],
  pontosObrigatorios: [
    "Baixo débito cardíaco acelera aumento da concentração alveolar.",
    "Maior risco de efeito excessivo com doses aparentemente pequenas.",
    "Titular lentamente anestésicos inalatórios.",
    "Entender solubilidade sangue-gás.",
    "Tratar hipotensão avaliando causa.",
    "Evitar aumentos bruscos de anestésico em baixa reserva cardíaca."
  ],
  errosGraves: [
    "Achar que baixo débito sempre retarda indução inalatória.",
    "Aumentar rapidamente vaporizador diante de resposta hemodinâmica fraca.",
    "Ignorar depressão miocárdica e vasodilatação.",
    "Tratar toda hipotensão apenas com volume.",
    "Não correlacionar fração expirada com efeito."
  ],
  aprofundamento: [
    {
      pergunta: "E se o paciente tivesse grande desvio pulmonar direita-esquerda?",
      resposta: "A indução inalatória poderia ser retardada, porque parte do sangue chega à circulação arterial sem passar por alvéolos ventilados."
    },
    {
      pergunta: "Qual anestésico inalatório entra e sai mais rapidamente?",
      resposta: "Os menos solúveis no sangue tendem a ter indução e recuperação mais rápidas."
    }
  ],
  fraseOuro: "No baixo débito, o alvéolo enche rápido de anestésico; quem paga a conta é o cérebro e a pressão."
},
{
  id: "oral-ultra-028",
  titulo: "Depressão respiratória por opioide no pós-operatório",
  area: "Opioides",
  dificuldade: "Muito difícil",
  caso: "Mulher de 64 anos, obesa, com apneia do sono provável, recebe morfina venosa na recuperação após histerectomia abdominal. Duas horas depois está sonolenta, frequência respiratória 7 por minuto, saturação periférica de oxigênio 91% com cateter nasal e pupilas puntiformes. A dor está controlada.",
  pergunta: "A banca pergunta: como você diagnostica e trata sem transformar analgesia em sofrimento?",
  respostaIdeal: [
    "O quadro é compatível com depressão respiratória por opioide, agravada por obesidade e provável apneia do sono. A prioridade é ventilação e segurança: estimular, chamar ajuda, oferecer oxigênio, abrir via aérea e ventilar com bolsa e máscara se necessário.",
    "Eu suspenderia opioides temporariamente, avaliaria glicemia, bloqueio neuromuscular residual e outras causas de sonolência, e administraria naloxona titulada em pequenas doses se houver hipoventilação clinicamente relevante.",
    "A naloxona deve ser titulada para restaurar ventilação, não para retirar toda analgesia de uma vez. Doses grandes podem causar dor intensa, hipertensão, taquicardia, edema pulmonar e abstinência em dependentes.",
    "Depois, manteria observação prolongada, porque a duração da naloxona pode ser menor que a do opioide. Replanejaria analgesia multimodal poupadora de opioide."
  ],
  pontosObrigatorios: [
    "Reconhecer depressão respiratória por opioide.",
    "Priorizar ventilação e via aérea.",
    "Naloxona titulada, não bolus heroico.",
    "Monitorar recorrência de depressão respiratória.",
    "Replanejar analgesia multimodal.",
    "Considerar apneia do sono e obesidade como fatores de risco."
  ],
  errosGraves: [
    "Dar naloxona em dose alta sem necessidade.",
    "Achar que saturação aceitável exclui hipoventilação.",
    "Deixar paciente sem monitorização após reversão.",
    "Repetir opioide porque a paciente acordou com dor sem plano alternativo.",
    "Ignorar bloqueio neuromuscular residual como diferencial."
  ],
  aprofundamento: [
    {
      pergunta: "Por que oxigênio pode mascarar o problema?",
      resposta: "Porque pode manter a saturação por algum tempo mesmo com ventilação inadequada e retenção de gás carbônico."
    },
    {
      pergunta: "Qual é o alvo da naloxona?",
      resposta: "Restaurar ventilação e proteção de via aérea mantendo o máximo possível de analgesia."
    }
  ],
  fraseOuro: "Naloxona boa não pune o paciente por ter recebido opioide; ela devolve respiração."
},
{
  id: "oral-ultra-029",
  titulo: "Bradicardia grave após raquianestesia",
  area: "Raquianestesia",
  dificuldade: "Muito difícil",
  caso: "Homem de 28 anos, saudável, atleta, é submetido à artroscopia de joelho sob raquianestesia. Vinte minutos depois, em decúbito dorsal, refere náusea, fica pálido, apresenta frequência cardíaca de 34 por minuto e rapidamente evolui para ausência de pulso. O nível sensitivo parecia em torno de T8.",
  pergunta: "A banca pergunta: explique o mecanismo e conduza a parada cardiorrespiratória nesse contexto.",
  respostaIdeal: [
    "A raquianestesia pode causar bloqueio simpático, redução do retorno venoso, redução do enchimento cardíaco e ativação de reflexos vagais. Em paciente jovem, vagotônico e com pouca reserva de frequência, a bradicardia pode ser o primeiro sinal de colapso.",
    "Eu trataria imediatamente bradicardia grave com atropina, vasopressor e volume, antes de evoluir. Se já não há pulso, inicio compressões torácicas de alta qualidade, ventilação com oxigênio a 100%, adrenalina conforme protocolo e procuro causas reversíveis.",
    "No contexto de raquianestesia, penso em bloqueio simpático intenso, hipovolemia relativa, reflexo vagal, sedação excessiva, hipóxia, anestesia espinal total, intoxicação por anestésico local se houver contexto e eventos cirúrgicos associados.",
    "A prevenção inclui monitorização ativa, alarmes ligados, presença do anestesiologista, tratamento precoce de náusea, hipotensão e bradicardia, além de cuidado especial em pacientes jovens, vagotônicos ou hipovolêmicos."
  ],
  pontosObrigatorios: [
    "Bradicardia pode preceder parada após raquianestesia.",
    "Explicar redução de retorno venoso e reflexo vagal.",
    "Atropina e vasopressor precoces se bradicardia grave.",
    "Compressões e adrenalina se ausência de pulso.",
    "Oxigênio e ventilação adequados.",
    "Prevenção com vigilância e alarmes ativos."
  ],
  errosGraves: [
    "Esperar hipotensão profunda para tratar bradicardia.",
    "Achar que nível em T8 elimina risco.",
    "Não iniciar compressões se não há pulso.",
    "Deixar paciente raquianestesiado sem vigilância.",
    "Tratar apenas com volume lento enquanto o paciente colapsa."
  ],
  aprofundamento: [
    {
      pergunta: "Por que náusea importa?",
      resposta: "Náusea pode ser sinal precoce de hipotensão, hipoperfusão ou estímulo vagal, e não deve ser banalizada."
    },
    {
      pergunta: "Qual é a diferença para raquianestesia total?",
      resposta: "Na raquianestesia total há ascensão extensa do bloqueio, com comprometimento respiratório, alteração de consciência, hipotensão intensa e possível necessidade de ventilação e suporte circulatório."
    }
  ],
  fraseOuro: "Na raquianestesia, bradicardia não é detalhe: pode ser o aviso antes do silêncio."
},
{
  id: "oral-ultra-030",
  titulo: "Intoxicação sistêmica por anestésico local",
  area: "Bloqueio de nervos periféricos",
  dificuldade: "Muito difícil",
  caso: "Mulher de 53 anos, 58 kg, será submetida à cirurgia de rádio distal com bloqueio de plexo braquial axilar. Após injeção de 30 mL de ropivacaína a 0,5%, apresenta gosto metálico, zumbido, agitação e convulsão. A pressão arterial cai e surgem extrassístoles ventriculares frequentes.",
  pergunta: "A banca pergunta: conduza a intoxicação sistêmica por anestésico local e explique por que ventilação importa.",
  respostaIdeal: [
    "Eu interrompo imediatamente a injeção, chamo ajuda, garanto via aérea, oxigênio a 100% e ventilação adequada. Hipóxia, acidose e hipercarbia aumentam toxicidade do anestésico local, pois favorecem maior fração ionizada e pioram ligação aos canais de sódio.",
    "Trato convulsão com benzodiazepínico em dose titulada. Evito grandes doses de propofol se houver instabilidade cardiovascular. Inicio emulsão lipídica venosa conforme protocolo institucional, sem atrasar suporte hemodinâmico.",
    "Se houver parada, faço reanimação prolongada, porque a recuperação pode ocorrer após redistribuição e emulsão lipídica. Evito vasopressina, bloqueadores de canais de cálcio, betabloqueadores e grandes doses de anestésico local adicional. Adrenalina, se necessária, deve ser em doses menores e tituladas conforme protocolos de toxicidade.",
    "Depois do evento, manteria observação em ambiente monitorizado, documentaria dose, tempo, manifestações e condutas."
  ],
  pontosObrigatorios: [
    "Parar injeção.",
    "Via aérea, oxigênio e ventilação.",
    "Benzodiazepínico para convulsão.",
    "Emulsão lipídica precoce em toxicidade grave.",
    "Evitar hipoxemia, acidose e hipercarbia.",
    "Reanimação prolongada se parada."
  ],
  errosGraves: [
    "Continuar injetando após sintomas neurológicos.",
    "Tratar convulsão com dose enorme de propofol em paciente instável.",
    "Esquecer emulsão lipídica.",
    "Usar vasopressina ou bloqueador de canal de cálcio.",
    "Abandonar reanimação precocemente."
  ],
  aprofundamento: [
    {
      pergunta: "Por que a emulsão lipídica ajuda?",
      resposta: "Ela funciona como compartimento intravascular que sequestra parte do anestésico local lipossolúvel e também pode melhorar metabolismo energético cardíaco."
    },
    {
      pergunta: "Como prevenir?",
      resposta: "Dose segura, ultrassom, aspiração frequente, injeção fracionada, comunicação com paciente quando possível e vigilância após bloqueio."
    }
  ],
  fraseOuro: "Na intoxicação por anestésico local, ventilação não é suporte: é tratamento antitoxicidade."
},
{
  id: "oral-ultra-031",
  titulo: "Macro e micro-hemodinâmica no choque séptico",
  area: "Hemodinâmica",
  dificuldade: "Muito difícil",
  caso: "Homem de 66 anos, peritonite fecal, chega para laparotomia. Após indução, mantém pressão arterial baixa apesar de noradrenalina. Lactato 5,8 mmol/L, saturação venosa central de oxigênio 78%, diferença entre gás carbônico venoso e arterial de 11 mmHg. A diurese é baixa e a pele está marmórea.",
  pergunta: "A banca pergunta: interprete macro-hemodinâmica e micro-hemodinâmica. O que você faz?",
  respostaIdeal: [
    "Esse paciente tem choque séptico com provável vasoplegia, alteração distributiva e hipoperfusão tecidual. A saturação venosa central de oxigênio alta não garante boa perfusão; pode refletir incapacidade de extração de oxigênio, shunt microcirculatório ou distribuição inadequada do fluxo.",
    "A diferença elevada entre gás carbônico venoso e arterial sugere que o fluxo sanguíneo global ou regional ainda é insuficiente para remover gás carbônico produzido nos tecidos. Lactato alto e pele marmórea reforçam hipoperfusão.",
    "Eu conduziria com controle de foco cirúrgico rápido, antibiótico, noradrenalina para pressão arterial média adequada, avaliação dinâmica de responsividade a volume, ecocardiografia ou outro método para avaliar função cardíaca, e correção de fatores como hipoxemia, anemia grave, acidose, hipocalcemia e hipotermia.",
    "Se houver disfunção miocárdica ou baixo fluxo, considero inotrópico. Se vasoplegia refratária, considero vasopressina e hidrocortisona conforme contexto. Não perseguiria apenas um número de pressão; buscaria sinais de perfusão."
  ],
  pontosObrigatorios: [
    "Pressão arterial não é sinônimo de perfusão.",
    "Saturação venosa alta pode coexistir com hipoperfusão.",
    "Diferença venosa-arterial de gás carbônico elevada sugere fluxo inadequado.",
    "Controle de foco é central.",
    "Avaliar responsividade a volume dinamicamente.",
    "Usar vasopressor, inotrópico ou vasopressina conforme fisiologia."
  ],
  errosGraves: [
    "Dar volume infinito sem avaliar resposta.",
    "Achar que saturação venosa alta exclui choque.",
    "Tratar apenas pressão e ignorar lactato, pele e diurese.",
    "Atrasar cirurgia para normalizar todos os números.",
    "Não considerar disfunção miocárdica séptica."
  ],
  aprofundamento: [
    {
      pergunta: "O que é dissociação entre macro e micro-hemodinâmica?",
      resposta: "É quando a pressão e o débito parecem aceitáveis, mas a perfusão capilar e a extração celular de oxigênio continuam inadequadas."
    },
    {
      pergunta: "Por que lactato sobe na sepse?",
      resposta: "Por hipoperfusão, metabolismo anaeróbio, estímulo adrenérgico, disfunção mitocondrial e redução da depuração hepática em alguns casos."
    }
  ],
  fraseOuro: "Choque séptico não se trata olhando só a pressão; microcirculação também vota."
},
{
  id: "oral-ultra-032",
  titulo: "Recusa de transfusão e ética em anestesia",
  area: "Ética médica em anestesiologia",
  dificuldade: "Muito difícil",
  caso: "Mulher de 45 anos, testemunha de Jeová, será submetida à miomectomia com alto risco de sangramento. Está lúcida, orientada e apresenta documento recusando transfusão de concentrado de hemácias, plasma e plaquetas. Aceita ácido tranexâmico, recuperação intraoperatória de sangue em circuito contínuo e albumina. O cirurgião diz que, se sangrar muito, transfundirá mesmo assim.",
  pergunta: "A banca pergunta: qual sua conduta ética, legal e anestésica?",
  respostaIdeal: [
    "Paciente adulta, capaz e bem informada tem direito de recusar tratamento, inclusive transfusão, mesmo que essa recusa aumente risco de morte. Minha obrigação é garantir decisão esclarecida, voluntária, documentada e específica.",
    "Eu conversaria com a paciente sem coerção, explicaria riscos, alternativas e limites. Registraria claramente o que aceita e o que recusa. Também alinharia com cirurgia, banco de sangue e instituição. Se a equipe não aceita respeitar a recusa, deve haver transferência de cuidado antes do procedimento, se possível, não descumprimento durante a crise.",
    "O plano anestésico deve incluir otimização pré-operatória de hemoglobina, técnica cirúrgica hemostática, antifibrinolítico, hipotensão controlada se apropriada, normotermia, cálcio, monitorização de coagulação, recuperação de sangue se aceita, minimização de perdas e estratégia clara para hemorragia.",
    "Em emergência com paciente incapaz, a conduta depende da existência e validade de diretiva prévia conhecida. Neste caso, ela está capaz e documentou a recusa; isso deve ser respeitado."
  ],
  pontosObrigatorios: [
    "Respeitar autonomia do adulto capaz.",
    "Consentimento informado detalhado.",
    "Documentar produtos aceitos e recusados.",
    "Alinhar equipe antes da cirurgia.",
    "Planejar conservação de sangue.",
    "Não prometer transfundir contra vontade expressa."
  ],
  errosGraves: [
    "Dizer que transfundirá escondido se houver risco de morte.",
    "Não documentar a conversa.",
    "Tratar todas as testemunhas de Jeová como se recusassem os mesmos produtos.",
    "Ignorar alternativas de conservação de sangue.",
    "Aceitar realizar caso com equipe em conflito ético aberto."
  ],
  aprofundamento: [
    {
      pergunta: "E se fosse menor de idade?",
      resposta: "A situação muda. Em criança, o melhor interesse do menor e a proteção da vida podem exigir acionamento institucional e judicial conforme urgência e legislação aplicável."
    },
    {
      pergunta: "O que deve constar no termo?",
      resposta: "Capacidade decisória, entendimento dos riscos, produtos recusados, produtos aceitos, alternativas propostas e assinatura da paciente e equipe."
    }
  ],
  fraseOuro: "Autonomia não é detalhe burocrático; é parte do plano anestésico."
},
{
  id: "oral-ultra-033",
  titulo: "Parada cardiorrespiratória por reflexo vagal",
  area: "Parada cardiorrespiratória",
  dificuldade: "Muito difícil",
  caso: "Durante correção de estrabismo em criança de 6 anos, após tração do músculo reto medial, ocorre bradicardia progressiva de 95 para 32 batimentos por minuto, seguida de ausência de pulso. A ventilação estava adequada e não havia sangramento.",
  pergunta: "A banca pergunta: conduza a parada e explique o reflexo envolvido.",
  respostaIdeal: [
    "O quadro sugere reflexo óculo-cardíaco grave, mediado por estímulo trigeminal aferente e resposta vagal eferente, levando a bradicardia, bloqueios ou até parada.",
    "A primeira medida é avisar imediatamente o cirurgião para cessar a tração. Se há ausência de pulso, inicio compressões torácicas, ventilo com oxigênio a 100%, administro adrenalina conforme protocolo e trato causas reversíveis.",
    "Se ainda houver bradicardia com pulso ou durante recuperação, atropina pode ser usada. Também devo garantir profundidade anestésica adequada, corrigir hipóxia, hipercarbia e acidose, porque esses fatores intensificam reflexos vagais.",
    "Após retorno da circulação, discuto com cirurgia retomada cuidadosa, anestesia adequada e possibilidade de anticolinérgico se houver recorrência."
  ],
  pontosObrigatorios: [
    "Cessar estímulo cirúrgico.",
    "Reconhecer reflexo trigeminal-vagal.",
    "Compressões se ausência de pulso.",
    "Oxigênio e ventilação.",
    "Adrenalina na parada.",
    "Atropina para bradicardia relevante."
  ],
  errosGraves: [
    "Mandar o cirurgião continuar porque é reflexo comum.",
    "Aguardar atropina agir sem compressões se não há pulso.",
    "Não corrigir hipercarbia e hipóxia.",
    "Confundir com plano anestésico superficial apenas.",
    "Não comunicar recorrência ao cirurgião."
  ],
  aprofundamento: [
    {
      pergunta: "Além da cirurgia ocular, onde reflexos semelhantes podem ocorrer?",
      resposta: "Podem ocorrer em manipulação de face, crânio, dura-máter, nervo trigêmeo, laringe e vísceras, sempre com predomínio vagal."
    },
    {
      pergunta: "A profilaxia com atropina é obrigatória?",
      resposta: "Não em todos os casos, mas pode ser considerada em pacientes de maior risco ou quando já houve reflexo importante."
    }
  ],
  fraseOuro: "Em reflexo vagal cirúrgico, o primeiro fármaco é parar o estímulo."
},
{
  id: "oral-ultra-034",
  titulo: "Parada cardiorrespiratória em pediatria por hipóxia",
  area: "Parada cardiorrespiratória pediátrica",
  dificuldade: "Muito difícil",
  caso: "Criança de 2 anos, 12 kg, em indução inalatória para herniorrafia, apresenta laringoespasmo após tentativa de punção venosa. Evolui com esforço inspiratório sem entrada de ar, dessaturação, bradicardia intensa e ausência de pulso.",
  pergunta: "A banca pergunta: qual é a fisiologia da parada pediátrica e como você conduz?",
  respostaIdeal: [
    "Em pediatria, a parada cardiorrespiratória é frequentemente consequência de hipóxia e falência ventilatória, não primariamente de arritmia ventricular. A bradicardia grave nesse contexto deve ser tratada como sinal de hipóxia crítica.",
    "Eu peço ajuda, interrompo estímulo, faço manobra de abertura de via aérea, pressão positiva com oxigênio a 100%, aprofundo anestesia se houver acesso, removo secreções, aplico pressão positiva contínua e considero succinilcolina ou rocurônio se laringoespasmo persistente.",
    "Se não há pulso ou se a frequência cardíaca está abaixo de 60 por minuto com sinais de má perfusão apesar de ventilação, inicio compressões torácicas. Administro adrenalina conforme protocolo pediátrico e continuo corrigindo a causa principal: oxigenação e ventilação.",
    "Após retorno da circulação, avalio edema pulmonar por pressão negativa, aspiração, necessidade de ventilação mecânica e monitorização prolongada."
  ],
  pontosObrigatorios: [
    "Parada pediátrica geralmente é hipóxica.",
    "Ventilação com oxigênio a 100% é central.",
    "Tratar laringoespasmo de forma escalonada.",
    "Compressões se ausência de pulso ou bradicardia grave com má perfusão.",
    "Adrenalina conforme protocolo pediátrico.",
    "Avaliar edema pulmonar pós-obstrutivo."
  ],
  errosGraves: [
    "Focar apenas em acesso venoso e esquecer ventilação.",
    "Esperar parada franca para tratar bradicardia hipóxica.",
    "Insistir em ventilação ineficaz sem relaxante ou via aérea definitiva.",
    "Não iniciar compressões quando indicado.",
    "Usar doses adultas de fármacos."
  ],
  aprofundamento: [
    {
      pergunta: "Qual é o ponto de virada na bradicardia pediátrica?",
      resposta: "Frequência cardíaca abaixo de 60 por minuto com sinais de má perfusão, apesar de ventilação adequada, deve levar a compressões."
    },
    {
      pergunta: "Por que laringoespasmo causa edema pulmonar?",
      resposta: "O esforço inspiratório contra via aérea fechada gera pressão intratorácica muito negativa, aumentando retorno venoso e transudação de líquido para alvéolos."
    }
  ],
  fraseOuro: "Na parada pediátrica, quem salva primeiro é o oxigênio entrando."
},
{
  id: "oral-ultra-035",
  titulo: "Analgesia de parto com bloqueio extenso",
  area: "Analgesia de parto",
  dificuldade: "Muito difícil",
  caso: "Gestante de 39 semanas recebe analgesia combinada raqui-peridural para trabalho de parto. Dez minutos depois relata dormência em mãos, dificuldade para respirar, náusea e tontura. A pressão arterial cai para 72 por 38 mmHg. O batimento fetal apresenta desaceleração prolongada.",
  pergunta: "A banca pergunta: quais diagnósticos você considera e como conduz mãe e feto?",
  respostaIdeal: [
    "O quadro sugere bloqueio neuraxial alto, possivelmente raquianestesia alta ou dispersão excessiva do anestésico local. A prioridade é materna: deslocamento uterino para esquerda, oxigênio, avaliação de consciência, ventilação e suporte hemodinâmico.",
    "Eu chamo ajuda, suspendo infusão peridural, trato hipotensão com vasopressor apropriado e volume com critério. Se houver comprometimento ventilatório ou rebaixamento, dou suporte ventilatório e intubo se necessário.",
    "A bradicardia ou desaceleração fetal geralmente reflete hipoperfusão uteroplacentária materna. O tratamento inicial é corrigir pressão, oxigenação e deslocamento uterino. A decisão de parto operatório depende da recuperação fetal após ressuscitação materna e da avaliação obstétrica.",
    "Também consideraria injeção intravascular de anestésico local se houver sintomas neurológicos excitatórios ou cardiovasculares, e anestesia espinal total se houver ascensão com perda de consciência e apneia."
  ],
  pontosObrigatorios: [
    "Prioridade é ressuscitação materna.",
    "Deslocamento uterino à esquerda.",
    "Oxigênio e suporte ventilatório.",
    "Vasopressor para hipotensão.",
    "Suspender infusão peridural.",
    "Feto melhora com correção materna."
  ],
  errosGraves: [
    "Levar direto para cesariana sem tratar hipotensão materna.",
    "Deixar a gestante em posição supina.",
    "Não chamar ajuda.",
    "Ignorar que pode evoluir para apneia.",
    "Dar sedativo para ansiedade sem avaliar bloqueio alto."
  ],
  aprofundamento: [
    {
      pergunta: "Qual vasopressor você escolheria?",
      resposta: "Fenilefrina ou noradrenalina em doses tituladas são opções frequentes para hipotensão neuraxial obstétrica, conforme frequência cardíaca, disponibilidade e protocolo."
    },
    {
      pergunta: "O que sugere anestesia espinal total?",
      resposta: "Hipotensão intensa, bradicardia, dificuldade respiratória, fraqueza em membros superiores, alteração de consciência e apneia."
    }
  ],
  fraseOuro: "Na analgesia de parto, desaceleração fetal depois do bloqueio costuma pedir pressão materna, não bisturi automático."
},
{
  id: "oral-ultra-036",
  titulo: "Anestesia para cesariana em pré-eclâmpsia grave",
  area: "Obstetrícia",
  dificuldade: "Muito difícil",
  caso: "Gestante de 34 semanas com pré-eclâmpsia grave, cefaleia, pressão arterial 168 por 112 mmHg, plaquetas 92 mil por milímetro cúbico, proteinúria importante e uso de sulfato de magnésio será submetida à cesariana por sofrimento fetal. Está consciente, sem sangramento e com via aérea aparentemente difícil por edema.",
  pergunta: "A banca pergunta: escolha a técnica anestésica e explique os pontos críticos.",
  respostaIdeal: [
    "A decisão entre anestesia neuraxial e geral depende de urgência, plaquetas, tendência de queda plaquetária, coagulopatia, sangramento, estado neurológico e avaliação de via aérea. Se a contagem de plaquetas for estável, sem coagulopatia e houver tempo, técnica neuraxial pode ser preferível por evitar manipulação de via aérea edemaciada e resposta hipertensiva à intubação.",
    "Se for anestesia geral, preparo via aérea difícil, prevenção de aspiração, controle pressórico antes da laringoscopia e cuidado com interação do magnésio com bloqueadores neuromusculares, pois pode potencializar bloqueio.",
    "O sulfato de magnésio é mantido para prevenção e tratamento de convulsões e exige vigilância de reflexos, ventilação, diurese e sinais de toxicidade. Cálcio deve estar disponível para toxicidade grave.",
    "No intraoperatório, trato hipertensão grave, evito excesso de fluidos por risco de edema pulmonar e priorizo perfusão uteroplacentária e segurança materna."
  ],
  pontosObrigatorios: [
    "Avaliar plaquetas em tendência, não só número isolado.",
    "Via aérea pode ser difícil por edema.",
    "Magnésio potencializa bloqueio neuromuscular.",
    "Cálcio disponível para toxicidade por magnésio.",
    "Evitar fluidos liberais.",
    "Controlar hipertensão grave."
  ],
  errosGraves: [
    "Fazer raquianestesia ignorando coagulopatia ou plaquetas em queda rápida.",
    "Induzir anestesia geral sem plano de via aérea difícil.",
    "Esquecer interação do magnésio com relaxantes musculares.",
    "Suspender magnésio sem motivo em paciente grave.",
    "Dar grande volume profilático de cristaloide."
  ],
  aprofundamento: [
    {
      pergunta: "Por que pré-eclâmpsia aumenta risco de edema pulmonar?",
      resposta: "Por disfunção endotelial, aumento de permeabilidade capilar, baixa pressão oncótica, disfunção cardíaca possível e sensibilidade a excesso de fluidos."
    },
    {
      pergunta: "Como reconhecer toxicidade por magnésio?",
      resposta: "Perda de reflexos, sonolência, fraqueza, depressão respiratória, alterações de condução cardíaca e, em casos graves, parada."
    }
  ],
  fraseOuro: "Na pré-eclâmpsia grave, a via aérea incha, o pulmão encharca e o magnésio prolonga bloqueio: nada é casual."
},
{
  id: "oral-ultra-037",
  titulo: "Trauma craniano e choque hemorrágico",
  area: "Trauma",
  dificuldade: "Muito difícil",
  caso: "Homem de 24 anos, vítima de colisão moto-auto, chega com escala de coma de Glasgow 6, pupila direita maior que a esquerda, pressão arterial 78 por 42 mmHg, frequência cardíaca 142 por minuto e ultrassom abdominal positivo para líquido livre. A equipe quer aceitar pressão baixa até a laparotomia para reduzir sangramento.",
  pergunta: "A banca pergunta: como conciliar cérebro e hemorragia?",
  respostaIdeal: [
    "Esse paciente tem duas ameaças simultâneas: hemorragia com choque e lesão cerebral traumática grave. Hipotensão permissiva pode ser considerada em alguns traumas hemorrágicos, mas é perigosa em lesão cerebral grave, porque reduz pressão de perfusão cerebral e agrava lesão secundária.",
    "Eu faria controle imediato de via aérea com proteção cervical, oxigenação e ventilação adequadas, evitando hipóxia e hipercarbia grave. A intubação deve usar drogas que preservem hemodinâmica e reduzam resposta simpática extrema.",
    "Ativaria protocolo de transfusão maciça, limitaria cristaloide, corrigiria cálcio, temperatura, acidose e coagulopatia, e levaria rapidamente para controle de sangramento. O alvo pressórico deve equilibrar perfusão cerebral e controle hemorrágico, não ser hipotensão profunda.",
    "Se houver sinais de herniação, posso usar medidas temporárias como elevação da cabeça se possível, osmoterapia e ventilação para normocapnia ou hiperventilação breve apenas em deterioração neurológica iminente."
  ],
  pontosObrigatorios: [
    "Evitar hipóxia.",
    "Evitar hipotensão em lesão cerebral grave.",
    "Controle rápido de via aérea com proteção cervical.",
    "Ressuscitação hemostática.",
    "Controle cirúrgico da hemorragia.",
    "Hiperventilação profunda não é rotina."
  ],
  errosGraves: [
    "Aceitar pressão muito baixa em lesão cerebral grave.",
    "Atrasar controle de sangramento para tomografia se instável.",
    "Ventilar para gás carbônico muito baixo por rotina.",
    "Usar apenas cristaloide.",
    "Ignorar cálcio e temperatura na transfusão maciça."
  ],
  aprofundamento: [
    {
      pergunta: "Por que hipotensão é tão ruim no trauma craniano?",
      resposta: "Porque reduz pressão de perfusão cerebral e amplia isquemia em áreas vulneráveis."
    },
    {
      pergunta: "Qual o papel da cetamina?",
      resposta: "Pode ser considerada quando há choque, pois preserva pressão arterial melhor que alguns hipnóticos. A contraindicação absoluta por pressão intracraniana não é mais uma regra rígida."
    }
  ],
  fraseOuro: "No trauma com cabeça grave, a hipotensão permissiva precisa pedir licença ao cérebro."
},
{
  id: "oral-ultra-038",
  titulo: "Hipertermia maligna no centro cirúrgico",
  area: "Emergências anestésicas",
  dificuldade: "Muito difícil",
  caso: "Durante anestesia geral com sevoflurano e succinilcolina para amigdalectomia, criança de 8 anos apresenta aumento rápido do gás carbônico expirado, taquicardia, rigidez mandibular, acidose respiratória e metabólica, potássio elevado e temperatura subindo rapidamente.",
  pergunta: "A banca pergunta: qual diagnóstico e qual sequência de tratamento?",
  respostaIdeal: [
    "O diagnóstico é hipertermia maligna até prova em contrário. O aumento inexplicado do gás carbônico expirado é frequentemente sinal precoce, antes da hipertermia franca.",
    "Eu interrompo imediatamente agentes desencadeantes, peço ajuda, aviso cirurgia, hiperventilo com oxigênio a 100%, troco ou preparo circuito livre de anestésico volátil conforme disponibilidade, inicio dantrolene sem atraso e trato acidose, hipercalemia e arritmias.",
    "Faço resfriamento ativo se hipertermia, monitoro temperatura central, gasometria, potássio, cálcio, coagulação, mioglobina, função renal e débito urinário. Evito bloqueador de canal de cálcio junto com dantrolene pelo risco de hipercalemia e colapso cardiovascular.",
    "Após controle, o paciente deve ir para terapia intensiva, porque pode haver recrudescência. A família precisa ser orientada para investigação futura."
  ],
  pontosObrigatorios: [
    "Suspender voláteis e succinilcolina.",
    "Oxigênio a 100% e hiperventilação.",
    "Dantrolene imediato.",
    "Tratar hipercalemia e acidose.",
    "Resfriamento ativo se necessário.",
    "Observação intensiva por risco de recorrência."
  ],
  errosGraves: [
    "Esperar temperatura subir para tratar.",
    "Continuar sevoflurano enquanto procura diagnóstico.",
    "Não pedir dantrolene imediatamente.",
    "Usar bloqueador de canal de cálcio junto com dantrolene.",
    "Subestimar hipercalemia."
  ],
  aprofundamento: [
    {
      pergunta: "Qual é o mecanismo molecular?",
      resposta: "Há liberação descontrolada de cálcio do retículo sarcoplasmático no músculo esquelético, com contração sustentada, aumento extremo de metabolismo, produção de calor, acidose e rabdomiólise."
    },
    {
      pergunta: "O que mais pode parecer hipertermia maligna?",
      resposta: "Sepse, tireotoxicose, síndrome serotoninérgica, feocromocitoma, anestesia superficial, ventilação inadequada e intoxicação por cocaína podem entrar no diferencial, mas não devem atrasar dantrolene se a suspeita for forte."
    }
  ],
  fraseOuro: "Hipertermia maligna começa no capnógrafo; se esperar o termômetro, você chega atrasado."
},
{
  id: "oral-ultra-039",
  titulo: "Insuficiência adrenal no perioperatório",
  area: "Endócrino-metabólico",
  dificuldade: "Muito difícil",
  caso: "Mulher de 58 anos, em uso de prednisona 20 mg ao dia há 8 meses por doença autoimune, será submetida à colectomia. Após indução apresenta hipotensão profunda, pouco responsiva a fenilefrina e volume. Não há sangramento. Glicemia é 62 mg/dL e sódio está baixo.",
  pergunta: "A banca pergunta: explique a suspeita e conduza.",
  respostaIdeal: [
    "A paciente tem risco de supressão do eixo hipotálamo-hipófise-adrenal por uso crônico de corticoide. A hipotensão refratária, hipoglicemia e hiponatremia sugerem insuficiência adrenal relativa ou crise adrenal precipitada pelo estresse cirúrgico.",
    "Eu trataria imediatamente com hidrocortisona venosa em dose de estresse, além de suporte hemodinâmico com vasopressor, correção de hipoglicemia, volume com critério e investigação de outras causas de choque.",
    "A reposição de corticoide não deve esperar confirmação laboratorial se a suspeita for forte e o paciente estiver instável. Depois, manteria esquema de cobertura e reduziria conforme evolução clínica e capacidade de voltar à dose habitual.",
    "Também revisaria medicações, infecção, sangramento oculto, anafilaxia e disfunção cardíaca como diagnósticos diferenciais."
  ],
  pontosObrigatorios: [
    "Uso crônico de corticoide suprime eixo adrenal.",
    "Hipotensão refratária é sinal importante.",
    "Hidrocortisona não deve atrasar em instabilidade.",
    "Corrigir hipoglicemia.",
    "Investigar causas associadas de choque.",
    "Planejar redução posterior para dose basal."
  ],
  errosGraves: [
    "Esperar cortisol sérico para tratar paciente instável.",
    "Tratar apenas com vasopressor em dose crescente.",
    "Esquecer hipoglicemia.",
    "Suspender corticoide no dia da cirurgia.",
    "Não considerar adrenal em hipotensão refratária."
  ],
  aprofundamento: [
    {
      pergunta: "Todo paciente que usou corticoide precisa dose de estresse?",
      resposta: "Não. Depende de dose, duração, tempo desde suspensão e porte cirúrgico. Mas uso crônico em dose moderada ou alta aumenta risco."
    },
    {
      pergunta: "Por que há hipotensão?",
      resposta: "Porque o cortisol é necessário para manter resposta vascular às catecolaminas e estabilidade metabólica durante estresse."
    }
  ],
  fraseOuro: "Hipotensão refratária em usuário crônico de corticoide: lembre da adrenal antes de afogar em noradrenalina."
},
{
  id: "oral-ultra-040",
  titulo: "Paciente com marca-passo e cautério monopolar",
  area: "Cardiovascular",
  dificuldade: "Muito difícil",
  caso: "Homem de 76 anos, portador de marca-passo bicameral por bloqueio atrioventricular total, será submetido à colectomia direita com cautério monopolar. O eletrocardiograma mostra quase todos os batimentos estimulados. O laudo do dispositivo é antigo. A cirurgia não pode ser adiada por obstrução intestinal.",
  pergunta: "A banca pergunta: como você reduz risco de interferência eletromagnética e o que faz se houver inibição do marca-passo?",
  respostaIdeal: [
    "Esse paciente provavelmente é dependente do marca-passo. Cautério monopolar pode ser interpretado pelo aparelho como atividade cardíaca e inibir estímulos, causando bradicardia grave ou assistolia.",
    "Eu buscaria informações do dispositivo, modo, dependência, resposta ao magneto e bateria. Se não houver tempo para avaliação formal, preparo como dependente: monitorização contínua, desfibrilador com pás externas disponíveis, fármacos vasoativos e cronotrópicos prontos, e plano para estimulação externa.",
    "A estratégia inclui usar cautério bipolar quando possível, rajadas curtas de cautério, menor energia efetiva, posicionar placa de dispersão para que a corrente não atravesse gerador e cabos, e considerar programação assíncrona ou magneto se a resposta do dispositivo for conhecida.",
    "Se houver inibição e instabilidade, peço parar cautério, trato bradicardia, uso magneto se apropriado, estimulação externa se necessário e suporte avançado se parada."
  ],
  pontosObrigatorios: [
    "Identificar dependência de marca-passo.",
    "Cautério pode causar inibição por falsa leitura.",
    "Preferir bipolar ou rajadas curtas.",
    "Posicionar placa longe do trajeto do gerador.",
    "Ter desfibrilação e estimulação externa disponíveis.",
    "Conhecer resposta ao magneto antes de confiar nele."
  ],
  errosGraves: [
    "Achar que todo magneto sempre resolve qualquer dispositivo.",
    "Usar cautério contínuo próximo ao gerador sem precaução.",
    "Monitorar apenas eletrocardiograma sem pulso mecânico.",
    "Não ter plano de estimulação externa.",
    "Esquecer reprogramação pós-operatória se realizada."
  ],
  aprofundamento: [
    {
      pergunta: "Qual a diferença para cardiodesfibrilador implantável?",
      resposta: "O magneto geralmente suspende terapias de choque do desfibrilador, mas não garante modo assíncrono de marca-passo. Por isso, dependência de estimulação precisa de plano específico."
    },
    {
      pergunta: "Por que monitorar pulso mecânico?",
      resposta: "Porque o eletrocardiograma pode mostrar artefatos ou espículas sem contração efetiva. Pressão arterial, oximetria ou linha arterial ajudam a confirmar perfusão."
    }
  ],
  fraseOuro: "No paciente dependente de marca-passo, cautério monopolar pode desligar o coração por engano."
}
];

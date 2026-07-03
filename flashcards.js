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
];

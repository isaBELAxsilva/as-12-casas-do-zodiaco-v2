
 function descobrirCDZ(){
    const texto = document.querySelector('#minecraft');
    const texto2 = document.querySelector('#istritifiter');
    const imagem = document.querySelector('#roblox');
    var d = document.querySelector('#data').value;
    var [ano, mes , dia] = d.split('-').map(Number);


    if(data ==  "aquario"  || ((dia >= 21 && dia<=31 && mes ==1) || ( dia>=1 && dia <= 18 && mes ==2))){
        texto.innerHTML = "Aquário";
        texto2.innerHTML = "Camus de Aquário é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. Foi obrigado a lutar contra Hyoga no Santuário. Camus é um cavaleiro bastante poderoso, com habilidade de baixar a temperatura e lançar o Pó de Diamante com grande facilidade. A Execução Aurora é o seu golpe secreto mais poderoso, que emite um frio próximo ao zero absoluto, e foi herdado por Hyoga."
        imagem.setAttribute("src","img/aquario1.png");
        imagem.setAttribute("width","300px");
    }

    
    else if(data == "peixes" || ((dia >= 19 && dia<=29 && mes ==2) || ( dia>=1 && dia <= 20 && mes ==3))){
        texto.innerHTML = "Peixes";
        texto2.innerHTML = "Afrodite de Peixes é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. Usa variações de golpes com rosas, como o Rosas Diabólicas Reais. Sua ideia é de que só um poder supremo pode manter a paz e ordem no mundo, mesmo que esse poder provenha do mal. Por isso, mesmo tendo consciência de que o Grande Mestre servia ao mal, acabou obedecendo suas ordens e matando Daidalos, mestre de Shun. Sua atitude pode não ser a mais exemplar para um Cavaleiro, mas seu propósito de manter a paz na Terra é igual ao de qualquer Cavaleiro."
        imagem.setAttribute("src","img/peixes1.png");
        imagem.setAttribute("width","300px");
    }


    else if(data == "aries" || ((dia >= 21 && dia<=31 && mes ==3) || ( dia>=1 && dia <= 20 && mes ==4))){
        texto.innerHTML = "Áries";
        texto2.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário. Porém, desejando a purificação do local, manteve suas obrigações como Cavaleiro, dedicando-se à restauração das Armaduras em Jamiel, porém seu poder não enfraqueceu, o que pôde ser constatado durante a batalha contra os Espectros."
        imagem.setAttribute("src","img/aries1.png");
        imagem.setAttribute("width","300px");
    }


    else if(data == "touro" || ((dia >= 21 && dia<=30 && mes ==4) || ( dia>=1 && dia <= 20 && mes ==5))){
        texto.innerHTML = "Touro";
        texto2.innerHTML = "Aldebaran é o Cavaleiro de Ouro de Touro do século XX, que protege a Casa de Touro no Santuário. Dotado de uma resistência fora do comum, nem mesmo o Meteoro de Pégaso de Seiya conseguiu causar danos ao seu corpo. O Grande Chifre, alusão ao chifre de um touro bravo, é um golpe lançado quando está engatado com o inimigo. Mas se desferido depois, de longe, sua potência dobra. De personalidade franca e despachada, confia no que sente, sem se preocupar com as aparências ou racionalidades. Lutou com Niobe de Deep quando os Espectros invadiram o Santuário, tendo um fim heroico."
        imagem.setAttribute("src","img/touro1.png");
        imagem.setAttribute("width","300px");
    }


    else if(data == "gemeos" || ((dia >= 21 && dia<=31 && mes ==5) || ( dia>=1 && dia <= 20 && mes ==6))){
        texto.innerHTML = "Gemeos";
        texto2.innerHTML = "Saga de Gêmeos é o irmão gêmeo mais velho de Kanon, pedestinado a se tonar o Cavaleiro de Ouro de Gêmeos do século XX, que antigamente era tido como o próximo sucessor do Grande Mestre, tendo todas as características necessárias para o posto – humanidade, habilidade e força física. Dado como desaparecido há treze anos, no mangá, ele esteve escondido por todo esse tempo sob a máscara do Grande Mestre, depois de assassiná-lo e tomar seu posto como governante do Santuário. No anime, ele toma o lugar do irmão do Grande Mestre, Ares. Seu plano era matar Atena e dominar o mundo. Na verdade, Saga tinha dupla personalidade, oscilando entre extremos do bem e do mal. Dentro dele, esses opostos estavam sempre lutando entre si. Depois de ter seu coração purificado, ele mesmo tira sua própria vida."
        imagem.setAttribute("src","img/gemeos1.png");
        imagem.setAttribute("width","300px");
    }

    
    else if(data == "cancer" || ((dia >= 21 && dia<=30 && mes ==6) || ( dia>=1 && dia <= 22 && mes ==7))){
        texto.innerHTML = "Câncer";
        texto2.innerHTML = "Máscara da Morte de Câncer é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX. Adora lutas, matança e acredita que, para um objetivo maior, alguns sacrifícios são inevitáveis. As paredes da Casa de Câncer são enfeitadas com os rostos das pessoas que foram mortas até hoje por Máscara da Morte. Emite uma aura branca do seu dedo indicador que envia a alma do oponente para a entrada do Mundo dos Mortos – é a Ondas do Inferno, seu golpe secreto."
        imagem.setAttribute("src","img/cancer1.png");
        imagem.setAttribute("width","300px");
    }


    else if(data == "leao" || ((dia >= 23 && dia<=31 && mes ==7) || ( dia>=1 && dia <= 22 && mes ==8))){
        texto.innerHTML = "Leão";
        texto2.innerHTML = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze. Durante a batalha contra os Espectros, enfrentou o exército inimigo de frente e derrubou muitos Espectros, servindo como poder central de ataque no Santuário."
        imagem.setAttribute("src","img/leao1.png");
        imagem.setAttribute("width","300px");
    }

    
    else if(data == "virgem" || ((dia >= 23 && dia<=31 && mes ==8) || ( dia>=1 && dia <= 22 && mes ==9))){
        texto.innerHTML = "Virgem";
        texto2.innerHTML = "Shaka de Virgem é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências. O poder de ir e vir no tempo e espaço impressiona até outros Cavaleiros de Ouro. Tem uma morte heroica sob a destrutiva Exclamação de Atena, criada por Saga, Shura e Camus, mas ele submeteu-se a esse golpe para poder acompanhar Atena no Mundos dos Mortos."
        imagem.setAttribute("src","img/virgem1.png");
        imagem.setAttribute("width","300px");
    }


    else if(data == "libra" || ((dia >= 23 && dia<=30 && mes ==9) || ( dia>=1 && dia <= 22 && mes ==10))){
        texto.innerHTML = "Libra";
        texto2.innerHTML = "Dohko de Libra fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries. Após o fim do conflito e ser incumbido por Atena de vigiar o selo que aprisionava o espectros do Imperador dos Mortos, Dohko ficou recluso nos Cinco Picos Antigos de Rozan até o Século XX, período que passara a ser venerado como Mestre Ancião e, ao mesmo tempo que mantinha sua vigília, treinou Shiryu, que se tornaria o Cavaleiro de Bronze de Dragão. Nesta época, depois de descobrir que Saga de Gêmeos havia tomado o lugar de Shion como Grande Mestre do Santuário, Dohko auxilou seu discípulo junto de seus demais amigos em inúmeras ocasiões a fim de impedir os planos do Cavaleiro renegado de dominar o mundo bem como fora um dos principais articuladores para desmascarar sua farsa."
        imagem.setAttribute("src","img/libra1.png");
        imagem.setAttribute("width","300px");
    }


    else if(data == "escorpiao" || ((dia >= 23 && dia<=31 && mes ==10) || ( dia>=1 && dia <= 21 && mes ==11))){
        texto.innerHTML = "Escorpião";
        texto2.innerHTML = "Miro de Escorpião é um dos personagens principais da série Os Cavaleiros do Zodíaco, criada por Masami Kurumada. É muito poderoso, já que foi capaz de devastar a Ilha de Andrômeda em poucos segundos (no mangá, quem devasta a Ilha de Andrômeda é Afrodite de Peixes). É o mais veloz dentre os Cavaleiros de Ouro, já que sua habilidade suprema, a Agulha Escarlate é uma técnica indefensível."
        imagem.setAttribute("src","img/escorpiao1.png");
        imagem.setAttribute("width","300px");
    }
    

    else if(data == "sagitario" || ((dia >= 22 && dia<=30 && mes ==11) || ( dia>=1 && dia <= 21 && mes ==12))){
        texto.innerHTML = "Sagitário";
        texto2.innerHTML = "Aiolos de Sagitário é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia. Desde então, Aiolos passou a ser considerado um traidor no Santuário, que era comandado por Saga disfarçado de Grande Mestre. Mesmo morto, sua alma continua a controlar sua Armadura de Sagitário, sempre ajudando, nos momentos críticos – emprestou-a a Seiya durante a luta contra Poseidon, por exemplo."
        imagem.setAttribute("src","img/sagitario1.png");
        imagem.setAttribute("width","300px");
    }
    

    else if(data == "capricornio" || ((dia >= 22 && dia<=31 && mes ==12) || ( dia>=1 && dia <= 20 && mes ==1))){
        texto.innerHTML = "Capricórnio";
        texto2.innerHTML = "Shura de Capricórnio é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos. Seu golpe principal é Excalibur, no qual concentra seu cosmo numa rajada cortante de energia, como uma espada. Este golpe tem uma intensidade concentrada fortíssima, e sai na velocidade da luz."
        imagem.setAttribute("src","img/capricornio1.png");
        imagem.setAttribute("width","300px");
    }

    

    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}

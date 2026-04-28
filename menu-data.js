const weeklySpecials = {
  2: {
    day: "Terça-feira",
    dish: "Moqueca de Banana da Terra",
    description: "Acompanha arroz branco e farofinha.",
    juice: "Limonada de coco",
  },
  3: {
    day: "Quarta-feira",
    dish: "Franguinho Assado",
    description: "Acompanha feijão preto, arroz branco e saladinha.",
    juice: "Pink lemonade",
  },
  4: {
    day: "Quinta-feira",
    dish: "Parmegiana de Frango",
    description: "Acompanha espaguete e fritas.",
    juice: "Limonada de jabuticaba",
  },
  5: {
    day: "Sexta-feira",
    dish: "Strogonoff de Frango",
    description: "Acompanha arroz e batata palha.",
    juice: "Pinha Fresh",
  },
  6: {
    day: "Sábado",
    dish: "Salada Rio Branco",
    description:
      "Mix de folhas, frango grelhado, grão-de-bico, cebola roxa, tomate cereja, coentro, cenoura e molho mostarda e mel.",
    juice: "Suco tropical da casa",
  },
};

const menuSections = [
  {
    id: "entradas",
    eyebrow: "Extraído do cardápio original",
    title: "Entradas",
    note: "Para compartilhar",
    art: "branch",
    groups: [
      {
        title: "Entradas",
        columns: 2,
        items: [
          {
            name: "Mix Frege",
            price: "R$ 51,00",
            description:
              "Camarão de bacia, dadinho de tapioca, mini caldinho de mariscos e pastel de vatapá.",
          },
          {
            name: "Caldinhos",
            price: "R$ 13,90",
            description: "Feijoada, marisco e camarão.",
          },
          {
            name: "Casquinha de Siri",
            price: "R$ 16,00",
          },
          {
            name: "Pastel de Vatapá",
            price: "R$ 34,00",
            description: "Recheado com vatapá de camarão da casa.",
            note: "6 unidades.",
          },
          {
            name: "Pastel do Yves",
            price: "R$ 30,00",
            description: "Recheado com queijo coalho e orégano.",
            note: "6 unidades.",
          },
          {
            name: "Batata Frita",
            price: "R$ 23,00",
          },
          {
            name: "Dadinho de Tapioca",
            price: "R$ 29,00",
            note: "6 unidades.",
          },
          {
            name: "Bolinho de Costela",
            price: "R$ 29,00",
            note: "6 unidades.",
          },
          {
            name: "Vinagrete de Polvo",
            price: "R$ 52,00",
            description:
              "Polvo ao molho vinagrete com pão de fermentação natural.",
          },
          {
            name: "Fish and Chips",
            price: "R$ 49,00",
            description:
              "Isca de peixe crocante, molho tártaro e fritas com pó de nori.",
          },
          {
            name: "Camarão Alho e Óleo",
            price: "R$ 60,00",
          },
          {
            name: "Frigideira de Camarão",
            price: "R$ 65,00",
            description:
              "Camarão com casca empanado e salteado na manteiga provençal.",
          },
          {
            name: "Ceviche de Camarão",
            price: "R$ 49,90",
            description:
              "Camarão, manga, cebola roxa, coentro, limão, pimenta-de-cheiro e dedo-de-moça.",
          },
          {
            name: "Filezinho com Fritas",
            price: "R$ 70,00",
            description: "Filezinho em tiras ao molho rôti e fritas.",
          },
          {
            name: "Carne de Sol da Casa",
            price: "R$ 59,00",
            description: "Fonduta de queijo coalho e macaxeira frita.",
          },
          {
            name: "Picanha Suína",
            price: "R$ 70,00",
            description:
              "Picanha suína grelhada com cebola confitada na manteiga de garrafa, farofa de banana e vinagrete cítrico.",
          },
          {
            name: "Costelinha Suína",
            price: "R$ 55,00",
            description: "Costelinha suína com barbecue e batata frita.",
          },
          {
            name: "Arrumadinho do Brazinho",
            price: "R$ 59,00",
            description: "Charque e carne de sol.",
            note: "Prato para 2 pessoas.",
          },
          {
            name: "Frango a Passarinho",
            price: "R$ 45,00",
          },
        ],
      },
    ],
  },
  {
    id: "almoco-principal",
    eyebrow: "Para 1 ou 2 pessoas",
    title: "Almoço Principal",
    note: "Pratos da casa",
    art: "cup",
    groups: [
      {
        title: "Principais",
        columns: 2,
        items: [
          {
            name: "Peixada Pernambucana",
            price: "R$ 150,00",
            description: "Acompanha arroz branco e pirão de peixe.",
            note: "Prato para 2 pessoas.",
          },
          {
            name: "Moqueca de Peixe com Camarão",
            price: "R$ 170,00",
            description:
              "Acompanha arroz de coentro, pirão e farofa de dendê.",
            note: "Prato para 2 pessoas.",
          },
          {
            name: "Polvo à Lagareiro",
            price: "R$ 140,00",
            description:
              "Polvo grelhado no azeite com batata, brócolis ao alho e arroz branco.",
            note: "Prato para 2 pessoas.",
          },
          {
            name: "Vatapá de Camarão",
            price: "R$ 140,00",
            description: "Acompanha arroz branco e farofa.",
            note: "Prato para 2 pessoas.",
          },
          {
            name: "Pescada em Crosta de Castanha e Ervas",
            price: "R$ 140,00",
            description:
              "Acompanha purê de jerimum, tomates confit e arroz de alho e salsa.",
            note: "Prato para 2 pessoas.",
          },
          {
            name: "Linguine Camarones",
            price: "R$ 75,00",
            description:
              "Camarões com linguine, alho, tomate confit e ervas.",
            note: "Prato para 1 pessoa.",
          },
          {
            name: "Moqueca de Banana da Terra",
            price: "R$ 35,00",
            description: "Acompanha arroz branco e farofinha.",
            note: "Prato para 1 pessoa.",
          },
          {
            name: "Salada Frege",
            price: "R$ 51,00",
            description:
              "Folhas diversas, quinoa branca e vermelha, cebola roxa, manga, coentro, tomate cereja, camarões e molho teriyaki.",
            note: "Prato para 1 pessoa.",
          },
          {
            name: "Carne de Sol com Queijo Coalho",
            price: "R$ 150,00",
            description: "Acompanha baião de dois cremoso e farofa de ovos.",
            note: "Prato para 2 pessoas.",
          },
        ],
      },
      {
        title: "Menu Kids | R$ 31,90",
        items: [
          {
            name: "Peito de Frango Grelhado",
            description: "Arroz de brócolis com cenoura e batata frita.",
          },
          {
            name: "Picadinho de Carne",
            description:
              "Acompanha espaguete ao molho de tomate, manteiga de ervas ou arroz branco e fritas.",
          },
        ],
      },
      {
        type: "blocks",
        title: "Menu Especial",
        note: "Entrada, prato principal e sobremesa",
        blocks: [
          {
            label: "Entrada",
            text:
              "Filé de agulha crocante com tártaro de banana da terra ou carne de sol com fonduta de queijo coalho e macaxeira frita ou mini salada Rio Branco.",
          },
          {
            label: "Principal",
            items: [
              {
                name: "Franguinho Assado",
                price: "R$ 49,90",
                description:
                  "Acompanha feijão preto, arroz branco e salada.",
              },
              {
                name: "Copa-Lombo Assado",
                price: "R$ 59,90",
                description: "Arroz de brócolis e salada coleslaw.",
              },
              {
                name: "Carne de Sol com Queijo Coalho",
                price: "R$ 69,90",
                description: "Acompanha baião de dois e farofa de ovos.",
              },
              {
                name: "Vatapá de Camarão",
                price: "R$ 69,90",
                description: "Acompanha arroz branco e farofa.",
              },
            ],
          },
          {
            label: "Sobremesa",
            text:
              "Panacota de coco com geleia cítrica de manga e maracujá ou pudim de leite.",
          },
        ],
      },
    ],
  },
  {
    id: "executivo",
    eyebrow: "Terça a domingo",
    title: "Executivo",
    note: "11h às 15h",
    art: "branch",
    groups: [
      {
        title: "Prato Executivo | R$ 29,90",
        note: "Prato + suco do dia",
        items: [
          {
            name: "Salada Rio Branco",
            description:
              "Mix de folhas, frango grelhado, grão-de-bico, cebola roxa, tomate cereja, coentro, cenoura e molho mostarda e mel.",
          },
          {
            name: "Moqueca de Banana da Terra",
            description: "Acompanha arroz branco e farofinha.",
          },
          {
            name: "Franguinho Assado",
            description: "Acompanha feijão preto, arroz branco e saladinha.",
          },
          {
            name: "Parmegiana de Frango",
            description: "Espaguete e fritas.",
          },
          {
            name: "Strogonoff de Frango",
            description: "Arroz e batata palha.",
          },
        ],
      },
      {
        title: "Outras Opções",
        columns: 2,
        items: [
          {
            name: "Copa-Lombo Assado",
            price: "R$ 37,00",
            description: "Arroz de brócolis e salada coleslaw.",
          },
          {
            name: "Picanha Suína",
            price: "R$ 42,00",
            description:
              "Com farofa de bacon e banana e arroz carioca.",
          },
          {
            name: "Medalhão de Filé ao Molho Rôti",
            price: "R$ 55,00",
            description:
              "Arroz cremoso e farofa crocante de panko.",
          },
          {
            name: "Carne de Sol com Queijo Coalho",
            price: "R$ 55,00",
            description: "Baião de dois cremoso e farofa de ovos.",
          },
          {
            name: "Arrumadinho de Carne de Sol",
            price: "R$ 42,00",
          },
          {
            name: "Moqueca de Camarão",
            price: "R$ 45,00",
            description: "Acompanha arroz, pirão e farofa.",
          },
          {
            name: "Vatapá de Camarão",
            price: "R$ 45,00",
            description: "Acompanha arroz branco e farofa.",
          },
          {
            name: "Filé de Tilápia",
            price: "R$ 45,00",
            description:
              "Na manteiga de castanha, arroz de brócolis e salada.",
          },
          {
            name: "Salmão",
            price: "R$ 55,00",
            description: "Grelhado com legumes e arroz de castanha.",
          },
        ],
      },
      {
        title: "Sobremesas",
        items: [
          {
            name: "Banoffe",
            price: "R$ 22,90",
            description:
              "Banana, chantilly e uma espessa calda de caramelo sobre base de biscoito amanteigado.",
          },
          {
            name: "Pudim de Leite",
            price: "R$ 18,00",
          },
          {
            name: "Panacota de Coco com Geleia de Frutas Amarelas",
            price: "R$ 14,00",
          },
        ],
      },
      {
        title: "Porção Extra",
        columns: 2,
        items: [
          {
            name: "Feijão Preto",
            price: "R$ 12,00",
          },
          {
            name: "Pirão de Peixe",
            price: "R$ 12,00",
          },
          {
            name: "Arroz Branco",
            price: "R$ 6,90",
          },
          {
            name: "Arroz Carioca",
            price: "R$ 7,90",
          },
          {
            name: "Arroz de Brócolis",
            price: "R$ 9,90",
          },
          {
            name: "Farofa",
            price: "R$ 6,90",
          },
          {
            name: "Farofa de Dendê",
            price: "R$ 7,90",
          },
          {
            name: "Batata Frita",
            price: "R$ 12,00",
          },
          {
            name: "Pão em Fatias",
            price: "R$ 7,90",
          },
        ],
      },
    ],
  },
  {
    id: "bebidas",
    eyebrow: "Bar do Frege",
    title: "Bebidas",
    note: "Bebidas, cervejas e drinks autorais",
    art: "martini",
    groups: [
      {
        title: "Bebidas",
        items: [
          { name: "Água sem Gás", price: "R$ 6,90" },
          { name: "Água com Gás", price: "R$ 6,90" },
          { name: "Refrigerante em Lata", price: "R$ 8,90" },
          { name: "Água Tônica", price: "R$ 8,90" },
          { name: "Red Bull", price: "R$ 16,90" },
          { name: "Suco (copo)", price: "R$ 9,90" },
          { name: "Água de Coco (copo)", price: "R$ 9,50" },
          { name: "Café Expresso", price: "R$ 7,90" },
        ],
      },
      {
        title: "Cervejas 600 ml",
        items: [
          { name: "Colorado", price: "R$ 28,00" },
          { name: "Stella Artois", price: "R$ 19,00" },
          { name: "Spaten", price: "R$ 18,00" },
          { name: "Original", price: "R$ 17,00" },
          { name: "Budweiser", price: "R$ 17,00" },
          { name: "Brahma Chopp", price: "R$ 16,00" },
        ],
      },
      {
        title: "Cervejas Long Neck",
        items: [
          { name: "Corona Extra", price: "R$ 16,00" },
          { name: "Stella Pure Gold (sem glúten)", price: "R$ 15,00" },
          { name: "Stella Artois", price: "R$ 15,00" },
          { name: "Spaten", price: "R$ 14,00" },
          { name: "Budweiser", price: "R$ 13,00" },
        ],
      },
      {
        title: "Cervejas Zero",
        items: [
          { name: "Corona Zero Long Neck", price: "R$ 16,00" },
          { name: "Budweiser Zero Long Neck", price: "R$ 13,00" },
        ],
      },
      {
        title: "Drinks",
        items: [
          {
            name: "Capibaribe Spritz",
            price: "R$ 29,50",
            description:
              "Vodka Ketel One, xarope de framboesa, limão e espumante brut.",
          },
          {
            name: "Marco Zero Nº 2",
            price: "R$ 25,00",
            description: "Gin importado, licor de caju e soda de coco.",
          },
          {
            name: "Porto Frege",
            price: "R$ 27,00",
            description:
              "Whisky JW Red, xarope de mel e canela, cajuína e limão tahiti.",
          },
          {
            name: "Abacaxi vs Rosimary",
            price: "R$ 25,00",
            description:
              "Infusão de Smirnoff e casca de cítricos, limão, xarope de abacaxi e cordial de alecrim salgado.",
          },
        ],
      },
    ],
  },
  {
    id: "classicos",
    eyebrow: "Coquetelaria",
    title: "Clássicos",
    note: "Sem álcool e clássicos do bar",
    art: "shell",
    groups: [
      {
        title: "Álcool Free",
        items: [
          {
            name: "Limonada de Coco",
            price: "R$ 16,50",
            description: "Água mineral, sumo de limão e purê de coco.",
          },
          {
            name: "Limonada de Jabuticaba",
            price: "R$ 16,50",
            description:
              "Água mineral, sumo de limão e purê de jabuticaba.",
          },
          {
            name: "Pink Lemonade",
            price: "R$ 16,50",
            description:
              "Água mineral, sumo de limão e Monin cranberry.",
          },
          {
            name: "Pinha Fresh",
            price: "R$ 16,50",
            description: "Água de coco, abacaxi e gengibre.",
          },
        ],
      },
      {
        title: "Clássicos dos Clássicos",
        columns: 2,
        items: [
          { name: "Caipirinha", price: "R$ 16,00" },
          {
            name: "Caipirosca",
            price: "R$ 20,00",
            description: "Vodka e frutas da estação.",
            note: "Consultar disponibilidade.",
          },
          {
            name: "Moscow Mule",
            price: "R$ 27,00",
            description:
              "Vodka Ketel One, xarope de gengibre, sumo de limão e espuma de gengibre e limão.",
          },
          {
            name: "Fitzgerald",
            price: "R$ 27,00",
            description:
              "Gin Gordon's, sumo de limão, xarope simples e dashes de angostura.",
          },
          {
            name: "Mojito",
            price: "R$ 25,00",
            description: "Rum, xarope simples, hortelã e água com gás.",
          },
          {
            name: "Mojito Havana Club",
            price: "R$ 32,00",
            description:
              "Rum Havana Club Añejo 3 anos, xarope simples, hortelã e água com gás.",
          },
          {
            name: "Cuba-Libre",
            price: "R$ 20,00",
            description: "Rum Bacardi e refrigerante de cola.",
          },
          {
            name: "Cuba-Libre Havana Club",
            price: "R$ 30,00",
            description: "Rum Havana Club e refrigerante de cola.",
          },
          {
            name: "Negroni",
            price: "R$ 32,00",
            description: "Gin Tanqueray, Campari e Vermouth Rosso.",
          },
          {
            name: "Margarita",
            price: "R$ 29,00",
            description: "Tequila, licor de laranja e sumo de limão.",
          },
          {
            name: "Aperol Spritz",
            price: "R$ 29,00",
            description: "Aperol, espumante e água com gás.",
          },
          {
            name: "Gin Tônica",
            price: "R$ 23,00",
          },
          {
            name: "Gin Tropical",
            price: "R$ 27,00",
          },
        ],
      },
    ],
  },
  {
    id: "destilados",
    eyebrow: "Dose e garrafa",
    title: "Destilados",
    note: "Destilados e cachaças",
    art: "bottle",
    groups: [
      {
        title: "Destilados",
        columns: 2,
        items: [
          { name: "Vodka Smirnoff", price: "R$ 12 (dose) | R$ 120 (garrafa)" },
          { name: "Vodka Ketel One", price: "R$ 20 (dose) | R$ 240 (garrafa)" },
          {
            name: "Vodka Ketel One Botanic",
            price: "R$ 23 (dose) | R$ 260 (garrafa)",
          },
          { name: "Vodka Absolut", price: "R$ 20 (dose) | R$ 210 (garrafa)" },
          { name: "Vodka Cîroc", price: "R$ 35 (dose) | R$ 380 (garrafa)" },
          { name: "Rum Bacardi", price: "R$ 12 (dose) | R$ 120 (garrafa)" },
          { name: "Rum Havana Club Añejo 3 Anos", price: "R$ 18 (dose)" },
          { name: "Rum Havana Club Añejo 7 Anos", price: "R$ 30 (dose)" },
          {
            name: "Gin Tanqueray London Dry",
            price: "R$ 23 (dose) | R$ 250 (garrafa)",
          },
          {
            name: "Gin Tanqueray Nº Ten",
            price: "R$ 30 (dose) | R$ 380 (garrafa)",
          },
          { name: "Gin Gordon's", price: "R$ 17 (dose) | R$ 180 (garrafa)" },
          { name: "Whisky Black & White", price: "R$ 12 (dose) | R$ 130 (garrafa)" },
          { name: "Whisky JW Red", price: "R$ 20 (dose) | R$ 230 (garrafa)" },
          {
            name: "Whisky Jack Daniel's",
            price: "R$ 24 (dose) | R$ 260 (garrafa)",
          },
          { name: "Whisky JW Black", price: "R$ 28 (dose) | R$ 310 (garrafa)" },
          { name: "Whisky Old Parr", price: "R$ 26 (dose) | R$ 300 (garrafa)" },
          { name: "Whisky Buchanans", price: "R$ 30 (dose) | R$ 360 (garrafa)" },
          { name: "Tequila José Cuervo", price: "R$ 27 (dose)" },
          { name: "Campari", price: "R$ 14 (dose)" },
          { name: "Licor 43", price: "R$ 20 (dose)" },
          { name: "Licor Baileys", price: "R$ 19 (dose)" },
          { name: "Cointreau", price: "R$ 19 (dose)" },
          { name: "Conhaque Domecq", price: "R$ 10 (dose)" },
        ],
      },
      {
        title: "Cachaças",
        columns: 2,
        items: [
          { name: "Pitú Vitoriosa", price: "R$ 34 (dose)" },
          { name: "Ouro 1", price: "R$ 17 (dose)" },
          { name: "Serra Limpa", price: "R$ 15 (dose)" },
          { name: "Serra Preta", price: "R$ 17 (dose)" },
          { name: "Germana", price: "R$ 15 (dose)" },
          { name: "Pitú Gold", price: "R$ 12 (dose)" },
          { name: "Dadona", price: "R$ 10,00 (dose)" },
          { name: "Seleta", price: "R$ 9,90 (dose)" },
          { name: "Bananinha", price: "R$ 10,00 (dose)" },
          { name: "Famosinha", price: "R$ 10,00 (dose)" },
          { name: "Lisbela", price: "R$ 12 (dose)" },
          { name: "Cachaça de Jambu", price: "R$ 16 (dose)" },
        ],
      },
    ],
  },
  {
    id: "vinhos",
    eyebrow: "Carta de vinhos",
    title: "Vinhos",
    note: "Espumantes, brancos, rosés, tintos e fortificados",
    theme: "wine",
    groups: [
      {
        type: "wine",
        title: "Espumantes",
        countries: [
          {
            country: "Espanha",
            items: [
              { name: "Freixenet Carta Nevada (Demi-sec)", price: "R$ 120" },
              { name: "Freixenet Cordon Negro", price: "R$ 120" },
              { name: "Freixenet Cordon Rosado", price: "R$ 120" },
            ],
          },
          {
            country: "Chile",
            items: [{ name: "Undurraga Brut", price: "R$ 89" }],
          },
        ],
      },
      {
        type: "wine",
        title: "Brancos",
        countries: [
          {
            country: "Argentina",
            items: [
              { name: "Cava Negra Torrontes (Mendoza)", price: "R$ 65" },
              { name: "Tamari La Finca Chardonnay (Mendoza)", price: "R$ 79" },
            ],
          },
          {
            country: "Chile",
            items: [
              {
                name: "Cosecha Tarapacá Sauvignon Blanc (Valle Central)",
                price: "R$ 65",
              },
              {
                name: "Santa Rita 3 Medallas Chardonnay (Valle Central)",
                price: "R$ 65",
              },
            ],
          },
          {
            country: "Espanha",
            items: [
              { name: "Calabuig Macabeo (Valencia)", price: "R$ 109" },
              {
                name: "Esteban Martín Chardonnay/Macabeo (Cariñena)",
                price: "R$ 60",
              },
            ],
          },
          {
            country: "Itália",
            items: [
              {
                name: "Freixenet Pinot Grigio (Garda D.O.C.)",
                price: "R$ 119",
              },
            ],
          },
          {
            country: "Portugal",
            items: [
              { name: "Casal Mendes (Verde)", price: "R$ 79" },
              { name: "Esporão Bico Amarelo (Verde)", price: "R$ 109" },
              { name: "Castiço (Frisante Bairrada)", price: "R$ 79" },
              { name: "Grão Vasco (Dão)", price: "R$ 79" },
              { name: "Esporão Monte Velho (Alentejo)", price: "R$ 102" },
              { name: "Esporão Pé (Alentejo)", price: "R$ 67" },
              { name: "Esporão Reserva (Alentejo)", price: "R$ 230" },
            ],
          },
        ],
      },
      {
        type: "wine",
        title: "Rosés",
        countries: [
          {
            country: "França",
            items: [{ name: "Ted The Mule (Côtes du Rhône)", price: "R$ 98" }],
          },
          {
            country: "Portugal",
            items: [
              { name: "JP Azeitão (Península de Setúbal)", price: "R$ 75" },
              { name: "Mateus (Bairrada)", price: "R$ 75" },
            ],
          },
        ],
      },
      {
        type: "wine",
        title: "Tintos",
        countries: [
          {
            country: "Argentina",
            items: [
              { name: "Alta Vista Classic Vive Malbec (Mendoza)", price: "R$ 105" },
              { name: "Las Perdices Chac Chac Malbec (Mendoza)", price: "R$ 68" },
              {
                name: "Tamari La Finca Cabernet Sauvignon (Mendoza)",
                price: "R$ 80",
              },
            ],
          },
          {
            country: "Chile",
            items: [
              {
                name: "Casas Del Toqui Reserva Cabernet (Valle Cachapoal)",
                price: "R$ 68",
              },
              {
                name: "Foye Reserva Cabernet Sauvignon (Valle Maule)",
                price: "R$ 65",
              },
              {
                name: "Santa Rita 3 Medallas Merlot (Valle Central)",
                price: "R$ 65",
              },
              {
                name: "Santa Rita Reserva Especial Pinot Noir (Aconcágua)",
                price: "R$ 80",
              },
              {
                name: "Tarapacá Reserva Cabernet Sauvignon (Alto Maipo)",
                price: "R$ 105",
              },
              {
                name: "Tarapacá Reserva Carmenère (Valle del Maipo)",
                price: "R$ 105",
              },
            ],
          },
          {
            country: "Espanha",
            items: [
              {
                name: "Calabuig Macabeo Tempranillo (Valencia)",
                price: "R$ 115",
              },
              {
                name: "Esteban Martín Garnacha/Syrah (Cariñena)",
                price: "R$ 65",
              },
            ],
          },
          {
            country: "França",
            items: [{ name: "Ted The Mule (Rhône)", price: "R$ 98" }],
          },
          {
            country: "Itália",
            items: [
              {
                name: "Cecchi Chianti Torrebona (Toscana)",
                price: "R$ 128",
              },
              {
                name: "Giacondi Primitivo Puglia (Puglia)",
                price: "R$ 120",
              },
            ],
          },
          {
            country: "Portugal",
            items: [
              {
                name: "Bacalhôa JP Azeitão (Península de Setúbal)",
                price: "R$ 75",
              },
              { name: "Grão Vasco (Dão)", price: "R$ 80" },
              { name: "Esporão Pé (Alentejo)", price: "R$ 68" },
              { name: "Esporão Reserva (Alentejo)", price: "R$ 280" },
              { name: "Tuella (Douro)", price: "R$ 98" },
            ],
          },
        ],
      },
      {
        type: "wine",
        title: "Formatos Especiais",
        countries: [
          {
            country: "Chile",
            items: [
              {
                name: "Casas Del Toqui Sauvignon Blanc 375 ml (V. Central)",
                price: "R$ 49",
              },
              {
                name: "Casas Del Toqui Cabernet 375 ml (Valle Central)",
                price: "R$ 49",
              },
              {
                name: "Leon Tarapacá Cabernet 187 ml (Valle Central)",
                price: "R$ 25",
              },
            ],
          },
        ],
      },
      {
        type: "wine",
        title: "Fortificados",
        countries: [
          {
            country: "Portugal",
            items: [
              {
                name: "Porto Ferreira Ruby/Tawny (Douro - cálice 50 ml)",
                price: "R$ 15",
              },
            ],
          },
        ],
      },
    ],
  },
];

export type TTopic = {
    link: string;
    index: number;
    title: string;
    questionCount: number;
    questions: {
        index: number;
        text: string;
        type: "text" | "video" | "image";
        videoLink: null | string;
        imageLinks: null | string[];
        answers: {
            text: string;
            isCorrect: boolean;
        }[];
    }[];
};

export const topics: TTopic[] = [
    {
        link: "http://etesty2.mdcr.cz/Test/TestPractise/26",
        index: 0,
        title: "Teorie pokročilého racionálního řízení a ZBJ",
        questionCount: 30,
        questions: [
            {
                index: 1,
                text: "Schopnost pneumatik přenášet síly na podklad:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "S narůstající rychlostí klesá.",
                        isCorrect: true
                    },
                    {
                        text: "S narůstající rychlostí se nemění.",
                        isCorrect: false
                    },
                    {
                        text: "S narůstající rychlostí roste.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 2,
                text:
                    "Uzávěrka diferenciálu zabezpečí, že se na obě kola jedné nápravy:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Přivede stejný kroutící moment. Nesmí se použít na povrchu s dobrou přilnavostí.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Přivede různý kroutící moment. Nesmí se použít na površích s dobrou přilnavostí.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Přivede různý kroutící moment. Nesmí se použít na površích se špatnou přilnavosti.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 3,
                text: "Diferenciál při průjezdu zatáčkou umožňuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Aby se vnější kola otáčela rychleji než vnitřní.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Aby se vnější kola otáčela pomaleji než vnitřní.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Aby se přenesla větší hnací síla na vnější kola.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 4,
                text: "Akumulátoru škodí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Dlouhé vybíjení vysokým proudem, zkraty, ponechání ve vybitém stavu.",
                        isCorrect: true
                    },
                    {
                        text: "Pokud je nabitý na svou plnou kapacitu.",
                        isCorrect: false
                    },
                    {
                        text: "Častá jízda v noci.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 5,
                text: "Kapacita akumulátoru s klesající teplotou okolí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Klesá.",
                        isCorrect: true
                    },
                    {
                        text: "Nemění se.",
                        isCorrect: false
                    },
                    {
                        text: "Zvyšuje se.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 6,
                text: "Nesprávná geometrie řídicí nápravy:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Má vliv na ovladatelnost vozidla a opotřebení pneumatik.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Má napomoci návratu kol do přímého směru po uvolnění volantu.",
                        isCorrect: false
                    },
                    {
                        text: "Projeví se zvýšenou hlučností odvalování kol.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 7,
                text:
                    "Při krizovém brzdění s nákladním automobilem s návěsem s ABS na mokrém povrchu musí řidič:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Držet přímý směr, brzdový pedál tisknout co největší silou a současně zmáčknout (vyšlápnout) spojku.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Lehce brzdit, aby nedošlo k zablokování kol a držet přímý směr.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Držet přímý směr, držet volant ve 3/4 na 3, brzdový pedál tisknout s citem a spojku nesmí používat.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 8,
                text:
                    "Při krizovém brzdění s nákladním automobilem bez ABS na suchém povrchu musí řidič:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Držet přímý směr, brzdový pedál tisknout co největší silou a současně zmáčknout (vyšlápnout) spojku.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Držet přímý směr, držet volant ve 3/4 na 3, brzdový pedál tisknout s citem a spojku nesmí používat.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Intenzivně brzdit, použít ruční brzdu a držet přímý směr.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 9,
                text:
                    "Při brzdění s nákladním automobilem bez ABS na zasněženém povrchu musí řidič:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Držet přímý směr, brzdový pedál tisknout s citem, v případě prostoru před automobilem může brzdit i přerušovaně, současně musí zmáčknout (vyšlápnout) spojku.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Držet přímý směr, držet volant ve 3/4 na 3, brzdový pedál tisknout s citem a spojku nesmí používat.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Intenzivně brzdit, použít ruční brzdu a držet přímý směr.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 10,
                text:
                    "Při krizovém brzdění s nákladním automobilem s návěsem vybaveném ABS na suchém povrchu musí řidič:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Držet přímý směr, brzdový pedál tisknout co největší silou a současně zmáčknout (vyšlápnout) spojku.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Držet přímý směr, držet volant ve 3/4 na 3, brzdový pedál tisknout s citem a spojku nesmí používat.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Intenzivně brzdit, použít ruční brzdu a držet přímý směr.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 11,
                text: "Při přetočení motoru:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Hrozí poškození motoru v důsledku srážky dna pístu s ventilem.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Hrozí poškození elektronického vstřikování paliva.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Mazací systém motoru nedokáže vytvořit mazací film na válcích motoru, v důsledku čeho dojde k zadření pístu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 12,
                text: "Při řízení patrového autobusu musí řidič brát do úvahy:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Vyšší těžiště.",
                        isCorrect: true
                    },
                    {
                        text: "Nižší účinek brzd.",
                        isCorrect: false
                    },
                    {
                        text: "Vyšší zátěž motoru.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 13,
                text: "Způsob řízení autobusu výrazně ovlivňuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Přední a zadní převis karoserie.",
                        isCorrect: true
                    },
                    {
                        text: "Dvoumontáž kol hnací nápravy.",
                        isCorrect: false
                    },
                    {
                        text: "Vybavení pružinovou brzdou.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 14,
                text:
                    "Za předjíždění se nepovažuje, jestliže je hustota provozu v jednom směru jízdy:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Taková, že se vytvoří souvislé proudy vozidel a rychlost vozidel závisí na rychlosti vozidel jedoucí před ním. Vozidla mohou jet v pruzích vedle sebe různou rychlostí.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Taková, že se vytvoří souvislý proud vozidel a rychleji jedoucí vozidlo by bylo zpomaleno při přejíždění z jednoho pruhu do druhého.  ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Taková, že řidič vozidla na dálnici použije k jízdě odstavný pruh.  ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 15,
                text:
                    "Odlehčovací brzdové systémy, např.Telma, je vhodné používat u autobusů:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Zejména pro zvýšení ekonomiky provozu a plynulosti jízdy.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Pouze v situacích, kdy musí řidič maximálně využít brzdy autobusu.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zejména na málo adhezním povrchu pro zvýšení bezpečnosti při brzdění.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 16,
                text:
                    "Odlehčovací brzdové systémy nákladních automobilů (například retardér) je vhodné používat:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Zejména na suché vozovce.",
                        isCorrect: true
                    },
                    {
                        text: "Zejména na málo adhezním povrchu.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zejména současně s provozní brzdou na zasněženém nebo mokrém povrchu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 17,
                text:
                    "Pokud na opravu defektu bezdušové pneumatiky je nezbytné použít duši:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Musí být označení TUBELESS na obou bočnicích odstraněno.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Můžeme takto opravené kolo používat jen do maximální rychlosti 80 km.h-1.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Můžeme takto opravené kolo používat bez dalších omezení.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 18,
                text: "Elektronický stabilizační systém (ESP):",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Napomáhá řidiči udržet vozidlo v požadovaném směru jízdy v rámci fyzikálních zákonů.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Zabrání vozidlu a jízdní soupravě dostat se do smyku.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zabraňuje zablokování kola při brzdění a tím ztrátě adheze mezi kolem a vozovkou v mezních situacích.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 19,
                text: "Defenzivní způsob jízdy:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Znamená, že řidič méně brzdí, méně zrychluje a přeřazuje.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Způsobuje zvýšené opotřebí brzd, protože řidič často brzdí a tím zvyšuje náklady na opravu.",
                        isCorrect: false
                    },
                    {
                        text: "Způsobuje vyšší namáhání podvozku vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 20,
                text: "Délka reakčního času řidiče:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Se mění s fyzickým a duševním stavem řidiče.",
                        isCorrect: true
                    },
                    {
                        text: "Se nemění.",
                        isCorrect: false
                    },
                    {
                        text: "Se mění jen s věkem řidiče.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 21,
                text: "Vozidlo vybavené brzdovým systémem ABS:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Má zaručenou řiditelnost směru také při intenzivním brzdění.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Má zaručenou řiditelnost směru jen při intenzivním brzdění.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Má vždy kratší brzdnou dráhu než vozidlo bez ABS.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 22,
                text:
                    "Při sníženém tlaku v pneumatikách trpí podstatně větším opotřebením:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Kraje běhounu pneumatiky.",
                        isCorrect: true
                    },
                    {
                        text: "Střed běhounu pneumatiky.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Pneumatika se i při sníženém tlaku opotřebovává rovnoměrně.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 23,
                text:
                    "Použití duší do poškozeného pláště TUBELESS, je možno v případě:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Drobných průpichů či drobných poškození patek s následnou ztrátou těsnosti bezdušového pláště. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Odborné opravy větších poškození patek, ale s následnou ztrátou těsnosti bezdušového pláště.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Větších průpichů či větších poškození patek s následnou ztrátou těsnosti bezdušového pláště.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 24,
                text: "Podhuštěná pneumatika:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Snižuje životnost pneumatiky v ujetých kilometrech a zhoršuje také přenos sil mezi pneumatikou a podkladem.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Snižuje životnost pneumatiky v ujetých kilometrech, ale nemá vliv na jízdní vlastnosti vozidla.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zhoršuje jízdní vlastnosti vozidla, ale nemá vliv na životnost pneumatiky.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 25,
                text: "Přerušované brzdění:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Prodlužuje brzdnou dráhu.",
                        isCorrect: true
                    },
                    {
                        text: "Vždy zkracuje brzdnou dráhu.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zkracuje brzdnou dráhu, ale musí být zařazen vysoký rychlostní stupeň.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 26,
                text:
                    "Dodržování a pravidelná kontrola stanoveného tlaku v pneumatikách ovlivňuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Bezpečnost silničního provozu.",
                        isCorrect: true
                    },
                    {
                        text: "Pouze životnost pneumatik.",
                        isCorrect: false
                    },
                    {
                        text: "Neovlivňuje bezpečnost jízdy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 27,
                text: "Defenzivní způsob jízdy:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Zajišťuje minimální spotřebu paliva a přispívá k bezpečnosti silničního provozu.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Používají jen nezkušení řidiči; ti kteří mají určité zkušenosti mohou jezdit dynamicky.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Znamená, že řidič bude záměrně tvořit překážku rychlejším a dravějším a předcházet tak nehodám.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 28,
                text:
                    "Řidič článkového autobusu před zastavením v zastávce (zálivu) opíše přední nápravou malý oblouk směrem od obrubníku, tzv. zvláštní manévr. Tento manévr mu umožní:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Výhled na poslední dveře.",
                        isCorrect: true
                    },
                    {
                        text: "Zastavit všemi koly těsně u obrubníku zálivu.",
                        isCorrect: false
                    },
                    {
                        text: "Nepoškodit bočnice pneumatik.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 29,
                text:
                    "Na rozdíl od ostatních řidičů musí řidič autobusu při jízdě věnovat pozornost navíc:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Dění ve vozidle.",
                        isCorrect: true
                    },
                    {
                        text: "Studiu automapy.",
                        isCorrect: false
                    },
                    {
                        text: "Návěstem před křižovatkou.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 30,
                text: "Kouření při jízdě je zakázáno:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "řidiči autobusu.",
                        isCorrect: true
                    },
                    {
                        text: "řidiči nákladního automobilu.",
                        isCorrect: false
                    },
                    {
                        text: "pouze řidiči motocyklu.",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        link: "http://etesty2.mdcr.cz/Test/TestPractise/27",
        index: 1,
        title: "Uplatnění vnitrostátních a mezinárodních právních ",
        questionCount: 98,
        questions: [
            {
                index: 1,
                text:
                    "Jaká musí být dodržena vzdálenost mezi jednotlivými dopravními prostředky kolony vozidel nebo jízdních souprav přepravujících výbušniny, musí-li kolona zastavit z provozních důvodů?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nejméně 50 m.",
                        isCorrect: true
                    },
                    {
                        text: "Nejméně 30 m.",
                        isCorrect: false
                    },
                    {
                        text: "Nejméně 80 m.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 2,
                text:
                    "Kdo povoluje zvláštní užívání silnic formou přepravy zvlášť těžkých nebo rozměrných předmětů a užívání vozidel, jejichž rozměry nebo hmotnost přesahují míru stanovenou zvláštními předpisy?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Krajské úřady, pokud trasa přepravy nepřesahuje územní obvod jednoho kraje, jinak Ministerstvo dopravy.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Okresní dopravní inspektorát Policie ČR, pokud trasa přepravy nepřesahuje územní obvod okresu, jinak Okresní dopravní inspektorát Policie ČR, v jehož územním obvodu trasa přepravy začíná, v součinnosti s Okresními dopravními inspektoráty v jejichž územním obvodu bude trasa přepravy probíhat.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Obecní úřady v místě, kde přeprava začíná a končí. V případě, že trasa přepravy přesahuje území kraje, je třeba předchozího souhlasu krajského úřadu, příslušného podle sídla dopravce vykonávajícího přepravu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 3,
                text:
                    "Při tomto pokynu policisty je vaší povinností, jako řidiče vozidla z výhledu,  zastavit vozidlo před hranicí křižovatky?",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/2979",
                imageLinks: null,
                answers: [
                    {
                        text: "Ano.",
                        isCorrect: true
                    },
                    {
                        text: "Ne.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 4,
                text:
                    "Jste řidičem vozidla z výhledu. Na vyobrazené křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/2981",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Máte přednost v jízdě před zeleným i žlutým vozidlem. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Musíte dát přednost v jízdě žlutému vozidlu i zelenému vozidlu.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Dáváte přednost v jízdě jen žlutému vozidlu, řidič zeleného vozidla dává přednost v jízdě vám.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 5,
                text:
                    "Jedete v obci jako řidič vozidla z výhledu. Je vaší povinností umožnit autobusu vyjetí ze zastávky?",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/2985",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Ano, snížením rychlosti jízdy, případně i zastavením vozidla.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ne, autobus vyjíždí od okraje pozemní komunikace.Dává přednost všem vozidlům.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Ano, pouze snížením rychlosti nebo změnou směru jízdy, nikoli zastavením vozidla. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 6,
                text:
                    "Jako řidič vozidla z výhledu projedete touto křižovatkou:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/2987",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Jako první. Zelené vozidlo vám musí dát přednost v jízdě.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Jako druhý, protože zelené vozidlo má přednost v jízdě zprava.",
                        isCorrect: true
                    },
                    {
                        text: "Jako první. Vozidlo zprava odbočuje. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 7,
                text: "Jste řidičem vozidla z výhledu. Na křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/2989",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Dáte přednost v jízdě červenému i zelenému vozidlu. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Máte přednost v jízdě před červeným i zeleným vozidlem. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Dáte přednost v jízdě červenému vozidlu. Poslední projede křižovatkou zelené vozidlo.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 8,
                text:
                    "Jste řidičem vozidla z výhledu. Na vyobrazené křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/2991",
                imageLinks: null,
                answers: [
                    {
                        text: "Pojedete jako první. ",
                        isCorrect: true
                    },
                    {
                        text: "Pojedete jako druhý, hned po zeleném vozidle.",
                        isCorrect: false
                    },
                    {
                        text: "Pojedete jako poslední. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 9,
                text: "K přechodu pro chodce je řidič povinen se přibližovat:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/2993",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Takovou rychlostí, aby mohl bezpečně zastavit vozidlo před přechodem a umožnit chodci přejít přechod.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Rychlostí nejvýše 50 km/h, aby mohl kdykoliv zabrzdit, pokud by chodec vstoupil na přechod pro chodce. Chodce může ohrozit. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Rychlostí nejvýše 50km/h. Chodec na přechodu nemá přednost před motorovými vozidly.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 10,
                text:
                    "Jste řidičem vozidla z výhledu. Na vyobrazené křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/2997",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Projedete jako první, protože jste na hlavní pozemní komunikaci. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Projedete jako druhý, po protijedoucím žlutém vozidle, kterému musíte dát přednost v jízdě.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Projedete jako druhý, dáváte přednost v jízdě červenému vozidlu.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 11,
                text: "Jako řidič vozidla z výhledu:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/2999",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Jste povinen dát přednost vozidlu přijíždějícímu zleva.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Můžete pokračovat v jízdě křižovatkou. Neodbočujete.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Máte přednost v jízdě před řidičem přijíždějícím zleva. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 12,
                text:
                    "Můžete jako řidič vozidla z výhledu vjet do křižovatky před vozidlem, které přijíždí zleva?",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3003",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Nemohu. Vozidla označená zvláštním výstražným světlem modré barvy mají přednost před ostatními vozidly.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Mohu. Druhé vozidlo přijíždí zleva a musí mi proto dát přednost v jízdě.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Mohu, protože jsem na hlavní pozemní komunikaci a odbočuji vpravo. Vozidlo neomezuji.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 13,
                text: "Jste řidičem vozidla z výhledu. Při jízdě křižovatkou:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3005",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Zelené vozidlo nemá přednost před vámi. Odbočuje vlevo.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Dáte přednost v jízdě zelenému vozidlu, protože přijíždí zprava.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Máte přednost v jízdě před zeleným vozidlem, protože přijíždí zleva.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 14,
                text:
                    "Jste řidičem vozidla z výhledu. Na vyobrazené křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3007",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Máte přednost v jízdě před protijedoucím automobilem i vozidlem vlevo.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Počkáte, až protijedoucí automobil odbočí, protože má přednost v jízdě.",
                        isCorrect: false
                    },
                    {
                        text: "Obě vozidla mají přednost v jízdě před vámi.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 15,
                text:
                    "Jste řidičem vozidla z výhledu. Při jízdě křižovatkou, která je znázorněna na obrázku:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3009",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Máte přednost v jízdě před zeleným vozidlem, protože zelené vozidlo přijíždí zprava.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Dáte přednost v jízdě zelenému vozidlu, protože zelené vozidlo přijíždí zprava.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Máte přednost v jízdě před zeleným vozidlem, protože zelené vozidlo odbočuje vlevo.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 16,
                text:
                    "Blížíte se k místu, kde si děti hrají na chodníku. Jak se musíte zachovat?",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3011",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Včas zpomalit jízdu a být připraven i prudce brzdit. Hrozí vběhnutí dítěte do vozovky.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Pokračovat v jízdě stejnou rychlostí, abych neomezil vozidla za sebou.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Dávat včas výstražné zvukové znamení a pokračovat stejnou rychlostí v jízdě.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 17,
                text:
                    "Jste řidičem vozidla z výhledu. Ve vyobrazené dopravní situaci:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3013",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Můžete odbočit vlevo, aniž byste někomu musel(-a) dávat přednost. Chodec je povinen umožnit vozidlu odbočit.",
                        isCorrect: false
                    },
                    {
                        text:
                            'Nesmíte odbočit vlevo, neboť zelený plný kruhový světelný signál "Volno" umožňuje projet křižovatku pouze v přímém směru.',
                        isCorrect: false
                    },
                    {
                        text:
                            "Smíte odbočit vlevo, ale musíte dát přednost chodcům přecházejícím ve volném směru po přechodu pro chodce.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 18,
                text:
                    "Jste řidičem vozidla z výhledu. Na vyobrazené křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3015",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Musíte dát přednost v jízdě oběma přijíždějícím vozidlům. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Musíte dát přednost v jízdě pouze protijedoucímu červenému vozidlu. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Projedete křižovatkou současně se zeleným vozidlem. Míjíte se vpravo. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 19,
                text:
                    "Jste řidičem vozidla z výhledu. Na vyobrazené křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3017",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Nedáváte přednost žádnému vozidlu. Jste na hlavní pozemní komunikaci. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Po najetí do křižovatky zastavíte a dáváte přednost v jízdě protijedoucímu žlutému vozidlu. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Dáváte přednost v jízdě červenému nákladnímu vozidlu; přijíždí po hlavní pozemní komunikaci zprava.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 20,
                text:
                    "Jste řidičem vozidla z výhledu. Na vyobrazené křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3019",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Máte přednost pře všemi vozidly v křižovatce. Jste na hlavní pozemní komunikaci.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Přednost v jízdě má modré vozidlo, až  opustí křižovatku, projedete křižovatkou současně s červeným vozidlem.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Projedete současně s protijedoucím červeným vozidlem. Modrému vozidlu nedáváte přednost.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 21,
                text: "Jste řidičem vozidla z výhledu. Na této křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3021",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Pojedete jako první, současně s modrým vozidlem přijíždějícímu zprava. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Pojedete současně s protijedoucím červeným vozidlem.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Dáváte přednost modrému vozidlu zprava. Poté pokračujete v jízdě.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 22,
                text: "Jste řidičem vozidla z výhledu. Na křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3027",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Dáte přednost v jízdě modrému automobilu a pak projedete křižovatkou. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Máte přednost v jízdě před modrým vozidlem i před vozidlem vlevo.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Přednost vám musí dát obě vozidla přijíždějící zleva i zprava.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 23,
                text: "Jste řidičem vozidla z výhledu. Na této křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3029",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Máte přednost v jízdě před tramvají, ale musíte dát přednost v jízdě zelenému vozidlu.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Máte přednost v jízdě před tramvají i zeleným vozidlem.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Přednost v jízdě má vždy tramvaj, jako prostředek hromadné dopravy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 24,
                text: "Jste řidičem vozidla z výhledu. Na křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3031",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Přednost v jízdě má nákladní vozidlo a to před protijedoucím vozidlem a vámi.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Projedete současně s protijedoucím vozidlem. Pak pojede nákladní vozidlo.",
                        isCorrect: false
                    },
                    {
                        text:
                            "První projede protijedoucí vozidlo, pak nákladní vozidlo a nakonec vy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 25,
                text:
                    "Jste řidičem vozidla z výhledu. Křižovatkou projedete jako:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3033",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Poslední, po projetí modrého a zeleného vozidla.",
                        isCorrect: true
                    },
                    {
                        text: "První, před modrým a zeleným vozidlem.",
                        isCorrect: false
                    },
                    {
                        text:
                            "V pořadí jako druhý, po modrém vozidle ale před zeleným vozidlem.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 26,
                text:
                    "Jste řidičem vozidla z výhledu. Křižovatkou projedete jako:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3035",
                imageLinks: null,
                answers: [
                    {
                        text: "Poslední.",
                        isCorrect: true
                    },
                    {
                        text: "První.",
                        isCorrect: false
                    },
                    {
                        text: "V pořadí jako druhý, po modrém vozidle. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 27,
                text:
                    "Jste řidičem vozidla z výhledu. Křižovatkou projedete jako:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3039",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Poslední, po projetí modrého a zeleného vozidla.",
                        isCorrect: true
                    },
                    {
                        text: "První, před modrým a zeleným vozidlem.",
                        isCorrect: false
                    },
                    {
                        text:
                            "V pořadí jako druhý, po zeleném vozidle ale před modrým vozidlem.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 28,
                text:
                    "Která z vyobrazených dopravních značek neupravuje přednost?",
                type: "image",
                videoLink: null,
                imageLinks: [
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/P1_6336035495443.jpg",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/P2_6336035495447.jpg",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/A3 _6336035495448.jpg"
                ],
                answers: [
                    {
                        text: ".",
                        isCorrect: false
                    },
                    {
                        text: ".",
                        isCorrect: false
                    },
                    {
                        text: ".",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 29,
                text: "Která z těchto dopravních značek zakazuje zastavení?",
                type: "image",
                videoLink: null,
                imageLinks: [
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/B28_6336035516414.jpg",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/B29_6336035516414.jpg",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/C12b_6336035516416.jpg"
                ],
                answers: [
                    {
                        text: ".",
                        isCorrect: true
                    },
                    {
                        text: ".",
                        isCorrect: false
                    },
                    {
                        text: ".",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 30,
                text:
                    "Která z vyobrazených dodatkových tabulek vyznačuje úsek platnosti dopravní značky, pod kterou je umístěna:",
                type: "image",
                videoLink: null,
                imageLinks: [
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E8d_6336035608323.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E2c_6336035608323.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E7b_6336035608323.gif"
                ],
                answers: [
                    {
                        text: ".",
                        isCorrect: true
                    },
                    {
                        text: ".",
                        isCorrect: false
                    },
                    {
                        text: ".",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 31,
                text:
                    "Označte dodatkovou tabulku, která vyznačuje vzdálenost k místu, od kterého platí značka, pod níž je tato dodatková tabulka umístěna.",
                type: "image",
                videoLink: null,
                imageLinks: [
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E3b_6336035720626.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E4_6336035720630.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E8d_6336035720632.gif"
                ],
                answers: [
                    {
                        text: ".",
                        isCorrect: true
                    },
                    {
                        text: ".",
                        isCorrect: false
                    },
                    {
                        text: ".",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 32,
                text:
                    "Která z vyobrazených dopravních značek označuje hlavní pozemní komunikaci.",
                type: "image",
                videoLink: null,
                imageLinks: [
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/P1_6336036260389.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/A3 _6336036260390.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/P3_6336036260393.gif"
                ],
                answers: [
                    {
                        text: ".",
                        isCorrect: true
                    },
                    {
                        text: ".",
                        isCorrect: false
                    },
                    {
                        text: ".",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 33,
                text:
                    "Která z vyobrazených dodatkových tabulek vyznačuje skutečný tvar křižovatky a současně i hlavní a vedlejší pozemní komunikaci:",
                type: "image",
                videoLink: null,
                imageLinks: [
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E8d_6336036272634.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E2c_6336036272636.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E7b_6336036272639.gif"
                ],
                answers: [
                    {
                        text: ".",
                        isCorrect: false
                    },
                    {
                        text: ".",
                        isCorrect: true
                    },
                    {
                        text: ".",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 34,
                text:
                    "Která z vyobrazených dodatkových tabulek vyznačuje směr k místu, ke kterému se vztahuje dopravní značka, pod kterou je tato tabulka umístěna:",
                type: "image",
                videoLink: null,
                imageLinks: [
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E8d_6336036283031.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E2c_6336036283032.gif",
                    "http://etesty2.mdcr.cz/Vestnik/GetImage/E7b_6336036283032.gif"
                ],
                answers: [
                    {
                        text: ".",
                        isCorrect: false
                    },
                    {
                        text: ".",
                        isCorrect: false
                    },
                    {
                        text: ".",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 35,
                text: "Jsou v rámci zemí Evropy sjednocené dopravní značky?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "V Evropě zatím nejsou úplně sjednocené dopravní značky.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ano, všechny dopravní značky jsou v rámci Evropy stejné.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Dopravní značky jsou stejné jen v členských zemích EU.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 36,
                text: "Jezdí se ve všech státech Evropy vpravo?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Ne, vlevo se jezdí ve Velké Británii a na Maltě.",
                        isCorrect: true
                    },
                    {
                        text: "Ano.",
                        isCorrect: false
                    },
                    {
                        text: "Ne, jen ve státech Evropské unie.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 37,
                text: "Na přepravu do Velké Británie je potřebné využít:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Trajekt nebo Eurotunel pod Lamanšským průlivem, který přepravuje nákladní automobily po železnici.",
                        isCorrect: true
                    },
                    {
                        text: "Trajekty z přístavu Hamburg.",
                        isCorrect: false
                    },
                    {
                        text: "Podmořský tunel pro silniční dopravu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 38,
                text: "Na která vozidla se uplatňuje mýto v Rakousku?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Vozidla s celkovou hmotností nad 3,5 t.",
                        isCorrect: true
                    },
                    {
                        text: "Vozidla s celkovou hmotností do 12 t.",
                        isCorrect: false
                    },
                    {
                        text: "Vozidla s celkovou hmotností nad 12 t.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 39,
                text:
                    "Kdo je podle zákona o silniční dopravě provozovatelem silniční dopravy (dopravcem)?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Právnická nebo fyzická osoba, která provozuje silniční dopravu podle zákona o silniční dopravě.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Právnická nebo fyzická osoba, která je držitelem silničního nákladního vozidla nebo autobusu.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Právnická nebo fyzická osoba, která provozuje dopravu výhradně pro cizí potřeby.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 40,
                text: "Co se rozumí nebezpečnými věcmi?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Látky a předměty, pro jejichž povahu, vlastnosti nebo stav může být v souvislosti s jejich přepravou ohrožena bezpečnost osob, zvířat a věcí nebo ohroženo životní prostředí. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Látky a předměty, které se pro své nebezpečné vlastnosti nesmějí železniční dopravou přepravovat.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Látky a předměty, které s ohledem na svoje rozměry nebo vlastnosti mohou ohrozit bezpečnost a plynulost silničního provozu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 41,
                text:
                    "Nebezpečné věci se s ohledem na jejich nebezpečné vlastnosti zařazují:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Do přepravních skupin podle druhu přepravy (silniční, železnici, vodní a letecké).",
                        isCorrect: true
                    },
                    {
                        text:
                            "Do skupin podle skupenství (tuhé, kapalné a plynné).",
                        isCorrect: false
                    },
                    {
                        text: "Do tarifních skupin a podskupin.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 42,
                text:
                    "V době přepravního procesu je zakázáno kouření při jízdě:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Řidičům, kteří přepravují osoby v autobusové dopravě.",
                        isCorrect: true
                    },
                    {
                        text: "Řidičům speciálních vozidel.",
                        isCorrect: false
                    },
                    {
                        text: "Všem řidičům motorových vozidel.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 43,
                text:
                    "Za protiprávní jednání při přepravě nebezpečného nákladu se považuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Pokud zboží není povoleno k přepravě.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Pokud je  k přepravě použito vozidlo výroby starší než jsou dva roky.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Pokud vozidlo není označeno voděodolnou barvou s přesným chemickým složením nákladu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 44,
                text: "Eurolicenci musí mít dopravci, kteří provozují:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Mezinárodní autobusovou přepravu cestujících.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Autobusovou přepravu cestujících jako povinnou doložku dopravců na území své země. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Mezinárodní autobusovou přepravu. Eurolicenci je povinen mít každý člen osádky autobusu. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 45,
                text:
                    "Odchylná úprava pracovní doby a doby odpočinku se vztahuje na zaměstnance v pracovní pozici:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Řidič, pomocníci řidiče a průvodčí.",
                        isCorrect: true
                    },
                    {
                        text: "Řidič, pomocníci řidiče",
                        isCorrect: false
                    },
                    {
                        text: "Jen na řidiče.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 46,
                text:
                    "Je celník ve stejnokroji oprávněn zastavit vozidlo v systému elektronického mýtného a podrobit vozidlo kontrole, zda je vybaveno funkčním elektronickým zařízením a zda je evidováno v systému elektronického mýtného?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Ano je oprávněn.",
                        isCorrect: true
                    },
                    {
                        text: "Ano je, ale za přítomnosti Policie ČR.",
                        isCorrect: false
                    },
                    {
                        text: "Není oprávněn.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 47,
                text:
                    "Kdo je povinen uzavřít pojistnou smlouvu o pojištění odpovědnosti za škodu způsobenou provozem vozidla?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Vlastník nebo spoluvlastník tuzemského vozidla nebo řidič cizozemského vozidla, nestanoví-li zákon jinak.",
                        isCorrect: true
                    },
                    {
                        text: "Provozovatel silniční dopravy.",
                        isCorrect: false
                    },
                    {
                        text: "Řidič motorového vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 48,
                text:
                    "Denní pracovní přestávka, v délce nejméně 45 minut, se může rozdělit na dvě části z níž první může být:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nejméně 15 minut.",
                        isCorrect: true
                    },
                    {
                        text: "Nejméně 30 minut.",
                        isCorrect: false
                    },
                    {
                        text: "Nejméně 25 minut.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 49,
                text:
                    "Pokud jsou ve vozidle přítomni nejméně dva řidiči, pak každý z nich musí mít odpočinek:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Nejméně 9 hodin za každé období 30 hodin od skončení denní nebo týdenní doby odpočinku.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Nejméně 9 hodin za každé období 24 hodin od skončení denní nebo týdenní doby odpočinku.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Nejméně 8 hodin za každé období 24 hodin od skončení denní nebo týdenní doby odpočinku.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 50,
                text:
                    "Jste řidičem vozidla z výhledu. Na vyobrazené křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3104",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Jste povinen zastavit vozidlo. Dopravní značka Vám přikazuje povinnost dát přednost v jízdě vozidlu jedoucímu po hlavní pozemní komunikaci.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Máte přednost v jízdě před protijedoucím vozidlem. Vozidlo je na vedlejší pozemní komunikaci.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Řidič protijedoucího vozidla musí vozidlo zastavit. Je Vám povinen dát přednost zprava.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 51,
                text:
                    "Náhradním kolem (ráfkem s pneumatikou), klíčem na matice (šrouby) a zvedákem musí být vybaveny:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Autobusy v mezinárodní přepravě osob.",
                        isCorrect: true
                    },
                    {
                        text: "Autobusy městské hromadné dopravy.",
                        isCorrect: false
                    },
                    {
                        text: "Zásahové požární automobily.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 52,
                text:
                    "V současné době musí být nová vozidla kategorie M2 třídy B a M3 třídy B a III vybavena předepsanými bezpečnostními pásy:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Na všech sedadlech.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Na sedadlech, před kterými není namontováno jiné homologované sedadlo ve stejné ose a stejné výšce.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Na sedadlech, která před sebou mají volný prostor minimálně 0,9 m.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 53,
                text:
                    "Jste řidičem vozidla z výhledu. Na vyobrazené křižovatce:",
                type: "video",
                videoLink: "http://etesty2.mdcr.cz/Content/ImageQuestion/3091",
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Policista Vám dává pokyn „Stůj“. Máte za povinnost zastavit vozidlo před hranicí křižovatky. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Policista Vám dává pokyn „Volno“. Můžete projet křižovatkou.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Policista Vám dává pokyn „Volno pro odbočení vpravo i vlevo“. Můžete projet křižovatkou.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 54,
                text: 'Co se rozumí pod pojmem "běžná denní doba odpočinku"?',
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "doba odpočinku v celkovém trvání nejméně 11 hodin.",
                        isCorrect: true
                    },
                    {
                        text:
                            "doba odpočinku v celkovém trvání nejméně 9 hodin.",
                        isCorrect: false
                    },
                    {
                        text:
                            "doba odpočinku v celkovém trvání kratší než 3 hodiny.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 55,
                text: "Běžnou denní dobu odpočinku je možno rozdělit do:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "dvou časových úseků.",
                        isCorrect: true
                    },
                    {
                        text: "tří časových úseků.",
                        isCorrect: false
                    },
                    {
                        text: "čtyř časových úseků.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 56,
                text: "Doba řízení se počítá:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "od okamžiku, kdy řidič začne řídit vozidlo po době odpočinku nebo přestávce, do okamžiku, kdy začne další doba odpočinku nebo přestávky.",
                        isCorrect: true
                    },
                    {
                        text:
                            "od okamžiku, kdy začne doba odpočinku nebo přestávky do okamžiku skončení další doby odpočinku nebo přestávky.",
                        isCorrect: false
                    },
                    {
                        text:
                            "od okamžiku, kdy řidič začne řídit vozidlo po době odpočinku nebo přestávce do okamžiku, kdy skončí další doba odpočinku nebo přestávky.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 57,
                text:
                    "Učební osnovu pravidelného školení při zdokonalování odborné způsobilosti řidičů podle zákona č. 247/2000 Sb., stanoví:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "vyhláška.",
                        isCorrect: true
                    },
                    {
                        text: "akreditované školicí středisko.",
                        isCorrect: false
                    },
                    {
                        text: "krajský úřad.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 58,
                text:
                    "Zdokonalování odborné způsobilosti řidičů podle zákona č. 247/2000 Sb., může provádět:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "každá autoškola.",
                        isCorrect: false
                    },
                    {
                        text:
                            "fyzická nebo právnická osoba, které byla udělena akreditace k provozování této činnosti.",
                        isCorrect: true
                    },
                    {
                        text:
                            "fyzická nebo právnická osoba, které nebyla udělena akreditace, ale pouze po dobu jednoho roku.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 59,
                text:
                    "Předmětem pravidelného školení při zdokonalování odborné způsobilosti řidičů podle zákona č. 247/2000 Sb., je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "získání nové odborné způsobilosti.",
                        isCorrect: false
                    },
                    {
                        text: "získání klíčových kompetencí v oboru dopravy.",
                        isCorrect: false
                    },
                    {
                        text:
                            "prohloubení znalostí získaných při vstupním školení.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 60,
                text: "Přestávka v řízení je doba:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "během níž nesmí řidič řídit vozidlo, smí však vykonávat jinou práci v souvislosti s přepravou.",
                        isCorrect: false
                    },
                    {
                        text: "během níž zpravidla řidič neřídí vozidlo.",
                        isCorrect: false
                    },
                    {
                        text:
                            "během níž nesmí řidič řídit vozidlo ani vykonávat žádnou jinou práci a která je určena výhradně k jeho zotavení.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 61,
                text: "Doba odpočinku je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "nepřerušená doba, během níž může řidič volně nakládat se svým časem.",
                        isCorrect: true
                    },
                    {
                        text:
                            "doba, během níž musí být řidič k dispozici a být připraven zahájit jízdu nebo jinou práci.",
                        isCorrect: false
                    },
                    {
                        text: "časový úsek, určený k přípravě vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 62,
                text:
                    "Denní doba řízení v pracovním režimu podle Nařízení č. 561/2006:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "nesmí přesáhnout 8 hodin; nejvýše 3 x za týden může být prodloužena na 9 hodin.",
                        isCorrect: false
                    },
                    {
                        text:
                            "nesmí přesáhnout 9 hodin; nejvýše 2 x za týden může být prodloužena na 10 hodin.",
                        isCorrect: true
                    },
                    {
                        text: "nesmí přesáhnout 10 hodin.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 63,
                text:
                    "Celková doba řízení v pracovním režimu podle Nařízení č. 561/2006:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "nesmí za dva po sobě následující týdny přesáhnout 100 hodin.",
                        isCorrect: false
                    },
                    {
                        text:
                            "smí za dva po sobě následující týdny přesáhnout 95 hodin, nesmí však přesáhnout 110 hodin.",
                        isCorrect: false
                    },
                    {
                        text:
                            "nesmí za dva po sobě následující týdny přesáhnout 90 hodin.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 64,
                text:
                    "Nepřerušenou přestávku nejméně 45 minut (pokud nezapočne dobu odpočinku) musí řidič zařadit:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "po 4 hodinách řízení.",
                        isCorrect: false
                    },
                    {
                        text: "po 4,5 hodinách řízení.",
                        isCorrect: true
                    },
                    {
                        text: "po 3,5 hodinách řízení.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 65,
                text: "Přestávku v řízení může řidič trávit:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "výhradně ve stojícím vozidle; v žádném případě mimo vozidlo nebo v pohybujícím se vozidle, které řídí jiný řidič.",
                        isCorrect: false
                    },
                    {
                        text: "výhradně mimo vozidlo.",
                        isCorrect: false
                    },
                    {
                        text:
                            "ve stojícím vozidle nebo mimo vozidlo nebo v pohybujím se vozidle, které řídí jiný řidič.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 66,
                text: "Přestávky v řízení vozidla:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "jsou totéž co denní odpočinek.",
                        isCorrect: false
                    },
                    {
                        text: "nesmí být považovány za denní odpočinek.",
                        isCorrect: true
                    },
                    {
                        text:
                            "mohou být v odůvodněných případech považovány za denní odpočinek.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 67,
                text:
                    "V pracovním režimu podle Nařízení č. 561/2006 smí být přestávka v řízení v trvání nejméně 45 minut nahrazena:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "přestávkou nejméně 15 minut, po které následuje přestávka nejméně 30 minut.",
                        isCorrect: true
                    },
                    {
                        text:
                            "přestávkou nejméně 30 minut, po které následuje přestávka nejméně 15 minut.",
                        isCorrect: false
                    },
                    {
                        text: "třemi přestávkami po 15 minutách.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 68,
                text: "Doba odpočinku podle dohody AETR smí být zkrácena na:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "nejméně 10 za sebou následujících hodin.",
                        isCorrect: false
                    },
                    {
                        text: "nejméně 9 za sebou následujících hodin.",
                        isCorrect: true
                    },
                    {
                        text:
                            "nejméně 8 hodin, které mohou být dále rozděleny.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 69,
                text: "Doba odpočinku podle dohody AETR:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "je doba odpočinku v celkovém trvání nejméně 11 hodin za sebou následujících v průběhu 24 hodin.",
                        isCorrect: true
                    },
                    {
                        text:
                            "je doba odpočinku v celkovém trvání nejméně 12 hodin v průběhu 24 hodin.",
                        isCorrect: false
                    },
                    {
                        text:
                            "je doba odpočinku v celkovém trvání nejméně 8 hodin za sebou následujících v průběhu 24 hodin.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 70,
                text: "Doba odpočinku podle dohody AETR:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "smí být zkrácena na 8 za sebou následujících hodin.",
                        isCorrect: false
                    },
                    {
                        text: "nesmí být zkrácena.",
                        isCorrect: false
                    },
                    {
                        text:
                            "smí být zkrácena na nejméně 9 za sebou následujících hodin.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 71,
                text: "Nařízení č. 561/2006 se nevztahuje na silniční dopravu:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "vozidly používanými pro přepravu cestujících v linkové dopravě, jestliže délka této linky nepřesahuje 50 km.",
                        isCorrect: true
                    },
                    {
                        text:
                            "vozidly používanými pro přepravu cestujících v linkové dopravě, jestliže délka této linky přesahuje 50 km.",
                        isCorrect: false
                    },
                    {
                        text:
                            "vozidly používanými pro přepravu cestujících v linkové dopravě, jestliže délka této linky nepřesahuje 100 km.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 72,
                text: "Doba řízení:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "je doba řízení zaznamenaná záznamovým zařízením nebo ručně.",
                        isCorrect: true
                    },
                    {
                        text:
                            "je doba zaznamenaná pouze záznamovým zařízením (kotoučovým nebo digitálním tachografem).",
                        isCorrect: false
                    },
                    {
                        text:
                            "je doba, do které nepatří čekání na křižovatkách, před železničními přejezdy a v kolonách.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 73,
                text: "Řidič smí být držitelem:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "více karet řidiče.",
                        isCorrect: false
                    },
                    {
                        text: "maximálně dvou platných karet řidiče.",
                        isCorrect: false
                    },
                    {
                        text: "pouze jedné platné karty řidiče.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 74,
                text: "Cestující s omezenou schopností pohybu a orientace:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "mají přednost při obsazování míst k sezení, vyhrazených a označených pro přepravu těchto osob.",
                        isCorrect: true
                    },
                    {
                        text:
                            "mají přednost při obsazování neoznačených míst k sezení. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "musí sedět pouze na místech vyhrazených a označených pro přepravu těchto osob.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 75,
                text: "Cestujícím s omezenou schopností pohybu a orientace:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "musí být v městské hromadné dopravě umožněn nástup do vozidla i výstup z vozidla pouze předními dveřmi.",
                        isCorrect: false
                    },
                    {
                        text:
                            "musí být v městské hromadné dopravě umožněn nástup do vozidla i výstup z vozidla všemi dveřmi, které jsou označeny pro nástup nebo výstup cestujících. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "nemusí být v městské hromadné dopravě umožněn nástup do vozidla i výstup z vozidla všemi dveřmi, které jsou označeny pro nástup nebo výstup cestujících.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 76,
                text:
                    "Za porušení přepravních podmínek lze považovat situaci, kdy cestující při přepravě:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "nastoupil s ručním zavazadlem.",
                        isCorrect: false
                    },
                    {
                        text: "telefonuje.",
                        isCorrect: false
                    },
                    {
                        text:
                            "kouří ve vozidle nebo v prostorách určených pro cestující, v nichž není kouření povoleno.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 77,
                text: "Věc, která nesmí být zavazadlem nebo obsahem zavazadla:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "je zkazitelná potravina.",
                        isCorrect: false
                    },
                    {
                        text: "je zejména nabitá zbraň.",
                        isCorrect: true
                    },
                    {
                        text: "je sklo, porcelán apod.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 78,
                text: "Obsahem zavazadla podle přepravního řádu může být:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "přenosná ocelová láhev s kapalným topným plynem pro domácnost o celkovém obsahu nejvýše 5 kg.",
                        isCorrect: false
                    },
                    {
                        text:
                            "přenosná ocelová láhev s kapalným topným plynem pro domácnost o celkovém obsahu nejvýše 15 kg.",
                        isCorrect: false
                    },
                    {
                        text:
                            "přenosná ocelová láhev s kapalným topným plynem pro domácnost o celkovém obsahu nejvýše 10 kg.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 79,
                text: "Obsahem zavazadla podle přepravního řádu může být:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "nádoba s topnou naftou o celkovém obsahu nejvýše 20 l.",
                        isCorrect: true
                    },
                    {
                        text:
                            "nádoba s topnou naftou o celkovém obsahu nejvýše 10 l.",
                        isCorrect: false
                    },
                    {
                        text:
                            "nádoba s topnou naftou o celkovém obsahu nejvýše 5 l.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 80,
                text: "Cestující může vzít s sebou do vozidla:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "psa i bez náhubku, pokud je vycvičený.",
                        isCorrect: false
                    },
                    {
                        text:
                            "psa, který má bezpečný náhubek, je držen na vodítku nakrátko a nesmí být přepravován na sedadle.",
                        isCorrect: true
                    },
                    {
                        text:
                            "psa, který je držen na vodítku nakrátko; takový pes může být přepravován na sedadle.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 81,
                text: "Z přepravy nelze vyloučit:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "malého psa do 3 kg váhy.",
                        isCorrect: false
                    },
                    {
                        text:
                            "vodicího psa doprovázejícího nevidomou osobu nebo služebního psa.",
                        isCorrect: true
                    },
                    {
                        text: "pouze služebního psa.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 82,
                text:
                    "Cestovní zavazadlo je povinen předepsaným způsobem označit:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "cestující.",
                        isCorrect: true
                    },
                    {
                        text: "řidič.",
                        isCorrect: false
                    },
                    {
                        text: "dopravce.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 83,
                text: "Cestovní zavazadlo musí být cestujícím označeno:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "číslem spoje, kterým je přepravováno.",
                        isCorrect: false
                    },
                    {
                        text:
                            "jménem, příjmením, adresou cestujícího a názvem stanice určení.",
                        isCorrect: true
                    },
                    {
                        text: "pouze jménem a příjmením cestujícího.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 84,
                text: "Živá zvířata se jako cestovní zavazadlo:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "mohou přepravovat i v uzavřených schránách.",
                        isCorrect: false
                    },
                    {
                        text:
                            "mohou přepravovat v klecích a neuzavřených koších.",
                        isCorrect: false
                    },
                    {
                        text:
                            "přepravují výhradně v uzavřených schránách s nepropustným dnem.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 85,
                text:
                    "Cestující ve veřejné silniční osobní dopravě má právo na vrácení jízdného:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "jestliže byl podle přepravního řádu vyloučen z přepravy.",
                        isCorrect: false
                    },
                    {
                        text:
                            "jestliže přeprava nebyla provedena z důvodů na straně dopravce.",
                        isCorrect: true
                    },
                    {
                        text:
                            "jestliže přeprava nebyla provedena z důvodů jiných než na straně dopravce.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 86,
                text:
                    "V městské hromadné dopravě se jízdné za jednotlivou jízdu:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "nevrací.",
                        isCorrect: true
                    },
                    {
                        text: "vrací pouze ze závažných důvodů.",
                        isCorrect: false
                    },
                    {
                        text: "vrací vždy, byla-li přeprava zpožděna.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 87,
                text:
                    "Pokud nebyl cestující ve veřejné silniční dopravě přepraven včas:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "má právo na vrácení jízdného.",
                        isCorrect: false
                    },
                    {
                        text: "nemá právo na náhradu škody.",
                        isCorrect: true
                    },
                    {
                        text: "může uplatnit nárok na náhradu škody.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 88,
                text:
                    "Cestující, který byl vyloučen z přepravy pověřenou osobou:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "má právo na vrácení zaplaceného jízdného včetně příplatků a ceny místenky.",
                        isCorrect: false
                    },
                    {
                        text: "má právo na uhrazení škody.",
                        isCorrect: false
                    },
                    {
                        text:
                            "nemá právo na vrácení zaplaceného jízdného ani ceny místenky nebo příplatků.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 89,
                text: 'Pro dobu řízení se pojmem "týden" rozumí doba:',
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "sedmi po sobě následujících dnů.",
                        isCorrect: false
                    },
                    {
                        text:
                            "od 00:00 hodin v pondělí do 24:00 hodin v neděli.",
                        isCorrect: true
                    },
                    {
                        text:
                            "od 07:00 hodin v pondělí do 22:00 hodin v neděli.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 90,
                text: 'Pojem "Pracovní pohotovost" znamená:',
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "dobu, kdy člen osádky musí být na svém pracovišti a musí být připraven zahájit jízdu, pokračovat v řízení nebo provádět jinou práci.",
                        isCorrect: false
                    },
                    {
                        text:
                            "dobu, kdy člen osádky nemusí být na svém pracovišti, musí však být k dispozici a být připraven zahájit jízdu, pokračovat v řízení nebo provádět jinou práci.",
                        isCorrect: true
                    },
                    {
                        text:
                            "dobu, kdy člen osádky nemusí být na svém pracovišti, musí však být k dispozici a být připraven provádět jinou práci, ne však řídit vozidlo.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 91,
                text:
                    "Povinnost zdokonalování odborné způsobilosti řidičů podle zákona č. 247/2000 Sb., se nevztahuje na řidiče:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "zemědělských a lesnických traktorů.",
                        isCorrect: true
                    },
                    {
                        text: "pouze lesnických traktorů.",
                        isCorrect: false
                    },
                    {
                        text: "pouze zemědělských traktorů.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 92,
                text:
                    "Povinnost zdokonalování odborné způsobilosti řidiče podle zákona č. 247/2000 Sb., se nevztahuje na řidiče",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "vozidel, jejich nejvyšší povolená rychlost nepřesahuje 50 km.h-1.",
                        isCorrect: false
                    },
                    {
                        text:
                            "vozidel, jejich nejvyšší povolená rychlost nepřesahuje 60 km.h-1.",
                        isCorrect: false
                    },
                    {
                        text:
                            "vozidel, jejich nejvyšší povolená rychlost nepřesahuje 45 km.h-1.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 93,
                text:
                    "Výuku a výcvik v rámci zdokonalování odborné způsobilosti řidiče podle zákona č. 247/2000 Sb., může provádět",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "každá autoškola.",
                        isCorrect: false
                    },
                    {
                        text:
                            "fyzická nebo právnická osoba, které byla udělena akreditace k provozování této činnosti.",
                        isCorrect: true
                    },
                    {
                        text:
                            "pouze fyzická nebo právnícká osoba, která vlastní prostory k provozování této činnosti.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 94,
                text:
                    "Akreditaci pro zdokonalování odborné způsobilosti řidičů podle zákona č. 247/2000 Sb., uděluje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "ministerstvo dopravy.",
                        isCorrect: false
                    },
                    {
                        text: "příslušný krajský úřad.",
                        isCorrect: true
                    },
                    {
                        text: "dopravní úřad.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 95,
                text:
                    "Vstupní školení při zdokonalování odborné způsobilosti řidičů podle zákona č. 247/2000 Sb., se provádí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "formou výuky a výcviku a není zakončeno zkouškou řidičů.",
                        isCorrect: false
                    },
                    {
                        text:
                            "formou výuky a výcviku a je zakončeno zkouškou z profesní způsobilosti řidičů.",
                        isCorrect: true
                    },
                    {
                        text:
                            "formou výcviku a přezkoušení z profesní způsobilosti řidičů.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 96,
                text: "Povinnost nesmět ohrozit a nesmět omezit se vztahuje",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "pouze na řidiče.",
                        isCorrect: false
                    },
                    {
                        text:
                            "na všechny účastníky provozu na pozemních komunikacích, kterým je tato povinnost stanovena zákonem.",
                        isCorrect: true
                    },
                    {
                        text: "pouze na chodce.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 97,
                text: "Kolonou vozidel se rozumí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "proud vozidel s výjimkou motocyklů, který při předjíždění nebo objíždění neumožňuje bezpečné zařazení.",
                        isCorrect: false
                    },
                    {
                        text:
                            "souvislý proud více vozidel, u kterého lze předjíždět každé vozidlo jednotlivě, rozestup mezi jednotlivými vozidly při předjíždění nebo objíždění umožňuje bezpečné zařazení.",
                        isCorrect: false
                    },
                    {
                        text:
                            "souvislý proud více vozidel, u kterého nelze předjíždět každé vozidlo jednotlivě, rozestup mezi jednotlivými vozidly při předjíždění nebo objíždění neumožňuje bezpečné zařazení.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 98,
                text:
                    "Na výzvu policisty je řidič povinen podrobit vozidlo kontrole technického stavu vozidla. Zjistí-li se při této kontrole vážná nebo nebezpečná závada",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            " náklady na provedení kontroly je povinen uhradit policii řidič vozidla.",
                        isCorrect: true
                    },
                    {
                        text:
                            "náklady na provedení kontroly hradí pojišťovna, u které je vozidlo pojištěno.",
                        isCorrect: false
                    },
                    {
                        text:
                            "náklady na provedení kontroly hradí provozovatel vozidla.",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        link: "http://etesty2.mdcr.cz/Test/TestPractise/28",
        index: 2,
        title: "Bezpečnost provozu a ekologický provoz vozidla",
        questionCount: 35,
        questions: [
            {
                index: 1,
                text:
                    "Jízdní odpor stoupá s vrstvou vody na vozovce s dopadem na spotřebu vozidla až o:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "7%",
                        isCorrect: true
                    },
                    {
                        text: "10%",
                        isCorrect: false
                    },
                    {
                        text: "15%",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 2,
                text:
                    "Stanice technické kontroly, při pravidelné technické prohlídce, může:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Seřizovat světlomety, pokud se jedná o jednoduché seřízení.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Seřizovat řídící funkce motoru u motorů s řízeným emisním systémem.",
                        isCorrect: false
                    },
                    {
                        text: "Seřizovat brzdovou soustavu, řízení a nápravu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 3,
                text:
                    "Silniční vozidlo je technicky způsobilé k provozu na pozemních komunikacích pokud:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Technickou prohlídkou silničního vozidla, jeho ústrojí a částí nebyly zjištěny žádné závady nebo jen lehké závady.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Technickou prohlídkou silničního vozidla, jeho ústrojí a částí nebyly zjištěny žádné závady.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Technickou prohlídkou silničního vozidla, jeho ústrojí a částí byly zjištěny jen závady, které neohrožují bezprostředně bezpečnost jízdy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 4,
                text:
                    "Pokud provozovatel silničního vozidla přistaví silniční vozidlo s odstraněnou nebezpečnou závadou ke kontrole technické způsobilosti motorového vozidla do 30 dnů od zjištění závady, provede stanice technické kontroly:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Technickou prohlídku motorového vozidla, včetně opakovaného měření emisí.",
                        isCorrect: false
                    },
                    {
                        text: "Pouze kontrolu odstranění nebezpečné závady.",
                        isCorrect: true
                    },
                    {
                        text: "Novou technickou prohlídku motorového vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 5,
                text: "Co může vést ke smyku vozidla při průjezdu zatáčkami?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Malá hmotnost vozidla.",
                        isCorrect: false
                    },
                    {
                        text: "Vadné tlumiče vozidla.",
                        isCorrect: true
                    },
                    {
                        text: "Malá hmotnost nákladu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 6,
                text: "Pokud je vozidlo naloženo:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Dochází k změně jeho těžiště, což ovlivní jeho jízdní vlastnosti.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Dochází k změně jeho těžiště, což ale neovlivní jeho jízdní vlastnosti.",
                        isCorrect: false
                    },
                    {
                        text: "Nedochází k změně těžiště.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 7,
                text: "Odstředivá síla působící na náklad:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Roste s klesajícím poloměrem zatáčky.",
                        isCorrect: true
                    },
                    {
                        text: "Se s poloměrem zatáčky nemění.",
                        isCorrect: false
                    },
                    {
                        text: "Klesá s poloměrem zatáčky.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 8,
                text: "Při přepravě kapalin v cisterně:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Se kapaliny přelévají a mění polohu těžiště vozidla, což mění jeho jízdní vlastnosti.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Se kapaliny přelévají a mění polohu těžiště vozidla, což ale nemění jeho jízdní vlastnosti.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Se kapaliny přelévají, ale nemění polohu těžiště vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 9,
                text: "Pokud náklad přesahuje obrys vozidla:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Je potřebné jej označit dle platné legislativy.",
                        isCorrect: true
                    },
                    {
                        text: "Není potřebné jej označit.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Je potřebné jej označit jen při snížené viditelnosti.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 10,
                text: "Při přepravě živých zvířat:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Nesmí být ohrožená bezpečnost zvířat, řidiče ani osob přepravovaných ve vozidle ani bezpečnost silničního provozu.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Smí být ohrožena bezpečnost řidiče a osob přepravovaných ve vozidle, ale nesmí být ohrožena bezpečnost silničního provozu a přepravovaných zvířat.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Nesmí být ohrožená bezpečnost řidiče ani osob přepravovaných ve vozidle, ale bezpečnost přepravovaných zvířat být ohrožena může.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 11,
                text:
                    "Jestliže je nutné vystoupit na ložný prostor vozidla nebo z něho sestoupit, musí se použít:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Žebřík nebo jiné rovnocenné zařízení.",
                        isCorrect: true
                    },
                    {
                        text: "Zajištění jiným pracovníkem.",
                        isCorrect: false
                    },
                    {
                        text: "Hydraulická plošina.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 12,
                text:
                    "V hospodárném rozsahu otáček je nejlépe udržováno vozidlo:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "S automatickou převodovkou.",
                        isCorrect: true
                    },
                    {
                        text: "S mechanickou převodovkou.",
                        isCorrect: false
                    },
                    {
                        text: "Používáním nejnižšího převodového stupně.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 13,
                text:
                    "Ztrátový výkon vozidla vybaveného automatickou převodovkou je daný:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Prokluzem hydrodynamického měniče.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Plným sešlápnutím pedálu akcelerace i při nízké rychlosti.",
                        isCorrect: false
                    },
                    {
                        text: "Nesprávným použitím brzdného momentu vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 14,
                text: "U synchronizovaných převodovek:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nemusíme používat meziplyn.",
                        isCorrect: true
                    },
                    {
                        text: "Musíme vždy použít meziplyn.",
                        isCorrect: false
                    },
                    {
                        text: "Musíme vždy vyšlapávat spojku dvakrát.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 15,
                text:
                    "Nadměrnému a zbytečnému opotřebení vypínacího ložiska spojky, řadících objímek a kamenů v převodovce zabráníme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Pokud neponecháváme nohu na pedálu spojky a ruku na řadící páce.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Pokud spojku vyšlapáváme dvakrát a vícekrát za sebou.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Používáním nejvššího převodového stupně vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 16,
                text:
                    "Hospodárný provoz vozidla se vznětovým motorem zajistíme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Rozsahem jmenovitých otáček motoru v pásmu 50-60% jmenovitých otáček a 70-90% sešlápnutím pedálu akcelerace. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Rozsahem jmenovitých otáček motoru v pásmu 90-95% jmenovitých otáček a 40-50% sešlápnutím pedálu akcelerace. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Rozsahem jmenovitých otáček motoru v pásmu 75% jmenovitých otáček a 100% sešlápnutím pedálu akcelerace. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 17,
                text:
                    "Při jízdě do stoupání, předjíždění a zařazení se do proudu vozidel využíváme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Plný výkon motoru až do jmenovitých otáček.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Plný výkon motoru při překročení jmenovitých otáček.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Plný výkon akcelerátoru, avšak nesmíme dosáhnout jmenovitých otáček.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 18,
                text:
                    "Při jízdě vozidlem vybaveným automatickou převodovkou řadíme ručně:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Pokud provozní podmínky vedou ke střídavému řazení nahoru a dolů.",
                        isCorrect: true
                    },
                    {
                        text: "Pokud jedeme v dlouhém a táhlém klesání.",
                        isCorrect: false
                    },
                    {
                        text: "Pouze vyšší převodové stupně.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 19,
                text: "Styl hospodárné jízdy se dosáhne jízdou:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Optimálním využitím údajů z otáčkoměru vozidla.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Využíváním plného výkonu vozidla pod dobu celé jízdy.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Nejčastějším řazením nižších převodových stupňů.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 20,
                text:
                    "Zapojení vozidel do jízdních souprav, (s výjimkou tažení přívěsů kategorií O1 a O2 s nájezdovou brzdou) s ohledem na ABS, není možné v kombinaci:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Tažné vozidlo s ABS a přípojné vozidlo bez ABS.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Tažné vozidlo bez ABS a přípojné vozidlo bez ABS.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Tažné vozidlo bez ABS a přípojné vozidlo s ABS za podmínky, že tažné vozidlo je vybaveno zařízením umožňujícím napájet a kontrolovat bezchybnou funkci ABS přípojného vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 21,
                text: "Při brzdění vzniká:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Kinetická energie přeměněná na teplo.",
                        isCorrect: true
                    },
                    {
                        text: "Nadbytek exhalací z vozidla.",
                        isCorrect: false
                    },
                    {
                        text: "Úspora paliva.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 22,
                text:
                    "Jakou informaci musí podle Dohody Interbus obsahovat jízdní list Interbus?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Seznam cestujících.",
                        isCorrect: true
                    },
                    {
                        text: "Zdvihový objem motoru.",
                        isCorrect: false
                    },
                    {
                        text: "Hmotnost zavazadel cestujících.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 23,
                text: "Čeho se týká Dohoda Interbus?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Mezinárodní příležitostní přepravy cestujících autokary a autobusy.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Vnitrostátní příležitostné přepravy cestujících autokary a autobusy.",
                        isCorrect: false
                    },
                    {
                        text: "Vnitrostátní pravidelné autobusové dopravy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 24,
                text:
                    "Má cestující v pravidelné autobusové dopravě právo na přepravu cestovního zavazadla a domácích zvířat tím stejným autobusem?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Ano, jestliže to umožňují přepravní podmínky nebo smlouva o přepravě osob.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ano, vždy, bez ohledu na přepravní podmínky nebo smlouvu přepravě osob.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Ne, má právo jen na přepravu příručního zavazadla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 25,
                text: "U sklápěcích vozidel:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Musí být korba zajištěna všemi čepy.",
                        isCorrect: true
                    },
                    {
                        text: "Nemusí být korba zajištěna.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Musí být zajištěna alespoň zadní polovina korby.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 26,
                text: "Jaké zajišťovací prostředky používáme?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Poutací lana, řetězy, upínací pásy, plachty a sítě.",
                        isCorrect: true
                    },
                    {
                        text: "Lepící pásky speciálně k tomuto účelu určené.",
                        isCorrect: false
                    },
                    {
                        text: "Gumové pásy nebo vzpěry.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 27,
                text:
                    "Jaké druhy dopravních a přepravních prostředků je vhodné použít pro přepravu potravin podléhajících zkáze?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Izotermické, chladící, mrazící a vyhřívací prostředky.",
                        isCorrect: true
                    },
                    {
                        text: "Paletovou a kontejnerovou přepravu.",
                        isCorrect: false
                    },
                    {
                        text: "Sterilní a antibakteriální prostředky.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 28,
                text:
                    "Co je základní povinností osádky vozidla před započetím přepravy nebezpečných věcí?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Seznámit se s pokyny pro případ nehody.",
                        isCorrect: true
                    },
                    {
                        text: "Seznámit se s trasou přepravy.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Označit přepravní obaly bezpečnostními značkami.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 29,
                text: "Co se zařazuje také mezi nebezpečné věci?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nebezpečné odpady.",
                        isCorrect: true
                    },
                    {
                        text: "Všechen komunální odpad.",
                        isCorrect: false
                    },
                    {
                        text: "Kovový šrot.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 30,
                text:
                    "Kdo zodpovídá za označení přepravních obalů při přepravě nebezpečných věcí silniční dopravou?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Odesílatel nebezpečných věcí.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Bezpečnostní technik dopravce a osádka vozidla dopravce, která bude přepravovat nebezpečné věci.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Dispečer dopravce za přítomnosti osádky vozidla dopravce, která bude přepravovat nebezpečné věci.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 31,
                text:
                    "Pokud materiál umístěný ve více vrstvách zajišťujeme proti pohybu pomocí vrchního vázání, je potřebné zkontrolovat:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Zda v důsledku přídavného zatížení od upínacích prvků nedojde k překročení povoleného zatížení jednotlivých vrstev.",
                        isCorrect: true
                    },
                    {
                        text: "Pouze tlak na vrchní vrstvu.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Pevnost vázání, a to pravidelně po ujetí každých 100 km.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 32,
                text:
                    "Může řidič vykázat cestující z prostoru u předních dveří z důvodu bezpečného výhledu ?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Ano, může.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ano, může, ale pouze v případě, že cestující zabraňuje výhledu záměrně.",
                        isCorrect: false
                    },
                    {
                        text: "Ne, nemůže.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 33,
                text:
                    "Za spoluzavazadlo, které si cestující bere do kabiny pro cestující, odpovídá:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Cestující.",
                        isCorrect: true
                    },
                    {
                        text: "Dopravce.",
                        isCorrect: false
                    },
                    {
                        text: "Řidič.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 34,
                text:
                    "Obsahem zavazadla, které si cestující bere do vozidla ve veřejné silniční osobní dopravě, může být:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Přenosná ocelová láhev s kapalným topným plynem pro domácnost o celkovém obsahu nejvýše 10 kg.",
                        isCorrect: true
                    },
                    {
                        text: "Nabitá zbraň v předepsaném pouzdře.",
                        isCorrect: false
                    },
                    {
                        text: "Těkavá nebo žíravá věc.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 35,
                text:
                    "Jestliže chceme snížit riziko smyku nákladu, měli bychom:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Zvýšit tření mezi nákladem a ložnou plochou.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Eliminovat tření mezi nákladem a ložnou plochou.",
                        isCorrect: false
                    },
                    {
                        text: "Snížit tření mezi nákladem a ložnou plochou.",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        link: "http://etesty2.mdcr.cz/Test/TestPractise/29",
        index: 3,
        title: "Poskytování služeb a logistiky",
        questionCount: 32,
        questions: [
            {
                index: 1,
                text: 'Metoda "Just in time" je metodou pro:',
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Snížení nákladů v souvislosti se skladováním.",
                        isCorrect: true
                    },
                    {
                        text: "Dodání zboží odběrateli na objednávku.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Správné uskladnění zásob zboží podléhajícího zkáze.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 2,
                text: "Logistika v dopravě koordinuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Pohyb zásilek po dopravní síti za účasti jednoho nebo více druhů dopravy.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Pohyb zásilek po dopravní síti pouze v jednom konkrétním vozidle.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Pohyb pracovníka vykonávajícího práci přepravce.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 3,
                text: "Pozornost řidiče při řízení autobusu narušuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Rušivé chování cestujících a podávání informací řidičem cestujícím.",
                        isCorrect: true
                    },
                    {
                        text: "Poslech dopravních informací.",
                        isCorrect: false
                    },
                    {
                        text: "Sledování trasy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 4,
                text: "V nákladní dopravě přepravní smlouva vzniká:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Přijetím objednávky, převzetím zásilky nebo započetím přepravy.",
                        isCorrect: true
                    },
                    {
                        text: "Přijetím objednávky nebo zaplacením jízdného.",
                        isCorrect: false
                    },
                    {
                        text: "Přijetím objednávky a zálohy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 5,
                text:
                    "Jestliže ve veřejné silniční osobní dopravě nebyl cestující přepraven včas:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nemá právo na náhradu škody.",
                        isCorrect: true
                    },
                    {
                        text: "Má právo na náhradu 100 % prokázané škody.",
                        isCorrect: false
                    },
                    {
                        text: "Má právo na náhradu 50 % prokázané škody.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 6,
                text:
                    "Cestující ve veřejné silniční osobní dopravě, u něhož nebyla provedena přeprava z důvodu na straně dopravce:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Má právo na vrácení jízdného.",
                        isCorrect: true
                    },
                    {
                        text: "Nemá právo na vrácení jízdného.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Má právo na vrácení části jízdného dle předpisů dopravce.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 7,
                text:
                    "Cestující ve veřejné silniční osobní dopravě, který byl vyloučen z přepravy pověřenou osobou:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nemá právo na vrácení zaplaceného jízdného.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Má právo na vrácení zaplaceného jízdného v plné výši.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Má právo na vrácení části jízdného. Výše této části je závislá na vzdálenosti mezi místem vyloučení a cílovou stanicí.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 8,
                text:
                    "Naklápění nízkopodlažního autobusu v zastávce provádí řidič:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "S dostatečným odstupem od nástupní hrany a se zavřenými dveřmi.",
                        isCorrect: true
                    },
                    {
                        text: "Při otevřených dveřích.",
                        isCorrect: false
                    },
                    {
                        text: "Co nejtěsněji u nástupní hrany.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 9,
                text:
                    "Jaké oprávnění má řidič v pravidelné autobusové dopravě v případě, že přepravované domácí zvíře cestujícího ohrožuje zdraví ostatních cestujících?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Může vyloučit domácí zvíře z přepravy.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Nemůže vyloučit domácí zvíře z přepravy, může jen upozornit jeho majitele.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Muže vyloučit domácí zvíře z přepravy jen se souhlasem jeho majitele.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 10,
                text:
                    "Může řidič vyloučit z přepravy osobu, která svým chováním narušuje bezpečnou, klidnou a pohodlnou přepravu?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Ano, může.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ano, může, ale jen se souhlasem přepravované osoby.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Nemůže, každý platící cestující má právo na přepravu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 11,
                text: "Nejvýraznější a základní charakteristikou logistiky je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Systémový přístup.",
                        isCorrect: true
                    },
                    {
                        text: "Péče o zákazníka.",
                        isCorrect: false
                    },
                    {
                        text: "Že nemá vliv na konečnou cenu výrobků.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 12,
                text: "Logistika se nezabývá:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Výrobní technologií, navrhováním konstrukce výrobků.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Činnostmi zaměřenými na získávání materiálů z primárních zdrojů, všemi mezipostupy ve výrobě a způsobem dodání finálního výrobku konečnému uživateli.",
                        isCorrect: false
                    },
                    {
                        text: "Pohybem materiálu v rámci výrobního podniku.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 13,
                text: "Typickým rysem logistiky je, že:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nemění podstatu výrobku, který je přemisťován.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Mění podstatu výrobku, jelikož přímo navrhuje konstrukci výrobku.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Mění podstatu výrobku tím, že navrhne jeho ochranný obal.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 14,
                text: "Pojem „logistika“ v ekonomických procesech označuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Komplex sladěných podpůrných, obslužných, zabezpečovacích aj. činností.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Komplex činností, který zajišťuje materiální toky se zahraničními subjekty.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Veškerou zahraniční přepravu mimo přepravy osob.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 15,
                text: "Zaměstnavatel je povinen zajistit, aby řidič:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Neodstavoval dopravní prostředek na nevhodném místě z hlediska bezpečnosti práce a nevjížděl do míst, kde povrch terénu není dostatečně pevný, široký a sjízdný.",
                        isCorrect: true
                    },
                    {
                        text: "Vozidlo alespoň jednou za týden umyl.",
                        isCorrect: false
                    },
                    {
                        text: "Zajistil pro odstavování vozidla vhodnou garáž.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 16,
                text:
                    "Skleněné přepážky kabiny řidiče autobusu, které primárně ochraňují řidiče před nepříznivými vlivy z okolí, mohou také:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Způsobovat v osvětlených zastávkách dezorientující odrazy.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Zapříčinit nedostatek vzduchu v kabině řidiče, protože ventilace je pro celý autobus společná.",
                        isCorrect: false
                    },
                    {
                        text: "Omezovat pohyby řidiče při řízení.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 17,
                text:
                    "Přepravní smlouva mezi cestujícím ve veřejné silniční osobní dopravě a dopravcem je uzavřena",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "nastoupením cestujícího s platným jízdním dokladem do vozidla nebo vstoupením do označeného prostoru přístupného jen s platným jízdním dokladem.",
                        isCorrect: true
                    },
                    {
                        text: "zakoupením jízdenky dopravce v předprodeji.",
                        isCorrect: false
                    },
                    {
                        text:
                            "příchodem na veřejně přístupnou zastávku hromadné dopravy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 18,
                text: "Přeprava zavazadel je součástí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Osobní přepravy.",
                        isCorrect: true
                    },
                    {
                        text: "Nákladní přepravy.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Osobní přepravy do hmotnosti 20 kg, těžší zavazadla jsou součástí nákladní přepravy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 19,
                text: "Jednou z charakteristických vlastností logistiky je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Přispívá k ochraně životního prostředí.",
                        isCorrect: true
                    },
                    {
                        text: "Koncentruje přepravu do jednoho místa v zemi.",
                        isCorrect: false
                    },
                    {
                        text: "Zvyšuje počet přepravních vozidel.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 20,
                text: "Mezi komponenty oběhového procesu nepatří:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Práce s lidskými zdroji v oblasti přepravy.",
                        isCorrect: true
                    },
                    {
                        text: "Manipulace s materiálem a řízení dopravy.",
                        isCorrect: false
                    },
                    {
                        text: "Balení, distribuce, skladování a řízení zásob.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 21,
                text: "Pro konkurenceschopnost na trhu je podmínkou:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Sledovat trendy vývoje trhu.",
                        isCorrect: true
                    },
                    {
                        text: "Nabízet stále stejné podmínky přepravy.",
                        isCorrect: false
                    },
                    {
                        text: "Soustředit se na spedici jedné komodity.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 22,
                text: "Co je logistika?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Jsou to všechny činnosti zajišťující, aby bylo zboží k dispozici u správného zákazníka, na správném místě, ve správném čase, s vynaložením přiměřených nákladů.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Systém zajištující za všech okolností nejlevnější dopravu.",
                        isCorrect: false
                    },
                    {
                        text: "Systém velkých skladů materiálu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 23,
                text: "Co je doprava Just in Time?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Doprava potřebného materiálu na správné místo, ve správném čase.",
                        isCorrect: true
                    },
                    {
                        text: "Silniční doprava ve státech Evropské unie.",
                        isCorrect: false
                    },
                    {
                        text: "Doprava mezi distribučními centry.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 24,
                text:
                    "Jaká je důležitá povinnost dopravce (řidiče) v systému Just in Time?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Přistavit vozidlo k nakládce a vykládce ve stanoveném čase, na stanoveném místě.",
                        isCorrect: true
                    },
                    {
                        text: "Přistavit vozidlo k vykládce co nejrychleji.",
                        isCorrect: false
                    },
                    {
                        text: "Použít pro přepravu nejkratší trasu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 25,
                text: "Co je kanbanová karta?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Přesunová karta, která plní funkci objednávky, požaduje přistavení prázdného dopravního prostředku dodavateli, který naloží a s přesunovou kartou odešle stanovený počet odběrateli.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Karta na levné tankování nafty u vybraných čerpacích stanic.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Karta, po jejímž předložení na vykládce je řidič přednostně odbaven.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 26,
                text: "Co je logistické distribuční centrum?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Centrum které přijímá, dekompletuje, shromažduje, kompletuje a expeduje zásilky přímým odběratelům nebo jiným logistickým centrům, nevytváří skladové zásoby.",
                        isCorrect: true
                    },
                    {
                        text: "Sklad pro velkoobjemový materiál a zboží.",
                        isCorrect: false
                    },
                    {
                        text: "Sklad, kde se skladuje materiál dlouhodobě.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 27,
                text: "Co je Systém elektronické výměny dat (EDI)?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Elektronický přenos dokumentů mezi počítači různých organizací (nákupní objednávky, faktury, oznámení o dodávce, dispozice pro přepravu nebo elektronický přenos peněz pro platby).",
                        isCorrect: true
                    },
                    {
                        text: "Elektronická silniční mapa.",
                        isCorrect: false
                    },
                    {
                        text: "Satelitní navigační systém.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 28,
                text: "Co je vychystávací okno?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Čas skladové manipulace od odebrání až po soustředění zboží.",
                        isCorrect: true
                    },
                    {
                        text: "Čas pro přestávku.",
                        isCorrect: false
                    },
                    {
                        text: "Čas pro údržbu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 29,
                text: "Co je časové okno?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Doba stanoveného přistavení vozidla.",
                        isCorrect: true
                    },
                    {
                        text: "Doba, kdy příjemce nevykládá.",
                        isCorrect: false
                    },
                    {
                        text: "Doba, kdy odesilatel nenakládá.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 30,
                text: "Co je kombinovaná doprava?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Přeprava zboží v jedné přepravní jednotce (paleta, kontejner) železniční nebo vodní dopravou, počáteční nebo koncová doprava je po silnici.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Doprava, při které probíhá plánované přepřahání tahačů.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Při přepravě po silnici se používají kombinace různých silničních vozidel.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 31,
                text:
                    "Z jakého dokladu řidič při přepravě v systému Just in Time zjistí kam a kdy má přistavit vozidlo k nakládce a vykládce?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Z průvodky nebo jiného dokladu, který pro tuto přepravu obdrží.",
                        isCorrect: true
                    },
                    {
                        text: "Z pokynů pro případ nehody.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Není žádný doklad, potřebné údaje se řidič dozví ústně od zaměstnavatele.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 32,
                text: "Cílem logistiky je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Zabezpečit a zvýšit zisk podniku.",
                        isCorrect: true
                    },
                    {
                        text: "Rozplánovat finanční tok.",
                        isCorrect: false
                    },
                    {
                        text: "Snížit oběh surovin.",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        link: "http://etesty2.mdcr.cz/Test/TestPractise/30",
        index: 4,
        title: "Hospodářské prostředí a organizace dopravního trhu",
        questionCount: 20,
        questions: [
            {
                index: 1,
                text:
                    "K provozování silniční motorové dopravy jako předmětu podnikání je zapotřebí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Mít koncesi vydanou příslušným živnostenským úřadem.",
                        isCorrect: true
                    },
                    {
                        text: "Mít koncesi vydanou dopravním úřadem.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Mít koncesi vydanou příslušným oddělením dopravní policie. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 2,
                text:
                    "Každý, kdo provozuje silniční motorovou dopravu musí splňovat po celou dobu trvání oprávnění podmínku:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Být odborně způsobilý ve smyslu živnostenského zákona.",
                        isCorrect: true
                    },
                    {
                        text: "Být absoventem požadovaného vzdělání úrovně 2.",
                        isCorrect: false
                    },
                    {
                        text: "Být občanem České republiky.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 3,
                text: "Do přepravního procesu je možno zařadit:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Jízdu s nákladem.",
                        isCorrect: true
                    },
                    {
                        text: "Dobu povinného odpočinku.",
                        isCorrect: false
                    },
                    {
                        text: "Dobu pracovní pohotovosti.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 4,
                text: "K přepravnímu procesu u nákladní dopravy nepatří:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Reklamační řízení.",
                        isCorrect: true
                    },
                    {
                        text: "Vlastní přemístění zboží.",
                        isCorrect: false
                    },
                    {
                        text: "Předání zboží příjemci a vykládka.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 5,
                text:
                    "Za mimořádně vysokých teplot jsou ochranné nápoje poskytovány:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Z důvodu hrozícího přehřátí a selhání organizmu.",
                        isCorrect: true
                    },
                    {
                        text: "Jako náhrada stravného pro zaměstnance.",
                        isCorrect: false
                    },
                    {
                        text: "Jen řidičům s vyšším krevním tlakem.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 6,
                text:
                    "Za mimořádně chladný den je považován den s teplotu nižší než je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "-15 stupňů C.",
                        isCorrect: true
                    },
                    {
                        text: "-10 stupňů C.",
                        isCorrect: false
                    },
                    {
                        text: "-20 stupňů C.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 7,
                text:
                    "Při ochraně zdraví se počítá s mimořádně teplým dnem pokud teplota venkovního vzduchu přesáhne:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "30 stupňů C.",
                        isCorrect: true
                    },
                    {
                        text: "35 stupňů C.",
                        isCorrect: false
                    },
                    {
                        text: "Nad 35 stupňů C.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 8,
                text: "Periodická preventivní prohlídka zaměstnanců je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Důležitou pracovní překážkou, kterou musí zaměstnavatel omluvit a poskytnout volno s náhradou mzdy.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Pracovní překážkou na straně zaměstnance, kterou nemusí zaměstnavatel omluvit a poskytnout volno s náhradou mzdy.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Pracovní překážkou na straně zaměstnance, kterou musí zaměstnavatel omluvit ale bez poskytnutí náhrady mzdy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 9,
                text:
                    "Po dobu výkonu pracovních směn, kdy budou teploty mimořádně vysoké a teplota vzduchu v kabinách vozidel se bude blížit 50 stupňům C má pracovník nárok:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Na vydávání např. balených minerálních vod. ",
                        isCorrect: true
                    },
                    {
                        text: "Na vydávání čaje a kávy.",
                        isCorrect: false
                    },
                    {
                        text: "Na vydávání energetických nápojů.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 10,
                text: "Prostoj při vykládce:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Je začleněn do přepravního procesu.",
                        isCorrect: true
                    },
                    {
                        text: "Není začleněn do přepravního procesu.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Je začleněn do celkové doby pracovního odpočinku.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 11,
                text: "Přepravním procesem se rozumí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Vlastní přemístění osob a věcí.",
                        isCorrect: true
                    },
                    {
                        text: "Vlastní přemístění nebezpečného nákladu.",
                        isCorrect: false
                    },
                    {
                        text: "Vlastní přemístění přepravovaných osob.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 12,
                text: "Reklama na vozidle:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "může být umístěna libovolně.",
                        isCorrect: false
                    },
                    {
                        text: "nesmí znemožnit identifikaci vozidla.",
                        isCorrect: true
                    },
                    {
                        text: "nesmí být realizována formou nástřiku.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 13,
                text: "Dopravní terminál je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "každé místo bezpečnostní přestávky.",
                        isCorrect: false
                    },
                    {
                        text:
                            "místo, kde dochází k nakládce, vykládce nebo překládce objektu přepravy.",
                        isCorrect: true
                    },
                    {
                        text: "místo ukončení cesty.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 14,
                text: "Dopravní terminál:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "může být i místo, kde dochází ke změně druhu dopravy.",
                        isCorrect: true
                    },
                    {
                        text: "je vždy místem ukončení cesty.",
                        isCorrect: false
                    },
                    {
                        text: "je vždy jen místem vykládky.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 15,
                text:
                    "Podle charakteru dopravního prostředku a dopravní cesty dělíme dopravu na:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "zvláštní a kombinovanou.",
                        isCorrect: false
                    },
                    {
                        text: "silniční, železniční, leteckou a vodní.",
                        isCorrect: true
                    },
                    {
                        text: "pravidelnou, kyvadlovou a příležitostnou.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 16,
                text: "Reklama na vozidle:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "nesmí znemožnit identifikaci provozovatele vozidla.",
                        isCorrect: true
                    },
                    {
                        text: "nesmí být zdrojem vedlejších příjmů.",
                        isCorrect: false
                    },
                    {
                        text: "nesmí být demontovatelná.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 17,
                text: "Ten, kdo objednává přepravu, je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "dopravce.",
                        isCorrect: false
                    },
                    {
                        text: "řidič.",
                        isCorrect: false
                    },
                    {
                        text: "přepravce.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 18,
                text: "Řidič vozidla:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "se nezajímá o celkový obraz firmy nebo společnosti.",
                        isCorrect: false
                    },
                    {
                        text:
                            "může svým nekvalitním výkonem negativně ovlivnit celkový produkt (vlastní přepravu).",
                        isCorrect: true
                    },
                    {
                        text:
                            "nemá žádnou možnost obraz firmy nebo společnosti ovlivnit.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 19,
                text: "Obecná ustanovení o pracovní době jsou zakotvena:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "pouze v pracovním řádu dopravní firmy nebo společnosti.",
                        isCorrect: false
                    },
                    {
                        text:
                            "pouze ve vnitřní směrnici dopravní firmy nebo společnosti.",
                        isCorrect: false
                    },
                    {
                        text: "v zákoníku práce.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 20,
                text:
                    "Na pozitivní obraz dopravní společnosti působí mimo jiné",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "druh přepravovaného zboží.",
                        isCorrect: false
                    },
                    {
                        text: "chování všech zaměstnanců.",
                        isCorrect: true
                    },
                    {
                        text: "věkový průměr zaměstnanců.",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        link: "http://etesty2.mdcr.cz/Test/TestPractise/31",
        index: 5,
        title: "Sociálně-právní prostředí v silniční dopravě",
        questionCount: 24,
        questions: [
            {
                index: 1,
                text:
                    "Pracovní týden pro stanovení režimu práce v mezinárodní silniční dopravě:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Je období mezi v 0,00 hodin v  pondělí a končící ve 24 hodin v neděli. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Je období pěti za sebou jdoucích pracovních dnů, během kterých řidič provádí práci řidiče.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Je doba, ve které řidič provádí práci řidiče a nesmí přesáhout zákonnou pracovní dobu 40 hodin týdně.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 2,
                text:
                    "Jakou platnost má karta řidiče do digitálního tachografu?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "5 let.",
                        isCorrect: true
                    },
                    {
                        text: "4 roky.",
                        isCorrect: false
                    },
                    {
                        text: "6 let.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 3,
                text:
                    "Jaká je minimální doba přestávky v dálkové vnitrostátní silniční dopravě, kterou musí řidič čerpat po nepřetržitém řízení vozidla 4,5 hodiny, jestliže nenastupuje denní čas odpočinku nebo týdenní čas odpočinku?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nejméně 45 minut.",
                        isCorrect: true
                    },
                    {
                        text: "Nejméně 15 minut.",
                        isCorrect: false
                    },
                    {
                        text: "Nejméně 30 minut.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 4,
                text:
                    "Jaká je maximální nepřetržitá doba řízení vozidla ve vnitrostátní silniční dopravě s vozidlem s celkovou hmotností vyšší než 3,5 tuny?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "4,5 hodiny.",
                        isCorrect: true
                    },
                    {
                        text: "3 hodiny.",
                        isCorrect: false
                    },
                    {
                        text: "4 hodiny.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 5,
                text: "Plovoucí den představuje úsek:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Od skončení jedné denní doby odpočinku do skončení následující denní doby odpočinku.",
                        isCorrect: true
                    },
                    {
                        text:
                            "24 hodin během pracovního týdne, bez doby odpočinku.",
                        isCorrect: false
                    },
                    {
                        text: "Denního řízení bez doby denního odpočinku. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 6,
                text:
                    "Pokud osádka vozidla doprovází vozidlo během dopravy na trajektu, tak se jí tato doba započítává do:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Doby pohotovosti.",
                        isCorrect: true
                    },
                    {
                        text: "Pracovní doby.",
                        isCorrect: false
                    },
                    {
                        text: "Přestávky v řízení.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 7,
                text:
                    "Jiné práce, jako je doba čekání, úklid vozidla a další práce, se započítávají do:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Celkové pracovní doby.",
                        isCorrect: true
                    },
                    {
                        text: "Doby odpočinku.",
                        isCorrect: false
                    },
                    {
                        text: "Doby pracovní pohotovosti.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 8,
                text: "Přestávka na jídlo a oddech se musí čerpat:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Nejpozději po 6 hodinách výkonu práce a musí trvat nejméně 30 minut.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Nejdříve po 6 hodinách výkonu práce a musí trvat nejméně 30 minut.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Nejdříve po 6 hodinách výkonu práce a musí trvat nejdéle 30 minut.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 9,
                text:
                    "Přeprava sdružovaných kusových zásilek z domu do domu podle přepravního řádu a založená na sdružování ve sběrných střediscích je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Mezinárodní sběrná služba.",
                        isCorrect: true
                    },
                    {
                        text: "Spediční služba.",
                        isCorrect: false
                    },
                    {
                        text: "Celovozová služba.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 10,
                text:
                    "Silniční celovozová přeprava musí splňovat tyto podmínky:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Hmotnost vozidla nižší než 2,5 tuny, jeden odesílatel a jedna jízda vozidla.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Hmotnost vozidla vyšší než 2,5 tuny, jeden odesílatel a více jízd.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Hmotnost vozidla nižší než 2,5 tuny, více odesílatelů a jedna jízda vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 11,
                text: "Tarify si určuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Dopravce, včetně specifikace služeb, které nabízí navíc.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Jsou dané jednotně, dle hmotnosti použitého vozidla.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Jsou dané jednotně, dle ujeté vzdálenosti vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 12,
                text: "Tarify silniční dopravy závisejí na:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Vzdálenosti a hmotnosti zásilky.",
                        isCorrect: true
                    },
                    {
                        text: "Počtu členů osádky vozidla.",
                        isCorrect: false
                    },
                    {
                        text: "Hmotnosti použitého vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 13,
                text: "Řidič může trávit denní čas odpočinku:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "V zaparkovaném vozidle pokud je vybaveno lehátkem.",
                        isCorrect: true
                    },
                    {
                        text: "Ve vozidle nesmí trávit denní odpočinek.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Pouze v ubytovacích zařízeních určených pro spediční firmy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 14,
                text:
                    "Nákladní list CMR je tzv. deklarativní doklad, což znamená, že:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Údaje v něm obsažené jsou jsou považovány za platné, pokud nejsou v rozporu s údaji uvedenými v konkrétní přepravní smlouvě.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Údaje v něm obsažené jsou pouze informativní a nezávazné v konkrétní přepravní smlouvě.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Údaje na něm obsažené jsou vždy platné a mají větší váhu než údaje uvedené v konkrétní přepravní smlouvě.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 15,
                text: "Co označuje zkratka ADR?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Evropskou dohodu o mezinárodní silniční přepravě nebezpečných věcí.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Evropskou dohodu o práci osádek vozidel v mezinárodní silniční dopravě.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Evropskou dohodu o dodavatelsko-odběratelských vztazích.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 16,
                text:
                    "„Dohoda o mezinárodních přepravách zkazitelných potravin a specializovaných prostředcích určených pro tyto přepravy“ má  zkratku:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "ATP.",
                        isCorrect: true
                    },
                    {
                        text: "AETR.",
                        isCorrect: false
                    },
                    {
                        text: "ADR.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 17,
                text:
                    "„Evropská dohoda o mezinárodní silniční přepravě nebezpečných věcí“ se označuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "ADR.",
                        isCorrect: true
                    },
                    {
                        text: "ATP.",
                        isCorrect: false
                    },
                    {
                        text: "CMR.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 18,
                text:
                    '"Dohoda o přepravní smlouvě v mezinárodní silniční dopravě“ má zkratku',
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "CMR.",
                        isCorrect: true
                    },
                    {
                        text: "ADR.",
                        isCorrect: false
                    },
                    {
                        text: "TIR.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 19,
                text:
                    "Činnost řízení započala ve 22,00 hodin a následující den se přechází na letní čas. Kdy budete přestavovat na analogovém tachografu správný čas?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Na konci směny nastavíte hodiny tak, aby odpovídaly změně na letní čas.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ve 2,00 hodiny vybrete list a nastavíte hodiny o hodinu dopředu.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Ve 2,00 hodiny vybrete list a nastavíte hodiny o hodinu zpět.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 20,
                text:
                    "Údaje z karty digitálního tachografu je nutno stahovat po:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "28 dnech",
                        isCorrect: true
                    },
                    {
                        text: "21 dnech",
                        isCorrect: false
                    },
                    {
                        text: "14 dnech",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 21,
                text: "Při okružní jízdě se jedná o:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Mezinárodní příležitostnou přepravu osob na objednávku po předem vyhrazené trase, kdy je přepravovaná stejná skupina cestujících.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Vnitrostátní přepravu s cestovní kanceláří s cílem poznávacím nebo rekreačním.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Přepravu osob na lince osobní dopravy městy a obcemi, kdy je stejné výchozí a konečné místo cesty.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 22,
                text:
                    "Jak budete postupovat, jestliže dojde k poruše záznamového zařízení (tachografu)?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Budete provádět záznam ručně na zadní straně tachografického kotouče, resp. pásky z digitálního tachografu.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Okamžitě odstavíte vozidlo a necháte jej odtáhnout do servisu k opravě tachografu.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Nebudete provádět záznam ručně a pokračujete s vozidlem do nejbližšího servisu, kde musí být tachograf opraven.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 23,
                text:
                    "Za osoby s omezenou schopností pohybu a orientace se dle přepravního řádu považují:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Zejména osoby postižené pohybově, zrakově, sluchově, osoby pokročilého věku, těhotné ženy, popř. osoby s mentálním postižením.",
                        isCorrect: true
                    },
                    {
                        text: "Pouze osoby s průkazem ZTP.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Pouze osoby přepravující se na invalidním vozíku.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 24,
                text: "Během delší jízdy se řidič má stravovat:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Vícekrát,  menší porcí lehkého jídla.",
                        isCorrect: true
                    },
                    {
                        text: "Větší porci, ale až po delší době řízení.",
                        isCorrect: false
                    },
                    {
                        text: "Během jízdy se nemá jíst vůbec.",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        link: "http://etesty2.mdcr.cz/Test/TestPractise/32",
        index: 6,
        title: "Zdravotní rizika a jejich předcházení",
        questionCount: 92,
        questions: [
            {
                index: 1,
                text:
                    "V případě, že v důsledku dopravní nehody došlo k zranění osob, je řidič povinen:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Poskytnut podle svých schopností a možností zraněné osobě potřebnou první pomoc a bezodkladně přivolat odbornou zdravotnickou pomoc a policii.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Zavolat odbornou zdravotnickou pomoc a setrvat na místě nehody.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Bezodkladně o dopravní nehodě informovat správce pozemní komunikace.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 2,
                text: "Nejvhodnější první pomocí při mdlobě je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Uložit pacienta na záda a zvednout mu nohy.",
                        isCorrect: true
                    },
                    {
                        text: "Dát mu na čelo a na hrudník vlažný obklad.",
                        isCorrect: false
                    },
                    {
                        text: "Co nejdříve pacienta posadit.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 3,
                text: "Dýchací cesty uvolníme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Vyčištěním úst a záklonem hlavy.",
                        isCorrect: true
                    },
                    {
                        text: "Vyčištěním úst a vytažením zapadlého jazyka.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Pootočením hlavy na stranu, otevřením úst a vysunutím jazyka.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 4,
                text: "Je vhodné řídit automobil v době, kdy jste nemocní?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Ano, nemoc nevadí.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Ne, i lehké onemocnění může zhoršit pozornost řidiče.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Pokud se nejedná o horečnaté onemocnění, tak ano.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 5,
                text:
                    "Užívání léků, které jsou označeny v příbalovém letáku jako nevhodné pro osoby, které vykonávají činnost se zvýšenou pozorností, ovlivňují u řidiče především :",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Pohyblivost.",
                        isCorrect: false
                    },
                    {
                        text: "Pozornost.",
                        isCorrect: true
                    },
                    {
                        text: "Chuť k jídlu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 6,
                text:
                    "Bezpečnostní přestávky a přestávky na jídlo a oddech se:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Mohou slučovat.",
                        isCorrect: true
                    },
                    {
                        text: "Nesmí slučovat.",
                        isCorrect: false
                    },
                    {
                        text: "Nesmí slučovat pouze při nočních jízdách.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 7,
                text: "Mezinárodní číslo tísňové linky je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "112",
                        isCorrect: true
                    },
                    {
                        text: "121",
                        isCorrect: false
                    },
                    {
                        text: "122",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 8,
                text: "Zraněnému člověku hrozí vždy:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Podchlazení.",
                        isCorrect: true
                    },
                    {
                        text: "Přehřátí.",
                        isCorrect: false
                    },
                    {
                        text: "Smrt.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 9,
                text: "Krvácení z nosu zastavíme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Předkloněním hlavy, stiskem kořene nosu a přiložením studených obkladů na zátylek. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Záklonem hlavy, aby pacient mohl polykat krev a přiložením studených obkladů.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Úklonem hlavy na pravou stranu, přiložením chladných obkladů na čelo.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 10,
                text: "Pacienta ve stavu bezvědomí poznáme podle:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Toho, že nereaguje na vnější podněty (oslovení, bolest).",
                        isCorrect: true
                    },
                    {
                        text: "Modré barvy pokožky.",
                        isCorrect: false
                    },
                    {
                        text: "Neschopnosti mluvit souvisle.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 11,
                text: "U pacienta v bezvědomí jako první zkontrolujeme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Přítomnost pravidelného dýchání.",
                        isCorrect: true
                    },
                    {
                        text: "Doklady.",
                        isCorrect: false
                    },
                    {
                        text: "Stav zornic.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 12,
                text: "U dopravní nehody ošetřujeme zraněné v tomto pořadí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Masivní krvácení, bezvědomí, zástava krevního oběhu, zlomeniny.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Zástava krevního oběhu, masivní krvácení, zlomeniny, bezvědomí.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zlomeniny, bezvědomí, zástava krevního oběhu, masivní krvácení.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 13,
                text: "Poskytnout první pomoc:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Je povinnost daná zákonem.",
                        isCorrect: true
                    },
                    {
                        text: "Není povinnost.",
                        isCorrect: false
                    },
                    {
                        text: "Je povinnost daná zákonem u osob blízkých.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 14,
                text: "Při umělém dýchání z úst do úst:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Stačí krátké normální vdechy.",
                        isCorrect: true
                    },
                    {
                        text: "Provádíme co největší hluboké vdechy.",
                        isCorrect: false
                    },
                    {
                        text: "Je třeba předklonit hlavu pacienta.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 15,
                text: "Reakční dobu řidiče prodlužuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Únava řidiče, alkohol v krvi a jeho soustředěnost.",
                        isCorrect: true
                    },
                    {
                        text: "Pouze alkohol v krvi.",
                        isCorrect: false
                    },
                    {
                        text: "Jen věk řidiče.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 16,
                text: "Při resuscitaci (oživování) je především důležité:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nepřerušovat srdeční masáž.",
                        isCorrect: true
                    },
                    {
                        text: "Dostatečně hluboce dýchat do postiženého.",
                        isCorrect: false
                    },
                    {
                        text: "Podložit pacientovi hlavu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 17,
                text: "Při srdeční masáži musí postižený ležet:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Vždy na zádech, na tvrdé a rovné podložce, nejlépe na zemi.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Vždy na břiše, na tvrdé, rovné podložce, nejlépe na zemi.",
                        isCorrect: false
                    },
                    {
                        text: "Na zádech, s rukama za hlavou.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 18,
                text: "Rychlost odbourávání alkoholu v krvi:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Se nedá ovlivnit.",
                        isCorrect: true
                    },
                    {
                        text: "Se dá ovlivnit množstvím vypité kávy.",
                        isCorrect: false
                    },
                    {
                        text: "Se dá ovlivnit spánkem.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 19,
                text: "Cizí předmět v oku ošetříme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Znehybněním předmětu sterilním obvazem a zakrytím i druhého oka.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Vyjmutím předmětu z oka a překrytím poškozeného oka.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Rychlým vyjmutím předmětu po podání prášku proti bolesti.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 20,
                text: "Cizí předmět z rány:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Neodstraňujeme, pouze znemožníme jeho další pohyb v ráně.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Vždy odstraníme a poté ránu převážeme sterilním obvazem.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Z rány odstraníme až poté, co pacient otočí hlavu stranou.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 21,
                text: "Při příjezdu k místu nehody:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Nejdříve zajistím svou bezpečnost odstavením vlastního vozidla na bezpečné místo, zapnutím výstražných světel, obléknutím reflexní vesty a postavením výstražného trojúhelníku.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Nejdříve zjistím rozsah škod, ošetřím všechny zraněné, teprve poté zajistím vlastní bezpečnost.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zajistím bezpečnost tím, že rozsvítím dálková světla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 22,
                text: "U pacienta v bezvědomí kontrolujeme do příjezdu ZZS:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Přítomnost pravidelného dýchání.",
                        isCorrect: true
                    },
                    {
                        text: "Hmatnost pulsu.",
                        isCorrect: false
                    },
                    {
                        text: "Hmatnost pulsu, dech a teplotu těla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 23,
                text: "Postižený se srdeční zástavou zemře bez pomoci:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Během několika minut.",
                        isCorrect: true
                    },
                    {
                        text: "Během několika hodin.",
                        isCorrect: false
                    },
                    {
                        text: "Během několika vteřin.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 24,
                text: "Volání na tísňovou linku:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nesmí volající ukončit jako první.",
                        isCorrect: true
                    },
                    {
                        text: "Musí být rychlé a krátké.",
                        isCorrect: false
                    },
                    {
                        text: "Následuje po ošetření všech zraněných.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 25,
                text:
                    "Zdravý člověk zareaguje na vzniklou situaci v dopravě za:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "0,8-1,2 sekundy.",
                        isCorrect: true
                    },
                    {
                        text: "1,3-1,5 sekundy.",
                        isCorrect: false
                    },
                    {
                        text: "3 sekundy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 26,
                text: "Člověku v bezvědomí nejvíce hrozí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Udušení.",
                        isCorrect: true
                    },
                    {
                        text: "Srdeční zástava.",
                        isCorrect: false
                    },
                    {
                        text: "Vykrvácení.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 27,
                text: "Rychlá reakce zraku je u řidiče nutná:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "K orientaci v dopravních situacích.",
                        isCorrect: true
                    },
                    {
                        text:
                            "K zapamatování si registrační značky automobilů pro případ nehody.    ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 28,
                text: "Při delší jízdě je největší nebezpečí usnutí řidiče:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Mezi 18- 22 hodinou",
                        isCorrect: false
                    },
                    {
                        text: "Od půlnoci do šesti hodin ráno",
                        isCorrect: true
                    },
                    {
                        text: "Kolem půlnoci.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 29,
                text: "Zraněnému motocyklistovi ochrannou přilbu:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Sejmeme, jestliže nedýchá nebo zvrací.",
                        isCorrect: true
                    },
                    {
                        text: "Sejmeme vždy.",
                        isCorrect: false
                    },
                    {
                        text: "Sejmeme, když nás o to požádá.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 30,
                text: "Příznivý vliv na řidiče má poslech hudby:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Při jednotvárně jízdě po dálnici.",
                        isCorrect: true
                    },
                    {
                        text: "Při pomalé jízdě ve městě.",
                        isCorrect: false
                    },
                    {
                        text: "Při rychlé jízdě.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 31,
                text:
                    "Pokud se rozhodneme ponechat zraněného ve vozidle, je to proto, že:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Dýchá, zůstane v teple, nezpůsobíme mu další zranění.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Je v bezvědomí, nedýchá, nechceme mu způsobit další zranění.",
                        isCorrect: false
                    },
                    {
                        text: "Hrozí nebezpečí vzniku další nehody.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 32,
                text: "Pozornost na dálnici snižuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Rychlá jízda.",
                        isCorrect: false
                    },
                    {
                        text: "Jednotvárná jízda.",
                        isCorrect: true
                    },
                    {
                        text: "Hustota provozu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 33,
                text: "Zraněného je potřeba vyprostit z vozidla:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Pokud nedýchá nebo hrozí nebezpečí další nehody.",
                        isCorrect: true
                    },
                    {
                        text: "Vždy, co nejdříve po nehodě.",
                        isCorrect: false
                    },
                    {
                        text: "Pokud křičí hlasitě o pomoc.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 34,
                text:
                    "Co je nejčastější příčinou krátkého usnutí řidiče při jízdě?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Noční jízda.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Důsledek jednotvárné jízdy např. po dálnici nebo únavy apod.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 35,
                text:
                    "Ke vnitřním zraněním běžně dochází již při rychlosti nárazu:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "40 km.h-1.",
                        isCorrect: true
                    },
                    {
                        text: "60 km.h-1.",
                        isCorrect: false
                    },
                    {
                        text: "70 km.h-1.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 36,
                text: "Dojde-li k dopravní nehodě, je na prvním místě:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Vlastní bezpečnost a zdraví ještě nezraněných osob.",
                        isCorrect: true
                    },
                    {
                        text: "Zdraví a život zraněných osob.",
                        isCorrect: false
                    },
                    {
                        text: "Důsledné zdokumentování (např. foto apod.).",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 37,
                text: "Při delší jízdě únavu nejlépe odstraníte:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Poslechem hlasité hudby.",
                        isCorrect: false
                    },
                    {
                        text: "Otevřením okna v automobilu.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zastavením vozidla a krátkou procházkou nebo cvičením.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 38,
                text: "Pomáhá káva k rychlejšímu odbourávání alkoholu z těla?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Ano.",
                        isCorrect: false
                    },
                    {
                        text: "Ne.",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 39,
                text: "Po dobu delší jízdy se musí dodržovat pitný režim:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Ano, nedostatek tekutin ovlivňuje pozornost řidiče.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ne, nedostatek tekutin neovlivňuje pozornost řidiče.",
                        isCorrect: false
                    },
                    {
                        text: "Dodržování pitného režimu nemá vliv na řízení.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 40,
                text: "Na volné a široké silnici má řidič tendenci jet:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Pomaleji a vychutnávat si jízdu.",
                        isCorrect: false
                    },
                    {
                        text: "Rychleji, aniž by to postřehl.",
                        isCorrect: true
                    },
                    {
                        text: "Stejnou rychlostí jako doposud.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 41,
                text:
                    "Může i banální onemocnění ovlivnit schopnost k řízení (např. bolest zubů, hlavy, zvýšená teplota)?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Ano, každé onemocnění je zátěží pro organizmus a je tedy snížena schopnost soustředit se.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ne, lehké onemocnění nemůže ovlivnit schopnost k řízení.",
                        isCorrect: false
                    },
                    {
                        text: "Pokud jsem řidičem bez dopravních nehod, ne. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 42,
                text: "Co ovlivňuje způsobilost řidiče k řízení vozidla?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Tělesná kondice (váha, výška, svalová hmota, trénovanost apod.)",
                        isCorrect: false
                    },
                    {
                        text:
                            "Psychický stav (smutek, úzkost, stres, nedostatek spánku apod.)",
                        isCorrect: true
                    },
                    {
                        text: "Pouze znalost dopravních předpisů.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 43,
                text:
                    "Telefonní číslo na tísňovou linku Hasičského záchranného sboru je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "150",
                        isCorrect: true
                    },
                    {
                        text: "158",
                        isCorrect: false
                    },
                    {
                        text: "155",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 44,
                text:
                    "Telefonní číslo na tísňovou linku Zdravotnické záchranné služby je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "155",
                        isCorrect: true
                    },
                    {
                        text: "158",
                        isCorrect: false
                    },
                    {
                        text: "112",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 45,
                text:
                    "Pokud jsme svědky mimořádné události s velkým počtem raněných, je nezbytné nejprve:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Odhadnout rozsah mimořádné události (např. srážka 2 plných autobusů) a oznámit to na tísňovou linku.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Projít místo neštěstí, zjistit rozsah škod, počet a stav zraněných a oznámit to na tísňovou linku.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zajistit, aby zdraví a lehce ranění opustili neprodleně místo neštěstí a nepřekáželi tak následnému zásahu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 46,
                text:
                    "Standardní postup oživování (kardiopulmonální resuscitace) předepisuje střídání počtu stlačení hrudníku s umělými dechy v poměru:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "30 : 2",
                        isCorrect: true
                    },
                    {
                        text: "15 : 3",
                        isCorrect: false
                    },
                    {
                        text: "5 : 1",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 47,
                text:
                    "Může zlomenina stehenní kosti způsobit život ohrožující krevní ztrátu?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Ano, protože krevní ztráta do okolí zlomeniny může činit až 2 litry.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ano, protože bolest má za následek prudké rozšíření cév.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Ne, krevní ztráta do okolí zlomeniny nemůže dosáhnout kritického množství.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 48,
                text: "Při snímání přilby musíme zejména:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Omezit na minimum pohyby hlavy a krční páteře zraněného.",
                        isCorrect: true
                    },
                    {
                        text: "Dát pozor, aby se nepoškodila.",
                        isCorrect: false
                    },
                    {
                        text: "Postupovat rychle.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 49,
                text: "Na jaký podnět zareaguje zdravý člověk rychleji?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Na zrakový, např. světelné výstražné světlo.",
                        isCorrect: false
                    },
                    {
                        text: "Na sluchový - např. siréna, zvuk klaksonu.\t",
                        isCorrect: true
                    },
                    {
                        text: "Na oba dva stejně rychle. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 50,
                text: "Nepřímou masáž srdce provádí zachránce nejlépe:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "V kleče u hrudníku postiženého, s nataženými lokty a se zápěstími obou rukou položenými na sobě.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Ve stoje, stlačování hrudníku provádí v hlubkém předklonu s nataženými lokty, aby bylo využito setrvačnosti těla.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Ve stoje s pokrčenými lokty, postiženého pro tento úkon vyzvedneme do optimální výše, např. na kapotu automobilu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 51,
                text:
                    "Pokud se v zahraničí dostanete do tísňové situace, budete volat na mezinárodní telefonní číslo:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "112",
                        isCorrect: true
                    },
                    {
                        text: "121",
                        isCorrect: false
                    },
                    {
                        text: "122",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 52,
                text:
                    "Pro řidiče je nejnáročnější soustředit pozornost na jízdu:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Časně ráno – mezi 2. a 4. hodinou ranní.",
                        isCorrect: true
                    },
                    {
                        text: "Odpoledne mezi 14. a 16. hodinou.",
                        isCorrect: false
                    },
                    {
                        text: "Od půlnoci do rána.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 53,
                text: "Oživování (resuscitaci) dítěte zahajujeme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Několika vdechy, trvá-li bezvědomí, pokračujeme srdeční masáží.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Několika vdechy, abychom dítěti nejdříve rozepjali plíce.",
                        isCorrect: false
                    },
                    {
                        text: "Uložením do stabilizované polohy.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 54,
                text: "Frekvence srdeční masáže, u dospělé osoby, by měla být:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "100 stlačení za minutu.",
                        isCorrect: true
                    },
                    {
                        text: "60 stlačení za minutu.",
                        isCorrect: false
                    },
                    {
                        text: "Tak rychlá, jak lze fyzicky zvládnout.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 55,
                text: "Člověku v bezvědomí nesmíme nikdy hlavu:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Předklonit a podložit.",
                        isCorrect: true
                    },
                    {
                        text: "Zaklonit.",
                        isCorrect: false
                    },
                    {
                        text: "Obvazovat.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 56,
                text: "Zraněného, kterému se špatně dýchá, bychom neměli:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Položit do vodorovné polohy na zádech.",
                        isCorrect: true
                    },
                    {
                        text: "Posadit.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Nechat opírat se rukama (např. o stůl, opěradlo apod.)",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 57,
                text: "Oživování (resuscitaci) dospělého zahajujeme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Srdeční masáží, abychom co nejdříve obnovili krevní oběh.",
                        isCorrect: true
                    },
                    {
                        text: "Podložením hlavy.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Několika vdechy, abychom zraněnému uvolnili dýchací cesty.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 58,
                text: "Masivní krvácení v oblasti krku:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Zastavíme okamžitým vložením a tlakem prstů (chráněné rukavicemi) do rány.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Zaškrtíme použitím gumového škrtidla kolem krku.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Není nebezpečné, není ho proto potřeba ošetřovat.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 59,
                text:
                    "Zastavení stříkajícího krvácení při poskytování první pomoci:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Má absolutní přednost.",
                        isCorrect: true
                    },
                    {
                        text: "Následuje ihned po srdeční masáži.",
                        isCorrect: false
                    },
                    {
                        text: "Následuje po ukončení volání na tísňovou linku.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 60,
                text:
                    "Pro záchranu postiženého náhlou zástavou srdeční činnosti je v prvních minutách nejdůležitější:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Nepřímá srdeční masáž.",
                        isCorrect: true
                    },
                    {
                        text: "Dýchání z úst do úst.",
                        isCorrect: false
                    },
                    {
                        text: "Uvedení do polohy na boku.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 61,
                text: "Pacienta v bezvědomí ukládáme do polohy na boku:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Aby při zvracení nevdechl zvratky.",
                        isCorrect: true
                    },
                    {
                        text: "Protože je pro něj pohodlnější.",
                        isCorrect: false
                    },
                    {
                        text: "Abychom zabránili rozvoji šoku.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 62,
                text: "Pokud nevím, jak poskytnout první pomoc:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Operátorka tísňové linky je povinna poradit, jak postupovat.",
                        isCorrect: true
                    },
                    {
                        text: "Musím se zeptat kolemstojících.",
                        isCorrect: false
                    },
                    {
                        text: "Vyhledám návod v autolékárničce.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 63,
                text: "Masivní nebo stříkající krvácení:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Zastavíme nejlépe přiložením tlakového obvazu.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Můžeme zastavit zaškrcením, například drátem obtočeným kolem paže.",
                        isCorrect: false
                    },
                    {
                        text: "Musí zastavit odborník.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 64,
                text: "Masivní krvácení zastavujeme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Přiložením tlakového obvazu v místě krvácení a polohou rány nad úrovní srdce.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Přiložením krycího obvazu na ránu a uložením pacienta do polohy na boku.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Zaškrcením končetiny nad ránou a polohou rány pod úrovní srdce.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 65,
                text:
                    "K vypuzení cizího tělesa z dýchacích cest použijeme stlačení nadbřišku (Heimlichův manévr) u:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Dospělých.",
                        isCorrect: true
                    },
                    {
                        text: "Dětí do osmi let věku.",
                        isCorrect: false
                    },
                    {
                        text: "Těhotných žen.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 66,
                text:
                    "Prvním výkonem při první pomoci u zraněného v bezvědomí bude:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Pokus o uvolnění dýchacích cest.",
                        isCorrect: true
                    },
                    {
                        text: "Uložení do polohy na boku.",
                        isCorrect: false
                    },
                    {
                        text: "Znehybnění případných zlomenin.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 67,
                text:
                    "Jak se zachováte při kolapsovém stavu, kdy postižený upadne a ztrácí vědomí?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "ihned zahájím resuscitaci",
                        isCorrect: false
                    },
                    {
                        text:
                            "zvednu nohy postiženého a zajistím volné dýchací cesty",
                        isCorrect: true
                    },
                    {
                        text: "postiženého posadím a zavolám záchranou službu",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 68,
                text: "Kdy zahájíte zevní srdeční masáž:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "jen pokud u poraněného nehmatám pulz",
                        isCorrect: false
                    },
                    {
                        text:
                            "pokud je poraněný v hlubokém bezvědomí a nedýchá",
                        isCorrect: true
                    },
                    {
                        text: "pokud masivně krvácí",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 69,
                text: "U dopravní nehody s poraněním voláme jako první:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "hasiče (150)",
                        isCorrect: false
                    },
                    {
                        text: "policii (158)",
                        isCorrect: false
                    },
                    {
                        text: "záchrannou službu (155)",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 70,
                text:
                    "Poraněný se po dopravní nehodě se domáhá tekutin, jak se zachováte:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "poskytnu mu tekutiny v neomezeném množství",
                        isCorrect: false
                    },
                    {
                        text: "nedám mu napít ani přes jeho naléhání",
                        isCorrect: true
                    },
                    {
                        text: "mohu mu dát i najíst",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 71,
                text: "Při umělém dýchání z plic do plic u dospělého:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "dýchám frekvencí alespoň 20 vdechů/min a vždy se snažím o co největší vdech",
                        isCorrect: false
                    },
                    {
                        text:
                            "dýchám úplně normálně frekvencí 6-8 vdechů/min, bez extrémního nádechu a vdechu do poraněného",
                        isCorrect: true
                    },
                    {
                        text:
                            "vdechuji do plic poraněného jen obsah vzduchu ve svých ústech",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 72,
                text:
                    "Jak budete postupovat, jste-li sami a opakovaně se Vám nedaří zajistit dýchací cesty:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "budu pokračovat v opakovaných pokusech, dokud se mi to nepodaří",
                        isCorrect: false
                    },
                    {
                        text:
                            "přeruším snažení po 3-4 pokusech a zahájím zevní srdeční masáž",
                        isCorrect: true
                    },
                    {
                        text: "vzdám se jakékoliv další aktivity",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 73,
                text:
                    "U poraněného v hlubokém bezvědomí a bezdeší nastávají nezvratné změny mozkové tkáně do:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "5 min.",
                        isCorrect: true
                    },
                    {
                        text: "10 min.",
                        isCorrect: false
                    },
                    {
                        text: "20 min.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 74,
                text: "Při poranění motorkáře, který je v bezvědomí a nedýchá:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "nikdy nesundávám přilbu",
                        isCorrect: false
                    },
                    {
                        text:
                            "je nejlepší vyproštění hlavy ve dvou zachráncích, kdy jeden pevně svírá hlavu poraněného a druhý opatrně sejme přilbu",
                        isCorrect: true
                    },
                    {
                        text: "mohu sejmout přilbu jakýmkoliv způsobem",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 75,
                text:
                    "Při úrazu hlavy s drobnějším viditelným krvácením nejvíce poraněného ohrožuje:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "krvácení",
                        isCorrect: false
                    },
                    {
                        text: "následné bezvědomí při poranění mozkové tkáně",
                        isCorrect: true
                    },
                    {
                        text: "zlomeniny kostí lebky",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 76,
                text:
                    "Při provádění zevní srdeční masáže je správné stlačení hrudní kosti asi o:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "4-5 cm u dospělého tj. na šířku dvou palců zachraňovaného",
                        isCorrect: true
                    },
                    {
                        text: "stačí 1-2 cm",
                        isCorrect: false
                    },
                    {
                        text: "8-10 cm",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 77,
                text:
                    "Jak budete postupovat u poraněného, který má po pádu z motocyklu zlomenou dolní končetinu a reaguje na oslovení:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "zavolám pomoc, případně stabilizuji zlomeniny a do příjezdu ZS budu u poraněného nadále sledovat stav vědomí a dýchání",
                        isCorrect: true
                    },
                    {
                        text: "stabilizuji zlomeninu a teprve potom zavolám ZS",
                        isCorrect: false
                    },
                    {
                        text:
                            "poraněného se nebudu vůbec dotýkat, aby nedošlo ke zhoršení jeho stavu",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 78,
                text:
                    "Poraněný je v bezvědomí, leží na zádech a zatím dýchá. Náhle začne zvracet. Jak budete postupovat:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "nechám ho zvracet, nehrozí mu žádné nebezpečí",
                        isCorrect: false
                    },
                    {
                        text:
                            "otočím mu hlavu na stranu a snažím se mu vyčistit dutinu ústní",
                        isCorrect: true
                    },
                    {
                        text:
                            "nesmím mu pohnout hlavou (může mít poraněnou páteř) a nevadí, že může zvratky vdechnout do dýchacích cest",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 79,
                text: "Hrozí trestní postih, pokud neposkytnete první pomoc:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "ano",
                        isCorrect: true
                    },
                    {
                        text: "ne",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 80,
                text: "Pokud vidíte, že účastník nehody masivně krvácí:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "vrátím se k vlastnímu vozu a začnu hledat v lékárničce obvazový materiál",
                        isCorrect: false
                    },
                    {
                        text:
                            "neprodleně krvácející místo stlačím prsty, dlaní nebo složeným kusem oděvu",
                        isCorrect: true
                    },
                    {
                        text:
                            "krvácející místo nebudu ošetřovat, začnu poraněnému zajišťovat životní funkce tj. umělé dýchání, zevní srdeční masáž",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 81,
                text: "Jak zjistíte stav vědomí pacienta:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "oslovím ho, zkusím bolestivý podnět (štípnutí do ušního lalůčku)",
                        isCorrect: true
                    },
                    {
                        text: "zkusím bolestivý podnět ostrým předmětem",
                        isCorrect: false
                    },
                    {
                        text: "poraněného hlasitě oslovím a zkusím posadit",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 82,
                text: "Jak jednoznačně zjistíte, že poraněný dýchá:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "je růžový",
                        isCorrect: false
                    },
                    {
                        text:
                            "při sklonění se k ústům poraněného slyším jeho dech a cítím ho na své tváři",
                        isCorrect: true
                    },
                    {
                        text: "nemá příznaky cyanózy ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 83,
                text: "Jak zajistíte průchodnost dýchacích cest:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "zakloním mírně hlavu a předsunu dolní čelist směrem vzhůru, event. vyčistím ústa od cizích těles(zvratků, krve..)",
                        isCorrect: true
                    },
                    {
                        text: "předkloním mu hlavu",
                        isCorrect: false
                    },
                    {
                        text:
                            "chytnu jazyk poraněného a snažím se ho vytáhnout z dutiny ústní",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 84,
                text: "Po zahájení resuscitace je nejdůležitější:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "resuscitovat v přesně daném poměru 30:2",
                        isCorrect: false
                    },
                    {
                        text:
                            "resuscitaci nepřerušovat do příjezdu ZS, obnovení dýchání nebo vlastního vyčerpání",
                        isCorrect: true
                    },
                    {
                        text: "pravidelně kontrolovat puls a dech poraněného",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 85,
                text:
                    "Jste svědek dopravní nehody, na místě jsou dva zranění, z nichž jeden je v bezvědomí, druhý při vědomí, ale výrazně krvácí. Jaký bude Váš postup?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "nejdříve zjistím, zda poraněný v bezvědomí dýchá",
                        isCorrect: false
                    },
                    {
                        text:
                            "neprodleně zastavím masivní krvácení, zjistím stav poraněného v bezvědomí, zavolám ZS a zajistím místo nehody ",
                        isCorrect: true
                    },
                    {
                        text:
                            "zajistím parkovací místo vozidlu ZS a vyčkám jeho příjezdu",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 86,
                text:
                    "Zjistíte, že poraněný má v ráně zabodnuté cizí těleso. Co uděláte?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "snažím se těleso opatrně z rány vyndat a zastavit krvácení",
                        isCorrect: false
                    },
                    {
                        text:
                            "těleso ponechám v ráně, ošetřím okolní krvácení, zajistím životní funkce",
                        isCorrect: true
                    },
                    {
                        text:
                            "poraněného nemusím sledovat a kontrolovat, pouze přivolám ZS",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 87,
                text:
                    "Poraněný je při vědomí a velmi silně krvácí z rány na krku. Co uděláte?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "vrátím se k vozu a začnu hledat v lékárničce vhodný obvazový materiál",
                        isCorrect: false
                    },
                    {
                        text:
                            "neprodleně krvácející místo stlačím prsty, dlaní nebo složeným kusem oděvu",
                        isCorrect: true
                    },
                    {
                        text:
                            "krvácející místo nebudu ošetřovat, začnu poraněnému zajišťovat životní funkce tj. umělé dýchání, zevní srdeční masáž",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 88,
                text:
                    "Poraněný je při vědomí a stěžuje si na silnou bolest v oblasti zad, eventuálně na brnění nebo necitlivost dolních končetin. Jaké by mohl mít poranění?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "zlomeniny dolních končetin",
                        isCorrect: false
                    },
                    {
                        text: "poranění hrudníku",
                        isCorrect: false
                    },
                    {
                        text:
                            "poranění páteře, při změně citlivosti také poranění míchy",
                        isCorrect: true
                    }
                ]
            },
            {
                index: 89,
                text:
                    "Poraněný je v bezvědomí a dýchá. Jakou pomoc mu poskytnete?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "mírně zakloním hlavu a předsunu dolní čelist, uvolním mu tak dýchací cesty a budu ho sledovat do příjezdu ZS, pokud dýchat přestane, ihned zahájím oživování\n",
                        isCorrect: true
                    },
                    {
                        text:
                            "přivolám pouze ZS, pokud poraněný dýchá, nemusím ho dále sledovat",
                        isCorrect: false
                    },
                    {
                        text: "neprodleně zahájím srdeční masáž",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 90,
                text: "Pro kvalitně prováděnou srdeční masáž je nejdůležitější",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "dostatečná hloubka stlačení hrudní kosti a frekvence.",
                        isCorrect: true
                    },
                    {
                        text: "jen frekvence.",
                        isCorrect: false
                    },
                    {
                        text: "jen hloubka stlačení hrudní kosti.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 91,
                text: "U poraněného s podezřením na úraz páteře:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "smím s poraněným manipulovat bez omezení.",
                        isCorrect: false
                    },
                    {
                        text:
                            "manipuluji s poraněným co nejméně, pouze v souvislosti se zajištěním životních funkcí.",
                        isCorrect: true
                    },
                    {
                        text: "s poraněným v žádném případě nehýbu.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 92,
                text: "Pří zevní srdeční masáži",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "vždy poraněného přesunu na pevnou podložku",
                        isCorrect: false
                    },
                    {
                        text:
                            "zahájím nepřímou srdeční masáž i v nevýhodné poloze (např. v sedu při zaklínění ve voze), pokud nelze poraněného rychle vyprostit",
                        isCorrect: true
                    },
                    {
                        text:
                            "pokud není poraněný na pevné podložce, srdeční masáž nezahájím",
                        isCorrect: false
                    }
                ]
            }
        ]
    },
    {
        link: "http://etesty2.mdcr.cz/Test/TestPractise/33",
        index: 7,
        title: "Prevence a řešení mimořádných událostí",
        questionCount: 21,
        questions: [
            {
                index: 1,
                text:
                    "Za jízdy v noci se vám náhle v dálkových světlech objeví lesní zvěř. Jak se zachováte?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Okamžitě ztlumíte světla na potkávací a snížíte rychlost jízdy.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Vypnete vnější osvětlení vozidla a pokračujete sníženou rychlostí v jízdě.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Pokračujete v jízdě stejným způsobem s dálkovými světly.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 2,
                text: "První aktivitou účastníků dopravní nehody musí být:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Zabránění dalším možným újmám na zdraví a životě účastníků dopravní nehody a dalším materiálním škodám.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Obhlídka místa dopravní nehody a zjištění materiálních škod na vozidlech.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Informovat policii ČR o místě dopravní nehody, případně informovat odtahovou službu o místě nehody.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 3,
                text: "Jakým způsobem předvídáte nečekané situace?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Pozorně sledujete veškeré dění na vozovce i mimo ni (např. na chodníku).",
                        isCorrect: true
                    },
                    {
                        text:
                            "Sledujete jen situaci bezprostředně před vozidlem.",
                        isCorrect: false
                    },
                    {
                        text: "Znáte brzdnou dráhu vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 4,
                text:
                    "Pokud je řidič oslněn světly protijedoucího auta, oko se opět přizpůsobí normálnímu vidění za:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "3 – 10 sekund.",
                        isCorrect: true
                    },
                    {
                        text: "Ihned.",
                        isCorrect: false
                    },
                    {
                        text: "21 –30 sekund.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 5,
                text: "Během bezpečnostní přestávky řidič:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Nevykonává žádnou činnost vyplývající z jeho pracovních povinností kromě dozoru na vozidlo a jeho náklad.",
                        isCorrect: true
                    },
                    {
                        text: "Vždy odstraní odpadky z vozidla.",
                        isCorrect: false
                    },
                    {
                        text: "V nočních hodinách povinně 2 hodiny prospí.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 6,
                text:
                    "Kde se mají zdržovat cestující v případě dopravní nehody na dálnici?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Za svodidly mimo dálnici.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Před vozidly, na kterých byla v důsledku dopravní nehody způsobena škoda.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Za vozidly, na kterých byla v důsledku dopravní nehody způsobena škoda.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 7,
                text:
                    "Jaké činnosti nesmí vykonávat řidič, který je účastníkem dopravní nehody?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Nesmí požívat alkoholické nápoje anebo jiné návykové látky.",
                        isCorrect: true
                    },
                    {
                        text: "Nesmí používat mobilní telefon.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Nesmí komunikovat se svědky dopravní nehody z důvodu ovlivňování svědků.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 8,
                text: "Po výměně kola matice na kole:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Dotáhneme klíčem a po spuštění nápravy je dotáhneme dle pokynů výrobce. Jejich dotáhnutí po ujetí vzdálenosti cca 50 km zkontrolujeme.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Dotáhneme jen částečně, plně je dotáhneme až po ujetí vzdálenosti cca 50 km.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Dotáhneme klíčem a po spuštění nápravy je dotáhneme dle pokynů výrobce. Jestliže jsme postupovali dle pokynů výrobce, kontrolu jejich dotažení už nemusíme provádět.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 9,
                text: "Když je při výměně kol nutno dohustit pneumatiku:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Dohustíme ji na tlak předepsaný pro nápravu, na které jsme kolo měnili.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Dohustíme ji na tlak, který poskytuje kompresor vozidla.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Neměníme tlak huštění, protože rezervní kolo má být nahuštěné na nejvyšší tlak huštění.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 10,
                text: "Při výměně kol:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Použijeme zvedák nosnosti rovnající se minimálně zatížení kola, které chceme vyměnit.",
                        isCorrect: true
                    },
                    {
                        text: "Použijeme zvedák jakékoliv nosnosti.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Použijeme zvedák o nosnosti o 100 kg větší, než je zatížení kola.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 11,
                text: "Při výměně kola:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Musíme zajistit vozidlo proti samovolnému pohybu zabrzděním a zakládacími klíny. Matice kol povolíme. Odstraníme je, až když je kolo vozidla zvednuté nad podklad.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Musíme zajistit vozidlo proti samovolnému pohybu. Matice kol povolujeme až když je kolo vozidla zvednuté tak, že ztratilo kontakt s podkladem.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Musíme zajistit vozidlo proti samovolnému pohybu. Matice kol odstraníme, už když je pod vozem podložený zdvihák.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 12,
                text: "Při výměně kola:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Používáme náhradní kolo předepsané výrobcem.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Použijeme jakékoliv kolo, pokud je schopné přenést okamžité zatížení nápravy.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Použijeme jakékoliv kolo, které je nahuštěno na předepsaný tlak.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 13,
                text: "Spoiler se nastavuje podle:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Skutečné výšky nástavby vozidla.",
                        isCorrect: true
                    },
                    {
                        text: "Skutečné výšky kabiny vozidla.",
                        isCorrect: false
                    },
                    {
                        text: "Skutečného okamžitého odporu vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 14,
                text:
                    "Snížený tlak v pneumatikách o 100 kPa zvýší spotřebu paliva až o:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "5%.",
                        isCorrect: true
                    },
                    {
                        text: "10%.",
                        isCorrect: false
                    },
                    {
                        text: "15%.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 15,
                text:
                    "Při nízkém tlaku v pneumatikách je překonáván zvýšený valivý odpor a:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Zvyšuje se spotřeba paliva (až o 5%) a snižuje se životnost pneumatik.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Snižuje se životnost pedálu akcelerace při překonávání zvýšeného valivého odporu vozidla. ",
                        isCorrect: false
                    },
                    {
                        text: "Snižuje se životnost axiálního ložiska hřídele.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 16,
                text:
                    "Jak obvykle reaguje starší řidič nebo chodec na vnější podněty?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Pomaleji než mladý řidič nebo chodec.",
                        isCorrect: true
                    },
                    {
                        text: "Rychleji než mladý řidič nebo chodec.",
                        isCorrect: false
                    },
                    {
                        text: "Stejně rychle jako mladý řidič nebo chodec.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 17,
                text:
                    "V lesním úseku, kterým projíždíte se před vámi objeví vysoká lesní zvěř. Jak se zachováte?",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Snížíte rychlost a ostatním řidičům dáte jasně najevo zapnutím světelného výstražného zařízení, že je na silnici nebezpečná situace.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Vozidlo uvedete náhle do klidu a na krajnici počkáte, než zvěř opustí silnici.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Budete dále pokračovat nezměněnou rychlostí, pouze s vypnutím osvětlení vozidla.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 18,
                text: "Krátce běžet ve volnoběhu necháváme motor:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Po delší jízdě na plný výkon z důvodu vyrovnání teploty nestejně tepelně zatížených míst. ",
                        isCorrect: true
                    },
                    {
                        text:
                            "Po velmi krátké a pomalé jízdě z důvodu vyrovnání teploty nestejně tepelně zatížených míst. ",
                        isCorrect: false
                    },
                    {
                        text:
                            "Po dlouhé pomalé jízdě z důvodu snížení teploty tepelně zatížených míst.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 19,
                text: "Účastníkem dopravní nehody je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "osoba, která se přímo zúčastnila dopravní nehody.",
                        isCorrect: true
                    },
                    {
                        text: "pouze osoba, která dopravní nehodu způsobila.",
                        isCorrect: false
                    },
                    {
                        text:
                            "osoba, která má bydliště v blízkosti dopravní nehody.",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 20,
                text: "Volně napnutou plachtou vozidla je:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text:
                            "Životnost plachty snížena a spotřeba paliva vozidla zvýšena aerodynamickým odporem.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Jen zvýšena spotřeba paliva vozidla, aerodynamický odpor se nezvyšuje.",
                        isCorrect: false
                    },
                    {
                        text:
                            "Spotřeba vozidla není zvýšena, aerodynamický odpor vozidla nezvyšuje spotřebu paliva. ",
                        isCorrect: false
                    }
                ]
            },
            {
                index: 21,
                text:
                    "Pokud je vozidlo vybaveno EDC (electronic diesel control) startujeme:",
                type: "text",
                videoLink: null,
                imageLinks: null,
                answers: [
                    {
                        text: "Bez sešlápnutí pedálu akcelerace.",
                        isCorrect: true
                    },
                    {
                        text:
                            "Při sešlápnutí pedálu akcelerace na polovinu výkonu motoru. ",
                        isCorrect: false
                    },
                    {
                        text: "Při plném sešlápnutí pedálu akcelerace.",
                        isCorrect: false
                    }
                ]
            }
        ]
    }
];

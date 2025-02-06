//variáveis das funções de combate
var round = 1;
var temp1 = "";
var dado1 = 6;
var dado2 = 6;
var dano = 0;
var dd_dano = 0;
var faseC;
var temp = ["", "", "", "", "", "", "", "", "", "", "", ""];
var dT;
var dG;
var dR;
var meioround = 0;

//dados do inimigo
var nomex2 = "o Golem de Ossos";
var vidax2 = 2;
var iniciativax2 = 7;
var golpex2 = 9;
var aparox2 = 7;
var esquivax2 = 7;
var danoax2 = 3;
var danofx2 = 0;
var armax2 = "Tacape de Ossos";
var absorcaox2 = 1;

function descerTela() {
    dT.scrollTop = dT.scrollHeight;
} //function descerTela(elememto)

function luta(nluta) {
    
    // Exemplo de combate
    if (parseInt(sessionStorage.getItem("combate2"), 10) == 0 && nluta == 2) {
        dT = document.getElementById("combateBox2");
        dG = document.getElementById("chatStatus2");
        dR = document.getElementById("rolar2");
        nomex = nomex2;
        vidax = vidax2;
        iniciativax = iniciativax2;
        golpex = golpex2;
        aparox = aparox2;
        esquivax = esquivax2;
        danoax = danoax2;
        danofx = danofx2;
        armax = armax2;
        absorcaox = absorcaox2;
        //combatex2 = 1;
        sessionStorage.setItem("combate2", 1);
        faseC = 0;
        round = 1;
        meioround = 0;
    } //if (combatex2 == 0 && nluta == 2)

    //! Não mexer aqui
    if (parseInt(sessionStorage.getItem("vida"), 10) > 0 && vidax > 0) {
        //fases do combate
        switch (faseC) {
            case 0:
                //dG.innerHTML = "<h4>COMBATE EM ANDAMENTO</h4>";
                temp[1] = "<h4>Disputa de Iniciativa</h4>";
                dado1 = Math.floor(Math.random() * 6 + 1);
                dado2 = Math.floor(Math.random() * 6 + 1);
                iniciativa1 = dado1 + dado2 + iniciativax;
                temp[2] =
                    "<h6>> Iniciativa d" +
                    nomex +
                    " > 2D6(" +
                    dado1 +
                    "+" +
                    dado2 +
                    ") + Iniciativa(+" +
                    iniciativax +
                    ") = " +
                    iniciativa1 +
                    "</h6>";
                dado1 = Math.floor(Math.random() * 6 + 1);
                dado2 = Math.floor(Math.random() * 6 + 1);
                iniciativa2 =
                    dado1 +
                    dado2 +
                    parseInt(sessionStorage.getItem("iniciativa"), 10);
                temp[3] =
                    "<h5>Iniciativa d" +
                    sessionStorage.getItem("nome") +
                    " > 2D6(" +
                    dado1 +
                    "+" +
                    dado2 +
                    ") + Iniciativa(+" +
                    sessionStorage.getItem("iniciativa") +
                    ") = " +
                    iniciativa2 +
                    " <</h5>";

                if (iniciativa1 > iniciativa2) {
                    temp[4] = "<h4><i>ROUND</i> : " + round + "</h4>";
                    round = round + 1;
                    dado1 = Math.floor(Math.random() * 6 + 1);
                    dado2 = Math.floor(Math.random() * 6 + 1);
                    golpe1 = dado1 + dado2 + golpex;
                    temp[5] =
                        "<h6>> Ataque d" +
                        nomex +
                        " > 2D6(" +
                        dado1 +
                        "+" +
                        dado2 +
                        ") + Golpe[" +
                        armax +
                        "](" +
                        golpex +
                        ") = " +
                        golpe1 +
                        "</h6>";
                    dado1 = Math.floor(Math.random() * 6 + 1);
                    dado2 = Math.floor(Math.random() * 6 + 1);

                    if (parseInt(sessionStorage.getItem("escudo"), 10) == 0) {
                        esquiva2 =
                            dado1 +
                            dado2 +
                            parseInt(sessionStorage.getItem("esquiva"), 10);
                        temp[6] =
                            "<h5>Esquiva d" +
                            sessionStorage.getItem("nome") +
                            " 2D6(" +
                            dado1 +
                            "+" +
                            dado2 +
                            ") + Esquiva(+" +
                            sessionStorage.getItem("esquiva") +
                            ") = " +
                            esquiva2 +
                            " <</h5>";
                    } else {
                        esquiva2 =
                            dado1 +
                            dado2 +
                            parseInt(sessionStorage.getItem("arma0_aparo"), 10);
                        temp[6] =
                            "<h5>Aparo d" +
                            sessionStorage.getItem("nome") +
                            " com " +
                            sessionStorage.getItem("arma0_nome") +
                            "(+" +
                            sessionStorage.getItem("arma0_aparo") +
                            ") + 2D6(" +
                            dado1 +
                            "+" +
                            dado2 +
                            ") = " +
                            esquiva2 +
                            " <</h5>";
                    }

                    if (golpe1 > esquiva2) {
                        dd_dano =
                            Math.floor(Math.random() * danoax + 1) + danofx;
                        if (
                            dd_dano >
                            parseInt(sessionStorage.getItem("absorcao"), 10)
                        ) {
                            dano =
                                dd_dano -
                                parseInt(
                                    sessionStorage.getItem("absorcao"),
                                    10
                                );
                            sessionStorage.setItem(
                                "vida",
                                parseInt(sessionStorage.getItem("vida"), 10) -
                                    dano
                            );
                        } else dano = 0;

                        if (danofx > 0)
                            temp[7] =
                                "<h4>Dano[" +
                                armax +
                                ":D" +
                                danoax +
                                "+" +
                                danofx +
                                "] = " +
                                dd_dano +
                                " - Absorção(" +
                                parseInt(
                                    sessionStorage.getItem("absorcao"),
                                    10
                                ) +
                                ") = " +
                                dano +
                                "</h4>";
                        else
                            temp[7] =
                                "<h4>Dano[" +
                                armax +
                                ":D" +
                                danoax +
                                "] = " +
                                dd_dano +
                                " - Absorção(" +
                                parseInt(
                                    sessionStorage.getItem("absorcao"),
                                    10
                                ) +
                                ") = " +
                                dano +
                                "</h4>";
                    } else temp[7] = "<h4>Não houve acerto no Ataque</h4>";

                    temp[8] =
                        "<h4>Vida d" +
                        nomex +
                        ": " +
                        vidax +
                        ", Vida d" +
                        sessionStorage.getItem("nome") +
                        ": " +
                        sessionStorage.getItem("vida") +
                        "</h4>";

                    meioround++;

                    if (parseInt(sessionStorage.getItem("vida"), 10) > 0) {
                        dado1 = Math.floor(Math.random() * 6 + 1);
                        dado2 = Math.floor(Math.random() * 6 + 1);
                        golpe2 =
                            dado1 +
                            dado2 +
                            parseInt(sessionStorage.getItem("arma1_golpe"), 10);
                        temp[9] =
                            "<h5>Ataque d" +
                            sessionStorage.getItem("nome") +
                            " > 2D6(" +
                            dado1 +
                            "+" +
                            dado2 +
                            ") + Golpe[" +
                            sessionStorage.getItem("arma1_nome") +
                            "](+" +
                            sessionStorage.getItem("arma1_golpe") +
                            ") = " +
                            golpe2 +
                            " <</h5>";
                        dado1 = Math.floor(Math.random() * 6 + 1);
                        dado2 = Math.floor(Math.random() * 6 + 1);

                        if (esquivax >= aparox) {
                            esquiva1 = dado1 + dado2 + esquivax;
                            temp[10] =
                                "<h6>> Esquiva d" +
                                nomex +
                                " > 2D6(" +
                                dado1 +
                                "+" +
                                dado2 +
                                ") + Esquiva(+" +
                                esquivax +
                                ") = " +
                                esquiva1 +
                                "</h6>";
                        } else {
                            esquiva1 = dado1 + dado2 + aparox;
                            temp[10] =
                                "<h6>> Aparo d" +
                                nomex +
                                " com " +
                                armax +
                                "(+" +
                                aparox +
                                ") + 2D6(" +
                                dado1 +
                                "+" +
                                dado2 +
                                ")  = " +
                                esquiva1 +
                                "</h6>";
                        }

                        if (golpe2 > esquiva1) {
                            dd_dano =
                                Math.floor(
                                    Math.random() *
                                        parseInt(
                                            sessionStorage.getItem(
                                                "arma1_danoa"
                                            ),
                                            10
                                        ) +
                                        1
                                ) +
                                parseInt(
                                    sessionStorage.getItem("arma1_danof"),
                                    10
                                );

                            if (dd_dano > absorcaox) {
                                dano = dd_dano - absorcaox;
                                vidax = vidax - dano;
                            } else dano = 0;

                            if (
                                parseInt(
                                    sessionStorage.getItem("arma1_danof"),
                                    10
                                ) > 0
                            )
                                temp[11] =
                                    "<h4>Dano[" +
                                    sessionStorage.getItem("arma1_nome") +
                                    ":D" +
                                    sessionStorage.getItem("arma1_danoa") +
                                    "+" +
                                    sessionStorage.getItem("arma1_danof") +
                                    "] = " +
                                    dd_dano +
                                    " - Absorção(" +
                                    absorcaox +
                                    ") = " +
                                    dano +
                                    "</h4>";
                            else
                                temp[11] =
                                    "<h4>Dano[" +
                                    sessionStorage.getItem("arma1_nome") +
                                    ":D" +
                                    sessionStorage.getItem("arma1_danoa") +
                                    "] = " +
                                    dd_dano +
                                    " - Absorção(" +
                                    absorcaox +
                                    ") = " +
                                    dano +
                                    "</h4>";
                        } else temp[11] = "<h4>Não houve acerto no Ataque</h4>";

                        temp[12] =
                            "<h4>Vida d" +
                            nomex +
                            ": " +
                            vidax +
                            ", Vida d" +
                            sessionStorage.getItem("nome") +
                            ": " +
                            sessionStorage.getItem("vida") +
                            "</h4>";

                        meioround++;
                    } //if (parseInt(sessionStorage.getItem('vida'), 10) > 0)
                } //if (iniciativa1 > iniciativa2)
                else {
                    temp[4] = "<h4><i>ROUND</i> : " + round + "</h4>";
                    round = round + 1;
                    dado1 = Math.floor(Math.random() * 6 + 1);
                    dado2 = Math.floor(Math.random() * 6 + 1);
                    golpe1 =
                        dado1 +
                        dado2 +
                        parseInt(sessionStorage.getItem("arma1_golpe"), 10);
                    temp[5] =
                        "<h5>Ataque d" +
                        sessionStorage.getItem("nome") +
                        " > 2D6(" +
                        dado1 +
                        "+" +
                        dado2 +
                        ") + Golpe[" +
                        sessionStorage.getItem("arma1_nome") +
                        "](+" +
                        sessionStorage.getItem("arma1_golpe") +
                        ") = " +
                        golpe1 +
                        " <</h5>";
                    dado1 = Math.floor(Math.random() * 6 + 1);
                    dado2 = Math.floor(Math.random() * 6 + 1);

                    if (esquivax > aparox) {
                        esquiva2 = dado1 + dado2 + esquivax;
                        temp[6] =
                            "<h6>> Esquiva d" +
                            nomex +
                            " > 2D6(" +
                            dado1 +
                            "+" +
                            dado2 +
                            ") + Esquiva(+" +
                            esquivax +
                            ") = " +
                            esquiva2 +
                            "</h6>";
                    } else {
                        esquiva2 = dado1 + dado2 + aparox;
                        temp[6] =
                            "<h6>> Aparo d" +
                            nomex +
                            " com " +
                            armax +
                            "(+" +
                            aparox +
                            ") + 2D6(" +
                            dado1 +
                            "+" +
                            dado2 +
                            ") = " +
                            esquiva2 +
                            "</h6>";
                    }

                    if (golpe1 > esquiva2) {
                        dd_dano =
                            Math.floor(
                                Math.random() *
                                    parseInt(
                                        sessionStorage.getItem("arma1_danoa"),
                                        10
                                    ) +
                                    1
                            ) +
                            parseInt(sessionStorage.getItem("arma1_danof"), 10);
                        if (dd_dano > absorcaox) {
                            dano = dd_dano - absorcaox;
                            vidax = vidax - dano;
                        } else dano = 0;

                        if (
                            parseInt(
                                sessionStorage.getItem("arma1_danof"),
                                10
                            ) > 0
                        )
                            temp[7] =
                                "<h4>Dano[" +
                                sessionStorage.getItem("arma1_nome") +
                                ":D" +
                                sessionStorage.getItem("arma1_danoa") +
                                "+" +
                                sessionStorage.getItem("arma1_danof") +
                                "] = " +
                                dd_dano +
                                " - Absorção(" +
                                absorcaox +
                                ") = " +
                                dano +
                                "</h4>";
                        else
                            temp[7] =
                                "<h4>Dano[" +
                                sessionStorage.getItem("arma1_nome") +
                                ":D" +
                                sessionStorage.getItem("arma1_danoa") +
                                "] = " +
                                dd_dano +
                                " - Absorção(" +
                                absorcaox +
                                ") = " +
                                dano +
                                "</h4>";
                    } else temp[7] = "<h4>Não houve acerto no Ataque</h4>";

                    temp[8] =
                        "<h4>Vida d" +
                        nomex +
                        ": " +
                        vidax +
                        ", Vida d" +
                        sessionStorage.getItem("nome") +
                        ": " +
                        sessionStorage.getItem("vida") +
                        "</h4>";

                    meioround++;

                    if (vidax > 0) {
                        dado1 = Math.floor(Math.random() * 6 + 1);
                        dado2 = Math.floor(Math.random() * 6 + 1);
                        golpe2 = dado1 + dado2 + golpex;
                        temp[9] =
                            "<h6>> Ataque d" +
                            nomex +
                            " > 2D6(" +
                            dado1 +
                            "+" +
                            dado2 +
                            ") + Golpe[" +
                            armax +
                            "](+" +
                            golpex +
                            ") = " +
                            golpe2 +
                            "</h6>";
                        dado1 = Math.floor(Math.random() * 6 + 1);
                        dado2 = Math.floor(Math.random() * 6 + 1);

                        if (
                            parseInt(sessionStorage.getItem("escudo"), 10) == 0
                        ) {
                            esquiva1 =
                                dado1 +
                                dado2 +
                                parseInt(sessionStorage.getItem("esquiva"), 10);
                            temp[10] =
                                "<h5>Esquiva d" +
                                sessionStorage.getItem("nome") +
                                " > 2D6(" +
                                dado1 +
                                "+" +
                                dado2 +
                                ") + Esquiva(+" +
                                sessionStorage.getItem("esquiva") +
                                ") = " +
                                esquiva1 +
                                " <</h5>";
                        } //if(parseInt(sessionStorage.getItem('esquiva'), 10) > parseInt(sessionStorage.getItem('arma1_aparo'), 10))
                        else {
                            esquiva1 =
                                dado1 +
                                dado2 +
                                parseInt(
                                    sessionStorage.getItem("arma0_aparo"),
                                    10
                                );
                            temp[10] =
                                "<h5>Aparo d" +
                                sessionStorage.getItem("nome") +
                                " com " +
                                sessionStorage.getItem("arma0_nome") +
                                "(+" +
                                sessionStorage.getItem("arma0_aparo") +
                                ") + 2D6(" +
                                dado1 +
                                "+" +
                                dado2 +
                                ") = " +
                                esquiva1 +
                                " <</h5>";
                        }

                        if (golpe2 > esquiva1) {
                            dd_dano =
                                Math.floor(Math.random() * danoax + 1) + danofx;
                            if (
                                dd_dano >
                                parseInt(sessionStorage.getItem("absorcao"), 10)
                            ) {
                                dano =
                                    dd_dano -
                                    parseInt(
                                        sessionStorage.getItem("absorcao"),
                                        10
                                    );
                                sessionStorage.setItem(
                                    "vida",
                                    parseInt(
                                        sessionStorage.getItem("vida"),
                                        10
                                    ) - dano
                                );
                            } else dano = 0;

                            if (danofx > 0)
                                temp[11] =
                                    "<h4>Dano[" +
                                    armax +
                                    ":D" +
                                    danoax +
                                    "+" +
                                    danofx +
                                    "] = " +
                                    dd_dano +
                                    " - Absorção(" +
                                    absorcaox +
                                    ") = " +
                                    dano +
                                    "</h4>";
                            else
                                temp[11] =
                                    "<h4>Dano[" +
                                    armax +
                                    ":D" +
                                    danoax +
                                    "] = " +
                                    dd_dano +
                                    " - Absorção(" +
                                    absorcaox +
                                    ") = " +
                                    dano +
                                    "</h4>";
                        } else temp[11] = "<h4>Não houve acerto no Ataque</h4>";

                        temp[12] =
                            "<h4>Vida d" +
                            nomex +
                            ": " +
                            vidax +
                            ", Vida d" +
                            sessionStorage.getItem("nome") +
                            ": " +
                            sessionStorage.getItem("vida") +
                            "</h4>";

                        meioround++;
                    } //if (vidax > 0)
                } //else if (iniciativa1 > iniciativa2)

                dR.value = "Round:" + (round - 1);

                break;

            case 1:
                temp1 = dG.innerHTML + temp[1];
                dG.innerHTML = temp1;
                descerTela();
                dR.value = "Iniciativa:2D6";
                break;

            case 2:
                if (iniciativa1 > iniciativa2) {
                    for (i = 2; i < 6; i++) {
                        temp1 = dG.innerHTML + temp[i];
                        dG.innerHTML = temp1;
                    } //for (i = 2; i < 6; i++)

                    if (
                        parseInt(sessionStorage.getItem("esquiva"), 10) >
                        parseInt(sessionStorage.getItem("aparo"), 10)
                    )
                        dR.value = "Esquiva:2D6";
                    else dR.value = "Aparo:2D6";
                } //if (iniciativa1 > iniciativa2)
                else {
                    for (i = 2; i < 5; i++) {
                        temp1 = dG.innerHTML + temp[i];
                        dG.innerHTML = temp1;
                    } //for (i = 2; i < 5; i++)

                    dR.value = "Golpe:2D6";
                }
                descerTela();
                break;

            case 3:
                if (iniciativa1 > iniciativa2) {
                    for (i = 6; i < 9; i++) {
                        temp1 = dG.innerHTML + temp[i];
                        dG.innerHTML = temp1;
                    } //for (i = 6; i < 9; i++)
                } else {
                    for (i = 5; i < 9; i++) {
                        temp1 = dG.innerHTML + temp[i];
                        dG.innerHTML = temp1;
                    } //for (i = 5; i < 9; i++)
                }
                descerTela();
                dR.value = "Continuar";
                break;

            case 4:
                if (meioround == 2) {
                    if (iniciativa1 > iniciativa2) dR.value = "Golpe:2D6";
                    else {
                        temp1 = dG.innerHTML + temp[9];
                        dG.innerHTML = temp1;

                        if (esquivax > aparox) dR.value = "Esquiva:2D6";
                        else dR.value = "Aparo:2D6";
                    }
                    descerTela();
                }

                break;

            case 5:
                if (meioround == 2) {
                    if (iniciativa1 > iniciativa2) {
                        for (i = 9; i < 13; i++) {
                            temp1 = dG.innerHTML + temp[i];
                            dG.innerHTML = temp1;
                        } //for (i = 9; i < 13; i++)
                    } else {
                        for (i = 10; i < 13; i++) {
                            temp1 = dG.innerHTML + temp[i];
                            dG.innerHTML = temp1;
                        }
                    }
                    descerTela();
                    dR.value = "Continuar";
                }
                break;

            case 6:
                if (
                    vidax > 0 &&
                    parseInt(sessionStorage.getItem("vida"), 10) > 0
                ) {
                    faseC = -1;
                    dR.value = "Reiniciar";
                    meioround = 0;
                }

                break;
        } //switch (faseC)
    } //if(parseInt(sessionStorage.getItem('vida'), 10) > 0 && vidax > 0)
    else {
        if (meioround != 0) {
            dR.value = "Round:" + (round - 1);

            switch (faseC) {
                case 1:
                    temp1 = dG.innerHTML + temp[1];
                    dG.innerHTML = temp1;
                    descerTela();
                    dR.value = "Iniciativa:2D6";
                    break;

                case 2:
                    if (iniciativa1 > iniciativa2) {
                        for (i = 2; i < 6; i++) {
                            temp1 = dG.innerHTML + temp[i];
                            dG.innerHTML = temp1;
                        } //for (i = 2; i < 6; i++)

                        if (
                            parseInt(sessionStorage.getItem("esquiva"), 10) >
                            parseInt(sessionStorage.getItem("aparo"), 10)
                        )
                            dR.value = "Esquiva:2D6";
                        else dR.value = "Aparo:2D6";
                    } //if (iniciativa1 > iniciativa2)
                    else {
                        for (i = 2; i < 5; i++) {
                            temp1 = dG.innerHTML + temp[i];
                            dG.innerHTML = temp1;
                        } //for (i = 2; i < 5; i++)

                        dR.value = "Golpe:2D6";
                    } //else if (iniciativa1 > iniciativa2)

                    descerTela();

                    break;

                case 3:
                    if (iniciativa1 > iniciativa2) {
                        for (i = 6; i < 9; i++) {
                            temp1 = dG.innerHTML + temp[i];
                            dG.innerHTML = temp1;
                        } //for (i = 6; i < 9; i++)
                    } else {
                        for (i = 5; i < 9; i++) {
                            temp1 = dG.innerHTML + temp[i];
                            dG.innerHTML = temp1;
                        } //for (i = 5; i < 9; i++)
                    }

                    descerTela();
                    dR.value = "Continuar";

                    if (meioround == 1) meioround = 0;

                    break;

                case 4:
                    if (meioround == 2) {
                        if (iniciativa1 > iniciativa2) dR.value = "Golpe:2D6";
                        else {
                            temp1 = dG.innerHTML + temp[9];
                            dG.innerHTML = temp1;

                            if (esquivax > aparox) dR.value = "Esquiva:2D6";
                            else dR.value = "Aparo:2D6";
                        }
                        descerTela();
                    }
                    break;

                case 5:
                    if (meioround == 2) {
                        if (iniciativa1 > iniciativa2) {
                            for (i = 9; i < 13; i++) {
                                temp1 = dG.innerHTML + temp[i];
                                dG.innerHTML = temp1;
                            } //for (i = 9; i < 13; i++)
                        } else {
                            for (i = 10; i < 13; i++) {
                                temp1 = dG.innerHTML + temp[i];
                                dG.innerHTML = temp1;
                            }
                        }
                        descerTela();
                        dR.value = "Continuar";
                    }
                    break;

                case 6:
                    dR.value = "Finalizar";
                    meioround = 0;

                    break;
            } //switch (faseC)
        } //if (meioround != 0)
        else {
            dG.innerHTML = "<h4>COMBATE ENCERRADO</h4>";
            dR.value = "Voltar";

            if (vidax <= 0) {
                Swal.fire({
                    icon: "success",
                    title: "Vitória!",
                    text: nomex + " foi derrotado.",
                });
                if (nluta == 1)
                    timerId1 = setTimeout(function () {
                        combate1.style.display = "none";
                    }, 2000);
                if (nluta == 2)
                    timerId1 = setTimeout(function () {
                        combate2.style.display = "none";
                    }, 2000);
            } else if (parseInt(sessionStorage.getItem("vida"), 10) <= 0) {
                Swal.fire({
                    icon: "error",
                    title: "Derrota.",
                    text: sessionStorage.getItem("nome") + " foi derrotado.",
                });
                if (nluta == 1)
                    timerId1 = setTimeout(function () {
                        combate1.style.display = "none";
                    }, 2000);
                if (nluta == 2)
                    timerId1 = setTimeout(function () {
                        combate2.style.display = "none";
                    }, 2000);
            }
        }
    } //else if(parseInt(sessionStorage.getItem('vida'), 10) > 0 && vidax > 0)

    faseC++;
} //async function luta1()

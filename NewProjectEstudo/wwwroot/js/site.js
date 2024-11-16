document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

$(document).ready(function () {
    function configurarLink(id, url, usaHash = false) {
        $(id).click(function (event) {
            event.preventDefault();
            if (usaHash) {
                window.location.usaHash = url;
            }
            else {
                window.location.href = url;
            }
        });
    }


    //link nav side bar //
    configurarLink(".link-inicio", "/Home/Index");
    configurarLink(".link-funcionarios", "/Funcionarios/Index");
    configurarLink(".link-tarefas", "/Tarefas/Index");
    configurarLink(".link-imagens", "/Imagem/Index");
    configurarLink(".link-configuracao", "/Configuracao/Index", true);
    //-------------------------------------------------------------------------//

    // LINK NAV  CRUD  DE TAREFAS E FUNCIONARIOS ------------------------------//

    configurarLink(".link-adicionar-tarefas", "/Tarefas/Criar");
    configurarLink(".link-editar-tarefas", "/Tarefas/Editar");
    configurarLink(".link-apagar-tarefas", "/Tarefas/ApagarConfirmacao");
    configurarLink(".link-voltar-tarefas", "/Tarefas/Index");

    // LINK NAV CRUD FUNCIONARIOS ---------------------------------------------//

    configurarLink(".link-adicionar-func", "/Funcionarios/Criar");
    configurarLink(".link-editar-func", "/Funcionarios/Editar");
    configurarLink(".link-apagar-func", "/Funcionarios/ApagarConfirmacao");
    configurarLink(".link-voltar-func", "/Funcionarios/Index");
});

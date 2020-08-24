<div class="modal fade show" id="modalEditarTutorial" tabindex="-1" role="dialog" aria-labelledby="modalEditarTutorial">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalEditarTutorialLabel">Editar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">
                <form class="">
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="position-relative form-group">
                                <label class="" for="titulo_suporte">Título</label>
                                <input class="form-control" id="titulo_suporte"
                                       name="titulo_suporte"
                                       type="text"
                                       value="Titulo exemplo para editar">
                            </div>
                        </div>

                    </div>
                    <div class="form-row">
                        <div class="col-md-12">
                            <div class="position-relative form-group">
                                <label class="" for="url_suporte">Link</label>
                                <input
                                        class="form-control" id="url_suporte"
                                        name="url_suporte"
                                        type="url"
                                        value="https://linkexemplo.com.br">
                            </div>
                        </div>
                    </div>

                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                <button type="submit" onclick="location.href='gestor-notificacoes.php'" class="btn btn-primary"><i class="pe-7s-refresh-2"> </i> Atualizar</button>
            </div>
        </div>
    </div>
</div>
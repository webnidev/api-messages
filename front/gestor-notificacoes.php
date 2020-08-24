<?php require_once('header.php') ?>






<div class="app-main__outer">
    <div class="app-main__inner">
        <div class="app-page-title">
            <div class="page-title-wrapper">
                <div class="page-title-heading">
                    <div class="page-title-icon">
                        <i class="pe-7s-graph3">
                        </i>
                    </div>
                    <div>Dashboard - Gestão de Notificações
                        <div class="page-title-subheading">Crie e gerencie notificações para serem exibidas no painel dos clientes de forma geral ou segmentada.
                        </div>
                    </div>
                </div>
            </div>



            <div class="row">
                <div class="col-md-4">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Cadastrar link de notificação</h5>
                            <form class="">
                                <div class="form-row">
                                    <div class="col-md-12">
                                        <div class="position-relative form-group">
                                            <label class="" for="titulo_notificacao">Título</label>
                                            <input class="form-control" id="titulo_notificacao"
                                                   name="titulo_notificacao"
                                                   placeholder="Digite o título" type="text"></div>
                                    </div>

                                </div>
                                <div class="form-row">
                                    <div class="col-md-12">
                                        <div class="position-relative form-group">
                                            <label class="" for="url_notificacao">Link</label>
                                            <input
                                                class="form-control" id="url_notificacao"
                                                name="url_notificacao" placeholder="Insira o link"
                                                type="url">
                                        </div>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="col-md-12">
                                        <label class="" for="">Canal de Distribuição</label>
                                        <select class="mb-2 form-control">
                                            <option value="1">Geral</option>
                                            <option value="2">Restaurantes</option>
                                            <option value="3">Pizzarias</option>
                                            <option value="4">Hamburguerias</option>
                                            <option value="5">Supermercados</option>
                                            <option value="6">Lojas e Varejo em Geral</option>
                                        </select>
                                    </div>
                                </div>

                                <button class="mt-2 btn btn-primary btn-lg"><i class="pe-7s-plus"> </i> Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="main-card mb-3 card">
                        <div class="card-header">Notificações ativas

                        </div>
                        <div class="table-responsive">
                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                <tr>
                                    <th class="text-center">ID</th>
                                    <th class="text-center">Link</th>
                                    <th class="text-center">Canal</th>
                                    <th class="text-center">Ações</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="text-center text-muted">1</td>

                                    <td class="text-center"><i class="pe-7s-link btn-icon-wrapper"> </i> <a href="#" target="_blank">Recado importante para donos de restaurantes</a></td>
                                    <td class="text-center">
                                        <div class="badge badge-success">Restaurantes</div>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-outline-primary" data-toggle="modal" data-target="#modalEditarNotificacao"><i class="pe-7s-note btn-icon-wrapper"> </i> Editar</button>
                                        <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalDeletarNotificacao"><i class="pe-7s-trash btn-icon-wrapper"> </i> Deletar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center text-muted">2</td>
                                    <td class="text-center"><i class="pe-7s-link btn-icon-wrapper"> </i> <a href="#" target="_blank">Faça um upgrade no seu plano. E tenha mais recursos.</a></td>
                                    <td class="text-center">
                                        <div class="badge badge-success">Geral</div>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-outline-primary" data-toggle="modal" data-target="#modalEditarNotificacao"><i class="pe-7s-note btn-icon-wrapper"> </i> Editar</button>
                                        <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalDeletarNotificacao"><i class="pe-7s-trash btn-icon-wrapper"> </i> Deletar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center text-muted">3</td>

                                    <td class="text-center"><i class="pe-7s-link btn-icon-wrapper"> </i> <a href="#" target="_blank">Como gerenciar uma pizzaria</a></td>
                                    <td class="text-center">
                                        <div class="badge badge-success">Pizzarias</div>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-outline-primary" data-toggle="modal" data-target="#modalEditarNotificacao"><i class="pe-7s-note btn-icon-wrapper"> </i> Editar</button>
                                        <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalDeletarNotificacao"><i class="pe-7s-trash btn-icon-wrapper"> </i> Deletar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center text-muted">4</td>

                                    <td class="text-center"><i class="pe-7s-link btn-icon-wrapper"> </i> <a href="#" target="_blank">Dica para donos de supermercados</a></td>
                                    <td class="text-center">
                                        <div class="badge badge-success">Supermercados</div>
                                    </td>
                                    <td class="text-center">
                                        <button class="btn btn-outline-primary" data-toggle="modal" data-target="#modalEditarNotificacao"><i class="pe-7s-note btn-icon-wrapper"> </i> Editar</button>
                                        <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalDeletarNotificacao"><i class="pe-7s-trash btn-icon-wrapper"> </i> Deletar</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    </div>

</div>
</div>
</div>






<?php require_once('footer.php') ?>

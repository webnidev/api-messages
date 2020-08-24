<?php require_once('curl/request.php');
$re = new Request("http://localhost:5000/message");
$messages = $re->exec();
?>

<div class="app-main__outer">
    <div class="app-main__inner">
        <div class="app-page-title">
            <div class="page-title-wrapper">
                <div class="page-title-heading">
                    <div class="page-title-icon">
                        <i class="pe-7s-graph3">
                        </i>
                    </div>
                    <div>Dashboard - Gestão de Links de Tutoriais
                        <div class="page-title-subheading">Crie e gerencie links/atalhos de tutoriais para serem listados no painel dos clientes.
                        </div>
                    </div>
                </div>
            </div>



            <div class="row">
                <div class="col-md-4">
                    <div class="main-card mb-3 card">
                        <div class="card-body"><h5 class="card-title">Cadastrar link de tutorial</h5>
                            <form class="" action="curl/actions/cadastro.php" method="POST">
                                <div class="form-row">
                                    <div class="col-md-12">
                                        <div class="position-relative form-group">
                                            <label class="" for="titulo_suporte">Título</label>
                                            <input class="form-control" id="titulo_suporte"
                                                   name="titulo_suporte"
                                                   placeholder="Digite o título" type="text"></div>
                                    </div>

                                </div>
                                <div class="form-row">
                                    <div class="col-md-12">
                                        <div class="position-relative form-group">
                                            <label class="" for="url_suporte">Link</label>
                                            <input
                                                class="form-control" id="url_suporte"
                                                name="url_suporte" placeholder="Insira o link"
                                                type="url">
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="mt-2 btn btn-primary btn-lg"><i class="pe-7s-plus"> </i> Cadastrar</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="main-card mb-3 card">
                        <div class="card-header">Links Ativos

                        </div>
                        <div class="table-responsive">
                            <table class="align-middle mb-0 table table-borderless table-striped table-hover">
                                <thead>
                                <tr>
                                    <th class="text-center">ID</th>
                                    <th class="text-center">Link</th>
                                    <th class="text-center">Ações</th>
                                </tr>
                                </thead>
                                <tbody>
                                <?php  

                                foreach ($messages->messages as $message){
                                    echo "<tr>";
                                    echo  "<td class='text-center text-muted'>".$message->message_id."</td>";
                                    
                                    echo  "<td class='text-center'><i class='pe-7s-link btn-icon-wrapper'> </i> <a href='#' target='_blank'>".$message->message."</a></td>";

                                    echo    "<td class='text-center'>";
                                    echo     "<button class='btn btn-outline-primary' data-toggle='modal' data-target='#modalEditarTutorial'><i class='pe-7s-note btn-icon-wrapper'> </i> Editar</button>";
                                    echo     "<button class='btn btn-outline-danger' data-toggle='modal' data-target='#modalDeletarTutorial'><i class='pe-7s-trash btn-icon-wrapper'> </i> Deletar</button></td>";
                                    echo "</tr>";
                                }

                                ?>
                                <!--tr>
                                    <td class="text-center text-muted">2</td>

                                    <td class="text-center"><i class="pe-7s-link btn-icon-wrapper"> </i> <a href="#" target="_blank">Como cadastrar e gerenciar produtos</a></td>
                                    <td class="text-center">
                                        <button class="btn btn-outline-primary" data-toggle="modal" data-target="#modalEditarTutorial"><i class="pe-7s-note btn-icon-wrapper"> </i> Editar</button>
                                        <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalDeletarTutorial"><i class="pe-7s-trash btn-icon-wrapper"> </i> Deletar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center text-muted">3</td>

                                    <td class="text-center"><i class="pe-7s-link btn-icon-wrapper"> </i> <a href="#" target="_blank">Como monitorar e gerenciar pedidos</a></td>
                                    <td class="text-center">
                                        <button class="btn btn-outline-primary" data-toggle="modal" data-target="#modalEditarTutorial"><i class="pe-7s-note btn-icon-wrapper"> </i> Editar</button>
                                        <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalDeletarTutorial"><i class="pe-7s-trash btn-icon-wrapper"> </i> Deletar</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-center text-muted">4</td>

                                    <td class="text-center"><i class="pe-7s-link btn-icon-wrapper"> </i> <a href="#" target="_blank">Como cadastrar e gerenciar o horário de funcionamento</a></td>
                                    <td class="text-center">
                                        <button class="btn btn-outline-primary" data-toggle="modal" data-target="#modalEditarTutorial"><i class="pe-7s-note btn-icon-wrapper"> </i> Editar</button>
                                        <button class="btn btn-outline-danger" data-toggle="modal" data-target="#modalDeletarTutorial"><i class="pe-7s-trash btn-icon-wrapper"> </i> Deletar</button>
                                    </td>
                                </tr-->
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
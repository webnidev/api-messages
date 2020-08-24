 echo "<tr>";
                               echo  "<td class='text-center text-muted'>".$message->message_id."</td>";

echo  "<td class='text-center'><i class='pe-7s-link btn-icon-wrapper'> </i> <a href='#' target='_blank'>".$message->message."</a></td>";
                                echo    "<td class='text-center'>";
echo     "<button class='btn btn-outline-primary' data-toggle='modal' data-target='#modalEditarTutorial'><i class='pe-7s-note btn-icon-wrapper'> </i> Editar</button>";
echo     "<button class='btn btn-outline-danger' data-toggle='modal' data-target='#modalDeletarTutorial'><i class='pe-7s-trash btn-icon-wrapper'> </i> Deletar</button></td></tr>";




                                foreach ($re->exec()->messages as $message){ 
                                        
                                 }
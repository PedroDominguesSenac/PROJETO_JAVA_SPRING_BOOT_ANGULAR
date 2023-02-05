package com.projetogame.projetointegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projetogame.projetointegrador.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

}

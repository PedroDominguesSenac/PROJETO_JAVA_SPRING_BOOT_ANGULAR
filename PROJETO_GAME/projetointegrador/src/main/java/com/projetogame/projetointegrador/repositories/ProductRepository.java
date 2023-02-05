package com.projetogame.projetointegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projetogame.projetointegrador.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}

package com.projetogame.projetointegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projetogame.projetointegrador.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}

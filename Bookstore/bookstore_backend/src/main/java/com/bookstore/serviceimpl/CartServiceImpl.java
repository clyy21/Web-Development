package com.bookstore.serviceimpl;

import com.bookstore.dao.CartDao;
import com.bookstore.entity.CartItem;
import com.bookstore.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CartServiceImpl implements CartService{
  CartDao cartDao;

  @Autowired
  void setCartDao(CartDao cartDao) {this.cartDao=cartDao;}

  @Override
  public List<CartItem> getCartItems() {
    return cartDao.getCartItems();
  }

  @Override
  public List<CartItem> getRealCartItems() {return cartDao.getRealCartItems();}

  @Override
  public void addCartItem(Integer bookId, Integer amount, Boolean active) {
    cartDao.addCartItem(bookId,amount,active);
  }

  @Override
  public void setCartItem(Integer bookId,Boolean active) {
    cartDao.setCartItem(bookId,active);
  }

  @Override
  public void deleteCartItem(Integer bookId){
    cartDao.deleteCartItem(bookId);
  }

  @Override
  @Transactional
//  @Transactional(propagation = Propagation.REQUIRES_NEW)
  public void submitCart(Integer userId) {
//    cartDao.submitCart(userId);

    //为了测试事务属性，此处改为四步下单

//    int result = 10 / 0;
    List<CartItem> myItem = cartDao.addOrder(userId);
//    int result = 10 / 0;

    try {
    cartDao.addOrderItem(userId);

    }catch (Exception e){
      e.printStackTrace();
    }

//    int result = 10 / 0;

    cartDao.deleteCart(userId);
    cartDao.updateBookInventory(userId, myItem);
  }

}

package com.backend.backend.controller;

import com.backend.backend.model.User;
import com.backend.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;


    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public void save(User user){
        userRepository.save(user);
    }



    @GetMapping("/update")
    public boolean update(){
        //userRepository.save();
        return false; //trabalhar neste retorno
    }

    @GetMapping("/delete")
    public void delete(){
        //userRepository.deleteById();

    }

    @GetMapping("/getAll")
    public List<User> getUser(){
        List<User> list = userRepository.findAll();
        return list;
    }

}

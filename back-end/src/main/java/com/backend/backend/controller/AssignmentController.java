package com.backend.backend.controller;

import com.backend.backend.model.Assignment;
import com.backend.backend.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/assignment")
public class AssignmentController {

    @Autowired
    private AssignmentRepository assignmentRepository;

    /*
    @GetMapping("/save")
    public boolean save(){
        assignmentRepository.save();
        return true;
    }

    @GetMapping("/update")
    public boolean update(){
        assignmentRepository.save();
        return true;
    }

    @GetMapping("/delete")
    public boolean delete(){
        assignmentRepository.deleteById();
        return true;
    }

    @GetMapping("/findAll")
    public List<Assignment> findAll(){
        List<Assignment> list = assignmentRepository.findAll();
        return list;
    }

    @GetMapping("/findById")
    public Assignment update(){
        Assignment assignment = assignmentRepository.findById();
        return assignment;
    }

     */
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list = [
    { emp_id: 1, name: 'Rohit', sname: 'Patil', designation: 'Sr. Software Enginner', access_status: 'Active' },
    { emp_id: 2, name: 'Harshal', sname: 'Patil', designation: 'Software Enginner', access_status: 'Active' },
    { emp_id: 3, name: 'Neha', sname: 'Patil', designation: 'Manager', access_status: 'Active' },
    { emp_id: 4, name: 'Sanjay', sname: 'Patil', designation: 'Lead Enginner', access_status: 'Active' },
    { emp_id: 5, name: 'Pratibha', sname: 'Patil', designation: 'Manager', access_status: 'Active' }
  ]

  changeStatus(i: number, status: any) {
    switch (status) {
      case "Active":
        this.list[i].access_status = 'In Active';
        break;
      case "In Active":
        this.list[i].access_status = 'Active';
        break;
    }

  }

}

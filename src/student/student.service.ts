import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Doe', age: 23 },
    { id: 2, name: 'John Ali', age: 33 },
    { id: 3, name: 'John Kashim', age: 34 },
  ];

  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((student) => student.id === id);
    if (!student) throw new NotFoundException(`Student with id ${id} not found`);
    return student;
  }

  createStudent(data: {name: string; age: number}) {
    const newStudent = {
      id: Date.now(),
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(id: number, data: {name: string, age: number}) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException(`Student with id ${id} not found`);
    this.students[index] = {id, ...data};
    return this.students[index];
  }

  patchStudent(id: number, data: Partial<{name: string, age: number}>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1)
      throw new NotFoundException(`Student with id ${id} not found`);
    
    return this.students.splice(index, 1);
  }
}

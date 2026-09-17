import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service.js';
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @Get()
  getAll() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  createStudent(@Body() body: { name: string; age: number }) {
    return this.studentService.createStudent(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: { name: string; age: number }) {
    return this.studentService.updateStudent(Number(id), body);
  }

  @Put(':id')
  patch(@Param('id') id: string, @Body() body: Partial<{ name: string; age: number }>) {
    return this.studentService.patchStudent(Number(id), body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}

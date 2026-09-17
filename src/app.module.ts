import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ProductController } from './product/product.controller.js';
import { ProductService } from './product/product.service.js';
import { EmployeeModule } from './employee/employee.module.js';
import { CategoryModule } from './category/category.module.js';
import { StudentModule } from './student/student.module.js';
import { CustomerModule } from './customer/customer.module.js';

@Module({
  imports: [EmployeeModule, CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}

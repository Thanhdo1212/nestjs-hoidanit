import { IsEmail, IsNotEmpty } from 'class-validator';

//data transfer object // class = { }
export class CreateCompanyDto {
  @IsNotEmpty({ message: 'Tên công ty không được để trống' })
  name: string;

  @IsNotEmpty({ message: 'Địa chỉ không được để trống' })
  address: string;

  @IsNotEmpty({ message: 'Mô tả không được để trống' })
  description: string;

  @IsNotEmpty({ message: 'Logo không được để trống' })
  logo: string;
}

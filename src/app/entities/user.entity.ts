import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({
    synchronize: true,
})

export class User {
    // 编号
    @PrimaryGeneratedColumn()
    id: number;
    // 账号
    @Column()
    name: string;
    // 密码
    @Column()
    pwd: string;
    // 手机号
    @Column()
    phone: string;
    // 性别
    @Column()
    gender: boolean;
    // 头像
    @Column()
    avatar: string;
}

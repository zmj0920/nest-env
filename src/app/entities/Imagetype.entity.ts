import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { IMG } from './img.entity';
@Entity({
    synchronize: true,
})

export class ImagetType {
    // 编号
    @PrimaryGeneratedColumn()
    id: number;
    // 类型名称
    @Column()
    type: string;

    @OneToMany(type => IMG, img => img.imagetType)
    imgs: IMG[];
}

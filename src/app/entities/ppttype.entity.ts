import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { PPT } from './ppt.entity';

@Entity({
    synchronize: true,
})

export class PPTType {
    // 编号
    @PrimaryGeneratedColumn()
    id: number;
    // 类型名称
    @Column()
    ppttype: string;

    @OneToMany(type => PPT, ppt => ppt.ppttype)
    ppts: PPT[];
}

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';

import { PPTType } from './ppttype.entity';
@Entity({
    synchronize: true,
})

export class PPT {
    // 编号
    @PrimaryGeneratedColumn()
    id: number;
    // ppt名称
    @Column()
    pptname: string;
    // 文件路径
    @Column()
    ppturl: string;
    // 图片
    @Column()
    pptimg: string;
    //  //PPT类型表
    // @Column()
    // ppttype:string;

    // 下载次数
    @Column()
    count: number;

    @ManyToOne(type => PPTType, ppttype => ppttype.ppts, { cascade: true })
    @JoinTable()
    ppttype: PPTType;
}

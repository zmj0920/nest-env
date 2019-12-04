import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinTable } from 'typeorm';
import { ImagetType } from './Imagetype.entity';

@Entity({
    synchronize: true,
})

export class IMG {
    // 编号
    @PrimaryGeneratedColumn()
    id: number;
    // ppt名称
    @Column()
    imgname: string;
    // 文件路径
    @Column()
    imgurl: string;
    // 图片
    @Column()
    img1: string;
    // 图片类型
    // @Column()
    // imgtype:string;
    // 下载次数
    @Column()
    count: number;

    @ManyToOne(type => ImagetType, imagetType => imagetType.imgs, { cascade: true })
    @JoinTable()
    imagetType: ImagetType;
}

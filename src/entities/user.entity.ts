import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column({length: 60})
    name: string;

    @Column({length: 120, unique: true})
    email: string;

    @Column({length: 120})
    password: string;

    @Column()
    isAdm: boolean;

    @Column()
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}

import { TypeOrmModule } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity ({name: 'usuario'})

export class usuario {
    @PrimaryGeneratedColumn({type:'int',})
    id:number;

    @Column ({ type: 'varchar'})
    usuario: string;

    @Column ({type: 'varchar'})
    contraseña: string;
}


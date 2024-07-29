import { Profile } from "src/profile/entities/profile.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity({ name: 'user' })
@Unique(['userName'])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100, name: 'user_name' })
    userName: string;

    @Column({ type: 'varchar', length: 300, name: 'password' })
    password: string;

    @Column({ type: 'timestamp with time zone', name: 'created' })
    created: Date;

    @Column({ type: 'timestamp with time zone', name: 'last_modified' })
    modified: Date;

    @OneToOne(()=>Profile)
    @JoinColumn({name:'profile_fk'})
    profile: Profile;
}
import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
    tableName:"Registro",
    timestamps:false
})
class RegistroModel extends Model{
    @Column({
        type:DataType.INTEGER,
        primaryKey:true
    })
    public id_Venta!:number
}
export default RegistroModel;
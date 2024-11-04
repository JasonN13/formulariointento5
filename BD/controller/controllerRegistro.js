import { db } from "../db/conexio.js";


const getRegistrousuarios = async (req, res) => {
  const sql = `SELECT * FROM registro`

  const result = await db.query(sql);
  return res.json(result)
}

const postRegistro = async (req, res) => {
  const { nombre, apellido, telefono, correo, fnacimiento,edad } = req.body;

  const dataisert = [nombre, apellido, telefono, correo, fnacimiento,edad]

  const sql = `insert into registro
                  (nombre,apellido,telefono,correo,fnacimiento,edad)
                  values
                   ($1,$2,$3,$4,$5,$6) returning nombre,apellido,telefono,correo,fnacimiento,edad`

  const result = await db.query(sql, dataisert)

  return res.json({ mensaje: "Se agregó el Usuario exitosamente", Obj_indertado: result });
}

const putRegistro = async (req, res) => {
  const { id, nombre, apellido, telefono, correo, fnacimiento } = req.body;

  const dataUpdate = [nombre, apellido, telefono, correo, fnacimiento, id]

  const sql = `UPDATE registro
                   SET nombre = $1,
                   apellido = $2,
                   telefono = $3,
                   correo = $4,
                   fnacimiento = $5
                   WHERE id = $6
                   RETURNING nombre, apellido, telefono, correo, fnacimiento`;

  const result = await db.query(sql, dataUpdate)

  return res.json({ mensaje: "Se agregó el Usuario exitosamente", Obj_indertado: result });
}



const deleteRegistrousuarios = async (req, res) => {
  const { id } = req.params;
  

  const sql = `Delete  FROM registro Where id = $1 RETURNING *`;


  try {
    const result = await db.query(sql, [id]); 
    if (result.rowCount === 1) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    

    return res.json({ mensaje: "Usuario eliminado exitosamente", Obj_eliminado: result.rows[0] });
  } catch (error) {
    
    return res.status(500).json({ mensaje: "Error al eliminar el usuario", error });
  }
}



export { getRegistrousuarios, postRegistro, putRegistro, deleteRegistrousuarios }
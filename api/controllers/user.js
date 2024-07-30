import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q , (err, data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res ) => {
    const query = "INSERT INTO usuarios(`nome`, `email`, `fone`, `datanascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.datanascimento,
    ];

    db.query(query, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso")
    });
};

export const updateUser = (req, res) => {
    const id = req.params.id;
    const query = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `datanascimento` = ? WHERE `id` = ?;"

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.datanascimento,
    ];

    db.query(query , [...values, id]), (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    }
}

export const deleteUser = (req, res) => {
    const id = req.params.id;
    const query = "DELETE FROM usuarios WHERE `id` = ?";
    db.query(query, [req.params.id]), (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Usuario deletado com sucesso");
    }
}

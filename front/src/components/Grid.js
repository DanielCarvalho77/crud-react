import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all;
`
const Thead = styled.thead``

const Tr = styled.tr``

const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`

const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`

const Tbody = styled.tbody``

const Grid = ({users}) => {
    return (

        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th onlyWeb>Fone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>

                {users.map((user, i) =>(
                    <Tr key={i}>
                        <Td width="30%">{user.nome}</Td>
                        <Td width="30%">{user.email}</Td>
                        <Td width="20%" onlyWeb>{user.fone}</Td>
                        <Td alignCenter width="5%">
                            <FaEdit/>
                        </Td>
                        <Td alignCenter width="5%">
                            <FaTrash/>
                        </Td>
                    </Tr>
                ))} 

            </Tbody>
        </Table>

    );
};

export default Grid;

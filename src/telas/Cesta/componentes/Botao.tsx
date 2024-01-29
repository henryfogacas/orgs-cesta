import React from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto'

export type BotaoProps = {
    botao: string;
};

const Botao: React.FC<BotaoProps> = ({ botao }) => {
    return <>
        <TouchableOpacity style={estilos.botao} onPress={() => { }}>
            <Texto style={estilos.textoBotao}>{botao}</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
})

export default Botao;
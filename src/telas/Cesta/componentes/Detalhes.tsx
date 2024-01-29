import React from "react";
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto'

export type DetalhesProps = {
    nome: string;
    logoFazenda: any;
    nomeFazenda: string;
    descricao: string;
    preco: string;
};

const Detalhes: React.FC<DetalhesProps> = ({ nome, logoFazenda, nomeFazenda, descricao, preco }) => {
    return <>
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={estilos.imagemFazenda} />
            <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
        </View>
        <Texto style={estilos.descricao}> {descricao}</Texto>
        <Texto style={estilos.preco}>{preco}</Texto>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 26,
        paddingHorizontal: 16,
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12,
    },
    imagemFazenda: {
        width: 32,
        height: 32,
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
})


export default Detalhes;
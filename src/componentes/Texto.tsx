import React, { ReactNode } from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

type TextoProps = {
    children: ReactNode;
    style?: TextStyle;
}

const Texto: React.FC<TextoProps> = ({ children, style }) => {
    let estilo = estilos.texto;
    if (style?.fontWeight === 'bold') {
        estilo = estilos.textoNegrito
    }

    return <Text style={[style, estilo]}>{children}</Text>;
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})

export default Texto;
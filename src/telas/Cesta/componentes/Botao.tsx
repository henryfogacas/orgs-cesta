import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Modal, View } from 'react-native';

import Texto from '../../../componentes/Texto'

export type BotaoProps = {
    botao: string;
    popup: string;
    fecharPopup: string;
};

const Botao: React.FC<BotaoProps> = ({ botao, popup, fecharPopup }) => {
    const [popupVisible, setPopupVisible] = useState(false)
    return <>
        <View style={estilos.container}>
            <TouchableOpacity style={estilos.botao} onPress={() => setPopupVisible(!popupVisible)} disabled={popupVisible}>
                <Texto style={estilos.textoBotao}>{botao}</Texto>
            </TouchableOpacity>

            {popupVisible && (
                <View style={estilos.popup}>
                    <Texto style={estilos.textoPopup}>{popup}</Texto>
                    <TouchableOpacity style={estilos.botao}
                        onPress={() => setPopupVisible(false)}
                    >
                        <Texto style={estilos.textoBotao}>{fecharPopup}</Texto>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    </>
}

const estilos = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        padding: 20,
    },
    botao: {
        backgroundColor: "#2A9F85",
        padding: 16,
        borderRadius: 6,
    },
    textoBotao: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
    },
    popup: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2, 
        top: 5 
    },
    textoPopup: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        textAlign: "center",
    }
})

export default Botao;
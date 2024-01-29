import React from "react";
import { StyleSheet, Image, View } from 'react-native';

import Topo, { TopoProps } from './componentes/Topo'
import Detalhes, { DetalhesProps } from "./componentes/Detalhes";
import Botao, { BotaoProps } from "./componentes/Botao";

type CestaProps = {
    topo: TopoProps;
    detalhes: DetalhesProps;
    botao: BotaoProps;
};

const Cesta: React.FC<CestaProps> = ({ topo, detalhes, botao }) => {
    return <>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Botao {...botao}/>
        </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 26,
        paddingHorizontal: 16,
    }
})

export default Cesta;
import React from "react";
import { StyleSheet, Image, View } from 'react-native';

import Topo, { TopoProps } from './componentes/Topo'
import Detalhes, { DetalhesProps } from "./componentes/Detalhes";

type CestaProps = {
    topo: TopoProps;
    detalhes: DetalhesProps;
};

const Cesta: React.FC<CestaProps> = ({ topo, detalhes }) => {
    return <>
    <Topo {...topo}/>
        <View style={estilos.cesta}>
            <Detalhes {...detalhes}/>
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
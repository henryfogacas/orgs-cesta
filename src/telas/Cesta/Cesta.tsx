import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';

import Topo, { TopoProps } from './componentes/Topo'
import Detalhes, { DetalhesProps } from "./componentes/Detalhes";
import Botao, { BotaoProps } from "./componentes/Botao";
import Item, { ItemProps, ListaDeItens } from "./componentes/Item";
import Texto from '../../componentes/Texto'

type CestaProps = {
    topo: TopoProps;
    detalhes: DetalhesProps;
    botao: BotaoProps;
    itens: ListaDeItens;
};

const Cesta: React.FC<CestaProps> = ({ topo, detalhes, botao, itens }) => {
    const renderItem = ({ item }: { item: ItemProps }) => (
        <Item nome={item.nome} imagem={item.imagem} />
    );
    return <>
        <FlatList
            data={itens.lista}
            renderItem={renderItem}
            keyExtractor={({ nome }) => nome}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes} />
                        <Botao {...botao} />
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    cesta: {
        paddingVertical: 26,
        paddingHorizontal: 16,
    },
})

export default Cesta;
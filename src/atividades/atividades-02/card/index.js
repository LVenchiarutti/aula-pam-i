import React from 'react';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { View, ScrollView } from 'react-native';
import styles from './styles';

const products = [
  {
    id: 1,
    title: 'Transformador Fiolux 1000VA',
    description: 'Transformador de voltagem bivolt de alta qualidade.',
    price: 'R$ 299,90',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Suporte de Micro-ondas Brasforma',
    description: 'Suporte resistente para micro-ondas, fácil instalação.',
    price: 'R$ 89,90',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Lâmpada LED Foxlux 9W',
    description: 'Lâmpada econômica e de alta durabilidade.',
    price: 'R$ 19,90',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Ventilador Ventisol 40cm',
    description: 'Ventilador potente, ideal para dias quentes.',
    price: 'R$ 149,90',
    image: 'https://via.placeholder.com/150',
  },
];

const ProductCard = ({ product }) => (
  <Card style={styles.card}>
    <Card.Cover source={{ uri: product.image }} />
    <Card.Content>
      <Title>{product.title}</Title>
      <Paragraph>{product.description}</Paragraph>
      <Paragraph style={styles.price}>{product.price}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button mode="contained" onPress={() => console.log(`Comprando ${product.title}`)}>
        Comprar
      </Button>
    </Card.Actions>
  </Card>
);

const ProductList = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ScrollView>
  );
};

export default ProductList;
